/**
 * Layout - Footer
 */

// UI
import { Container, Footer, Image, Link } from '@drykiss/industry-ui'
import styled from 'styled-components'

export const LayoutFooter = ({ children }) => {
  return (
    <>
      <Footer
        columns={[
          {
            header: {
              content: 'About'
            },
            size: { sm: 12, md: 3 },
            text: {
              items: [
                {
                  content: `Green Touch Spa and Massage offers professional massage services within a
                  stunning oriental surrounding, delivered by fully qualified staff.`
                },
                {
                  content: `Economically priced with group plans available; buy 5 treatments get 1 free,
                  proving that luxury doesn't need to cost the earth!`
                },
                {
                  content: `We welcome you to take a tour of our massage rooms and see for yourself why so many
                  of our clients return time and again.`
                }
              ]
            }
          },
          {
            size: { sm: 12, md: 3 },
            header: {
              content: 'What We Do'
            },
            text: {
              items: [
                {
                  content: `Green Touch specialises in Swedish massage, traditional Thai massage, sports
                  massage, reflexology and more in the Wimbledon, London area. All treatments are
                  conducted by highly trained Thai nationals.`
                },
                {
                  content: `Our treatments are carefully choreographed to maximise the health and well
                  being of our clients in the time allotted.`
                },
                {
                  content: 'We can tailor each treatment to your individual requirements.'
                }
              ]
            }
          },
          {
            size: { sm: 12, md: 3 },
            header: {
              content: 'Social'
            },
            links: {
              items: [
                {
                  id: 'footerFacebook',
                  name: 'Follow us on Facebook',
                  to: 'https://www.facebook.com/greentouch.pi'
                }
              ]
            },
            text: {
              items: [
                {
                  content: 'for exclusive promotions and deals.'
                },
                {
                  content: `We offer group bookings for birthdays, hen parties, girls day and night out,
                  Mother's Day, or general pampering experience.`
                },
                {
                  content: 'Let us know the occasion and we can plan the details with you.'
                }
              ]
            }
          },
          {
            size: { sm: 12, md: 3 },
            header: {
              content: 'Contact'
            },
            text: {
              items: [
                {
                  content: 'For bookings, questions or general feedback please get in touch'
                },
                {
                  content: `We are directly across from Al Forno Italian restaurant in Wimbledon.
                  <address>
                  1B Kings Road, Wimbledon, SW19 8PL, London
                  </address>
                  `
                }
              ]
            },
            links: {
              items: [
                {
                  id: 'footerCall',
                  name: '+44 208 540 3888',
                  to: 'tel:+442085403888'
                },
                {
                  id: 'footerContact',
                  name: 'Please get in touch',
                  to: '/'
                },
                {
                  id: 'footerEmail',
                  name: 'info@greentouchpi.com',
                  to: 'mailto:info@greentouchpi.com'
                },
                {
                  id: 'footerTerms',
                  name: 'Terms and Conditions',
                  to: '/terms-and-conditions'
                }
              ]
            }
          }
        ]}
      />
      <Container>
        <StyledCopyright
          links={[
            {
              name: 'Site & SEO by DryKISS Ltd',
              to: 'https://drykiss.com'
            }
          ]}
        >
          <div>© Greentouch Wimbledon Ltd All rights reserved.</div>

          <Link border={false} to='https://drykiss.com' passHref>
            Site & SEO by{' '}
            <Image src='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZHJ5a2lzc0xvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI1NC42NjciIGhlaWdodD0iMjI0LjQ2NSIgdmlld0JveD0iMCAwIDI1NC42NjcgMjI0LjQ2NSI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLjY1MSA5NS45OEgzMjkuNTV2NjEuNjU1SC0xLjY1MXoiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEyNi42NTIpIiBmaWxsPSIjOTc5Nzk3IiBmb250LWZhbWlseT0iJ0NvdXJpZXInIiBmb250LXNpemU9IjQ4IiBsZXR0ZXItc3BhY2luZz0iNyI+RFJZPC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNS41NjMgMTI2LjY1MikiIGZpbGw9IiNFRDI5M0IiIGZvbnQtZmFtaWx5PSInQ291cmllciciIGZvbnQtc2l6ZT0iNDgiIGxldHRlci1zcGFjaW5nPSI3Ij5LSVNTPC90ZXh0PjxnIGZpbGw9IiNFRDI5M0IiPjxwYXRoIG9wYWNpdHk9Ii41NSIgZD0iTTY0LjMxNSAyMDMuMzMxaDIxLjEzNnYyMS4xMzdINjQuMzE1eiIvPjxwYXRoIG9wYWNpdHk9Ii43NSIgZD0iTTg1LjQ1NyAyMDMuMzM4aDIxLjEyN3YyMS4xMjdIODUuNDU3eiIvPjxwYXRoIG9wYWNpdHk9Ii42OSIgZD0iTTEwNi41NzkgMjAzLjMzMWgyMS4xMzh2MjEuMTM3aC0yMS4xMzh6Ii8+PHBhdGggb3BhY2l0eT0iLjc3IiBkPSJNMTI3LjcxMyAyMDMuMzMxaDIxLjEzN3YyMS4xMzdoLTIxLjEzN3oiLz48cGF0aCBvcGFjaXR5PSIuNjciIGQ9Ik0xNDguODU0IDIwMy4zMzhoMjEuMTI4djIxLjEyN2gtMjEuMTI4eiIvPjxwYXRoIG9wYWNpdHk9Ii41MyIgZD0iTTE2OS45NzkgMjAzLjMzMWgyMS4xMzh2MjEuMTM3aC0yMS4xMzh6Ii8+PHBhdGggb3BhY2l0eT0iLjUxIiBkPSJNNDMuMTgyIDE4Mi4xNDVoMjEuMTM3djIxLjE0Mkg0My4xODJ6Ii8+PHBhdGggb3BhY2l0eT0iLjg1IiBkPSJNNjQuMzI0IDE4Mi4xNTVoMjEuMTI4djIxLjEzMUg2NC4zMjR6Ii8+PHBhdGggb3BhY2l0eT0iLjk5IiBkPSJNODUuNDQ3IDE4Mi4xNDVoMjEuMTM3djIxLjE0Mkg4NS40NDd6Ii8+PHBhdGggb3BhY2l0eT0iLjkiIGQ9Ik0xMDYuNTc5IDE4Mi4xNDVoMjEuMTM4djIxLjE0MmgtMjEuMTM4ek0xMjcuNzIzIDE4Mi4xNTRoMjEuMTI4djIxLjEzMmgtMjEuMTI4eiIvPjxwYXRoIG9wYWNpdHk9Ii45NyIgZD0iTTE0OC44NDcgMTgyLjE0NmgyMS4xMzZ2MjEuMTRoLTIxLjEzNnoiLz48cGF0aCBvcGFjaXR5PSIuODciIGQ9Ik0xNjkuOTg4IDE4Mi4xNDZoMjEuMTI5djIxLjEzMWgtMjEuMTI5eiIvPjxwYXRoIG9wYWNpdHk9Ii40OSIgZD0iTTE5MS4xMTIgMTgyLjE0NmgyMS4xMzh2MjEuMTRoLTIxLjEzOHoiLz48cGF0aCBvcGFjaXR5PSIuNDUiIGQ9Ik0yMi4wNDkgMTYxLjAxNGgyMS4xMzd2MjEuMTM1SDIyLjA0OXoiLz48cGF0aCBvcGFjaXR5PSIuODEiIGQ9Ik00My4xOTEgMTYxLjAyM2gyMS4xMjh2MjEuMTI1SDQzLjE5MXoiLz48cGF0aCBvcGFjaXR5PSIuODEiIGQ9Ik02NC4zMTUgMTYxLjAxNGgyMS4xMzZ2MjEuMTM1SDY0LjMxNXoiLz48cGF0aCBvcGFjaXR5PSIuOTUiIGQ9Ik04NS40NDcgMTYxLjAxMmgyMS4xMzd2MjEuMTM3SDg1LjQ0N3oiLz48cGF0aCBvcGFjaXR5PSIuOTMiIGQ9Ik0xNDguODczIDE2MS4wMDRIMTcwdjIxLjEyOWgtMjEuMTI3eiIvPjxwYXRoIG9wYWNpdHk9Ii45MSIgZD0iTTE2OS45OTYgMTYwLjk5N2gyMS4xMzl2MjEuMTM3aC0yMS4xMzl6Ii8+PHBhdGggb3BhY2l0eT0iLjgzIiBkPSJNMTkxLjEzOCAxNjAuOTk3aDIxLjEyOHYyMS4xMjloLTIxLjEyOHoiLz48cGF0aCBvcGFjaXR5PSIuNDciIGQ9Ik0yMTIuMjYxIDE2MC45OTdIMjMzLjR2MjEuMTM3aC0yMS4xMzl6Ii8+PHBhdGggb3BhY2l0eT0iLjQzIiBkPSJNLjg5MiAxMzkuODc5aDIxLjEzN3YyMS4xMzlILjg5MnoiLz48cGF0aCBvcGFjaXR5PSIuNzEiIGQ9Ik0yMi4wMzMgMTM5Ljg4OWgyMS4xMjh2MjEuMTI5SDIyLjAzM3oiLz48cGF0aCBvcGFjaXR5PSIuNzciIGQ9Ik00My4xNTcgMTM5Ljg3OWgyMS4xMzh2MjEuMTM5SDQzLjE1N3oiLz48cGF0aCBvcGFjaXR5PSIuODkiIGQ9Ik02NC4yODkgMTM5Ljg3OWgyMS4xMzh2MjEuMTM5SDY0LjI4OXoiLz48cGF0aCBvcGFjaXR5PSIuOTEiIGQ9Ik0xNzAuMDAzIDEzOS44NzRoMjEuMTMxdjIxLjEyOWgtMjEuMTMxeiIvPjxwYXRoIG9wYWNpdHk9Ii43OSIgZD0iTTE5MS4xMjggMTM5Ljg2NmgyMS4xMzh2MjEuMTM3aC0yMS4xMzh6TTIxMi4yNzEgMTM5Ljg2NkgyMzMuNHYyMS4xMjdoLTIxLjEyOXoiLz48cGF0aCBvcGFjaXR5PSIuNDEiIGQ9Ik0yMzMuMzk1IDEzOS44NjZoMjEuMTM4djIxLjEzN2gtMjEuMTM4eiIvPjwvZz48ZyBmaWxsPSIjRUQyOTNCIj48cGF0aCBvcGFjaXR5PSIuNTQiIGQ9Ik0xNjkuOTcxLjkyN2gyMS4xMzl2MjEuMTM3aC0yMS4xMzl6Ii8+PHBhdGggb3BhY2l0eT0iLjciIGQ9Ik0xNDguODM5LjkyN2gyMS4xMjd2MjEuMTI4aC0yMS4xMjd6Ii8+PHBhdGggb3BhY2l0eT0iLjc0IiBkPSJNMTI3LjcwNSA0My4yMzhoMjEuMTM2djIxLjEzOGgtMjEuMTM2eiIvPjxwYXRoIG9wYWNpdHk9Ii42OCIgZD0iTTEwNi41NzIgNDMuMjM4aDIxLjEzN3YyMS4xMzhoLTIxLjEzN3oiLz48cGF0aCBvcGFjaXR5PSIuNzIiIGQ9Ik04NS40NC45MjdoMjEuMTI4djIxLjEyOEg4NS40NHoiLz48cGF0aCBvcGFjaXR5PSIuNTIiIGQ9Ik02NC4zMDcuOTI3aDIxLjEzN3YyMS4xMzZINjQuMzA3eiIvPjxwYXRoIG9wYWNpdHk9Ii41NiIgZD0iTTE5MS4xMDUgMjIuMTA5aDIxLjEzN3YyMS4xMzdoLTIxLjEzN3oiLz48cGF0aCBvcGFjaXR5PSIuNzYiIGQ9Ik0xNjkuOTcxIDIyLjEwOUgxOTEuMXYyMS4xMjhoLTIxLjEyOXoiLz48cGF0aCBvcGFjaXR5PSIuODQiIGQ9Ik0xNDguODM5IDIyLjEwOWgyMS4xMzd2MjEuMTM3aC0yMS4xMzd6Ii8+PHBhdGggb3BhY2l0eT0iLjU4IiBkPSJNMTI3LjcwNiAyMi4xMDloMjEuMTM3djIxLjEzOGgtMjEuMTM3eiIvPjxwYXRoIG9wYWNpdHk9Ii41IiBkPSJNMTA2LjU3MiAyMi4xMDlIMTI3Ljd2MjEuMTI4aC0yMS4xMjh6Ii8+PHBhdGggb3BhY2l0eT0iLjgyIiBkPSJNODUuNDQgMjIuMTA5aDIxLjEzNnYyMS4xMzZIODUuNDR6Ii8+PHBhdGggb3BhY2l0eT0iLjY2IiBkPSJNNjQuMzA3IDIyLjExN2gyMS4xMjh2MjEuMTI4SDY0LjMwN3oiLz48cGF0aCBvcGFjaXR5PSIuNDgiIGQ9Ik00My4xNzQgMjIuMTA5aDIxLjEzOXYyMS4xMzZINDMuMTc0eiIvPjxwYXRoIG9wYWNpdHk9Ii40NCIgZD0iTTIxMi4yMzcgNDMuMjQzaDIxLjEzOFY2NC4zOGgtMjEuMTM4eiIvPjxwYXRoIG9wYWNpdHk9Ii43MSIgZD0iTTE5MS4xMDUgNDMuMjQzaDIxLjEyNlY2NC4zN2gtMjEuMTI2eiIvPjxwYXRoIG9wYWNpdHk9Ii44OCIgZD0iTTE2OS45ODMgNDMuMjNoMjEuMTR2MjEuMTM3aC0yMS4xNHoiLz48cGF0aCBvcGFjaXR5PSIuOTYiIGQ9Ik0xNDguODM5IDQzLjI0M2gyMS4xMzd2MjEuMTM5aC0yMS4xMzd6Ii8+PHBhdGggb3BhY2l0eT0iLjk0IiBkPSJNODUuNDIzIDQzLjI2aDIxLjEyN3YyMS4xMjdIODUuNDIzeiIvPjxwYXRoIG9wYWNpdHk9Ii44NiIgZD0iTTY0LjI4OSA0My4yNmgyMS4xMzh2MjEuMTM1SDY0LjI4OXpNNDMuMTU3IDQzLjI2OGgyMS4xMjh2MjEuMTI3SDQzLjE1N3oiLz48cGF0aCBvcGFjaXR5PSIuNDYiIGQ9Ik0yMi4wMjUgNDMuMjZoMjEuMTM2djIxLjEzNUgyMi4wMjV6Ii8+PHBhdGggb3BhY2l0eT0iLjQyIiBkPSJNMjMzLjM5NSA2NC4zNzdoMjEuMTM4djIxLjEzNmgtMjEuMTM4eiIvPjxwYXRoIG9wYWNpdHk9Ii44NiIgZD0iTTIxMi4yNjEgNjQuMzc3aDIxLjEzdjIxLjEyN2gtMjEuMTN6Ii8+PHBhdGggb3BhY2l0eT0iLjkyIiBkPSJNMTkxLjEyOCA2NC4zNzdoMjEuMTM4djIxLjEzNmgtMjEuMTM4eiIvPjxwYXRoIG9wYWNpdHk9Ii45OCIgZD0iTTE2OS45OTYgNjQuMzc3aDIxLjEzOXYyMS4xMzZoLTIxLjEzOXoiLz48cGF0aCBkPSJNNjQuMjg5IDY0LjM5MmgyMS4xMjlWODUuNTJINjQuMjg5eiIvPjxwYXRoIG9wYWNpdHk9Ii45IiBkPSJNNDMuMTU3IDY0LjM5MmgyMS4xMzh2MjEuMTM2SDQzLjE1N3oiLz48cGF0aCBvcGFjaXR5PSIuODQiIGQ9Ik0yMi4wMjUgNjQuMzk5aDIxLjEyNnYyMS4xMjlIMjIuMDI1eiIvPjxwYXRoIG9wYWNpdHk9Ii40IiBkPSJNLjg5MiA2NC4zOTJoMjEuMTM3djIxLjEzNkguODkyeiIvPjwvZz48L3N2Zz4=' />{' '}
            DryKISS Ltd
          </Link>
        </StyledCopyright>
      </Container>
    </>
  )
}

const StyledCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 1rem 0;

  && {
    a {
      color: #fff;
    }

    img {
      width: 20px;
    }
  }
`
