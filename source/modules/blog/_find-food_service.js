/**
 * Find Food service
 *
 * @usage
 * require('source/blog/_find-food_service')
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category blog
 *
 * @todo Add options for seach on postcode
 */

// Import
import angular from 'angular'

;(() => {
  // Find food service factory
  angular
    .module('app.service')
    .factory('FindFoodService', FindFoodService)

  // Inject
  FindFoodService.$inject = ['$http']

  /**
   * Find food Service
   *
   * @param {object} $http
   */
  function FindFoodService ($http) {
    // Service
    const service = {
      deliverooLocation: deliverooLocation
    }

    // Return service
    return service

    /**
     * Deliveroo location
     *
     * @param {string} url
     * @param {float} latitude
     * @param {float} longitude
     */
    function deliverooLocation (url, latitude, longitude) {
      // Preform request
      return $http({
        url: 'https://query.yahooapis.com/v1/public/yql/drykiss/DeliverooLocation',
        method: 'GET',
        params: {
          url: `${url}/api/restaurants`,
          latitude: latitude,
          longitude: longitude,
          format: 'json',
          version: '1.01'
        }
      }).then(deliverooLocationComplete)
        .catch(deliverooLocationFailed)

      // Success
      function deliverooLocationComplete (response) {
        return response
      }

      // Error
      function deliverooLocationFailed (error) {
        return error
      }
    }
  }
})()
