import { useState } from "react";
import "./App.css";

import BMONServicesFunnel from "./bmon-funnel-services-itemized.jsx";
import BMONReviewFunnel from "./bmon-funnel-review-management.jsx";

export default function App() {
  const [view, setView] = useState("services");

  return (
    <>
      <div className="switcher" role="navigation" aria-label="Preview switcher">
        <button
          type="button"
          className={view === "services" ? "active" : ""}
          onClick={() => setView("services")}
        >
          Services
        </button>
        <button
          type="button"
          className={view === "reviews" ? "active" : ""}
          onClick={() => setView("reviews")}
        >
          Reviews
        </button>
      </div>

      {view === "services" ? <BMONServicesFunnel /> : <BMONReviewFunnel />}
    </>
  );
}
