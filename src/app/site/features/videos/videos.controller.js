(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('VideosListarController', VideosListarController);
    VideosListarController.$inject = ['$scope','$state','youtubeFactory'];

    function VideosListarController ($scope, $state, youtubeFactory) {
      var $ctrl = this;

      $ctrl.GetVideos = function () {
        youtubeFactory.getVideosFromChannelById({
          channelId: 'UCiny6EBTC0gR_PcEEcnewhw',
          key: 'AIzaSyDuJeD3FCpMIpQgx69TQU-FK3Bnv4TYDog'
        }).then(
          function (results) {
            $ctrl.videoList = results.data.items;
            $ctrl.SetCurrentVideo($ctrl.videoList[0]);
          }
        ).catch(
          function (error) {
            console.log(error)
          }
        )
      }();

      $ctrl.SetCurrentVideo = function (video) {
        $ctrl.currentVideoId = video.id.videoId;
      }
    }
})();
