export const SIGNUP_URL = "https://bmon.ai/order";

export function openSignup() {
  if (typeof window === "undefined") return;
  window.location.assign(SIGNUP_URL);
}
