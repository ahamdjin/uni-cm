import { useState } from "react";

const C = {
  bg: "transparent",
  card: "var(--surface)",
  cardStrong: "var(--surface-strong)",
  dark: "var(--text)",
  accent: "var(--accent)",
  accent2: "var(--accent-2)",
  accentLight: "var(--accent-soft)",
  accentLight2: "var(--accent-soft-2)",
  sky: "#0ea5e9",
  skySoft: "rgba(14, 165, 233, 0.14)",
  muted: "var(--muted)",
  border: "var(--border)",
};

const Check = ({ color = C.accent }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3.5 9 7 12.5 14.5 5.5" />
  </svg>
);

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
  </svg>
);

const ServiceCard = ({ icon, color, colorBg, title, price, desc, features, popular }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.card,
        borderRadius: 24,
        padding: "36px 32px",
        border: popular ? `2px solid ${color}` : `1px solid ${C.border}`,
        position: "relative",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow)" : "var(--shadow-sm)",
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(10px)",
      }}
    >
      {popular && (
        <div style={{
          position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
          background: `linear-gradient(135deg, ${color}, ${C.accent2})`,
          color: "#fff",
          padding: "6px 16px",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.6px",
        }}>
          Core Service
        </div>
      )}
      <div style={{ width: 48, height: 48, borderRadius: 14, background: colorBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: 22 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 850, margin: "0 0 8px", color: C.dark, letterSpacing: "-0.02em" }}>{title}</h3>
      <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6, margin: "0 0 24px", flex: 1 }}>{desc}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 24 }}>
        <span style={{ fontSize: 14, color: C.muted }}>$</span>
        <span style={{ fontSize: 44, fontWeight: 900, color: C.dark, lineHeight: 1, letterSpacing: "-0.03em" }}>{price}</span>
        <span style={{ fontSize: 14, color: C.muted }}>/mo</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <div style={{ marginTop: 2 }}><Check color={color} /></div>
            <span style={{ fontSize: 14, color: C.dark, lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>
      <button style={{
        width: "100%",
        background: popular ? `linear-gradient(135deg, ${color}, ${C.accent2})` : "transparent",
        color: popular ? "#fff" : color,
        border: popular ? "none" : `1px solid ${color}`,
        padding: "14px 16px",
        borderRadius: 999,
        fontWeight: 850,
        fontSize: 14,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: "auto",
        boxShadow: popular ? "0 16px 48px rgba(79, 70, 229, 0.22)" : "none",
      }}>
        Get Started <Arrow />
      </button>
    </div>
  );
};

export default function BMONServicesFunnel({ embedded = false }) {
  const [selectedServices, setSelectedServices] = useState(["reviews"]);
  const [contactTab, setContactTab] = useState("form");

  const toggleService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const services = {
    reviews: { price: 247, label: "Review Management" },
    website: { price: 497, label: "Smart Website Design" },
    chatbot: { price: 197, label: "AI Chatbot" },
  };

  const total = selectedServices.reduce((sum, id) => sum + services[id].price, 0);
  const bundleDiscount = selectedServices.length >= 3 ? 0.15 : selectedServices.length >= 2 ? 0.10 : 0;
  const finalPrice = Math.round(total * (1 - bundleDiscount));

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: C.bg, color: C.dark, minHeight: embedded ? "auto" : "100vh" }}>
      {!embedded && (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>
            <span style={{ color: C.accent }}>B</span>MON
          </div>
          <div style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 14, color: C.muted }}>
            <a href="#services">Services</a>
            <a href="#bundle">Bundle</a>
            <button
              type="button"
              style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, color: "#fff", border: "none", padding: "10px 16px", borderRadius: 999, fontWeight: 850, fontSize: 13, cursor: "pointer" }}
            >
              Start free trial
            </button>
          </div>
        </nav>
      )}

      {/* HERO */}
      <section className="reveal" style={{ textAlign: "center", padding: "76px 24px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${C.accentLight}, ${C.accentLight2})`, border: `1px solid ${C.border}`, borderRadius: 999, padding: "7px 14px", fontSize: 13, color: C.dark, marginBottom: 26, fontWeight: 750 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})` }} aria-hidden="true" />
          AI marketing ops for local businesses
        </div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 68px)", lineHeight: 1.06, fontWeight: 950, margin: "0 0 18px", color: C.dark, letterSpacing: "-0.04em" }}>
          Attract{" "}
          <span style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
            new customers
          </span>
          <br /> and bring them back more often
        </h1>
        <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.75, maxWidth: 640, margin: "0 auto 34px" }}>
          Pick what you need—review management, a smart website, or an AI chatbot. Bundle them together and save up to 15%.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#services" style={{ textDecoration: "none" }}>
            <button style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, color: "#fff", border: "none", padding: "14px 22px", borderRadius: 999, fontWeight: 900, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 18px 52px rgba(79, 70, 229, 0.22)" }}>
              See Services <Arrow />
            </button>
          </a>
          <a href="#bundle" style={{ textDecoration: "none" }}>
            <button style={{ background: "rgba(255,255,255,0.7)", color: C.dark, border: `1px solid ${C.border}`, padding: "14px 22px", borderRadius: 999, fontWeight: 850, fontSize: 15, cursor: "pointer" }}>
              Build a bundle
            </button>
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="reveal" style={{ maxWidth: 980, margin: "0 auto 72px", padding: "0 24px", textAlign: "center" }}>
        <p style={{ margin: "0 0 18px", color: C.muted, fontSize: 14, fontWeight: 650 }}>
          Trusted by local businesses across health, home services, and retail
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, opacity: 0.75 }}>
          {["Park Dental", "Evergreen HVAC", "Coastal Spa", "Northside Fitness", "Bella Salon"].map((name) => (
            <div
              key={name}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                border: `1px solid ${C.border}`,
                background: "rgba(255,255,255,0.55)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="reveal" style={{ maxWidth: 820, margin: "0 auto 80px", display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap", padding: "0 24px" }}>
        {[
          { num: "3.2Ã—", label: "More reviews", color: C.accent },
          { num: "24/7", label: "Chatbot coverage", color: C.accent2 },
          { num: "47%", label: "More leads", color: C.sky },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 34, fontWeight: 950, color: s.color, letterSpacing: "-0.03em" }}>{s.num}</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 4, fontWeight: 650 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" className="reveal" style={{ maxWidth: 1120, margin: "0 auto 60px", padding: "0 24px" }}>
        <h2 style={{ fontSize: 40, textAlign: "center", fontWeight: 950, marginBottom: 10, letterSpacing: "-0.03em" }}>
          Simply connect your profiles and watch BMON work
        </h2>
        <p style={{ textAlign: "center", color: C.muted, marginBottom: 48, fontSize: 16 }}>
          Each service works on its own—or combine them for maximum impact.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          <ServiceCard
            icon="⭐"
            color={C.accent}
            colorBg={C.accentLight}
            title="Review Management"
            price="247"
            popular
            desc="Automate review collection, respond with AI, and watch your Google ranking climb."
            features={[
              "Automated review requests (Email + SMS)",
              "AI responses in your brand voice",
              "Google Business Profile optimization",
              "Review monitoring & negative alerts",
              "Monthly analytics & competitor tracking",
              "Review widget for your website",
            ]}
          />
          <ServiceCard
            icon="🌐"
            color={C.sky}
            colorBg={C.skySoft}
            title="Smart Website Design"
            price="497"
            desc="A conversion-optimized, mobile-first website built for local search—managed & updated for you."
            features={[
              "Custom 5-page responsive website",
              "SEO-optimized for local search",
              "Monthly content & design updates",
              "Speed-optimized (95+ PageSpeed)",
              "Lead capture forms & call tracking",
              "SSL, hosting & domain included",
            ]}
          />
          <ServiceCard
            icon="🤖"
            color={C.accent2}
            colorBg={C.accentLight2}
            title="AI Chatbot"
            price="197"
            desc="A 24/7 AI assistant trained on your business that captures leads and answers questions instantly."
            features={[
              "Custom-trained on your business info",
              "24/7 lead capture & qualification",
              "Appointment booking integration",
              "Multi-language support",
              "Conversation analytics dashboard",
              "Easy embed on any website",
            ]}
          />
        </div>
      </section>

      {/* BUNDLE BUILDER */}
      <section id="bundle" className="reveal" style={{ maxWidth: 700, margin: "0 auto 100px", padding: "0 24px" }}>
        <div style={{
          background: C.card,
          borderRadius: 28,
          padding: "40px 36px",
          border: `1px solid ${C.border}`,
          boxShadow: "var(--shadow-sm)",
          backdropFilter: "blur(12px)",
        }}>
          <h3 style={{ fontSize: 28, fontWeight: 950, textAlign: "center", margin: "0 0 8px", letterSpacing: "-0.03em" }}>
            Build Your Bundle
          </h3>
          <p style={{ textAlign: "center", color: C.muted, marginBottom: 32, fontSize: 14, lineHeight: 1.6 }}>
            Select 2+ services and save. Pick all 3 for <strong style={{ color: C.dark }}>15% off</strong>.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {Object.entries(services).map(([id, svc]) => {
              const checked = selectedServices.includes(id);
              const theme = {
                reviews: { color: C.accent, bg: "rgba(79, 70, 229, 0.08)" },
                website: { color: C.sky, bg: "rgba(14, 165, 233, 0.08)" },
                chatbot: { color: C.accent2, bg: "rgba(124, 58, 237, 0.08)" },
              }[id];
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={checked}
                  onClick={() => toggleService(id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 18px",
                    borderRadius: 18,
                    border: checked ? `2px solid ${theme.color}` : `1px solid ${C.border}`,
                    background: checked ? theme.bg : "rgba(255,255,255,0.55)",
                    cursor: "pointer",
                    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease",
                    boxShadow: checked ? "0 18px 54px rgba(11, 16, 32, 0.10)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6,
                      border: checked ? `2px solid ${theme.color}` : `2px solid ${C.border}`,
                      background: checked ? theme.color : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}>
                      {checked && <Check color="#fff" />}
                    </div>
                    <span style={{ fontWeight: 900, fontSize: 15, letterSpacing: "-0.01em" }}>{svc.label}</span>
                  </div>
                  <span style={{ fontWeight: 900, fontSize: 14, color: C.muted }}>${svc.price}/mo</span>
                </button>
              );
            })}
          </div>

          {/* Price summary */}
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
            {bundleDiscount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
                <span style={{ color: C.muted }}>Subtotal</span>
                <span style={{ textDecoration: "line-through", color: C.muted }}>${total}/mo</span>
              </div>
            )}
            {bundleDiscount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14 }}>
                <span style={{ color: C.accent, fontWeight: 800 }}>Bundle discount ({Math.round(bundleDiscount * 100)}%)</span>
                <span style={{ color: C.accent, fontWeight: 800 }}>-${total - finalPrice}/mo</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>Your price</span>
              <div>
                <span style={{ fontSize: 36, fontWeight: 800, color: C.dark }}>${finalPrice}</span>
                <span style={{ fontSize: 14, color: C.muted }}>/mo</span>
              </div>
            </div>
          </div>

          <button
            disabled={selectedServices.length === 0}
            style={{
              width: "100%",
              marginTop: 28,
              background: selectedServices.length > 0 ? `linear-gradient(135deg, ${C.accent}, ${C.accent2})` : C.border,
              color: selectedServices.length > 0 ? "#fff" : C.muted,
              border: "none",
              padding: "16px",
              borderRadius: 999,
              fontWeight: 950,
              fontSize: 15,
              cursor: selectedServices.length > 0 ? "pointer" : "not-allowed",
              boxShadow: selectedServices.length > 0 ? "0 18px 52px rgba(79, 70, 229, 0.22)" : "none",
            }}
          >
            {selectedServices.length === 0 ? "Select a service" : `Start with ${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""}`}
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal" style={{ maxWidth: 1120, margin: "0 auto 100px", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 34px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${C.accentLight}, ${C.accentLight2})`, border: `1px solid ${C.border}`, borderRadius: 999, padding: "7px 14px", fontSize: 13, color: C.dark, marginBottom: 16, fontWeight: 750 }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})` }} aria-hidden="true" />
            Talk to BMON
          </div>
          <h2 style={{ fontSize: 40, fontWeight: 950, margin: "0 0 10px", letterSpacing: "-0.03em" }}>
            Book a demo or send a message
          </h2>
          <p style={{ margin: 0, color: C.muted, lineHeight: 1.7 }}>
            Use the form for details, or grab a time on the calendar for a quick walkthrough.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
          <div style={{ display: "inline-flex", gap: 6, padding: 6, borderRadius: 999, background: "rgba(11, 16, 32, 0.04)", border: `1px solid ${C.border}` }}>
            <button
              type="button"
              onClick={() => setContactTab("form")}
              style={{
                border: "1px solid transparent",
                borderRadius: 999,
                padding: "10px 14px",
                fontWeight: 800,
                fontSize: 13,
                cursor: "pointer",
                background: contactTab === "form" ? "rgba(255,255,255,0.92)" : "transparent",
                color: contactTab === "form" ? C.dark : "rgba(11, 16, 32, 0.68)",
                boxShadow: contactTab === "form" ? "0 10px 24px rgba(11, 16, 32, 0.08)" : "none",
              }}
            >
              Contact Form
            </button>
            <button
              type="button"
              onClick={() => setContactTab("calendar")}
              style={{
                border: "1px solid transparent",
                borderRadius: 999,
                padding: "10px 14px",
                fontWeight: 800,
                fontSize: 13,
                cursor: "pointer",
                background: contactTab === "calendar" ? "rgba(255,255,255,0.92)" : "transparent",
                color: contactTab === "calendar" ? C.dark : "rgba(11, 16, 32, 0.68)",
                boxShadow: contactTab === "calendar" ? "0 10px 24px rgba(11, 16, 32, 0.08)" : "none",
              }}
            >
              Calendar
            </button>
          </div>
        </div>

        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 28,
            padding: 18,
            boxShadow: "var(--shadow-sm)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, padding: "6px 6px 14px", flexWrap: "wrap" }}>
            <div style={{ fontWeight: 900, letterSpacing: "-0.01em" }}>{contactTab === "form" ? "BMON - Contact Us Form" : "Book a Demo"}</div>
            <div style={{ fontSize: 13, color: C.muted }}>{contactTab === "form" ? "Best for specifics" : "Best for a walkthrough"}</div>
          </div>

          <div style={{ width: "min(680px, 100%)", margin: "0 auto", borderRadius: 28, overflow: "hidden", border: `1px solid ${C.border}`, background: "rgba(255,255,255,0.72)" }}>
            {contactTab === "form" ? (
              <div style={{ height: 764 }}>
                <iframe
                  src="https://link.bmon.ai/widget/form/WyPVoGvcUoMU57sslr9r"
                  style={{ width: "100%", height: "100%", border: "none" }}
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
            ) : (
              <div style={{ height: 764 }}>
                <iframe
                  src="https://link.bmon.ai/widget/booking/gEVDq9hfE7hZU8XvE1zY"
                  style={{ width: "100%", height: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="gEVDq9hfE7hZU8XvE1zY_1773246604635"
                  title="BMON - Booking Calendar"
                />
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <a href="#bundle" style={{ textDecoration: "none" }}>
              <button type="button" style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 999, padding: "10px 14px", fontWeight: 850, fontSize: 13, cursor: "pointer", color: "rgba(11, 16, 32, 0.82)" }}>
                Build a bundle
              </button>
            </a>
            <a href="#services" style={{ textDecoration: "none" }}>
              <button type="button" style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, border: "none", borderRadius: 999, padding: "10px 14px", fontWeight: 900, fontSize: 13, cursor: "pointer", color: "#fff", boxShadow: "0 16px 40px rgba(79, 70, 229, 0.22)" }}>
                Leave a review
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="reveal" style={{ maxWidth: 700, margin: "0 auto 100px", padding: "0 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 16 }}>
          {[1,2,3,4,5].map(i => (
            <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FBBF24">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote style={{ fontSize: 22, lineHeight: 1.6, margin: "0 0 22px", fontWeight: 650, color: C.dark, letterSpacing: "-0.01em" }}>
          "We bundled all three services and our inbound leads tripled. The AI chatbot alone paid for itself in week one."
        </blockquote>
        <div style={{ fontSize: 14, color: C.muted }}>
          <strong style={{ color: C.dark }}>David Park</strong> · Owner, Park Dental Studio
        </div>
      </section>

      {/* CTA */}
      <section className="reveal" style={{
        width: "min(900px, calc(100% - 48px))",
        margin: "0 auto 80px",
        padding: "60px 40px",
        background: `linear-gradient(135deg, rgba(11, 16, 32, 0.92), rgba(11, 16, 32, 0.78))`,
        borderRadius: 24,
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.12)",
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 950, color: "#fff", marginTop: 0, marginBottom: 14, letterSpacing: "-0.03em" }}>
          Ready to grow on autopilot?
        </h2>
        <p style={{ color: "#C7CAD4", marginBottom: 32, fontSize: 16 }}>Pick one service or grab the full stack. Setup takes under 10 minutes.</p>
        <button style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, color: "#fff", border: "none", padding: "16px 34px", borderRadius: 999, fontWeight: 950, fontSize: 15, cursor: "pointer" }}>
          Get Started Free
        </button>
      </section>

      {/* FOOTER */}
      {!embedded && (
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: "40px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 12, letterSpacing: "-0.02em" }}>
            <span style={{ color: C.accent }}>B</span>MON
          </div>
          <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>© {new Date().getFullYear()} BMON. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

