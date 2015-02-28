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

    $scope.init = function init(){
        $scope.scrollBottom();
        $scope.clearMessage();
        $scope.data.$watch(function(){
            $scope.scrollBottom()
        });
    }

    $scope.clearMessage = function(){
        if(!$scope.messageObj || $scope.messageObj.name == 'jeremy'){
            $scope.messageObj = {
            name: 'jeremy',
            message: '',
            time: null,
            image: 'http://placehold.it/50/55C1E7/fff&text=U'
    }


        }else
        {
            $scope.messageObj.message ='';
            $scope.messageObj.time= null;

    

        }
    	
    }
    $scope.scrollBottom = function scrollBottom(){
        var objDiv = document.getElementById("chatBox");
           objDiv.scrollTop = objDiv.scrollHeight;

    }

    $scope.sendMessage = function(){
        var time = new Date;
        $scope.messageObj.time = time.getTime();

    	$scope.data.$add($scope.messageObj);
    	 $scope.clearMessage();

    }
    
    
    $scope.init()
  });
