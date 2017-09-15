(function () {
  'use strict';

  angular.module('vivaSp')
    .factory('UserAPI', UserAPI);

    UserAPI.$inject = [];

    function UserAPI () {

      var api = {};
      var user;

      api.setUser = function (userData) {
        user = userData
      }

      api.getUser = function () {
        return user;
      }

      return api;
    }
})();
