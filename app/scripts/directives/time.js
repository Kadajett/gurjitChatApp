'use strict';

/**
 * @ngdoc directive
 * @name gurjitChatAppApp.directive:time
 * @description
 * # time
 */
angular.module('gurjitChatAppApp')
  .directive('time', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.timeText = attrs.messageTime;
        element.text(scope.timeText.toString());
      }
    };
  });
