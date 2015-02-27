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

    

    $scope.clearMessage = function(){
    	$scope.messageObj = {
	    	name: 'jeremy',
	    	message: '',
            time: null
	}
    }

    $scope.sendMessage = function(){
        var time = new Date;
        $scope.messageObj.time = time.getTime();

    	$scope.data.$add($scope.messageObj);
    	 $scope.clearMessage();

    }
    $scope.clearMessage();
  });
