/**
 * Google GeoCode service
 * Geocoding is the process of converting addresses (like a street address) into
 * geographic coordinates (like latitude and longitude), which you can use to
 * place markers on a map, or position the map.
 *
 * You can also use the geocoder to find the address for a given place ID.
 *
 * @usage
 * require('social/google/_geocode_service')
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category google
 *
 * @see https://developers.google.com/maps/documentation/geocoding/intro
 * @see https://developers.google.com/maps/documentation/geocoding/start
 *
 * @todo The Geocode services should be promisable
 * @todo validate address and country
 * @todo Stringofy the address and country
 */

// Import
import angular from 'angular'

;(() => {
  // Google Geocode service factory
  angular
    .module('app.service')
    .factory('GeoCodeService', GeoCodeService)

  // Inject
  GeoCodeService.$inject = ['$http', '$window']

  function GeoCodeService ($http, $window) {
    // Constants
    const apiKey = 'AIzaSyA_g0e_o6sz7zNJpbdTtrVoBrWokt6Y7BQ'
    const url = 'https://maps.googleapis.com/maps/api/geocode/json'

    // Service
    const service = {
      geocode: geocode,
      geocodeReverse: geocodeReverse
    }

    return service

    //   geocodePlace = function (place) {
    //     var country, data, geocoder
    //     country = angular.element('.googlePlacesAutocomplete').attr('data-country')
    //     geocoder = new window.google.maps.Geocoder()
    //     data = {
    //       address: place,
    //       componentRestrictions: {
    //         country: country
    //       }
    //     }
    //     return geocoder.geocode(data, function (responses) {
    //     })
    //   }

    /**
     * Geocode
     * Take am address and country and return a longtiude and lattiude
     *https://maps.googleapis.com/maps/api/geocode/json?address=high+st+hasting&components=country:GB&key=YOUR_API_KEY
      https://maps.googleapis.com/maps/api/geocode/json?address=sdsdssdds&components=country:AU&key=AIzaSyA_g0e_o6sz7zNJpbdTtrVoBrWokt6Y7BQ
     * @param {string} address Address string
     * @param {string} country Two letter country identifier
     * @return {object} JSON object
     */
    function geocode (address, country) {
      // Preform reuquest
      return $http({
        url: url,
        method: 'GET',
        params: {
          address: address,
          components: 'country:' + country,
          key: apiKey
        }
      }).then(geocodeComplete)
        .catch(geocodeFailed)

      function geocodeComplete (response) {
        if (response.data.status === 'OK') {
          console.info('GeoCode service getAddress - success response:', response)
          return response
        } else if (response.data.status === 'ZERO_RESULTS') {
          return console.info('GeoCode service getAddress - fail: zero responses')
        } else if (response.data.status === 'OVER_QUERY_LIMIT') {
          return console.info('GeoCode service getAddress - fail: Over query limit')
        } else if (response.data.status === 'REQUEST_DENIED') {
          return console.info('GeoCode service getAddress - fail: request denied')
        } else if (response.data.status === 'INVALID_REQUEST') {
          return console.info('GeoCode service getAddress - fail: Invalid request')
        } else if (response.data.status === 'UNKNOWN_ERROR') {
          return console.info('GeoCode service getAddress - fail: Unknown error')
        }
      }

      function geocodeFailed (error) {
        console.error(`XHR Failed for geocodeReverse. ${error.data}`)
        return error
      }
    }

    /**
     * Geocode reverse
     * Take a latitude and longitude and respond with a readable address
     *
     * @param {object} location
     */
    function geocodeReverse (location, callback) {
      // Check if google maps is loaded
      if (typeof $window.google === 'object' && typeof $window.google.maps === 'object') {
        const geocoder = new $window.google.maps.Geocoder()

        geocoder.geocode({'latLng': location}, (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              callback(results[0].formatted_address)
            } else {
              console.error('No results found')
            }
          } else {
            console.error('Geocoder failed due to: ' + status)
          }
        })

      // Use the Geocoder API
      } else {
      }
    }
  }
})()
