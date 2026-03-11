import { useEffect, useMemo, useState } from "react";
import "./App.css";

import BMONServicesFunnel from "./bmon-funnel-services-itemized.jsx";
import BMONReviewFunnel from "./bmon-funnel-review-management.jsx";

export default function App() {
  const [view, setView] = useState("services");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  const viewMeta = useMemo(() => {
    if (view === "reviews") return { title: "Review Management", anchor: "#pricing" };
    return { title: "Services Bundle", anchor: "#bundle" };
  }, [view]);

  return (
    <>
      <header className="siteHeader">
        <div className="container headerInner">
          <a className="brand" href="#" onClick={(e) => e.preventDefault()}>
            <span className="brandMark" aria-hidden="true" />
            BMON
          </a>

          <nav className="navTabs" aria-label="Preview">
            <button
              type="button"
              className={`tabBtn ${view === "services" ? "tabBtnActive" : ""}`}
              onClick={() => setView("services")}
            >
              All Services
            </button>
            <button
              type="button"
              className={`tabBtn ${view === "reviews" ? "tabBtnActive" : ""}`}
              onClick={() => setView("reviews")}
            >
              Review Management
            </button>
          </nav>

          <div className="headerActions">
            <a className="btn btnGhost" href={viewMeta.anchor}>
              Jump to {view === "services" ? "Bundle" : "Pricing"}
            </a>
            <a className="btn btnPrimary" href={viewMeta.anchor}>
              {view === "services" ? "Build a Bundle" : "Start Free Trial"}
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        {view === "services" ? <BMONServicesFunnel embedded /> : <BMONReviewFunnel embedded />}
      </main>

      <footer className="siteFooter">
        <div className="container footerInner">
          <div>© {new Date().getFullYear()} BMON. Preview build.</div>
          <div className="footerLinks">
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
