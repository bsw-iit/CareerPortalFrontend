import { useEffect, useRef, useState } from "react";
import { cards } from "../data/careerCards";
import {
  clamp,
  getHelixRadiusScale,
  setCardPosition,
} from "../utils/helixGeometry";

type RenderQuality = 0 | 1 | 2;

const QUALITY_NAMES = ["low", "balanced", "high"] as const;
const QUALITY_VISIBLE_RADIUS = [1.8, 2.7, 3.6] as const;

const getInitialQuality = (): RenderQuality => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cores = navigator.hardwareConcurrency || 4;
  return dpr >= 2 && cores <= 4 ? 1 : 2;
};

/** Owns the scroll-driven animation loop and exposes only the refs/actions the UI needs. */
export function useCareerHelix(disabled: boolean) {
  const [activeIndex, setActiveIndex] = useState(0);
  const targetProgress = useRef(0);
  const targetIntroProgress = useRef(0);
  const renderedProgress = useRef(0);
  const renderedIntroProgress = useRef(0);
  const activeIndexRef = useRef(0);
  const frame = useRef<number | null>(null);
  const siteRef = useRef<HTMLElement | null>(null);
  const helixScrollRef = useRef<HTMLElement | null>(null);
  const introScrollRef = useRef<HTMLElement | null>(null);
  const introStageRef = useRef<HTMLDivElement | null>(null);
  const cardElementsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (disabled) return;

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
    const cardVisibility = new Uint8Array(cards.length);
    const cardPromotion = new Uint8Array(cards.length);
    cardVisibility.fill(255);
    cardPromotion.fill(255);

    const applyQuality = () => {
      if (siteRef.current) {
        siteRef.current.dataset.renderQuality = QUALITY_NAMES[quality];
        siteRef.current.style.setProperty(
          "--render-dpr",
          `${Math.min(window.devicePixelRatio || 1, 2)}`,
        );
      }
    };

    const clearMotionHints = () => {
      introScrollRef.current?.classList.remove("is-animating");
      if (introStageRef.current) introStageRef.current.style.willChange = "auto";

      for (let index = 0; index < cardElementsRef.current.length; index += 1) {
        const element = cardElementsRef.current[index];
        if (element && cardPromotion[index]) element.style.willChange = "auto";
        cardPromotion[index] = 0;
      }
    };

    const setStageMotionState = () => {
      if (introScrollRef.current) {
        introScrollRef.current.dataset.motion = introInView ? "running" : "paused";
      }
      if (helixScrollRef.current) {
        helixScrollRef.current.dataset.motion = helixInView ? "running" : "paused";
      }
    };

    const measure = () => {
      const helixSection = helixScrollRef.current;
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

      if (frame.current === null && !document.hidden && (introInView || helixInView)) {
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

        for (let index = 0; index < cardElementsRef.current.length; index += 1) {
          const element = cardElementsRef.current[index];
          if (!element) continue;

          const distance = Math.abs(index - progress);
          const visible = distance <= visibleRadius;
          const promoted = visible && distance < 2.15;
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

      const introElement = introScrollRef.current;
      if (introElement && introInView) {
        introElement.style.setProperty("--intro-progress", `${renderedIntroProgress.current}`);
        introElement.classList.add("is-animating");
        if (introStageRef.current) {
          introStageRef.current.style.willChange = "transform, opacity";
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

      if ((helixSettling || introSettling) && !document.hidden) {
        frame.current = requestAnimationFrame(animate);
      } else {
        lastFrameTime = 0;
        clearMotionHints();
      }
    };

    const handleResize = () => {
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

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === introScrollRef.current) introInView = entry.isIntersecting;
          if (entry.target === helixScrollRef.current) helixInView = entry.isIntersecting;
        }
        setStageMotionState();
        if (!introInView && !helixInView) clearMotionHints();
        updateTarget();
      },
      { rootMargin: "150px 0px", threshold: 0 },
    );

    measure();
    applyQuality();
    if (introScrollRef.current) intersectionObserver.observe(introScrollRef.current);
    if (helixScrollRef.current) intersectionObserver.observe(helixScrollRef.current);
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
  }, [disabled]);

  const goToCard = (index: number) => {
    const helixSection = helixScrollRef.current;
    if (!helixSection) return;

    const introTravel = window.innerHeight * 0.9;
    const available = helixSection.offsetHeight - window.innerHeight - introTravel;
    window.scrollTo({
      top: helixSection.offsetTop + introTravel +
        (index / (cards.length - 1)) * available,
      behavior: "smooth",
    });
  };

  return {
    activeIndex,
    cardElementsRef,
    goToCard,
    helixScrollRef,
    introScrollRef,
    introStageRef,
    siteRef,
  };
}
