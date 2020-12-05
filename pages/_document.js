/**
 * Document
 */

// Next
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
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
          <meta content='assets/images/carousel/stunning-decor.jpg' property='og:image' />
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
          <link href='assets/stylesheets/style.min.css' rel='stylesheet' media='all' />
        </Head>

        <body
          className='index'
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
