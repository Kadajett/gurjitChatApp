'use strict';

/**
 * @ngdoc service
 * @name gurjitChatAppApp.chatserver
 * @description
 * # chatserver
 * Service in the gurjitChatAppApp.
 */
angular.module('gurjitChatAppApp')
  .service('chatserver', function ($firebase) {
  	var chat = this;

    	chat.ref = new Firebase("https://chatnami.firebaseio.com/messages/");
    	chat.sync = $firebase(chat.ref);
    	chat.data = {};

	// synchronize the object with a three-way data binding
	// click on `index.html` above to see it used in the DOM!
	chat.data = chat.sync.$asArray();

    	return chat;
  });
