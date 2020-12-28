/**
 * Home
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { BookMassage } from 'components'

const PageIndex = () => {
  return (
    <>
      <Head>
        <title>Book a Green Touch Massage treatment in Wimbledon London</title>
        <meta
          content='Reserve and Book and massage treatment with Greentouch in Wimbledon. We will respond within 24 hours of any request for a massage treatment.'
          name='description'
        />
        <meta
          content='Reserve and Book and massage treatment with Greentouch in Wimbledon. We will respond within 24 hours of any request for a massage treatment.'
          name='keywords'
        />
        <meta href={`${Canonical}/book-message`} rel='canonical' />
        <meta
          content='Book a Green Touch Massage treatment in Wimbledon London'
          name='dcterms.title'
        />
        <meta
          content='Reserve and Book and massage treatment with Greentouch in Wimbledon. We will respond within 24 hours of any request for a massage treatment.'
          name='dcterms.description'
        />
        <meta
          content='Book a Green Touch Massage treatment in Wimbledon London'
          property='og:title'
        />
        <meta
          content='Reserve and Book and massage treatment with Greentouch in Wimbledon. We will respond within 24 hours of any request for a massage treatment.'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/book-message`} property='og:url' />
      </Head>

      <BookMassage />
    </>
  )
}

export default PageIndex
