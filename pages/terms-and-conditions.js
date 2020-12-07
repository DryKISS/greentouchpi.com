/**
 * Terms And Conditions
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { TermsAndConditions } from 'components'

const PageTermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and conditions for Green Touch Spa and Massage near Wimbledon Village</title>
        <meta
          content='Terms and conditions for treatments and Green Touch Spa and Massage, Wimbledon, London'
          name='description'
        />
        <meta
          content='Terms and conditions for treatments and Green Touch Spa and Massage, Wimbledon, London'
          name='keywords'
        />
        <meta href={`${Canonical}/terms-and-conditions`} rel='canonical' />
        <meta
          content='Terms and conditions for Green Touch Spa and Massage near Wimbledon Village'
          name='dcterms.title'
        />
        <meta
          content='Terms and conditions for treatments and Green Touch Spa and Massage, Wimbledon, London'
          name='dcterms.description'
        />
        <meta
          content='Terms and conditions for Green Touch Spa and Massage near Wimbledon Village'
          property='og:title'
        />
        <meta
          content='Terms and conditions for treatments and Green Touch Spa and Massage, Wimbledon, London'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/terms-and-conditions`} property='og:url' />
      </Head>
      <TermsAndConditions />
    </>
  )
}

export default PageTermsAndConditions
