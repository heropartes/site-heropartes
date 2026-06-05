declare global {
  interface Window {
    dataLayer?: Object[];
    gtag?: (
      type: "event",
      action: string,
      params: {
        event_category: string;
        event_label: string;
      },
    ) => void;
  }
}

export const GA_TRACKING_ID = "GTM-TQTMV9KM";

export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};
