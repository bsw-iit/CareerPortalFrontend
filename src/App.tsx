import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  MessageCircle,
} from "lucide-react";
import DomainDetail, {
  type CardTransitionOrigin,
} from "./components/DomainDetail";
import CareerFooter from "./components/CareerFooter";
import { domainDetails } from "./data/domainDetails";
import bswLogo from "./assets/favicon.png";
import consultImage from "./assets/landing/consult.webp";
import coreImage from "./assets/landing/core.webp";
import quantImage from "./assets/landing/quant.webp";
import techImage from "./assets/landing/sde.webp";
import analyticsImage from "./assets/landing/analytics.webp";
import exploreImage from "./assets/landing/yosemite-valley.jpg";
import upscImage from "../upscimage.jpeg";
import catImage from "./assets/Resource/CAT-card.webp";
import higherStudiesImage from "./assets/Resource/Higher_Studies-card.webp";
import startupImage from "./assets/landing/Resource.jpg";

type CareerCard = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  accent: string;
};

const careerCards: CareerCard[] = [
  {
    eyebrow: "Start here",
    title: "Explore different careers",
    description: "Find the work that feels like you.",
    image: exploreImage,
    accent: "#d8ff57",
  },
  {
    eyebrow: "Strategy",
    title: "Consulting",
    description: "Turn difficult questions into clear direction.",
    image: consultImage,
    accent: "#ff6b43",
  },
  {
    eyebrow: "Engineering",
    title: "Core",
    description: "Design the systems that keep the world moving.",
    image: coreImage,
    accent: "#8dd7ff",
  },
  {
    eyebrow: "Markets",
    title: "Quant",
    description: "Where mathematics meets fast decisions.",
    image: quantImage,
    accent: "#f4c6ff",
  },
  {
    eyebrow: "Digital",
    title: "Tech",
    description: "Build useful things for millions of people.",
    image: techImage,
    accent: "#a8ffcf",
  },
  {
    eyebrow: "Insights",
    title: "Analytics",
    description: "Turn complex data into decisions that matter.",
    image: analyticsImage,
    accent: "#ffd66b",
  },
  {
    eyebrow: "Public service",
    title: "UPSC",
    description: "Prepare to serve, lead, and shape public policy.",
    image: upscImage,
    accent: "#ff9d7a",
  },
  {
    eyebrow: "Management",
    title: "CAT",
    description: "Open the door to India’s leading business schools.",
    image: catImage,
    accent: "#7ee7ff",
  },
  {
    eyebrow: "Academia",
    title: "Higher Studies",
    description: "Go deeper through research and advanced learning.",
    image: higherStudiesImage,
    accent: "#c9a8ff",
  },
  {
    eyebrow: "Entrepreneurship",
    title: "Startup",
    description: "Take an idea from first sketch to real-world impact.",
    image: startupImage,
    accent: "#ffef8a",
  },
];

const cards = (() => {
  const [firstCard, ...shuffleableCards] = careerCards;

  for (let index = shuffleableCards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffleableCards[index], shuffleableCards[randomIndex]] = [
      shuffleableCards[randomIndex],
      shuffleableCards[index],
    ];
  }

  return [firstCard, ...shuffleableCards];
})();

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const DESKTOP_CARD_WIDTH = 720;
const MOBILE_CARD_WIDTH_RATIO = 0.84;
const MOBILE_BREAKPOINT = 620;

const getHelixRadiusScale = () =>
  window.innerWidth <= MOBILE_BREAKPOINT
    ? (window.innerWidth * MOBILE_CARD_WIDTH_RATIO) / DESKTOP_CARD_WIDTH
    : 1;

const getCardPosition = (
  index: number,
  progress: number,
  radiusScale = getHelixRadiusScale(),
) => {
  const relative = index - progress;
  const theta = relative * 1.2;
  const distance = Math.abs(relative);

  return {
    x: Math.sin(theta) * 430 * radiusScale,
    y: relative * 185,
    z: (Math.cos(theta) * 330 - 330) * radiusScale,
    rotateY: -Math.sin(theta) * 43,
    rotateZ: Math.sin(theta * 0.7) * -2.6,
    opacity: clamp(1 - distance * 0.2, 0.12, 1),
    distance,
  };
};

// This helix is a CSS 3D scene rather than a WebGL scene. Keeping the cards as
// DOM nodes preserves crisp, accessible text and avoids shipping a 3D runtime.
// The hot path below behaves like a tiny batched renderer: it reuses the same
// nodes and only writes compositor-friendly transform/opacity values.
const setCardPosition = (
  element: HTMLElement,
  index: number,
  progress: number,
  radiusScale: number,
) => {
  const relative = index - progress;
  const theta = relative * 1.2;
  const sinTheta = Math.sin(theta);
  const distance = Math.abs(relative);

  // A single transform assignment replaces five CSS custom-property writes.
  // Values are rounded to avoid producing needlessly long style strings.
  const x = Math.round(sinTheta * 4300 * radiusScale) / 10;
  const y = Math.round(relative * 1850) / 10;
  const z = Math.round((Math.cos(theta) * 330 - 330) * radiusScale * 10) / 10;
  const rotateY = Math.round(-sinTheta * 430) / 10;
  const rotateZ = Math.round(Math.sin(theta * 0.7) * -26) / 10;

  element.style.transform = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
  element.style.opacity = `${clamp(1 - distance * 0.2, 0.12, 1)}`;
};

type RenderQuality = 0 | 1 | 2;

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => void;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const supportsNativePageTransitions = () =>
  Boolean((document as ViewTransitionDocument).startViewTransition) &&
  !prefersReducedMotion();

const QUALITY_NAMES = ["low", "balanced", "high"] as const;
const QUALITY_VISIBLE_RADIUS = [1.8, 2.7, 3.6] as const;

const getInitialQuality = (): RenderQuality => {
  // devicePixelRatio is capped at 2 for the render budget. The current scene
  // is DOM based, but this also keeps the policy correct if a canvas layer is
  // added later (its backing store must use this capped value).
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cores = navigator.hardwareConcurrency || 4;
  return dpr >= 2 && cores <= 4 ? 1 : 2;
};

const careerSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const cardFromUrl = () => {
  const slug = new URLSearchParams(window.location.search).get("career");
  if (!slug) return null;

  const index = cards.findIndex((card) => careerSlug(card.title) === slug);
  return index === -1 ? null : index;
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const targetProgress = useRef(0);
  const targetIntroProgress = useRef(0);
  const renderedProgress = useRef(0);
  const renderedIntroProgress = useRef(0);
  const activeIndexRef = useRef(0);
  const frame = useRef<number | null>(null);
  const copyTimer = useRef<number | null>(null);
  const openCardTimer = useRef<number | null>(null);
  const site = useRef<HTMLElement | null>(null);
  const helixScroll = useRef<HTMLElement | null>(null);
  const introScroll = useRef<HTMLElement | null>(null);
  const introStage = useRef<HTMLDivElement | null>(null);
  const cardElements = useRef<Array<HTMLElement | null>>([]);
  const [selectedCard, setSelectedCard] = useState<number | null>(cardFromUrl);
  const [cardTransitionOrigin, setCardTransitionOrigin] =
    useState<CardTransitionOrigin | null>(null);
  const [isReachOutOpen, setIsReachOutOpen] = useState(
    () => Boolean(history.state?.careerPortalReachOut),
  );
  const [hasCopiedNumber, setHasCopiedNumber] = useState(false);

  const runPageTransition = useCallback((update: () => void) => {
    const transitionDocument = document as ViewTransitionDocument;
    if (!supportsNativePageTransitions()) {
      update();
      return;
    }

    transitionDocument.startViewTransition(() => {
      flushSync(update);
    });
  }, []);

  const whatsappUrl = "https://wa.me/919140852144";

  const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText("+91 91408 52144");
    setHasCopiedNumber(true);
    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => {
      copyTimer.current = null;
      setHasCopiedNumber(false);
    }, 1800);
  };

  useEffect(() => {
    if (isReachOutOpen) return;

    let helixTop = 0;
    let helixHeight = 0;
    let viewportHeight = window.innerHeight;
    let helixRadiusScale = getHelixRadiusScale();
    let lastFrameTime = 0;
    let averageFrameTime = 16.67;
    let sampledFrames = 0;
    let fastFrames = 0;
    let quality = getInitialQuality();
    let resizeFrame: number | null = null;
    let introInView = false;
    let helixInView = false;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Typed arrays are allocated once and reused by every frame, avoiding
    // temporary arrays/objects and the garbage-collection spikes they cause.
    const cardVisibility = new Uint8Array(cards.length);
    const cardPromotion = new Uint8Array(cards.length);
    cardVisibility.fill(255);
    cardPromotion.fill(255);

    const applyQuality = () => {
      if (site.current) {
        site.current.dataset.renderQuality = QUALITY_NAMES[quality];
        site.current.style.setProperty(
          "--render-dpr",
          `${Math.min(window.devicePixelRatio || 1, 2)}`,
        );
      }
    };

    const clearMotionHints = () => {
      introScroll.current?.classList.remove("is-animating");
      if (introStage.current) introStage.current.style.willChange = "auto";

      for (let index = 0; index < cardElements.current.length; index += 1) {
        const element = cardElements.current[index];
        if (element && cardPromotion[index]) element.style.willChange = "auto";
        cardPromotion[index] = 0;
      }
    };

    const setStageMotionState = () => {
      if (introScroll.current) {
        introScroll.current.dataset.motion = introInView ? "running" : "paused";
      }
      if (helixScroll.current) {
        helixScroll.current.dataset.motion = helixInView ? "running" : "paused";
      }
    };

    const measure = () => {
      const helixSection = helixScroll.current;
      viewportHeight = window.innerHeight;
      helixRadiusScale = getHelixRadiusScale();

      if (helixSection) {
        helixTop = helixSection.getBoundingClientRect().top + window.scrollY;
        helixHeight = helixSection.offsetHeight;
      }
    };

    const updateTarget = () => {
      const scrollY = window.scrollY;

      if (helixHeight > 0) {
        const introTravel = viewportHeight * 0.9;
        const available = helixHeight - viewportHeight - introTravel;
        const localScroll = scrollY - helixTop - introTravel;
        targetProgress.current = available > 0
          ? clamp(localScroll / available, 0, 1) * (cards.length - 1)
          : 0;
      }

      targetIntroProgress.current = clamp(
        scrollY / Math.max(viewportHeight * 0.82, 1),
        0,
        1,
      );

      if (
        frame.current === null &&
        !document.hidden &&
        (introInView || helixInView)
      ) {
        frame.current = requestAnimationFrame(animate);
      }
    };

    const animate = (time: number) => {
      frame.current = null;
      const rawElapsed = lastFrameTime === 0 ? 16.67 : time - lastFrameTime;
      const elapsed = Math.min(rawElapsed, 64);
      lastFrameTime = time;
      const helixEase = reducedMotion ? 1 : 1 - Math.exp(-elapsed / 187);
      const introEase = reducedMotion ? 1 : 1 - Math.exp(-elapsed / 176);

      if (helixInView) {
        renderedProgress.current +=
          (targetProgress.current - renderedProgress.current) * helixEase;
      }
      if (introInView) {
        renderedIntroProgress.current +=
          (targetIntroProgress.current - renderedIntroProgress.current) * introEase;
      }

      if (helixInView) {
        const progress = renderedProgress.current;
        const visibleRadius = QUALITY_VISIBLE_RADIUS[quality];

        for (let index = 0; index < cardElements.current.length; index += 1) {
          const element = cardElements.current[index];
          if (!element) continue;

          const distance = Math.abs(index - progress);
          const visible = distance <= visibleRadius;
          const promoted = visible && distance < 2.15;

          // Virtualize cards outside the quality radius. Hidden cards receive
          // no transform writes and allocate no compositor texture.
          const visibilityValue = visible ? 1 : 0;
          const promotionValue = promoted ? 1 : 0;
          if (cardVisibility[index] !== visibilityValue) {
            cardVisibility[index] = visibilityValue;
            element.style.visibility = visible ? "visible" : "hidden";
          }
          if (!visible) continue;

          if (cardPromotion[index] !== promotionValue) {
            cardPromotion[index] = promotionValue;
            element.style.willChange = promoted ? "transform, opacity" : "auto";
          }
          setCardPosition(element, index, progress, helixRadiusScale);
        }
      }

      const introElement = introScroll.current;
      if (introElement && introInView) {
        const introValue = renderedIntroProgress.current;
        introElement.style.setProperty("--intro-progress", `${introValue}`);
        introElement.classList.add("is-animating");
        if (introStage.current) {
          introStage.current.style.willChange = "transform, opacity";
        }
      }

      const nextActiveIndex = clamp(
        Math.round(renderedProgress.current),
        0,
        cards.length - 1,
      );
      if (nextActiveIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextActiveIndex;
        setActiveIndex(nextActiveIndex);
      }

      // Exponential moving average reacts to sustained load, not one long
      // frame. Below 45 FPS we reduce visible cards/effects; stable headroom
      // gradually restores quality.
      if (lastFrameTime !== 0 && rawElapsed < 250) {
        averageFrameTime = averageFrameTime * 0.92 + rawElapsed * 0.08;
        sampledFrames += 1;

        if (sampledFrames >= 20 && averageFrameTime > 1000 / 45 && quality > 0) {
          quality = (quality - 1) as RenderQuality;
          sampledFrames = 0;
          fastFrames = 0;
          averageFrameTime = 16.67;
          applyQuality();
        } else if (averageFrameTime < 18) {
          fastFrames += 1;
          if (fastFrames >= 180 && quality < 2) {
            quality = (quality + 1) as RenderQuality;
            sampledFrames = 0;
            fastFrames = 0;
            applyQuality();
          }
        } else {
          fastFrames = 0;
        }
      }

      const helixSettling = helixInView &&
        Math.abs(targetProgress.current - renderedProgress.current) > 0.001;
      const introSettling = introInView &&
        Math.abs(targetIntroProgress.current - renderedIntroProgress.current) > 0.001;
      const isSettling = helixSettling || introSettling;

      if (isSettling && !document.hidden) {
        frame.current = requestAnimationFrame(animate);
      } else {
        lastFrameTime = 0;
        clearMotionHints();
      }
    };

    const handleResize = () => {
      // ResizeObserver/window resize can fire dozens of times per frame. One
      // measurement per animation frame prevents forced reflow loops.
      if (resizeFrame !== null) return;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = null;
        measure();
        applyQuality();
        updateTarget();
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (frame.current !== null) cancelAnimationFrame(frame.current);
        frame.current = null;
        lastFrameTime = 0;
        clearMotionHints();
      } else {
        updateTarget();
      }
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      updateTarget();
    };

    // The render loop is completely dormant when both animated sections are
    // outside the viewport. CSS keyframes are paused there as well.
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === introScroll.current) introInView = entry.isIntersecting;
          if (entry.target === helixScroll.current) helixInView = entry.isIntersecting;
        }
        setStageMotionState();
        if (!introInView && !helixInView) clearMotionHints();
        updateTarget();
      },
      { rootMargin: "150px 0px", threshold: 0 },
    );

    measure();
    applyQuality();
    if (introScroll.current) intersectionObserver.observe(introScroll.current);
    if (helixScroll.current) intersectionObserver.observe(helixScroll.current);
    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionPreference);
      intersectionObserver.disconnect();
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      if (resizeFrame !== null) cancelAnimationFrame(resizeFrame);
      frame.current = null;
      clearMotionHints();
    };
  }, [isReachOutOpen]);

  useEffect(() => () => {
    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
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

  const goToCard = (index: number) => {
    const helixSection = helixScroll.current;
    if (!helixSection) return;

    const introTravel = window.innerHeight * 0.9;
    const available = helixSection.offsetHeight - window.innerHeight - introTravel;
    window.scrollTo({
      top: helixSection.offsetTop + introTravel +
        (index / (cards.length - 1)) * available,
      behavior: "smooth",
    });
  };

  const showCard = (index: number) => {
    const cardRect = cardElements.current[index]?.getBoundingClientRect();
    const transitionOrigin = cardRect
      ? {
          top: cardRect.top,
          left: cardRect.left,
          width: cardRect.width,
          height: cardRect.height,
        }
      : null;
    const url = new URL(window.location.href);
    url.searchParams.set("career", careerSlug(cards[index].title));
    const currentState =
      history.state && typeof history.state === "object" ? history.state : {};

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
    const currentState =
      history.state && typeof history.state === "object" ? { ...history.state } : {};
    delete currentState.careerPortalDetail;
    history.replaceState(currentState, "", `${url.pathname}${url.search}${url.hash}`);
    setSelectedCard(null);
  }, []);

  const openReachOut = () => {
    const currentState =
      history.state && typeof history.state === "object" ? history.state : {};

    history.pushState(
      { ...currentState, careerPortalReachOut: true },
      "",
      window.location.href,
    );
    setIsReachOutOpen(true);
  };

  const closeReachOut = () => {
    if (history.state?.careerPortalReachOut) {
      history.back();
      return;
    }

    setIsReachOutOpen(false);
  };

  if (isReachOutOpen) {
    return (
      <main className="reach-simple-page">
        <header className="reach-simple-header">
          <button type="button" className="reach-simple-back" onClick={closeReachOut}>
            <ArrowLeft aria-hidden="true" />
            Back to careers
          </button>
          <a
            className="reach-simple-brand"
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              closeReachOut();
            }}
            aria-label="BSW home"
          >
            <img src={bswLogo} alt="" />
            <span>BSW Career Mentorship</span>
          </a>
          <span className="reach-simple-label">Career support</span>
        </header>

        <section className="reach-simple-content">
          <div className="reach-simple-details">
            <div className="reach-simple-section">
              <h2>You can reach out to us on WhatsApp if:</h2>
              <ul>
                <li>You have suggestions about the Career Portal or the Career Vertical in general.</li>
                <li>You are looking for a resource or guidance that you can&apos;t find on the portal yet.</li>
              </ul>
            </div>

            <div className="reach-simple-section">
              <h2>How it works:</h2>
              <ul>
                <li>Send a WhatsApp message with a little context about your situation.</li>
                <li>Tell me what you&apos;ve already tried and the specific help you&apos;re looking for, or share your feedback with us.</li>
                <li>I&apos;ll try to get back to you as soon as I can.</li>
              </ul>
            </div>
          </div>

          <section className="reach-simple-contact" aria-label="WhatsApp contact">
            <h2>WHATSAPP</h2>
            <div className="reach-simple-person">
              <div>
                <h2>Vansh Agrawal</h2>
                <p>BSW Coordinator, Career Vertical</p>
              </div>
            </div>
            <div className="reach-simple-actions">
            <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Chat on WhatsApp
              <ArrowUpRight aria-hidden="true" />
            </a>
            <button type="button" className="copy-number" onClick={copyPhoneNumber}>
              {hasCopiedNumber ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              <span>{hasCopiedNumber ? "Number copied" : "+91 91408 52144"}</span>
            </button>
            </div>
          </section>

        </section>

        <footer className="reach-simple-footer">
          <button type="button" onClick={closeReachOut}><strong>Home</strong> / Careers</button>
          <span>© 2026 · BSW IIT Delhi</span>
        </footer>
      </main>
    );
  }

  return (
    <main className="career-site" id="top" ref={site} data-render-quality="high">
      <section
        className="intro-scroll"
        ref={introScroll}
        aria-label="Board for Student Welfare introduction"
        style={{
          "--intro-progress": 0,
        } as React.CSSProperties}
      >
        <div className="intro-stage" ref={introStage}>
          <header className="site-header intro-header">
            <a className="brand" href="#top" aria-label="BSW home">
              <img src={bswLogo} alt="" />
              <span>BSW · IIT Delhi</span>
            </a>
            <p className="header-note">Career Portal</p>
            <div className="header-actions">
              <a
                className="guide-link"
                href="https://bswcareerportal.iitd.ac.in/static/Bluebook_BSW_IITD.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span className="guide-label-full">Open Intern Guide</span>
                <span className="guide-label-short">Intern Guide</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <button className="talk-link" type="button" onClick={openReachOut}>
                Reach out <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="intro-aurora" aria-hidden="true" />
          <div className="intro-orbit intro-orbit-one" aria-hidden="true" />
          <div className="intro-orbit intro-orbit-two" aria-hidden="true" />

          <div className="glass-intro">
            <div className="glass-glow" aria-hidden="true" />
            <div className="intro-logo-wrap">
              <img src={bswLogo} alt="Board for Student Welfare, IIT Delhi" />
            </div>
            <div className="intro-title-wrap">
              <span className="intro-kicker">The next chapter starts here</span>
              <h1>
                <span>Legacy.</span>
                <span>Potential.</span>
                <span>And you.</span>
              </h1>
              <p className="intro-description">
                <span>An initiative by the Board for Student Welfare</span>
                <span>to provide one-stop solution for all the queries</span>
                <span>ahead of placement and internship season</span>
              </p>
            </div>
            <div className="glass-corner glass-corner-top" aria-hidden="true" />
            <div className="glass-corner glass-corner-bottom" aria-hidden="true" />
          </div>

          <div className="intro-scroll-cue">
            <span>Scroll to enter</span>
            <i aria-hidden="true" />
          </div>
          <div className="dissolve-band" aria-hidden="true" />
          <div className="grain" aria-hidden="true" />
        </div>
      </section>

      <section
        className="helix-scroll"
        ref={helixScroll}
        style={{ minHeight: `${cards.length * 100 + 20}vh` }}
      >
        <section className="helix-stage" aria-label="Career paths">
        <header className="site-header">
          <a className="brand" href="#top" onClick={() => goToCard(0)}>
            <img src={bswLogo} alt="" />
            <span>BSW · IIT Delhi</span>
          </a>
          <p className="header-note">Career Portal</p>
          <div className="header-actions">
            <a
              className="guide-link"
              href="https://bswcareerportal.iitd.ac.in/static/Bluebook_BSW_IITD.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="guide-label-full">Open Intern Guide</span>
              <span className="guide-label-short">Intern Guide</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <button className="talk-link" type="button" onClick={openReachOut}>
              Reach out <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="intro-copy" aria-hidden={activeIndex !== 0}>
          <span>Choose a direction</span>
          <p>Scroll to travel through the career helix.</p>
        </div>

        <div className="helix-scene">
          {cards.map((card, index) => {
            const position = getCardPosition(index, 0);
            const isActive = index === activeIndex;

            return (
              <article
                className={`career-card${isActive ? " is-active" : ""}`}
                key={card.title}
                ref={(element) => {
                  cardElements.current[index] = element;
                }}
                style={{
                  "--accent": card.accent,
                  "--card-image": `url(${card.image})`,
                  viewTransitionName:
                    selectedCard === null && isActive ? "career-detail" : "none",
                  transform: `translate3d(${position.x}px,${position.y}px,${position.z}px) rotateY(${position.rotateY}deg) rotateZ(${position.rotateZ}deg)`,
                  opacity: position.opacity,
                  visibility: position.distance > 4.25 ? "hidden" : "visible",
                } as React.CSSProperties}
                aria-hidden={!isActive}
                onClick={() => openCard(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") openCard(index);
                }}
                role="button"
                tabIndex={isActive ? 0 : -1}
              >
                <div className="card-image" />
                <div className="card-wash" />
                <div className="card-topline">
                  <span>{card.eyebrow}</span>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <div className="card-content">
                  <h1>{card.title}</h1>
                  <p>{card.description}</p>
                </div>
                <div className="card-action" aria-hidden="true">
                  <span>Discover</span>
                  <ArrowUpRight />
                </div>
              </article>
            );
          })}
        </div>

        <nav className="career-nav" aria-label="Choose a career path">
          {cards.map((card, index) => (
            <button
              key={card.title}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => goToCard(index)}
              aria-label={`Go to ${card.title}`}
            >
              <span />
              <em>{String(index + 1).padStart(2, "0")}</em>
            </button>
          ))}
        </nav>

        <div className="scroll-cue">
          <ArrowDown aria-hidden="true" />
          <span>{activeIndex === cards.length - 1 ? "End of the helix" : "Keep scrolling"}</span>
        </div>

        <div className="grain" aria-hidden="true" />
        </section>
      </section>
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
