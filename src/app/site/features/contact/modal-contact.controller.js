(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('ModalContactController', ModalController);

    ModalController.$inject = ['$uibModalInstance','$scope'];

    function ModalController ($uibModalInstance, $scope) {
      var $ctrl = this;

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      }

      $ctrl.send = function (data) {
        $uibModalInstance.close(data);
      }
      
    }
})();
