/**
 * Layout - Footer
 */

// UI
import { Copyright, Footer } from '@drykiss/industry-ui'

export const LayoutFooter = ({ children }) => {
  return (
    <>
      <Footer
        columns={[
          {
            header: {
              content: 'About'
            },
            size: { sm: 12, md: 3 },
            text: {
              items: [
                {
                  content: `Green Touch Spa and Massage offers professional massage services within a
                  stunning oriental surrounding, delivered by fully qualified staff.`
                },
                {
                  content: `Economically priced with group plans available; buy 5 treatments get 1 free,
                  proving that luxury doesn't need to cost the earth!`
                },
                {
                  content: `We welcome you to take a tour of our massage rooms and see for yourself why so many
                  of our clients return time and again.`
                }
              ]
            }
          },
          {
            size: { sm: 12, md: 3 },
            header: {
              content: 'What We Do'
            },
            text: {
              items: [
                {
                  content: `Green Touch specialises in Swedish massage, traditional Thai massage, sports
                  massage, reflexology and more in the Wimbledon, London area. All treatments are
                  conducted by highly trained Thai nationals.`
                },
                {
                  content: `Our treatments are carefully choreographed to maximise the health and well
                  being of our clients in the time allotted.`
                },
                {
                  content: 'We can tailor each treatment to your individual requirements.'
                }
              ]
            }
          },
          {
            size: { sm: 12, md: 3 },
            header: {
              content: 'Social'
            },
            links: {
              items: [
                {
                  id: 'footerFacebook',
                  name: 'Follow us on Facebook',
                  to: 'https://www.facebook.com/greentouch.pi'
                }
              ]
            },
            text: {
              items: [
                {
                  content: 'for exclusive promotions and deals.'
                },
                {
                  content: `We offer group bookings for birthdays, hen parties, girls day and night out,
                  Mother's Day, or general pampering experience.`
                },
                {
                  content: 'Let us know the occasion and we can plan the details with you.'
                }
              ]
            }
          },
          {
            size: { sm: 12, md: 3 },
            header: {
              content: 'Contact'
            },
            text: {
              items: [
                {
                  content: 'For bookings, questions or general feedback please get in touch'
                },
                {
                  content: `We are directly across from Al Forno Italian restaurant in Wimbledon.
                  <address>
                  1B Kings Road, Wimbledon, SW19 8PL, London
                  </address>
                  `
                }
              ]
            },
            links: {
              items: [
                {
                  id: 'footerCall',
                  name: '+44 208 540 3888',
                  to: 'tel:+442085403888'
                },
                {
                  id: 'footerContact',
                  name: 'Please get in touch',
                  to: '/'
                },
                {
                  id: 'footerEmail',
                  name: 'info@greentouchpi.com',
                  to: 'mailto:info@greentouchpi.com'
                },
                {
                  id: 'footerTerms',
                  name: 'Terms and Conditions',
                  to: '/terms-and-conditions'
                }
              ]
            }
          }
        ]}
      />
      <Copyright
        brand='Greentouch Wimbledon Ltd All rights reserved.'
        links={[
          {
            name: 'Site & SEO by DryKISS Ltd',
            to: 'https://drykiss.com'
          }
        ]}
      />
    </>
  )
}
