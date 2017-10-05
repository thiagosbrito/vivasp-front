(function() {
  'use strict';

  angular
    .module('vivaSp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('LoaderInterceptor');
    $locationProvider.html5Mode(true);
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
  }

})();
