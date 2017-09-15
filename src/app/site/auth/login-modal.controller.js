(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('LoginModalController', LoginModalController);

    LoginModalController.$inject = ['$scope','$uibModalInstance','$firebaseAuth','sha256'];

    function LoginModalController ($scope, $uibModalInstance, $firebaseAuth, sha256) {
      var $ctrl = this;

      $ctrl.loginObj = {};
      $ctrl.showSignUpForm = false;
      $ctrl.showLoginForm = true;

      var ref = firebase.auth();

      $ctrl.Cancel = function () {
        $uibModalInstance.dismiss('cancel');
      }

      $ctrl.Login = function (user) {
        ref.signInWithEmailAndPassword(user.email, user.password).then(
          function (res) {
            console.log(res);
          }
        ).catch(
          function (error) {
            console.log(error);
          }
        )
      }

      $ctrl.SignUpForm = function () {
        $ctrl.showSignUpForm = true;
        $ctrl.showLoginForm = false;
      }

      $ctrl.CancelSign = function () {
        $ctrl.showSignUpForm = false;
        $ctrl.showLoginForm = true;
      }

      $ctrl.authObj = $firebaseAuth();


      $ctrl.SignUpUser = function (signObj) {

        ref.createUserWithEmailAndPassword(signObj.email, signObj.password).then(
          function (user) {
            ref.signInWithEmailAndPassword(signObj.email, signObj.password).catch(
              function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
              }
            );
            $ctrl.user = ref.currentUser;
            $ctrl.user.updateProfile({
              displayName: signObj.name
            }).then(
              function () {
                $uibModalInstance.close();
              }
            )
          }
        ).catch(
          function(error) {
            console.log(error);
          }
        );
      }
    }
})();
