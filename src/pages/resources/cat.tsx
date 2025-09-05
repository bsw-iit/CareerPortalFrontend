import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/CAT-page-component/header.tsx";
import Cell from "../../components/CAT-page-component/quicknav.tsx";
import Intro from "../../components/CAT-page-component/intro.tsx";
import Pattern from "../../components/CAT-page-component/pattern.tsx";
import FAQ from "../../components/CAT-page-component/faq.tsx";
import MocksAndPlanning from "../../components/CAT-page-component/mockplanning.tsx";
import IIM from "../../components/CAT-page-component/iim.tsx";
import Syallabus from "../../components/CAT-page-component/syallabus.tsx";
import VideoBlog from "../../components/CAT-page-component/videsblog.tsx";
import QuickDoDont from "../../components/CAT-page-component/dodonts.tsx";
import SeniorAdvice from "../../components/CAT-page-component/senioradvice.tsx";
import {
  VARC,
  DILR,
  QA,
  youtubeLinks,
  blogLinks,
  adviceList,
  doList,
  dontList,
} from "../../components/CAT-page-component/data.ts";

export default function CatPage() {
  const navItems = [
    { id: "intro", label: "Basics" },
    { id: "pattern", label: "Pattern" },
    { id: "varc", label: "VARC" },
    { id: "dilr", label: "DILR" },
    { id: "quant", label: "QUANT" },
    { id: "mocks", label: "Mocks & Planning" },
    { id: "iima", label: "IIM‑A Criteria" },
    { id: "syallabus", label: "Syllabus" },
    { id: "videos", label: "Videos & Blogs" },
    { id: "seniors", label: "Seniors’ Advice" },
    { id: "quick", label: "Quick Do/Don’t" },
  ];

  return (
    <div>
      <Navbar />
      <Hero
        bg="../assets/Resource/CAT.svg"
        heading="CAT"
        title="Build your career right way!"
      ></Hero>
      <div className="flex flex-col justify-start items-center gap-3">
        <div className="w-full h-full px-8 py-4">
          <Header />
        </div>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 pb-4">
          {navItems.map(({ id, label }) => (
            <div className="w-full h-[50px]" key={id}>
              <Cell pillText={id} mainText={label} scrollToId={id} />
            </div>
          ))}
        </div>

        <div id="intro" className="w-full h-full px-8 pb-4">
          <Intro />
        </div>

        <div id="pattern" className="w-full h-full px-8 pb-4">
          <Pattern />
        </div>

        <div id="varc" className="w-full h-full px-8 pb-4">
          <FAQ
            data={VARC}
            heading="Verbal Ability and Reading Comprehension — Preparation"
          />
        </div>

        <div id="dilr" className="w-full h-full px-8 pb-4">
          <FAQ
            data={DILR}
            heading="Data Interpretation and Logical Reasoning — Preparation"
          />
        </div>

        <div id="quant" className="w-full h-full px-8 pb-4">
          <FAQ data={QA} heading="Quantitative Aptitude — Preparation" />
        </div>

        <div id="mocks" className="w-full h-full px-8 pb-4">
          <MocksAndPlanning />
        </div>

        <div id="iima" className="w-full h-full px-8 pb-4">
          <IIM />
        </div>

        <div id="syallabus" className="w-full h-full px-8 pb-4">
          <Syallabus />
        </div>
        <div id="videos" className="w-full h-full px-8 pb-4">
          <VideoBlog youtubeLinks={youtubeLinks} blogLinks={blogLinks} />
        </div>

        <div id="seniors" className="w-full h-full px-8 pb-4">
          <SeniorAdvice adviceList={adviceList} />
        </div>

        <div id="quick" className="w-full h-full px-8 pb-4">
          <QuickDoDont doList={doList} dontList={dontList} />
        </div>

        <div className="w-full h-full px-8 pb-4">
          <footer className="rounded-2xl border p-4 text-sm text-black bg-blue-100 ">
            <p>
              <span className="font-bold">Disclaimer: </span>This guide is
              informational and based on recent exam trends and senior insights.
              The official CAT authority (IIMs) may change pattern/criteria
              without prior notice. Always refer to the official CAT website and
              institute‑specific admissions pages for the latest updates.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
