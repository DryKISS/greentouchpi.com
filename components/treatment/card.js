/**
 * Components - Treatment - Card
 */

import styled from 'styled-components'

// UI
import { Button, Card, Heading, Link, List, ListItem, Space } from '@drykiss/industry-ui'

export const TreatmentCard = ({ cover, coverDesc, items, query, title }) => {
  return (
    <>
      <StyledCard
        body={
          <>
            <CoverWrapper cover={cover}>
              <Heading content={coverDesc} tag='h4' />
            </CoverWrapper>

            <List unstyled>
              {items.map(item => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
              <StyledListItem>
                <Link to={`/book-massage?t=${query}`} passHref>
                  <Button block content='Reserve Now' />
                </Link>
              </StyledListItem>
            </List>
          </>
        }
        header={title}
      />
      <Space marginBottom='lg' />
    </>
  )
}

const StyledCard = styled(Card)`
  [class*='body__StyledContent'] {
    padding: 0;
  }
`

const CoverWrapper = styled.div`
  position: relative;
  background: url("${({ cover }) => cover}") 50%;
  background-size: cover;
  min-height: 130px;
  padding: 1rem;

  h4 {
    background-color: hsla(0,0%,100%,.8);
    color: #000;
    padding: 0.25rem;
    margin: 0;
  }
`
const StyledListItem = styled(ListItem)`
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
`
