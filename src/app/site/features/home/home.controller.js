(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state','$firebaseArray','$rootScope'];

    function HomeController ($scope, $state, $firebaseArray, $rootScope) {
      var vm = this;

      $scope.myInterval = 3000;
      $scope.noWrapSlides = false;
      $scope.active = 0;

      vm.style = {};

      vm.style.logo = "assets/images/logos/logo-principal.png";
      vm.style.color = "#ffd817";

      $rootScope.style = vm.style;

      var bannersRef = firebase.database().ref('banners');

      var contentRef = firebase.database().ref('content');
      var queryContent = contentRef.orderByChild('featHome').equalTo(true);

      vm.content = $firebaseArray(queryContent);

      vm.content.$loaded().then(
        function (a) {

          vm.featTop = [];
          vm.featMid = [];
          vm.featBot = [];

          vm.homeContent = a;

          angular.forEach(vm.homeContent, function (value) {
            if (value.featHome && value.position) {
              if (value.position.home.position <= 3) {
                value.position.home.position = parseInt(value.position.home.position);
                vm.featTop.push(value);
              }
              if (value.position.home.position >= 4 && value.position.home.position <= 6) {
                value.position.home.position = parseInt(value.position.home.position);
                vm.featMid.push(value);
              }
              if (value.position.home.position >= 7 && value.position.home.position <= 8) {
                value.position.home.position = parseInt(value.position.home.position);
                vm.featBot.push(value);
              }
            }
          })

          console.log(vm.featTop);
        }
      );
      vm.hasBanners = false;
      var carouselRef = bannersRef.child('carousel');
      var query = carouselRef.orderByChild('active').equalTo(true);

      var destaquesRef = bannersRef.child('destaques');
      var queryDest = destaquesRef.orderByChild('destaqueHome').equalTo(true);

      vm.banners = $firebaseArray(query);
      vm.banners.$loaded().then(
        function (a) {
          vm.hasBanners = true;
          vm.bannersList = a;
        }
      );
      vm.destaques = $firebaseArray(queryDest);

      vm.destaques.$loaded().then(
        function (a) {
          vm.destUp = _.findWhere(vm.destaques, {position: "0"});
          vm.destDown = _.findWhere(vm.destaques, {position: "1"});
        }
      )
    }
})();
