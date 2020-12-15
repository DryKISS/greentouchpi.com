/**
 * Membership
 */

// UI
import { Card, Column, List, ListItem, Row, Space } from '@drykiss/industry-ui'

import { MembershipCard } from './card'
import { data } from './data'

export const Membership = () => {
  return (
    <>
      <Row>
        {data.map((treatment, idx) => (
          <Column key={treatment.title} md={6} xs={12}>
            <MembershipCard index={idx} {...treatment} />
          </Column>
        ))}

        <Column md={6} xs={12}>
          <Card
            body={
              <List>
                <ListItem>
                  Refer a friend (new customers only), they receive £10 off their first treatment
                </ListItem>
                <ListItem>
                  As an existing customer, you will recieve 15 minutes free on your next 1 hour
                  massage treatment
                </ListItem>
                <ListItem>Gift vouchers available.</ListItem>
                <ListItem>We can also cater for group bookings</ListItem>
              </List>
            }
            header={
              <>
                Schemes <small>Refer a friend, Gift vouchers and group bookings</small>{' '}
              </>
            }
          />
          <Space marginBottom='lg' />
        </Column>

        <Column md={6} xs={12}>
          <Card
            body={
              <>
                <List>
                  <ListItem>
                    Please note that you cannot use our schemes in conjunction with other schemes.
                  </ListItem>
                  <ListItem>Please read full terms and conditions</ListItem>
                  <ListItem>For further information please contact us</ListItem>
                </List>
                References
                <List>
                  <ListItem>
                    * With the exception of Aromatherapy, Cellulite and Hot Stone massages, which
                    can be provided at a £5 extra charge.
                  </ListItem>
                  <ListItem>** non refundable, excludes pregancy massages treatment</ListItem>
                </List>
              </>
            }
            header={
              <>
                Conditions <small>Easy to understand terms and conditions</small>{' '}
              </>
            }
          />
          <Space marginBottom='lg' />
        </Column>
      </Row>
    </>
  )
}
