(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('HeaderController', HeaderController);

    HeaderController.$inject = [
      '$scope',
      '$state',
      '$stateParams',
      '$uibModal',
      '$firebaseArray',
      '$log',
      'sha256',
      'toastr',
      'UserAPI',
      '$rootScope'
    ];

    function HeaderController ($scope, $state, $stateParams, $uibModal, $firebaseArray, $log, sha256, toastr, UserAPI, $rootScope) {

      var $ctrl = this;


      $ctrl.state = $state.params.categoriaNome;

      var ref = firebase.auth();

      $rootScope.$watch('style', function (value) {
        angular.isUndefined(value) ? $ctrl.logo = "assets/images/logos/logo-principal.png" : $ctrl.logo = value.logo;
        // angular.isUndefined(value) ? $ctrl.color = "#fdc006" : $ctrl.color = value.color;
      });

      $ctrl.config = {
      	autoHideScrollbar: false,
      	theme: 'minimal'
      }

      var bdRef = firebase.database().ref('content');

      $ctrl.content = $firebaseArray(bdRef);

      $ctrl.content.$loaded().then(
        function (results) {
          // console.log(results);
        }
      )
      $ctrl.GoToContent = function (content) {
        $ctrl.search = {};
        $state.go('main.categories.view',{categoriaId: content.categoryId, itemId: content.$id});
      }

      ref.currentUser ? $ctrl.user = ref.currentUser : $ctrl.user = null;

      console.log($ctrl.user);

      $ctrl.Login = function (source) {
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'LoginModalController',
          controllerAs: '$ctrl',
          windowClass: 'center-modal login-modal',
          templateUrl: 'app/site/auth/login-modal.html'
        });

        modalInstance.result.then(
          function (user) {
            if (source) {
              $ctrl.DivulgueEvento();
            }
            console.log(user);
          },
          function () {
            $log.info('modal-component dismissed at: ' + new Date());
          }
        );
      }

      $ctrl.ShowSearch = function () {
        $ctrl.openBar = true;
      }

      $ctrl.CloseSearch = function () {
        $ctrl.openBar = false;
        $ctrl.search = {};
      }

      $ctrl.Logout = function () {
        firebase.auth().signOut().then(function() {
          $state.reload();
        });
      }

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $rootScope.credentials = user;
          $ctrl.user = user;
        } else {
          $ctrl.user = null;
        }
      });

      $ctrl.DivulgueEvento = function () {
        if($ctrl.user) {
          $state.go('main.divulgue', {user: $ctrl.user});
        }
        else {
          $ctrl.Login('divulgue');
        }
      }

    }
})();
