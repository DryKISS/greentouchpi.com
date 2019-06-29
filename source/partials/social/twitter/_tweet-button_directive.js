// Twitter share directive
//
// @usage
// require 'social/twitter/tweet-button/_tweet-button_directive.js'
// class: "twitterShareButton"
//
// @author   Ian Warner <ian.warner@drykiss.com>
// @category atom
// @see      https://dev.twitter.com/web/tweet-button/javascript-create

angular.module('app.directive').directive('twitterShareButton', [
  '$log', function ($log) {
    'use strict'
    return {
      restrict: 'C',
      scope: true,
      replace: true,
      link: function (scope, element, attrs, ctrl) {
        $log.info('twitterShareButton - Attrs :', attrs.url)
        element.on('click', function (e) {
          $log.info('twitterShareButton - event :', e)
          twttr.widgets.createShareButton(attrs.url, document.getElementById('share'))
          return twttr.widgets.createShareButton('/', document.getElementById('share'), {
            count: 'none',
            text: 'Sharing a URL using the Tweet Button'
          }).then(function (error) {
            console.error('Button created.', error)
          })
        })
      }
    }
  }
])
