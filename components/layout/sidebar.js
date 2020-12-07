/**
 * Layout - Sidebar
 */

// UI
import { Button, Card, Link, Space } from '@drykiss/industry-ui'

export const LayoutSidebar = () => {
  return (
    <>
      <Card
        body={
          <>
            Buy 5 treatments get 1 free.{' '}
            <ul>
              <li>£375 for 6 hours of treatments</li>
              <li>Share between any friends and family</li>
            </ul>
          </>
        }
        header='Group Plan'
        footer={
          <Link to='/membership' passHref>
            <Button block content='Learn more' size='sm' />
          </Link>
        }
      />

      <Space marginBottom='lg' />

      <Card
        body='New customers get £10 off their first 1 hour massage treatment'
        header='New customers'
        footer={
          <Link to='/membership' passHref>
            <Button block content='Learn more' size='sm' />
          </Link>
        }
      />

      <Space marginBottom='lg' />

      <Card
        body='Receive a complimentary 15 minutes, added to your next 1 hour massage'
        header='Refer a friend'
        footer={
          <Link to='/specialoffer' passHref>
            <Button block content='Learn more' size='sm' />
          </Link>
        }
      />
    </>
  )
}
