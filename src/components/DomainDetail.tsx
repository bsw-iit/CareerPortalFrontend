import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CalendarDays, Play, X } from "lucide-react";
import type { CompanyStory } from "../data/companyInsights";

export type Company = Partial<CompanyStory> & {
  name: string;
  domain: string;
  note: string;
};

export type DomainDetailData = {
  title: string;
  label: string;
  intro: string;
  question: string;
  answer: string;
  guide?: {
    title: string;
    introduction?: string;
    sections: {
      heading: string;
      paragraphs?: string[];
      points?: string[];
      resources?: { label: string; href: string; note?: string }[];
    }[];
    credit?: string;
  };
  videos: { id: string; title: string; meta?: string; summary?: string }[];
  timeline?: { heading: string; details: string }[];
  companies: Company[];
  alternateImage: string;
};

export type CardTransitionOrigin = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type DomainDetailProps = {
  detail: DomainDetailData;
  image: string;
  accent: string;
  onClose: () => void;
  participatesInPageTransition?: boolean;
  transitionOrigin?: CardTransitionOrigin | null;
  useFallbackTransition?: boolean;
};

const initials = (name: string) =>
  name
    .split(/\s|&/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

export default function DomainDetail({
  detail,
  image,
  accent,
  onClose,
  participatesInPageTransition = false,
  transitionOrigin = null,
  useFallbackTransition = false,
}: DomainDetailProps) {
  const scrollRoot = useRef<HTMLDivElement | null>(null);
  const [activeCompany, setActiveCompany] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  useEffect(() => {
    const root = scrollRoot.current;
    if (!root || !detail.companies.length) return;

    const rows = [...root.querySelectorAll<HTMLElement>("[data-company-index]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveCompany(Number((visible.target as HTMLElement).dataset.companyIndex));
        }
      },
      { root, rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.25, 0.6] },
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [detail.companies]);

  const company = detail.companies[activeCompany];

  return (
    <div
      className={`domain-detail${participatesInPageTransition ? " is-page-transition-target" : ""}${useFallbackTransition ? " has-fallback-card-transition" : ""}`}
      ref={scrollRoot}
      style={{
        "--detail-accent": accent,
        "--detail-card-image": `url(${image})`,
        ...(transitionOrigin
          ? {
              "--detail-origin-top": `${transitionOrigin.top}px`,
              "--detail-origin-left": `${transitionOrigin.left}px`,
              "--detail-origin-width": `${transitionOrigin.width}px`,
              "--detail-origin-height": `${transitionOrigin.height}px`,
            }
          : {}),
        viewTransitionName: participatesInPageTransition ? "career-detail" : "none",
      } as React.CSSProperties}
      role="dialog"
      aria-modal="true"
      aria-label={`${detail.title} career guide`}
    >
      {useFallbackTransition && (
        <div className="detail-fallback-cover" aria-hidden="true">
          <span>{detail.label}</span>
          <strong>{detail.title}</strong>
        </div>
      )}
      <div className="detail-actions">
        <a
          className="guide-link detail-guide-link"
          href="https://bswcareerportal.iitd.ac.in/static/Bluebook_BSW_IITD.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span className="guide-label-full">Open Intern Guide</span>
          <span className="guide-label-short">Intern Guide</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <button className="detail-close" onClick={onClose} aria-label="Back to careers">
          <X aria-hidden="true" />
          <span>Back</span>
        </button>
      </div>

      {detail.guide && (
        <section className="preparation-guide" aria-labelledby="preparation-guide-title">
          <div className="preparation-guide-intro">
            <span>From the original BSW Career Portal</span>
            <h2 id="preparation-guide-title">{detail.guide.title}</h2>
            {detail.guide.introduction && <p>{detail.guide.introduction}</p>}
          </div>

          <div className="preparation-guide-grid">
            {detail.guide.sections.map((section, index) => (
              <article className="guide-section-card" key={section.heading}>
                <div className="guide-section-heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{section.heading}</h3>
                </div>
                <div className="guide-section-copy">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.points?.length ? (
                    <ul>
                      {section.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  ) : null}
                  {section.resources?.length ? (
                    <div className="guide-resources">
                      {section.resources.map((resource) => (
                        <a href={resource.href} target="_blank" rel="noreferrer" key={resource.href}>
                          <span>{resource.label}</span>
                          {resource.note && <small>{resource.note}</small>}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          {detail.guide.credit && <p className="guide-credit">{detail.guide.credit}</p>}
        </section>
      )}

      <section className="detail-watch">
        <div className="watch-layout has-timeline">
          <div className="watch-main">
            <div className="section-heading">
              <h2>Videos</h2>
            </div>

            {detail.videos.length ? (
              <div className="video-rail">
                {detail.videos.map((video, videoIndex) => (
                  <a
                    className={`video-story${videoIndex === 0 ? " video-story-featured" : ""}`}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    key={video.id}
                  >
                    <div className="video-story-thumbnail">
                      <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" />
                      <span className="video-number">{String(videoIndex + 1).padStart(2, "0")}</span>
                      <span className="video-play"><Play fill="currentColor" aria-hidden="true" /></span>
                    </div>
                    <div className="video-story-copy">
                      <span>Video</span>
                      <h3>{video.title}</h3>
                      {video.summary && <p>{video.summary}</p>}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="detail-empty">No videos have been added yet.</p>
            )}
          </div>

          <aside className="detail-timeline" aria-labelledby="timeline-heading">
            <div className="timeline-heading">
              <span>Preparation roadmap</span>
              <h2 id="timeline-heading">Suggested timeline</h2>
            </div>
            {detail.timeline?.length ? (
              <ol>
                {detail.timeline.map((item, index) => (
                  <li key={`${item.heading}-${index}`}>
                    <span className="timeline-icon" aria-hidden="true">
                      <CalendarDays />
                    </span>
                    {item.heading && <h3>{item.heading}</h3>}
                    <p>{item.details.replace(/\s*!!\s*/g, " ").trim()}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="timeline-empty">No timeline available.</p>
            )}
          </aside>
        </div>
      </section>

      {company ? (
        <section className="company-section">
          <div className="company-intro">
            <h2>Companies</h2>
          </div>

          <div className="company-showcase">
            <article
              className="company-media company-media-left company-insight-card"
              key={`left-${activeCompany}`}
            >
              <div className="company-panel-kicker">
                <span>Personal insight</span>
                <i>{String(activeCompany + 1).padStart(2, "0")}</i>
              </div>

              {company.insight ? (
                <>
                  <blockquote>
                    <span aria-hidden="true">“</span>
                    <p>{company.insight.quote}</p>
                  </blockquote>
                  <footer className="company-insight-source">
                    <div className="company-person-mark" aria-hidden="true">
                      {initials(company.insight.person)}
                    </div>
                    <div>
                      <strong>{company.insight.person}</strong>
                      <span>{company.insight.role} · {company.name}</span>
                      <small>{company.insight.academic}</small>
                    </div>
                  </footer>
                </>
              ) : (
                <p className="company-panel-empty">No personal insight was reported.</p>
              )}
            </article>

            <div className="company-list">
              {detail.companies.map((item, companyIndex) => (
                <button
                  className={`company-row${companyIndex === activeCompany ? " is-current" : ""}`}
                  data-company-index={companyIndex}
                  key={item.name}
                  onMouseEnter={() => setActiveCompany(companyIndex)}
                  onFocus={() => setActiveCompany(companyIndex)}
                  onClick={() => setActiveCompany(companyIndex)}
                >
                  <span>{String(companyIndex + 1).padStart(2, "0")}</span>
                  <strong>{item.name}</strong>
                </button>
              ))}
            </div>

            <aside
              className="company-media company-media-right company-process-card"
              key={`right-${activeCompany}`}
              aria-label={`${company.name} selection process`}
            >
              <div className="company-panel-kicker">
                <span>Selection process</span>
                <i>{initials(company.name)}</i>
              </div>
              <div className="company-process-heading">
                <small>From application to offer</small>
                <h3>{company.name}</h3>
              </div>

              {company.process?.length ? (
                <ol className="company-process-list">
                  {company.process.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="company-panel-empty">Selection timeline not reported.</p>
              )}
              <p className="company-process-note">Indicative sequence · details may vary by role and year</p>
            </aside>
          </div>

          <div className="company-guide-cta">
            <a
              href="https://bswcareerportal.iitd.ac.in/static/Bluebook_BSW_IITD.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>Explore the entire Intern Guide</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      ) : (
        <section className="company-section company-section-empty">
          <div className="company-intro">
            <h2>Companies</h2>
            <p className="detail-empty">No company list has been added yet.</p>
          </div>
        </section>
      )}
    </div>
  );
}
