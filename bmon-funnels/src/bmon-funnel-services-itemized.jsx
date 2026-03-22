import { useState } from "react";

const C = {
  bg: "transparent",
  card: "var(--surface)",
  dark: "var(--text)",
  accent: "var(--accent)",
  accent2: "var(--accent-2)",
  accentLight: "var(--accent-soft)",
  accentLight2: "var(--accent-soft-2)",
  sky: "#0ea5e9",
  skySoft: "rgba(14, 165, 233, 0.14)",
  emerald: "#059669",
  emeraldSoft: "rgba(5, 150, 105, 0.14)",
  muted: "var(--muted)",
  border: "var(--border)",
};

const TICKER_LOGOS = [
  { src: "https://assets.cdn.filesafe.space/nPiNK9DityBBCQSZkAy8/media/69b73308ad027640b1076bf6.png", width: 152 },
  { src: "https://assets.cdn.filesafe.space/nPiNK9DityBBCQSZkAy8/media/69b733080c9f1e15be1b5462.png", width: 158 },
  { src: "https://assets.cdn.filesafe.space/nPiNK9DityBBCQSZkAy8/media/69b733085b89c7512cabf323.svg", width: 186 },
  { src: "https://assets.cdn.filesafe.space/nPiNK9DityBBCQSZkAy8/media/69b7330887f0f27b361b6e92.svg", width: 178 },
  { src: "https://assets.cdn.filesafe.space/nPiNK9DityBBCQSZkAy8/media/69b7330887f0f265961b6e91.svg", width: 178 },
  { src: "https://assets.cdn.filesafe.space/nPiNK9DityBBCQSZkAy8/media/69b73308eaf081e9f88a8012.webp", width: 154 },
];

function WebsiteIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="15" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="20" x2="16" y2="20" />
    </svg>
  );
}

function AgentIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v3" />
      <rect x="5" y="8" width="14" height="10" rx="4" />
      <path d="M9 13h.01" />
      <path d="M15 13h.01" />
      <path d="M8 19l-2 2" />
      <path d="M16 19l2 2" />
    </svg>
  );
}

function SeoIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.2-4.2" />
      <path d="M8.5 11.5l1.5 1.5 3-3" />
    </svg>
  );
}

function ReviewIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 17.5l-4.114 2.163.786-4.58-3.328-3.243 4.598-.668L12 7l2.058 4.172 4.598.668-3.328 3.243.786 4.58z" />
    </svg>
  );
}

const SERVICE_DEFINITIONS = [
  {
    id: "website",
    icon: <WebsiteIcon color={C.sky} />,
    color: C.sky,
    colorBg: C.skySoft,
    title: "Smart Website",
    price: 497,
    desc: "A polished business website designed to build trust fast, capture leads cleanly, and turn visits into real conversations.",
    features: [
      "Custom website tailored to your business",
      "Local search ready site structure",
      "Monthly content and design updates",
      "Fast mobile and desktop performance",
      "Lead capture forms and call tracking",
      "AI contact form included",
    ],
  },
  {
    id: "chatbot",
    icon: <AgentIcon color={C.accent2} />,
    color: C.accent2,
    colorBg: C.accentLight2,
    title: "AI Chatbot and Voice Agent",
    price: 197,
    desc: "An always on AI assistant that handles chat and voice conversations, captures leads, and books appointments without delay.",
    features: [
      "AI assistant trained on your business",
      "24/7 chatbot and voice agent coverage",
      "Instant lead capture and qualification",
      "Appointment booking integration",
      "Missed call follow up and call routing",
      "Multi language support",
    ],
  },
  {
    id: "seo",
    icon: <SeoIcon color={C.emerald} />,
    color: C.emerald,
    colorBg: C.emeraldSoft,
    title: "SEO",
    price: 997,
    desc: "Rank higher when your ideal keywords are searched and turn stronger Google visibility into steady inbound business.",
    features: [
      "Organic ranking strategy for Google",
      "Target keyword mapping for your business",
      "Monthly optimization and reporting",
      "Local SEO and top position focus",
      "Search visibility that compounds over time",
      "Lower dependency on paid campaigns",
    ],
  },
  {
    id: "reviews",
    icon: <ReviewIcon color={C.accent} />,
    color: C.accent,
    colorBg: C.accentLight,
    title: "Review Management",
    price: 247,
    popular: true,
    desc: "Automate review collection, respond faster, and turn stronger reputation signals into more local demand.",
    features: [
      "Automated review requests by email and SMS",
      "Automated responses in your brand voice",
      "Google Business Profile optimization",
      "Review monitoring and negative alerts",
      "Private bad review filtering workflow",
      "Instant review scan card for customers",
    ],
  },
];

const SERVICE_LOOKUP = Object.fromEntries(SERVICE_DEFINITIONS.map((service) => [service.id, service]));

const FEATURED_SERVICE_MEDIA_SRC = "https://player.vimeo.com/video/1109368878?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963";

const FEATURED_SERVICES = [
  {
    id: "website",
    label: "Smart Website",
    title: "A cleaner first impression for every visit",
    description:
      "A polished website that explains the offer quickly, feels credible on mobile, and moves more visitors toward a call or form.",
  },
  {
    id: "chatbot",
    label: "AI Chatbot + Voice",
    title: "Answer leads the moment they reach out",
    description:
      "Chat and voice coverage that responds instantly, qualifies intent, and keeps conversations moving even after hours.",
  },
  {
    id: "seo",
    label: "Local SEO",
    title: "Show up when nearby buyers start searching",
    description:
      "A steadier local search presence built to help the right customers find you first and convert with more confidence.",
  },
  {
    id: "reviews",
    label: "Review Management",
    title: "Turn good service into visible trust",
    description:
      "Automated review flows that increase positive signals, protect reputation, and make choosing your business feel easier.",
  },
];

const TYPE = {
  brand: { fontSize: 20, fontWeight: 700, letterSpacing: "-0.03em" },
  eyebrow: { fontSize: "var(--type-label)", fontWeight: 600, letterSpacing: "-0.01em" },
  navLink: { fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em" },
  heroTitle: { fontSize: "var(--type-hero)", lineHeight: 1.04, fontWeight: 600, letterSpacing: "-0.05em" },
  sectionTitle: { fontSize: "var(--type-section)", lineHeight: 1.12, fontWeight: 600, letterSpacing: "-0.04em" },
  featureTitle: { fontSize: "var(--type-feature)", lineHeight: 1.18, fontWeight: 600, letterSpacing: "-0.035em" },
  cardTitle: { fontSize: "var(--type-card)", lineHeight: 1.22, fontWeight: 600, letterSpacing: "-0.025em" },
  bodyLg: { fontSize: "var(--type-body-lg)", lineHeight: 1.84, color: C.muted },
  body: { fontSize: "var(--type-body)", lineHeight: 1.8, color: C.muted },
  bodySm: { fontSize: "var(--type-body-sm)", lineHeight: 1.72, color: C.muted },
  button: { fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" },
  buttonSm: { fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" },
  statValue: { fontSize: 34, fontWeight: 650, letterSpacing: "-0.03em" },
  statLabel: { fontSize: 14, lineHeight: 1.6, fontWeight: 500, color: C.muted },
  price: { fontSize: 42, fontWeight: 650, lineHeight: 1, letterSpacing: "-0.04em" },
  quote: { fontSize: "clamp(24px, 3vw, 30px)", lineHeight: 1.58, fontWeight: 500, letterSpacing: "-0.02em" },
};

const SPACE = {
  heroPadding: "110px 24px 72px",
  sectionBottom: "clamp(104px, 12vw, 152px)",
  cardPadding: "44px 40px",
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

const FeaturedServiceShowcase = () => {
  return (
    <section className="featuredServiceSection reveal" aria-label="Service highlights">
      <div className="featuredServiceSectionIntro">
        <div className="featuredServiceSectionEyebrow">Service highlights</div>
        <h2 className="featuredServiceSectionTitle">A quieter, more spacious view of each service.</h2>
      </div>

      {FEATURED_SERVICES.map((service, index) => (
        <article key={service.id} className={`featuredServiceRow${index % 2 === 1 ? " isReversed" : ""}`}>
          <div className="featuredServiceMedia">
            <iframe
              src={FEATURED_SERVICE_MEDIA_SRC}
              className="featuredServiceFrame"
              title={`BMON ${service.label} preview`}
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="featuredServiceContent">
            <div className="featuredServiceEyebrow">{service.label}</div>
            <h3 className="featuredServiceTitle">{service.title}</h3>
            <p className="featuredServiceDescription">{service.description}</p>
            <div className="featuredServiceActions">
              <a className="featuredServiceLink" href="#services">
                Learn More
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

const ServiceCard = ({ icon, color, colorBg, title, price, desc, features, popular }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.card,
        borderRadius: 28,
        padding: SPACE.cardPadding,
        border: popular ? `2px solid ${color}` : `1px solid ${C.border}`,
        position: "relative",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 26px 72px rgba(11, 16, 32, 0.10)" : "0 18px 48px rgba(11, 16, 32, 0.08)",
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(12px)",
      }}
    >
      {popular && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            background: `linear-gradient(135deg, ${color}, ${C.accent2})`,
            color: "#fff",
            padding: "6px 16px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Core Service
        </div>
      )}
      <div style={{ width: 52, height: 52, borderRadius: 16, background: colorBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
        {icon}
      </div>
      <h3 style={{ ...TYPE.cardTitle, margin: "0 0 12px", color: C.dark }}>{title}</h3>
      <p style={{ ...TYPE.bodySm, margin: "0 0 30px", flex: 1 }}>{desc}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 30 }}>
        <span style={TYPE.bodySm}>$</span>
        <span style={{ ...TYPE.price, color: C.dark }}>{price}</span>
        <span style={TYPE.bodySm}>/mo</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
        {features.map((feature, index) => (
          <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <div style={{ marginTop: 2 }}><Check color={color} /></div>
            <span style={{ ...TYPE.bodySm, color: C.dark }}>{feature}</span>
          </div>
        ))}
      </div>
      <button
        style={{
          width: "100%",
          background: popular ? `linear-gradient(135deg, ${color}, ${C.accent2})` : "transparent",
          color: popular ? "#fff" : color,
          border: popular ? "none" : `1px solid ${color}`,
          padding: "15px 18px",
          borderRadius: 999,
          ...TYPE.buttonSm,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: "auto",
          boxShadow: popular ? "0 16px 42px rgba(79, 70, 229, 0.18)" : "none",
        }}
      >
        Get Started <Arrow />
      </button>
    </div>
  );
};

export default function BMONServicesFunnel({ embedded = false }) {
  const [selectedServices, setSelectedServices] = useState(["reviews"]);
  const [contactTab, setContactTab] = useState("form");

  const toggleService = (id) => {
    setSelectedServices((prev) => (prev.includes(id) ? prev.filter((serviceId) => serviceId !== id) : [...prev, id]));
  };

  const total = selectedServices.reduce((sum, id) => sum + SERVICE_LOOKUP[id].price, 0);
  const bundleDiscount = selectedServices.length === 4 ? 0.15 : selectedServices.length >= 2 ? 0.1 : 0;
  const finalPrice = Math.round(total * (1 - bundleDiscount));

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: C.bg, color: C.dark, minHeight: embedded ? "auto" : "100vh" }}>
      {!embedded && (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 24px 0", maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ ...TYPE.brand, fontSize: 22 }}>
            <span style={{ color: C.accent }}>B</span>MON
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center", color: C.muted }}>
            <a href="#services" style={{ ...TYPE.navLink, color: C.muted, textDecoration: "none" }}>Services</a>
            <a href="#bundle" style={{ ...TYPE.navLink, color: C.muted, textDecoration: "none" }}>Bundle</a>
            <button
              type="button"
              style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, color: "#fff", border: "none", padding: "11px 18px", borderRadius: 999, ...TYPE.buttonSm, cursor: "pointer", boxShadow: "0 14px 36px rgba(79, 70, 229, 0.16)" }}
            >
              Start free trial
            </button>
          </div>
        </nav>
      )}

      <section className="reveal" style={{ textAlign: "center", padding: SPACE.heroPadding, maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${C.accentLight}, ${C.accentLight2})`, border: `1px solid ${C.border}`, borderRadius: 999, padding: "8px 14px", color: C.dark, marginBottom: 30, ...TYPE.eyebrow }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})` }} aria-hidden="true" />
          AI marketing ops for local businesses
        </div>
        <h1 style={{ ...TYPE.heroTitle, margin: "0 0 24px", color: C.dark }}>
          Your complete digital presence,{" "}
          <span style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
            handled.
          </span>
        </h1>
        <p style={{ ...TYPE.bodyLg, maxWidth: 760, margin: "0 auto 44px" }}>
          Smart websites, AI chatbot and voice agent coverage, SEO, and review management built to help local businesses get found, convert faster, and grow consistently.
        </p>
        <div className="partnerTicker" aria-label="Showcase logos">
          <div className="partnerTickerTrack">
            {[0, 1].map((copyIndex) => (
              <div className="partnerTickerGroup" key={copyIndex} aria-hidden={copyIndex === 1}>
                {TICKER_LOGOS.map((logo, index) => (
                  <div className="partnerTickerItem" key={`${copyIndex}-${index}`}>
                    <img src={logo.src} alt="" loading={copyIndex === 0 ? "eager" : "lazy"} decoding="async" style={{ width: logo.width }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#services" style={{ textDecoration: "none" }}>
            <button style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, color: "#fff", border: "none", padding: "15px 24px", borderRadius: 999, ...TYPE.button, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 16px 42px rgba(79, 70, 229, 0.18)" }}>
              See Services <Arrow />
            </button>
          </a>
          <a href="#bundle" style={{ textDecoration: "none" }}>
            <button style={{ background: "rgba(255,255,255,0.72)", color: C.dark, border: `1px solid ${C.border}`, padding: "15px 24px", borderRadius: 999, ...TYPE.button, cursor: "pointer" }}>
              Build a bundle
            </button>
          </a>
        </div>
      </section>

      <section className="reveal statsGrid" style={{ maxWidth: 980, margin: `0 auto ${SPACE.sectionBottom}`, padding: "0 24px" }}>
        {[
          { num: "95+", label: "Website performance score", color: C.sky },
          { num: "24/7", label: "AI response coverage", color: C.accent2 },
          { num: "Page 1", label: "SEO growth targets", color: C.emerald },
          { num: "3.2x", label: "More review momentum", color: C.accent },
        ].map((stat, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ ...TYPE.statValue, color: stat.color }}>{stat.num}</div>
            <div style={{ ...TYPE.statLabel, marginTop: 8 }}>{stat.label}</div>
          </div>
        ))}
      </section>

      <FeaturedServiceShowcase />

      <section id="services" className="reveal" style={{ maxWidth: 1120, margin: `0 auto ${SPACE.sectionBottom}`, padding: "0 24px" }}>
        <h2 style={{ ...TYPE.sectionTitle, textAlign: "center", margin: "0 auto 16px", maxWidth: 680 }}>
          Choose the stack that fits your business
        </h2>
        <p style={{ ...TYPE.body, textAlign: "center", margin: "0 auto 60px", maxWidth: 680 }}>
          Start with one service or combine all four for the strongest digital presence.
        </p>

        <div className="servicesGrid">
          {SERVICE_DEFINITIONS.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              color={service.color}
              colorBg={service.colorBg}
              title={service.title}
              price={service.price}
              desc={service.desc}
              features={service.features}
              popular={service.popular}
            />
          ))}
        </div>
      </section>

      <section id="bundle" className="reveal" style={{ maxWidth: 760, margin: `0 auto ${SPACE.sectionBottom}`, padding: "0 24px" }}>
        <div
          style={{
            background: C.card,
            borderRadius: 32,
            padding: "48px 42px",
            border: `1px solid ${C.border}`,
            boxShadow: "0 20px 54px rgba(11, 16, 32, 0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h3 style={{ ...TYPE.sectionTitle, textAlign: "center", margin: "0 0 14px" }}>
            Build Your Bundle
          </h3>
          <p style={{ ...TYPE.body, textAlign: "center", margin: "0 auto 40px", maxWidth: 560 }}>
            Choose any 2 or 3 services for <strong style={{ color: C.dark }}>10% off</strong>. Pick all 4 for <strong style={{ color: C.dark }}>15% off</strong>.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {SERVICE_DEFINITIONS.map((service) => {
              const checked = selectedServices.includes(service.id);
              const theme = {
                website: { color: C.sky, bg: "rgba(14, 165, 233, 0.08)" },
                chatbot: { color: C.accent2, bg: "rgba(124, 58, 237, 0.08)" },
                seo: { color: C.emerald, bg: "rgba(5, 150, 105, 0.08)" },
                reviews: { color: C.accent, bg: "rgba(79, 70, 229, 0.08)" },
              }[service.id];

              return (
                <button
                  key={service.id}
                  type="button"
                  aria-pressed={checked}
                  onClick={() => toggleService(service.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 18px",
                    borderRadius: 20,
                    border: checked ? `2px solid ${theme.color}` : `1px solid ${C.border}`,
                    background: checked ? theme.bg : "rgba(255,255,255,0.55)",
                    cursor: "pointer",
                    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease",
                    boxShadow: checked ? "0 16px 42px rgba(11, 16, 32, 0.08)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        border: checked ? `2px solid ${theme.color}` : `2px solid ${C.border}`,
                        background: checked ? theme.color : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s",
                      }}
                    >
                      {checked && <Check color="#fff" />}
                    </div>
                    <span style={{ ...TYPE.button, color: C.dark }}>{service.title}</span>
                  </div>
                  <span style={{ ...TYPE.buttonSm, color: C.muted }}>${service.price}/mo</span>
                </button>
              );
            })}
          </div>

          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
            {bundleDiscount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={TYPE.bodySm}>Subtotal</span>
                <span style={{ ...TYPE.bodySm, textDecoration: "line-through" }}>${total}/mo</span>
              </div>
            )}
            {bundleDiscount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ ...TYPE.buttonSm, color: C.accent }}>Bundle discount ({Math.round(bundleDiscount * 100)}%)</span>
                <span style={{ ...TYPE.buttonSm, color: C.accent }}>-${total - finalPrice}/mo</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ ...TYPE.button, color: C.dark }}>Your price</span>
              <div>
                <span style={{ fontSize: 38, fontWeight: 650, color: C.dark, lineHeight: 1, letterSpacing: "-0.04em" }}>${finalPrice}</span>
                <span style={TYPE.bodySm}>/mo</span>
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
              padding: "17px 20px",
              borderRadius: 999,
              ...TYPE.button,
              cursor: selectedServices.length > 0 ? "pointer" : "not-allowed",
              boxShadow: selectedServices.length > 0 ? "0 16px 42px rgba(79, 70, 229, 0.18)" : "none",
            }}
          >
            {selectedServices.length === 0 ? "Select a service" : `Start with ${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""}`}
          </button>
        </div>
      </section>

      <section id="contact" className="reveal" style={{ maxWidth: 1120, margin: `0 auto ${SPACE.sectionBottom}`, padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${C.accentLight}, ${C.accentLight2})`, border: `1px solid ${C.border}`, borderRadius: 999, padding: "8px 14px", color: C.dark, marginBottom: 18, ...TYPE.eyebrow }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})` }} aria-hidden="true" />
            Talk to BMON
          </div>
          <h2 style={{ ...TYPE.sectionTitle, margin: "0 0 16px" }}>
            Book a demo or send a message
          </h2>
          <p style={{ ...TYPE.body, margin: 0 }}>
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
                padding: "11px 16px",
                ...TYPE.buttonSm,
                cursor: "pointer",
                background: contactTab === "form" ? "rgba(255,255,255,0.92)" : "transparent",
                color: contactTab === "form" ? C.dark : "rgba(11, 16, 32, 0.68)",
                boxShadow: contactTab === "form" ? "0 10px 24px rgba(11, 16, 32, 0.08)" : "none",
                transition: "background 220ms var(--ease-out), color 220ms var(--ease-out), box-shadow 220ms var(--ease-out), transform 220ms var(--ease-out)",
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
                padding: "11px 16px",
                ...TYPE.buttonSm,
                cursor: "pointer",
                background: contactTab === "calendar" ? "rgba(255,255,255,0.92)" : "transparent",
                color: contactTab === "calendar" ? C.dark : "rgba(11, 16, 32, 0.68)",
                boxShadow: contactTab === "calendar" ? "0 10px 24px rgba(11, 16, 32, 0.08)" : "none",
                transition: "background 220ms var(--ease-out), color 220ms var(--ease-out), box-shadow 220ms var(--ease-out), transform 220ms var(--ease-out)",
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
            borderRadius: 32,
            padding: 22,
            boxShadow: "0 20px 56px rgba(11, 16, 32, 0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, padding: "6px 6px 14px", flexWrap: "wrap" }}>
            <div style={{ ...TYPE.buttonSm, color: C.dark }}>{contactTab === "form" ? "BMON - Contact Us Form" : "Book a Demo"}</div>
            <div style={TYPE.bodySm}>{contactTab === "form" ? "Best for specifics" : "Best for a walkthrough"}</div>
          </div>

          <div className={`embedFrameWrap embedFrameWrapWide ${contactTab === "calendar" ? "embedFrameWrapBooking" : ""}`}>
            {contactTab === "form" ? (
              <iframe
                src="https://link.bmon.ai/widget/form/WyPVoGvcUoMU57sslr9r"
                className="embedFrame"
                style={{ height: 764 }}
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
            ) : (
              <iframe
                src="https://link.bmon.ai/widget/booking/gEVDq9hfE7hZU8XvE1zY"
                className="embedFrame embedFrameBooking"
                style={{ height: 1080 }}
                scrolling="yes"
                id="gEVDq9hfE7hZU8XvE1zY_1773246604635"
                title="BMON - Booking Calendar"
              />
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <a href="#bundle" style={{ textDecoration: "none" }}>
              <button type="button" style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 999, padding: "11px 15px", ...TYPE.buttonSm, cursor: "pointer", color: "rgba(11, 16, 32, 0.82)" }}>
                Build a bundle
              </button>
            </a>
            <a href="#services" style={{ textDecoration: "none" }}>
              <button type="button" style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, border: "none", borderRadius: 999, padding: "11px 15px", ...TYPE.buttonSm, cursor: "pointer", color: "#fff", boxShadow: "0 14px 36px rgba(79, 70, 229, 0.18)" }}>
                Leave a review
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="reveal" style={{ maxWidth: 760, margin: `0 auto ${SPACE.sectionBottom}`, padding: "0 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 16 }}>
          {[1, 2, 3, 4, 5].map((index) => (
            <svg key={index} width="20" height="20" viewBox="0 0 20 20" fill="#FBBF24">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote style={{ ...TYPE.quote, margin: "0 0 26px", color: C.dark }}>
          "We activated the full stack and our inbound leads tripled. The AI systems alone paid for themselves in week one."
        </blockquote>
        <div style={TYPE.bodySm}>
          <strong style={{ color: C.dark, fontWeight: 600 }}>David Park</strong> · Owner, Park Dental Studio
        </div>
        <div style={{ display: "none" }}>
          <span style={TYPE.bodySm}><strong style={{ color: C.dark, fontWeight: 600 }}>David Park</strong> · Owner, Park Dental Studio</span>
          <strong style={{ color: C.dark }}>David Park</strong> · Owner, Park Dental Studio
        </div>
      </section>

      <section
        className="reveal"
        style={{
          width: "min(900px, calc(100% - 48px))",
          margin: `0 auto ${SPACE.sectionBottom}`,
          padding: "76px 48px",
          background: "linear-gradient(135deg, rgba(11, 16, 32, 0.92), rgba(11, 16, 32, 0.78))",
          borderRadius: 32,
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <h2 style={{ ...TYPE.sectionTitle, color: "#fff", marginTop: 0, marginBottom: 18 }}>
          Ready to grow on autopilot?
        </h2>
        <p style={{ color: "#C7CAD4", margin: "0 auto 36px", fontSize: 17, lineHeight: 1.8, maxWidth: 560 }}>Pick one service or activate the full 4 service stack. Setup takes under 10 minutes.</p>
        <button style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, color: "#fff", border: "none", padding: "16px 34px", borderRadius: 999, ...TYPE.button, cursor: "pointer", boxShadow: "0 16px 42px rgba(79, 70, 229, 0.18)" }}>
          Get Started Free
        </button>
      </section>

      {!embedded && (
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: "40px 24px", textAlign: "center" }}>
          <div style={{ ...TYPE.brand, marginBottom: 12 }}>
            <span style={{ color: C.accent }}>B</span>MON
          </div>
          <p style={{ ...TYPE.bodySm, margin: 0 }}>(c) {new Date().getFullYear()} BMON. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
