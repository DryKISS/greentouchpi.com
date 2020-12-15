/**
 * Home
 */

// Styled Components
import styled from 'styled-components'

// UI
import { Card, Carousel, Heading, Link, Space, Text } from '@drykiss/industry-ui'

export const Home = () => {
  return (
    <>
      <Card
        body={
          <>
            Massage helps relieve stress, neck pain, tension, lower back pain and anxiety. If you
            just want to relax and indulge, we welcome you to experience our full body sports
            massage, Reflexology, Aromatherapy or Thai massage in the heart of Wimbledon, London.
          </>
        }
        header={
          <>
            Green Touch, Swedish and Thai massage in Wimbledon <small>London, UK</small>
          </>
        }
      />

      <Space marginBottom='lg' />

      <CarouselWrapper>
        <Carousel
          fullWidth
          height='400px'
          navContext='white'
          numberOfItems={1}
          slides={[
            {
              img: '/assets/images/carousel/stunning-decor.jpg',
              text: (
                <Text context='white'>
                  <Heading content='Stunning décor' context='white' tag='h3' />
                  <p>Asian influenced interior design to create the perfect atmosphere</p>
                </Text>
              )
            },
            {
              img: '/assets/images/carousel/treatment-room.jpg',
              text: (
                <Text context='white'>
                  <Heading content='Treatment Room' context='white' tag='h3' />
                  <p>Comfortable, stylish room, massage table and fresh linens every time.</p>
                </Text>
              )
            },
            {
              img: '/assets/images/carousel/massage-rooms.jpg',
              text: (
                <Text context='white'>
                  <Heading content='Massage rooms' context='white' tag='h3' />
                  <p>Relax and unwind at Green Touch in our massage rooms</p>
                </Text>
              )
            }
          ]}
        />
      </CarouselWrapper>

      <Space marginBottom='lg' />

      <Card
        body={
          <>
            Based in Wimbledon, servicing south west London and the surrounding south Wimbledon
            area. Just 2 minutes walk from Wimbledon station which is on the District Line or
            overland trains, and across from Al Forno Italian restaurant.{' '}
            <Link to='/contactus' passHref title=' View the Map'>
              View map
            </Link>
            . <br />
            <br />
            Green Touch Spa and Massage offers Swedish massage, authentic traditional{' '}
            <Link to='/treatment' passHref title='Green Touch Thai Massage'>
              Thai Massage
            </Link>
            , Reflexology, Hot Stone massage, Aromatherapy, Sports massage, and other full body
            massage treatments guaranteed to make you feel fantastic. To help relieve pain, tension,
            improve circulation, detox, improve sleep or just for a relaxing indulgent massage. We
            incorporate all massage techniques, quality massage oils and all treatments are tailored
            to ensure you leave with a spring in your step. <br />
            <br /> A popular treatment at Green Touch Spa and Massage is our amazing{' '}
            <Link to='/treatment' passHref title='anti-stress Swedish massage'>
              anti-stress Swedish massage
            </Link>
            . You can benefit from our exclusive{' '}
            <Link to='/membership' passHref title='membership scheme'>
              group massage plan
            </Link>{' '}
            Buy 5 treatments and get 1 free. <br />
            <br /> Our Spa has a clean and modern oriental décor, with real mahogany doors,
            candlelit corridors, Thai inspired art and asian ornaments. You will be offered a
            complimentary tea/water upon your arrival with our upmost professional service. <br />
            <br /> All massages can be tailored to suit your taste and style. For any other
            requirements please{' '}
            <Link to='/contactus' passHref title='contact us'>
              contact us
            </Link>
            .
          </>
        }
        header='Leave the headache and stress of life behind, indulge in a Massage!'
      />
    </>
  )
}

const CarouselWrapper = styled.div`
  [class*='carousel__ItemWrapper'] {
    height: 100%;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
`
