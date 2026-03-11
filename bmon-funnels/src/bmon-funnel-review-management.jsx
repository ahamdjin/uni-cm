import { useState } from "react";

const COLORS = {
  bg: "transparent",
  card: "var(--surface)",
  cardHover: "rgba(255, 255, 255, 0.92)",
  accent: "var(--accent)",
  accent2: "var(--accent-2)",
  text: "var(--text)",
  textMuted: "var(--muted)",
  border: "var(--border)",
  highlight: "var(--accent-soft)",
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

export default function BMONReviewFunnel({ embedded = false }) {
  const [annual, setAnnual] = useState(false);
  const price = annual ? 197 : 247;

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: COLORS.bg, color: COLORS.text, minHeight: embedded ? "auto" : "100vh" }}>

      {/* NAV */}
      {!embedded && (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>
            <span style={{ color: COLORS.accent }}>B</span>MON
          </div>
          <div style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 14, color: COLORS.textMuted }}>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <button
              type="button"
              style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, color: "#fff", border: "none", padding: "10px 16px", borderRadius: 999, fontWeight: 850, fontSize: 13, cursor: "pointer" }}
            >
              Start free trial
            </button>
          </div>
        </nav>
      )}

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "76px 24px 52px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, var(--accent-soft), var(--accent-soft-2))`, border: `1px solid ${COLORS.border}`, borderRadius: 999, padding: "7px 14px", fontSize: 13, color: COLORS.text, marginBottom: 26, fontWeight: 750 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})` }} aria-hidden="true" />
          Review management that compounds monthly
        </div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 66px)", lineHeight: 1.06, fontWeight: 950, margin: "0 0 18px", letterSpacing: "-0.04em" }}>
          Turn your reviews into your{" "}
          <span style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
            #1 sales channel
          </span>
        </h1>
        <p style={{ fontSize: 18, color: COLORS.textMuted, lineHeight: 1.75, maxWidth: 640, margin: "0 auto 34px" }}>
          BMON automates review collection, crafts on-brand AI responses, and boosts your Google ranking—so new customers find and choose you.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#pricing" style={{ textDecoration: "none" }}>
            <button style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, color: "#fff", border: "none", padding: "14px 22px", borderRadius: 999, fontWeight: 900, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 18px 52px rgba(79, 70, 229, 0.22)" }}>
              Start free trial <ArrowIcon />
            </button>
          </a>
          <a href="#how" style={{ textDecoration: "none" }}>
            <button style={{ background: "rgba(255,255,255,0.7)", color: COLORS.text, border: `1px solid ${COLORS.border}`, padding: "14px 22px", borderRadius: 999, fontWeight: 850, fontSize: 15, cursor: "pointer" }}>
              How it works
            </button>
          </a>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section style={{ maxWidth: 820, margin: "0 auto 80px", display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap", padding: "0 24px" }}>
        {[
          { num: "4.9★", label: "Avg client rating" },
          { num: "3.2×", label: "More reviews in 90 days" },
          { num: "87%", label: "Response rate" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 34, fontWeight: 950, color: COLORS.accent, letterSpacing: "-0.03em" }}>{s.num}</div>
            <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 4, fontWeight: 650 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ maxWidth: 1000, margin: "0 auto 100px", padding: "0 24px" }}>
        <h2 style={{ fontSize: 40, textAlign: "center", fontWeight: 950, marginBottom: 54, letterSpacing: "-0.03em" }}>
          Simple. Automated.{" "}
          <span style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
            Powerful.
          </span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {[
            { step: "01", title: "Connect", desc: "Link your Google Business Profile in 60 seconds. We sync everything automatically." },
            { step: "02", title: "Collect", desc: "Smart email & SMS campaigns request reviews from happy customers at the perfect moment." },
            { step: "03", title: "Respond", desc: "AI writes on-brand responses to every review — positive or negative — within minutes." },
            { step: "04", title: "Grow", desc: "Watch your star rating climb, your local SEO improve, and new customers roll in." },
          ].map((item, i) => (
            <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 24, padding: "36px 28px", position: "relative", overflow: "hidden", boxShadow: "var(--shadow-sm)", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 44, fontWeight: 950, color: "rgba(79, 70, 229, 0.14)", position: "absolute", top: 14, right: 18, letterSpacing: "-0.02em" }}>{item.step}</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12, marginTop: 0, letterSpacing: "-0.02em" }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ maxWidth: 800, margin: "0 auto 100px", padding: "0 24px" }}>
        <h2 style={{ fontSize: 40, textAlign: "center", fontWeight: 950, marginBottom: 12, letterSpacing: "-0.03em" }}>
          Everything you need to{" "}
          <span style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
            dominate
          </span>{" "}
          reviews
        </h2>
        <p style={{ textAlign: "center", color: COLORS.textMuted, marginBottom: 48, fontSize: 16, lineHeight: 1.7 }}>
          One plan. One price. No hidden fees.
        </p>
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
        <h2 style={{ fontSize: 40, fontWeight: 950, marginBottom: 10, letterSpacing: "-0.03em" }}>
          One price.{" "}
          <span style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
            Zero surprises.
          </span>
        </h2>
        <p style={{ color: COLORS.textMuted, marginBottom: 32, lineHeight: 1.7 }}>Simple pricing that grows with you.</p>

        {/* Toggle */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center", marginBottom: 40 }}>
          <span style={{ fontSize: 14, color: !annual ? COLORS.text : COLORS.textMuted, fontWeight: !annual ? 600 : 400 }}>Monthly</span>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(!annual)}
            style={{ width: 56, height: 30, borderRadius: 999, background: annual ? `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})` : "rgba(11, 16, 32, 0.14)", cursor: "pointer", position: "relative", transition: "background 220ms ease", border: "none", padding: 0 }}
          >
            <div style={{ width: 24, height: 24, borderRadius: 999, background: "#fff", position: "absolute", top: 3, left: annual ? 29 : 3, transition: "left 220ms ease", boxShadow: "0 12px 30px rgba(11, 16, 32, 0.18)" }} />
          </button>
          <span style={{ fontSize: 14, color: annual ? COLORS.text : COLORS.textMuted, fontWeight: annual ? 600 : 400 }}>
            Annual <span style={{ color: COLORS.accent, fontSize: 12 }}>Save 20%</span>
          </span>
        </div>

        {/* Price Card */}
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.card}, ${COLORS.cardHover})`,
          border: `2px solid ${COLORS.accent}`,
          borderRadius: 28,
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "var(--shadow-sm)",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ position: "absolute", top: 0, right: 0, background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, color: "#fff", padding: "6px 18px", borderRadius: "0 0 0 14px", fontSize: 12, fontWeight: 850, textTransform: "uppercase", letterSpacing: "0.6px" }}>
            Most Popular
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 900, marginTop: 0, marginBottom: 4, letterSpacing: "-0.01em" }}>Review Management Pro</h3>
          <p style={{ color: COLORS.textMuted, fontSize: 14, marginBottom: 32 }}>Per location / month</p>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 32 }}>
            <span style={{ fontSize: 20, color: COLORS.textMuted }}>$</span>
            <span style={{ fontSize: 64, fontWeight: 950, lineHeight: 1, letterSpacing: "-0.03em" }}>{price}</span>
            <span style={{ fontSize: 16, color: COLORS.textMuted }}>/mo</span>
          </div>
          <button style={{
            width: "100%",
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`,
            color: "#fff",
            border: "none",
            padding: "16px",
            borderRadius: 999,
            fontWeight: 950,
            fontSize: 15,
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
        <blockquote style={{ fontSize: 22, lineHeight: 1.6, margin: "0 0 22px", fontWeight: 650, letterSpacing: "-0.01em" }}>
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
        background: "linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(124, 58, 237, 0.08))",
        border: "1px solid rgba(79, 70, 229, 0.18)",
        borderRadius: 24,
        textAlign: "center",
        marginLeft: 24,
        marginRight: 24,
      }}>
        <h2 style={{ fontSize: 36, fontWeight: 950, marginTop: 0, marginBottom: 14, letterSpacing: "-0.03em" }}>
          Ready to turn reviews into{" "}
          <span style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
            revenue?
          </span>
        </h2>
        <p style={{ color: COLORS.textMuted, marginBottom: 32, lineHeight: 1.7 }}>Start your free trial today. Setup takes under 5 minutes.</p>
        <button style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`, color: "#fff", border: "none", padding: "16px 34px", borderRadius: 999, fontWeight: 950, fontSize: 15, cursor: "pointer", boxShadow: "0 18px 52px rgba(79, 70, 229, 0.22)" }}>
          Get Started Free
        </button>
      </section>

      {/* FOOTER */}
      {!embedded && (
        <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: "40px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 12, letterSpacing: "-0.02em" }}>
            <span style={{ color: COLORS.accent }}>B</span>MON
          </div>
          <p style={{ fontSize: 13, color: COLORS.textMuted, margin: 0 }}>© {new Date().getFullYear()} BMON. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
