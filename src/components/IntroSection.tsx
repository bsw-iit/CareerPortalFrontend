import type { CSSProperties, RefObject } from "react";
import bswLogo from "../assets/favicon.png";
import SiteHeader from "./SiteHeader";

type IntroSectionProps = {
  scrollRef: RefObject<HTMLElement>;
  stageRef: RefObject<HTMLDivElement>;
  onReachOut: () => void;
};

export default function IntroSection({ scrollRef, stageRef, onReachOut }: IntroSectionProps) {
  return (
    <section
      className="intro-scroll"
      ref={scrollRef}
      aria-label="Board for Student Welfare introduction"
      style={{ "--intro-progress": 0 } as CSSProperties}
    >
      <div className="intro-stage" ref={stageRef}>
        <SiteHeader intro onReachOut={onReachOut} />
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
            <h1><span>Legacy.</span><span>Potential.</span><span>And you.</span></h1>
            <p className="intro-description">
              <span>An initiative by the Board for Student Welfare</span>
              <span>to provide one-stop solution for all the queries</span>
              <span>ahead of placement and internship season</span>
            </p>
          </div>
          <div className="glass-corner glass-corner-top" aria-hidden="true" />
          <div className="glass-corner glass-corner-bottom" aria-hidden="true" />
        </div>

        <div className="intro-scroll-cue"><span>Scroll to enter</span><i aria-hidden="true" /></div>
        <div className="dissolve-band" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
      </div>
    </section>
  );
}
