/**
 * Home
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { Treatment } from 'components'

const PageMassages = () => {
  return (
    <>
      <Head>
        <title>
          Swedish, traditional Thai, head and other amazing massage treatments - Green Touch Spa and
          Massage
        </title>
        <meta
          content='Amazing Thai and Swedish Massage Treatments. New hot stone and head massage available at Green Touch Spa and Massage Wimbledon'
          name='description'
        />
        <meta
          content='Amazing Thai and Swedish Massage Treatments. New hot stone and head massage available at Green Touch Spa and Massage Wimbledon'
          name='keywords'
        />
        <meta href={`${Canonical}/massages`} rel='canonical' />
        <meta
          content='Swedish, traditional Thai, head and other amazing massage treatments - Green Touch Spa and Massage'
          name='dcterms.title'
        />
        <meta
          content='Amazing Thai and Swedish Massage Treatments. New hot stone and head massage available at Green Touch Spa and Massage Wimbledon'
          name='dcterms.description'
        />
        <meta
          content='Swedish, traditional Thai, head and other amazing massage treatments - Green Touch Spa and Massage'
          property='og:title'
        />
        <meta
          content='Amazing Thai and Swedish Massage Treatments. New hot stone and head massage available at Green Touch Spa and Massage Wimbledon'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/massages`} property='og:url' />
      </Head>
      <Treatment />
    </>
  )
}

export default PageMassages
