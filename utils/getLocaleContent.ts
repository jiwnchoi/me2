"use server";

import type { ContentTypes } from "@/contents";
import type { Locale } from "@/i18n-config";
import { toMerged } from "es-toolkit";
import fs from "node:fs/promises";
import path from "node:path";

const readJsonFile = async <T>(filePath: string): Promise<T> => {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error reading or parsing JSON file ${filePath}:`, error);
    return {} as T;
  }
};

const getLocaleContent = async <T extends keyof ContentTypes>(
  locale: Locale,
  pathSegment: T,
): Promise<ContentTypes[T]> => {
  const baseDir = process.cwd();

  const getFilePath = (locale: Locale) => {
    return path.join(baseDir, `${String(pathSegment)}`, `${locale}.json`);
  };

  type LocaleData = ContentTypes[T];
  const dictionaries: { [key in Locale]: () => Promise<LocaleData> } = {
    en: () => readJsonFile<LocaleData>(getFilePath("en")),
    ko: () => readJsonFile<LocaleData>(getFilePath("ko")),
  };

  const objectDict: { [key in Locale]: LocaleData } = {
    en: await dictionaries.en(),
    ko: await dictionaries.ko(),
  };

  let merged: LocaleData = objectDict.en;
  Object.keys(objectDict).forEach((key) => {
    merged = toMerged(merged, objectDict[key as Locale]);
  });
  return toMerged(merged, objectDict[locale] ?? {}) as ContentTypes[T];
};

export default getLocaleContent;
