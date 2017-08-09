(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['$scope', '$stateParams'];

    function CategoriesController ($scope, $stateParams) {
      var vm = this;

      vm.category = $stateParams.categoriaNome;

      $scope.foods = [
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

      $scope.toggled = function(open) {
        console.log(open);
      };
    }
})();
