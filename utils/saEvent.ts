interface Window {
  sa_event?: (eventName: string) => any;
}

// Definicja funkcji sa_event
export const saEvent = (eventName: string): any => {
  if (window && window.sa_event) return window.sa_event(eventName);
};
