import { useEffect, useMemo, useState } from "react";
import "./App.css";

import BMONServicesFunnel from "./bmon-funnel-services-itemized.jsx";
import BMONReviewFunnel from "./bmon-funnel-review-management.jsx";

function ContactPage() {
  return (
    <div className="container page">
      <section className="pageHero reveal">
        <div className="pill">
          <span className="pillDot" aria-hidden="true" />
          Talk to BMON
        </div>
        <h1 className="pageTitle">
          Book a demo or send us a{" "}
          <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", WebkitBackgroundClip: "text", color: "transparent" }}>
            message
          </span>
        </h1>
        <p className="pageSubtitle">Pick the fastest option. The form is great for details; booking is best if you want a quick walkthrough.</p>
      </section>

      <section className="embedGrid" aria-label="Contact options">
        <div className="embedCard reveal" id="contactForm">
          <div className="embedHeader">
            <h2 className="embedTitle">Contact form</h2>
            <p className="embedHint">Best for specifics</p>
          </div>
          <div className="embedFrameWrap" style={{ height: 764 }}>
            <iframe
              src="https://link.bmon.ai/widget/form/WyPVoGvcUoMU57sslr9r"
              className="embedFrame"
              id="inline-WyPVoGvcUoMU57sslr9r"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="BMON - Contact Us Form"
              data-height="764"
              data-layout-iframe-id="inline-WyPVoGvcUoMU57sslr9r"
              data-form-id="WyPVoGvcUoMU57sslr9r"
              title="BMON - Contact Us Form"
            />
          </div>
        </div>

        <div className="embedCard reveal" id="booking">
          <div className="embedHeader">
            <h2 className="embedTitle">Calendar</h2>
            <p className="embedHint">Best for a demo</p>
          </div>
          <div className="embedFrameWrap" style={{ height: 764 }}>
            <iframe
              src="https://link.bmon.ai/widget/booking/gEVDq9hfE7hZU8XvE1zY"
              className="embedFrame"
              scrolling="no"
              id="gEVDq9hfE7hZU8XvE1zY_1773246604635"
              title="BMON - Booking Calendar"
            />
          </div>
        </div>
      </section>

      <div className="actionsRow reveal" aria-label="Quick actions">
        <a className="btn btnGhost" href="#contactForm">
          Jump to form
        </a>
        <a className="btn btnPrimary" href="#booking">
          Jump to calendar
        </a>
      </div>

      <section className="contactInfo reveal" aria-label="What happens next">
        <h2 className="infoHeading">What happens next</h2>
        <div className="infoGrid">
          <div className="infoCard">
            <h3 className="infoTitle">Fast reply</h3>
            <p className="infoBody">You’ll hear back quickly. If you book, we’ll meet at the time you choose.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">Clear next steps</h3>
            <p className="infoBody">We’ll map your goals, recommend the right bundle, and outline a simple rollout plan.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">No pressure</h3>
            <p className="infoBody">Ask questions, get a walkthrough, and decide when you’re ready.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("services");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, [view]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (nodes.length === 0) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }

    nodes.forEach((node) => node.classList.remove("in"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [view]);

  const viewMeta = useMemo(() => {
    if (view === "contact") return { title: "Contact", anchor: "#contactForm" };
    if (view === "reviews") return { title: "Review Management", anchor: "#pricing" };
    return { title: "Services Bundle", anchor: "#bundle" };
  }, [view]);

  return (
    <>
      <header className={`siteHeader ${scrolled ? "isScrolled" : ""}`}>
        <div className="container">
          <div className="headerPill headerInner">
            <a
              className="brand"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setView("services");
              }}
            >
              <span className="brandMark" aria-hidden="true" />
              BMON
            </a>

            <nav className="navTabs" aria-label="Preview">
              <button
                type="button"
                className={`tabBtn ${view === "services" ? "tabBtnActive" : ""}`}
                onClick={() => setView("services")}
              >
                Services
              </button>
              <button
                type="button"
                className={`tabBtn ${view === "reviews" ? "tabBtnActive" : ""}`}
                onClick={() => setView("reviews")}
              >
                Reviews
              </button>
              <button
                type="button"
                className={`tabBtn ${view === "contact" ? "tabBtnActive" : ""}`}
                onClick={() => setView("contact")}
              >
                Contact
              </button>
            </nav>

            <div className="headerActions">
              <a className="btn btnGhost" href={view === "contact" ? "#contactForm" : viewMeta.anchor}>
                {view === "services" ? "Bundle" : view === "reviews" ? "Pricing" : "Form"}
              </a>
              <a className="btn btnPrimary" href={view === "contact" ? "#booking" : viewMeta.anchor}>
                {view === "services" ? "Build a Bundle" : view === "reviews" ? "Start Free Trial" : "Book a Demo"}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        {view === "services" ? <BMONServicesFunnel embedded /> : view === "reviews" ? <BMONReviewFunnel embedded /> : <ContactPage />}
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

