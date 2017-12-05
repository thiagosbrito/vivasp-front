(function () {
  'use strict';
  angular.module('vivaSp')
    .factory('EmailAPI', EmailAPI);

    EmailAPI.$inject = ['$http','$httpParamSerializerJQLike','$base64'];

    function EmailAPI ($http, $httpParamSerializerJQLike, $base64) {
      var api = {};

      api.send = function (data) {
        var URL = "https://api:key-1e3eafb7a926ce988ad84b5ef9844e2f@api.mailgun.net/v3/vivasp.net/messages";

        var dataJSON = {
            from: "postmaster@vivasp.net",
            to: "thiago83brito@hotmail.com",
            subject: data.subject,
            text: data.message,
            multipart: true
        }

        var req = {
          method : 'POST',
          url: URL,
          headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          data: dataJSON
        }
        $http(req).then(
          function(data){
            return data
          }
        )
        // return $http({
        //   url: 'https://api:key-1e3eafb7a926ce988ad84b5ef9844e2f@api.mailgun.net/v3/vivasp.net/messages',
        //   method: 'POST',
        //   // headers: {
        //   //   'Authorization' : 'Basic api:key-1e3eafb7a926ce988ad84b5ef9844e2f'
        //   // },
        //   data: {
        //     from: data.email,
        //     to: 'thiago83brito@hotmail.com',
        //     subject: data.subject,
        //     text: data.message
        //   }
        // }).then(
        //   function (res) {
        //     return res;
        //   }
        // )
      }

      return api;
    }
})();
