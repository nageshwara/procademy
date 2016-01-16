(function () {
  'use strict';

  angular.module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['topicService'];
  
  function HomeCtrl(topicService) {

    var vm = this;
    vm.grid = [];
    
    activate();
    
    function activate() {
      createGrid(topicService.all());
    }
    
    function createGrid(photos){
      for(var i = 0; i < photos.length; i++) {
        vm.grid.push(photos[i]);
      }
    }
  }
}());