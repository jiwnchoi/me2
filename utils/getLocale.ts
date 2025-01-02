import "server-only";

import type { Locale } from "@/i18n-config";
import { toMerged } from "es-toolkit";

const getLocaleContent = async (locale: Locale) => {
  const dictionaries = {
    en: () => import(`@/locales/en.json`).then((module) => module.default),
    ko: () => import(`@/locales/ko.json`).then((module) => module.default),
  };

  const objectDict = {
    en: await dictionaries.en(),
    ko: await dictionaries.ko(),
  };

  let merged = objectDict.en;
  Object.keys(objectDict).forEach((key) => {
    merged = toMerged(merged, objectDict[key as Locale]);
  });
  return toMerged(merged, objectDict[locale]);
};

export default getLocaleContent;
