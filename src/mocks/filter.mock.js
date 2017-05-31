(function () {
  'use strict';

  angular.module('gulpApp')
    .constant('FilterMocks',[
      {
        beginDate: '',
        endDate: '',
        participantId: '',
        profileId: '',
        channelId: '',
        campaignId: '',
        catalogId: '',
        partnerId: '',
        purchaseStatus: '',
        orderStatus: '',
        _offset: 0,
        _limit: 10
      }
    ])

})();
