import { useState } from "react";

const COLORS = {
  bg: "#0A0A0F",
  card: "#12121A",
  cardHover: "#1A1A25",
  accent: "#00E5A0",
  accentDim: "#00C488",
  text: "#E8E8ED",
  textMuted: "#8A8A9A",
  border: "#1E1E2A",
  highlight: "rgba(0, 229, 160, 0.08)",
};

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#FBBF24">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={COLORS.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 10 8 14 16 6" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="14" y2="9" />
    <polyline points="10 5 14 9 10 13" />
  </svg>
);

export default function BMONReviewFunnel() {
  const [annual, setAnnual] = useState(false);
  const price = annual ? 197 : 247;

  return (
    <div style={{ fontFamily: "'DM Sans', 'Manrope', sans-serif", background: COLORS.bg, color: COLORS.text, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>
          <span style={{ color: COLORS.accent }}>B</span>MON
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center", fontSize: 14, color: COLORS.textMuted }}>
          <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a>
          <a href="#pricing" style={{ color: "inherit", textDecoration: "none" }}>Pricing</a>
          <button style={{ background: COLORS.accent, color: COLORS.bg, border: "none", padding: "10px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "inline-block", background: COLORS.highlight, border: `1px solid ${COLORS.accent}33`, borderRadius: 100, padding: "6px 20px", fontSize: 13, color: COLORS.accent, marginBottom: 28, fontWeight: 500 }}>
          Trusted by 50+ local businesses
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.1, fontWeight: 400, margin: "0 0 24px" }}>
          Turn your reviews into your
          <span style={{ color: COLORS.accent, fontStyle: "italic" }}> #1 sales channel</span>
        </h1>
        <p style={{ fontSize: 18, color: COLORS.textMuted, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
          BMON automates review collection, crafts on-brand AI responses, and boosts your Google ranking — so new customers find and choose you.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: COLORS.accent, color: COLORS.bg, border: "none", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
            Start Free Trial <ArrowIcon />
          </button>
          <button style={{ background: "transparent", color: COLORS.text, border: `1px solid ${COLORS.border}`, padding: "14px 36px", borderRadius: 10, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
            Book a Demo
          </button>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section style={{ maxWidth: 700, margin: "0 auto 80px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", padding: "0 24px" }}>
        {[
          { num: "4.9★", label: "Avg client rating" },
          { num: "3.2x", label: "More reviews in 90 days" },
          { num: "87%", label: "Response rate" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: COLORS.accent }}>{s.num}</div>
            <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ maxWidth: 1000, margin: "0 auto 100px", padding: "0 24px" }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, textAlign: "center", fontWeight: 400, marginBottom: 60 }}>
          Simple. Automated. <span style={{ color: COLORS.accent, fontStyle: "italic" }}>Powerful.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {[
            { step: "01", title: "Connect", desc: "Link your Google Business Profile in 60 seconds. We sync everything automatically." },
            { step: "02", title: "Collect", desc: "Smart email & SMS campaigns request reviews from happy customers at the perfect moment." },
            { step: "03", title: "Respond", desc: "AI writes on-brand responses to every review — positive or negative — within minutes." },
            { step: "04", title: "Grow", desc: "Watch your star rating climb, your local SEO improve, and new customers roll in." },
          ].map((item, i) => (
            <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: "36px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: 48, fontWeight: 700, color: `${COLORS.accent}15`, position: "absolute", top: 16, right: 20, fontFamily: "'Instrument Serif', serif" }}>{item.step}</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 0 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ maxWidth: 800, margin: "0 auto 100px", padding: "0 24px" }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, textAlign: "center", fontWeight: 400, marginBottom: 16 }}>
          Everything you need to <span style={{ color: COLORS.accent, fontStyle: "italic" }}>dominate</span> reviews
        </h2>
        <p style={{ textAlign: "center", color: COLORS.textMuted, marginBottom: 48, fontSize: 16 }}>One plan. One price. No hidden fees.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {[
            "Automated review request campaigns (Email + SMS)",
            "AI-powered review responses in your brand voice",
            "Google Business Profile optimization",
            "Review monitoring across platforms",
            "Negative review alerts & escalation",
            "Monthly performance reports & analytics",
            "Review widget for your website",
            "Competitor review benchmarking",
            "Dedicated onboarding specialist",
            "Priority support via chat & email",
          ].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: `1px solid ${COLORS.border}` }}>
              <CheckIcon />
              <span style={{ fontSize: 15 }}>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ maxWidth: 540, margin: "0 auto 100px", padding: "0 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, fontWeight: 400, marginBottom: 8 }}>
          One price. <span style={{ color: COLORS.accent, fontStyle: "italic" }}>Zero surprises.</span>
        </h2>
        <p style={{ color: COLORS.textMuted, marginBottom: 32 }}>Simple pricing that grows with you.</p>

        {/* Toggle */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center", marginBottom: 40 }}>
          <span style={{ fontSize: 14, color: !annual ? COLORS.text : COLORS.textMuted, fontWeight: !annual ? 600 : 400 }}>Monthly</span>
          <div
            onClick={() => setAnnual(!annual)}
            style={{ width: 52, height: 28, borderRadius: 14, background: annual ? COLORS.accent : COLORS.border, cursor: "pointer", position: "relative", transition: "background 0.3s" }}
          >
            <div style={{ width: 22, height: 22, borderRadius: 11, background: "#fff", position: "absolute", top: 3, left: annual ? 27 : 3, transition: "left 0.3s" }} />
          </div>
          <span style={{ fontSize: 14, color: annual ? COLORS.text : COLORS.textMuted, fontWeight: annual ? 600 : 400 }}>
            Annual <span style={{ color: COLORS.accent, fontSize: 12 }}>Save 20%</span>
          </span>
        </div>

        {/* Price Card */}
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.card}, ${COLORS.cardHover})`,
          border: `2px solid ${COLORS.accent}`,
          borderRadius: 24,
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: 0, right: 0, background: COLORS.accent, color: COLORS.bg, padding: "6px 20px", borderRadius: "0 0 0 12px", fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>
            Most Popular
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 4 }}>Review Management Pro</h3>
          <p style={{ color: COLORS.textMuted, fontSize: 14, marginBottom: 32 }}>Per location / month</p>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 32 }}>
            <span style={{ fontSize: 20, color: COLORS.textMuted }}>$</span>
            <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1 }}>{price}</span>
            <span style={{ fontSize: 16, color: COLORS.textMuted }}>/mo</span>
          </div>
          <button style={{
            width: "100%",
            background: COLORS.accent,
            color: COLORS.bg,
            border: "none",
            padding: "16px",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            marginBottom: 8,
          }}>
            Start 14-Day Free Trial
          </button>
          <p style={{ fontSize: 12, color: COLORS.textMuted, margin: 0 }}>No credit card required</p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ maxWidth: 700, margin: "0 auto 100px", padding: "0 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 20 }}>
          {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
        </div>
        <blockquote style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, fontStyle: "italic", lineHeight: 1.5, margin: "0 0 24px", fontWeight: 400 }}>
          "We went from 23 Google reviews to 147 in four months. BMON basically runs our reputation on autopilot."
        </blockquote>
        <div style={{ fontSize: 14, color: COLORS.textMuted }}>
          <strong style={{ color: COLORS.text }}>Sarah Kim</strong> · Owner, Kim's Auto Body
        </div>
      </section>

      {/* CTA */}
      <section style={{
        maxWidth: 900,
        margin: "0 auto 80px",
        padding: "60px 40px",
        background: `linear-gradient(135deg, ${COLORS.accent}15, ${COLORS.accent}05)`,
        border: `1px solid ${COLORS.accent}33`,
        borderRadius: 24,
        textAlign: "center",
        marginLeft: 24,
        marginRight: 24,
      }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, fontWeight: 400, marginTop: 0, marginBottom: 16 }}>
          Ready to turn reviews into <span style={{ color: COLORS.accent, fontStyle: "italic" }}>revenue?</span>
        </h2>
        <p style={{ color: COLORS.textMuted, marginBottom: 32 }}>Start your free trial today. Setup takes under 5 minutes.</p>
        <button style={{ background: COLORS.accent, color: COLORS.bg, border: "none", padding: "16px 48px", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
          Get Started Free
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: "40px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
          <span style={{ color: COLORS.accent }}>B</span>MON
        </div>
        <p style={{ fontSize: 13, color: COLORS.textMuted, margin: 0 }}>© 2026 BMON. All rights reserved.</p>
      </footer>
    </div>
  );
}
