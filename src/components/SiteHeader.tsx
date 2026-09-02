import { ArrowUpRight } from "lucide-react";
import bswLogo from "../assets/favicon.png";

type SiteHeaderProps = {
  intro?: boolean;
  onHome?: () => void;
  onReachOut: () => void;
};

export default function SiteHeader({ intro = false, onHome, onReachOut }: SiteHeaderProps) {
  return (
    <header className={`site-header${intro ? " intro-header" : ""}`}>
      <a className="brand" href="#top" onClick={onHome} aria-label="BSW home">
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
        <button className="talk-link" type="button" onClick={onReachOut}>
          Reach out <ArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
