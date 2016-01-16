(function () {
  'use strict'; 
  
  var dependencies = [
    'ngMaterial',
    'templates',
    'app.home',
    'app.topic',
    'ngSanitize',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'ui.codemirror'
  ];
   
  angular.module('app', dependencies)
    .config(config)
    .run(run);
  
  config.$inject = ['$urlRouterProvider', '$mdThemingProvider'];
  run.$inject = ['$rootScope', '$state', '$stateParams'];
  
  function config($urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    
    $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('purple');
  }
  
  function run ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
  
}());
