import { useEffect } from "react";

const BUSINESS_INFO_FORM_SCRIPT_SRC = "https://api.leadconnectorhq.com/js/form_embed.js";
const BUSINESS_INFO_FORM_SRC = "https://api.leadconnectorhq.com/widget/form/qqN7VPJ3cq4E9qiIzskv";

export default function BusinessInfoPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector(`script[src="${BUSINESS_INFO_FORM_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = BUSINESS_INFO_FORM_SCRIPT_SRC;
    script.async = true;
    script.dataset.ghlFormEmbed = "business-info";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container page businessInfoPage">
      <section className="pageHero businessInfoHero reveal" id="businessInfoTop">
        <div className="pill">
          <span className="pillDot" aria-hidden="true" />
          Business Demo Intake
        </div>
        <h1 className="pageTitle">
          Show us your business. We will prepare a{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            custom AI website demo
          </span>
          .
        </h1>
        <p className="pageSubtitle">
          Fill in the business details once. We use that information to shape a website demo that includes AI chat, AI voice, and the right local-service messaging for your business.
        </p>
        <div className="actionsRow businessInfoHeroActions" aria-label="Business demo actions">
          <a className="btn btnPrimary" href="#businessInfoForm">
            Jump to form
          </a>
          <a className="btn btnGhost" href="https://bmon.ai/home#voiceDemo">
            See AI voice sample
          </a>
        </div>
      </section>

      <section className="businessInfoLayout" aria-label="Business demo setup">
        <aside className="businessInfoSidebar reveal">
          <article className="businessInfoInfoCard">
            <h2 className="businessInfoInfoTitle">What you get</h2>
            <p className="businessInfoInfoText">
              A tailored preview of how your website can look and how AI chat and voice can qualify visitors, answer questions, and capture leads.
            </p>
          </article>

          <article className="businessInfoInfoCard">
            <h2 className="businessInfoInfoTitle">Best input to share</h2>
            <ul className="businessInfoChecklist">
              <li>Your core service and target area</li>
              <li>Your current website or Google Business link</li>
              <li>The offers you want visitors to ask about</li>
              <li>Any tone, style, or brand constraints</li>
            </ul>
          </article>

          <article className="businessInfoInfoCard">
            <h2 className="businessInfoInfoTitle">Why we ask</h2>
            <p className="businessInfoInfoText">
              Better business context produces a better demo. The more accurate the inputs, the closer the site structure, messaging, and AI assistant flow will be to your real business.
            </p>
          </article>
        </aside>

        <div className="embedCard businessInfoEmbedCard reveal" id="businessInfoForm">
          <div className="embedHeader">
            <div>
              <h2 className="embedTitle">Business information form</h2>
              <p className="embedHint">Complete this once so we can prepare your personalized demo</p>
            </div>
          </div>

          <div className="embedFrameWrap businessInfoFrameWrap">
            <iframe
              src={BUSINESS_INFO_FORM_SRC}
              style={{ width: "100%", height: "100%", border: "none", borderRadius: 3 }}
              id="inline-qqN7VPJ3cq4E9qiIzskv"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="AI Chat Demo Opt-In (do not delete)"
              data-height="820"
              data-layout-iframe-id="inline-qqN7VPJ3cq4E9qiIzskv"
              data-form-id="qqN7VPJ3cq4E9qiIzskv"
              title="AI Chat Demo Opt-In (do not delete)"
              className="businessInfoFrame"
            />
          </div>

          <p className="businessInfoNote">
            This form is used only to prepare your demo setup. After submission, we use your answers to shape a website preview and the AI voice and chat assistant flow around your business context.
          </p>
        </div>
      </section>

      <section className="contactInfo businessInfoNextSteps reveal" aria-label="What happens after submission">
        <h2 className="infoHeading">What happens after you submit</h2>
        <div className="infoGrid">
          <div className="infoCard">
            <h3 className="infoTitle">We review the business details</h3>
            <p className="infoBody">We use the information to understand your service mix, location, and visitor intent.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">We shape the demo around your business</h3>
            <p className="infoBody">The preview is built to reflect your offer, lead flow, and how AI should respond to real prospects.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">We walk you through the result</h3>
            <p className="infoBody">You see how the website, AI chat, and AI voice work together before deciding on the next step.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
