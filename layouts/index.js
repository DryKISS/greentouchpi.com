/**
 * Layout
 */

// React
import { node } from 'prop-types'

// Components
import { LayoutFooter, LayoutHeader } from 'components'

const Layout = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired
}

export default Layout
