(function () {
  'use strict';

  angular.module('gulpApp')
    .constant('PurchasesMock',[
      {
        "purchaseId": "string",
        "purchaseDate": "2017-03-22T14:53:14.392Z",
        "purchaseValue": 0,
        "purchaseValuePoints": 0,
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
        "shippingValue": 0,
        "shippingValuePoints": 0,
        "shippingRate": 0,
        "shippingRatePercent": 0,
        "shippingDiscount": 0,
        "shippingDiscountPercent": 0,
        "registeredLetterValue": 0,
        "registeredLetterValuePercent": 0,
        "partnerConvenienceFee": 0,
        "partnerConvenienceFeePercent": 0,
        "payment": [
          {
            "paymentId": "string",
            "paymentDate": "2017-03-22T14:53:14.392Z",
            "paymentValue": 0,
            "paymentValuePoints": 0,
            "paymentType": {
              "paymentTypeId": "string",
              "paymentTypeName": "string"
            },
            "transactionId": "string",
            "band": {
              "bandId": "string",
              "bandName": "string",
              "bandImageUrl": "string"
            },
            "installments": 0,
            "installmentsValue": 0,
            "creditCardFee": 0,
            "creditCardFeePercent": 0,
            "paymentGatewayId": "string"
          }
        ],
        "reversal": [
          {
            "reversalId": "string",
            "reversalDate": "2017-03-22T14:53:14.392Z",
            "reversalValue": 0,
            "reversalValuePoints": 0,
            "reversalObservation": "string",
            "reversalQuantity": 0,
            "itemId": "string",
            "orderId": 0,
            "purchaseId": "string",
            "transactionId": "string",
            "paymentGatewayId": "string",
            "userId": "string",
            "reversalType": {
              "reversalTypeId": "string",
              "reversalTypeName": "string"
            },
            "reversalMotive": {
              "reversalMotiveId": "string",
              "reversalMotiveName": "string"
            }
          }
        ],
        "profile": {
          "profileId": "string",
          "profileName": "string",
          "profileStatus": "string",
          "inactivationDate": "2017-03-22T14:53:14.392Z"
        },
        "catalog": {
          "catalogId": 0,
          "catalogName": "string",
          "catalogStatus": "string",
          "inactivationDate": "2017-03-22T14:53:14.392Z",
          "pointsName": "string"
        },
        "participant": {
          "participantId": 0,
          "participantName": "string",
          "participantLogin": "string",
          "participantDate": "2017-03-22",
          "cpf": "string",
          "rg": "string",
          "issuer": "string",
          "issuerUf": "string",
          "issuerDate": "string",
          "cnpj": "string",
          "tradingName": "string",
          "email": [
            "string"
          ],
          "address": [
            {
              "addressName": "string",
              "addressType": "string",
              "number": "string",
              "complement": "string",
              "district": "string",
              "city": "string",
              "uf": "string",
              "postalCode": "string",
              "pointReference": "string",
              "observation": "string"
            }
          ],
          "telephone": [
            {
              "telephoneNumber": 0,
              "telephoneType": "string",
              "areaCode": 0,
              "extensionLine": 0,
              "contact": "string",
              "mobileOperator": "string"
            }
          ]
        },
        "recipient": {
          "recipientId": 0,
          "recipientName": "string",
          "cpf": "string",
          "rg": "string",
          "issuer": "string",
          "issuerUf": "string",
          "issuerDate": "string",
          "email": [
            "string"
          ],
          "address": [
            {
              "addressName": "string",
              "addressType": "string",
              "number": "string",
              "complement": "string",
              "district": "string",
              "city": "string",
              "uf": "string",
              "postalCode": "string",
              "pointReference": "string",
              "observation": "string"
            }
          ],
          "telephone": [
            {
              "telephoneNumber": 0,
              "telephoneType": "string",
              "areaCode": 0,
              "extensionLine": 0,
              "contact": "string",
              "mobileOperator": "string"
            }
          ]
        },
        "campaign": {
          "campaignId": 0,
          "campaignName": "string",
          "campaignStatus": "string",
          "inactivationDate": "2017-03-22T14:53:14.392Z"
        },
        "channel": {
          "channelId": 0,
          "channelName": "string"
        },
        "support": {
          "supportId": "string",
          "supportDate": "2017-03-22T14:53:14.392Z",
          "sacId": "string",
          "systemMonitoringId": "string"
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
  .constant('PurchasesMocksById', {
    "purchaseId": "string",
    "purchaseDate": "2017-03-22T14:53:14.392Z",
    "purchaseValue": 0,
    "purchaseValuePoints": 0,
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
    "shippingValue": 0,
    "shippingValuePoints": 0,
    "shippingRate": 0,
    "shippingRatePercent": 0,
    "shippingDiscount": 0,
    "shippingDiscountPercent": 0,
    "registeredLetterValue": 0,
    "registeredLetterValuePercent": 0,
    "partnerConvenienceFee": 0,
    "partnerConvenienceFeePercent": 0,
    active: false,
    "payment": [
      {
        "paymentId": "string",
        "paymentDate": "2017-03-22T14:53:14.392Z",
        "paymentValue": 0,
        "paymentValuePoints": 0,
        "paymentType": {
          "paymentTypeId": "string",
          "paymentTypeName": "string"
        },
        "transactionId": "string",
        "band": {
          "bandId": "string",
          "bandName": "string",
          "bandImageUrl": "string"
        },
        "installments": 0,
        "installmentsValue": 0,
        "creditCardFee": 0,
        "creditCardFeePercent": 0,
        "paymentGatewayId": "string"
      }
    ],
    "reversal": [
      {
        "reversalId": "string",
        "reversalDate": "2017-03-22T14:53:14.392Z",
        "reversalValue": 0,
        "reversalValuePoints": 0,
        "reversalObservation": "string",
        "reversalQuantity": 0,
        "itemId": "string",
        "orderId": 0,
        "purchaseId": "string",
        "transactionId": "string",
        "paymentGatewayId": "string",
        "userId": "string",
        "reversalType": {
          "reversalTypeId": "string",
          "reversalTypeName": "string"
        },
        "reversalMotive": {
          "reversalMotiveId": "string",
          "reversalMotiveName": "string"
        }
      }
    ],
    "profile": {
      "profileId": "string",
      "profileName": "string",
      "profileStatus": "string",
      "inactivationDate": "2017-03-22T14:53:14.392Z"
    },
    "catalog": {
      "catalogId": 0,
      "catalogName": "string",
      "catalogStatus": "string",
      "inactivationDate": "2017-03-22T14:53:14.392Z",
      "pointsName": "string"
    },
    "participant": {
      "participantId": 0,
      "participantName": "string",
      "participantLogin": "string",
      "participantDate": "2017-03-22",
      "cpf": "string",
      "rg": "string",
      "issuer": "string",
      "issuerUf": "string",
      "issuerDate": "string",
      "cnpj": "string",
      "tradingName": "string",
      "email": [
        "string"
      ],
      "address": [
        {
          "addressName": "string",
          "addressType": "string",
          "number": "string",
          "complement": "string",
          "district": "string",
          "city": "string",
          "uf": "string",
          "postalCode": "string",
          "pointReference": "string",
          "observation": "string"
        }
      ],
      "telephone": [
        {
          "telephoneNumber": 0,
          "telephoneType": "string",
          "areaCode": 0,
          "extensionLine": 0,
          "contact": "string",
          "mobileOperator": "string"
        }
      ]
    },
    "recipient": {
      "recipientId": 0,
      "recipientName": "string",
      "cpf": "string",
      "rg": "string",
      "issuer": "string",
      "issuerUf": "string",
      "issuerDate": "string",
      "email": [
        "string"
      ],
      "address": [
        {
          "addressName": "string",
          "addressType": "string",
          "number": "string",
          "complement": "string",
          "district": "string",
          "city": "string",
          "uf": "string",
          "postalCode": "string",
          "pointReference": "string",
          "observation": "string"
        }
      ],
      "telephone": [
        {
          "telephoneNumber": 0,
          "telephoneType": "string",
          "areaCode": 0,
          "extensionLine": 0,
          "contact": "string",
          "mobileOperator": "string"
        }
      ]
    },
    "campaign": {
      "campaignId": 0,
      "campaignName": "string",
      "campaignStatus": "string",
      "inactivationDate": "2017-03-22T14:53:14.392Z"
    },
    "channel": {
      "channelId": 0,
      "channelName": "string"
    },
    "support": {
      "supportId": "string",
      "supportDate": "2017-03-22T14:53:14.392Z",
      "sacId": "string",
      "systemMonitoringId": "string"
    },
    "status": {
      "statusName": "string",
      "statusParticipant": "string",
      "statusImageUrl": "string",
      "statusReason": "string"
    }
  })
})();
