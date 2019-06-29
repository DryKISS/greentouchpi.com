/**
 * Search module
 *
 * @usage
 * require 'source/search/_search_module.js'
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 * @category search
 */

// Import
import angular from 'angular'
import Lunr from 'lunr'

;(() => {
  // Require
  require('source/search/_search.scss')

  // Module
  angular
    .module('Search', ['app'])
    .controller('SearchController', SearchController)
    .filter('imageReplace', ImageReplace)
    .filter('sanitize', Sanitize)

  // Inject
  SearchController.$inject = ['$timeout']
  Sanitize.$inject = ['$sce']

  /**
   * Hyphen replace filter
   */
  function ImageReplace () {
    return (input) => {
      return input
        ? input.replace(/\/h_/g, '/card_h_')
        : '/assets/images/excuse/teal.png'
    }
  }

  /**
   * Sanitise filter
   */
  function Sanitize ($sce) {
    return (html) => {
      return $sce.trustAsHtml(html)
    }
  }

  /**
   * Search controller
   *
   * @param {*} $timeout
   */
  function SearchController ($timeout) {
    // Global
    const vm = this
    vm.searching = true
    vm.noresults = false

    // Activate
    activate()

    // Activate
    function activate () {
      // Export the Google document
      _getSearchParam()

        // Get JSON
        .then((param) => {
          vm.p = param
          return _getJson()
        })

        // Set to template
        .then((json) => {
          // Set title
          const el = document.getElementsByClassName('page-strip__heading')

          el[0].textContent = el[0].textContent + ': ' + vm.p

          const lunrIndex = Lunr.Index.load(json.index)
          const results = lunrIndex.search(vm.p)

          // Check we have results
          if (results.length > 0) {
            const lunrMap = json.docs

            // Set data
            let searchMap = []

            // Loop through the results
            for (var value of results) {
              searchMap.push(lunrMap[value.ref])
            }

            // Apply
            $timeout(() => {
              vm.searching = false
              vm.data = searchMap
            })

          // No results
          } else {
            $timeout(() => {
              vm.searching = false
              vm.noresults = true
            })
          }
        })

        // Catch
        .catch((error) => {
          return (new Error(`${error}`))
        })
    }

    /**
     * Get the param value of the search
     *
     * @return {string} q Search param
     */
    function _getSearchParam () {
      return new Promise((resolve, reject) => {
        const searchParams = new window.URLSearchParams(window.location.search)
        const param = searchParams.get('q')
        resolve(param)
      })
    }

    /**
     * Get Lunr JSON
     * Uses the new Fetch to get the JSON
     *
     * @return {[type]} [description]
     */
    function _getJson (param) {
      return new Promise((resolve, reject) => {
        // Check that fetch exists
        if (window.fetch) {
          // Object
          const obj = {
            method: 'get',
            headers: new window.Headers({
              'Content-Type': 'application/json'
            })
          }

          // Get the search JSON
          window.fetch('/search.json', obj)
            .then((resp) => resp.json())
            .then((resp) => {
              resolve(resp)
            })
            .catch((err) => {
              reject(new Error(`${err}`))
            })
        } else {
          reject(new Error('No Fetch'))
        }
      })
    }
  }
})()
