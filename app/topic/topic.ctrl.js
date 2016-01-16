(function () {
  'use strict';

  angular.module('app.topic')
    .controller('TopicCtrl', TopicCtrl);

  TopicCtrl.$inject = ['topicService', '$stateParams', '$sce'];
  
  var playerConfig = {
    theme: '/videogular-themes-default/videogular.css',
    autoPlay: true,
    plugins: {
      poster: 'http://www.videogular.com/assets/images/videogular.png',
      controls: {
        autoHide: true,
        autoHideTime: 2000
      }
    }
  };

  var code = {
    output: '',
    input: 'print "Hello World"',
    editorOpts: {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'python'
    }
  };

  function TopicCtrl(topicService, $stateParams, $sce) {

    var vm = this;
    var topicId = parseInt($stateParams.id);

    var topic = topicService.get(topicId);
    topic.videoSources = [{src: $sce.trustAsResourceUrl('/'+topic.video+'.mp4'), type: 'video/mp4'}];
    topic.videoTracks = [];

    vm.playerConfig = playerConfig;
    vm.topic = topic;
    vm.prevTopic = topicService.get(topicId - 1);
    vm.nextTopic = topicService.get(topicId + 1);

    vm.code = code;


    this.runCode = function() {
      code.output = '';
      /*global Sk */
      Sk.configure({
        output: function(out) {
          code.output += out;
        }, 
        read: function(x) {
          if (Sk.builtinFiles === undefined || Sk.builtinFiles.files[x] === undefined) {
            throw 'File not found: "' + x + '"';
          }
          return Sk.builtinFiles.files[x];
        },
        retainglobals: true
      });
      (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
      var myPromise = Sk.misceval.asyncToPromise(function() {
          return Sk.importMainWithBody('<stdin>', false, code.input, true);
      });
      myPromise.then(function(mod) {
          console.log('success ', mod);
      }, function(err) {
          console.log(err.toString());
      });      
    };
  }
}());