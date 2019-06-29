/**
 * Google Map Marker service
 *
 * @usage
 * require('social/google/_marker_service')
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category google
 *
 * @see MarkerIntro https://developers.google.com/maps/documentation/javascript/markers#introduction
 * @see SimpleMarker https://developers.google.com/maps/documentation/javascript/examples/marker-simple
 * @see Clustering https://developers.google.com/maps/documentation/javascript/marker-clustering
 *
 * @todo Allow marker count to be unlimited also
 * @todo Flag to say if allowed mulitple markers
 * @todo Options for the marker - like draggable
 * @todo Look at adding an info window to the map - with flexible template
 * @todo Allow for custom icons
 * @todo Allow the image to be flexible - get from local also - change design add border
 * @todo Flag to say if allowed mulitple markers
 * @todo Options for the marker - like draggable
 * @todo The drag handle should be promised
 */

// Import
import angular from 'angular'

;(() => {
  // Google Marker service factory
  angular
    .module('app.service')
    .factory('MarkerService', MarkerService)

  // Inject
  MarkerService.$inject = ['GeoCodeService', '$rootScope', '$window']

  /**
   * Marker Service
   *
   * @param {object} $q
   * @param {object} $window
   */
  function MarkerService (GeoCodeService, $rootScope, $window) {
    // Variables
    let markers = []
    // const markerTotal = 1
    // let markerCount = 0

    // Service
    const service = {
      markerAdd: markerAdd,
      markersRemoveAll: markersRemoveAll
    }

    // Return service
    return service

    /**
     * Marker add
     *
     * @param {object} location Coordinates LatLng for the marker position
     * @param {onject} map Google map object
     * @param {onject} gmap Created google map object
     */
    function markerAdd (location, map, gmap) {
      // Image
      const image = 'https://cdn1.deliveroo.co.uk/assets/images/favicons/production/favicon-20e1155d7ebdf6585dbace1c09513152.ico'

      // Remove all previous markers
      // This is for Deliveroo only see todos
      markersRemoveAll()

      // Check total allowed
      // if (markerCount < markerTotal) {
      // Create marker
      const marker = new map.Marker({
        animation: map.Animation.DROP, // Drop - Bounce
        draggable: true,
        icon: image,
        // label: 'A',
        position: location,
        title: 'Please drag to your location'
      })

      // Push into array
      markers.push(marker)

      // Set markers to the map
      _markersOnMap(gmap)

      // Increment marker count
      // markerCount++

      // Return marker
      return marker.addListener('dragend', _markerDragEnd.bind(this))

      // // Too many markers
      // } else {
      //   console.error('Too many markers')
      //   // Check if marker exists
      // }
    }

    /**
     * Marker remove all
     *
     * @param {object} marker
     */
    function markersRemoveAll () {
      _markersOnMap(null)
      markers = []
      // markerCount = 0
    }

    /**
     * Markers on map
     * Sets the map on all markers in the array.
     *
     * @param {onject} gmap Created google map object
     */
    function _markersOnMap (gmap) {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(gmap)
      }
    }

    /**
     * Handle drag end
     *
     * @param {object} $event Drag event
     */
    function _markerDragEnd ($event) {
      // Process the Geocode service to get the new address
      GeoCodeService.geocodeReverse(new $window.google.maps.LatLng($event.latLng.lat(), $event.latLng.lng()), (address) => {
        // Broadcast that this has changed
        $rootScope.$broadcast('markerDragged', {
          address: address,
          latLng: $event.latLng
        })
      })
    }
  }
})()
