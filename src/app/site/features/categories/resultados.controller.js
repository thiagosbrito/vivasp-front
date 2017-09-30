(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('CategoriesResultsController', CategoriesResults);

    CategoriesResults.$inject = ['$scope','$state','$stateParams','$firebaseArray'];

    function CategoriesResults ($scope, $state, $stateParams, $firebaseArray) {

      var vm = this;

      vm.filter = $stateParams.filter;
      vm.hasBanners = false;
      var bannerRef = firebase.database().ref('banners').child('destaques');
      var queryBanner = bannerRef.orderByChild('categoryId').equalTo($stateParams.categoriaId);
      vm.banners = $firebaseArray(queryBanner);

      vm.banners.$loaded().then(
        function (results) {
          vm.bannerList = results;
          vm.bannerList.length > 0 ? vm.hasBanners = true : vm.hasBanners = false;
        }
      ).catch(
        function (error) {
          console.log(error);
        }
      );

      vm.range = function (count) {
        return new Array(+count);
      };

      var contentRed = firebase.database().ref('content');
      var queryContent = contentRed.orderByChild('categoryId').equalTo($stateParams.categoriaId);

      vm.contents = $firebaseArray(queryContent);

      vm.contents.$loaded().then(
        function (results) {
          if(vm.filter.tipo) {
            vm.filter.tipo
          }
          console.log(vm.filter, results);
        }
      ).catch(
        function (error) {
          console.log(error);
        }
      )
      vm.filters = {
        'valor': [
          {
            description: 'R$ 10,00 à R$ 30,00',
            value: 0
          },
          {
            description: 'R$ 30,00 à R$ 50,00',
            value: 1
          },
          {
            description: 'R$ 50,00 à R$ 100,00',
            value: 2
          },
          {
            description: 'acima de R$ 30,00',
            value: 3
          }
        ],
        'regiao': [
          {
            description: 'Centro',
            value: 0
          },
          {
            description: 'Grande SP',
            value: 1
          },
          {
            description: 'Leste',
            value: 2
          },
          {
            description: 'Oeste',
            value: 3
          },
          {
            description: 'Norte',
            value: 4
          },
          {
            description: 'Sul',
            value: 5
          }
        ],
        'avaliacao': [
          {
            description: '1 estrela <i class="fa fa-star">',
            value: 0,
          },
          {
            description: '2 estrelas <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 1
          },
          {
            description: '3 estrelas <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 2
          },
          {
            description: '4 estrelas <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 3
          },
          {
            description: '5 estrelas <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 4
          }
        ],
        'tipo': [
          {
            description: 'Lanches',
            value: 0
          },
          {
            description: 'Cozinha Asiática',
            value: 1
          },
          {
            description: 'Cozinha Árabe',
            value: 2
          },
          {
            description: 'Cozinha Brasileira',
            value: 3
          },
          {
            description: 'Cozinha Italiana',
            value: 4
          }
        ]
      };
    }
})();
