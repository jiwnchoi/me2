type Locale = import("@/i18n-config").Locale;

interface PropsWithLocale<T> {
  params: T & { lang: Locale };
}
