(function () {

  'use strict';
  angular.module('app.topic', ['ui.router', 'app.services'])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('topic', {
      url: '/topic/{id:[0-9]+}',
      views: {
        'main@': {
          controller: 'TopicCtrl',
          controllerAs: 'topicCtrl',
          templateUrl: 'app/topic/topic.tpl.html'
        }
      },
      data: {
        pageTitle: 'Topic',
        viewClass: 'topic'
      }
    });
  }
}());