(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('CategoriesSearchController', CategoriesSearch);

    CategoriesSearch.$inject = ['$scope','$state','$stateParams'];

    function CategoriesSearch ($scope, $state, $stateParams) {

      var vm = this;

      $scope.doSearch = function (filter) {
        console.log(filter);
        $state.go('main.categories.results',{filter: filter});
      }

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
          },
        ],
      ]
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
      }

      vm.filter = {
        valor: null,
        regiao: null,
        avaliacao: null,
        tipo: null
      };

      $scope.setFilter = function (section, obj) {
        vm.filter[section] = obj;
      }
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
