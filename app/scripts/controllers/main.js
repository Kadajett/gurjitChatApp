'use strict';

/**
 * @ngdoc function
 * @name gurjitChatAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gurjitChatAppApp
 */
angular.module('gurjitChatAppApp')
  .controller('MainCtrl', function ($scope, chatserver) {
    $scope.data = chatserver.data;

    $scope.messageObj = {
    	name: 'jeremy',
    	message: ''
    }

    $scope.clearMessage = function(){
    	$scope.messageObj = {
	    	name: 'jeremy',
	    	message: ''
	}
    }

    $scope.sendMessage = function(){
    	$scope.data.$add($scope.messageObj);
    	// $scope.clearMessage();
    }
  });
