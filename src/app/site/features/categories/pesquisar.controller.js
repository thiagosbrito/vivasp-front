(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('CategoriesSearchController', CategoriesSearch);

    CategoriesSearch.$inject = ['$scope','$state','$stateParams','$firebaseArray'];

    function CategoriesSearch ($scope, $state, $stateParams, $firebaseArray) {

      var vm = this;

      vm.category = $stateParams.categoriaNome;

      var bannersRef = firebase.database().ref('banners');
      var carouselRef = bannersRef.child('destaques');
      var query = carouselRef.orderByChild('destaqueCategoria').equalTo(true);
      vm.hasBanners = false;
      vm.banners = $firebaseArray(query);

      var contentRed = firebase.database().ref('content');
      var queryContent = contentRed.orderByChild('categoryId').equalTo($stateParams.categoriaId);
      vm.contents = $firebaseArray(queryContent);

      vm.contentList = [];
      var limit;
      vm.contents.$loaded().then(
        function (results) {
          vm.contentList.push(results);
          limit = Math.ceil(results.length / 2);
          vm.list1 = vm.contentList[0].splice(0,limit);
          vm.list2 = vm.contentList[0].splice(0,limit*2);
          console.log(vm.list1, vm.list2);
        }
      ).catch(
        function (error) {
          console.log(error);
        }
      )

      //
      // vm.contents = vm.content

      // Get middle and bottom featured banners
      vm.banners.$loaded().then(
        function (a) {
          vm.bMiddle = _.findWhere(vm.banners, {position: "1", categoryId: $stateParams.categoriaId});
          vm.bBottom = _.findWhere(vm.banners, {position: "2", categoryId: $stateParams.categoriaId});
          console.log(vm.bMiddle, vm.bBottom);
        }
      );

      vm.bCategories = [];

      // vm.banners = vm.banners[0];
      vm.hasBanners = false;


      // get the main banners in carousel for the featured category
      vm.banners.$loaded().then(
        function (a) {
          vm.hasBanners = true;
          angular.forEach(a, function (value) {
            if (value.position == "0" && value.categoryId == $stateParams.categoriaId) {
              vm.bCategories.push(value);
            }
          });
        }
      );

      $scope.doSearch = function (filter) {
        $state.go('main.categories.results',{filter: filter});
      };
      vm.hasBanners = false;
      $scope.toggled = function(open) {
        console.log(open);
      };
      vm.foods = [
        [
          {
            title: 'Hamburgueria Nacional',
            description: 'A Hamburgueria Nacional está oferencendo descontos de até 20%',
            imageUrl: 'http://lorempixel.com/360/240/food/1'
          },
          {
            title: 'Bom Prato',
            description: 'Bom Prato inaugura 3 lojas na região de Santo Amaro',
            imageUrl: 'http://lorempixel.com/360/240/food/2'
          },
          {
            title: 'Mc Donald\'s',
            description: 'Novo brinquedo do Mc Lanche Feliz promete cativar até os adultos',
            imageUrl: 'http://lorempixel.com/360/240/food/3'
          },
        ],
        [
          {
            title: 'Jedi\'s Burger',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
            imageUrl: 'http://lorempixel.com/360/240/food/4'
          },
          {
            title: 'Nona Paola',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
            imageUrl: 'http://lorempixel.com/360/240/food/5'
          },
          {
            title: 'Varanda Ranch Steak',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
            imageUrl: 'http://lorempixel.com/360/240/food/6'
          }
        ]
      ];
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
        ]
      };

      vm.filter = {
        valor: null,
        regiao: null,
        avaliacao: null,
        tipo: null
      };

      var subcategoriesRef = firebase.database().ref('subcategories');
      var querySub = subcategoriesRef.orderByChild('categoryId').equalTo($stateParams.categoriaId);

      vm.subcats = $firebaseArray(querySub).$loaded().then(
        function (results) {
          vm.filters.tipo= results;
        }
      );

      $scope.setFilter = function (section, obj) {
        vm.filter[section] = obj;
      };
      $scope.clearFilter = function () {
        vm.filter = {
          valor: null,
          regiao: null,
          avaliacao: null,
          tipo: null
        };
      }
    }
})();
