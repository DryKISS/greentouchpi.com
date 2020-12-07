/**
 * Components - Terms And Conditions
 */

// UI
import { Card, Column, Heading, List, ListItem, Row, Space } from '@drykiss/industry-ui'

export const TermsAndConditions = () => {
  return (
    <>
      <Row>
        <Column md={12} xs={12}>
          <Card
            body={
              <>
                <Heading content='Etiquette and medical information' tag='h2' />
                <List>
                  <ListItem>
                    Please arrive 10-15 minutes prior to your appointment so we can record your
                    needs and details, offer you a refreshment and the opportunity to relax.
                  </ListItem>
                  <ListItem>
                    Please note that as a courtesy to all our clients a prompt appointment schedule
                    is adhered to, late appointments may not be honoured. Treatments starting late
                    will still finish at the appointed time, so other guests are not inconvenienced.
                  </ListItem>
                  <ListItem>
                    {' '}
                    Please kindly switch off your mobile phones during treatment.{' '}
                  </ListItem>
                  <ListItem>
                    During the massage session our customers are required to leave their underwear
                    on.
                  </ListItem>
                  <ListItem>
                    If you have any medical conditions, are pregnant or breast feeding or have
                    allergies, injuries, skin complaints or infections, please discuss with Green
                    Touch Spa and Massage Wimbledon prior to making your booking as this may direct
                    your treatment options.
                  </ListItem>
                  <ListItem>
                    Our massage therapy services are highly professional, we do not offer any erotic
                    or sexual services.
                  </ListItem>
                </List>

                <Heading content='Booking and Cancellation Policy' tag='h2' />
                <List>
                  <ListItem>
                    Credit card details are required to secure an appointment via email, phone or in
                    person. Please have this on hand when making a reservation.
                  </ListItem>
                  <ListItem>
                    Clients who wish to change or cancel an appointment must provide at least 24
                    hour's notice.
                  </ListItem>
                  <ListItem>
                    Same day cancellations will be charged at 50% of the scheduled service price.
                    This is used to compensate the therapist.
                  </ListItem>
                  <ListItem>
                    Failure to show up for a scheduled appointment, will result in a full charge
                    being applied.
                  </ListItem>
                  <ListItem>
                    Please contact us ASAP if a delay making the appointment is likely to happen. We
                    will always do our best to accommodate late arrivals (within 15 minutes after
                    your appointment) by performing the most complete treatment possible in the time
                    remaining. Arrival 15 minutes after the reservation time will result in full
                    charges (equivalent deductions from gift certificates).
                  </ListItem>
                  <ListItem>
                    Same day booking may be accepted and will be at the discretion of the manager.
                  </ListItem>
                  <ListItem> Last booking is 2 hours before closing time. </ListItem>
                  <ListItem>
                    If you have a gift voucher and do not show up for your treatment or cancel
                    within the 24 hours period before your treatment time, you will forfeit your
                    voucher.
                  </ListItem>
                </List>

                <Heading content='Treatment Prices, Group plan and Service Charges' tag='h2' />
                <List>
                  <ListItem>
                    Note that each package is stand alone and can not be used in conjunction with
                    other packages, i.e. a customer will not be able to use other promotions if they
                    use a group plan token.
                  </ListItem>
                  <ListItem>
                    The buy 5 get 1 treatment free group plan is not limited to an expiry date, and
                    can be shared amonst any family or friends.
                  </ListItem>
                  <ListItem>
                    When using a group plan token, Hot stone, Celluite and Aromatherapy treatments
                    will incur a £5 surcharge.
                  </ListItem>
                  <ListItem>
                    Discretionary gratuity/tips are not added to the final treatment price. Any
                    service charge received goes straight to the therapist who performed your
                    treatment and will be greatly appreciated.
                  </ListItem>
                  <ListItem>
                    Please inform the front of house team should you wish to provide any gratuity.
                  </ListItem>
                </List>

                <Heading content='Gift Certificate Terms and Conditions' tag='h2' />
                <List>
                  <ListItem>
                    {' '}
                    Valid for 12 months from date of purchase, unless otherwise stated.{' '}
                  </ListItem>
                  <ListItem> Gift Vouchers are non-refundable. </ListItem>
                  <ListItem>
                    {' '}
                    Please remember to bring your Gift card to your appointment.{' '}
                  </ListItem>
                  <ListItem>
                    Vouchers will be dispatched by post or email - please allow 3-to-5 working days
                    (Same day delivery within SW19 area). Please allow 7 days for delivery during
                    peak postal times.
                  </ListItem>
                  <ListItem>
                    {' '}
                    No dispatch or delivery during UK Bank Holidays and weekends.{' '}
                  </ListItem>
                  <ListItem>
                    {' '}
                    Vouchers can be bought in multiples as gifts or for yourself.{' '}
                  </ListItem>
                  <ListItem>
                    {' '}
                    The vouchers can be used any day but is subject to availability.{' '}
                  </ListItem>
                </List>

                <Heading content='Complaints/Comments' tag='h2' />
                <List>
                  <ListItem>
                    Any complaint or comment regarding your treatments should be made in the first
                    instance to the receptionist before you leave Green Touch Thai Massage Wimbledon
                    so that it can be resolved at the time.
                  </ListItem>
                  <ListItem>
                    Problems which cannot be resolved should be notified in writing to Green Touch
                    Thai Massage Wimbledon Manager at info@greentouchpi.com or by post: 1B Kings
                    Road, Wimbledon, SW19 8PL, London, UK.
                  </ListItem>
                  <ListItem>
                    We reserve the right, at our discretion, to update and/or revise these terms.
                    Please check periodically for changes.
                  </ListItem>
                </List>
              </>
            }
            header={
              <>
                Terms and Conditions <small>Easy to understand terms and conditions</small>
              </>
            }
          />
          <Space marginBottom='lg' />
        </Column>
      </Row>
    </>
  )
}
