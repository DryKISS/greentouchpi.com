/**
 * Special Offer
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { SpecialOffer } from 'components'

const PageSpecialOffer = () => {
  return (
    <>
      <Head>
        <title>
          50% off massage treatments and other promotional sales at Green Touch Wimbledon
        </title>
        <meta
          content='Promotion specials on Swedish and Thai massage at Green Touch Spa and Massage in Wimbledon, London'
          name='description'
        />
        <meta
          content='Promotion specials on Swedish and Thai massage at Green Touch Spa and Massage in Wimbledon, London'
          name='keywords'
        />
        <meta href={`${Canonical}/specialoffer`} rel='canonical' />
        <meta
          content='50% off massage treatments and other promotional sales at Green Touch Wimbledon'
          name='dcterms.title'
        />
        <meta
          content='Promotion specials on Swedish and Thai massage at Green Touch Spa and Massage in Wimbledon, London'
          name='dcterms.description'
        />
        <meta
          content='50% off massage treatments and other promotional sales at Green Touch Wimbledon'
          property='og:title'
        />
        <meta
          content='Promotion specials on Swedish and Thai massage at Green Touch Spa and Massage in Wimbledon, London'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/specialoffer`} property='og:url' />
      </Head>
      <SpecialOffer />
    </>
  )
}

export default PageSpecialOffer
