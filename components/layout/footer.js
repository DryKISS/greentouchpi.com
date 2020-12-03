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
                  to: '/terms'
                }
              ]
            }
          }
        ]}
      />
      <Copyright
        brand='Green Touch PI Ltd All rights reserved.'
        links={[
          {
            name: 'Site & SEO by DryKISS Ltd',
            to: 'https://drykiss.com'
          }
        ]}
      />
      {/* <footer role='contentinfo'>
      <div className='footer'>
        <div className='container'>
          <div className='row footer__row'>
            <div className='col-md-3 col-xs-6 footer__column'>
              <h4 className='heading footer__heading'>
                {' '}
                <span className='fa fa-info' /> About{' '}
              </h4>
              <div className='footer__content'>
                {' '}
                Green Touch Spa and Massage offers professional massage services within a stunning
                oriental surrounding, delivered by fully qualified staff. <br />
                <br /> Economically priced with group plans available; buy 5 treatments get 1 free,
                proving that luxury doesn't need to cost the earth! <br />
                <br />
                We welcome you to take a tour of our massage rooms and see for yourself why so many
                of our clients return time and again.{' '}
              </div>
            </div>
            <div className='col-md-3 col-xs-6 footer__column'>
              <h4 className='heading footer__heading'>
                {' '}
                <span className='fa fa-cogs' /> What we do{' '}
              </h4>
              <div className='footer__content'>
                {' '}
                Green Touch specialises in Swedish massage, traditional Thai massage, sports
                massage, reflexology and more in the Wimbledon, London area. All treatments are
                conducted by highly trained Thai nationals. <br />
                <br /> Our treatments are carefully choreographed to maximise the health and well
                being of our clients in the time allotted. <br />
                <br /> We can tailor each treatment to your individual requirements.{' '}
              </div>
            </div>
            <div className='col-md-3 col-xs-6 footer__column'>
              <h4 className='heading footer__heading'>
                {' '}
                <span className='fa fa-facebook' /> Social{' '}
              </h4>
              <div className='footer__content'>
                {' '}
                <a
                  href='https://www.facebook.com/greentouch.pi'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Follow us on Facebook
                </a>{' '}
                for exclusive promotions and deals. <br />
                <br /> We offer group bookings for birthdays, hen parties, girls day and night out,
                Mother's Day, or general pampering experience. <br />
                <br /> Let us know the occasion and we can plan the details with you.{' '}
              </div>
            </div>
            <div className='col-md-3 col-xs-6 footer__column'>
              <h4 className='heading footer__heading'>
                {' '}
                <span className='fa fa-phone' /> Contact{' '}
              </h4>
              <div className='footer__content'>
                {' '}
                For bookings, questions or general feedback{' '}
                <Link href='/contactus' passHref>
                  <a href='/contactus' title='contact us'>
                    please get in touch
                  </a>
                </Link>{' '}
                <br />
                <br /> We are directly across from Al Forno Italian restaurant in Wimbledon. <br />
                <br /> <i class='fa fa-map-marker fa-fw' /> 1B Kings Road, Wimbledon, SW19 8PL,
                London -{' '}
                <Link href='/contactus' passHref>
                  <a title='Google map'>Map</a>
                </Link>{' '}
                <br />
                <br /> <i class='fa fa-phone fa-fw' />
                <a href='tel:+442085403888' title='Phone us'>
                  +44 208 540 3888
                </a>{' '}
                <br />
                <br /> <i class='fa fa-envelope fa-fw' />{' '}
                <a
                  href='/cdn-cgi/l/email-protection#bad3d4dcd5faddc8dfdfd4ced5cfd9d2cad394d9d5d7'
                  title='Email Green Touch'
                >
                  <span
                    class='__cf_email__'
                    data-cfemail='5b32353d341b3c293e3e352f342e38332b3275383436'
                  >
                    [email&#160;protected]
                  </span>
                </a>{' '}
                <br />
                <br />
                <Link href='/terms-and-conditions' passHref>
                  <a title='Terms and Conditions'>Terms and conditions</a>
                </Link>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {' '}
              <time datetime='2018'>&copy; 2018</time> Green Touch PI Ltd All rights reserved.{' '}
              <div className='pull-right'>
                {' '}
                Site &amp; SEO by{' '}
                <a href='//drykiss.com' target='_blank' rel='noopener noreferrer'>
                  <div className='drykissLogo' /> DryKISS Ltd
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer> */}
    </>
  )
}
