(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('CategoriesResultsController', CategoriesResults);

    CategoriesResults.$inject = ['$scope','$state','$stateParams'];

    function CategoriesResults ($scope, $state, $stateParams) {

      var vm = this;

      vm.filter = $stateParams.filter;

      vm.range = function (count) {
        return new Array(+count);
      };

      vm.foods = [
        [
          {
            title: 'Sujinho Hamburgueria',
            imageUrl: 'http://lorempixel.com/360/240/food/1',
            info: {
              address: {
                street: 'R, Maceió, 64',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-010'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'hamburgueriadosujinho.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Wendy\'s',
            imageUrl: 'http://lorempixel.com/360/240/food/2',
            info: {
              address: {
                street: 'R, Serafim Grande, 664',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-011'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'wendys.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Sujinho Hamburgueria',
            imageUrl: 'http://lorempixel.com/360/240/food/3',
            info: {
              address: {
                street: 'R, Maceió, 64',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-010'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'hamburgueriadosujinho.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Wendy\'s',
            imageUrl: 'http://lorempixel.com/360/240/food/4',
            info: {
              address: {
                street: 'R, Serafim Grande, 664',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-011'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'wendys.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Sujinho Hamburgueria',
            imageUrl: 'http://lorempixel.com/360/240/food/5',
            info: {
              address: {
                street: 'R, Maceió, 64',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-010'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'hamburgueriadosujinho.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Wendy\'s',
            imageUrl: 'http://lorempixel.com/360/240/food/6',
            info: {
              address: {
                street: 'R, Serafim Grande, 664',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-011'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'wendys.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Sujinho Hamburgueria',
            imageUrl: 'http://lorempixel.com/360/240/food/7',
            info: {
              address: {
                street: 'R, Maceió, 64',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-010'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'hamburgueriadosujinho.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Wendy\'s',
            imageUrl: 'http://lorempixel.com/360/240/food/8',
            info: {
              address: {
                street: 'R, Serafim Grande, 664',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-011'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'wendys.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Sujinho Hamburgueria',
            imageUrl: 'http://lorempixel.com/360/240/food/9',
            info: {
              address: {
                street: 'R, Maceió, 64',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-010'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'hamburgueriadosujinho.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Wendy\'s',
            imageUrl: 'http://lorempixel.com/360/240/food/10',
            info: {
              address: {
                street: 'R, Serafim Grande, 664',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-011'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'wendys.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Sujinho Hamburgueria',
            imageUrl: 'http://lorempixel.com/360/240/food/1',
            info: {
              address: {
                street: 'R, Maceió, 64',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-010'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'hamburgueriadosujinho.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          },
          {
            title: 'Wendy\'s',
            imageUrl: 'http://lorempixel.com/360/240/food/2',
            info: {
              address: {
                street: 'R, Serafim Grande, 664',
                neighbourhood: 'Consolação',
                city: 'São Paulo',
                state: 'SP',
                postalCode: '01302-011'
              },
              schedule: [
                {
                  days: 'Domingo à Quinta',
                  time: '12:00 - 00:00'
                },
                {
                  days: 'Sexta e Sábado',
                  time: '12:00 - 02:00'
                }
              ],
              contacts: {
                phone: '(11) 3231-5207',
                siteTitle: 'wendys.com.br'
              },
              avgPrice: 'R$ 30,00',
              rate: 4
            }
          }
        ]
      ];

    }
})();
