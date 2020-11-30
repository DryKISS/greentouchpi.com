/**
 * Error 404
 */

// Layout
// import { Page, Space, Text } from '@drykiss/industry-ui'

const Page404 = () => {
  // const meta = {
  //   description: `
  //     DryKISS is a full service internet and mobile digital production house.
  //     Our services span consulting, strategy; planning; development; testing
  //     and analytics.
  //   `,
  //   path: '/404',
  //   title: 'DryKISS develops hybrid mobile and responsive websites'
  // }

  return (
    <div class='container'>
      <div class='panel panel-default'>
        <div class='panel-heading'>
          <h3 class='heading panel-title'> 404 Not found</h3>
        </div>
        <div class='panel-body'>
          The page you were looking for no longer exists or never did. Please use the links at the
          top of your screen to get back in the game, or click here to go home and start again.
        </div>
      </div>
    </div>
  )
}

export default Page404
