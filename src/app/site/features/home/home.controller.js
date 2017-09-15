(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state','$firebaseArray'];

    function HomeController ($scope, $state, $firebaseArray) {
      var vm = this;

      var bannersRef = firebase.database().ref('banners');

      var carouselRef = bannersRef.child('carousel');
      var query = carouselRef.orderByChild('active').equalTo(true);

      var destaquesRef = bannersRef.child('destaques');
      var queryDest = destaquesRef.orderByChild('destaqueHome').equalTo(true);

      vm.banners = $firebaseArray(query);
      console.log(vm.banners);
      vm.destaques = $firebaseArray(queryDest);

      vm.destaques.$loaded().then(
        function (a) {
          vm.destUp = _.findWhere(vm.destaques, {position: "0"});
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
