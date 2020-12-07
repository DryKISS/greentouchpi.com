/**
 * Components - Treatment
 */

// UI
import { Card, Column, Row, Space } from '@drykiss/industry-ui'

import { TreatmentCard } from './card'
import { data } from './data'

export const Treatment = () => {
  return (
    <>
      <Card
        body={
          <>
            Our treatments are the ultimate in pampering, relaxation and pain remedy. Whether it’s a
            problem area causing you trouble, or just the stress of the working day, take advantage
            of a therapeutic deep tissue full body massage or focus on one area to de-stress, unwind
            and relax. Green Touch can tailor a massage that is right for you. <br />
            <br /> We start off by offering you tea or water to unwind. Then before your massage a
            hot towel for your feet and finally the massage of your choice. <br />
            <br /> Please do always communicate with us or your therapist should the pressure be too
            much, or you feel any pain. <br />
            <br /> We highly recommend booking in for at least a 90 minutes massage.{' '}
            <a href='/terms-and-conditions' title='Terms and Conditions'>
              Terms and conditions
            </a>{' '}
            apply to all our bookings.
          </>
        }
        header={
          <>
            Swedish, traditional Thai, head and other amazing massage treatments{' '}
            <small>Professional, friendly staff in a tranquil surrounding</small>
          </>
        }
      />
      <Space marginBottom='lg' />

      <Row>
        {data.map(treatment => (
          <Column key={treatment.title} md={4} xs={12}>
            <TreatmentCard {...treatment} />
          </Column>
        ))}
      </Row>
    </>
  )
}
