declare function sa_event(eventName: string): void;

export const saEvent = (eventName: string) => {
  if (typeof window !== "undefined" && typeof window.sa_event === "function") {
    return window.sa_event(eventName);
  }
};
