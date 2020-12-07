/**
 * Special Offer
 */

// UI
import { Card, Column, Row, Space } from '@drykiss/industry-ui'

export const SpecialOffer = () => {
  return (
    <>
      <Row>
        <Column md={12} xs={12}>
          <Card
            body={
              <>
                We like to give back to our customers and run special promtions during Valentine
                day, Easter long weekend, Mothers day, Fathers day, British Summer holidays and even
                Christmas. <br />
                <br /> Please bookmark this page, and check before you book your massage for any
                discounts you may be entitled to! <br />
                <br /> Please{' '}
                <a href='/contactus' title='contact us'>
                  contact us
                </a>{' '}
                with any queries.{' '}
                <a href='/terms-and-conditions' title='Terms and Conditions'>
                  Terms and conditions
                </a>{' '}
                apply.
              </>
            }
            header={
              <>
                Offers and promotions{' '}
                <small>Visit here to find out the latest deals and discounts</small>
              </>
            }
          />
          <Space marginBottom='lg' />
        </Column>

        <Column md={4} xs={12}>
          <Card
            body={
              <>
                We will make sure your birthday celebration is a time to remember, providing an
                immaculate service with your massage treatment. <br />
                <br /> And from our hearts you will receive a special box of limited edition Chinese
                Tea. <br />
                <br /> Please{' '}
                <a href='/contactus' title='contact us'>
                  contact us
                </a>{' '}
                with any queries. <br />
                <br />{' '}
                <a href='/terms-and-conditions' title='Terms and Conditions'>
                  Terms and conditions
                </a>{' '}
                apply.
              </>
            }
            header='Birthday Treat'
          />
          <Space marginBottom='lg' />
        </Column>

        <Column md={4} xs={12}>
          <Card
            body={
              <>
                New customers get £10 off their first 1 hour massage treatment <br />
                <br /> Please{' '}
                <a href='/contactus' title='contact us'>
                  contact us
                </a>{' '}
                with any queries. <br />
                <br />{' '}
                <a href='/terms-and-conditions' title='Terms and Conditions'>
                  Terms and conditions
                </a>{' '}
                apply.
              </>
            }
            header='New customers'
          />
          <Space marginBottom='lg' />
        </Column>

        <Column md={4} xs={12}>
          <Card
            body={
              <>
                Receive a complimentary 15 minutes, added to your next 1 hour massage <br />
                <br /> Please{' '}
                <a href='/contactus' title='contact us'>
                  contact us
                </a>{' '}
                with any queries. <br />
                <br />{' '}
                <a href='/terms-and-conditions' title='Terms and Conditions'>
                  Terms and conditions
                </a>{' '}
                apply.
              </>
            }
            header='Refer a friend'
          />
          <Space marginBottom='lg' />
        </Column>
      </Row>
    </>
  )
}
