(function() {
  'use strict';

  angular
    .module('vivaSp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('LoaderInterceptor');
  }
})();
