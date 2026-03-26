import { openSignup } from "./bmon-links.js";

const DEMO_PREVIEW_SRC = "https://login.bmon.ai/v2/preview/5zr6UpTBCNQPnDwmIsFd";

const DEMO_COPY = {
  en: {
    eyebrow: "Live AI Demo",
    cardEyebrow: "Preview context",
    title: "Meet Your AI Employee",
    lead: ["Chat with it.", "Talk to it."],
    intro: "Role-play real customer conversations for your business, right now.",
    instruction: "Tap the phone to choose Chat or Voice and experience your AI employee in action.",
    note:
      "This is a personalized demo preview. Live AI employees are fully trained on your business, services, FAQs, and booking system.",
    primaryAction: "Talk To Your Custom Assistant",
    secondaryAction: "Order Now",
    phoneBadge: "Live mobile preview",
    phoneCaption: "The phone now runs the requested BMON preview page directly inside the device frame.",
  },
  ko: {
    eyebrow: "라이브 AI 데모",
    cardEyebrow: "미리보기 안내",
    title: "당신의 AI 직원을 만나보세요",
    lead: ["채팅해 보세요.", "직접 말해 보세요."],
    intro: "지금 바로 실제 고객 대화를 비즈니스 상황처럼 체험해 볼 수 있습니다.",
    instruction: "휴대폰 화면에서 Chat 또는 Voice를 선택하고 AI 직원이 어떻게 응답하는지 직접 확인해 보세요.",
    note:
      "이 화면은 맞춤형 데모 미리보기입니다. 실제 AI 직원은 비즈니스, 서비스, FAQ, 예약 흐름까지 학습된 상태로 제공됩니다.",
    primaryAction: "맞춤 AI와 대화하기",
    secondaryAction: "주문하기",
    phoneBadge: "라이브 모바일 미리보기",
    phoneCaption: "휴대폰 안에서 요청한 BMON 미리보기 페이지가 기기 프레임에 직접 실행됩니다.",
  },
};

export default function DemoPage({ language = "en" }) {
  const copy = DEMO_COPY[language] ?? DEMO_COPY.en;

  return (
    <div className="container page demoPage">
      <section className="voiceShowcase demoShowcase reveal" id="demoTop">
        <div className="voiceShowcaseContent demoShowcaseContent">
          <div className="voiceSectionEyebrow">{copy.eyebrow}</div>
          <h1 className="voiceSectionTitle demoShowcaseTitle">{copy.title}</h1>
          <p className="demoShowcaseLead">
            <strong>{copy.lead[0]}</strong> <strong>{copy.lead[1]}</strong>
          </p>
          <p className="voiceSectionBody demoShowcaseBody">{copy.intro}</p>
          <p className="voiceSectionBody demoShowcaseBody">{copy.instruction}</p>

          <div className="voiceDemoCard demoShowcaseCard">
            <div className="voiceDemoCardEyebrow">{copy.cardEyebrow}</div>
            <p className="voiceDemoCardBody">
              <em>{copy.note}</em>
            </p>
          </div>

          <div className="actionsRow voiceShowcaseActions demoShowcaseActions" aria-label="Demo page actions">
            <a className="btn btnPrimary" href="#demoPhone">
              {copy.primaryAction}
            </a>
            <button type="button" className="btn btnGhost" onClick={openSignup}>
              {copy.secondaryAction}
            </button>
          </div>
        </div>

        <div className="voiceShowcaseMedia" id="demoPhone">
          <div className="voicePhoneStage demoPhoneStage">
            <div className="voicePhoneBadge">{copy.phoneBadge}</div>
            <div className="voicePhoneFrame">
              <div className="voicePhoneHardware" aria-hidden="true">
                <span className="voicePhoneNotch" />
              </div>
              <div className="demoPhoneViewport">
                <iframe
                  src={DEMO_PREVIEW_SRC}
                  title="BMON live mobile demo"
                  className="demoPhonePreviewFrame"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="clipboard-write; fullscreen"
                />
              </div>
            </div>
            <p className="voicePhoneCaption demoPhoneCaption">{copy.phoneCaption}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
