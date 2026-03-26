import { openSignup } from "./bmon-links.js";

const DEMO_SITE_SRC = "https://empirefenceinc.com/";
const DEMO_WIDGET_DOC = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=320, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
    <style>
      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #ffffff;
      }

      body {
        position: relative;
      }

      .deviceViewport {
        position: absolute;
        inset: 0;
        overflow: hidden;
        background: #ffffff;
      }

      .siteFrame {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
        background: #ffffff;
      }

      body > chat-widget {
        position: fixed !important;
        right: 16px !important;
        bottom: 18px !important;
        display: block !important;
        width: auto !important;
        height: auto !important;
        overflow: visible !important;
        z-index: 3;
        pointer-events: none !important;
      }

      body > chat-widget * {
        box-sizing: border-box;
      }

      body > chat-widget iframe,
      body > chat-widget button,
      body > chat-widget a,
      body > chat-widget [role="dialog"],
      body > chat-widget [role="main"],
      body > chat-widget input,
      body > chat-widget textarea {
        pointer-events: auto !important;
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
      <iframe class="siteFrame" src="${DEMO_SITE_SRC}" title="Empire Fence mobile preview" loading="lazy"></iframe>
    </div>
    <div data-chat-widget data-widget-id="69c01d67633c74d10c369675" data-location-id="VUXXwCAxSkjuGBKAjon6"></div>
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="69c01d67633c74d10c369675">
    </script>
    <script>
      (() => {
        const applyWidgetSizing = () => {
          const host = document.querySelector("chat-widget");
          if (!host) return false;

          const widgetWidth = Math.min(320, Math.max(260, window.innerWidth - 24));
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
    phoneCaption: "Empire Fence site in the phone with the separate widget fitted into the same screen.",
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
    phoneCaption: "휴대폰 안에서 Empire Fence 사이트와 별도 위젯이 같은 화면에 맞춰 실행됩니다.",
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
              <iframe
                srcDoc={DEMO_WIDGET_DOC}
                title="Empire Fence live mobile demo"
                className="voicePhoneScreen"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="clipboard-write; fullscreen"
              />
            </div>
            <p className="voicePhoneCaption demoPhoneCaption">{copy.phoneCaption}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
