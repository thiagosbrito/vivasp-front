(function () {
  'use strict';
  angular.module('vivaSp')
    .factory('EmailAPI', EmailAPI);

    EmailAPI.$inject = ['$http','$httpParamSerializerJQLike'];

    function EmailAPI ($http, $httpParamSerializerJQLike) {
      var api = {};
      // https://api.mailgun.net/v3/vivasp.net
      // key-1e3eafb7a926ce988ad84b5ef9844e2f
      api.send = function (data) {
        return $http({
          url: 'https://api:key-1e3eafb7a926ce988ad84b5ef9844e2f@api.mailgun.net/v3/vivasp.net/messages',
          method: 'POST',
          // headers: {
          //   'Authorization' : 'Basic api:key-1e3eafb7a926ce988ad84b5ef9844e2f'
          // },
          data: {
            from: data.email,
            to: 'thiago83brito@hotmail.com',
            subject: data.subject,
            text: data.message
          }
        }).then(
          function (res) {
            return res;
          }
        )
      }

      return api;
    }
})();
