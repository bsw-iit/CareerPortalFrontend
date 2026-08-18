import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import bswLogo from "../assets/favicon.png";

const legacyPortal = "https://bswcareerportal.iitd.ac.in";

const resourceLinks = [
  { label: "UPSC", href: "/?career=upsc" },
  { label: "CAT", href: "/?career=cat" },
  { label: "Higher Studies", href: "/?career=higher-studies" },
];

const guideLinks = [
  { label: "Summer Guide", href: `${legacyPortal}/Resource/summer_guide` },
  { label: "Startup Playbook", href: "/resources/Startup_Playbook.pdf" },
  { label: "BSW Bluebook", href: "/resources/Bluebook_BSW_IITD.pdf" },
  {
    label: "Quant 101 Guide",
    href: `${legacyPortal}/static/Quant101_Guide_BSW_IITD.pdf`,
  },
];

const iitDelhiLinks = [
  { label: "BSW IIT Delhi", href: "https://bsw.iitd.ac.in/" },
  { label: "Student Helpline", href: "https://helpline.iitd.ac.in/" },
  { label: "eAcademics", href: "https://eacademics.iitd.ac.in/sportal/login" },
  { label: "Moodle", href: "https://moodle.iitd.ac.in/login/index.php" },
];

type FooterLink = {
  label: string;
  href: string;
};

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function CareerFooter() {
  return (
    <footer className="career-footer">
      <div className="career-footer-glow" aria-hidden="true" />

      <div className="career-footer-main">
        <div className="career-footer-brand">
          <a href="#top" className="career-footer-logo" aria-label="Back to the top">
            <img src={bswLogo} alt="Board for Student Welfare, IIT Delhi" />
            <span>Board for Student Welfare</span>
          </a>
          <p className="career-footer-manifesto">
            <span>Legacy.</span>
            <span>Potential.</span>
            <span>And you.</span>
          </p>
          <p className="career-footer-note">
            Helping IIT Delhi students find a path, build with intent, and move
            forward together.
          </p>
        </div>

        <nav className="career-footer-column" aria-labelledby="footer-resources">
          <h2 id="footer-resources">Resources</h2>
          <FooterLinkList links={resourceLinks} />
        </nav>

        <nav className="career-footer-column" aria-labelledby="footer-guides">
          <h2 id="footer-guides">Guides</h2>
          <FooterLinkList links={guideLinks} />
        </nav>

        <nav className="career-footer-column" aria-labelledby="footer-iitd">
          <h2 id="footer-iitd">IIT Delhi</h2>
          <FooterLinkList links={iitDelhiLinks} />
        </nav>
      </div>

      <div className="career-footer-bottom">
        <span>© 2026 BSW · IIT Delhi</span>
        <span className="career-footer-credit">Students helping students.</span>
        <div className="career-footer-socials" aria-label="BSW social links">
          <a href="mailto:bsw@admin.iitd.ac.in" aria-label="Email BSW">
            <Mail aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com/boardforstudentwelfare/" target="_blank" rel="noreferrer" aria-label="BSW on Facebook">
            <Facebook aria-hidden="true" />
          </a>
          <a href="https://instagram.com/bsw_iitd" target="_blank" rel="noreferrer" aria-label="BSW on Instagram">
            <Instagram aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/company/bsw-iitd/" target="_blank" rel="noreferrer" aria-label="BSW on LinkedIn">
            <Linkedin aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
