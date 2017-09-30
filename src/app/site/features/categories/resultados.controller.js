(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('CategoriesResultsController', CategoriesResults);

    CategoriesResults.$inject = ['$scope','$state','$stateParams','$firebaseArray'];

    function CategoriesResults ($scope, $state, $stateParams, $firebaseArray) {

      var vm = this;

      vm.filter = $stateParams.filter;

      // get the banners from the current category
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

      // get content based on filter values from search view
      var contentRef = firebase.database().ref('content');
      var queryContent = contentRef.orderByChild('categoryId').equalTo($stateParams.categoriaId);
      vm.contents = $firebaseArray(queryContent);


      var treatFilter = function (filter) {
        var filtro = angular.copy(filter);
        filtro.subcategoryId ? filtro.subcategoryId = filtro.subcategoryId.$id : filtro = _.omit(filtro, 'subcategoryId');
        filtro.rate ? filtro.rate = filtro.rate.value : filtro = _.omit(filtro, 'rate');
        filtro.priceRate ? filtro.priceRate = filtro.priceRate.value : filtro = _.omit(filtro, 'priceRate');
        filtro.cityZone ? filtro.cityZone = filtro.cityZone.value : filtro = _.omit(filtro, 'cityZone');
        return filtro;
      };
      var filtro = treatFilter($stateParams.filter);

      vm.contents.$loaded().then(
        function (results) {
          vm.contentList = _.where(results, filtro);
          console.log(vm.contentList);
        }
      ).catch(
        function (error) {
          console.log(error);
        }
      );

      $scope.doSearch = function (filter) {
        filtro = treatFilter(filter);
        vm.contentList = _.where(vm.contents, filtro);
      };

      //Define filter and its values
      vm.filters = {
        'priceRate': [
          {
            description: 'Grátis',
            value: 0
          },
          {
            description: 'R$ 10,00 à R$ 30,00',
            value: 1
          },
          {
            description: 'R$ 30,00 à R$ 50,00',
            value: 2
          },
          {
            description: 'R$ 50,00 à R$ 100,00',
            value: 3
          },
          {
            description: 'acima de R$ 30,00',
            value: 4
          }
        ],
        'cityZone': [
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
        'rate': [
          {
            description: '1 estrela <i class="fa fa-star">',
            value: 1,
          },
          {
            description: '2 estrelas <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 2
          },
          {
            description: '3 estrelas <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 3
          },
          {
            description: '4 estrelas <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 4
          },
          {
            description: '5 estrelas <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star">',
            value: 5
          }
        ]
      };

      var subcategoriesRef = firebase.database().ref('subcategories');
      var querySub = subcategoriesRef.orderByChild('categoryId').equalTo($stateParams.categoriaId);

      vm.subcats = $firebaseArray(querySub).$loaded().then(
        function (results) {
          vm.filters.subcategoryId = results;
        }
      );

      $scope.setFilter = function (section, obj) {
        vm.filter[section] = obj;
      };

      $scope.clearFilter = function () {
        vm.filter = {
          priceRate: null,
          cityZone: null,
          rate: null,
          subcategoryId: null
        };
      }
    }
})();
