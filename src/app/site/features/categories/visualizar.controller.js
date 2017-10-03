(function () {
  'use strict'
  angular.module('vivaSp')
    .controller('CategoriesViewController', CategoriesViewController);

    CategoriesViewController.$inject = ['$scope','$state','$firebaseArray','$stateParams','$firebaseObject','$firebaseAuth','$uibModal'];

    function CategoriesViewController ($scope, $state, $firebaseArray, $stateParams, $firebaseObject, $firebaseAuth, $uibModal) {
      $scope.state = $state;
      var $ctrl = this;

      var contentRef = firebase.database().ref('content');
      var commentRef = firebase.database().ref('comments');
      var list = $firebaseArray(contentRef);
      var comments = $firebaseArray(commentRef);

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
        }
      );

      comments.$loaded().then(
        function (cmts) {
          $ctrl.commentsLoaded = cmts.$resolved;
          $ctrl.comments = _.where(cmts, {contentId: $stateParams.itemId});
          console.log($ctrl.comments);
        }
      )

      $ctrl.Login = function (source) {
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'LoginModalController',
          controllerAs: '$ctrl',
          windowClass: 'center-modal login-modal',
          templateUrl: 'app/site/auth/login-modal.html'
        });

        modalInstance.result.then(
          function () {
            if (source) {
              $ctrl.AddComment($ctrl.commentObj);
            }
          },
          function () {
            $log.info('modal-component dismissed at: ' + new Date());
          }
        );
      }

      $ctrl.AddComment = function (comment) {
        if (authObj.$getAuth()) {
          var userObj = authObj.$getAuth();
          comment.author = {
            displayName: userObj.displayName,
            uid: userObj.uid,
            userImg: userObj.photoURL
          };
          comment.contentId = $stateParams.itemId;
          comment.createdAt = new Date();
          comment.createdAt = comment.createdAt.toISOString();
          comment.approved = false;

          commentRef.push(comment).then(
            function (res) {
              $state.reload()
            }
          ).catch(
            function (error) {
              // console.log(error);
            }
          )
        } else {
          $ctrl.Login('comment');
        }
      };



    }
})();
