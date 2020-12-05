/**
 * Layout - Header
 */

// UI
import { Container, Figure, Link, Navbar, Space } from '@drykiss/industry-ui'

export const LayoutHeader = () => (
  <>
    <Container>
      <Link border={false} context='white' passHref title='Green Touch Spa and Massage' to='/'>
        <Figure>
          <Figure.Image src='assets/images/greentouch-logo.png' itemprop='contentUrl' />
          <Figure.Caption>
            Traditional Thai massage treatments in Wimbledon, London, UK
          </Figure.Caption>
        </Figure>
      </Link>
    </Container>

    <Space marginBottom='lg' />

    <Navbar
      animational
      contained
      widgets={{
        left: [
          {
            id: 'navHome',
            name: 'Home',
            to: '/'
          },
          {
            id: 'navMessages',
            name: 'Massages',
            to: '/treatment'
          },
          {
            id: 'navPlans',
            name: 'Treatment plans',
            to: '/membership'
          },
          {
            id: 'navPromotions',
            name: 'Promotions',
            to: '/specialoffer'
          },
          {
            id: 'navBook',
            name: 'Book Treatment',
            to: '/book-massage'
          },
          {
            id: 'navTea',
            name: 'Tea',
            to: '/tea'
          },
          {
            id: 'navContact',
            name: 'Contact Us',
            to: '/contactus'
          }
        ],
        right: [
          {
            id: 'navPhone',
            name: 'Phone : +44 208 540 3888',
            to: 'tel:+442085403888'
          }
        ]
      }}
    />

    <Space marginBottom='lg' />
  </>
)
