import { useEffect, useState } from "react";
import { openSignup } from "./bmon-links.js";

const DEMO_SRC = "https://login.bmon.ai/v2/preview/hT4qFveprPxUR4XpfoJg?notrack=true";

const DEMO_COPY = {
  en: {
    pill: "Live AI Demo",
    titleBefore: "Preview the",
    titleAccent: "full BMON demo",
    titleAfter: " in one place.",
    subtitle:
      "Open the live preview below to review the website experience, messaging, and AI-assisted flow inside a dedicated standalone page.",
    jumpToDemo: "Jump to demo",
    orderNow: "Order Now",
    cardTitle: "Embedded live preview",
    cardHint: "Standalone demo page for quick review",
    note:
      "Use this page when you want a direct embedded view of the live preview without the main service-page flow around it.",
    checklistTitle: "Best way to review it",
    checklist: [
      "Open it on desktop first for the full layout view.",
      "Check mobile behavior after that for spacing and clarity.",
      "Use the order page when you are ready to move forward.",
    ],
  },
  ko: {
    pill: "라이브 AI 데모",
    titleBefore: "한 페이지에서",
    titleAccent: "전체 BMON 데모",
    titleAfter: "를 확인하세요.",
    subtitle:
      "아래 라이브 프리뷰에서 웹사이트 경험, 메시지 구성, AI 흐름을 별도의 독립 페이지로 바로 확인할 수 있습니다.",
    jumpToDemo: "데모로 이동",
    orderNow: "주문하기",
    cardTitle: "라이브 프리뷰 임베드",
    cardHint: "빠른 검토를 위한 독립 데모 페이지",
    note:
      "이 페이지는 메인 서비스 흐름 없이 라이브 프리뷰만 바로 확인하고 싶을 때 사용합니다.",
    checklistTitle: "가장 좋은 확인 방법",
    checklist: [
      "먼저 데스크톱에서 전체 레이아웃을 확인하세요.",
      "그다음 모바일에서 간격과 가독성을 확인하세요.",
      "진행할 준비가 되면 주문 페이지로 이동하세요.",
    ],
  },
};

function getDemoHeight() {
  if (typeof window === "undefined") return 900;

  const width = window.innerWidth;
  const viewportHeight = window.innerHeight || 900;

  if (width <= 480) return Math.max(820, Math.round(viewportHeight * 1.15));
  if (width <= 768) return Math.max(880, Math.round(viewportHeight * 1.06));
  if (width <= 1080) return 900;
  return 840;
}

export default function DemoPage({ language = "en" }) {
  const [frameHeight, setFrameHeight] = useState(() => getDemoHeight());
  const copy = DEMO_COPY[language] ?? DEMO_COPY.en;

  useEffect(() => {
    const onResize = () => setFrameHeight(getDemoHeight());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container page demoPage">
      <section className="pageHero demoHero reveal" id="demoTop">
        <div className="pill">
          <span className="pillDot" aria-hidden="true" />
          {copy.pill}
        </div>
        <h1 className="pageTitle">
          {copy.titleBefore}{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {copy.titleAccent}
          </span>
          {copy.titleAfter}
        </h1>
        <p className="pageSubtitle">{copy.subtitle}</p>
        <div className="actionsRow demoHeroActions" aria-label="Demo page actions">
          <a className="btn btnPrimary" href="#demoFrame">
            {copy.jumpToDemo}
          </a>
          <button type="button" className="btn btnGhost" onClick={openSignup}>
            {copy.orderNow}
          </button>
        </div>
      </section>

      <section className="embedGrid demoGrid" aria-label="Standalone demo preview">
        <div className="embedCard demoEmbedCard reveal" id="demoFrame">
          <div className="embedHeader">
            <div>
              <h2 className="embedTitle">{copy.cardTitle}</h2>
              <p className="embedHint">{copy.cardHint}</p>
            </div>
          </div>

          <div className="embedFrameWrap embedFrameWrapWide demoFrameWrap" style={{ minHeight: `${frameHeight}px` }}>
            <iframe
              src={DEMO_SRC}
              title="BMON Live Demo"
              className="demoFrame"
              style={{ width: "100%", height: `${frameHeight}px`, border: "none" }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="clipboard-write; fullscreen"
            />
          </div>

          <p className="demoNote">{copy.note}</p>
        </div>
      </section>

      <section className="contactInfo demoChecklist reveal" aria-label="Demo review checklist">
        <h2 className="infoHeading">{copy.checklistTitle}</h2>
        <div className="infoGrid">
          {copy.checklist.map((item) => (
            <div key={item} className="infoCard">
              <p className="infoBody">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
