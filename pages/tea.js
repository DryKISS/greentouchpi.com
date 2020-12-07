/**
 * Tea
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { Tea } from 'components'

const PageTea = () => {
  return (
    <>
      <Head>
        <title>Chinese herbal and therapeutic Tea from Green Touch Spa and Massage.</title>
        <meta
          content='Chinese herbal and therapeutic Tea from Green Touch Spa and Massage. Relax with a Free drink before each treatment.'
          name='description'
        />
        <meta
          content='Chinese herbal and therapeutic Tea from Green Touch Spa and Massage. Relax with a Free drink before each treatment.'
          name='keywords'
        />
        <meta href={`${Canonical}/tea`} rel='canonical' />
        <meta
          content='Chinese herbal and therapeutic Tea from Green Touch Spa and Massage.'
          name='dcterms.title'
        />
        <meta
          content='Chinese herbal and therapeutic Tea from Green Touch Spa and Massage. Relax with a Free drink before each treatment.'
          name='dcterms.description'
        />
        <meta
          content='Chinese herbal and therapeutic Tea from Green Touch Spa and Massage.'
          property='og:title'
        />
        <meta
          content='Chinese herbal and therapeutic Tea from Green Touch Spa and Massage. Relax with a Free drink before each treatment.'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/tea`} property='og:url' />
      </Head>
      <Tea />
    </>
  )
}

export default PageTea
