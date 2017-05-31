(function () {
  'use strict';

  angular.module('gulpApp')
    .constant('CatalogsMocks',[
      {
        "catalogId":1,
        "catalogName":"Web Prêmios",
        "inactivationDate":true
      },
      {
        "catalogId":10094,
        "catalogName":"Web Prêmios (Profarma)",
        "inactivationDate":true
      }
    ]
  )
})();
