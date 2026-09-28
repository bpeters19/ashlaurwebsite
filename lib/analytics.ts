declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(eventName: string, props?: Record<string, string>) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, props ? { props } : undefined);
  }
}
