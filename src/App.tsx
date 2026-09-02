import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import CareerFooter from "./components/CareerFooter";
import CareerHelix from "./components/CareerHelix";
import DomainDetail, { type CardTransitionOrigin } from "./components/DomainDetail";
import IntroSection from "./components/IntroSection";
import ReachOutPage from "./components/ReachOutPage";
import { cardFromUrl, cards, careerSlug } from "./data/careerCards";
import { domainDetails } from "./data/domainDetails";
import { useCareerHelix } from "./hooks/useCareerHelix";
import {
  prefersReducedMotion,
  supportsNativePageTransitions,
  type ViewTransitionDocument,
} from "./utils/pageTransitions";

export default function App() {
  const [selectedCard, setSelectedCard] = useState<number | null>(cardFromUrl);
  const [cardTransitionOrigin, setCardTransitionOrigin] =
    useState<CardTransitionOrigin | null>(null);
  const [isReachOutOpen, setIsReachOutOpen] = useState(
    () => Boolean(history.state?.careerPortalReachOut),
  );
  const openCardTimer = useRef<number | null>(null);
  const {
    activeIndex,
    cardElementsRef,
    goToCard,
    helixScrollRef,
    introScrollRef,
    introStageRef,
    siteRef,
  } = useCareerHelix(isReachOutOpen);

  const runPageTransition = useCallback((update: () => void) => {
    const transitionDocument = document as ViewTransitionDocument;
    if (!supportsNativePageTransitions()) {
      update();
      return;
    }
    transitionDocument.startViewTransition?.(() => flushSync(update));
  }, []);

  useEffect(() => () => {
    if (openCardTimer.current !== null) window.clearTimeout(openCardTimer.current);
  }, []);

  useEffect(() => {
    const syncPageWithHistory = () => {
      const nextCard = cardFromUrl();
      const nextReachOutState = Boolean(history.state?.careerPortalReachOut);
      runPageTransition(() => {
        setSelectedCard(nextCard);
        setIsReachOutOpen(nextReachOutState);
      });
    };

    window.addEventListener("popstate", syncPageWithHistory);
    return () => window.removeEventListener("popstate", syncPageWithHistory);
  }, [runPageTransition]);

  const showCard = (index: number) => {
    const cardRect = cardElementsRef.current[index]?.getBoundingClientRect();
    const transitionOrigin = cardRect
      ? { top: cardRect.top, left: cardRect.left, width: cardRect.width, height: cardRect.height }
      : null;
    const url = new URL(window.location.href);
    url.searchParams.set("career", careerSlug(cards[index].title));
    const currentState = history.state && typeof history.state === "object" ? history.state : {};

    history.pushState(
      { ...currentState, careerPortalDetail: true },
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
    runPageTransition(() => {
      setCardTransitionOrigin(transitionOrigin);
      setSelectedCard(index);
    });
  };

  const openCard = (index: number) => {
    if (index !== activeIndex) {
      goToCard(index);
      if (openCardTimer.current !== null) window.clearTimeout(openCardTimer.current);
      openCardTimer.current = window.setTimeout(() => {
        openCardTimer.current = null;
        showCard(index);
      }, 650);
      return;
    }

    if (openCardTimer.current !== null) {
      window.clearTimeout(openCardTimer.current);
      openCardTimer.current = null;
    }
    showCard(index);
  };

  const closeCard = useCallback(() => {
    const url = new URL(window.location.href);
    if (history.state?.careerPortalDetail && url.searchParams.has("career")) {
      history.back();
      return;
    }

    url.searchParams.delete("career");
    const currentState = history.state && typeof history.state === "object" ? { ...history.state } : {};
    delete currentState.careerPortalDetail;
    history.replaceState(currentState, "", `${url.pathname}${url.search}${url.hash}`);
    setSelectedCard(null);
  }, []);

  const openReachOut = () => {
    const currentState = history.state && typeof history.state === "object" ? history.state : {};
    history.pushState({ ...currentState, careerPortalReachOut: true }, "", window.location.href);
    setIsReachOutOpen(true);
  };

  const closeReachOut = () => {
    if (history.state?.careerPortalReachOut) {
      history.back();
      return;
    }
    setIsReachOutOpen(false);
  };

  if (isReachOutOpen) return <ReachOutPage onClose={closeReachOut} />;

  return (
    <main className="career-site" id="top" ref={siteRef} data-render-quality="high">
      <IntroSection scrollRef={introScrollRef} stageRef={introStageRef} onReachOut={openReachOut} />
      <CareerHelix
        activeIndex={activeIndex}
        selectedCard={selectedCard}
        scrollRef={helixScrollRef}
        cardElementsRef={cardElementsRef}
        onGoToCard={goToCard}
        onOpenCard={openCard}
        onReachOut={openReachOut}
      />
      <CareerFooter />
      {selectedCard !== null && (
        <DomainDetail
          detail={domainDetails[cards[selectedCard].title]}
          image={cards[selectedCard].image}
          accent={cards[selectedCard].accent}
          onClose={closeCard}
          participatesInPageTransition
          transitionOrigin={cardTransitionOrigin}
          useFallbackTransition={
            cardTransitionOrigin !== null &&
            !supportsNativePageTransitions() &&
            !prefersReducedMotion()
          }
        />
      )}
    </main>
  );
}
