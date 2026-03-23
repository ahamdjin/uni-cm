export const SIGNUP_URL = "https://login.bmon.ai/v2/preview/ICg0U4pA8TTwL94ZFN6Q";

export function openSignup() {
  if (typeof window === "undefined") return;
  window.location.assign(SIGNUP_URL);
}
