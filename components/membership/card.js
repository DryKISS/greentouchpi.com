/**
 * Components - Membership - Card
 */

import styled from 'styled-components'

// UI
import { Card, List, ListItem, Space } from '@drykiss/industry-ui'

export const TreatmentCard = ({ coverDesc, items, title }) => {
  return (
    <>
      <StyledCard
        body={
          <>
            <StyledDesc>{coverDesc}</StyledDesc>

            <List unstyled>
              {items.map(item => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
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

const StyledDesc = styled.h4`
  color: #000;
  padding: 1rem;
  margin: 0;
`
const StyledListItem = styled(ListItem)`
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
`
