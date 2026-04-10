import en from './en.json';
import es from './es.json';
import de from './de.json';
import fr from './fr.json';
import be from './be.json';

const translations: Record<string, Record<string, string>> = { en, es, de, fr, be };

export type Locale = 'en' | 'es' | 'de' | 'fr' | 'be';

export const locales: Locale[] = ['en', 'es', 'de', 'fr', 'be'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  be: 'Nederlands',
};

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function getLocaleFromURL(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment && segment in translations) {
    return segment as Locale;
  }
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function getAlternateLinks(path: string): { locale: Locale; href: string }[] {
  return locales.map((locale) => ({
    locale,
    href: getLocalizedPath(path, locale),
  }));
}
