/**
 * Theme - Cleverly Admin
 */

const COLOUR = {
  dark: 'rgb(0, 55, 83)',
  light: 'rgb(236, 240, 243)',

  white: '#fff',
  black: 'rgb(0, 0, 0)',
  gray: '#333333',

  primary: '#99c848',
  secondary: 'rgb(6, 121, 216)',
  success: 'rgb(0, 180, 60)',
  info: 'rgb(249, 156, 35)',
  warning: 'rgb(230, 8, 17)',
  danger: 'rgb(232, 9, 94)',

  help: 'rgb(255, 222, 3)'
}

const COPYRIGHT = {
  background: COLOUR.gray,
  colour: COLOUR.white
}

const FOOTER = {
  background: 'url("/assets/images/footer/background.png")',
  color: COLOUR.black
}

const NAVBAR = {
  // Navbar
  background: COLOUR.primary,
  borderTopWidth: '0',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0',

  // Overlay
  backgroundOverlay: COLOUR.primary,
  widthOverlay: '220px',

  // Toggler
  colourToggler: COLOUR.black,
  fontSizeToggler: '0.875',
  paddingToggler: '0.25rem 0',
  colourHoverToggler: COLOUR.black,

  // Collapse
  positionCollapse: 'fixed',

  // Link
  paddingLink: '0.5rem',
  colourDefault: COLOUR.black,
  colourHover: COLOUR.primary,
  colourDefaultDesktop: COLOUR.black,
  colourHoverDesktop: COLOUR.primary,

  // List
  fontSizeList: '16px',

  // ListItem
  borderTopListItem: 'none',
  backgroundListItem: COLOUR.transparent,
  justifyContentDesktopListItem: 'flex-start',
  marginBottomDesktopListItem: 'none',
  backgroundHoverListItem: COLOUR.transparent,
  borderBottomHoverListItem: 'none'
}

export const Theme = {
  COLOUR,
  COPYRIGHT,
  FOOTER,
  NAVBAR
}
