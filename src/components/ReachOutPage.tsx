import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Copy, MessageCircle } from "lucide-react";
import bswLogo from "../assets/favicon.png";

const WHATSAPP_URL = "https://wa.me/919140852144";
const PHONE_NUMBER = "+91 91408 52144";

export default function ReachOutPage({ onClose }: { onClose: () => void }) {
  const [hasCopiedNumber, setHasCopiedNumber] = useState(false);
  const copyTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
  }, []);

  const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText(PHONE_NUMBER);
    setHasCopiedNumber(true);
    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => {
      copyTimer.current = null;
      setHasCopiedNumber(false);
    }, 1800);
  };

  return (
    <main className="reach-simple-page">
      <header className="reach-simple-header">
        <button type="button" className="reach-simple-back" onClick={onClose}>
          <ArrowLeft aria-hidden="true" /> Back to careers
        </button>
        <a className="reach-simple-brand" href="#top" onClick={(event) => { event.preventDefault(); onClose(); }} aria-label="BSW home">
          <img src={bswLogo} alt="" /><span>BSW Career Mentorship</span>
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
          <div className="reach-simple-person"><div><h2>Vansh Agrawal</h2><p>BSW Coordinator, Career Vertical</p></div></div>
          <div className="reach-simple-actions">
            <a className="whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Chat on WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
            <button type="button" className="copy-number" onClick={copyPhoneNumber}>
              {hasCopiedNumber ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              <span>{hasCopiedNumber ? "Number copied" : PHONE_NUMBER}</span>
            </button>
          </div>
        </section>
      </section>

      <footer className="reach-simple-footer">
        <button type="button" onClick={onClose}><strong>Home</strong> / Careers</button>
        <span>© 2026 · BSW IIT Delhi</span>
      </footer>
    </main>
  );
}
