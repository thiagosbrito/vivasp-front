(function () {
  'use strict'
  angular.module('vivaSp')
    .controller('CategoriesViewController', CategoriesViewController);

    CategoriesViewController.$inject = ['$scope','$state','$firebaseArray','$stateParams','$firebaseObject','$firebaseAuth'];

    function CategoriesViewController ($scope, $state, $firebaseArray, $stateParams, $firebaseObject, $firebaseAuth) {
      $scope.state = $state;
      var $ctrl = this;

      var contentRef = firebase.database().ref('content');
      var list = $firebaseArray(contentRef);

      var bannersRef = firebase.database().ref('banners');
      var carouselRef = bannersRef.child('destaques');
      var query = carouselRef.orderByChild('contentId').equalTo($stateParams.itemId);

      var authObj = $firebaseAuth();

      $ctrl.destaque = $firebaseObject(query);

      $ctrl.destaque.$loaded().then(
        function (obj) {
          $ctrl.destImg = _.findWhere($ctrl.destaque, {contentId: $stateParams.itemId});
        }
      )

      list.$loaded().then(
        function (a) {
          $ctrl.content = a.$getRecord($stateParams.itemId);
          if(angular.isUndefined($ctrl.content.comments)) {
            $ctrl.content.comments = [];
          }
        }
      );

      $ctrl.AddComment = function (comment) {
        if (authObj.$getAuth()) {
          var userObj = authObj.$getAuth();
          comment.author = {
            displayName: userObj.displayName,
            uid: userObj.uid
          };
          comment.userUid = userObj.uid;
          comment.createdAt = new Date();
          comment.createdAt = comment.createdAt.toISOString();
          comment.approved = false;
          $ctrl.content.comments.push(comment);
          $ctrl.content = _.omit($ctrl.content, '$id');
          $ctrl.content = _.omit($ctrl.content, '$priority');
          contentRef.child($stateParams.itemId).update($ctrl.content).then(
            function (res) {
              $state.reload()
            }
          ).catch(
            function (error) {
              console.log(error);
            }
          )
        } else {
          console.log('Not logged');
          // SweetAlert.swal({
          //
          // });
        }
      };



    }
})();
