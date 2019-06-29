/**
 * Find food controller
 * This is utilised for the postcode version of the food finder
 *
 * @usage
 * require('source/blog/_find-food_controller.js')
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category blog
 */

// Require Angular
import angular from 'angular'

;(() => {
  // Module
  angular.module('app.controller')
    .controller('FindFoodController', FindFoodController)

  // Inject
  FindFoodController.$inject = ['$http', '$window']

  /**
   * Find Food Controller
   */
  function FindFoodController ($http, $window) {
    // Variable
    const vm = this
    vm.findFood = findFood
    vm.formData = {}
    vm.showError = false

    // Activate
    activate()

    /**
     * Activate
     */
    function activate () {
      // Allow the food finder to contract on mobile
      angular.element(window).scroll(() => {
        if (angular.element('#resolutionSize').is(':hidden')) {
          if (angular.element(this).scrollTop() > 100) {
            angular.element('.findFood__position label, .findFood__link').fadeOut('slow')
          } else {
            angular.element('.findFood__position label, .findFood__link').fadeIn('slow')
          }
        }
      })
    }

    /**
     * Complete
     * Complete the Geocode and the loading of the map if required
     * This is a callback from the directive
     */
    function findFood (event, isValid) {
      if (isValid) {
        const url = angular.element('body').data('url')

        const data = {
          'url': url + '/api/restaurants',
          'postCode': vm.formData.post_code,
          'format': 'json',
          'version': '1.00'
        }

        $http.get('https://query.yahooapis.com/v1/public/yql/drykiss/DeliverooPostCode', {
          params: data
        })
          .then((response) => {
            if (response.data.query.results.json.url) {
              vm.showError = false
              $window.open(url + response.data.query.results.json.url, '_self')
            } else {
              vm.showError = true
            }
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
})()
