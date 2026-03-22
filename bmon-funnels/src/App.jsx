import { useEffect, useMemo, useState } from "react";
import "./App.css";

import BMONServicesFunnel from "./bmon-funnel-services-itemized.jsx";
import BMONReviewFunnel from "./bmon-funnel-review-management.jsx";

const TOP_MARKER = "__TOP__";

const VOICE_WIDGET_DOC = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
      :root {
        color-scheme: light;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        min-height: 100%;
        font-family: "Figtree", system-ui, sans-serif;
        background:
          radial-gradient(circle at top, rgba(124, 58, 237, 0.12), transparent 34%),
          linear-gradient(180deg, #f7f5ff 0%, #ffffff 48%, #f6f8ff 100%);
        color: #0b1020;
      }

      body {
        position: relative;
        padding: 16px;
      }

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: linear-gradient(135deg, #6d4aff, #9a57ff);
      }

      .surface {
        position: relative;
        min-height: calc(100vh - 32px);
        padding: 18px;
        border-radius: 32px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 247, 255, 0.82));
        border: 1px solid rgba(79, 70, 229, 0.12);
        box-shadow: 0 22px 56px rgba(79, 70, 229, 0.08);
        overflow: hidden;
      }

      .surface::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top left, rgba(124, 58, 237, 0.08), transparent 36%);
        pointer-events: none;
      }

      .badge {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 13px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.76);
        border: 1px solid rgba(79, 70, 229, 0.14);
        box-shadow: 0 10px 24px rgba(79, 70, 229, 0.06);
        color: #5b3df5;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      .note {
        position: relative;
        z-index: 1;
        max-width: 176px;
        margin: 16px 0 0;
        color: rgba(11, 16, 32, 0.64);
        font-size: 13px;
        line-height: 1.65;
      }

      .widget {
        position: absolute;
        inset: 0;
      }

      [data-chat-widget] {
        height: 100%;
        min-height: calc(100vh - 32px);
      }
    </style>
  </head>
  <body>
    <section class="surface">
      <div class="badge"><span class="dot"></span>AI Voice Demo</div>
      <p class="note">Tap the purple bubble to open the assistant.</p>
      <div class="widget">
        <div data-chat-widget data-widget-id="697f299eaa41f43fae1deb51" data-location-id="nPiNK9DityBBCQSZkAy8"></div>
      </div>
    </section>
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="697f299eaa41f43fae1deb51">
    </script>
  </body>
</html>`;

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
          <div className="embedFrameWrap">
            <iframe
              src="https://link.bmon.ai/widget/form/WyPVoGvcUoMU57sslr9r"
              className="embedFrame"
              style={{ height: 764 }}
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
          <div className="embedFrameWrap embedFrameWrapBooking">
            <iframe
              src="https://link.bmon.ai/widget/booking/gEVDq9hfE7hZU8XvE1zY"
              className="embedFrame embedFrameBooking"
              style={{ height: 1080 }}
              scrolling="yes"
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
            <p className="infoBody">You'll hear back quickly. If you book, we'll meet at the time you choose.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">Clear next steps</h3>
            <p className="infoBody">We'll map your goals, recommend the right bundle, and outline a simple rollout plan.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">No pressure</h3>
            <p className="infoBody">Ask questions, get a walkthrough, and decide when you're ready.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function VoicePage({ onNavigate }) {
  return (
    <div className="container page voicePage">
      <section className="pageHero voiceHero reveal">
        <div className="pill">
          <span className="pillDot" aria-hidden="true" />
          AI Voice Agent
        </div>
        <h1 className="pageTitle">
          A cleaner way to let visitors{" "}
          <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", WebkitBackgroundClip: "text", color: "transparent" }}>
            talk to your business
          </span>
        </h1>
        <p className="pageSubtitle">
          A single phone preview. Clear guidance. No extra panels competing for attention.
        </p>
        <div className="actionsRow voiceHeroActions" aria-label="AI voice actions">
          <a className="btn btnPrimary" href="#voiceDemo">
            Try the sample
          </a>
          <button type="button" className="btn btnGhost" onClick={() => onNavigate("contact", "#booking")}>
            Book a live demo
          </button>
        </div>
      </section>

      <section className="voiceShowcase reveal" id="voiceDemo" aria-label="AI voice live demo">
        <div className="voiceShowcaseContent">
          <div className="voiceSectionEyebrow">Preview</div>
          <h2 className="voiceSectionTitle">Try the assistant the same way a visitor would.</h2>
          <p className="voiceSectionBody">
            The phone runs the live widget. Tap the floating bubble, ask a question, and feel the interaction without a second embed or a crowded layout.
          </p>
          <div className="voiceGuideList" aria-label="How to use the demo">
            <article className="voiceGuideItem">
              <span className="voiceGuideNumber">01</span>
              <div>
                <h3 className="voiceGuideTitle">Open the bubble</h3>
                <p className="voiceGuideBody">Tap the highlighted bubble in the lower-right corner of the phone.</p>
              </div>
            </article>
            <article className="voiceGuideItem">
              <span className="voiceGuideNumber">02</span>
              <div>
                <h3 className="voiceGuideTitle">Ask a real question</h3>
                <p className="voiceGuideBody">Try pricing, bundles, bookings, or a common support question.</p>
              </div>
            </article>
            <article className="voiceGuideItem">
              <span className="voiceGuideNumber">03</span>
              <div>
                <h3 className="voiceGuideTitle">See the handoff</h3>
                <p className="voiceGuideBody">The goal is a clean first interaction that moves people toward contact or booking.</p>
              </div>
            </article>
          </div>

          <div className="actionsRow voiceShowcaseActions" aria-label="AI voice actions">
            <button type="button" className="btn btnGhost" onClick={() => onNavigate("contact", "#booking")}>
              Book a live demo
            </button>
            <button type="button" className="btn btnPrimary" onClick={() => onNavigate("services")}>
              Back to services
            </button>
          </div>
        </div>

        <div className="voiceShowcaseMedia">
          <div className="voicePhoneStage">
            <div className="voiceGuideCallout">Tap the bubble to start</div>
            <span className="voiceGuideLine" aria-hidden="true" />
            <span className="voiceGuidePulse" aria-hidden="true" />

            <div className="voicePhoneFrame">
              <div className="voicePhoneTopBar" aria-hidden="true">
                <span className="voicePhoneSpeaker" />
              </div>
              <iframe
                className="voicePhoneScreen"
                srcDoc={VOICE_WIDGET_DOC}
                title="BMON AI voice mobile preview"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("services");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState(null);

  const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const scrollToAnchor = (anchor) => {
    const behavior = prefersReducedMotion() ? "auto" : "smooth";

    if (!anchor || anchor === TOP_MARKER) {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const target = document.querySelector(anchor);
    if (!target) {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const headerHeight = document.querySelector(".siteHeader")?.getBoundingClientRect()?.height ?? 86;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 22;
    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  const navigateTo = (nextView, anchor = TOP_MARKER) => {
    setMobileMenuOpen(false);

    if (nextView === view) {
      scrollToAnchor(anchor);
      return;
    }

    setView(nextView);
    setPendingAnchor(anchor);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setMobileMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (pendingAnchor == null) return;

    const timer = window.setTimeout(() => {
      scrollToAnchor(pendingAnchor);
      setPendingAnchor(null);
    }, 40);

    return () => window.clearTimeout(timer);
  }, [pendingAnchor, view]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (nodes.length === 0) return;

    const reduced = prefersReducedMotion();
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

  const navItems = useMemo(
    () => [
      { id: "services", label: "Services" },
      { id: "reviews", label: "Reviews" },
      { id: "voice", label: "AI Voice" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const secondaryAction = useMemo(() => {
    if (view === "reviews") return { label: "See Pricing", view: "reviews", anchor: "#pricing" };
    if (view === "contact") return { label: "Book a Demo", view: "contact", anchor: "#booking" };
    if (view === "voice") return { label: "Book a Demo", view: "contact", anchor: "#booking" };
    return { label: "Build a Bundle", view: "services", anchor: "#bundle" };
  }, [view]);

  const renderNavTabs = (className = "") => (
    <nav className={`navTabs ${className}`.trim()} aria-label="Preview">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`tabBtn ${view === item.id ? "tabBtnActive" : ""}`}
          onClick={() => navigateTo(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );

  const renderHeaderActions = (className = "") => (
    <div className={`headerActions ${className}`.trim()}>
      <button type="button" className="btn btnGhost" onClick={() => navigateTo(secondaryAction.view, secondaryAction.anchor)}>
        {secondaryAction.label}
      </button>
      <button type="button" className="btn btnPrimary" onClick={() => navigateTo("voice", "#voiceDemo")}>
        Try AI Voice now
      </button>
    </div>
  );

  return (
    <>
      <header className={`siteHeader ${scrolled ? "isScrolled" : ""}`}>
        <div className="container">
          <div className={`headerPill ${mobileMenuOpen ? "isMenuOpen" : ""}`}>
            <div className="headerBar">
              <a
                className="brand"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("services");
                }}
              >
                <span className="brandMark" aria-hidden="true" />
                BMON
              </a>

              <div className="headerDesktop">
                {renderNavTabs()}
                {renderHeaderActions()}
              </div>

              <button
                type="button"
                className={`menuToggle ${mobileMenuOpen ? "isOpen" : ""}`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            {mobileMenuOpen ? (
              <div className="headerMobilePanel">
                <div className="headerMobileInner">
                  {renderNavTabs("navTabsMobile")}
                  {renderHeaderActions("headerActionsMobile")}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main className="main">
        {view === "services" ? (
          <BMONServicesFunnel embedded />
        ) : view === "reviews" ? (
          <BMONReviewFunnel embedded />
        ) : view === "voice" ? (
          <VoicePage onNavigate={navigateTo} />
        ) : (
          <ContactPage />
        )}
      </main>

      <footer className="siteFooter">
        <div className="container">
          <div className="footerShell">
            <div className="footerBrand">
              <span className="brandMark" aria-hidden="true" />
              <div>
                <div className="footerLogo">BMON</div>
                <p className="footerTag">Your complete digital presence, handled.</p>
              </div>
            </div>

            <div className="footerSection">
              <div className="footerSectionLabel">Main</div>
              <div className="footerLinks footerLinksColumn">
                <button type="button" className="footerLinkButton" onClick={() => navigateTo("services")}>
                  Services
                </button>
                <button type="button" className="footerLinkButton" onClick={() => navigateTo("reviews")}>
                  Reviews
                </button>
                <button type="button" className="footerLinkButton" onClick={() => navigateTo("voice")}>
                  AI Voice
                </button>
                <button type="button" className="footerLinkButton" onClick={() => navigateTo("contact")}>
                  Contact
                </button>
              </div>
            </div>

            <div className="footerSection">
              <div className="footerSectionLabel">Contact</div>
              <div className="footerLinks footerLinksColumn">
                <a href="mailto:support@bmon.ai">support@bmon.ai</a>
                <a href="tel:+12138716004">+1 213-871-6004</a>
              </div>
            </div>

            <div className="footerSection">
              <div className="footerSectionLabel">Learn</div>
              <div className="footerLinks footerLinksColumn">
                <a href="https://bmon.ai/terms-condition" target="_blank" rel="noreferrer">
                  Terms & Conditions
                </a>
                <a href="https://bmon.ai/privacy-policy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <div className="footerLegal">© Copyright {new Date().getFullYear()}, All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </>
  );
}
