/**
 * Components - Tea
 */

// UI
import { Card, Column, Row, Space } from '@drykiss/industry-ui'

import { data } from './data'

export const Tea = () => {
  return (
    <>
      <Row>
        <Column md={12} xs={12}>
          <Card
            body={`Aside from offering the best quality body massages, we are proud to present our well-known tea range.
            Used in conjunction with massage therapoes they can support a healthy body and mind.`}
            header={
              <>
                Amazing Chinese tea.{' '}
                <small>
                  Compliment your massage treatment with our fragrant, healthy tea from China.
                </small>
              </>
            }
          />
          <Space marginBottom='lg' />
        </Column>

        {data.map(item => (
          <Column key={item.title} md={4} xs={12}>
            <Card footer={item.content} header={item.title} image={item.cover} />
            <Space marginBottom='lg' />
          </Column>
        ))}
      </Row>
    </>
  )
}
