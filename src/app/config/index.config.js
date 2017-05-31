(function() {
  'use strict';

  angular
    .module('gulpApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('LoaderInterceptor');
  }
})();
