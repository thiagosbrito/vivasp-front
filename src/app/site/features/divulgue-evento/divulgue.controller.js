(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('DivulgueEventoController', DivulgueController);

    DivulgueController.$inject = ['$scope','$uibModalInstance','$firebaseArray'];

    function DivulgueController ($scope, $uibModalInstance, $firebaseArray) {
      var $ctrl = this;

      $ctrl.event = $firebaseArray(firebase.database().ref('events'))

      $ctrl.Close = function () {
        $uibModalInstance.dismiss('cancel');
      }

      $ctrl.regions = [
        {
          description: 'Centro',
          value: 0
        },
        {
          description: 'Grande SP',
          value: 1
        },
        {
          description: 'Leste',
          value: 2
        },
        {
          description: 'Oeste',
          value: 3
        },
        {
          description: 'Norte',
          value: 4
        },
        {
          description: 'Sul',
          value: 5
        }
      ];

      $ctrl.formSent = false;

      $ctrl.AddEvent = function (obj) {
        $ctrl.event.$add(obj).then(
          function (res) {
            $ctrl.formSent = true;
          }
        ).catch(
          function (error) {
            console.log(error)
          }
        )
      };

    }
})();
