// Validation states
// Will validate any bootstrap form control, applies itself automatically to form
//
// @usage
// <input type="text" id="fixed" clear-btn>
//
// @author Ian Warner <ian.warner@drykiss.com>
// @category atom
// @see https://github.com/paulyoder/angular-bootstrap-show-errors

var showErrors, showErrorsConfig

showErrors = function ($timeout, showErrorsConfig) {
  var getShowSuccess, linkFn
  getShowSuccess = void 0
  linkFn = void 0
  getShowSuccess = function (options) {
    var showSuccess
    showSuccess = void 0
    showSuccess = showErrorsConfig.showSuccess
    if (options && options.showSuccess !== null) {
      showSuccess = options.showSuccess
    }
    return showSuccess
  }
  linkFn = function (scope, el, attrs, formCtrl) {
    var blurred, inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses
    blurred = void 0
    inputEl = void 0
    inputName = void 0
    inputNgEl = void 0
    options = void 0
    showSuccess = void 0
    toggleClasses = void 0
    blurred = false
    options = scope.$eval(attrs.showErrors)
    showSuccess = getShowSuccess(options)
    inputEl = el[0].querySelector('[name]')
    inputNgEl = angular.element(inputEl)
    inputName = inputNgEl.attr('name')
    if (!inputName) {
      throw "show-errors element has no child input elements with a 'name' attribute"
    }
    inputNgEl.bind('blur', function () {
      blurred = true
      return toggleClasses(formCtrl[inputName].$invalid)
    })
    scope.$watch(function () {
      return formCtrl[inputName] && formCtrl[inputName].$invalid
    }, function (invalid) {
      if (!blurred) {
        return
      }
      return toggleClasses(invalid)
    })
    scope.$on('show-errors-check-validity', function () {
      return toggleClasses(formCtrl[inputName].$invalid)
    })
    scope.$on('show-errors-reset', function () {
      return $timeout(function () {
        el.removeClass('has-success has-error has-feedback')
        el.find('.form-control-feedback').addClass('ng-hide')
        return blurred = false
      }, 0, false)
    })
    return toggleClasses = function (invalid) {
      el.addClass('has-feedback')
      el.toggleClass('has-error', invalid)
      if (!invalid) {
        el.find('.form-control-feedback').removeClass('ng-hide fa-exclamation-triangle').addClass('fa-check')
      } else {
        el.find('.form-control-feedback').removeClass('ng-hide fa-check').addClass('fa-exclamation-triangle')
      }
      if (showSuccess) {
        return el.toggleClass('has-success', !invalid)
      }
    }
  }
  return {
    restrict: 'A',
    require: '^form',
    compile: function (elem, attrs) {
      if (!elem.hasClass('form-group')) {
        throw "show-errors element does not have the 'form-group' class"
      }
      return linkFn
    }
  }
}

showErrorsConfig = function () {
  var _showSuccess
  _showSuccess = void 0
  _showSuccess = false
  this.showSuccess = function (showSuccess) {
    return _showSuccess = showSuccess
  }
  this.$get = function () {
    return {
      showSuccess: _showSuccess
    }
  }
}

angular.module('app.directive').directive('showErrors', showErrors).provider('showErrorsConfig', showErrorsConfig)

showErrors.$inject = ['$timeout', 'showErrorsConfig']
