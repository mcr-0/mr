declare global {
  function gtag_report_conversion(url?: string): boolean;
}

declare global {
  function sa_event(eventName: string);
}

export {};
