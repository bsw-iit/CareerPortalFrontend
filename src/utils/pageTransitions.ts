export type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => void;
};

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const supportsNativePageTransitions = () =>
  Boolean((document as ViewTransitionDocument).startViewTransition) &&
  !prefersReducedMotion();
