'use strict';

describe('Service: chatserver', function () {

  // load the service's module
  beforeEach(module('gurjitChatAppApp'));

  // instantiate service
  var chatserver;
  beforeEach(inject(function (_chatserver_) {
    chatserver = _chatserver_;
  }));

  it('should do something', function () {
    expect(!!chatserver).toBe(true);
  });

});
