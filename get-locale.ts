import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./locales/en.json").then((module) => module.default),
  ko: () => import("./locales/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
