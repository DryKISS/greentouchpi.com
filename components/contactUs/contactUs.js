/**
 * Components - Contact Us
 */

// UI
import { Card, Column, Icon, Row, Space } from '@drykiss/industry-ui'

export const ContactUs = () => {
  return (
    <>
      <Row>
        <Column xs={12} md={12}>
          <Card
            body={
              <>
                Want to ask us something? Or share some Feedback? We’d love to hear from you, please
                e-mail us at :{' '}
                <a href='mailto:info@greentouchpi.com' title='Email us'>
                  info@greentouchpi.com
                </a>{' '}
                or give us a call on :{' '}
                <a href='tel:+442085403888' title='Phone us'>
                  +442085403888
                </a>
              </>
            }
            header='Contact and Directions'
          />
          <Space marginBottom='lg' />
        </Column>

        <Column xs={12} md={12}>
          <Card
            body={
              <>
                <iframe
                  allowfullscreen=''
                  class='embed-responsive-item'
                  frameborder='0'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.078618893059!2d-0.20374218378438316!3d51.41998242491123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608ba87a6b691%3A0xac473b16f5a952a5!2sGreen+Touch+Spa+and+Massage+Wimbledon!5e0!3m2!1sen!2suk!4v1516386573189'
                  style={{ border: '0', minHeight: '400px', width: '100%' }}
                />
              </>
            }
            header='Map and Directions'
          />
          <Space marginBottom='lg' />
        </Column>

        <Column xs={12} md={12}>
          <Card
            body={
              <>
                <address>
                  <p>
                    <Icon icon='map-marker' /> <strong> Address </strong> <br /> 1B Kings Road{' '}
                    <br /> Wimbledon <br /> SW19 8PL
                  </p>
                  <p>
                    <Icon icon='external-link-alt' />
                    <a
                      href='https://goo.gl/maps/UBPbNBz5qQo'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View larger Map
                    </a>
                  </p>
                  <Icon icon='phone' /> <a href='tel:+442085403888'>+442085403888</a>
                  <br /> <Icon icon='envelope' />
                  <a href='mailto:info@greentouchpi.com'>info@greentouchpi.com</a>
                </address>
              </>
            }
            header='Address and Contact details'
          />
          <Space marginBottom='lg' />
        </Column>

        <Column xs={12} md={12}>
          <Card
            body={
              <>
                <Icon icon='clock' /> Monday - Saturday: 11am - 9pm <br />
                <Icon icon='clock' /> Sunday: 11am - 8pm <br />
                <Icon icon='clock' /> Bank Holidays: 11am - 8pm <br />
                <Icon icon='clock' /> Last appointment is 90 minutes before close <br />
              </>
            }
            header='Opening Times - 7 days a week'
          />
          <Space marginBottom='lg' />
        </Column>

        <Column xs={12} md={12}>
          <Card
            body={
              <>
                <a
                  href='https://www.facebook.com/greentouch.pi'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Facebook page'
                >
                  <Icon icon='facebook-square' prefix='fab' size='3x' />
                </a>
                <a
                  href='https://plus.google.com/109354139331368969621/about'
                  rel='noopener noreferrer'
                  target='_blank'
                  title='Google page'
                >
                  <Icon icon='google-plus-square' prefix='fab' size='3x' />
                </a>
              </>
            }
            header='Follow Us on Facebook'
          />
          <Space marginBottom='lg' />
        </Column>
      </Row>
    </>
  )
}
