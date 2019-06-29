/**
 * Facebook share directive
 *
 * @usage
 * require 'social/facebook/share-button/_share-button_directive.js'
 * class: "facebookShareButton"
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category facebook
 */

// Require Angular
import angular from 'angular'

angular
  .module('app.directive')
  .directive('facebookShareButton', facebookShareButton)

facebookShareButton.$inject = ['$window']

/**
 * facebookShareButton
 */
function facebookShareButton ($window) {
  const directive = {
    link: link,
    replace: true,
    restrict: 'C',
    scope: true
  }

  return directive

  /**
   * Link
   *
   * @param {*} scope
   * @param {*} element
   * @param {*} attrs
   */
  function link (scope, element, attrs) {
    // Click handler
    angular.element(element).on('click', (e) => {
      // Create object
      let fbHash = {}
      fbHash.method = 'share'
      fbHash.mobile_iframe = true
      fbHash.href = attrs.url
      fbHash.hashtag = attrs.hashtag ? '#' + attrs.hashtag : void 0
      fbHash.quote = attrs.quote || void 0

      return $window.FB.ui(fbHash, (response) => {
        if ($window.ga && $window.ga.create) {
          // Analytics
          $window.ga('send', 'pageview', '/facebook/click/' + fbHash.href)
          $window.ga('send', 'social', 'facebook', 'facebook_click', fbHash.href)
        }
      })
    })
  }
}
