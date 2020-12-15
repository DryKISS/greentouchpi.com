/**
 * Layout - Header
 */

import styled from 'styled-components'

// UI
import { Container, Figure, Link, Navbar, Space } from '@drykiss/industry-ui'

export const LayoutHeader = () => (
  <>
    <Space marginBottom='xxl' />
    <StyledContainer>
      <Link border={false} context='white' passHref title='Green Touch Spa and Massage' to='/'>
        <Figure>
          <Figure.Image src='/assets/images/greentouch-logo.png' itemprop='contentUrl' />
          <Figure.Caption bgContext='transparent'>
            Traditional Thai massage treatments in Wimbledon, London, UK
          </Figure.Caption>
        </Figure>
      </Link>
    </StyledContainer>

    <Space marginBottom='lg' />

    <NavWrapper>
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
    </NavWrapper>

    <Space marginBottom='lg' />
  </>
)

const NavWrapper = styled.div`
  li {
    flex-shrink: 0;

    :hover {
      background-color: unset;
    }
  }

  [class*='collapse__NavCollapse'] {
    margin: 0.5rem;
  }
`

const StyledContainer = styled(Container)`
  text-align: center;

  img {
    display: initial;
  }
`
