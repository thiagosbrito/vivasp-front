(function () {
  'use strict'
  angular.module('vivaSp')
    .controller('CategoriesViewController', CategoriesViewController);

    CategoriesViewController.$inject = ['$scope','$state','$firebaseArray','$stateParams','$firebaseObject'];

    function CategoriesViewController ($scope, $state, $firebaseArray, $stateParams, $firebaseObject) {
      $scope.state = $state;
      var $ctrl = this;

      var contentRef = firebase.database().ref('content');
      var list = $firebaseArray(contentRef);

      var bannersRef = firebase.database().ref('banners');
      var carouselRef = bannersRef.child('destaques');
      var query = carouselRef.orderByChild('contentId').equalTo($stateParams.itemId);

      $ctrl.destaque = $firebaseObject(query);

      $ctrl.destaque.$loaded().then(
        function (obj) {
          $ctrl.destImg = _.findWhere($ctrl.destaque, {contentId: $stateParams.itemId});
        }
      )

      list.$loaded().then(
        function (a) {
          $ctrl.content = a.$getRecord($stateParams.itemId)
        }
      )



    }
})();
