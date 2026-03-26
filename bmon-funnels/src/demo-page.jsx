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
    pill: "Live AI Demo",
    titleBefore: "Preview the",
    titleAccent: "live site and widget",
    titleAfter: " on mobile.",
    subtitle:
      "This phone preview loads the Empire Fence website and overlays the separate LeadConnector chat widget directly inside the same mobile frame.",
    jumpToDemo: "Jump to demo",
    orderNow: "Order Now",
    cardTitle: "Empire Fence mobile preview",
    cardHint: "Live site inside the phone with the separate widget overlay",
    note:
      "The screen shows the embedded website while the custom chat widget loads on top of it, so you can review the exact mobile-style interaction in one frame.",
  },
  ko: {
    pill: "??? AI ??",
    titleBefore: "?????",
    titleAccent: "??? ???? ??",
    titleAfter: "? ?????.",
    subtitle:
      "? ??? ????? Empire Fence ????? ????, ??? LeadConnector ?? ??? ?? ??? ??? ?? ?? ??? ??? ? ?? ???.",
    jumpToDemo: "??? ??",
    orderNow: "????",
    cardTitle: "Empire Fence ??? ????",
    cardHint: "??? ?? ??? ???? ?? ??? ?? ?????",
    note:
      "?? ??? ????? ?????, ? ?? ??? ?? ??? ???? ? ????? ??? ????? ?? ??? ? ????.",
  },
};

export default function DemoPage({ language = "en" }) {
  const copy = DEMO_COPY[language] ?? DEMO_COPY.en;

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

      <section className="demoPhoneWrap reveal" id="demoFrame" aria-label="Standalone demo preview">
        <div className="voicePhoneStage demoPhoneStage">
          <div className="voicePhoneBadge">{copy.cardTitle}</div>
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
          <p className="voicePhoneCaption">{copy.cardHint}</p>
          <p className="demoNote">{copy.note}</p>
        </div>
      </section>
    </div>
  );
}
