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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Landing from "./pages/Landing";
// import ExplorePage from "./pages/Explore";
// import BuildPage from "./pages/BUILD"; 
// import ResourcePage from "./pages/Resource"; 
import NotFound from "./pages/NotFound";
import Footer from './components/Footer';

import HigherStudies from "./pages/resources/HigherStudies.tsx"; 
import SummerGuide from "./pages/resources/SummerGuide.tsx";
import Cat from "./pages/resources/cat.tsx";
import Upsc from "./pages/resources/upsc.tsx";

import Aiml from "./pages/explore/aiml.tsx";
import ConsultExplore from "./pages/explore/consultExplore.tsx"
import QuantExplore from "./pages/explore/quantExplore.tsx";

import SDEExplore from "./pages/explore/SDEexplore.tsx";
import AnalyticsExplore from "./pages/explore/AnalyticsExplore";

import CoreBuild from "./pages/build/CoreBuild";
import AnalyticsBuild from "./pages/build/AnalyticsBuild";
import SDE from "./pages/build/SDE";
import Quant from "./pages/build/quant";
import Consult from "./pages/build/consult.tsx";
import CoreExplore from "./pages/explore/coreExplore.tsx";
import InternshipGuide from "./pages/resources/InternshipGuide.tsx";
import StartupGuide from "./pages/resources/StartupGuide.tsx";
import QuantGuide from "./pages/resources/QuantGuide.tsx";




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
    <>
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
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Dynamic Explore Pages */}
        <Route path="/explore/sde" element={<SDEExplore />} />
        <Route path="/explore/quant" element={<QuantExplore />} />
        <Route path="/explore/core" element={<CoreExplore />} />
        <Route path="/explore/finance" element={<AnalyticsExplore />} />
        <Route path="/explore/ai-ml" element={<Aiml />} />       
        <Route path="/explore/consult" element={<ConsultExplore />} />


        {/* Dynamic Build Page */}
        <Route path="/BUILD/sde" element={<SDE />} />
        <Route path="/BUILD/quant" element={<Quant />} />
        <Route path="/BUILD/core" element={<CoreBuild />} />
        <Route path="/BUILD/finance" element={<AnalyticsBuild />} />
        <Route path="/BUILD/consult" element={<Consult />} />
        
        {/* Dynamic Resource page */}
        <Route path="/Resource/UPSC" element={<Upsc />} />
        <Route path="/Resource/CAT" element={<Cat />} />
        <Route path="/Resource/Higher_Studies" element={<HigherStudies />} />
        <Route path="/Resource/summer_guide" element={<SummerGuide />} />
        <Route path="/Resource/internship_guide" element={<InternshipGuide/>} />
        <Route path="/Resource/startup_guide" element={<StartupGuide/>} />
        <Route path="/Resource/quant_guide" element={<QuantGuide/>} />
               
        {/* <Route path="/explore/:profileName" element={<ExplorePage />} /> */}
        {/* <Route path="/build/:profileName" element={<BuildPage />} /> */}
        {/* <Route path="/Resource/:profileName" element={<ResourcePage />} /> */}

        {/* ALL OTHER CATCH */}
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}
