import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

import BMONServicesFunnel from "./bmon-funnel-services-itemized.jsx";
import BusinessInfoPage from "./business-info-page.jsx";
import DemoPage from "./demo-page.jsx";

const TOP_MARKER = "__TOP__";
const BUSINESS_INFO_PAGE = "business-info";
const DEMO_PAGE = "demo";
const HOME_BASE_URL = "https://bmon.ai/home";
const LANGUAGE_STORAGE_KEY = "bmon-language";
const CONTACT_HASHES = new Set(["#contactForm", "#booking"]);
const HOME_SECTION_LINKS = {
  brand: `${HOME_BASE_URL}#homeTop`,
  home: `${HOME_BASE_URL}#homeTop`,
  voice: `${HOME_BASE_URL}#voiceDemo`,
  contact: `${HOME_BASE_URL}#contactForm`,
  booking: `${HOME_BASE_URL}#booking`,
};

const APP_COPY = {
  en: {
    nav: {
      home: "Home",
      voice: "AI Voice",
      contact: "Contact",
      order: "Order Now",
      tryVoice: "Try AI Voice",
      bookDemo: "Book a Demo",
      jumpToForm: "Jump to form",
      jumpToDemo: "Jump to demo",
      seeServices: "See services",
    },
    contact: {
      pill: "Talk to BMON",
      titleBefore: "Book a demo or send us a",
      titleAccent: "message",
      subtitle: "Pick the fastest option. The form is great for details; booking is best if you want a quick walkthrough.",
      formTitle: "Contact form",
      formHint: "Best for specifics",
      calendarTitle: "Calendar",
      calendarHint: "Best for a demo",
      jumpForm: "Jump to form",
      jumpCalendar: "Jump to calendar",
      infoTitle: "What happens next",
      infoCards: [
        { title: "Fast reply", body: "You'll hear back quickly. If you book, we'll meet at the time you choose." },
        { title: "Clear next steps", body: "We'll map your goals, recommend the right setup, and outline a simple rollout plan." },
        { title: "No pressure", body: "Ask questions, get a walkthrough, and decide when you're ready." },
      ],
    },
    voice: {
      pill: "AI Voice Agent",
      titleBefore: "A cleaner way to let visitors",
      titleAccent: "talk to your business",
      subtitle: "Tap the bubble, choose Live Chat or Voice, and start the conversation in one clean flow.",
      trySample: "Try the sample",
      bookDemo: "Book a live demo",
      preview: "Preview",
      sectionTitle: "Try the exact flow a visitor sees first.",
      sectionBody: "The phone runs the live widget. Visitors tap the bubble, choose Live Chat or Voice, and continue in the same interface without leaving the page.",
      demoEyebrow: "What the demo proves",
      demoBody: "Visitors stay in one clean flow, choose how they want to talk, and move straight into the conversation.",
      modes: [
        { title: "Live Chat", body: "Type-first answers for quick questions and simple objections." },
        { title: "AI Voice", body: "Natural talk-through for higher-intent visitors who want more context." },
      ],
      stepsLabel: "How the flow works",
      steps: [
        "Open the bubble in the lower-right corner.",
        "Choose Live Chat or Voice on the first screen.",
        "Ask about pricing, bookings, or support right away.",
      ],
      backToServices: "Back to services",
      liveMobilePreview: "Live mobile preview",
      mobileCaption: "Tap the bubble inside the screen to start with Chat or Voice.",
    },
    footer: {
      tag: "Your complete digital presence, handled.",
      main: "Main",
      contact: "Contact",
      learn: "Learn",
      home: "Home",
      voice: "AI Voice",
      contactLink: "Contact",
    },
  },
  ko: {
    nav: {
      home: "홈",
      voice: "AI 보이스",
      contact: "문의",
      order: "주문하기",
      tryVoice: "AI 보이스 체험",
      bookDemo: "데모 예약",
      jumpToForm: "폼으로 이동",
      jumpToDemo: "데모로 이동",
      seeServices: "서비스 보기",
    },
    contact: {
      pill: "BMON 문의",
      titleBefore: "데모를 예약하거나",
      titleAccent: "메시지를 보내세요",
      subtitle: "가장 빠른 방법을 선택하세요. 자세한 내용은 폼, 빠른 상담은 캘린더 예약이 좋습니다.",
      formTitle: "문의 폼",
      formHint: "상세 문의에 적합",
      calendarTitle: "캘린더",
      calendarHint: "데모 예약에 적합",
      jumpForm: "폼으로 이동",
      jumpCalendar: "캘린더로 이동",
      infoTitle: "다음 단계",
      infoCards: [
        { title: "빠른 응답", body: "빠르게 답변드리며, 예약을 선택하면 정한 시간에 바로 미팅합니다." },
        { title: "명확한 다음 단계", body: "목표를 파악하고, 맞는 구성을 제안한 뒤, 간단한 실행 계획을 안내합니다." },
        { title: "부담 없는 상담", body: "질문하고, 데모를 보고, 준비가 되었을 때 결정하시면 됩니다." },
      ],
    },
    voice: {
      pill: "AI 보이스 에이전트",
      titleBefore: "방문자가 더 자연스럽게",
      titleAccent: "비즈니스와 대화하는 방법",
      subtitle: "버블을 눌러 라이브 채팅 또는 보이스를 선택하고, 한 흐름 안에서 바로 대화를 시작하세요.",
      trySample: "샘플 체험",
      bookDemo: "라이브 데모 예약",
      preview: "미리보기",
      sectionTitle: "방문자가 실제로 보게 되는 흐름을 그대로 체험해 보세요.",
      sectionBody: "휴대폰 화면에서 라이브 위젯이 실행됩니다. 방문자는 버블을 누르고 라이브 채팅 또는 보이스를 선택한 뒤, 페이지를 벗어나지 않고 같은 인터페이스에서 대화를 이어갑니다.",
      demoEyebrow: "이 데모가 보여주는 것",
      demoBody: "방문자는 하나의 깔끔한 흐름 안에서 원하는 방식으로 대화하고, 즉시 상담으로 넘어갑니다.",
      modes: [
        { title: "라이브 채팅", body: "빠른 질문과 간단한 이의 제기에 적합한 텍스트 중심 응답." },
        { title: "AI 보이스", body: "더 높은 의도를 가진 방문자에게 자연스럽게 설명해 주는 음성 대화." },
      ],
      stepsLabel: "이용 흐름",
      steps: [
        "오른쪽 아래 버블을 엽니다.",
        "첫 화면에서 라이브 채팅 또는 보이스를 선택합니다.",
        "가격, 예약, 지원에 대해 바로 질문합니다.",
      ],
      backToServices: "서비스로 돌아가기",
      liveMobilePreview: "실시간 모바일 미리보기",
      mobileCaption: "화면 안의 버블을 눌러 채팅 또는 보이스를 시작하세요.",
    },
    footer: {
      tag: "비즈니스의 디지털 존재감을 한 번에 관리합니다.",
      main: "메인",
      contact: "연락처",
      learn: "정보",
      home: "홈",
      voice: "AI 보이스",
      contactLink: "문의",
    },
  },
};

function LanguageToggle({ language, onChange, className = "" }) {
  return (
    <div className={`langToggle ${className}`.trim()} role="group" aria-label="Language toggle">
      <div className={`langToggleThumb ${language === "ko" ? "isKorean" : ""}`} aria-hidden="true" />
      <button type="button" className={`langToggleBtn ${language === "en" ? "isActive" : ""}`} onClick={() => onChange("en")}>
        EN
      </button>
      <button type="button" className={`langToggleBtn ${language === "ko" ? "isActive" : ""}`} onClick={() => onChange("ko")}>
        KR
      </button>
    </div>
  );
}

function getCurrentHash() {
  if (typeof window === "undefined") return "";
  return window.__BMON_INITIAL_HASH__ || window.location.hash || "";
}

function resolveEntryPage() {
  if (typeof window === "undefined") return "home";

  const forcedPage = window.__BMON_ENTRY_PAGE__;
  if (forcedPage === BUSINESS_INFO_PAGE) return BUSINESS_INFO_PAGE;
  if (forcedPage === DEMO_PAGE) return DEMO_PAGE;

  const pathname = (window.location.pathname || "/").toLowerCase().replace(/\/+$/, "") || "/";
  if (pathname.endsWith(`/${BUSINESS_INFO_PAGE}`)) return BUSINESS_INFO_PAGE;
  if (pathname.endsWith(`/${DEMO_PAGE}`)) return DEMO_PAGE;

  return "home";
}

function resolveInitialView(entryPage) {
  if (entryPage === BUSINESS_INFO_PAGE || entryPage === DEMO_PAGE) return "services";

  const hash = getCurrentHash();
  if (hash === "#voiceDemo") return "voice";
  if (CONTACT_HASHES.has(hash)) return "contact";
  return "services";
}

function resolveInitialAnchor() {
  const hash = getCurrentHash();
  return hash || null;
}

const VOICE_WIDGET_DOC = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=320, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
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
        width: 100%;
        min-height: 100%;
        height: 100%;
        font-family: "Figtree", system-ui, sans-serif;
        color: #0b1020;
        overflow: hidden;
      }

      body {
        position: relative;
        background: linear-gradient(180deg, #f3f6fb 0%, #ffffff 48%, #f7f9fc 100%);
        overflow: hidden;
      }

      .deviceViewport {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 248, 252, 0.98));
        overflow: hidden;
      }

      .deviceViewport::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.56), rgba(255, 255, 255, 0));
        pointer-events: none;
        z-index: 0;
      }

      .deviceViewport::after {
        content: "";
        position: absolute;
        inset: 0;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.74);
        pointer-events: none;
        z-index: 0;
      }

      [data-chat-widget] {
        position: absolute;
        inset: 0;
        z-index: 1;
      }

      body > chat-widget {
        position: absolute !important;
        inset: 0 !important;
        display: block !important;
        width: 100% !important;
        height: 100%;
        overflow: hidden !important;
        z-index: 2;
      }

      body > chat-widget * {
        box-sizing: border-box;
      }

      body > chat-widget iframe,
      body > chat-widget [role="dialog"],
      body > chat-widget [role="main"] {
        max-width: 100% !important;
      }

      body > chat-widget button,
      body > chat-widget a,
      body > chat-widget input,
      body > chat-widget textarea {
        touch-action: manipulation;
      }
    </style>
  </head>
  <body>
    <div class="deviceViewport">
      <div class="widget">
        <div data-chat-widget data-widget-id="697f299eaa41f43fae1deb51" data-location-id="nPiNK9DityBBCQSZkAy8"></div>
      </div>
    </div>
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="697f299eaa41f43fae1deb51">
    </script>
    <script>
      (() => {
        const applyWidgetSizing = () => {
          const host = document.querySelector("chat-widget");
          if (!host) return false;

          const widgetWidth = Math.min(340, Math.max(280, window.innerWidth - 24));
          host.style.setProperty("--chat-widget-width", widgetWidth + "px");

          return true;
        };

        const observer = new MutationObserver(() => {
          applyWidgetSizing();
        });

        observer.observe(document.body, { childList: true });
        window.addEventListener("resize", applyWidgetSizing);
        window.addEventListener("load", applyWidgetSizing, { once: true });
        applyWidgetSizing();
      })();
    </script>
  </body>
</html>`;

function ContactPage({ language }) {
  const copy = APP_COPY[language] ?? APP_COPY.en;

  return (
    <div className="container page">
      <section className="pageHero reveal">
        <div className="pill">
          <span className="pillDot" aria-hidden="true" />
          {copy.contact.pill}
        </div>
        <h1 className="pageTitle">
          {copy.contact.titleBefore}{" "}
          <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", WebkitBackgroundClip: "text", color: "transparent" }}>
            {copy.contact.titleAccent}
          </span>
        </h1>
        <p className="pageSubtitle">{copy.contact.subtitle}</p>
      </section>

      <section className="embedGrid" aria-label="Contact options">
        <div className="embedCard reveal" id="contactForm">
          <div className="embedHeader">
            <h2 className="embedTitle">{copy.contact.formTitle}</h2>
            <p className="embedHint">{copy.contact.formHint}</p>
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
            <h2 className="embedTitle">{copy.contact.calendarTitle}</h2>
            <p className="embedHint">{copy.contact.calendarHint}</p>
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
          {copy.contact.jumpForm}
        </a>
        <a className="btn btnPrimary" href="#booking">
          {copy.contact.jumpCalendar}
        </a>
      </div>

      <section className="contactInfo reveal" aria-label="What happens next">
        <h2 className="infoHeading">{copy.contact.infoTitle}</h2>
        <div className="infoGrid">
          {copy.contact.infoCards.map((card) => (
            <div key={card.title} className="infoCard">
              <h3 className="infoTitle">{card.title}</h3>
              <p className="infoBody">{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function VoicePage({ onNavigate, language }) {
  const copy = APP_COPY[language] ?? APP_COPY.en;

  return (
    <div className="container page voicePage">
      <section className="pageHero voiceHero reveal">
        <div className="pill">
          <span className="pillDot" aria-hidden="true" />
          {copy.voice.pill}
        </div>
        <h1 className="pageTitle">
          {copy.voice.titleBefore}{" "}
          <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", WebkitBackgroundClip: "text", color: "transparent" }}>
            {copy.voice.titleAccent}
          </span>
        </h1>
        <p className="pageSubtitle">{copy.voice.subtitle}</p>
        <div className="actionsRow voiceHeroActions" aria-label="AI voice actions">
          <a className="btn btnPrimary" href="#voiceDemo">
            {copy.voice.trySample}
          </a>
          <button type="button" className="btn btnGhost" onClick={() => onNavigate("contact", "#booking")}>
            {copy.voice.bookDemo}
          </button>
        </div>
      </section>

      <section className="voiceShowcase reveal" id="voiceDemo" aria-label="AI voice live demo">
        <div className="voiceShowcaseContent">
          <div className="voiceSectionEyebrow">{copy.voice.preview}</div>
          <h2 className="voiceSectionTitle">{copy.voice.sectionTitle}</h2>
          <p className="voiceSectionBody">{copy.voice.sectionBody}</p>
          <div className="voiceDemoCard" aria-label="What the demo shows">
            <div>
              <div className="voiceDemoCardEyebrow">{copy.voice.demoEyebrow}</div>
              <p className="voiceDemoCardBody">{copy.voice.demoBody}</p>
            </div>

            <div className="voiceModeRow" aria-label="Conversation modes">
              {copy.voice.modes.map((mode) => (
                <article key={mode.title} className="voiceModeChip">
                  <span className="voiceModeChipLabel">{mode.title}</span>
                  <span className="voiceModeChipText">{mode.body}</span>
                </article>
              ))}
            </div>

            <div className="voiceDemoPoints" aria-label={copy.voice.stepsLabel}>
              {copy.voice.steps.map((step, index) => (
                <div key={step} className="voiceDemoPoint">
                  <span className="voiceDemoPointNumber">{String(index + 1).padStart(2, "0")}</span>
                  <span className="voiceDemoPointText">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="actionsRow voiceShowcaseActions" aria-label="AI voice actions">
            <button type="button" className="btn btnPrimary" onClick={() => onNavigate("contact", "#booking")}>
              {copy.voice.bookDemo}
            </button>
            <button type="button" className="btn btnGhost" onClick={() => onNavigate("services")}>
              {copy.voice.backToServices}
            </button>
          </div>
        </div>

        <div className="voiceShowcaseMedia">
          <div className="voicePhoneStage">
            <div className="voicePhoneBadge">{copy.voice.liveMobilePreview}</div>
            <div className="voicePhoneFrame">
              <div className="voicePhoneHardware" aria-hidden="true">
                <span className="voicePhoneNotch" />
              </div>
              <iframe
                className="voicePhoneScreen"
                srcDoc={VOICE_WIDGET_DOC}
                title="BMON AI voice mobile preview"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
              />
            </div>
            <p className="voicePhoneCaption">{copy.voice.mobileCaption}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const entryPage = useMemo(() => resolveEntryPage(), []);
  const isBusinessInfoPage = entryPage === BUSINESS_INFO_PAGE;
  const isDemoPage = entryPage === DEMO_PAGE;
  const isStandalonePage = isBusinessInfoPage || isDemoPage;
  const [view, setView] = useState(() => resolveInitialView(entryPage));
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === "ko" ? "ko" : "en";
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState(() => resolveInitialAnchor());
  const copy = APP_COPY[language] ?? APP_COPY.en;

  const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const scrollToAnchor = useCallback((anchor) => {
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
  }, []);

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
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    if (pendingAnchor == null) return;

    const timer = window.setTimeout(() => {
      scrollToAnchor(pendingAnchor);
      setPendingAnchor(null);
    }, 40);

    return () => window.clearTimeout(timer);
  }, [pendingAnchor, scrollToAnchor, view]);

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
    () =>
      isStandalonePage
        ? [
            { id: "home", label: copy.nav.home, href: HOME_SECTION_LINKS.home },
            { id: "voice", label: copy.nav.voice, href: HOME_SECTION_LINKS.voice },
            { id: "contact", label: copy.nav.contact, href: HOME_SECTION_LINKS.contact },
          ]
        : [
            { id: "services", label: copy.nav.home },
            { id: "contact", label: copy.nav.contact },
          ],
    [copy.nav.contact, copy.nav.home, copy.nav.voice, isStandalonePage]
  );

  const secondaryAction = useMemo(() => {
    if (isBusinessInfoPage) return { label: copy.nav.seeServices, href: HOME_SECTION_LINKS.home };
    if (isDemoPage) return { label: copy.nav.seeServices, href: HOME_SECTION_LINKS.home };
    if (view === "contact") return { label: copy.nav.bookDemo, view: "contact", anchor: "#booking" };
    if (view === "voice") return { label: copy.nav.bookDemo, view: "contact", anchor: "#booking" };
    return { label: copy.nav.order, href: "https://bmon.ai/order" };
  }, [copy.nav.bookDemo, copy.nav.order, copy.nav.seeServices, isBusinessInfoPage, isDemoPage, view]);

  const primaryAction = useMemo(() => {
    if (isBusinessInfoPage) return { label: copy.nav.jumpToForm, href: "#businessInfoForm" };
    if (isDemoPage) return { label: copy.nav.jumpToDemo, href: "#demoFrame" };
    return { label: copy.nav.tryVoice, view: "voice", anchor: "#voiceDemo" };
  }, [copy.nav.jumpToDemo, copy.nav.jumpToForm, copy.nav.tryVoice, isBusinessInfoPage, isDemoPage]);

  const renderNavTabs = (className = "") => (
    <nav className={`navTabs ${className}`.trim()} aria-label="Preview">
      {navItems.map((item) => (
        item.href ? (
          <a key={item.id} className="tabBtn" href={item.href} onClick={() => setMobileMenuOpen(false)}>
            {item.label}
          </a>
        ) : (
          <button
            key={item.id}
            type="button"
            className={`tabBtn ${view === item.id ? "tabBtnActive" : ""}`}
            onClick={() => navigateTo(item.id)}
          >
            {item.label}
          </button>
        )
      ))}
    </nav>
  );

  const renderHeaderActions = (className = "") => (
    <div className={`headerActions ${className}`.trim()}>
      {"href" in secondaryAction ? (
        <a className="btn btnGhost" href={secondaryAction.href} onClick={() => setMobileMenuOpen(false)}>
          {secondaryAction.label}
        </a>
      ) : (
        <button type="button" className="btn btnGhost" onClick={() => navigateTo(secondaryAction.view, secondaryAction.anchor)}>
          {secondaryAction.label}
        </button>
      )}
      {"href" in primaryAction ? (
        <a className="btn btnPrimary" href={primaryAction.href} onClick={() => setMobileMenuOpen(false)}>
          {primaryAction.label}
        </a>
      ) : (
        <button type="button" className="btn btnPrimary" onClick={() => navigateTo(primaryAction.view, primaryAction.anchor)}>
          {primaryAction.label}
        </button>
      )}
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
                href={isStandalonePage ? HOME_SECTION_LINKS.brand : "#"}
                onClick={
                  isStandalonePage
                    ? () => setMobileMenuOpen(false)
                    : (e) => {
                        e.preventDefault();
                        navigateTo("services");
                      }
                }
              >
                <span className="brandMark" aria-hidden="true" />
                BMON
              </a>

              <div className="headerDesktop">
                {renderNavTabs()}
                <LanguageToggle language={language} onChange={setLanguage} />
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
                  <LanguageToggle language={language} onChange={setLanguage} className="langToggleMobile" />
                  {renderHeaderActions("headerActionsMobile")}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main className="main">
        {isBusinessInfoPage ? (
          <BusinessInfoPage language={language} />
        ) : isDemoPage ? (
          <DemoPage language={language} />
        ) : view === "services" ? (
          <div id="homeTop">
            <BMONServicesFunnel embedded language={language} />
          </div>
        ) : view === "voice" ? (
          <VoicePage onNavigate={navigateTo} language={language} />
        ) : (
          <ContactPage language={language} />
        )}
      </main>

      <footer className="siteFooter">
        <div className="container">
          <div className="footerShell">
            <div className="footerBrand">
              <span className="brandMark" aria-hidden="true" />
              <div>
                <div className="footerLogo">BMON</div>
                <p className="footerTag">{copy.footer.tag}</p>
              </div>
            </div>

            <div className="footerSection">
              <div className="footerSectionLabel">{copy.footer.main}</div>
              <div className="footerLinks footerLinksColumn">
                {isStandalonePage ? (
                  <>
                    <a href={HOME_SECTION_LINKS.home}>{copy.footer.home}</a>
                    <a href={HOME_SECTION_LINKS.voice}>{copy.footer.voice}</a>
                    <a href={HOME_SECTION_LINKS.contact}>{copy.footer.contactLink}</a>
                  </>
                ) : (
                  <>
                    <button type="button" className="footerLinkButton" onClick={() => navigateTo("services")}>
                      {copy.footer.home}
                    </button>
                    <button type="button" className="footerLinkButton" onClick={() => navigateTo("voice")}>
                      {copy.footer.voice}
                    </button>
                    <button type="button" className="footerLinkButton" onClick={() => navigateTo("contact")}>
                      {copy.footer.contactLink}
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="footerSection">
              <div className="footerSectionLabel">{copy.footer.contact}</div>
              <div className="footerLinks footerLinksColumn">
                <a href="mailto:support@bmon.ai">support@bmon.ai</a>
                <a href="tel:+12138716004">+1 213-871-6004</a>
              </div>
            </div>

            <div className="footerSection">
              <div className="footerSectionLabel">{copy.footer.learn}</div>
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
