/**
 * Home
 */

// Next
import Head from 'next/head'

// Config
import { Canonical } from 'config'

const PageIndex = () => {
  return (
    <>
      <Head>
        <title>
          Green Touch, Swedish massage and Thai massage in Wimbledon, London, UK SW19 8PL
        </title>
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='description'
        />
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='keywords'
        />
        <meta href={`${Canonical}/`} rel='canonical' />
        <meta
          content='Green Touch, Swedish massage and Thai massage in Wimbledon, London, UK SW19 8PL'
          name='dcterms.title'
        />
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='dcterms.description'
        />
        <meta
          content='Green Touch, Swedish massage and Thai massage in Wimbledon, London, UK SW19 8PL'
          property='og:title'
        />
        <meta
          content='Swedish massage, Aromatherapy, Sports massage, Reflexology, Thai&#x000A;massage in Wimbledon, London. Full body massage, acupressure and&#x000A;meditation. Detox, release tension, stress, pain, toxin, improve&#x000A;circulation.'
          name='description'
          property='og:description'
        />
        <meta content={`${Canonical}/`} property='og:url' />
      </Head>
      <div class='container'>
        <div class='row'>
          <div class='col-md-9 col-md-push-3 mainContent'>
            <div class='panel panel-default'>
              <div class='panel-heading'>
                <h3 class='heading panel-title'>
                  {' '}
                  Green Touch, Swedish and Thai massage in Wimbledon <small>London, UK</small>{' '}
                </h3>
              </div>
              <div class='panel-body'>
                {' '}
                Massage helps relieve stress, neck pain, tension, lower back pain and anxiety. If
                you just want to relax and indulge, we welcome you to experience our full body
                sports massage, Reflexology, Aromatherapy or Thai massage in the heart of Wimbledon,
                London.{' '}
              </div>
            </div>
            <div class='carousel myCarousel slide' id='myCarousel'>
              <ol class='carousel-indicators'>
                <li class='active' data-slide-to='0' data-target='.myCarousel' />
                <li data-slide-to='1' data-target='.myCarousel' />
                <li data-slide-to='2' data-target='.myCarousel' />
              </ol>
              <div class='carousel-inner' role='listbox'>
                <div
                  class='active false item'
                  ng-swipe-left='root.carouselSwipeNext( $event )'
                  ng-swipe-right='root.carouselSwipePrev( $event )'
                >
                  <figure
                    class='image'
                    itemprop='image'
                    itemscope
                    itemtype='http://schema.org/ImageObject'
                  >
                    {' '}
                    <img
                      src='assets/images/carousel/stunning-decor.jpg'
                      alt='Carousel 0'
                      class='image__img img-responsive'
                      itemprop='contentUrl'
                    />{' '}
                  </figure>
                  <div class='carousel-caption'>
                    <h3 class='heading'> Stunning décor </h3>
                    <p>Asian influenced interior design to create the perfect atmosphere</p>
                  </div>
                </div>
                <div
                  class='item'
                  ng-swipe-left='root.carouselSwipeNext( $event )'
                  ng-swipe-right='root.carouselSwipePrev( $event )'
                >
                  <figure
                    class='image'
                    itemprop='image'
                    itemscope
                    itemtype='http://schema.org/ImageObject'
                  >
                    {' '}
                    <img
                      src='assets/images/carousel/treatment-room.jpg'
                      alt='Carousel 1'
                      class='image__img img-responsive'
                      itemprop='contentUrl'
                    />{' '}
                  </figure>
                  <div class='carousel-caption'>
                    <h3 class='heading'> Treatment Room </h3>
                    <p>Comfortable, stylish room, massage table and fresh linens every time.</p>
                  </div>
                </div>
                <div
                  class='item'
                  ng-swipe-left='root.carouselSwipeNext( $event )'
                  ng-swipe-right='root.carouselSwipePrev( $event )'
                >
                  <figure
                    class='image'
                    itemprop='image'
                    itemscope
                    itemtype='http://schema.org/ImageObject'
                  >
                    {' '}
                    <img
                      src='assets/images/carousel/massage-rooms.jpg'
                      alt='Carousel 2'
                      class='image__img img-responsive'
                      itemprop='contentUrl'
                    />{' '}
                  </figure>
                  <div class='carousel-caption'>
                    <h3 class='heading'> Massage rooms </h3>
                    <p>Relax and unwind at Green Touch in our massage rooms</p>
                  </div>
                </div>
              </div>{' '}
              <a
                href='.myCarousel'
                class='carousel-control left'
                data-slide='prev'
                role='button'
                ng-click='root.carouselPrev( $event )'
              >
                <span aria-hidden='true' class='glyphicon glyphicon-chevron-left' />{' '}
                <span class='sr-only'>Previous</span>{' '}
              </a>
              <a
                href='.myCarousel'
                class='carousel-control right'
                data-slide='next'
                role='button'
                ng-click='root.carouselNext( $event )'
              >
                <span aria-hidden='true' class='glyphicon glyphicon-chevron-right' />{' '}
                <span class='sr-only'>Next</span>{' '}
              </a>
            </div>{' '}
            <br />
            <div class='panel panel-default'>
              <div class='panel-heading'>
                <h2 class='heading panel-title'>
                  {' '}
                  Leave the headache and stress of life behind, indulge in a Massage!{' '}
                </h2>
              </div>
              <div class='panel-body'>
                {' '}
                Based in Wimbledon, servicing south west London and the surrounding south Wimbledon
                area. Just 2 minutes walk from Wimbledon station which is on the District Line or
                overland trains, and across from Al Forno Italian restaurant.{' '}
                <a href='/contactus' title=' View the Map'>
                  View map
                </a>
                . <br />
                <br />
                Green Touch Spa and Massage offers Swedish massage, authentic traditional{' '}
                <a href='/treatment' title='Green Touch Thai Massage'>
                  Thai Massage
                </a>
                , Reflexology, Hot Stone massage, Aromatherapy, Sports massage, and other full body
                massage treatments guaranteed to make you feel fantastic. To help relieve pain,
                tension, improve circulation, detox, improve sleep or just for a relaxing indulgent
                massage. We incorporate all massage techniques, quality massage oils and all
                treatments are tailored to ensure you leave with a spring in your step. <br />
                <br /> A popular treatment at Green Touch Spa and Massage is our amazing{' '}
                <a href='/treatment' title='anti-stress Swedish massage'>
                  anti-stress Swedish massage
                </a>
                . You can benefit from our exclusive{' '}
                <a href='/membership' title='membership scheme'>
                  group massage plan
                </a>{' '}
                Buy 5 treatments and get 1 free. <br />
                <br /> Our Spa has a clean and modern oriental décor, with real mahogany doors,
                candlelit corridors, Thai inspired art and asian ornaments. You will be offered a
                complimentary tea/water upon your arrival with our upmost professional service.{' '}
                <br />
                <br /> All massages can be tailored to suit your taste and style. For any other
                requirements please{' '}
                <a href='/contactus' title='contact us'>
                  contact us
                </a>
                .{' '}
              </div>
            </div>
          </div>
          <div class='col-md-3 col-md-pull-9'>
            <div class='panel panel-info'>
              <div class='panel-heading'>
                <h3 class='heading panel-title'> New treatments </h3>
              </div>
              <div class='panel-body'>
                {' '}
                Fantastic new massage treatments for this autumn. Click to learn more or{' '}
                <a href='/contactus' title='contact us'>
                  contact us
                </a>{' '}
                with any queries.{' '}
                <ul>
                  <li>Pregnancy massage</li>
                  <li>Cellulite massage</li>
                </ul>
              </div>
              <div class='panel-footer'>
                <a
                  class='btn btn-default btn-block btn-success'
                  href='/treatment'
                  role='button'
                  type='button'
                >
                  {' '}
                  Learn more{' '}
                </a>{' '}
              </div>
            </div>
            <div class='panel panel-warning'>
              <div class='panel-heading'>
                <h3 class='heading panel-title'> Group Plan </h3>
              </div>
              <div class='panel-body'>
                {' '}
                Buy 5 treatments get 1 free.{' '}
                <ul>
                  <li>£350 for 6 hours of treatments</li>
                  <li>Share between any friends and family</li>
                </ul>
              </div>
              <div class='panel-footer'>
                <a
                  class='btn btn-default btn-block btn-success'
                  href='/membership'
                  role='button'
                  type='button'
                >
                  {' '}
                  Learn more{' '}
                </a>{' '}
              </div>
            </div>
            <div class='panel panel-primary'>
              <div class='panel-heading'>
                <h3 class='heading panel-title'> New customers </h3>
              </div>
              <div class='panel-body'>
                {' '}
                New customers get £10 off their first 1 hour massage treatment{' '}
              </div>
              <div class='panel-footer'>
                <a
                  class='btn btn-default btn-block btn-success'
                  href='/membership'
                  role='button'
                  type='button'
                >
                  {' '}
                  Learn more{' '}
                </a>{' '}
              </div>
            </div>
            <div class='panel panel-success'>
              <div class='panel-heading'>
                <h3 class='heading panel-title'> Refer a friend </h3>
              </div>
              <div class='panel-body'>
                {' '}
                Receive a complimentary 15 minutes, added to your next 1 hour massage{' '}
              </div>
              <div class='panel-footer'>
                <a
                  class='btn btn-default btn-block btn-success'
                  href='/specialoffer'
                  role='button'
                  type='button'
                >
                  {' '}
                  Learn more{' '}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageIndex
