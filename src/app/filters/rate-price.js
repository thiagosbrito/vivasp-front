(function () {
  'use strict';

  angular.module('vivaSp')
    .filter('ratePrice', function () {
      return function (input) {
        if (input == 0) {
          return 'evento gratuito'
        }
        else if (input == 1) {
          return 'Média: R$ 10,00 à R$ 30,00';
        }
        else if (input == 2) {
          return 'Média: R$ 30,00 à R$ 50,00';
        }
        else if (input == 3) {
          return 'Média: R$ 50,00 à R$ 100,00';
        }
        else if (input == 4) {
          return 'Média: acima de R$ 100,00';
        }
      }
    })
})();

// {
//   description: 'Grátis',
//   value: 0
// },
// {
//   description: 'R$ 10,00 à R$ 30,00',
//   value: 1
// },
// {
//   description: 'R$ 30,00 à R$ 50,00',
//   value: 2
// },
// {
//   description: 'R$ 50,00 à R$ 100,00',
//   value: 3
// },
// {
//   description: 'acima de R$ 100,00',
//   value: 4
