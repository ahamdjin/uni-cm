import { useEffect, useState } from "react";

const BUSINESS_INFO_FORM_SRC = "https://api.leadconnectorhq.com/widget/form/qqN7VPJ3cq4E9qiIzskv";

function getBusinessInfoFormHeight() {
  if (typeof window === "undefined") return 900;

  const width = window.innerWidth;
  const viewportHeight = window.innerHeight || 900;

  if (width <= 480) return Math.min(1080, Math.max(920, Math.round(viewportHeight * 1.08)));
  if (width <= 768) return Math.min(1040, Math.max(900, Math.round(viewportHeight * 1.04)));
  if (width <= 1080) return 940;
  return 900;
}

export default function BusinessInfoPage() {
  const [formHeight, setFormHeight] = useState(() => getBusinessInfoFormHeight());

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

      <section className="embedGrid businessInfoGrid" aria-label="Business demo setup">
        <div className="embedCard businessInfoEmbedCard reveal" id="businessInfoForm">
          <div className="embedHeader">
            <div>
              <h2 className="embedTitle">Business information form</h2>
              <p className="embedHint">Complete this once so we can prepare your personalized demo</p>
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

          <p className="businessInfoNote">
            This form is used only to prepare your demo setup. After submission, we use your answers to shape a website preview and the AI voice and chat assistant flow around your business context.
          </p>
        </div>
      </section>

      <section className="contactInfo reveal" aria-label="Why this form works best">
        <h2 className="infoHeading">What to include for the strongest demo</h2>
        <div className="infoGrid">
          <div className="infoCard">
            <h3 className="infoTitle">Business basics</h3>
            <p className="infoBody">Share your main service, location, and the website or Google Business profile you want us to model.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">Lead flow context</h3>
            <p className="infoBody">Tell us which offers, questions, or bookings your visitors usually ask for so the AI flow matches real intent.</p>
          </div>
          <div className="infoCard">
            <h3 className="infoTitle">Brand direction</h3>
            <p className="infoBody">Include any tone, style, or message constraints so the website and AI assistant feel aligned with your business.</p>
          </div>
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
