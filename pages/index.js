/**
 * Home
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { Home } from 'components'

const PageIndex = () => {
  return (
    <>
      <Head>
        <title>
          Green Touch, Swedish massage and Thai massage in Wimbledon, London, UK SW19 8PL
        </title>
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='description'
        />
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='keywords'
        />
        <meta href={`${Canonical}/`} rel='canonical' />
        <meta
          content='Green Touch, Swedish massage and Thai massage in Wimbledon, London, UK SW19 8PL'
          name='dcterms.title'
        />
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='dcterms.description'
        />
        <meta
          content='Green Touch, Swedish massage and Thai massage in Wimbledon, London, UK SW19 8PL'
          property='og:title'
        />
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/`} property='og:url' />
      </Head>
      <Home />
    </>
  )
}

export default PageIndex
