(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('LoginModalController', LoginModalController);

    LoginModalController.$inject = ['$scope','$uibModalInstance','$firebaseAuth','sha256','$uibModalStack'];

    function LoginModalController ($scope, $uibModalInstance, $firebaseAuth, sha256, $uibModalStack) {
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
            $uibModalStack.dismissAll();
          }
        ).catch(
          function (error) {
            if (error.code == 'auth/wrong-password') {
              $ctrl.wrongEmailPassword = true;
              $ctrl.userNotFound = false;
            }
            if (error.code == 'auth/user-not-found') {
              $ctrl.userNotFound = true;
              $ctrl.wrongEmailPassword = false;
            }
            if (error.code == 'auth/invalid-email') {
              $ctrl.wrongEmailPassword = true;
              $ctrl.userNotFound = false;
            }
          }
        )
      }

      var fbProvider = new firebase.auth.FacebookAuthProvider();

      $ctrl.LoginFacebook = function () {
        ref.signInWithPopup(fbProvider).then(
          function (result) {
            $uibModalStack.dismissAll();
          }
        ).catch(
          function (error) {
            console.log(error);
          }
        )
      };

      var gProvider = new firebase.auth.GoogleAuthProvider();

      gProvider.addScope('https://www.googleapis.com/auth/plus.login');
      gProvider.addScope('https://www.googleapis.com/auth/plus.me');
      gProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
      gProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

      $ctrl.LoginGoogle = function () {
        ref.signInWithPopup(gProvider).then(
          function (result) {
            $uibModalStack.dismissAll();
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
        $ctrl.showForgotForm = false;
      }

      $ctrl.ForgotPassword = function () {
        $ctrl.showForgotForm = true;
        $ctrl.showSignUpForm = false;
        $ctrl.showLoginForm = false;
      }

      $ctrl.CancelSign = function () {
        $ctrl.showSignUpForm = false;
        $ctrl.showLoginForm = true;
        $ctrl.showForgotForm = false
      }

      $ctrl.authObj = $firebaseAuth();

      $ctrl.RetrievePassword = function (email) {
        ref.sendPasswordResetEmail(email).then(function() {
          $ctrl.check = true;
        }, function(error) {
          console.log(error);
        });
        // $ctrl.forgotObj.email
      }


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
