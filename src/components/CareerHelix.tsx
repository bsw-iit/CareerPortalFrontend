import type { CSSProperties, MutableRefObject, RefObject } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { cards } from "../data/careerCards";
import { getCardPosition } from "../utils/helixGeometry";
import SiteHeader from "./SiteHeader";

type CareerHelixProps = {
  activeIndex: number;
  selectedCard: number | null;
  scrollRef: RefObject<HTMLElement>;
  cardElementsRef: MutableRefObject<Array<HTMLElement | null>>;
  onGoToCard: (index: number) => void;
  onOpenCard: (index: number) => void;
  onReachOut: () => void;
};

export default function CareerHelix({
  activeIndex,
  selectedCard,
  scrollRef,
  cardElementsRef,
  onGoToCard,
  onOpenCard,
  onReachOut,
}: CareerHelixProps) {
  return (
    <section className="helix-scroll" ref={scrollRef} style={{ minHeight: `${cards.length * 100 + 20}vh` }}>
      <section className="helix-stage" aria-label="Career paths">
        <SiteHeader onHome={() => onGoToCard(0)} onReachOut={onReachOut} />
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
                ref={(element) => { cardElementsRef.current[index] = element; }}
                style={{
                  "--accent": card.accent,
                  "--card-image": `url(${card.image})`,
                  viewTransitionName: selectedCard === null && isActive ? "career-detail" : "none",
                  transform: `translate3d(${position.x}px,${position.y}px,${position.z}px) rotateY(${position.rotateY}deg) rotateZ(${position.rotateZ}deg)`,
                  opacity: position.opacity,
                  visibility: position.distance > 4.25 ? "hidden" : "visible",
                } as CSSProperties}
                aria-hidden={!isActive}
                onClick={() => onOpenCard(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") onOpenCard(index);
                }}
                role="button"
                tabIndex={isActive ? 0 : -1}
              >
                <div className="card-image" />
                <div className="card-wash" />
                <div className="card-topline"><span>{card.eyebrow}</span><span className="card-index">0{index + 1}</span></div>
                <div className="card-content"><h1>{card.title}</h1><p>{card.description}</p></div>
                <div className="card-action" aria-hidden="true"><span>Discover</span><ArrowUpRight /></div>
              </article>
            );
          })}
        </div>

        <nav className="career-nav" aria-label="Choose a career path">
          {cards.map((card, index) => (
            <button key={card.title} className={index === activeIndex ? "is-active" : ""} onClick={() => onGoToCard(index)} aria-label={`Go to ${card.title}`}>
              <span /><em>{String(index + 1).padStart(2, "0")}</em>
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
  );
}
