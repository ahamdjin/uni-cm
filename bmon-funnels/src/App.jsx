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
        padding: 18px 16px 20px;
      }

      .stack {
        display: grid;
        gap: 14px;
        min-height: calc(100vh - 38px);
      }

      .hero {
        padding: 18px;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.86);
        border: 1px solid rgba(79, 70, 229, 0.14);
        box-shadow: 0 18px 42px rgba(79, 70, 229, 0.08);
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 7px 12px;
        border-radius: 999px;
        background: rgba(79, 70, 229, 0.08);
        color: #5b3df5;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: linear-gradient(135deg, #6d4aff, #9a57ff);
      }

      h1 {
        margin: 14px 0 8px;
        font-size: 21px;
        line-height: 1.08;
        font-weight: 600;
        letter-spacing: -0.04em;
      }

      p {
        margin: 0;
        color: rgba(11, 16, 32, 0.68);
        font-size: 13px;
        line-height: 1.68;
      }

      .surface {
        min-height: 470px;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(79, 70, 229, 0.14);
        box-shadow: 0 22px 56px rgba(79, 70, 229, 0.1);
        overflow: hidden;
      }

      .widget {
        height: 100%;
        padding: 10px;
      }

      [data-chat-widget] {
        height: 100%;
        min-height: 450px;
      }
    </style>
  </head>
  <body>
    <div class="stack">
      <section class="hero">
        <div class="eyebrow"><span class="dot"></span>Try AI Voice</div>
        <h1>Talk to a sample BMON assistant.</h1>
        <p>This preview uses the live widget inside a clean phone-style shell so the interaction stays focused.</p>
      </section>
      <section class="surface">
        <div class="widget">
          <div data-chat-widget data-widget-id="697f299eaa41f43fae1deb51" data-location-id="nPiNK9DityBBCQSZkAy8"></div>
        </div>
      </section>
    </div>
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
          This sample page shows how the BMON AI Voice experience can sit inside a phone-style widget and alongside a live website preview without making the page feel crowded.
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

      <section className="voiceDemoSection reveal" id="voiceDemo" aria-label="AI voice live demo">
        <div className="voiceSectionIntro">
          <div className="voiceSectionEyebrow">Preview</div>
          <h2 className="voiceSectionTitle">One experience, adapted for mobile and web.</h2>
          <p className="voiceSectionBody">
            The phone mockup runs the provided widget. The browser frame shows where the same experience can live inside a real site surface.
          </p>
        </div>

        <div className="voicePreviewGrid">
          <article className="voicePreviewCard">
            <div className="voicePreviewHeader">
              <div>
                <p className="voicePreviewLabel">Mobile widget</p>
                <h3 className="voicePreviewTitle">Inside a phone-style shell</h3>
              </div>
              <span className="voicePreviewMeta">Live widget</span>
            </div>

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
          </article>

          <article className="voicePreviewCard">
            <div className="voicePreviewHeader">
              <div>
                <p className="voicePreviewLabel">Website preview</p>
                <h3 className="voicePreviewTitle">Where it can live on your site</h3>
              </div>
              <span className="voicePreviewMeta">Example: bmon.ai</span>
            </div>

            <div className="voiceBrowserFrame">
              <div className="voiceBrowserChrome">
                <div className="voiceBrowserDots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="voiceBrowserAddress">https://bmon.ai/</div>
              </div>
              <div className="voiceWebsiteStage">
                <iframe
                  src="https://bmon.ai/"
                  className="voiceWebsiteFrame"
                  title="Sample website preview"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <div className="voiceWebsiteBadge">AI Voice can live here</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="voiceDetailSection reveal" aria-label="AI voice details">
        <div className="voiceSectionIntro">
          <div className="voiceSectionEyebrow">Why it works</div>
          <h2 className="voiceSectionTitle">Minimal on the page, useful in the conversation.</h2>
        </div>

        <div className="voiceFeatureGrid">
          <article className="voiceFeatureCard">
            <h3 className="voiceFeatureTitle">Always available</h3>
            <p className="voiceFeatureBody">The assistant answers instantly, even when your team is offline, so interest does not cool off between visits and callbacks.</p>
          </article>
          <article className="voiceFeatureCard">
            <h3 className="voiceFeatureTitle">Qualifies intent</h3>
            <p className="voiceFeatureBody">It can collect the right details, route simple questions, and keep low-friction conversations moving toward a real lead.</p>
          </article>
          <article className="voiceFeatureCard">
            <h3 className="voiceFeatureTitle">Fits both layouts</h3>
            <p className="voiceFeatureBody">The same experience can sit inside a compact phone view or a website section without making the surrounding design feel heavy.</p>
          </article>
        </div>
      </section>

      <section className="voiceCtaSection reveal" aria-label="AI voice call to action">
        <div className="voiceCtaCard">
          <div>
            <div className="voiceSectionEyebrow">Next step</div>
            <h2 className="voiceCtaTitle">Want this adapted to your own site and call flow?</h2>
            <p className="voiceCtaBody">We can wire the widget, shape the prompts, and tailor the experience to your business without making the page feel over-designed.</p>
          </div>
          <div className="actionsRow voiceCtaActions">
            <button type="button" className="btn btnPrimary" onClick={() => onNavigate("contact", "#contactForm")}>
              Start with contact
            </button>
            <button type="button" className="btn btnGhost" onClick={() => onNavigate("contact", "#booking")}>
              Book a demo
            </button>
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
    if (view === "reviews") return { label: "See Pricing", anchor: "#pricing" };
    if (view === "contact") return { label: "Book a Demo", anchor: "#booking" };
    if (view === "voice") return { label: "Live Preview", anchor: "#voiceDemo" };
    return { label: "Build a Bundle", anchor: "#bundle" };
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
      <button type="button" className="btn btnGhost" onClick={() => navigateTo(view, secondaryAction.anchor)}>
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

            <div className="headerMobilePanel">
              <div className="headerMobileInner">
                {renderNavTabs("navTabsMobile")}
                {renderHeaderActions("headerActionsMobile")}
              </div>
            </div>
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
