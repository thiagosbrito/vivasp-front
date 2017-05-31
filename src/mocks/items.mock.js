(function () {
  'use strict';
  angular.module('vivaSp')
    .constant('ItemsMocks',[
      {
        "itemId": "string",
        "orderId": 0,
        "purchaseId": "string",
        "itemValue": 0,
        "itemValuePoints": 0,
        "shippingEstimate": "2017-03-22",
        "partnerShippingEstimate": "2017-03-22",
        "itemQuantity": 0,
        "totalItemValue": 0,
        "totalItemValuePoints": 0,
        "saleBonusValue": 0,
        "saleBonusValuePercent": 0,
        "convenienceFee": 0,
        "convenienceFeePercent": 0,
        "operatingMargin": 0,
        "operatingMarginPercent": 0,
        "productDiscount": 0,
        "productDiscountPercent": 0,
        "insuranceValue": 0,
        "insuranceValuePercent": 0,
        "registeredLetterValue": 0,
        "registeredLetterValuePercent": 0,
        "invoiceUrl": "string",
        "postalCode": "string",
        "exchangeDueDate": "2017-03-22",
        "product": {
          "productId": "string",
          "productName": "string",
          "productDescription": "string",
          "productValue": 0,
          "productImageUrl": "string"
        },
        "status": {
          "statusName": "string",
          "statusParticipant": "string",
          "statusImageUrl": "string",
          "statusReason": "string"
        }
      }
    ]
  )
})();
