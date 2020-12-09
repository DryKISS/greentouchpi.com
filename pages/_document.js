/**
 * Document
 */

// Next
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// Config
import { Canonical } from 'config'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html className='no-js' lang='en' dir='ltr' prefix='og: http://ogp.me/ns#'>
        <Head>
          <meta charSet='utf-8' />
          <meta content='IE=edge,chrome=1' httpEquiv='X-UA-Compatible' />
          <meta content='DryKISS' name='author' />
          <meta content='index,follow,archive' name='robots' />

          <meta content='DryKISS' name='dcterms.publisher' />
          <meta content='en' name='dcterms.language' />
          <meta content='DryKISS' name='dcterms.creator' />
          <meta
            content={`${Canonical}/assets/images/carousel/stunning-decor.jpg`}
            property='og:image'
          />
          <meta content='Greentouch PI' property='og:site_name' />
          <meta content='website' property='og:type' />
          <meta property='fb:app_id' />
          <meta content='en_GB' property='og:locale' />

          <meta
            content='ue-whwcxoKGYl-gmoCcpYKXtztRIYkCZRp00e5sxqtM'
            name='google-site-verification'
          />
          <meta
            content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
            name='viewport'
          />
          <meta content='yes' name='mobile-web-app-capable' />
        </Head>

        <body
          style={{ backgroundColor: '#333' }}
          data-locale='en'
          data-localeFacebook='en_GB'
          itemScope
          itemType='https://schema.org/WebPage'
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
