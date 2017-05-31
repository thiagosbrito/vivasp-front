(function () {
  'use strict';

  angular.module('gulpApp')
    .constant('OrdersMocks',[
      {
        "orderId": "string",
        "purchaseId": "string",
        "orderDate": "2017-03-22T14:53:14.438Z",
        "orderValue": 0,
        "orderValuePoints": 0,
        "shippingEstimate": "2017-03-22",
        "partnerShippingEstimate": "2017-03-22",
        "shippingValue": 0,
        "shippingValuePoints": 0,
        "shippingFee": 0,
        "shippingFeePercent": 0,
        "shippingDiscount": 0,
        "shippingDiscountPercent": 0,
        "participant": {
          "participantId": 0,
          "participantName": "string"
        },
        "campaign": {
          "campaignId": 0,
          "campaignName": "string"
        },
        "partner": {
          "partnerId": 0,
          "partnerName": "string"
        },
        "status": {
          "statusName": "string",
          "statusParticipant": "string",
          "statusImageUrl": "string",
          "statusReason": "string"
        }
      }
    ]
  ).constant('OrdersMockById',{
    "orderId": "string",
    "purchaseId": "string",
    "orderDate": "2017-03-22T14:53:14.438Z",
    "orderValue": 0,
    "orderValuePoints": 0,
    "shippingEstimate": "2017-03-22",
    "partnerShippingEstimate": "2017-03-22",
    "shippingValue": 0,
    "shippingValuePoints": 0,
    "shippingFee": 0,
    "shippingFeePercent": 0,
    "shippingDiscount": 0,
    "shippingDiscountPercent": 0,
    "participant": {
      "participantId": 0,
      "participantName": "string"
    },
    "campaign": {
      "campaignId": 0,
      "campaignName": "string"
    },
    "partner": {
      "partnerId": 0,
      "partnerName": "string"
    },
    "status": {
      "statusName": "string",
      "statusParticipant": "string",
      "statusImageUrl": "string",
      "statusReason": "string"
    }
  })
})();
