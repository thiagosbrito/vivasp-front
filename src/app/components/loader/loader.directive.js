(function () {
  'use strict';
  angular.module('gulpApp')
    .directive('loader', LoaderDirective);

    function LoaderDirective ($rootScope) {
       return function ($scope, element, attrs) {
         $rootScope.$on("loader_show", function (value) {
           console.log("S", value);
           if (element.hasClass("hidden")) {
             element.removeClass("hidden")
           }
         });
         $rootScope.$on("loader_hide", function (value) {
           console.log('H', value);
           if(!element.hasClass("hidden")){
             element.addClass("hidden")
           }
         });
       }
    }
})();
