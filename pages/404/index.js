/**
 * Error 404
 */

import { Card } from '@drykiss/industry-ui'

const Page404 = () => {
  return (
    <Card
      body={`The page you were looking for no longer exists or never did. Please use the links at the
        top of your screen to get back in the game, or click here to go home and start again.`}
      header='404 Not found'
    />
  )
}

export default Page404
