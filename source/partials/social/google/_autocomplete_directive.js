/**
 * Google places autocomplete directive
 *
 * @usage
 * require('social/google/_autocomplete_directive')
 * extraClass: "googlePlacesAutocomplete"
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category google
 *
 * @see https://developers.google.com/maps/documentation/javascript/places-autocomplete
 *
 * @todo Stop submitting on enter in the input
 */

// Require Angular
import angular from 'angular'

;(() => {
  angular
    .module('app.directive')
    .directive('googlePlacesAutocomplete', googlePlacesAutocomplete)

  // Inject
  googlePlacesAutocomplete.$inject = ['MapService', '$window']

  /**
   * googlePlacesAutocomplete
   *
   * @param {object} window
   */
  function googlePlacesAutocomplete (MapService, $window) {
    // Options
    const directive = {
      link: link,
      require: '^ngModel',
      replace: true,
      restrict: 'C',
      scope: {
        model: '=ngModel',
        complete: '=?'
      }
    }

    // Return
    return directive

    /**
     * Link
     *
     * @param {object} scope
     * @param {object} element
     * @param {object} attrs
     * @param {object} controller
     */
    function link (scope, element, attrs, controller) {
      // Set default country
      if (!attrs.country) {
        attrs.country = 'uk'
      }

      // Instructs the Places service to return only geocoding results, rather than business results.
      if (!attrs.types) {
        attrs.place.type = 'geocode'
      }

      // Get the options for the directive
      const options = {
        types: [attrs.types],
        componentRestrictions: {
          country: attrs.country
        }
      }

      // Get the location for the autocomplete
      // Autocomplete is a feature of the Places library in the Google Maps JavaScript API.
      // @see https://developers.google.com/maps/documentation/javascript/places-autocomplete

      // Create the autocomplete object and associate it with the UI input control.
      // Restrict the search to the default country
      MapService.mapLoad()
        .then((map) => {
          const autocomplete = new map.places.Autocomplete(element[0], options)

          // Create the listener and callback for the place changed
          autocomplete.addListener('place_changed', onPlaceChanged)

          /**
           * On place changed
           */
          function onPlaceChanged () {
            const place = autocomplete.getPlace()

            // Check a place is returned
            if (place.geometry && place.geometry.location) {
              // Apply the result to the controller complete
              scope.$apply(() => {
                scope.complete(place.geometry.location)
                // Assign
                controller.$setViewValue(place.formatted_address)
                controller.$render()
              })
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})()
