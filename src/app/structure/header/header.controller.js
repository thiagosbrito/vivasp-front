(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope','$state','$stateParams','$uibModal','$firebaseArray','$log', 'sha256','toastr','UserAPI'];

    function HeaderController ($scope, $state, $stateParams, $uibModal, $firebaseArray, $log, sha256, toastr, UserAPI) {

      var $ctrl = this;
      $ctrl.state = $state.params.categoriaNome;

      var ref = firebase.auth();

      ref.currentUser ? $ctrl.user = ref.currentUser : $ctrl.user = null;

      $ctrl.Login = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'LoginModalController',
          controllerAs: '$ctrl',
          windowClass: 'center-modal login-modal',
          templateUrl: 'app/site/auth/login-modal.html'
        });

        modalInstance.result.then(
          function () {
            // $ctrl.user = ref.currentUser;
          },
          function () {
            $log.info('modal-component dismissed at: ' + new Date());
          }
        );
      }

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $ctrl.user = user;
        } else {
          console.log('No user is logged');
        }
      })
    }
})();
