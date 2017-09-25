(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('DivulgueEventoController', DivulgueController);

    DivulgueController.$inject = [
      '$scope',
      '$firebaseArray',
      '$state',
      '$firebaseStorage',
      '$rootScope',
      '$firebaseAuth',
      'SweetAlert'
    ];

    function DivulgueController ($scope, $firebaseArray, $state, $firebaseStorage, $rootScope, $firebaseAuth, SweetAlert) {


      var $ctrl = this;
      var authObj = $firebaseAuth();
      var userDetails = authObj.$getAuth();
      var userId = userDetails.uid;
      var userName = userDetails.displayName;

      $ctrl.user = $firebaseAuth().$getAuth();

      var categoryRef = firebase.database().ref('categories');
      $ctrl.categories = $firebaseArray(categoryRef);

      $ctrl.categories.$loaded().then(
        function (categoriesList) {
          $ctrl.categoriesList = categoriesList;
          console.log($ctrl.categoriesList);
        }
      )

      $ctrl.SetSubCategory = function (obj) {
        var subcategoryRef = firebase.database().ref('subcategories');
        var query = subcategoryRef.orderByChild('categoryId').equalTo(obj.$id)
        $firebaseArray(query).$loaded().then(
          function (results) {
            console.log(results);
            $ctrl.subcategories = results;
          }
        )
      }

      var contentRef = firebase.database().ref('content');

      $ctrl.content = $firebaseArray(contentRef);

      $ctrl.contentData = {
        "author": {
          "$id": userId,
          "displayName": userName
        },
        "dates": [
          {
            "date": "",
            "time": ""
          }
        ]
      };

      $ctrl.AddData = function () {
        $ctrl.contentData.dates.push({date: "", time: ""});
      }

      $ctrl.imgForUpload = null;
      $ctrl.tmbForUpload = null;

      $ctrl.priceRates = [
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
          description: 'acima de R$ 100,00',
          value: 4
        }
      ];

      $ctrl.regions = [
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
      ]

      var handleFileSelect=function(evt) {
        var file=evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
          $scope.$apply(function($scope){
            $scope.myImage=evt.target.result;
          });
        };
        reader.readAsDataURL(file);
      };
      angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

      $scope.uploadFile = function(file) {
        var file64 = file.image.split(',')[1];
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var contentImageRef = storageRef.child('images/contents/' + file.name);
        var fileStorage = $firebaseStorage(contentImageRef);

        fileStorage.$putString(file64, 'base64', {contentType: file.type})
        fileStorage.$getDownloadURL().then(
          function (res) {
            $ctrl.contentData.imgUrl = res;
            console.log($ctrl.contentData.imgUrl);
          }
        )
      };

      $scope.setTagsArray = function (tags) {
        var tagsArray = [];
        tags = tags.split(',');
        angular.forEach(tags, function (value) {
          tagsArray.push(value);
        })
        return tagsArray;
      }

      $ctrl.AddContent = function (data) {

        // !angular.isUndefined(data.tags) ? data.tags = $scope.setTagsArray(data.tags) : false;

        data.createdBy = {
          "$id": $ctrl.user.uid,
          "displayName": $ctrl.user.displayName
        };

        data.createdAt      = new Date();
        data.createdAt      = data.createdAt.toISOString();
        data.categoryId     = data.category.$id;
        data.subcategory.$id ? data.subcategoryId  = data.subcategory.$id : data.subcategoryId = null;

        $ctrl.content.$add($ctrl.contentData).then(
          function (res) {
            // toastr.success('Conteúdo criado com sucesso :)', 'Criar conteúdo');
            SweetAlert.swal({
             title: "Digulgue seu evento!",
             text: "Seu evento foi cadastrado com sucesso",
             type: "success",
             showCancelButton: false,
             confirmButtonColor: "#DD6B55",confirmButtonText: "Obrigado",
             closeOnConfirm: true,
             closeOnCancel: false },
            function(isConfirm){
              $state.go('main.conteudos.listar');
            });
          },
          function (err) {
            SweetAlert.swal("OPS :(", err, "error");
          }
        );
      }

    }
})();
