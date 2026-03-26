import { useEffect, useState } from "react";

const BUSINESS_INFO_FORM_SRC = "https://api.leadconnectorhq.com/widget/form/qqN7VPJ3cq4E9qiIzskv";
const BUSINESS_INFO_COPY = {
  en: {
    pill: "Business Demo Intake",
    titleBefore: "Show us your business. We will prepare a",
    titleAccent: "custom AI website demo",
    titleAfter: ".",
    subtitle:
      "Fill in the business details once. We use that information to shape a website demo that includes AI chat, AI voice, and the right local-service messaging for your business.",
    jumpToForm: "Jump to form",
    seeVoice: "See AI voice sample",
    formTitle: "Business information form",
    formHint: "Complete this once so we can prepare your personalized demo",
    note:
      "This form is used only to prepare your demo setup. After submission, we use your answers to shape a website preview and the AI voice and chat assistant flow around your business context.",
    includeTitle: "What to include for the strongest demo",
    includeCards: [
      {
        title: "Business basics",
        body: "Share your main service, location, and the website or Google Business profile you want us to model.",
      },
      {
        title: "Lead flow context",
        body: "Tell us which offers, questions, or bookings your visitors usually ask for so the AI flow matches real intent.",
      },
      {
        title: "Brand direction",
        body: "Include any tone, style, or message constraints so the website and AI assistant feel aligned with your business.",
      },
    ],
    nextTitle: "What happens after you submit",
    nextCards: [
      {
        title: "We review the business details",
        body: "We use the information to understand your service mix, location, and visitor intent.",
      },
      {
        title: "We shape the demo around your business",
        body: "The preview is built to reflect your offer, lead flow, and how AI should respond to real prospects.",
      },
      {
        title: "We walk you through the result",
        body: "You see how the website, AI chat, and AI voice work together before deciding on the next step.",
      },
    ],
  },
  ko: {
    pill: "비즈니스 데모 접수",
    titleBefore: "비즈니스를 알려주시면 맞춤형",
    titleAccent: "AI 웹사이트 데모",
    titleAfter: "를 준비합니다.",
    subtitle:
      "비즈니스 정보를 한 번만 입력하면 됩니다. 그 내용을 바탕으로 AI 채팅, AI 보이스, 그리고 업종에 맞는 로컬 메시지까지 반영한 웹사이트 데모를 준비합니다.",
    jumpToForm: "폼으로 이동",
    seeVoice: "AI 보이스 샘플 보기",
    formTitle: "비즈니스 정보 폼",
    formHint: "맞춤형 데모 준비를 위해 한 번만 입력해 주세요",
    note:
      "이 폼은 데모 구성을 준비하는 용도로만 사용됩니다. 제출 후에는 답변 내용을 바탕으로 웹사이트 미리보기와 AI 보이스·채팅 흐름을 비즈니스 상황에 맞게 구성합니다.",
    includeTitle: "더 좋은 데모를 위해 포함하면 좋은 정보",
    includeCards: [
      {
        title: "비즈니스 기본 정보",
        body: "주요 서비스, 지역, 참고할 웹사이트 또는 Google 비즈니스 프로필을 알려주세요.",
      },
      {
        title: "리드 흐름 정보",
        body: "고객이 주로 묻는 서비스, 질문, 예약 유형을 알려주시면 AI 흐름을 실제 문의에 맞게 설계할 수 있습니다.",
      },
      {
        title: "브랜드 방향",
        body: "톤앤매너, 스타일, 메시지 제한 사항이 있으면 웹사이트와 AI 응대가 브랜드에 맞게 정렬됩니다.",
      },
    ],
    nextTitle: "제출 후 진행 방식",
    nextCards: [
      {
        title: "비즈니스 정보를 검토합니다",
        body: "서비스 구성, 지역, 방문자 의도를 파악하기 위해 제출 내용을 먼저 정리합니다.",
      },
      {
        title: "비즈니스에 맞춰 데모를 구성합니다",
        body: "제안, 리드 흐름, 실제 상담 상황에 맞는 AI 응답 구조까지 포함해 데모를 만듭니다.",
      },
      {
        title: "완성된 결과를 함께 확인합니다",
        body: "웹사이트, AI 채팅, AI 보이스가 어떻게 연결되는지 보고 다음 단계를 결정할 수 있습니다.",
      },
    ],
  },
};

function getBusinessInfoFormHeight() {
  if (typeof window === "undefined") return 900;

  const width = window.innerWidth;
  const viewportHeight = window.innerHeight || 900;

  if (width <= 480) return Math.min(1080, Math.max(920, Math.round(viewportHeight * 1.08)));
  if (width <= 768) return Math.min(1040, Math.max(900, Math.round(viewportHeight * 1.04)));
  if (width <= 1080) return 940;
  return 900;
}

export default function BusinessInfoPage({ language = "en" }) {
  const [formHeight, setFormHeight] = useState(() => getBusinessInfoFormHeight());
  const copy = BUSINESS_INFO_COPY[language] ?? BUSINESS_INFO_COPY.en;

  useEffect(() => {
    const onResize = () => setFormHeight(getBusinessInfoFormHeight());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container page businessInfoPage">
      <section className="pageHero businessInfoHero reveal" id="businessInfoTop">
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
        <div className="actionsRow businessInfoHeroActions" aria-label="Business demo actions">
          <a className="btn btnPrimary" href="#businessInfoForm">
            {copy.jumpToForm}
          </a>
          <a className="btn btnGhost" href="https://bmon.ai/home#voiceDemo">
            {copy.seeVoice}
          </a>
        </div>
      </section>

      <section className="embedGrid businessInfoGrid" aria-label="Business demo setup">
        <div className="embedCard businessInfoEmbedCard reveal" id="businessInfoForm">
          <div className="embedHeader">
            <div>
              <h2 className="embedTitle">{copy.formTitle}</h2>
              <p className="embedHint">{copy.formHint}</p>
            </div>
          </div>

          <div className="embedFrameWrap embedFrameWrapWide businessInfoFrameWrap" style={{ minHeight: `${formHeight}px` }}>
            <iframe
              src={BUSINESS_INFO_FORM_SRC}
              style={{ width: "100%", height: `${formHeight}px`, border: "none", borderRadius: 3 }}
              id="inline-qqN7VPJ3cq4E9qiIzskv"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="AI Chat Demo Opt-In (do not delete)"
              data-height={String(formHeight)}
              data-layout-iframe-id="inline-qqN7VPJ3cq4E9qiIzskv"
              data-form-id="qqN7VPJ3cq4E9qiIzskv"
              title="AI Chat Demo Opt-In (do not delete)"
              className="businessInfoFrame"
              scrolling="yes"
            />
          </div>

          <p className="businessInfoNote">{copy.note}</p>
        </div>
      </section>

      <section className="contactInfo reveal" aria-label="Why this form works best">
        <h2 className="infoHeading">{copy.includeTitle}</h2>
        <div className="infoGrid">
          {copy.includeCards.map((card) => (
            <div key={card.title} className="infoCard">
              <h3 className="infoTitle">{card.title}</h3>
              <p className="infoBody">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contactInfo businessInfoNextSteps reveal" aria-label="What happens after submission">
        <h2 className="infoHeading">{copy.nextTitle}</h2>
        <div className="infoGrid">
          {copy.nextCards.map((card) => (
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
