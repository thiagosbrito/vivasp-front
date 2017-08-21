(function () {
  'use strict';

  angular.module('vivaSp')
    .factory('FirebaseAPI', FirebaseAPI)

    FirebaseAPI.$inject = ['$http']

    function FirebaseAPI ($http) {
      var urlApi = 'https://admin-vivasp.firebaseio.com/';

      this.getAll = function (module) {
        return $http({
          url: urlApi + module + '.json',
          method: 'GET'
        }).then(
          function (results) {
            return results;
          }
        )
      };

      return this
    }
})();
