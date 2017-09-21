(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('DivulgueEventoController', DivulgueController);

    DivulgueController.$inject = ['$scope','$uibModalInstance','$firebaseArray'];

    function DivulgueController ($scope, $uibModalInstance, $firebaseArray) {
      var $ctrl = this;

      $ctrl.event = firebase.database().ref('events');

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
      ]

    }
})();
