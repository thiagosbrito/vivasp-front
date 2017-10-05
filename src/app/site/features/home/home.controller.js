(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state','$firebaseArray','$rootScope'];

    function HomeController ($scope, $state, $firebaseArray, $rootScope) {
      var vm = this;

      vm.style = {};

      vm.style.logo = "assets/images/logos/logo-principal.png";
      vm.style.color = "#ffd817";

      $rootScope.style = vm.style;

      var bannersRef = firebase.database().ref('banners');

      var contentRef = firebase.database().ref('content');
      var queryContent = contentRef.orderByChild('featHome').equalTo(true);

      vm.content = $firebaseArray(queryContent);

      // vm.SeparateByCategory = function (array) {
      //
      //   console.log(_.groupBy(array, 'categoryId'));
      //   return _.groupBy(array, 'categoryId');
      // }

      vm.content.$loaded().then(
        function (a) {

          // vm.featCinema = [];
          // vm.featMusica = [];
          // vm.featDanca = [];
          // vm.featCursos = [];
          // vm.featLazer = [];
          // vm.featGastronomia = [];
          // vm.featTeatro = [];

          vm.featTop = [];
          vm.featMid = [];
          vm.featBot = [];

          vm.homeContent = a;

          angular.forEach(vm.homeContent, function (value) {
            if (value.position.home.position <= 3) {
              vm.featTop.push(value);
            }
            if (value.position.home.position >= 4 && value.position.home.position <= 6) {
              vm.featMid.push(value);
            }
            if (value.position.home.position >= 7 && value.position.home.position <= 8) {
              vm.featBot.push(value);
            }
          })
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
          console.log(a);
          vm.destUp = _.findWhere(vm.destaques, {position: "0"});
          vm.destDown = _.findWhere(vm.destaques, {position: "1"});
          console.log(vm.destUp, vm.destDown);
        }
      )
      // if(vm.destaques) {
      //   vm.destUp = _.findWhere(vm.destaques, {position: "0"});
      //   console.log(vm.destUp);
      //   vm.destDown = _.findWhere(vm.destaques, {position: "1"});
      //   console.log(vm.destDown);
      // }

      // console.log(vm.destaques);

      // var getId = function (payload) {
      //   angular.forEach(payload, function (value, k) {
      //     value.$id = k;
      //   })
      //
      //   return payload;
      // };
      //
      // $scope.getCategories = function () {
      //   FirebaseAPI.getAll('categories').then(
      //     function (res) {
      //       vm.categories = getId(res.data);
      //       console.log(vm.categories);
      //     }
      //   )
      // }();

    }
})();
