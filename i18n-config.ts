export const i18n = {
  defaultLocale: "ko",
  locales: ["en", "ko"],
  localeNames: {
    en: "English",
    ko: "한국어",
  },
} as const;

export type Locale = (typeof i18n)["locales"][number];
