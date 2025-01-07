type Locale = import("@/i18n-config").Locale;
type RefObject<T> = import("react").RefObject<T>;

interface PropsWithLocale<T> {
  params: T & { lang: Locale };
}

interface CVContent {
  [key: string]: MDXContent;
  contentRef: RefObject<HTMLDivElement | null>;
}
