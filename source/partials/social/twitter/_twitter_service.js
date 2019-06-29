// Twitter service
//
// @usage
// require social/twitter/_twitter_service
//
// @author Ian Warner <ian.warner@drykiss.com>
// @category social
// @see      https://dev.twitter.com/rest/tools/console
// @see      https://www.sitepoint.com/building-twitter-app-using-angularjs/

var TwitterService

TwitterService = function ($q) {
  var authorizationResult
  authorizationResult = false
  return {
    initialise: function () {
      OAuth.initialize('bJwtCHf9e5D3ypLhShgTDg15wGA', {
        cache: true
      })
      authorizationResult = OAuth.create('twitter')
    },
    isReady: function () {
      return authorizationResult
    },
    connectTwitter: function () {
      var deferred
      deferred = $q.defer()
      OAuth.popup('twitter', {
        cache: true
      }, function (error, result) {
        if (!error) {
          authorizationResult = result
          deferred.resolve()
        } else {
        }
      })
      return deferred.promise
    },
    clearCache: function () {
      OAuth.clearCache('twitter')
      authorizationResult = false
    },
    getLatestTweets: function (search, maxId) {
      var deferred, promise, url
      deferred = $q.defer()
      url = '/1.1/search/tweets.json?q=bangkok&geocode=13.724239%2C100.578657%2C50km&lang=en&locale=en&count=15'
      if (maxId) {
        url += '&max_id=' + maxId
      }
      promise = authorizationResult.get(url).done(function (data) {
        deferred.resolve(data)
      }).fail(function (err) {
        deferred.reject(err)
      })
      return deferred.promise
    }
  }
}

angular.module('app.service').factory('TwitterService', TwitterService)

TwitterService.$inject = ['$q']
