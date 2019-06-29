/**
 * Google Map service
 *
 * @usage
 * require('social/google/_map_service')
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category google
 *
 * @see https://developers.google.com/maps/documentation/geocoding/intro
 * @see https://developers.google.com/maps/documentation/geocoding/start
 *
 * @todo Should localise the map - language=ja
 */

// Import
import angular from 'angular'

;(() => {
  // Google Map service factory
  angular
    .module('app.service')
    .factory('MapService', MapService)

  // Inject
  MapService.$inject = ['$q', '$window']

  /**
   * Map Service
   *
   * @param {object} $q
   * @param {object} $window
   */
  function MapService ($q, $window) {
    // Variables
    let loaded = null

    // Service
    const service = {
      mapCreate: mapCreate,
      mapLoad: mapLoad
    }

    // Return service
    return service

    /**
     * Map create
     *
     * @param {object} location
     * @param {object} map
     */
    function mapCreate (location, map) {
      return new map.Map(angular.element('.google-map')[0], {
        center: location,
        mapTypeControl: false,
        panControl: false,
        zoomControl: true,
        streetViewControl: false,
        zoom: 15
      })
    }

    /**
     * Map load
     *
     * @return {promise} Map load promise
     */
    function mapLoad () {
      if (!loaded) {
        const deferred = $q.defer()

        // Get api key
        const apiKey = angular.element('.find-food').attr('data-mapkey')

        // Early-resolve the promise for googleMaps
        if (typeof $window.google !== 'undefined' && typeof $window.google.maps !== 'undefined') {
          deferred.resolve($window.google.maps)
          return deferred.promise
        }

        // Create the random callback
        const randomizedFunctionName = 'onGoogleMapsReady' + Math.round(Math.random() * 1000)

        // Check exists
        $window[randomizedFunctionName] = () => {
          $window[randomizedFunctionName] = null
          // Resolve the promise for googleMaps
          deferred.resolve($window.google.maps)
        }

        // Load the sxcript
        var script = document.createElement('script')
        script.setAttribute('defer', '')
        script.setAttribute('async', '')
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=places&callback=' + randomizedFunctionName
        document.body.appendChild(script)

        // Return a promise for googleMaps
        loaded = deferred.promise
      }

      return $q.when(loaded)
    }
  }
})()
