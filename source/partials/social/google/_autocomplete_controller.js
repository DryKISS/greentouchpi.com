/**
 * Autocomplete controller
 * Acts as the glue for the service around location and maps
 *
 * @usage
 * require('social/google/_autocomplete_controller')
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category google
 *
 * @see https://developers.google.com/maps/documentation/javascript/places-autocomplete
 *
 * @todo Check the UK version to see if postcode works the same on the map version
 * @todo Refactor the files to remove if above is okay
 * @todo Create this into a Module
 */

// Require Angular
import angular from 'angular'

;(() => {
  // Require resources
  require('social/google/_autocomplete.scss')
  require('social/google/_autocomplete_directive')
  require('social/google/_geocode_service')
  require('social/google/_map_service')
  require('social/google/_marker_service')
  require('source/blog/_find-food_service')

  // Module
  angular.module('app.controller')
    .controller('AutocompleteController', AutocompleteController)

  // Inject
  AutocompleteController.$inject = ['FindFoodService', 'GeoCodeService', 'MapService', 'MarkerService', '$scope', '$window']

  /**
   * AutocompleteController
   * Get the place returned by the directive
   */
  function AutocompleteController (FindFoodService, GeoCodeService, MapService, MarkerService, $scope, $window) {
    // Variable
    const vm = this

    // Model
    vm.googlePlacesAutocompleteModel = null

    // Capture result
    vm.result = null

    // Directive response
    vm.complete = autoComplete

    // Error states
    vm.showError = false
    vm.showErrorYQL = false
    vm.showErrorBlank = false
    vm.showErrorNoService = false

    // Form actions
    vm.modalConfirm = modalConfirm
    vm.submit = submit

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
     * Marker dragged broadcast collector
     */
    $scope.$on('markerDragged', ($event, data) => {
      $scope.$apply(() => {
        // Set new address on model
        vm.googlePlacesAutocompleteModel = data.address

        // Set the new co-ordinates on the result
        vm.result = data.latLng
      })
    })

    /**
     * Complete
     * Complete the Geocode and the loading of the map if required
     * This is a callback from the directive
     */
    function autoComplete (location) {
      // Set error to false
      vm.showError = false
      vm.showErrorYQL = false
      vm.showErrorBlank = false
      vm.showErrorNoService = false

      // Set results
      vm.result = location

      // Load map service
      MapService.mapLoad()
        .then((map) => {
          // Create map
          const gmap = MapService.mapCreate(location, map)

          // Add marker
          MarkerService.markerAdd(location, map, gmap)

          // Modal element
          const el = angular.element('#placesModal')

          // Resize map in modal
          // @see https://developers.google.com/maps/documentation/javascript/events
          el.on('shown.bs.modal', () => {
            map.event.trigger(gmap, 'resize')
            gmap.setCenter(location)
          })

          // Open modal
          if (!el.hasClass('in')) {
            el.modal('show')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }

    /**
     * Submit
     * Handles the submit from the Food Finder button
     */
    function submit ($event, isValid) {
      // Valid form
      if (isValid) {
        vm.showError = false
        vm.showErrorBlank = false

        // Get country
        // @todo make this an option of the JS
        const el = angular.element('#place').attr('data-country')

        // GeoCode the free entered text
        GeoCodeService.geocode(vm.googlePlacesAutocompleteModel, el)
          .then((response) => {
            if (response.data.status === 'OK') {
              // Shorten result
              const res = response.data.results[0]

              // Add to vm.result
              vm.result = new $window.google.maps.LatLng(res.geometry.location.lat, res.geometry.location.lng)

              // Load map service
              MapService.mapLoad()
                .then((map) => {
                  // Create map
                  const gmap = MapService.mapCreate(vm.result, map)

                  // Add marker
                  MarkerService.markerAdd(vm.result, map, gmap)

                  // Modal element
                  const el = angular.element('#placesModal')

                  // Resize map in modal
                  // @see https://developers.google.com/maps/documentation/javascript/events
                  el.on('shown.bs.modal', () => {
                    map.event.trigger(gmap, 'resize')
                    gmap.setCenter(vm.result)
                  })

                  // Open modal
                  if (!el.hasClass('in')) {
                    el.modal('show')
                  }
                })
                .catch((error) => {
                  console.error(error)
                })
            } else {
              throw response
            }
          })
          .catch((error) => {
            vm.showError = true
            vm.showErrorYQL = true
            vm.errorMessage = error
          })

      // Show error message
      } else {
        vm.showError = true
        vm.showErrorBlank = true
      }
    }

    /**
     * Confirm
     * Handles the submit on the modal to communicate with the Deliveroo API
     */
    function modalConfirm (url) {
      // Find food service call
      FindFoodService.deliverooLocation(url, vm.result.lat(), vm.result.lng())
        .then((response) => {
          if (response.status === 200) {
            if (response.data.query.results.json.url) {
              vm.showError = false
              $window.location.href = `${url}${response.data.query.results.json.url}`
            } else {
              vm.showError = true
              vm.showErrorNoService = true
            }
          } else {
            throw response
          }
        })
        .catch((error) => {
          vm.showError = true
          vm.showErrorYQL = true
          vm.errorMessage = error.data.error.description
        })

      angular.element('#placesModal').modal('hide')
    }
  }
})()
