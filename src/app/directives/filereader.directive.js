(function (){
  'use strict';
  angular.module('vivaSp')
  .directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.fileread = {
                  name: changeEvent.target.files[0].name.replace(' ','-'),
                  type: changeEvent.target.files[0].type,
                  image: ''
                }
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread.image = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
  }]);
})();
