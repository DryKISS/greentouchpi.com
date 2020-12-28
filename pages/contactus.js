/**
 * Contact Us
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { ContactUs } from 'components'

const PageContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Green Touch Spa and Massage in Wimbledon London</title>
        <meta
          content='Contact Green Touch at our Wimbledon branch. +44 208 540 3888. We will respond within 24 hours of any request for a massage treatment.'
          name='description'
        />
        <meta
          content='Contact Green Touch at our Wimbledon branch. +44 208 540 3888. We will respond within 24 hours of any request for a massage treatment.'
          name='keywords'
        />
        <meta href={`${Canonical}/contactus`} rel='canonical' />
        <meta
          content='Contact Green Touch Spa and Massage in Wimbledon London'
          name='dcterms.title'
        />
        <meta
          content='Contact Green Touch at our Wimbledon branch. +44 208 540 3888. We will respond within 24 hours of any request for a massage treatment.'
          name='dcterms.description'
        />
        <meta
          content='Contact Green Touch Spa and Massage in Wimbledon London'
          property='og:title'
        />
        <meta
          content='Contact Green Touch at our Wimbledon branch. +44 208 540 3888. We will respond within 24 hours of any request for a massage treatment.'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/contactus`} property='og:url' />
      </Head>

      <ContactUs />
    </>
  )
}

export default PageContactUs
