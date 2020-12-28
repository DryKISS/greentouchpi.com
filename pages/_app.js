/**
 * App
 */

// UI
import { MyApp } from '@drykiss/industry-ui'

// Layout
import Layout from 'layouts'

// Config
import { Config, Theme } from 'config'
import 'config/icons'

// Styles
import 'react-datepicker/dist/react-datepicker.css'

const PageApp = props => {
  return <MyApp config={Config} Layout={Layout} pageProgressBar theme={Theme} {...props} />
}

export default PageApp
