/**
 * Config
 */

export const apiConfig = {}
export const jwtConfig = {}
export const AccessPages = {}
export const AccessRules = {}

const Canonical = require('./canonical')
export { Canonical }

export const Blog = {
  path: '/blog'
}

export const Brand = {
  logo: 'assets/images/greentouch-logo.png',
  name: 'Green Touch'
}

export const Facebook = {
  appId: '',
  appPath: '',
  domain: Canonical,
  hashTag: 'GreenTouch'
}

export const Google = {
  analytics: '',
  adsense: '',
  apiKey: '',
  verification: ''
}

export const Sidebar = {}

// Internationalisation
export const defaultLocale = 'en'
export const locales = ['en', 'es']

export const languageNames = {
  en: 'English',
  es: 'Spanish'
}

export const Translations = {
  en: {
    home: 'Home sweet home'
  },
  es: {
    home: 'InicioSpanish'
  }
}

export const Config = {
  Blog,
  Brand,
  Canonical,
  defaultLocale,
  Facebook,
  Google,
  languageNames,
  locales,
  Translations
}
