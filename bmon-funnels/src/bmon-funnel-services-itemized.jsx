import { useState } from "react";

const C = {
  bg: "#FAFAF8",
  card: "#FFFFFF",
  dark: "#0D0D0D",
  accent: "#2563EB",
  accentLight: "#DBEAFE",
  green: "#10B981",
  purple: "#7C3AED",
  orange: "#F59E0B",
  muted: "#6B7280",
  border: "#E5E7EB",
  lightBg: "#F3F4F6",
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
        borderRadius: 20,
        padding: "36px 32px",
        border: popular ? `2px solid ${color}` : `1px solid ${C.border}`,
        position: "relative",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.08)" : "0 2px 12px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {popular && (
        <div style={{
          position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
          background: color, color: "#fff", padding: "4px 18px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px",
        }}>
          Core Service
        </div>
      )}
      <div style={{ width: 48, height: 48, borderRadius: 14, background: colorBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: 22 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: C.dark }}>{title}</h3>
      <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6, margin: "0 0 24px", flex: 1 }}>{desc}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 24 }}>
        <span style={{ fontSize: 14, color: C.muted }}>$</span>
        <span style={{ fontSize: 42, fontWeight: 800, color: C.dark, lineHeight: 1 }}>{price}</span>
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
        background: popular ? color : "transparent",
        color: popular ? "#fff" : color,
        border: popular ? "none" : `2px solid ${color}`,
        padding: "14px",
        borderRadius: 12,
        fontWeight: 700,
        fontSize: 15,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: "auto",
      }}>
        Get Started <Arrow />
      </button>
    </div>
  );
};

export default function BMONServicesFunnel() {
  const [selectedServices, setSelectedServices] = useState(["reviews"]);

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
    <div style={{ fontFamily: "'DM Sans', 'Manrope', sans-serif", background: C.bg, color: C.dark, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-1px" }}>
          <span style={{ color: C.accent }}>B</span>MON
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center", fontSize: 14, color: C.muted }}>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#bundle" style={{ color: "inherit", textDecoration: "none" }}>Bundle & Save</a>
          <button style={{ background: C.dark, color: "#fff", border: "none", padding: "10px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Book a Call
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 24px 40px", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "inline-block", background: C.accentLight, borderRadius: 100, padding: "6px 18px", fontSize: 13, color: C.accent, marginBottom: 28, fontWeight: 600 }}>
          AI-Powered Growth for Local Businesses
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 5.5vw, 58px)", lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", color: C.dark }}>
          Your complete digital presence,{" "}
          <span style={{ fontStyle: "italic", color: C.accent }}>handled.</span>
        </h1>
        <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.7, maxWidth: 580, margin: "0 auto 40px" }}>
          Pick what you need — review management, a smart website, or an AI chatbot. Bundle them together and save up to 15%.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#services" style={{ textDecoration: "none" }}>
            <button style={{ background: C.accent, color: "#fff", border: "none", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              See Services <Arrow />
            </button>
          </a>
          <button style={{ background: "transparent", color: C.dark, border: `1px solid ${C.border}`, padding: "14px 36px", borderRadius: 10, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
            Book a Demo
          </button>
        </div>
      </section>

      {/* STATS */}
      <section style={{ maxWidth: 750, margin: "40px auto 80px", display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap", padding: "0 24px" }}>
        {[
          { num: "3.2x", label: "More reviews", color: C.accent },
          { num: "24/7", label: "AI chatbot coverage", color: C.purple },
          { num: "47%", label: "More leads from web", color: C.green },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: s.color }}>{s.num}</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" style={{ maxWidth: 1100, margin: "0 auto 60px", padding: "0 24px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, textAlign: "center", fontWeight: 700, marginBottom: 12 }}>
          Choose your growth stack
        </h2>
        <p style={{ textAlign: "center", color: C.muted, marginBottom: 48, fontSize: 16 }}>Each service works on its own — or combine them for maximum impact.</p>

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
            color={C.green}
            colorBg="#D1FAE5"
            title="Smart Website Design"
            price="497"
            desc="A conversion-optimized, mobile-first website built for local search — managed & updated for you."
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
            color={C.purple}
            colorBg="#EDE9FE"
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
      <section id="bundle" style={{ maxWidth: 700, margin: "0 auto 100px", padding: "0 24px" }}>
        <div style={{
          background: C.card,
          borderRadius: 24,
          padding: "40px 36px",
          border: `1px solid ${C.border}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, textAlign: "center", margin: "0 0 8px" }}>
            Build Your Bundle
          </h3>
          <p style={{ textAlign: "center", color: C.muted, marginBottom: 32, fontSize: 14 }}>
            Select 2+ services and save. 3 services = 15% off.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {Object.entries(services).map(([id, svc]) => {
              const checked = selectedServices.includes(id);
              const colors = { reviews: C.accent, website: C.green, chatbot: C.purple };
              return (
                <div
                  key={id}
                  onClick={() => toggleService(id)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 20px",
                    borderRadius: 14,
                    border: checked ? `2px solid ${colors[id]}` : `1px solid ${C.border}`,
                    background: checked ? `${colors[id]}08` : C.bg,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6,
                      border: checked ? `2px solid ${colors[id]}` : `2px solid ${C.border}`,
                      background: checked ? colors[id] : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}>
                      {checked && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="2 6 5 9 10 3" /></svg>}
                    </div>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{svc.label}</span>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 15, color: C.muted }}>${svc.price}/mo</span>
                </div>
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
                <span style={{ color: C.green, fontWeight: 600 }}>Bundle discount ({Math.round(bundleDiscount * 100)}%)</span>
                <span style={{ color: C.green, fontWeight: 600 }}>-${total - finalPrice}/mo</span>
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
              background: selectedServices.length > 0 ? C.accent : C.border,
              color: selectedServices.length > 0 ? "#fff" : C.muted,
              border: "none",
              padding: "16px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              cursor: selectedServices.length > 0 ? "pointer" : "not-allowed",
            }}
          >
            {selectedServices.length === 0 ? "Select a service" : `Start with ${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""}`}
          </button>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ maxWidth: 700, margin: "0 auto 100px", padding: "0 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 16 }}>
          {[1,2,3,4,5].map(i => (
            <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FBBF24">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontStyle: "italic", lineHeight: 1.5, margin: "0 0 24px", fontWeight: 400, color: C.dark }}>
          "We bundled all three services and our inbound leads tripled. The AI chatbot alone paid for itself in week one."
        </blockquote>
        <div style={{ fontSize: 14, color: C.muted }}>
          <strong style={{ color: C.dark }}>David Park</strong> · Owner, Park Dental Studio
        </div>
      </section>

      {/* CTA */}
      <section style={{
        maxWidth: 900,
        margin: "0 auto 80px",
        padding: "60px 40px",
        background: C.dark,
        borderRadius: 24,
        textAlign: "center",
        marginLeft: 24,
        marginRight: 24,
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: "#fff", marginTop: 0, marginBottom: 16 }}>
          Ready to grow on autopilot?
        </h2>
        <p style={{ color: "#9CA3AF", marginBottom: 32, fontSize: 16 }}>Pick one service or grab the full stack. Setup takes under 10 minutes.</p>
        <button style={{ background: C.accent, color: "#fff", border: "none", padding: "16px 48px", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
          Get Started Free
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "40px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.5px" }}>
          <span style={{ color: C.accent }}>B</span>MON
        </div>
        <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>© 2026 BMON. All rights reserved.</p>
      </footer>
    </div>
  );
}
