/**
 * Layout
 */

// React
import { node } from 'prop-types'

// Stylec Components
import styled from 'styled-components'

// UI
import { Column, Container, MEDIA_QUERY, Row, Space } from '@drykiss/industry-ui'

// Components
import { LayoutFooter, LayoutHeader, LayoutSidebar } from 'components'

const Layout = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      <main>
        <Container>
          <Row>
            <Column xs={12} md={9}>
              {children}
            </Column>

            <SidebarColumn xs={12} md={3}>
              <LayoutSidebar />
            </SidebarColumn>
          </Row>
        </Container>

        <Space marginBottom='lg' />
      </main>
      <LayoutFooter />
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired
}

const SidebarColumn = styled(Column)`
  ${MEDIA_QUERY.desktop`
    order: -1;
  `}
`

export default Layout
