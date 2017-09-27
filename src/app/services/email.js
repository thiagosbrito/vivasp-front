(function () {
  'use strict';
  angular.module('vivaSp')
    .factory('EmailAPI', EmailAPI);

    EmailAPI.$inject = ['$http','$httpParamSerializerJQLike','$base64'];

    function EmailAPI ($http, $httpParamSerializerJQLike, $base64) {
      var api = {};
      // https://api.mailgun.net/v3/vivasp.net
      // key-1e3eafb7a926ce988ad84b5ef9844e2f
      // https://api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0@api.mailgun.net/v3/samples.mailgun.org/log
      api.send = function (data) {
        var url = "/sendmail";
        var dataJSON = {
            from: "postmaster@vivasp.net",
            to: "thiago83brito@hotmail.com",
            subject: data.subject,
            text: data.message,
            multipart: true
        }

        var req = {
            method : 'POST',
            url: url,
            headers : {
                'content-type': 'application/x-www-form-urlencoded'
                // 'Authorization': 'Basic ' + $base64.encode('api:key-1e3eafb7a926ce988ad84b5ef9844e2f')
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
