(function () {
  'use strict';

  angular.module('app.services')
    .factory('topicService', topicService);

  topicService.$inject = ['$resource'];

  function topicService() {
    var topics = [
    {
      'title': 'Introduction',
      'notes': 'Wow this is going to be too long. and you should read it',
      'video': 'introduction'
    }, 
    {
      'title': 'Variables',
      'notes': 'Wow this is going to be too long. and you should read it',
      'video': 'variables'
    }, 
    {
      'title': 'Conditions',
      'notes': 'Wow this is going to be too long. and you should read it',
      'video': 'conditions'
    }];

    angular.forEach(topics, function(value, key) {
      value.id = key;
    });
    var service = {
      all: all,
      get: get
    };
    return service;

    function all() {
      return topics;
    }
    function get(id) {
      return topics[id];
    }
  }
}());