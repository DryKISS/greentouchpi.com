// LinkedIn JS SDK Inclusion
//
// @author Ian Warner <ian.warner@drykiss.com>
// @see https://gist.github.com/brikis98/1021321

var bind = function (fn, me) { return function () { return fn.apply(me, arguments) } }

App.Social.LinkedIn = (function () {
  function LinkedIn () {
    this.onLinkedInLoad = bind(this.onLinkedInLoad, this)
  }

  LinkedIn.prototype.onLinkedInLoad = function () {
    return IN.Event.on(IN, 'auth', this.getProfileData())
  }

  LinkedIn.prototype.onSuccess = function (data) {
    return log.info('Success', data)
  }

  LinkedIn.prototype.onError = function (error) {
    return log.info('Error', error)
  }

  LinkedIn.prototype.getProfileData = function (error) {
    log.info('Profile Data')
    return IN.API.Raw('people/rGQjATQHGR?format=json').result(this.onSuccess).error(this.onError)
  }

  return LinkedIn
})()

App.IN = new App.Social.LinkedIn()
