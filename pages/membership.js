/**
 * Membership
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

// Components
import { Membership } from 'components'

const PageMembership = () => {
  return (
    <>
      <Head>
        <title>Green Touch Group Plans. Buy 5 Massage Treatments Get 1 FREE</title>
        <meta
          content='Amazing Group plan Buy 5 treatments get 1 FREE. Swedish massage and traditional Thai massage treatment at Wimbledon, London branch.'
          name='description'
        />
        <meta
          content='Amazing Group plan Buy 5 treatments get 1 FREE. Swedish massage and traditional Thai massage treatment at Wimbledon, London branch.'
          name='keywords'
        />
        <meta href={`${Canonical}/membership`} rel='canonical' />
        <meta
          content='Green Touch Group Plans. Buy 5 Massage Treatments Get 1 FREE'
          name='dcterms.title'
        />
        <meta
          content='Amazing Group plan Buy 5 treatments get 1 FREE. Swedish massage and traditional Thai massage treatment at Wimbledon, London branch.'
          name='dcterms.description'
        />
        <meta
          content='Green Touch Group Plans. Buy 5 Massage Treatments Get 1 FREE'
          property='og:title'
        />
        <meta
          content='Amazing Group plan Buy 5 treatments get 1 FREE. Swedish massage and traditional Thai massage treatment at Wimbledon, London branch.'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/membership`} property='og:url' />
      </Head>
      <Membership />
    </>
  )
}

export default PageMembership
