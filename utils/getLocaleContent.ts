import "server-only";

import type { ContentTypes } from "@/contents";
import type { Locale } from "@/i18n-config";
import { toMerged } from "es-toolkit";



const getLocaleContent = async <T extends keyof ContentTypes>(locale: Locale, path: T) => {
  const dictionaries = {
    en: () => import(`${path}/en.json`).then((module) => module.default),
    ko: () => import(`${path}/ko.json`).then((module) => module.default),
  };

  const objectDict = {
    en: await dictionaries.en(),
    ko: await dictionaries.ko(),
  };

  let merged = objectDict.en;
  Object.keys(objectDict).forEach((key) => {
    merged = toMerged(merged, objectDict[key as Locale]);
  });
  return toMerged(merged, objectDict[locale]) as ContentTypes[T];
};

export default getLocaleContent;
