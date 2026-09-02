const DESKTOP_CARD_WIDTH = 720;
const MOBILE_CARD_WIDTH_RATIO = 0.84;
const MOBILE_BREAKPOINT = 620;

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const getHelixRadiusScale = () =>
  window.innerWidth <= MOBILE_BREAKPOINT
    ? (window.innerWidth * MOBILE_CARD_WIDTH_RATIO) / DESKTOP_CARD_WIDTH
    : 1;

export const getCardPosition = (
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

export const setCardPosition = (
  element: HTMLElement,
  index: number,
  progress: number,
  radiusScale: number,
) => {
  const relative = index - progress;
  const theta = relative * 1.2;
  const sinTheta = Math.sin(theta);
  const distance = Math.abs(relative);
  const x = Math.round(sinTheta * 4300 * radiusScale) / 10;
  const y = Math.round(relative * 1850) / 10;
  const z = Math.round((Math.cos(theta) * 330 - 330) * radiusScale * 10) / 10;
  const rotateY = Math.round(-sinTheta * 430) / 10;
  const rotateZ = Math.round(Math.sin(theta * 0.7) * -26) / 10;

  element.style.transform = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
  element.style.opacity = `${clamp(1 - distance * 0.2, 0.12, 1)}`;
};
