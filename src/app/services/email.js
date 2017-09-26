(function () {
  'use strict';
  angular.module('vivaSp')
    .factory('EmailAPI', EmailAPI);

    EmailAPI.$inject = ['$http','$httpParamSerializerJQLike'];

    function EmailAPI ($http, $httpParamSerializerJQLike) {
      var api = {};

      api.send = function (data) {
        return $http({
          url: 'https://formspree.io/thiago83brito@hotmail.com',
          method: 'POST',
          data: $httpParamSerializerJQLike({
            name: data.name,
            email: data.email,
            _subject: data.subject,
            _replyto: 'noreply@vivasp.net',
            message: data.message
          })
        }).then(
          function (res) {
            return res;
          }
        )
      }

      return api;
    }
})();
