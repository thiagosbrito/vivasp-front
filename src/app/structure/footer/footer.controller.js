(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('FooterController', FooterController);

    FooterController.$inject = [
      '$scope',
      '$state',
      '$location',
      '$anchorScroll',
      '$uibModal',
      'EmailAPI',
      '$timeout'
    ];

    function FooterController ($scope, $state, $location, $anchorScroll, $uibModal, EmailAPI, $timeout) {

      var $ctrl = this;

      $scope.goToTop = function() {
        $anchorScroll();
      };

      $ctrl.Contact = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'ModalContactController',
          controllerAs: '$ctrl',
          windowClass: 'center-modal login-modal',
          templateUrl: 'app/site/features/contact/modal-contact.html'
        });

        modalInstance.result.then(
          function (data) {
            EmailAPI.send(data).then(
              function () {
                $ctrl.emailMessage = 'Sua mensagem foi enviada com sucesso';
                $timeout(function () {
                  $ctrl.emailMessage = null;
                }, 3000)
              }
            )
          },
          function () {
            $log.info('modal-component dismissed at: ' + new Date());
          }
        );
      }

    }
})();
