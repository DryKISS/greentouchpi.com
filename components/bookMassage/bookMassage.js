/**
 * Book Message
 */

// UI
import { Card, Space } from '@drykiss/industry-ui'

import { BookingForm } from './bookingForm'

export const BookMassage = () => {
  return (
    <>
      <Card
        body={
          <>
            Please complete the form below, and we will check the availabilty and call you back as
            soon as possible. If the time is unavailable we will recommend an alternative time.
            Please add any personal requirements in the notes section. <br />
            <br /> E-mail us at :{' '}
            <a href='mailto:info@greentouchpi.com' title='Email us'>
              info@greentouchpi.com
            </a>{' '}
            or give us a call on :{' '}
            <a href='tel:+442085403888' title='Phone us'>
              +442085403888
            </a>
          </>
        }
        header={
          <>
            Booking a massage{' '}
            <small>to reserve a time, please complete the form below or phone us</small>
          </>
        }
      />
      <Space marginBottom='lg' />
      <Card body={<BookingForm />} header='Booking Form' />
    </>
  )
}