/**
 * Components - Membership - Card
 */

import styled from 'styled-components'

// UI
import { Card, List, ListItem, Space } from '@drykiss/industry-ui'
import { getRandomCardContext } from 'utils'

export const MembershipCard = ({ coverDesc, index, items, title }) => {
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
        headerContext={getRandomCardContext(index)}
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
  border-top: 1px solid #ddd;
`
