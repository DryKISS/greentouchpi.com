/**
 * Config
 */

const Canonical = require('./canonical')
export { Canonical }

export const Brand = {
  logo: '/assets/images/greentouch-logo.png',
  name: 'Green Touch'
}

export const Facebook = {
  appId: '453665091433980',
  appPath: 'https://www.facebook.com/greentouch.pi',
  domain: Canonical,
  hashTag: 'GreenTouch'
}

export const Google = {
  analytics: 'UA-49973751-1',
  apiKey: 'AIzaSyA2fnjDVKi8G4eDXllOyplF_APmDXtb2hk'
}

export const Config = {
  Brand,
  Canonical,
  Facebook,
  Google
}
