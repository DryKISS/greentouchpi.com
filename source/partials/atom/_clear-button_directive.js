// Clear button directive
//
// @usage
// <input type="text" id="fixed" clear-btn>
//
// @author Ian Warner <ian.warner@drykiss.com>
// @category atom

angular.module('app.directive').directive('clearBtn', [
  '$parse', function ($parse) {
    return {
      link: function (scope, elm, attr, ngModelCtrl) {
        var angularBtn, btn
        btn = '<span id=' + Math.round(Math.random() * 1000000000) + ' class="clear-button ng-hide fi flaticon-close"></span>'
        angularBtn = angular.element(btn)
        elm.after(angularBtn)
        angularBtn.on('click', function (event) {
          elm.val('').trigger('change').trigger('keyup')
          $parse(attr.ngModel).assign(scope, '')
          scope.$apply()
        })
        elm.bind('focus keyup change paste propertychange', function (blurEvent) {
          if (elm.val() && elm.val().length > 0) {
            angularBtn.removeClass('ng-hide')
          } else {
            angularBtn.addClass('ng-hide')
          }
        })
        elm.bind('blur', function (blurEvent) {
          if (!angularBtn.is(':hover')) {
            angularBtn.addClass('ng-hide')
          }
        })
      }
    }
  }
])
