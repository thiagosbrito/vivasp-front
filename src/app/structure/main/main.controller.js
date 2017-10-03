(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('MainController', MainController);

    /* @ngInject */
    function MainController ($scope, $state, $location, $log, $rootScope) {


      var $ctrl = this;

      $ctrl.GetClass = function () {
        var state = $state;
        return 'default';
      }

      $ctrl.messaging = firebase.messaging();

      $ctrl.GetNotificationPermission = function () {
        $ctrl.messaging.requestPermission().then(
          function(token) {
            console.log(token);
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            // ...
          })
          .catch(function(err) {
            console.log('Unable to get permission to notify.', err);
          });
      }();
    }
})();
