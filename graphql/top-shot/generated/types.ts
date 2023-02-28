export default {
    "scalars": [
        5,
        6,
        8,
        25,
        27,
        28,
        31,
        33,
        37,
        44,
        45,
        46,
        47,
        52,
        54,
        55,
        56,
        87,
        93,
        109,
        112,
        113,
        114,
        115,
        124,
        127,
        136,
        140,
        149,
        155,
        157,
        158,
        298,
        308,
        310,
        313,
        317,
        318,
        322,
        324,
        326,
        327,
        334,
        335,
        347,
        349,
        350,
        359,
        370,
        371,
        379,
        383,
        384,
        388,
        389,
        390,
        405,
        406,
        407,
        408,
        411,
        412,
        418,
        419,
        422,
        423,
        429,
        430,
        431,
        440,
        444,
        446,
        448,
        456,
        457,
        463,
        466,
        467,
        479,
        488,
        490,
        492,
        494,
        500,
        507,
        525,
        529,
        536,
        537,
        542,
        550,
        553,
        556,
        581,
        582,
        584,
        609,
        613,
        631,
        632,
        633,
        637,
        643,
        645,
        651,
        662,
        668,
        674,
        703,
        706,
        710,
        717,
        720,
        725,
        731,
        733,
        734,
        741,
        747
    ],
    "types": {
        "AccountFirstPurchaseAgeError": {
            "accountFirstPurchaseAgeMinutesLeft": [
                310
            ],
            "accountFirstPurchaseAgeSecondsLeft": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "Activities": {
            "size": [
                310
            ],
            "data": [
                2
            ],
            "__typename": [
                643
            ]
        },
        "Activity": {
            "id": [
                308
            ],
            "sortID": [
                633
            ],
            "subject": [
                7
            ],
            "status": [
                6
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "activityType": [
                8
            ],
            "isRead": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "ActivityFilters": {
            "byUnread": [
                31
            ],
            "byStatus": [
                6
            ],
            "byType": [
                8
            ],
            "__typename": [
                643
            ]
        },
        "ActivityFiltersInput": {
            "byUnread": [
                31
            ],
            "byStatus": [
                6
            ],
            "byType": [
                8
            ],
            "__typename": [
                643
            ]
        },
        "ActivitySortType": {},
        "ActivityStatus": {},
        "ActivitySubject": {
            "on_PurchaseVendorMomentActivity": [
                526
            ],
            "on_PurchaseP2PMomentActivity": [
                517
            ],
            "on_P2PMomentListingActivity": [
                425
            ],
            "on_P2PMomentListingCancellationActivity": [
                426
            ],
            "on_P2PMomentListingSoldActivity": [
                427
            ],
            "on_PurchasePackActivity": [
                520
            ],
            "on_MomentTransferRequestActivity": [
                387
            ],
            "on_MomentTransferReceivedActivity": [
                385
            ],
            "on_MomentTradeInRequestActivity": [
                382
            ],
            "on_MomentsTradeInRequestActivity": [
                394
            ],
            "on_OfferAvailableActivity": [
                403
            ],
            "on_OfferCompletedActivity": [
                404
            ],
            "on_SpecialNftPurchasedActivity": [
                638
            ],
            "on_SpecialNftSoldActivity": [
                639
            ],
            "__typename": [
                643
            ]
        },
        "ActivityType": {},
        "AddEditionToWatchlistInput": {
            "watchlistId": [
                308
            ],
            "playID": [
                643
            ],
            "setID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "AddEditionToWatchlistResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "AddMomentsToGroupsInput": {
            "momentIDs": [
                643
            ],
            "momentGroupIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "AddMomentsToGroupsResponse": {
            "groupMomentIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "AddUserMarketingCampaignRequest": {
            "campaign": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "AddUserMarketingCampaignResponse": {
            "isAdded": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "AddUserReferralRequest": {
            "referralCode": [
                643
            ],
            "referralType": [
                537
            ],
            "__typename": [
                643
            ]
        },
        "AddUserReferralResponse": {
            "isAdded": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "AllPlayersByLeaguesInput": {
            "leagues": [
                326
            ],
            "__typename": [
                643
            ]
        },
        "AllTeamsByLeaguesInput": {
            "leagues": [
                326
            ],
            "__typename": [
                643
            ]
        },
        "AllstarSetMetadata": {
            "teamID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "Auction": {
            "listingID": [
                310
            ],
            "maxBid": [
                507
            ],
            "maxBidWalletID": [
                643
            ],
            "saleEndDate": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "AuthenticateInput": {
            "code": [
                643
            ],
            "redirectUrl": [
                643
            ],
            "source": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "AuthenticateResponse": {
            "idToken": [
                643
            ],
            "refreshToken": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "AuthorizePackNFTsMintingInput": {
            "signable": [
                643
            ],
            "mintType": [
                632
            ],
            "__typename": [
                643
            ]
        },
        "BallerStatusLevel": {
            "label": [
                25
            ],
            "pointThreshold": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "BallerStatusLevelLabel": {},
        "BallerStatusLevels": {
            "levels": [
                24
            ],
            "__typename": [
                643
            ]
        },
        "BallerStatusMilestoneLabel": {},
        "BallerStatusTaskStatus": {},
        "BaseSearchInput": {
            "pagination": [
                476
            ],
            "__typename": [
                643
            ]
        },
        "Bonus": {
            "id": [
                643
            ],
            "score": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "Boolean": {},
        "BurnedEdition": {
            "setID": [
                643
            ],
            "playID": [
                643
            ],
            "subeditionID": [
                310
            ],
            "flowSeriesNumber": [
                310
            ],
            "flowName": [
                643
            ],
            "visualID": [
                734
            ],
            "headline": [
                643
            ],
            "assetPathPrefix": [
                643
            ],
            "momentCount": [
                310
            ],
            "totalMomentCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "CSInterval": {},
        "Campaign": {
            "id": [
                308
            ],
            "slug": [
                643
            ],
            "title": [
                643
            ],
            "description": [
                643
            ],
            "imageUrl": [
                643
            ],
            "startAt": [
                662
            ],
            "endAt": [
                662
            ],
            "visibility": [
                37
            ],
            "reward": [
                36
            ],
            "events": [
                35
            ],
            "__typename": [
                643
            ]
        },
        "CampaignEvent": {
            "id": [
                308
            ],
            "category": [
                643
            ],
            "title": [
                643
            ],
            "description": [
                643
            ],
            "actionLink": [
                643
            ],
            "timesRequired": [
                310
            ],
            "validFrom": [
                662
            ],
            "validTo": [
                662
            ],
            "userProgress": [
                695
            ],
            "__typename": [
                643
            ]
        },
        "CampaignReward": {
            "id": [
                308
            ],
            "title": [
                643
            ],
            "description": [
                643
            ],
            "imageUrl": [
                643
            ],
            "videoUrl": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CampaignVisibility": {},
        "CancelMomentSaleInput": {
            "orderID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CancelMomentSaleResponse": {
            "orderID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CancelPurchasePackInput": {
            "orderID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CancelPurchasePackResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "CancelReservationInput": {
            "id": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "CancelReservationResponse": {
            "error": [
                44
            ],
            "__typename": [
                643
            ]
        },
        "CancelReservationResponseError": {},
        "Chain": {},
        "ChallengeCompletionStateFilter": {},
        "ChallengeExpiryStateFilter": {},
        "ChallengeFilters": {
            "byUserID": [
                643
            ],
            "byChallengeCompletionState": [
                46
            ],
            "byChallengeExpiryState": [
                47
            ],
            "byChallengeTypes": [
                55
            ],
            "byLoggedDapperId": [
                643
            ],
            "byHasUserSubmission": [
                31
            ],
            "byHasValidUserSubmission": [
                31
            ],
            "byVariableChallengeCategories": [
                720
            ],
            "byChallengeVisibilities": [
                56
            ],
            "__typename": [
                643
            ]
        },
        "ChallengeFiltersInput": {
            "byUserID": [
                643
            ],
            "byChallengeCompletionState": [
                46
            ],
            "byChallengeExpiryState": [
                47
            ],
            "byChallengeTypes": [
                55
            ],
            "byLoggedDapperId": [
                643
            ],
            "byHasUserSubmission": [
                31
            ],
            "byHasValidUserSubmission": [
                31
            ],
            "byVariableChallengeCategories": [
                720
            ],
            "byChallengeVisibilities": [
                56
            ],
            "__typename": [
                643
            ]
        },
        "ChallengeProgress": {
            "challenge": [
                696
            ],
            "numTotalSlots": [
                310
            ],
            "numFilledSlots": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "ChallengeReward": {
            "playID": [
                643
            ],
            "setID": [
                643
            ],
            "assetPathPrefix": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "ChallengeRewardStatus": {},
        "ChallengeSlot": {
            "playID": [
                643
            ],
            "setID": [
                643
            ],
            "filledMomentID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "ChallengeSortType": {},
        "ChallengeType": {},
        "ChallengeVisibility": {},
        "ChallengesProgress": {
            "progress": [
                50
            ],
            "__typename": [
                643
            ]
        },
        "ChallengesSearchSummary": {
            "filters": [
                48
            ],
            "searchSummary": [
                598
            ],
            "sortBy": [
                54
            ],
            "__typename": [
                643
            ]
        },
        "CheckActiveChallengeSubmissionsByMomentIDInput": {
            "momentID": [
                308
            ],
            "ignoreSubmissionID": [
                308
            ],
            "variableChallengeCategories": [
                720
            ],
            "__typename": [
                643
            ]
        },
        "CheckActiveChallengeSubmissionsByMomentIDResponse": {
            "isUsed": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "CheckExistingP2POrdersInput": {
            "momentID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "CheckExistingP2POrdersResponse": {
            "ordersExist": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "CodexFilters": {
            "bySeries": [
                609
            ],
            "__typename": [
                643
            ]
        },
        "CodexFiltersInput": {
            "bySeries": [
                609
            ],
            "__typename": [
                643
            ]
        },
        "CodexSet": {
            "set": [
                610
            ],
            "totalEditionSlots": [
                310
            ],
            "filledEditionSlots": [
                310
            ],
            "uniqueMoments": [
                310
            ],
            "hasChallengeReward": [
                31
            ],
            "isCompleted": [
                31
            ],
            "completedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "CodexSetWithEditions": {
            "codexSet": [
                65
            ],
            "editionSlots": [
                139
            ],
            "__typename": [
                643
            ]
        },
        "Collectible": {
            "id": [
                308
            ],
            "playID": [
                308
            ],
            "setID": [
                308
            ],
            "chain": [
                45
            ],
            "mintNumber": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "CollectorBonus": {
            "bonusId": [
                643
            ],
            "bonusPts": [
                310
            ],
            "qualified": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "CollectorBonusData": {
            "name": [
                643
            ],
            "bonusTotal": [
                310
            ],
            "bonuses": [
                68
            ],
            "__typename": [
                643
            ]
        },
        "CollectorChallengeCounts": {
            "challengeRewards": [
                310
            ],
            "challengeCompletions": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "CollectorEdition": {
            "quantity": [
                310
            ],
            "setName": [
                643
            ],
            "visualId": [
                310
            ],
            "seriesNumber": [
                310
            ],
            "challengeReward": [
                31
            ],
            "challengeCompleted": [
                31
            ],
            "playerId": [
                643
            ],
            "teamId": [
                643
            ],
            "editionId": [
                643
            ],
            "league": [
                643
            ],
            "moments": [
                73
            ],
            "__typename": [
                643
            ]
        },
        "CollectorIntervalData": {
            "score": [
                310
            ],
            "interval": [
                33
            ],
            "__typename": [
                643
            ]
        },
        "CollectorMoment": {
            "acquiredAt": [
                662
            ],
            "serialNumber": [
                310
            ],
            "collectorScorePts": [
                76
            ],
            "__typename": [
                643
            ]
        },
        "CollectorPlayerTeamData": {
            "playerId": [
                308
            ],
            "playerName": [
                643
            ],
            "owned": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "CollectorScore": {
            "dapperId": [
                643
            ],
            "score": [
                310
            ],
            "incrementScoreByMoment": [
                310
            ],
            "incrementScoreSinceDate": [
                310
            ],
            "incrementScoreByTeam": [
                310
            ],
            "incrementScoreByWNBA": [
                310
            ],
            "decrementScoreByMoment": [
                310
            ],
            "decrementScoreByMoments": [
                310
            ],
            "favoriteTeamId": [
                643
            ],
            "teamData": [
                78
            ],
            "decrementedTeamData": [
                78
            ],
            "setData": [
                81
            ],
            "decrementedSetData": [
                81
            ],
            "seriesData": [
                80
            ],
            "decrementedSeriesData": [
                80
            ],
            "bonusData": [
                69
            ],
            "intervalData": [
                72
            ],
            "momentData": [
                71
            ],
            "specialNFTData": [
                82
            ],
            "__typename": [
                643
            ]
        },
        "CollectorScorePts": {
            "teamCompletionPts": [
                310
            ],
            "setCompletionPts": [
                310
            ],
            "seriesPts": [
                310
            ],
            "totalPts": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "CollectorScoreRequestBonusGroup": {
            "name": [
                643
            ],
            "bonusIds": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CollectorScoreTeamCompletion": {
            "teamId": [
                308
            ],
            "teamName": [
                643
            ],
            "teamScore": [
                310
            ],
            "seriesCounts": [
                83
            ],
            "__typename": [
                643
            ]
        },
        "CollectorSeriesCount": {
            "total": [
                310
            ],
            "title": [
                643
            ],
            "challengeCounts": [
                70
            ],
            "__typename": [
                643
            ]
        },
        "CollectorSeriesData": {
            "seriesNumber": [
                310
            ],
            "title": [
                643
            ],
            "challengeTitle": [
                643
            ],
            "commonBase": [
                79
            ],
            "commonSE": [
                79
            ],
            "commonPromo": [
                79
            ],
            "fandom": [
                79
            ],
            "rare": [
                79
            ],
            "legendary": [
                79
            ],
            "anthology": [
                79
            ],
            "__typename": [
                643
            ]
        },
        "CollectorSetData": {
            "setId": [
                308
            ],
            "setImage": [
                643
            ],
            "setName": [
                643
            ],
            "seriesNumber": [
                310
            ],
            "total": [
                310
            ],
            "owned": [
                310
            ],
            "isComplete": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "CollectorSpecialNFT": {
            "flowId": [
                310
            ],
            "flowSetId": [
                310
            ],
            "teamId": [
                643
            ],
            "acquiredAt": [
                662
            ],
            "momentTopshotScore": [
                380
            ],
            "__typename": [
                643
            ]
        },
        "CollectorTeamSeriesCounts": {
            "seriesNumber": [
                310
            ],
            "owned": [
                310
            ],
            "total": [
                310
            ],
            "isComplete": [
                31
            ],
            "players": [
                74
            ],
            "__typename": [
                643
            ]
        },
        "CompleteCampaignEventInput": {
            "category": [
                643
            ],
            "context": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CompleteCampaignEventResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "CompletedUserChallenge": {
            "challenge": [
                696
            ],
            "rewardStatus": [
                52
            ],
            "__typename": [
                643
            ]
        },
        "ConfirmPackPurchaseError": {},
        "ConfirmPackPurchaseInput": {
            "receipt": [
                643
            ],
            "orderID": [
                643
            ],
            "appStoreProductID": [
                643
            ],
            "paymentProvider": [
                479
            ],
            "__typename": [
                643
            ]
        },
        "ConfirmPackPurchaseResponse": {
            "error": [
                87
            ],
            "orderID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "CountSummary": {
            "count": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "CreateBulkMomentTradeInRequestInput": {
            "momentIDs": [
                308
            ],
            "momentFlowIDs": [
                643
            ],
            "redirectURL": [
                643
            ],
            "title": [
                643
            ],
            "image": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateBulkMomentTradeInRequestResponse": {
            "RequestID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateDropSquadError": {},
        "CreateDropSquadInput": {
            "packListingID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "CreateDropSquadResponse": {
            "dropSquadID": [
                308
            ],
            "error": [
                93
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentGroupInput": {
            "name": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentGroupResponse": {
            "momentGroup": [
                365
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentSaleInput": {
            "momentID": [
                643
            ],
            "price": [
                507
            ],
            "momentFlowID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "momentMetaInput": [
                376
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentSaleResponse": {
            "orderID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentTradeInRequestInput": {
            "momentID": [
                643
            ],
            "momentFlowID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "momentTitle": [
                643
            ],
            "momentImage": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentTradeInRequestResponse": {
            "RequestID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentTransferRequestInput": {
            "momentID": [
                643
            ],
            "momentFlowID": [
                643
            ],
            "receiverDapperID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "momentTitle": [
                643
            ],
            "momentImage": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentTransferRequestInputV2": {
            "momentID": [
                643
            ],
            "momentFlowID": [
                643
            ],
            "receiverDapperID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "momentTitle": [
                643
            ],
            "momentImage": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentTransferRequestResponse": {
            "ID": [
                643
            ],
            "validation": [
                390
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentTransferRequestResult": {
            "on_CreateMomentTransferRequestSuccess": [
                106
            ],
            "on_AccountFirstPurchaseAgeError": [
                0
            ],
            "on_MomentAgeError": [
                363
            ],
            "on_InsufficientMomentsError": [
                309
            ],
            "__typename": [
                643
            ]
        },
        "CreateMomentTransferRequestSuccess": {
            "ID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreatePackPurchaseIntentInput": {
            "packListingID": [
                643
            ],
            "quantity": [
                310
            ],
            "recaptchaToken": [
                643
            ],
            "queueID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "CreatePackPurchaseIntentResponse": {
            "orderID": [
                643
            ],
            "error": [
                109
            ],
            "__typename": [
                643
            ]
        },
        "CreatePackPurchaseIntentResponseError": {},
        "CreateVariableChallengeSubmissionInput": {
            "challengeID": [
                308
            ],
            "slots": [
                729
            ],
            "__typename": [
                643
            ]
        },
        "CreateWatchlistInput": {
            "title": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "Currency": {},
        "Cursor": {},
        "CursorDirection": {},
        "Date": {},
        "DateRangeFilter": {
            "start": [
                662
            ],
            "end": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "DateRangeFilterInput": {
            "start": [
                662
            ],
            "end": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "DeleteMomentGroupInput": {
            "momentGroupID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "DeleteMomentGroupResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "DeleteShowcaseInput": {
            "showcaseID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "DeleteShowcaseResponse": {
            "deletedShowcaseID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "DeleteWatchlistInput": {
            "id": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "DeleteWatchlistResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "Direction": {},
        "DropSquad": {
            "id": [
                308
            ],
            "packListingID": [
                308
            ],
            "members": [
                126
            ],
            "__typename": [
                643
            ]
        },
        "DropSquadMember": {
            "role": [
                127
            ],
            "joinedAt": [
                662
            ],
            "user": [
                688
            ],
            "__typename": [
                643
            ]
        },
        "DropSquadMemberRole": {},
        "DuplicateMomentGroupInput": {
            "name": [
                643
            ],
            "momentGroupFromID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "DuplicateMomentGroupResponse": {
            "momentGroup": [
                365
            ],
            "__typename": [
                643
            ]
        },
        "Edition": {
            "id": [
                308
            ],
            "set": [
                610
            ],
            "play": [
                482
            ],
            "setPlay": [
                361
            ],
            "parallelSetPlay": [
                362
            ],
            "assetPathPrefix": [
                643
            ],
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "circulationCount": [
                310
            ],
            "flowRetired": [
                31
            ],
            "state": [
                140
            ],
            "tags": [
                650
            ],
            "parallelID": [
                310
            ],
            "challengeID": [
                308
            ],
            "momentTier": [
                379
            ],
            "tier": [
                379
            ],
            "parallels": [
                130
            ],
            "__typename": [
                643
            ]
        },
        "EditionAverageSaleData": {
            "averagePrice": [
                507
            ],
            "numDays": [
                310
            ],
            "numSales": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "EditionFilterInput": {
            "bySetIDs": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "EditionFilters": {
            "bySetIDs": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "EditionListing": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "sortID": [
                633
            ],
            "set": [
                610
            ],
            "play": [
                482
            ],
            "setPlay": [
                361
            ],
            "parallelSetPlay": [
                362
            ],
            "assetPathPrefix": [
                643
            ],
            "priceRange": [
                508
            ],
            "editionListingCount": [
                310
            ],
            "uniqueSellerCount": [
                310
            ],
            "userOwnedEditionsCount": [
                310
            ],
            "averageSaleData": [
                131
            ],
            "watchlistData": [
                743
            ],
            "tier": [
                379
            ],
            "parallelID": [
                310
            ],
            "parallels": [
                134
            ],
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "EditionListingFilterInput": {
            "bySets": [
                308
            ],
            "byPlayers": [
                308
            ],
            "byTeams": [
                308
            ],
            "byPrimaryPlayerPosition": [
                500
            ],
            "byPrice": [
                510
            ],
            "byPower": [
                312
            ],
            "byGameDate": [
                117
            ],
            "byCreatedAt": [
                117
            ],
            "byPlayerGameScores": [
                498
            ],
            "bySetVisuals": [
                734
            ],
            "byMomentTiers": [
                379
            ],
            "byPlayIDs": [
                308
            ],
            "bySeries": [
                308
            ],
            "byPlayTagIDs": [
                308
            ],
            "bySetPlayTagIDs": [
                308
            ],
            "bySerialNumber": [
                312
            ],
            "byPlayCategory": [
                308
            ],
            "byActiveChallenge": [
                308
            ],
            "byLeagues": [
                326
            ],
            "byEditions": [
                143
            ],
            "byParallelIDs": [
                310
            ],
            "byRecommendation": [
                536
            ],
            "__typename": [
                643
            ]
        },
        "EditionListingSortType": {},
        "EditionListings": {
            "size": [
                310
            ],
            "data": [
                134
            ],
            "__typename": [
                643
            ]
        },
        "EditionListingsFilters": {
            "bySets": [
                308
            ],
            "byPlayers": [
                308
            ],
            "byTeams": [
                308
            ],
            "byPrimaryPlayerPosition": [
                500
            ],
            "byPrice": [
                509
            ],
            "bySerialNumber": [
                311
            ],
            "byPower": [
                311
            ],
            "byGameDate": [
                116
            ],
            "byCreatedAt": [
                116
            ],
            "byPlayerGameScores": [
                497
            ],
            "byPlayTagIDs": [
                308
            ],
            "bySetPlayTagIDs": [
                308
            ],
            "bySetVisuals": [
                734
            ],
            "byMomentTiers": [
                379
            ],
            "byPlayIDs": [
                308
            ],
            "bySeries": [
                308
            ],
            "byPlayCategory": [
                308
            ],
            "byActiveChallenge": [
                308
            ],
            "byLeagues": [
                326
            ],
            "byEditions": [
                142
            ],
            "__typename": [
                643
            ]
        },
        "EditionSlot": {
            "edition": [
                130
            ],
            "filledMomentIDs": [
                643
            ],
            "lockedMomentIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "EditionState": {},
        "Editions": {
            "size": [
                310
            ],
            "data": [
                130
            ],
            "__typename": [
                643
            ]
        },
        "EditionsFilter": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "EditionsFilterInput": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "ElasticsearchResponse": {
            "took": [
                310
            ],
            "timedOut": [
                31
            ],
            "hits": [
                145
            ],
            "aggregations": [
                335
            ],
            "__typename": [
                643
            ]
        },
        "ElasticsearchResponseHits": {
            "total": [
                147
            ],
            "maxScore": [
                157
            ],
            "hits": [
                146
            ],
            "__typename": [
                643
            ]
        },
        "ElasticsearchResponseHitsHits": {
            "index": [
                643
            ],
            "id": [
                643
            ],
            "score": [
                157
            ],
            "source": [
                335
            ],
            "__typename": [
                643
            ]
        },
        "ElasticsearchResponseHitsTotal": {
            "value": [
                310
            ],
            "relation": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "ExchangeRate": {
            "from": [
                149
            ],
            "to": [
                149
            ],
            "rate": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "ExchangeRateCurrency": {},
        "ExchangeRateInput": {
            "from": [
                149
            ],
            "to": [
                149
            ],
            "__typename": [
                643
            ]
        },
        "ExchangeRefreshTokenInput": {
            "refreshToken": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "ExchangeRefreshTokenResponse": {
            "idToken": [
                643
            ],
            "newRefreshToken": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "Expression": {
            "feature": [
                349
            ],
            "value": [
                310
            ],
            "comparator": [
                643
            ],
            "result": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "ExpressionInput": {
            "feature": [
                349
            ],
            "value": [
                310
            ],
            "comparator": [
                643
            ],
            "result": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "FeatureFlagKey": {},
        "FirstPurchaseReferral": {
            "packOrder": [
                458
            ],
            "p2pOrder": [
                428
            ],
            "__typename": [
                643
            ]
        },
        "Float": {},
        "ForSaleFilter": {},
        "GetActiveChallengesResponse": {
            "challenges": [
                696
            ],
            "__typename": [
                643
            ]
        },
        "GetActiveUserSubmissionsByMomentIDsInput": {
            "momentIDs": [
                308
            ],
            "ignoreSubmissionID": [
                308
            ],
            "variableChallengeCategories": [
                720
            ],
            "submissionStatuses": [
                731
            ],
            "slotTypes": [
                725
            ],
            "__typename": [
                643
            ]
        },
        "GetActiveUserSubmissionsByMomentIDsResponse": {
            "momentsUsageData": [
                391
            ],
            "__typename": [
                643
            ]
        },
        "GetActivityResponse": {
            "data": [
                2
            ],
            "__typename": [
                643
            ]
        },
        "GetChallengeByIDInput": {
            "challengeID": [
                308
            ],
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetCodexInput": {
            "userID": [
                308
            ],
            "filters": [
                64
            ],
            "__typename": [
                643
            ]
        },
        "GetCodexResponse": {
            "codex": [
                65
            ],
            "totalUserOwnedMoments": [
                310
            ],
            "numSetsInProgress": [
                310
            ],
            "numSetsCompleted": [
                310
            ],
            "totalUniqueEditionsOwned": [
                310
            ],
            "filters": [
                63
            ],
            "__typename": [
                643
            ]
        },
        "GetCodexSetInput": {
            "setID": [
                308
            ],
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetCodexSetResponse": {
            "codexSetWithEditions": [
                66
            ],
            "__typename": [
                643
            ]
        },
        "GetCollectorScoreRequest": {
            "dapperID": [
                643
            ],
            "bonusGroups": [
                77
            ],
            "incrementByMoment": [
                643
            ],
            "incrementSinceDate": [
                662
            ],
            "incrementByTeam": [
                643
            ],
            "decrementByMoment": [
                643
            ],
            "decrementByMoments": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetDropEligibilityInput": {
            "packListingId": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetDropEligibilityResponse": {
            "normal": [
                310
            ],
            "rare": [
                310
            ],
            "legendary": [
                310
            ],
            "totalSpend": [
                310
            ],
            "eligible": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "GetEditionInput": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetEditionListingInput": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "userID": [
                308
            ],
            "parallelID": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetEditionListingResponse": {
            "data": [
                134
            ],
            "lowestAskMoment": [
                354
            ],
            "__typename": [
                643
            ]
        },
        "GetEditionResponse": {
            "edition": [
                130
            ],
            "__typename": [
                643
            ]
        },
        "GetEditionsWatcherCountInput": {
            "editions": [
                739
            ],
            "__typename": [
                643
            ]
        },
        "GetEditionsWatcherCountResponse": {
            "editions": [
                736
            ],
            "__typename": [
                643
            ]
        },
        "GetExchangeRatesInput": {
            "currencies": [
                150
            ],
            "__typename": [
                643
            ]
        },
        "GetExchangeRatesResponse": {
            "exchangeRates": [
                148
            ],
            "__typename": [
                643
            ]
        },
        "GetGiftedMomentURLInput": {
            "momentID": [
                643
            ],
            "transferID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetGiftedMomentURLResponse": {
            "gifterID": [
                643
            ],
            "momentID": [
                643
            ],
            "redemptionUrl": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetHotEditionListingsInput": {
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetHotEditionListingsResponse": {
            "listings": [
                134
            ],
            "__typename": [
                643
            ]
        },
        "GetKYCStatusInput": {
            "minFresh": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetKYCStatusResponse": {
            "kycStatus": [
                317
            ],
            "kycType": [
                318
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardEntryInput": {
            "kind": [
                322
            ],
            "id": [
                643
            ],
            "flowAddress": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardEntryRelationshipInput": {
            "kind": [
                322
            ],
            "flowAddress": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardEntryRelationshipResponse": {
            "relationships": [
                321
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardEntryResponse": {
            "entry": [
                320
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardInput": {
            "kind": [
                322
            ],
            "id": [
                643
            ],
            "sortBy": [
                324
            ],
            "pagination": [
                476
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardPotentialInput": {
            "flowAddress": [
                643
            ],
            "momentIds": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardPotentialResponse": {
            "playerLeaderboards": [
                323
            ],
            "teamLeaderboards": [
                323
            ],
            "__typename": [
                643
            ]
        },
        "GetLeaderboardResponse": {
            "leaderboard": [
                319
            ],
            "pagination": [
                475
            ],
            "count": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetMarketplaceTransactionEditionStatsInput": {
            "edition": [
                143
            ],
            "serialNumber": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetMarketplaceTransactionEditionStatsResponse": {
            "editionStats": [
                342
            ],
            "__typename": [
                643
            ]
        },
        "GetMintedMomentProgressForQuestResponse": {
            "id": [
                308
            ],
            "current": [
                310
            ],
            "total": [
                310
            ],
            "complete": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "GetMintedMomentsInput": {
            "momentIds": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetMintedMomentsResponse": {
            "data": [
                354
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentGroupInput": {
            "momentGroupSlug": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentGroupResponse": {
            "momentGroup": [
                365
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentTradeInRequestInput": {
            "id": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentTradeInRequestResponse": {
            "tradeInRequest": [
                381
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentTransferRequestInput": {
            "ID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentTransferRequestResponse": {
            "data": [
                386
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentsTradeInRequestInput": {
            "id": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentsTradeInRequestResponse": {
            "tradeInRequest": [
                393
            ],
            "__typename": [
                643
            ]
        },
        "GetMomentsWithHighestBurnedTopshotScoreResponse": {
            "moments": [
                692
            ],
            "__typename": [
                643
            ]
        },
        "GetMyActiveChallengesResponse": {
            "challenges": [
                696
            ],
            "__typename": [
                643
            ]
        },
        "GetMyCompletedChallengesResponse": {
            "completedUserChallenges": [
                86
            ],
            "__typename": [
                643
            ]
        },
        "GetMyProfileResponse": {
            "publicInfo": [
                704
            ],
            "email": [
                643
            ],
            "segmentId": [
                643
            ],
            "moments": [
                354
            ],
            "momentCount": [
                310
            ],
            "referredByUserID": [
                643
            ],
            "tradeTicketCount": [
                310
            ],
            "marketingCampaign": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetMyReferralResponse": {
            "referredByUser": [
                688
            ],
            "firstPurchase": [
                156
            ],
            "__typename": [
                643
            ]
        },
        "GetMyShowcasesResponse": {
            "showcases": [
                624
            ],
            "__typename": [
                643
            ]
        },
        "GetOfferInput": {
            "id": [
                310
            ],
            "offerAvailableTxHash": [
                643
            ],
            "offerCompletedTxHash": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetOnChainPackInput": {
            "packID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetOnChainPackResponse": {
            "onChainPack": [
                410
            ],
            "__typename": [
                643
            ]
        },
        "GetOrderResponse": {
            "order": [
                417
            ],
            "__typename": [
                643
            ]
        },
        "GetPackListingEligibilityV2Input": {
            "packListingId": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetPackListingEligibilityV2Response": {
            "packListingId": [
                308
            ],
            "listingEligibility": [
                332
            ],
            "levelEligibility": [
                331
            ],
            "__typename": [
                643
            ]
        },
        "GetPackListingInput": {
            "packListingId": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetPackListingResponse": {
            "data": [
                439
            ],
            "__typename": [
                643
            ]
        },
        "GetPackSummaryBallerStatusInput": {
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetPackSummaryProgressInput": {
            "userID": [
                308
            ],
            "withPacks": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetPackSummaryProgressResponse": {
            "challengesProgress": [
                57
            ],
            "setsProgress": [
                619
            ],
            "__typename": [
                643
            ]
        },
        "GetPacklistingEligibilityDetailsInput": {
            "packListingId": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetPacksInput": {
            "packIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetPacksResponse": {
            "packs": [
                468
            ],
            "__typename": [
                643
            ]
        },
        "GetPinnedMomentsRequest": {
            "dapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetPinnedMomentsResponse": {
            "moments": [
                354
            ],
            "__typename": [
                643
            ]
        },
        "GetPlayInput": {
            "playID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetPlayResponse": {
            "play": [
                482
            ],
            "__typename": [
                643
            ]
        },
        "GetPlayerDataWithCurrentStatsInput": {
            "nbaPlayerID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetPlayerDataWithCurrentStatsResponse": {
            "playerData": [
                496
            ],
            "playerSeasonAverageScores": [
                642
            ],
            "__typename": [
                643
            ]
        },
        "GetSetInput": {
            "setID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetSetResponse": {
            "set": [
                610
            ],
            "__typename": [
                643
            ]
        },
        "GetSoftCurrencyPriceResponse": {
            "price": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetSpecialNFTResponse": {
            "nft": [
                636
            ],
            "__typename": [
                643
            ]
        },
        "GetSpecialNFTsResponse": {
            "nfts": [
                636
            ],
            "__typename": [
                643
            ]
        },
        "GetTagsInput": {
            "byTagLevel": [
                651
            ],
            "__typename": [
                643
            ]
        },
        "GetTagsResponse": {
            "tags": [
                650
            ],
            "__typename": [
                643
            ]
        },
        "GetTeamSeriesCompletionProgressResponse": {
            "seriesProgress": [
                659
            ],
            "contemporaryProgress": [
                656
            ],
            "allProgress": [
                656
            ],
            "__typename": [
                643
            ]
        },
        "GetTickerDataResponse": {
            "uniquePurchaseCount": [
                310
            ],
            "uniqueBuyerCount": [
                310
            ],
            "totalVolume": [
                507
            ],
            "biggestSales": [
                557
            ],
            "mostPurchasedPlayer": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetTitlesResponse": {
            "titles": [
                663
            ],
            "__typename": [
                643
            ]
        },
        "GetTopNBurnedEditionsResponse": {
            "editions": [
                32
            ],
            "__typename": [
                643
            ]
        },
        "GetTopshotScoreAllTeamsSeriesCompletionProgressRequest": {
            "dapperID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetTopshotScoreAllTeamsSeriesCompletionProgressResponse": {
            "teamSeriesCompletionProgress": [
                660
            ],
            "__typename": [
                643
            ]
        },
        "GetTopshotScoreRequest": {
            "dapperID": [
                308
            ],
            "filters": [
                669
            ],
            "bonusGroups": [
                670
            ],
            "__typename": [
                643
            ]
        },
        "GetTopshotScoreTeamSeriesCompletionRequest": {
            "dapperID": [
                308
            ],
            "teamID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetTotalBurnedMomentCountByRarityResponse": {
            "counts": [
                671
            ],
            "__typename": [
                643
            ]
        },
        "GetTotalBurnedMomentCountResponse": {
            "count": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetTotalBurnedMomentsResponse": {
            "totalBurnedMoments": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetTransferEligibilityInput": {
            "momentFlowID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetTransferEligibilityResponse": {
            "accountFirstPurchaseAge": [
                401
            ],
            "accountMomentCount": [
                401
            ],
            "momentAge": [
                401
            ],
            "__typename": [
                643
            ]
        },
        "GetUserBallerStatusRequest": {
            "dapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserCodexInput": {
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetUserCodexResponse": {
            "codex": [
                65
            ],
            "totalUserOwnedMoments": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetUserCoolDownsResponse": {
            "p2pPurchaseRemainingSeconds": [
                310
            ],
            "p2pListingRemainingSeconds": [
                310
            ],
            "p2pDelistingRemainingSeconds": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetUserEligibilityForJoiningPackListingQueueInput": {
            "dapperID": [
                308
            ],
            "packListingID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetUserEligibilityForJoiningPackListingQueueResponse": {
            "isEligibleToJoin": [
                31
            ],
            "ineligibilityReason": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserMomentListingsInput": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetUserOrdersResponse": {
            "orders": [
                420
            ],
            "__typename": [
                643
            ]
        },
        "GetUserOwnedSpecialNFTsInput": {
            "flowAddress": [
                643
            ],
            "type": [
                637
            ],
            "__typename": [
                643
            ]
        },
        "GetUserOwnedSpecialNFTsResponse": {
            "nfts": [
                636
            ],
            "__typename": [
                643
            ]
        },
        "GetUserP2PListingOrderInput": {
            "orderID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserP2PListingOrderResponse": {
            "data": [
                421
            ],
            "__typename": [
                643
            ]
        },
        "GetUserP2PListingOrdersResponse": {
            "data": [
                424
            ],
            "__typename": [
                643
            ]
        },
        "GetUserP2PPurchaseOrderInput": {
            "orderID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserP2PPurchaseOrderResponse": {
            "data": [
                428
            ],
            "__typename": [
                643
            ]
        },
        "GetUserP2PPurchaseOrdersResponse": {
            "data": [
                432
            ],
            "__typename": [
                643
            ]
        },
        "GetUserPackOrderByDapperIdInput": {
            "orderId": [
                643
            ],
            "dapperId": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserPackOrderInput": {
            "orderId": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserPackOrderResponse": {
            "data": [
                458
            ],
            "__typename": [
                643
            ]
        },
        "GetUserPackOrdersResponse": {
            "data": [
                459
            ],
            "__typename": [
                643
            ]
        },
        "GetUserPendingTxStatesResponse": {
            "hasPendingPackOpenRequests": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "GetUserProfileInput": {
            "dapperID": [
                308
            ],
            "flowAddress": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserProfileResponse": {
            "publicInfo": [
                704
            ],
            "moments": [
                354
            ],
            "momentCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetUserPurchaseStatsResponse": {
            "packsPurchased": [
                310
            ],
            "starterPacksPurchased": [
                310
            ],
            "boosterPacksPurchased": [
                310
            ],
            "momentsPurchased": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GetUserScoresForAllStarsBurningLeaderboardResponse": {
            "users": [
                694
            ],
            "__typename": [
                643
            ]
        },
        "GetUserScoresForRisingStarsLockingLeaderboardResponse": {
            "users": [
                694
            ],
            "__typename": [
                643
            ]
        },
        "GetUserSettingsResponse": {
            "userSettings": [
                712
            ],
            "__typename": [
                643
            ]
        },
        "GetUserShowcasesInput": {
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetUserShowcasesResponse": {
            "showcases": [
                624
            ],
            "__typename": [
                643
            ]
        },
        "GetUserStatsByLocationInput": {
            "country": [
                643
            ],
            "city": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserStatsByLocationResponse": {
            "data": [
                333
            ],
            "__typename": [
                643
            ]
        },
        "GetUserTitlesRequest": {
            "dapperID": [
                308
            ],
            "titleID": [
                308
            ],
            "categoryID": [
                308
            ],
            "limit": [
                310
            ],
            "isSelected": [
                31
            ],
            "isUnseen": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "GetUserTitlesResponse": {
            "userTitles": [
                714
            ],
            "__typename": [
                643
            ]
        },
        "GetUserTopshotTagsRequest": {
            "dapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GetUserTopshotTagsResponse": {
            "tags": [
                715
            ],
            "__typename": [
                643
            ]
        },
        "GetUsersWatchlistsResponse": {
            "size": [
                310
            ],
            "data": [
                742
            ],
            "__typename": [
                643
            ]
        },
        "GetUsersWithHighestBurnedTopshotScoreResponse": {
            "users": [
                694
            ],
            "__typename": [
                643
            ]
        },
        "GetUsersWithHighestNumberOfBurnedMomentsResponse": {
            "users": [
                693
            ],
            "__typename": [
                643
            ]
        },
        "GetVendorMomentListingInput": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "GetVendorMomentListingResponse": {
            "data": [
                732
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsAdditionalMetadata": {
            "image": [
                643
            ],
            "preview": [
                643
            ],
            "creatorName": [
                643
            ],
            "externalUrl": [
                643
            ],
            "ipfsImageHash": [
                643
            ],
            "sha256ImageHash": [
                643
            ],
            "ipfsMetadataHashes": [
                643
            ],
            "teamId": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsBadge": {
            "id": [
                310
            ],
            "name": [
                643
            ],
            "assetUri": [
                643
            ],
            "badgeToListingAssignment": [
                294
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsBadgeToListingAssignment": {
            "index": [
                310
            ],
            "createdDate": [
                643
            ],
            "updatedDate": [
                643
            ],
            "listingId": [
                310
            ],
            "badgeId": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsBid": {
            "id": [
                310
            ],
            "walletID": [
                643
            ],
            "price": [
                157
            ],
            "createdDate": [
                643
            ],
            "listingID": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsListingBidsInput": {
            "id": [
                310
            ],
            "limit": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsListingBidsResponse": {
            "bids": [
                295
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsListingType": {},
        "GiglabsMarketPlaceListingResponse": {
            "id": [
                310
            ],
            "uuid": [
                643
            ],
            "orgID": [
                310
            ],
            "seriesID": [
                310
            ],
            "setName": [
                643
            ],
            "setIndex": [
                310
            ],
            "listingType": [
                643
            ],
            "status": [
                643
            ],
            "active": [
                31
            ],
            "featured": [
                31
            ],
            "banner": [
                31
            ],
            "description": [
                643
            ],
            "tags": [
                643
            ],
            "assetUri": [
                643
            ],
            "assetPreviewUri": [
                643
            ],
            "assetStorageUri": [
                643
            ],
            "assetPreviewStorageUri": [
                643
            ],
            "assetFileType": [
                643
            ],
            "additionalImages": [
                643
            ],
            "price": [
                157
            ],
            "reservePrice": [
                157
            ],
            "maxBid": [
                157
            ],
            "maxBidWalletID": [
                643
            ],
            "nextBid": [
                157
            ],
            "mintQuantity": [
                310
            ],
            "hasUnlockableContent": [
                31
            ],
            "unlockableContentDesc": [
                643
            ],
            "publishDate": [
                643
            ],
            "saleStartDate": [
                643
            ],
            "saleEndDate": [
                643
            ],
            "requires": [
                643
            ],
            "requiresOperator": [
                643
            ],
            "modifiers": [
                643
            ],
            "modifierType": [
                643
            ],
            "modifierAmount": [
                310
            ],
            "shippingAddressRequired": [
                31
            ],
            "createdDate": [
                643
            ],
            "updatedDate": [
                643
            ],
            "purchaseLimit": [
                310
            ],
            "reserveMet": [
                31
            ],
            "additionalMetadata": [
                292
            ],
            "badges": [
                293
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsMarketPlaceListingsResponse": {
            "records": [
                299
            ],
            "count": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "GiglabsMarketplaceListingsInput": {
            "listingType": [
                298
            ],
            "seriesID": [
                310
            ],
            "limit": [
                310
            ],
            "offset": [
                310
            ],
            "search": [
                643
            ],
            "order": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "GroupMomentOrder": {
            "id": [
                308
            ],
            "momentGroupID": [
                643
            ],
            "momentID": [
                643
            ],
            "order": [
                157
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "HasBallerStatusProcessedPackFulfillmentsInput": {
            "packIDs": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "HasUnreadActivitiesInput": {
            "byActivityType": [
                8
            ],
            "__typename": [
                643
            ]
        },
        "HasUnreadActivitiesResponse": {
            "hasUnreadActivities": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "HideOffersInput": {
            "offerIDs": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "HideOffersResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "ID": {},
        "InsufficientMomentsError": {
            "remainingMomentCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "Int": {},
        "IntegerRangeFilter": {
            "min": [
                310
            ],
            "max": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "IntegerRangeFilterInput": {
            "min": [
                310
            ],
            "max": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "JoinDropSquadError": {},
        "JoinDropSquadInput": {
            "dropSquadID": [
                308
            ],
            "packListingID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "JoinDropSquadResponse": {
            "dropSquadID": [
                308
            ],
            "error": [
                313
            ],
            "__typename": [
                643
            ]
        },
        "KYCCached": {
            "kycStatus": [
                317
            ],
            "kycType": [
                318
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "KYCStatus": {},
        "KycType": {},
        "Leaderboard": {
            "id": [
                643
            ],
            "kind": [
                322
            ],
            "entries": [
                320
            ],
            "on_PlayerLeaderboard": [
                499
            ],
            "on_TeamLeaderboard": [
                657
            ],
            "__typename": [
                643
            ]
        },
        "LeaderboardEntry": {
            "score": [
                310
            ],
            "rank": [
                310
            ],
            "on_LeaderboardUser": [
                325
            ],
            "__typename": [
                643
            ]
        },
        "LeaderboardEntryRelationship": {
            "leaderboardID": [
                643
            ],
            "score": [
                310
            ],
            "rank": [
                310
            ],
            "entryCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "LeaderboardKind": {},
        "LeaderboardPotential": {
            "kind": [
                322
            ],
            "id": [
                643
            ],
            "scoreAdded": [
                310
            ],
            "scoreAddedFromBonus": [
                310
            ],
            "scoreTotal": [
                310
            ],
            "rank": [
                310
            ],
            "totalUsers": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "LeaderboardSortType": {},
        "LeaderboardUser": {
            "flowAddress": [
                643
            ],
            "score": [
                310
            ],
            "rank": [
                310
            ],
            "username": [
                643
            ],
            "profileImageURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "League": {},
        "LeaveDropSquadError": {},
        "LeaveDropSquadInput": {
            "dropSquadID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "LeaveDropSquadResponse": {
            "error": [
                327
            ],
            "__typename": [
                643
            ]
        },
        "Level": {
            "id": [
                643
            ],
            "name": [
                643
            ],
            "waitingRoom": [
                735
            ],
            "requirements": [
                549
            ],
            "bonuses": [
                30
            ],
            "maxOrderQuantity": [
                351
            ],
            "__typename": [
                643
            ]
        },
        "LevelEligibility": {
            "isEligible": [
                31
            ],
            "levelName": [
                643
            ],
            "levelID": [
                643
            ],
            "requirements": [
                549
            ],
            "maxOrderQuantity": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "ListingEligibility": {
            "isEligible": [
                31
            ],
            "requirements": [
                549
            ],
            "__typename": [
                643
            ]
        },
        "Location": {
            "country": [
                643
            ],
            "city": [
                643
            ],
            "collectorsCount": [
                310
            ],
            "totalMomentsOwned": [
                310
            ],
            "totalTopshotScore": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "LockStatusFilter": {},
        "Map": {},
        "MarkActivitiesAsReadInput": {
            "activityIDs": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "MarkActivitiesAsReadResponse": {
            "ok": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "MarkAllActivitiesAsReadInput": {
            "activitiesBefore": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "MarkAllActivitiesAsReadResponse": {
            "ok": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "MarkAllUserTitlesAsSeenResponse": {
            "ok": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "MarketplaceTransaction": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "sortID": [
                633
            ],
            "seller": [
                704
            ],
            "buyer": [
                704
            ],
            "price": [
                507
            ],
            "moment": [
                354
            ],
            "txHash": [
                643
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "MarketplaceTransactionEditionStats": {
            "totalSales": [
                310
            ],
            "mostRecentEditionSale": [
                395
            ],
            "averageSalePrice": [
                507
            ],
            "averageSalePriceInSerialNumRange": [
                507
            ],
            "highestSalePrice": [
                507
            ],
            "__typename": [
                643
            ]
        },
        "MarketplaceTransactionFilters": {
            "byEditions": [
                142
            ],
            "byMoments": [
                308
            ],
            "byTeams": [
                308
            ],
            "byPrice": [
                509
            ],
            "__typename": [
                643
            ]
        },
        "MarketplaceTransactionFiltersInput": {
            "byEditions": [
                143
            ],
            "byMoments": [
                308
            ],
            "byTeams": [
                308
            ],
            "byPrice": [
                510
            ],
            "byParallels": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "MarketplaceTransactionSearchSummary": {
            "filters": [
                343
            ],
            "sortBy": [
                347
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "MarketplaceTransactionSearchSummaryResponse": {
            "data": [
                345
            ],
            "__typename": [
                643
            ]
        },
        "MarketplaceTransactionSortType": {},
        "MarketplaceTransactions": {
            "size": [
                310
            ],
            "data": [
                341
            ],
            "__typename": [
                643
            ]
        },
        "MaxOrderQuantityFeature": {},
        "MaxOrderQuantityOperator": {},
        "MaxOrderQuantityV2": {
            "operator": [
                350
            ],
            "expressions": [
                153
            ],
            "__typename": [
                643
            ]
        },
        "MaxOrderQuantityV2Input": {
            "operator": [
                350
            ],
            "expressions": [
                154
            ],
            "__typename": [
                643
            ]
        },
        "Me": {
            "dapperID": [
                308
            ],
            "flowAddress": [
                643
            ],
            "username": [
                643
            ],
            "favoriteTeamID": [
                643
            ],
            "country": [
                643
            ],
            "city": [
                643
            ],
            "shop": [
                620
            ],
            "__typename": [
                643
            ]
        },
        "MintedMoment": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "sortID": [
                633
            ],
            "set": [
                610
            ],
            "play": [
                482
            ],
            "flowId": [
                643
            ],
            "flowSerialNumber": [
                643
            ],
            "price": [
                507
            ],
            "forSale": [
                31
            ],
            "listingOrderID": [
                643
            ],
            "userListingID": [
                643
            ],
            "owner": [
                688
            ],
            "ownerV2": [
                377
            ],
            "assetPathPrefix": [
                643
            ],
            "setPlay": [
                361
            ],
            "createdAt": [
                662
            ],
            "acquiredAt": [
                662
            ],
            "destroyedAt": [
                662
            ],
            "packListingID": [
                643
            ],
            "tags": [
                650
            ],
            "groupMomentOrder": [
                302
            ],
            "momentGroups": [
                365
            ],
            "topshotScore": [
                380
            ],
            "lastPurchasePrice": [
                507
            ],
            "tier": [
                379
            ],
            "lockExpiryAt": [
                662
            ],
            "isLocked": [
                31
            ],
            "parallelID": [
                310
            ],
            "parallelSetPlay": [
                362
            ],
            "__typename": [
                643
            ]
        },
        "MintedMomentFilterInput": {
            "byOwnerDapperID": [
                643
            ],
            "bySets": [
                308
            ],
            "bySeries": [
                308
            ],
            "byPlays": [
                308
            ],
            "byPlayers": [
                308
            ],
            "byTeams": [
                308
            ],
            "bySetVisuals": [
                734
            ],
            "byMomentTiers": [
                379
            ],
            "byForSale": [
                158
            ],
            "byPlayTagIDs": [
                308
            ],
            "bySetPlayTagIDs": [
                308
            ],
            "byMomentTagIDs": [
                308
            ],
            "byPlayCategory": [
                308
            ],
            "byPrimaryPlayerPosition": [
                500
            ],
            "byGameDate": [
                117
            ],
            "byCreatedAt": [
                117
            ],
            "byPlayerGameScores": [
                498
            ],
            "byPrice": [
                510
            ],
            "byActiveChallenge": [
                308
            ],
            "byLeagues": [
                326
            ],
            "byOwnerFlowAddress": [
                643
            ],
            "byEditions": [
                143
            ],
            "byGroupID": [
                308
            ],
            "byGroupSlug": [
                643
            ],
            "byPotentialTopshotScore": [
                31
            ],
            "byLockStatus": [
                334
            ],
            "byFlowID": [
                308
            ],
            "bySubeditionID": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "MintedMomentFilters": {
            "byOwnerDapperID": [
                643
            ],
            "bySets": [
                308
            ],
            "bySeries": [
                308
            ],
            "byPlays": [
                308
            ],
            "byPlayers": [
                308
            ],
            "byTeams": [
                308
            ],
            "bySetVisuals": [
                734
            ],
            "byMomentTiers": [
                379
            ],
            "byForSale": [
                158
            ],
            "byPlayTagIDs": [
                308
            ],
            "bySetPlayTagIDs": [
                308
            ],
            "byMomentTagIDs": [
                308
            ],
            "byPlayCategory": [
                308
            ],
            "byPrimaryPlayerPosition": [
                500
            ],
            "byGameDate": [
                116
            ],
            "byCreatedAt": [
                116
            ],
            "byPlayerGameScores": [
                497
            ],
            "byPrice": [
                509
            ],
            "byActiveChallenge": [
                308
            ],
            "byLeagues": [
                326
            ],
            "byOwnerFlowAddress": [
                643
            ],
            "byEditions": [
                142
            ],
            "byGroupID": [
                308
            ],
            "byGroupSlug": [
                643
            ],
            "byPotentialTopshotScore": [
                31
            ],
            "byLockStatus": [
                334
            ],
            "byFlowID": [
                308
            ],
            "bySubeditionID": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "MintedMomentResponse": {
            "data": [
                354
            ],
            "__typename": [
                643
            ]
        },
        "MintedMomentSearchSummary": {
            "filters": [
                356
            ],
            "sortBy": [
                359
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "MintedMomentSortType": {},
        "MintedMoments": {
            "size": [
                310
            ],
            "data": [
                354
            ],
            "__typename": [
                643
            ]
        },
        "MintedSetPlay": {
            "ID": [
                308
            ],
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "flowRetired": [
                31
            ],
            "circulationCount": [
                310
            ],
            "tags": [
                650
            ],
            "circulations": [
                614
            ],
            "__typename": [
                643
            ]
        },
        "MintedSetPlayParallel": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "parallelID": [
                310
            ],
            "circulations": [
                614
            ],
            "iconAssetURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "MomentAgeError": {
            "momentAgeMinutesLeft": [
                310
            ],
            "momentAgeSecondsLeft": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "MomentCountPerTeam": {
            "teamID": [
                643
            ],
            "momentCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "MomentGroup": {
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "id": [
                308
            ],
            "name": [
                643
            ],
            "slug": [
                643
            ],
            "order": [
                157
            ],
            "MomentsTotal": [
                310
            ],
            "Commons": [
                310
            ],
            "Rares": [
                310
            ],
            "Legendaries": [
                310
            ],
            "Fandoms": [
                310
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "groupMomentOrders": [
                302
            ],
            "__typename": [
                643
            ]
        },
        "MomentGroups": {
            "size": [
                310
            ],
            "data": [
                365
            ],
            "__typename": [
                643
            ]
        },
        "MomentListing": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "sortID": [
                633
            ],
            "set": [
                610
            ],
            "play": [
                482
            ],
            "assetPathPrefix": [
                643
            ],
            "circulationCount": [
                310
            ],
            "flowRetired": [
                31
            ],
            "listingType": [
                371
            ],
            "priceRange": [
                508
            ],
            "tags": [
                650
            ],
            "forSale": [
                31
            ],
            "vendorPreviousPrice": [
                507
            ],
            "vendorListingID": [
                308
            ],
            "momentListingCount": [
                310
            ],
            "limit": [
                310
            ],
            "mintedSetPlay": [
                361
            ],
            "setPlay": [
                361
            ],
            "momentListings": [
                698
            ],
            "watchedCount": [
                310
            ],
            "isWatched": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "MomentListingFilterInput": {
            "bySets": [
                308
            ],
            "byPlayers": [
                308
            ],
            "byTeams": [
                308
            ],
            "byPrimaryPlayerPosition": [
                500
            ],
            "byPrice": [
                510
            ],
            "bySerialNumber": [
                312
            ],
            "byPower": [
                312
            ],
            "byGameDate": [
                117
            ],
            "byCreatedAt": [
                117
            ],
            "byPlayerGameScores": [
                498
            ],
            "byListingType": [
                371
            ],
            "bySetVisuals": [
                734
            ],
            "byMomentTiers": [
                379
            ],
            "byPlayIDs": [
                308
            ],
            "bySeries": [
                308
            ],
            "byPlayTagIDs": [
                308
            ],
            "bySetPlayTagIDs": [
                308
            ],
            "byPlayCategory": [
                308
            ],
            "byTagNames": [
                643
            ],
            "byParallelIDs": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "MomentListingFilters": {
            "bySets": [
                308
            ],
            "byPlayers": [
                308
            ],
            "byTeams": [
                308
            ],
            "byPrimaryPlayerPosition": [
                500
            ],
            "byPrice": [
                509
            ],
            "bySerialNumber": [
                311
            ],
            "byPower": [
                311
            ],
            "byGameDate": [
                116
            ],
            "byCreatedAt": [
                116
            ],
            "byPlayerGameScores": [
                497
            ],
            "byListingType": [
                371
            ],
            "byTagNames": [
                643
            ],
            "byPlayTagIDs": [
                308
            ],
            "bySetPlayTagIDs": [
                308
            ],
            "bySetVisuals": [
                734
            ],
            "byMomentTiers": [
                379
            ],
            "byPlayIDs": [
                308
            ],
            "bySeries": [
                308
            ],
            "byPlayCategory": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "MomentListingSortType": {},
        "MomentListingType": {},
        "MomentListings": {
            "size": [
                310
            ],
            "data": [
                367
            ],
            "__typename": [
                643
            ]
        },
        "MomentListingsSearchSummary": {
            "filters": [
                369
            ],
            "sortBy": [
                370
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "MomentListingsSearchSummaryResponse": {
            "data": [
                373
            ],
            "__typename": [
                643
            ]
        },
        "MomentMediaURIResponse": {
            "path": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "MomentMetaInput": {
            "momentTitle": [
                643
            ],
            "momentDescription": [
                643
            ],
            "momentImageURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "MomentOwner": {
            "on_User": [
                688
            ],
            "on_NonCustodialUser": [
                398
            ],
            "on_Sortable": [
                634
            ],
            "__typename": [
                643
            ]
        },
        "MomentSaleCSImpactData": {
            "ownedTeamEditionsCount": [
                310
            ],
            "totalTeamEditionsCount": [
                310
            ],
            "willLoseChallengeReward": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "MomentTier": {},
        "MomentTopshotScore": {
            "score": [
                310
            ],
            "derivedVia": [
                643
            ],
            "calculatedAt": [
                662
            ],
            "averageSalePrice": [
                507
            ],
            "purchasePrice": [
                507
            ],
            "__typename": [
                643
            ]
        },
        "MomentTradeInRequest": {
            "id": [
                308
            ],
            "senderDapperID": [
                643
            ],
            "status": [
                384
            ],
            "state": [
                383
            ],
            "momentID": [
                643
            ],
            "version": [
                310
            ],
            "invocationIntentID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "momentImage": [
                643
            ],
            "momentTitle": [
                643
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "moment": [
                354
            ],
            "txHash": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "MomentTradeInRequestActivity": {
            "tradeIn": [
                381
            ],
            "__typename": [
                643
            ]
        },
        "MomentTradeInRequestState": {},
        "MomentTradeInRequestStatus": {},
        "MomentTransferReceivedActivity": {
            "transfer": [
                386
            ],
            "__typename": [
                643
            ]
        },
        "MomentTransferRequest": {
            "id": [
                308
            ],
            "senderDapperID": [
                643
            ],
            "receiverDapperID": [
                643
            ],
            "status": [
                389
            ],
            "state": [
                388
            ],
            "momentID": [
                643
            ],
            "version": [
                310
            ],
            "invocationIntentID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "momentImage": [
                643
            ],
            "momentTitle": [
                643
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "moment": [
                354
            ],
            "txHash": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "MomentTransferRequestActivity": {
            "transfer": [
                386
            ],
            "__typename": [
                643
            ]
        },
        "MomentTransferRequestState": {},
        "MomentTransferRequestStatus": {},
        "MomentTransferValidationResults": {},
        "MomentUsageData": {
            "momentID": [
                308
            ],
            "challengeID": [
                308
            ],
            "variableChallengeCategory": [
                720
            ],
            "submissionID": [
                308
            ],
            "userSubmissionStatus": [
                731
            ],
            "slotType": [
                725
            ],
            "__typename": [
                643
            ]
        },
        "MomentsFromPack": {
            "packID": [
                643
            ],
            "momentIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "MomentsTradeInRequest": {
            "id": [
                308
            ],
            "senderDapperID": [
                643
            ],
            "status": [
                384
            ],
            "state": [
                383
            ],
            "momentIDs": [
                643
            ],
            "version": [
                310
            ],
            "invocationIntentID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "image": [
                643
            ],
            "title": [
                643
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "moments": [
                354
            ],
            "txHash": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "MomentsTradeInRequestActivity": {
            "tradeIn": [
                393
            ],
            "__typename": [
                643
            ]
        },
        "MostRecentEditionSale": {
            "price": [
                507
            ],
            "serialNumber": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "Mutation": {
            "NoOp": [
                31
            ],
            "setSelectedUserTitles": [
                617,
                {
                    "input": [
                        616,
                        "SetSelectedUserTitlesInput!"
                    ]
                }
            ],
            "markAllUserTitlesAsSeen": [
                340
            ],
            "markActivitiesAsRead": [
                337,
                {
                    "input": [
                        336,
                        "MarkActivitiesAsReadInput!"
                    ]
                }
            ],
            "markAllActivitiesAsRead": [
                339,
                {
                    "input": [
                        338,
                        "MarkAllActivitiesAsReadInput!"
                    ]
                }
            ],
            "createWatchlist": [
                744,
                {
                    "input": [
                        111,
                        "CreateWatchlistInput!"
                    ]
                }
            ],
            "updateWatchlist": [
                744,
                {
                    "input": [
                        685,
                        "UpdateWatchlistInput!"
                    ]
                }
            ],
            "deleteWatchlist": [
                123,
                {
                    "input": [
                        122,
                        "DeleteWatchlistInput!"
                    ]
                }
            ],
            "addEditionToWatchlist": [
                10,
                {
                    "input": [
                        9,
                        "AddEditionToWatchlistInput!"
                    ]
                }
            ],
            "removeEditionFromWatchlist": [
                541,
                {
                    "input": [
                        540,
                        "RemoveEditionFromWatchlistInput!"
                    ]
                }
            ],
            "removeAllEditionsFromWatchlist": [
                539,
                {
                    "input": [
                        538,
                        "RemoveAllEditionsFromWatchlistInput!"
                    ]
                }
            ],
            "completeCampaignEvent": [
                85,
                {
                    "input": [
                        84,
                        "CompleteCampaignEventInput!"
                    ]
                }
            ],
            "createVariableChallengeSubmission": [
                727,
                {
                    "input": [
                        110,
                        "CreateVariableChallengeSubmissionInput!"
                    ]
                }
            ],
            "updateVariableChallengeSubmission": [
                727,
                {
                    "input": [
                        684,
                        "UpdateVariableChallengeSubmissionInput!"
                    ]
                }
            ],
            "purchaseMomentWithSoftCurrency": [
                516,
                {
                    "input": [
                        515,
                        "PurchaseMomentWithSoftCurrencyInput!"
                    ]
                }
            ],
            "purchaseAssetsWithDapperPayment": [
                514,
                {
                    "input": [
                        513,
                        "PurchaseAssetsWithDapperPaymentInput!"
                    ]
                }
            ],
            "createMomentTransferRequest": [
                104,
                {
                    "input": [
                        102,
                        "CreateMomentTransferRequestInput!"
                    ]
                }
            ],
            "createMomentTransferRequestV2": [
                105,
                {
                    "input": [
                        103,
                        "CreateMomentTransferRequestInputV2!"
                    ]
                }
            ],
            "addMomentsToGroups": [
                12,
                {
                    "input": [
                        11,
                        "AddMomentsToGroupsInput!"
                    ]
                }
            ],
            "removeMomentsFromGroup": [
                546,
                {
                    "input": [
                        545,
                        "RemoveMomentsFromGroupInput!"
                    ]
                }
            ],
            "createMomentGroup": [
                97,
                {
                    "input": [
                        96,
                        "CreateMomentGroupInput!"
                    ]
                }
            ],
            "duplicateMomentGroup": [
                129,
                {
                    "input": [
                        128,
                        "DuplicateMomentGroupInput!"
                    ]
                }
            ],
            "updateMomentGroup": [
                680,
                {
                    "input": [
                        679,
                        "UpdateMomentGroupInput!"
                    ]
                }
            ],
            "deleteMomentGroup": [
                119,
                {
                    "input": [
                        118,
                        "DeleteMomentGroupInput!"
                    ]
                }
            ],
            "pinMoment": [
                481,
                {
                    "input": [
                        480,
                        "PinMomentInput!"
                    ]
                }
            ],
            "unpinMoment": [
                678,
                {
                    "input": [
                        677,
                        "UnpinMomentInput!"
                    ]
                }
            ],
            "hideOffers": [
                307,
                {
                    "input": [
                        306,
                        "HideOffersInput!"
                    ]
                }
            ],
            "unhideOffers": [
                676,
                {
                    "input": [
                        675,
                        "UnhideOffersInput!"
                    ]
                }
            ],
            "populateOfferByTransaction": [
                506,
                {
                    "input": [
                        505,
                        "PopulateOfferByTransactionInput!"
                    ]
                }
            ],
            "createMomentSale": [
                99,
                {
                    "input": [
                        98,
                        "CreateMomentSaleInput!"
                    ]
                }
            ],
            "cancelMomentSale": [
                39,
                {
                    "input": [
                        38,
                        "CancelMomentSaleInput!"
                    ]
                }
            ],
            "purchaseP2PMoment": [
                519,
                {
                    "input": [
                        518,
                        "PurchaseP2PMomentInput!"
                    ]
                }
            ],
            "reservePack": [
                552,
                {
                    "input": [
                        551,
                        "ReservePackInput!"
                    ]
                }
            ],
            "cancelReservation": [
                43,
                {
                    "input": [
                        42,
                        "CancelReservationInput!"
                    ]
                }
            ],
            "transferPacks": [
                673,
                {
                    "input": [
                        672,
                        "TransferPacksInput!"
                    ]
                }
            ],
            "purchasePack": [
                522,
                {
                    "input": [
                        521,
                        "PurchasePackInput!"
                    ]
                }
            ],
            "createPackPurchaseIntent": [
                108,
                {
                    "input": [
                        107,
                        "CreatePackPurchaseIntentInput!"
                    ]
                }
            ],
            "confirmPackPurchase": [
                89,
                {
                    "input": [
                        88,
                        "ConfirmPackPurchaseInput!"
                    ]
                }
            ],
            "cancelPurchasePack": [
                41,
                {
                    "input": [
                        40,
                        "CancelPurchasePackInput!"
                    ]
                }
            ],
            "openPacks": [
                414,
                {
                    "input": [
                        413,
                        "OpenPacksInput!"
                    ]
                }
            ],
            "openPacksV2": [
                416,
                {
                    "input": [
                        415,
                        "OpenPacksV2Input!"
                    ]
                }
            ],
            "packNFTHashes": [
                455,
                {
                    "input": [
                        454,
                        "PackNFTHashesInput!"
                    ]
                }
            ],
            "authorizePackNFTsMinting": [
                745,
                {
                    "input": [
                        23,
                        "AuthorizePackNFTsMintingInput!"
                    ]
                }
            ],
            "purchaseVendorMoment": [
                528,
                {
                    "input": [
                        527,
                        "PurchaseVendorMomentInput!"
                    ]
                }
            ],
            "saveShowcase": [
                559,
                {
                    "input": [
                        558,
                        "SaveShowcaseInput!"
                    ]
                }
            ],
            "deleteShowcase": [
                121,
                {
                    "input": [
                        120,
                        "DeleteShowcaseInput!"
                    ]
                }
            ],
            "createDropSquad": [
                95,
                {
                    "input": [
                        94,
                        "CreateDropSquadInput!"
                    ]
                }
            ],
            "joinDropSquad": [
                315,
                {
                    "input": [
                        314,
                        "JoinDropSquadInput!"
                    ]
                }
            ],
            "removeFromDropSquad": [
                544,
                {
                    "input": [
                        543,
                        "RemoveFromDropSquadInput!"
                    ]
                }
            ],
            "leaveDropSquad": [
                329,
                {
                    "input": [
                        328,
                        "LeaveDropSquadInput!"
                    ]
                }
            ],
            "createMomentTradeInRequest": [
                101,
                {
                    "input": [
                        100,
                        "CreateMomentTradeInRequestInput!"
                    ]
                }
            ],
            "createBulkMomentTradeInRequest": [
                92,
                {
                    "input": [
                        91,
                        "CreateBulkMomentTradeInRequestInput!"
                    ]
                }
            ],
            "submitVoteForPoll": [
                647,
                {
                    "input": [
                        646,
                        "SubmitVoteForPollInput!"
                    ]
                }
            ],
            "addUserMarketingCampaign": [
                14,
                {
                    "input": [
                        13,
                        "AddUserMarketingCampaignRequest!"
                    ]
                }
            ],
            "updateNBAMarketing": [
                682,
                {
                    "input": [
                        681,
                        "UpdateNBAMarketingRequest!"
                    ]
                }
            ],
            "addUserReferral": [
                16,
                {
                    "input": [
                        15,
                        "AddUserReferralRequest!"
                    ]
                }
            ],
            "upsertUserProfile": [
                687,
                {
                    "input": [
                        686,
                        "UpsertUserProfileInput!"
                    ]
                }
            ],
            "upsertUserProfileFromToken": [
                687
            ],
            "patchUserPreferences": [
                478,
                {
                    "input": [
                        477,
                        "PatchUserPreferencesInput!"
                    ]
                }
            ],
            "UpdateUserSettings": [
                683,
                {
                    "input": [
                        713,
                        "UserSettingsUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                643
            ]
        },
        "NftOwner": {
            "on_User": [
                688
            ],
            "on_NonCustodialUser": [
                398
            ],
            "on_Sortable": [
                634
            ],
            "__typename": [
                643
            ]
        },
        "NonCustodialUser": {
            "flowAddress": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "NotificationSettings": {
            "receiveEmails": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "NotificationSettingsInput": {
            "receiveEmails": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "NumericTransferRequirement": {
            "threshold": [
                310
            ],
            "current": [
                310
            ],
            "valid": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "Offer": {
            "id": [
                310
            ],
            "sortID": [
                633
            ],
            "createdByFlowAddress": [
                643
            ],
            "createdByDapperID": [
                643
            ],
            "acceptedByFlowAddress": [
                643
            ],
            "acceptedByDapperID": [
                643
            ],
            "momentID": [
                643
            ],
            "momentFlowID": [
                310
            ],
            "price": [
                507
            ],
            "completed": [
                31
            ],
            "purchased": [
                31
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "acceptedAt": [
                662
            ],
            "offerAvailableTxHash": [
                643
            ],
            "offerCompletedTxHash": [
                643
            ],
            "moment": [
                354
            ],
            "createdByUser": [
                688
            ],
            "version": [
                406
            ],
            "offerType": [
                405
            ],
            "edition": [
                130
            ],
            "visibility": [
                407
            ],
            "parallelID": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "OfferAvailableActivity": {
            "offer": [
                402
            ],
            "__typename": [
                643
            ]
        },
        "OfferCompletedActivity": {
            "offer": [
                402
            ],
            "__typename": [
                643
            ]
        },
        "OfferType": {},
        "OfferVersion": {},
        "OfferVisibility": {},
        "OfferVisibilityFilter": {},
        "Offers": {
            "size": [
                310
            ],
            "data": [
                402
            ],
            "__typename": [
                643
            ]
        },
        "OnChainPack": {
            "id": [
                308
            ],
            "state": [
                411
            ],
            "momentIds": [
                643
            ],
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "OnChainPackState": {},
        "OnChainPackStatus": {},
        "OpenPacksInput": {
            "packIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "OpenPacksResponse": {
            "success": [
                31
            ],
            "ID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "OpenPacksV2Input": {
            "packIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "OpenPacksV2Response": {
            "momentsFromPacks": [
                392
            ],
            "__typename": [
                643
            ]
        },
        "Order": {
            "id": [
                308
            ],
            "status": [
                419
            ],
            "state": [
                418
            ],
            "momentListingID": [
                308
            ],
            "playID": [
                308
            ],
            "setID": [
                308
            ],
            "userID": [
                308
            ],
            "moment": [
                354
            ],
            "price": [
                507
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "dapperIntentID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "OrderState": {},
        "OrderStatus": {},
        "Orders": {
            "size": [
                310
            ],
            "data": [
                417
            ],
            "__typename": [
                643
            ]
        },
        "P2PListingOrder": {
            "id": [
                308
            ],
            "price": [
                507
            ],
            "status": [
                423
            ],
            "state": [
                422
            ],
            "version": [
                310
            ],
            "moment": [
                354
            ],
            "seller": [
                688
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "listingInvocationIntentID": [
                643
            ],
            "delistingInvocationIntentID": [
                643
            ],
            "listingTxHash": [
                643
            ],
            "delistingTxHash": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "P2PListingOrderState": {},
        "P2PListingOrderStatus": {},
        "P2PListingOrders": {
            "size": [
                310
            ],
            "data": [
                421
            ],
            "__typename": [
                643
            ]
        },
        "P2PMomentListingActivity": {
            "order": [
                421
            ],
            "__typename": [
                643
            ]
        },
        "P2PMomentListingCancellationActivity": {
            "order": [
                421
            ],
            "__typename": [
                643
            ]
        },
        "P2PMomentListingSoldActivity": {
            "order": [
                421
            ],
            "__typename": [
                643
            ]
        },
        "P2PPurchaseOrder": {
            "id": [
                308
            ],
            "price": [
                507
            ],
            "status": [
                431
            ],
            "state": [
                430
            ],
            "version": [
                310
            ],
            "moment": [
                354
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "purchaseIntentID": [
                643
            ],
            "buyer": [
                688
            ],
            "failureReason": [
                429
            ],
            "txHash": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "P2PPurchaseOrderFailureReason": {},
        "P2PPurchaseOrderState": {},
        "P2PPurchaseOrderStatus": {},
        "P2PPurchaseOrders": {
            "size": [
                310
            ],
            "data": [
                428
            ],
            "__typename": [
                643
            ]
        },
        "Pack": {
            "id": [
                308
            ],
            "state": [
                466
            ],
            "status": [
                467
            ],
            "momentIds": [
                308
            ],
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "packListing": [
                439
            ],
            "packListingID": [
                308
            ],
            "fulfillmentTxHash": [
                643
            ],
            "preorder": [
                31
            ],
            "locked": [
                31
            ],
            "flowID": [
                643
            ],
            "distributionID": [
                643
            ],
            "commitHash": [
                643
            ],
            "onChainStatus": [
                412
            ],
            "ownerDapperID": [
                643
            ],
            "ownerFlowAddress": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PackEdition": {
            "setID": [
                308
            ],
            "playID": [
                308
            ],
            "edition": [
                130
            ],
            "count": [
                310
            ],
            "minSerialNumber": [
                310
            ],
            "maxSerialNumber": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "PackEditionConnection": {
            "edges": [
                436
            ],
            "pageInfo": [
                474
            ],
            "__typename": [
                643
            ]
        },
        "PackEditionEdge": {
            "cursor": [
                643
            ],
            "node": [
                434
            ],
            "__typename": [
                643
            ]
        },
        "PackFilters": {
            "byOwnerDapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PackFiltersInput": {
            "byOwnerDapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PackListing": {
            "id": [
                308
            ],
            "remaining": [
                310
            ],
            "title": [
                643
            ],
            "description": [
                643
            ],
            "price": [
                507
            ],
            "priceV2": [
                511
            ],
            "expiryDate": [
                662
            ],
            "forSale": [
                31
            ],
            "images": [
                443
            ],
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "packListingTemplate": [
                449
            ],
            "totalPackCount": [
                310
            ],
            "visualId": [
                734
            ],
            "slug": [
                643
            ],
            "startDate": [
                662
            ],
            "isStarterPack": [
                31
            ],
            "preorder": [
                31
            ],
            "reboundPackListingID": [
                643
            ],
            "orderPurchaseCoolDownTimeInMinutes": [
                310
            ],
            "waitingRoom": [
                643
            ],
            "waitingRoomActive": [
                31
            ],
            "momentCountPerTeam": [
                364
            ],
            "maxOrderQuantity": [
                310
            ],
            "maxOrderQuantityV2": [
                351
            ],
            "listingQuantity": [
                310
            ],
            "levels": [
                330
            ],
            "packEditions": [
                434
            ],
            "packEditionsV2": [
                435,
                {
                    "first": [
                        310
                    ],
                    "after": [
                        308
                    ],
                    "orderBy": [
                        445
                    ]
                }
            ],
            "appStoreProductID": [
                643
            ],
            "momentsPerPack": [
                310
            ],
            "distributionID": [
                643
            ],
            "rsvpMetadata": [
                535
            ],
            "__typename": [
                643
            ]
        },
        "PackListingExpiryStateFilter": {},
        "PackListingFilters": {
            "isMobileSupported": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "PackListingFiltersInput": {
            "isMobileSupported": [
                31
            ],
            "byExpiryState": [
                440
            ],
            "__typename": [
                643
            ]
        },
        "PackListingImage": {
            "type": [
                444
            ],
            "url": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PackListingImageType": {},
        "PackListingPackEditionOrdering": {
            "sort": [
                446
            ],
            "direction": [
                124
            ],
            "__typename": [
                643
            ]
        },
        "PackListingPackEditionSort": {},
        "PackListingSlot": {
            "set": [
                610
            ],
            "playIDCountMap": [
                486
            ],
            "__typename": [
                643
            ]
        },
        "PackListingSortType": {},
        "PackListingTemplate": {
            "packListingSlots": [
                447
            ],
            "__typename": [
                643
            ]
        },
        "PackListings": {
            "size": [
                310
            ],
            "data": [
                439
            ],
            "__typename": [
                643
            ]
        },
        "PackListingsFilter": {
            "isMobileSupported": [
                31
            ],
            "byExpiryState": [
                440
            ],
            "__typename": [
                643
            ]
        },
        "PackListingsSearchSummary": {
            "filters": [
                441
            ],
            "sortBy": [
                448
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "PackNFTHashResponse": {
            "packID": [
                643
            ],
            "distributionID": [
                643
            ],
            "commitHash": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PackNFTHashesInput": {
            "packIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PackNFTHashesResponse": {
            "packNFTHashes": [
                453
            ],
            "__typename": [
                643
            ]
        },
        "PackOrderState": {},
        "PackOrderStatus": {},
        "PackPurchaseOrder": {
            "id": [
                308
            ],
            "price": [
                507
            ],
            "status": [
                457
            ],
            "state": [
                456
            ],
            "paymentTxHash": [
                643
            ],
            "packListing": [
                439
            ],
            "quantity": [
                310
            ],
            "packs": [
                433
            ],
            "dapperIntentId": [
                643
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "PackPurchaseOrders": {
            "size": [
                310
            ],
            "data": [
                458
            ],
            "__typename": [
                643
            ]
        },
        "PackReservation": {
            "id": [
                308
            ],
            "packListingID": [
                308
            ],
            "levelID": [
                643
            ],
            "quantity": [
                310
            ],
            "payment": [
                462
            ],
            "__typename": [
                643
            ]
        },
        "PackReservationFilter": {
            "reservationID": [
                308
            ],
            "packListingID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "PackReservationPayment": {
            "status": [
                463
            ],
            "confirmationRedirectURL": [
                643
            ],
            "price": [
                511
            ],
            "__typename": [
                643
            ]
        },
        "PackReservationPaymentStatus": {},
        "PackReservationsFilter": {
            "packListingID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "PackSearchSummary": {
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "PackState": {},
        "PackStatus": {},
        "Packs": {
            "size": [
                310
            ],
            "data": [
                433
            ],
            "__typename": [
                643
            ]
        },
        "PacksFiltersInput": {
            "byOwnerDapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PacksForUserCollection": {
            "id": [
                308
            ],
            "title": [
                643
            ],
            "description": [
                643
            ],
            "images": [
                443
            ],
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "data": [
                468
            ],
            "visualId": [
                734
            ],
            "__typename": [
                643
            ]
        },
        "PacksForUserCollectionSearchSummary": {
            "filters": [
                437
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "PacksForUserCollectionSearchSummaryResponse": {
            "data": [
                471
            ],
            "__typename": [
                643
            ]
        },
        "PacksForUserCollections": {
            "size": [
                310
            ],
            "data": [
                470
            ],
            "__typename": [
                643
            ]
        },
        "PageInfo": {
            "startCursor": [
                643
            ],
            "endCursor": [
                643
            ],
            "hasNextPage": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "Pagination": {
            "leftCursor": [
                113
            ],
            "rightCursor": [
                113
            ],
            "__typename": [
                643
            ]
        },
        "PaginationInput": {
            "cursor": [
                113
            ],
            "direction": [
                114
            ],
            "limit": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "PatchUserPreferencesInput": {
            "favoriteTeamID": [
                643
            ],
            "country": [
                643
            ],
            "city": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PatchUserPreferencesResponse": {
            "success": [
                31
            ],
            "publicInfo": [
                704
            ],
            "__typename": [
                643
            ]
        },
        "PaymentProvider": {},
        "PinMomentInput": {
            "momentID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PintMomentResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "Play": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "description": [
                643
            ],
            "flowID": [
                308
            ],
            "sortID": [
                633
            ],
            "status": [
                492
            ],
            "assets": [
                483
            ],
            "stats": [
                491
            ],
            "statsPlayerGameScores": [
                641
            ],
            "statsPlayerSeasonAverageScores": [
                642
            ],
            "tags": [
                650
            ],
            "league": [
                326
            ],
            "headline": [
                643
            ],
            "headlineSource": [
                747
            ],
            "shortDescription": [
                643
            ],
            "keyStats": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PlayAssets": {
            "videos": [
                493
            ],
            "images": [
                487
            ],
            "videoLengthInMilliseconds": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "PlayFilter": {
            "ByPlayers": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "PlayFilterInput": {
            "byPlayers": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "PlayIDCountTuple": {
            "id": [
                643
            ],
            "count": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "PlayImage": {
            "type": [
                488
            ],
            "url": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PlayImageType": {},
        "PlaySearchSummary": {
            "sortBy": [
                490
            ],
            "filters": [
                484
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "PlaySortType": {},
        "PlayStats": {
            "playerID": [
                643
            ],
            "playerName": [
                643
            ],
            "firstName": [
                643
            ],
            "lastName": [
                643
            ],
            "jerseyNumber": [
                643
            ],
            "teamAtMoment": [
                643
            ],
            "awayTeamName": [
                643
            ],
            "awayTeamScore": [
                310
            ],
            "homeTeamName": [
                643
            ],
            "homeTeamScore": [
                310
            ],
            "dateOfMoment": [
                662
            ],
            "totalYearsExperience": [
                643
            ],
            "teamAtMomentNbaId": [
                643
            ],
            "height": [
                310
            ],
            "weight": [
                310
            ],
            "currentTeam": [
                643
            ],
            "currentTeamId": [
                643
            ],
            "primaryPosition": [
                500
            ],
            "homeTeamNbaId": [
                643
            ],
            "awayTeamNbaId": [
                643
            ],
            "nbaSeason": [
                643
            ],
            "draftYear": [
                310
            ],
            "draftSelection": [
                643
            ],
            "draftRound": [
                643
            ],
            "birthplace": [
                643
            ],
            "birthdate": [
                115
            ],
            "draftTeam": [
                643
            ],
            "draftTeamNbaId": [
                643
            ],
            "playCategory": [
                643
            ],
            "playType": [
                643
            ],
            "quarter": [
                529
            ],
            "homeTeamScoresByQuarter": [
                658
            ],
            "awayTeamScoresByQuarter": [
                658
            ],
            "overrideHeadline": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PlayStatus": {},
        "PlayVideo": {
            "type": [
                494
            ],
            "url": [
                674
            ],
            "videoLength": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "PlayVideoType": {},
        "Player": {
            "id": [
                308
            ],
            "name": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PlayerData": {
            "jerseyNumber": [
                643
            ],
            "position": [
                643
            ],
            "height": [
                310
            ],
            "weight": [
                310
            ],
            "currentTeamName": [
                643
            ],
            "currentTeamId": [
                643
            ],
            "firstName": [
                643
            ],
            "lastName": [
                643
            ],
            "birthplace": [
                643
            ],
            "birthdate": [
                115
            ],
            "yearsExperience": [
                310
            ],
            "teamsPlayedFor": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PlayerGameScoresFilters": {
            "points": [
                311
            ],
            "__typename": [
                643
            ]
        },
        "PlayerGameScoresFiltersInput": {
            "points": [
                312
            ],
            "__typename": [
                643
            ]
        },
        "PlayerLeaderboard": {
            "id": [
                643
            ],
            "kind": [
                322
            ],
            "entries": [
                325
            ],
            "__typename": [
                643
            ]
        },
        "PlayerPosition": {},
        "Players": {
            "size": [
                310
            ],
            "data": [
                495
            ],
            "__typename": [
                643
            ]
        },
        "Plays": {
            "size": [
                310
            ],
            "data": [
                482
            ],
            "__typename": [
                643
            ]
        },
        "Poll": {
            "id": [
                308
            ],
            "candidatePlays": [
                504
            ],
            "startsAt": [
                662
            ],
            "expiresAt": [
                662
            ],
            "votedFor": [
                643
            ],
            "headline": [
                643
            ],
            "wave": [
                310
            ],
            "imageURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PollPlay": {
            "contentfulEntryID": [
                643
            ],
            "totalVotes": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "PopulateOfferByTransactionInput": {
            "transactionID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PopulateOfferByTransactionResponse": {
            "Offer": [
                402
            ],
            "__typename": [
                643
            ]
        },
        "Price": {},
        "PriceRange": {
            "min": [
                507
            ],
            "max": [
                507
            ],
            "__typename": [
                643
            ]
        },
        "PriceRangeFilter": {
            "min": [
                507
            ],
            "max": [
                507
            ],
            "__typename": [
                643
            ]
        },
        "PriceRangeFilterInput": {
            "min": [
                507
            ],
            "max": [
                507
            ],
            "__typename": [
                643
            ]
        },
        "PriceV2": {
            "value": [
                507
            ],
            "currency": [
                112
            ],
            "__typename": [
                643
            ]
        },
        "PriceV2Input": {
            "value": [
                507
            ],
            "currency": [
                112
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseAssetsWithDapperPaymentInput": {
            "orderToken": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseAssetsWithDapperPaymentResponse": {
            "assetID": [
                308
            ],
            "price": [
                310
            ],
            "purchaseType": [
                525
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseMomentWithSoftCurrencyInput": {
            "momentID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseMomentWithSoftCurrencyResponse": {
            "momentID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseP2PMomentActivity": {
            "order": [
                428
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseP2PMomentInput": {
            "momentID": [
                643
            ],
            "price": [
                507
            ],
            "momentFlowID": [
                643
            ],
            "sellerID": [
                643
            ],
            "userListingID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "momentName": [
                643
            ],
            "momentDescription": [
                643
            ],
            "momentImageURL": [
                643
            ],
            "momentMetaInput": [
                376
            ],
            "recaptchaToken": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseP2PMomentResponse": {
            "orderID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchasePackActivity": {
            "order": [
                458
            ],
            "__typename": [
                643
            ]
        },
        "PurchasePackInput": {
            "packListingID": [
                643
            ],
            "price": [
                507
            ],
            "priceV2": [
                512
            ],
            "quantity": [
                310
            ],
            "redirectURL": [
                643
            ],
            "recaptchaToken": [
                643
            ],
            "queueID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchasePackResponse": {
            "orderID": [
                643
            ],
            "existingReservation": [
                31
            ],
            "packsReserved": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseSoftCurrencyWithDapperPaymentInput": {
            "orderToken": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseSoftCurrencyWithDapperPaymentResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseType": {},
        "PurchaseVendorMomentActivity": {
            "order": [
                417
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseVendorMomentInput": {
            "orderToken": [
                643
            ],
            "purchaserID": [
                643
            ],
            "paymentTransactionID": [
                643
            ],
            "momentListingID": [
                643
            ],
            "redirectURL": [
                643
            ],
            "price": [
                507
            ],
            "momentTitle": [
                643
            ],
            "momentImageURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "PurchaseVendorMomentResponse": {
            "orderID": [
                308
            ],
            "paymentTransactionID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "Quarter": {},
        "QuarterScore": {
            "type": [
                643
            ],
            "number": [
                310
            ],
            "sequence": [
                310
            ],
            "points": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "Query": {
            "NoOp": [
                31
            ],
            "GetActivity": [
                162,
                {
                    "activityID": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "SearchActivity": [
                561,
                {
                    "input": [
                        560,
                        "SearchActivityInput!"
                    ]
                }
            ],
            "GetUserPurchaseStats": [
                275
            ],
            "HasUnreadActivities": [
                305,
                {
                    "input": [
                        304,
                        "HasUnreadActivitiesInput!"
                    ]
                }
            ],
            "activeCampaigns": [
                34
            ],
            "getMyActiveChallenges": [
                207
            ],
            "getMyCompletedChallenges": [
                208
            ],
            "getCollectorScore": [
                75,
                {
                    "input": [
                        77,
                        "[CollectorScoreRequestBonusGroup]"
                    ]
                }
            ],
            "queryElasticsearch": [
                534,
                {
                    "input": [
                        532
                    ]
                }
            ],
            "getKYCStatus": [
                184,
                {
                    "input": [
                        183
                    ]
                }
            ],
            "authenticate": [
                22,
                {
                    "input": [
                        21,
                        "AuthenticateInput!"
                    ]
                }
            ],
            "requestLoginUrl": [
                548,
                {
                    "input": [
                        547,
                        "RequestLoginUrlInput!"
                    ]
                }
            ],
            "exchangeRefreshToken": [
                152,
                {
                    "input": [
                        151,
                        "ExchangeRefreshTokenInput!"
                    ]
                }
            ],
            "revokeToken": [
                555,
                {
                    "input": [
                        554,
                        "RevokeTokenInput!"
                    ]
                }
            ],
            "me": [
                353
            ],
            "getMintedMomentProgressForQuest": [
                195
            ],
            "getMomentTransferRequest": [
                203,
                {
                    "input": [
                        202,
                        "GetMomentTransferRequestInput!"
                    ]
                }
            ],
            "getTransferEligibility": [
                251,
                {
                    "input": [
                        250
                    ]
                }
            ],
            "getGiftedMomentURL": [
                180,
                {
                    "input": [
                        179
                    ]
                }
            ],
            "searchMomentGroups": [
                575,
                {
                    "input": [
                        574
                    ]
                }
            ],
            "getMomentGroup": [
                199,
                {
                    "input": [
                        198,
                        "GetMomentGroupInput!"
                    ]
                }
            ],
            "getTotalBurnedMoments": [
                249
            ],
            "getPinnedMoments": [
                227,
                {
                    "input": [
                        226,
                        "GetPinnedMomentsRequest!"
                    ]
                }
            ],
            "getUserP2PListingOrder": [
                263,
                {
                    "input": [
                        262
                    ]
                }
            ],
            "getUserP2PListingOrders": [
                264
            ],
            "getUserP2PPurchaseOrder": [
                266,
                {
                    "input": [
                        265
                    ]
                }
            ],
            "getUserP2PPurchaseOrders": [
                267
            ],
            "getMomentSaleCSImpactData": [
                378,
                {
                    "momentID": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "getDropEligibility": [
                170,
                {
                    "input": [
                        169
                    ]
                }
            ],
            "getPacklistingEligibilityDetails": [
                644,
                {
                    "input": [
                        223
                    ]
                }
            ],
            "GetPackListingEligibilityV2": [
                217,
                {
                    "input": [
                        216
                    ]
                }
            ],
            "getUserPackOrder": [
                270,
                {
                    "input": [
                        269
                    ]
                }
            ],
            "getUserPackOrders": [
                271
            ],
            "packReservation": [
                460,
                {
                    "filter": [
                        461,
                        "PackReservationFilter!"
                    ]
                }
            ],
            "packReservations": [
                460,
                {
                    "filter": [
                        464,
                        "PackReservationsFilter!"
                    ]
                }
            ],
            "getOrder": [
                215,
                {
                    "orderID": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "getUserOrders": [
                259
            ],
            "getMyShowcases": [
                211
            ],
            "getMomentTradeInRequest": [
                201,
                {
                    "input": [
                        200,
                        "GetMomentTradeInRequestInput!"
                    ]
                }
            ],
            "getMomentsTradeInRequest": [
                205,
                {
                    "input": [
                        204,
                        "GetMomentsTradeInRequestInput!"
                    ]
                }
            ],
            "getMyReferral": [
                210
            ],
            "getMyProfile": [
                209
            ],
            "getUserPendingTxStates": [
                272
            ],
            "getUserCoolDowns": [
                255
            ],
            "searchUsersByLocation": [
                606,
                {
                    "input": [
                        604
                    ]
                }
            ],
            "GetUserSettings": [
                278
            ],
            "getUserStatsByLocation": [
                282,
                {
                    "input": [
                        281
                    ]
                }
            ],
            "getPlay": [
                229,
                {
                    "playID": [
                        228,
                        "GetPlayInput!"
                    ]
                }
            ],
            "getTitles": [
                241
            ],
            "getUserTitles": [
                284,
                {
                    "input": [
                        283,
                        "GetUserTitlesRequest!"
                    ]
                }
            ],
            "SearchActivityByDapperId": [
                561,
                {
                    "dapperID": [
                        643,
                        "String!"
                    ],
                    "input": [
                        560,
                        "SearchActivityInput!"
                    ]
                }
            ],
            "getWatchlist": [
                744,
                {
                    "id": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "getUsersWatchlists": [
                287,
                {
                    "dapperID": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "searchWatchedEditions": [
                608,
                {
                    "input": [
                        607,
                        "SearchWatchedEditionsInput!"
                    ]
                }
            ],
            "getEditionsWatcherCount": [
                176,
                {
                    "input": [
                        175,
                        "GetEditionsWatcherCountInput!"
                    ]
                }
            ],
            "getGiglabsMarketplaceListings": [
                300,
                {
                    "input": [
                        301,
                        "GiglabsMarketplaceListingsInput!"
                    ]
                }
            ],
            "getGiglabsMarketplaceListing": [
                299,
                {
                    "id": [
                        310,
                        "Int!"
                    ]
                }
            ],
            "getGiglabsListingBids": [
                297,
                {
                    "input": [
                        296,
                        "GiglabsListingBidsInput!"
                    ]
                }
            ],
            "getUserBallerStatus": [
                689,
                {
                    "input": [
                        252,
                        "GetUserBallerStatusRequest!"
                    ]
                }
            ],
            "getBallerStatusLevels": [
                26
            ],
            "hasBallerStatusProcessedPackFulfillments": [
                31,
                {
                    "input": [
                        303,
                        "HasBallerStatusProcessedPackFulfillmentsInput!"
                    ]
                }
            ],
            "getUsersWithHighestNumberOfBurnedMoments": [
                289
            ],
            "getUsersWithHighestBurnedTopshotScore": [
                288
            ],
            "getMomentsWithHighestBurnedTopshotScore": [
                206
            ],
            "getTotalBurnedMomentCount": [
                248
            ],
            "getTotalBurnedMomentCountByRarity": [
                247
            ],
            "getTopNBurnedEditions": [
                242
            ],
            "getUserScoreForRisingStarsLockingLeaderboard": [
                694,
                {
                    "dapperID": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "getUserScoresForRisingStarsLockingLeaderboard": [
                277
            ],
            "getUserScoreForAllStarsBurningLeaderboard": [
                694,
                {
                    "dapperID": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "getUserScoresForAllStarsBurningLeaderboard": [
                276
            ],
            "getActiveChallenges": [
                159
            ],
            "searchChallenges": [
                563,
                {
                    "input": [
                        562,
                        "SearchChallengesInput!"
                    ]
                }
            ],
            "getChallengeByID": [
                696,
                {
                    "input": [
                        163,
                        "GetChallengeByIDInput!"
                    ]
                }
            ],
            "checkActiveChallengeSubmissionsByMomentID": [
                60,
                {
                    "input": [
                        59,
                        "CheckActiveChallengeSubmissionsByMomentIDInput!"
                    ]
                }
            ],
            "getActiveUserSubmissionsByMomentIDs": [
                161,
                {
                    "input": [
                        160,
                        "GetActiveUserSubmissionsByMomentIDsInput!"
                    ]
                }
            ],
            "getUserCodex": [
                254,
                {
                    "input": [
                        253,
                        "GetUserCodexInput!"
                    ]
                }
            ],
            "getCodex": [
                165,
                {
                    "input": [
                        164,
                        "GetCodexInput!"
                    ]
                }
            ],
            "getCodexSet": [
                167,
                {
                    "input": [
                        166,
                        "GetCodexSetInput!"
                    ]
                }
            ],
            "getCollectorScorePublic": [
                75,
                {
                    "input": [
                        168,
                        "GetCollectorScoreRequest!"
                    ]
                }
            ],
            "searchTeamCollection": [
                600,
                {
                    "input": [
                        599,
                        "SearchTeamCollectionInput!"
                    ]
                }
            ],
            "getEdition": [
                174,
                {
                    "input": [
                        171,
                        "GetEditionInput!"
                    ]
                }
            ],
            "searchEditions": [
                568,
                {
                    "input": [
                        567,
                        "SearchEditionsInput!"
                    ]
                }
            ],
            "getEditionListing": [
                173,
                {
                    "input": [
                        172,
                        "GetEditionListingInput!"
                    ]
                }
            ],
            "getEditionListingCached": [
                173,
                {
                    "input": [
                        172,
                        "GetEditionListingInput!"
                    ]
                }
            ],
            "getHotEditionListings": [
                182,
                {
                    "input": [
                        181
                    ]
                }
            ],
            "searchEditionListings": [
                565,
                {
                    "input": [
                        564,
                        "SearchEditionListingsInput!"
                    ]
                }
            ],
            "getExchangeRates": [
                178,
                {
                    "input": [
                        177,
                        "GetExchangeRatesInput!"
                    ]
                }
            ],
            "getLeaderboard": [
                192,
                {
                    "input": [
                        189,
                        "GetLeaderboardInput!"
                    ]
                }
            ],
            "getLeaderboardEntry": [
                188,
                {
                    "input": [
                        185,
                        "GetLeaderboardEntryInput!"
                    ]
                }
            ],
            "getLeaderboardPotential": [
                191,
                {
                    "input": [
                        190,
                        "GetLeaderboardPotentialInput!"
                    ]
                }
            ],
            "getLeaderboardEntryRelationships": [
                187,
                {
                    "input": [
                        186,
                        "GetLeaderboardEntryRelationshipInput!"
                    ]
                }
            ],
            "searchMarketplaceTransactions": [
                346,
                {
                    "input": [
                        569,
                        "SearchMarketplaceTransactionsInput!"
                    ]
                }
            ],
            "getMarketplaceTransactionEditionStats": [
                194,
                {
                    "input": [
                        193,
                        "GetMarketplaceTransactionEditionStatsInput!"
                    ]
                }
            ],
            "getLatestMarketplaceTransactions": [
                346
            ],
            "searchMintedMoments": [
                571,
                {
                    "input": [
                        570,
                        "SearchMintedMomentsInput!"
                    ]
                }
            ],
            "getMintedMoment": [
                357,
                {
                    "momentId": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "getMintedMoments": [
                197,
                {
                    "input": [
                        196,
                        "GetMintedMomentsInput!"
                    ]
                }
            ],
            "allPlayers": [
                501
            ],
            "getSearchSuggestions": [
                596,
                {
                    "input": [
                        597,
                        "SearchSuggestionsInput!"
                    ]
                }
            ],
            "allPlayersByLeagues": [
                501,
                {
                    "input": [
                        17,
                        "AllPlayersByLeaguesInput!"
                    ]
                }
            ],
            "getSoftCurrencyPrice": [
                234
            ],
            "allTeams": [
                661
            ],
            "allTeamsByLeagues": [
                661,
                {
                    "input": [
                        18,
                        "AllTeamsByLeaguesInput!"
                    ]
                }
            ],
            "searchMomentListings": [
                374,
                {
                    "input": [
                        576,
                        "SearchMomentListingsInput!"
                    ]
                }
            ],
            "getUserMomentListings": [
                700,
                {
                    "input": [
                        258,
                        "GetUserMomentListingsInput!"
                    ]
                }
            ],
            "getVendorMomentListing": [
                291,
                {
                    "input": [
                        290,
                        "GetVendorMomentListingInput!"
                    ]
                }
            ],
            "MomentMediaURI": [
                375,
                {
                    "momentFlowId": [
                        310,
                        "Int!"
                    ]
                }
            ],
            "searchOffers": [
                580,
                {
                    "input": [
                        579,
                        "SearchOffersInput!"
                    ]
                }
            ],
            "getOffer": [
                402,
                {
                    "input": [
                        212,
                        "GetOfferInput!"
                    ]
                }
            ],
            "getOnChainPack": [
                214,
                {
                    "input": [
                        213,
                        "GetOnChainPackInput!"
                    ]
                }
            ],
            "checkExistingP2POrders": [
                62,
                {
                    "input": [
                        61,
                        "CheckExistingP2POrdersInput!"
                    ]
                }
            ],
            "searchPackListings": [
                586,
                {
                    "input": [
                        585,
                        "SearchPackListingsInput!"
                    ]
                }
            ],
            "getPackListing": [
                219,
                {
                    "input": [
                        218,
                        "GetPackListingInput!"
                    ]
                }
            ],
            "getUserPackOrderByDapperId": [
                270,
                {
                    "input": [
                        268
                    ]
                }
            ],
            "getUserPackOrdersByDapperId": [
                271,
                {
                    "dapperId": [
                        643,
                        "String!"
                    ]
                }
            ],
            "getPackSummaryProgress": [
                222,
                {
                    "input": [
                        221,
                        "GetPackSummaryProgressInput!"
                    ]
                }
            ],
            "getPackSummaryBallerStatus": [
                689,
                {
                    "input": [
                        220,
                        "GetPackSummaryBallerStatusInput!"
                    ]
                }
            ],
            "getPacks": [
                225,
                {
                    "input": [
                        224,
                        "GetPacksInput!"
                    ]
                }
            ],
            "searchPacks": [
                589,
                {
                    "input": [
                        588,
                        "SearchPacksInput!"
                    ]
                }
            ],
            "searchPacksForUserCollection": [
                472,
                {
                    "input": [
                        587,
                        "SearchPacksForUserCollectionInput!"
                    ]
                }
            ],
            "getPlayerDataWithCurrentStats": [
                231,
                {
                    "input": [
                        230
                    ]
                }
            ],
            "searchPlays": [
                489,
                {
                    "input": [
                        590,
                        "SearchPlaysInput!"
                    ]
                }
            ],
            "searchSets": [
                593,
                {
                    "input": [
                        592,
                        "SearchSetsInput!"
                    ]
                }
            ],
            "getSet": [
                233,
                {
                    "input": [
                        232,
                        "GetSetInput!"
                    ]
                }
            ],
            "getShowcaseByID": [
                624,
                {
                    "showcaseID": [
                        308,
                        "ID!"
                    ]
                }
            ],
            "getUserShowcases": [
                280,
                {
                    "input": [
                        279,
                        "GetUserShowcasesInput!"
                    ]
                }
            ],
            "searchShowcases": [
                595,
                {
                    "input": [
                        594,
                        "SearchShowcasesInput!"
                    ]
                }
            ],
            "getUserOwnedSpecialNFTs": [
                261,
                {
                    "input": [
                        260,
                        "GetUserOwnedSpecialNFTsInput!"
                    ]
                }
            ],
            "getSpecialNFTs": [
                236,
                {
                    "type": [
                        637
                    ]
                }
            ],
            "getSpecialNFT": [
                235,
                {
                    "flowID": [
                        310,
                        "Int!"
                    ]
                }
            ],
            "getTags": [
                238,
                {
                    "input": [
                        237,
                        "GetTagsInput!"
                    ]
                }
            ],
            "getTickerData": [
                240
            ],
            "topshotScore": [
                665,
                {
                    "input": [
                        245,
                        "GetTopshotScoreRequest!"
                    ]
                }
            ],
            "topshotScoreTeamSeriesCompletion": [
                239,
                {
                    "input": [
                        246,
                        "GetTopshotScoreTeamSeriesCompletionRequest!"
                    ]
                }
            ],
            "topshotScoreAllTeamsSeriesCompletion": [
                244,
                {
                    "input": [
                        243,
                        "GetTopshotScoreAllTeamsSeriesCompletionProgressRequest!"
                    ]
                }
            ],
            "getUserTopshotTags": [
                286,
                {
                    "input": [
                        285,
                        "GetUserTopshotTagsRequest!"
                    ]
                }
            ],
            "ts50": [
                649
            ],
            "searchUserSetAssociations": [
                603,
                {
                    "input": [
                        602,
                        "SearchUserSetAssociationsInput!"
                    ]
                }
            ],
            "getUserProfile": [
                274,
                {
                    "input": [
                        273,
                        "GetUserProfileInput!"
                    ]
                }
            ],
            "getUserProfileByUsername": [
                274,
                {
                    "input": [
                        746,
                        "getUserProfileByUsernameInput!"
                    ]
                }
            ],
            "getUserEligibilityForJoiningPackListingQueue": [
                257,
                {
                    "input": [
                        256,
                        "GetUserEligibilityForJoiningPackListingQueueInput!"
                    ]
                }
            ],
            "__typename": [
                643
            ]
        },
        "QueryElasticsearchInput": {
            "index": [
                643
            ],
            "body": [
                533
            ],
            "__typename": [
                643
            ]
        },
        "QueryElasticsearchInputBody": {
            "query": [
                335
            ],
            "aggs": [
                335
            ],
            "__typename": [
                643
            ]
        },
        "QueryElasticsearchResponse": {
            "data": [
                144
            ],
            "__typename": [
                643
            ]
        },
        "RSVPMetadata": {
            "totalPacksReserved": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "RecommendationType": {},
        "ReferralType": {},
        "RemoveAllEditionsFromWatchlistInput": {
            "watchlistId": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "RemoveAllEditionsFromWatchlistResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "RemoveEditionFromWatchlistInput": {
            "watchlistId": [
                308
            ],
            "playID": [
                643
            ],
            "setID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "RemoveEditionFromWatchlistResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "RemoveFromDropSquadError": {},
        "RemoveFromDropSquadInput": {
            "dropSquadID": [
                308
            ],
            "memberID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "RemoveFromDropSquadResponse": {
            "error": [
                542
            ],
            "__typename": [
                643
            ]
        },
        "RemoveMomentsFromGroupInput": {
            "momentGroupID": [
                643
            ],
            "momentIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "RemoveMomentsFromGroupResponse": {
            "momentIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "RequestLoginUrlInput": {
            "state": [
                643
            ],
            "redirectUrl": [
                643
            ],
            "loginHint": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "RequestLoginUrlResponse": {
            "url": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "Requirement": {
            "name": [
                643
            ],
            "nameV2": [
                550
            ],
            "value": [
                643
            ],
            "valueType": [
                717
            ],
            "comparator": [
                643
            ],
            "isQualified": [
                31
            ],
            "userValue": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "RequirementName": {},
        "ReservePackInput": {
            "packListingID": [
                308
            ],
            "levelID": [
                643
            ],
            "quantity": [
                310
            ],
            "postPaymentRedirectURL": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "ReservePackResponse": {
            "packReservation": [
                460
            ],
            "error": [
                553
            ],
            "__typename": [
                643
            ]
        },
        "ReservePackResponseError": {},
        "RevokeTokenInput": {
            "refreshToken": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "RevokeTokenResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "Role": {},
        "SaleDto": {
            "orderId": [
                643
            ],
            "sellerAddress": [
                643
            ],
            "buyerAddress": [
                643
            ],
            "buyerId": [
                643
            ],
            "buyerUsername": [
                643
            ],
            "bidPrice": [
                507
            ],
            "momentId": [
                643
            ],
            "momentName": [
                643
            ],
            "momentDescription": [
                643
            ],
            "momentImageUrl": [
                643
            ],
            "soldDateTime": [
                662
            ],
            "playId": [
                643
            ],
            "playDescription": [
                643
            ],
            "playerId": [
                643
            ],
            "playerName": [
                643
            ],
            "teamName": [
                643
            ],
            "setVisualId": [
                310
            ],
            "setId": [
                643
            ],
            "setSeries": [
                310
            ],
            "setName": [
                643
            ],
            "serialNumber": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "SaveShowcaseInput": {
            "showcaseID": [
                308
            ],
            "momentIDs": [
                308
            ],
            "name": [
                643
            ],
            "momentsOrder": [
                626
            ],
            "questID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "SaveShowcaseResponse": {
            "showcaseID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "SearchActivityInput": {
            "filters": [
                4
            ],
            "sortBy": [
                5
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchActivityResponse": {
            "filters": [
                3
            ],
            "sortBy": [
                5
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "SearchChallengesInput": {
            "filters": [
                49
            ],
            "sortBy": [
                54
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchChallengesResponse": {
            "data": [
                58
            ],
            "__typename": [
                643
            ]
        },
        "SearchEditionListingsInput": {
            "filters": [
                135
            ],
            "sortBy": [
                136
            ],
            "searchInput": [
                29
            ],
            "userID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "SearchEditionListingsResponse": {
            "data": [
                566
            ],
            "__typename": [
                643
            ]
        },
        "SearchEditionListingsSummary": {
            "filters": [
                138
            ],
            "sortBy": [
                136
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "SearchEditionsInput": {
            "filters": [
                132
            ],
            "__typename": [
                643
            ]
        },
        "SearchEditionsResponse": {
            "filters": [
                133
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "SearchMarketplaceTransactionsInput": {
            "filters": [
                344
            ],
            "sortBy": [
                347
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchMintedMomentsInput": {
            "filters": [
                355
            ],
            "sortBy": [
                359
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchMintedMomentsResponse": {
            "data": [
                358
            ],
            "__typename": [
                643
            ]
        },
        "SearchMomentGroupFilterInput": {
            "addMomentsByMomentID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "SearchMomentGroupSummary": {
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "SearchMomentGroupsInput": {
            "filters": [
                572
            ],
            "__typename": [
                643
            ]
        },
        "SearchMomentGroupsResponse": {
            "data": [
                573
            ],
            "__typename": [
                643
            ]
        },
        "SearchMomentListingsInput": {
            "filters": [
                368
            ],
            "sortBy": [
                370
            ],
            "searchInput": [
                29
            ],
            "countOwnedSetPlaysForUserID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "SearchOffersFilter": {
            "createdByDapperIDs": [
                643
            ],
            "byMomentIDs": [
                643
            ],
            "byType": [
                584
            ],
            "byOfferState": [
                582
            ],
            "byPrice": [
                509
            ],
            "byEditions": [
                142
            ],
            "byOfferTypes": [
                405
            ],
            "byOfferVisibility": [
                408
            ],
            "byParallels": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "SearchOffersFilterInput": {
            "createdByDapperIDs": [
                643
            ],
            "byMomentIDs": [
                643
            ],
            "byType": [
                584
            ],
            "byOfferState": [
                582
            ],
            "byPrice": [
                510
            ],
            "byEditions": [
                143
            ],
            "byOfferTypes": [
                405
            ],
            "byOfferVisibility": [
                408
            ],
            "byParallels": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "SearchOffersInput": {
            "filters": [
                578
            ],
            "sortBy": [
                581
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchOffersResponse": {
            "data": [
                583
            ],
            "__typename": [
                643
            ]
        },
        "SearchOffersSortType": {},
        "SearchOffersState": {},
        "SearchOffersSummary": {
            "filters": [
                577
            ],
            "sortBy": [
                581
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "SearchOffersType": {},
        "SearchPackListingsInput": {
            "searchInput": [
                29
            ],
            "filters": [
                442
            ],
            "sortBy": [
                448
            ],
            "__typename": [
                643
            ]
        },
        "SearchPackListingsResponse": {
            "data": [
                452
            ],
            "__typename": [
                643
            ]
        },
        "SearchPacksForUserCollectionInput": {
            "searchInput": [
                29
            ],
            "filters": [
                469
            ],
            "__typename": [
                643
            ]
        },
        "SearchPacksInput": {
            "searchInput": [
                29
            ],
            "filters": [
                438
            ],
            "__typename": [
                643
            ]
        },
        "SearchPacksResponse": {
            "data": [
                465
            ],
            "__typename": [
                643
            ]
        },
        "SearchPlaysInput": {
            "sortBy": [
                490
            ],
            "filters": [
                485
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchSetsFilterInput": {
            "byLeagues": [
                326
            ],
            "__typename": [
                643
            ]
        },
        "SearchSetsInput": {
            "searchInput": [
                29
            ],
            "filters": [
                591
            ],
            "__typename": [
                643
            ]
        },
        "SearchSetsResponse": {
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "SearchShowcasesInput": {
            "filters": [
                629
            ],
            "sortBy": [
                631
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchShowcasesResponse": {
            "data": [
                630
            ],
            "__typename": [
                643
            ]
        },
        "SearchSuggestions": {
            "playerSuggestions": [
                495
            ],
            "__typename": [
                643
            ]
        },
        "SearchSuggestionsInput": {
            "input": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "SearchSummary": {
            "count": [
                90
            ],
            "totalCount": [
                310
            ],
            "pagination": [
                475
            ],
            "data": [
                635
            ],
            "__typename": [
                643
            ]
        },
        "SearchTeamCollectionInput": {
            "userID": [
                643
            ],
            "teamID": [
                643
            ],
            "bySeries": [
                654
            ],
            "__typename": [
                643
            ]
        },
        "SearchTeamCollectionResponse": {
            "bySeries": [
                653
            ],
            "teamCollection": [
                83
            ],
            "totalPlayers": [
                310
            ],
            "totalPlayersOwned": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "SearchUserSetAssociationsFiltersInput": {
            "byIsCompleted": [
                31
            ],
            "bySets": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "SearchUserSetAssociationsInput": {
            "searchInput": [
                29
            ],
            "sortBy": [
                710
            ],
            "filters": [
                601
            ],
            "__typename": [
                643
            ]
        },
        "SearchUserSetAssociationsResponse": {
            "filters": [
                709
            ],
            "sortBy": [
                710
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "SearchUsersByLocationInput": {
            "filters": [
                605
            ],
            "sortBy": [
                706
            ],
            "searchInput": [
                29
            ],
            "__typename": [
                643
            ]
        },
        "SearchUsersFilterInput": {
            "country": [
                643
            ],
            "city": [
                643
            ],
            "username": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "SearchUsersResponse": {
            "data": [
                707
            ],
            "__typename": [
                643
            ]
        },
        "SearchWatchedEditionsInput": {
            "searchInput": [
                29
            ],
            "sortBy": [
                741
            ],
            "filters": [
                738
            ],
            "__typename": [
                643
            ]
        },
        "SearchWatchedEditionsResponse": {
            "sortBy": [
                741
            ],
            "searchSummary": [
                598
            ],
            "filters": [
                737
            ],
            "__typename": [
                643
            ]
        },
        "SeriesFilter": {},
        "Set": {
            "id": [
                308
            ],
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "flowId": [
                310
            ],
            "flowName": [
                643
            ],
            "flowSeriesNumber": [
                310
            ],
            "flowLocked": [
                31
            ],
            "setVisualId": [
                734
            ],
            "assetPath": [
                643
            ],
            "assets": [
                611
            ],
            "plays": [
                482
            ],
            "leagues": [
                326
            ],
            "__typename": [
                643
            ]
        },
        "SetAssets": {
            "images": [
                612
            ],
            "__typename": [
                643
            ]
        },
        "SetImage": {
            "type": [
                613
            ],
            "url": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "SetImageType": {},
        "SetPlayCirculations": {
            "ownedByCollectors": [
                310
            ],
            "forSaleByCollectors": [
                310
            ],
            "hiddenInPacks": [
                310
            ],
            "unavailableForPurchase": [
                310
            ],
            "circulationCount": [
                310
            ],
            "burned": [
                310
            ],
            "locked": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "SetProgress": {
            "set": [
                610
            ],
            "numTotalEditionSlots": [
                310
            ],
            "numFilledEditionSlots": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "SetSelectedUserTitlesInput": {
            "titleIDs": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "SetSelectedUserTitlesResponse": {
            "ok": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "Sets": {
            "size": [
                310
            ],
            "data": [
                610
            ],
            "__typename": [
                643
            ]
        },
        "SetsProgress": {
            "progress": [
                615
            ],
            "__typename": [
                643
            ]
        },
        "Shop": {
            "packListings": [
                621,
                {
                    "first": [
                        310
                    ],
                    "after": [
                        308
                    ],
                    "orderBy": [
                        623
                    ],
                    "filter": [
                        451
                    ]
                }
            ],
            "__typename": [
                643
            ]
        },
        "ShopPackListingsConnection": {
            "pageInfo": [
                474
            ],
            "edges": [
                622
            ],
            "__typename": [
                643
            ]
        },
        "ShopPackListingsEdge": {
            "node": [
                439
            ],
            "eligibility": [
                701
            ],
            "__typename": [
                643
            ]
        },
        "ShopPackListingsOrdering": {
            "sort": [
                703
            ],
            "direction": [
                124
            ],
            "__typename": [
                643
            ]
        },
        "Showcase": {
            "id": [
                308
            ],
            "sortID": [
                633
            ],
            "version": [
                733
            ],
            "name": [
                643
            ],
            "userID": [
                308
            ],
            "momentIDs": [
                308
            ],
            "moments": [
                354
            ],
            "user": [
                704
            ],
            "momentsOrder": [
                625
            ],
            "questID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "ShowcaseMomentOrder": {
            "order": [
                310
            ],
            "momentID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "ShowcaseMomentOrderInput": {
            "order": [
                310
            ],
            "momentID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "Showcases": {
            "size": [
                310
            ],
            "data": [
                624
            ],
            "__typename": [
                643
            ]
        },
        "ShowcasesFilters": {
            "byUserID": [
                643
            ],
            "byQuestID": [
                308
            ],
            "byShowcaseName": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "ShowcasesFiltersInput": {
            "byUserID": [
                643
            ],
            "byQuestID": [
                308
            ],
            "byShowcaseName": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "ShowcasesSearchSummary": {
            "filters": [
                628
            ],
            "sortBy": [
                631
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "ShowcasesSortType": {},
        "SignableType": {},
        "SortID": {},
        "Sortable": {
            "sortID": [
                633
            ],
            "on_Activity": [
                2
            ],
            "on_Edition": [
                130
            ],
            "on_EditionListing": [
                134
            ],
            "on_MarketplaceTransaction": [
                341
            ],
            "on_MintedMoment": [
                354
            ],
            "on_MomentGroup": [
                365
            ],
            "on_MomentListing": [
                367
            ],
            "on_Offer": [
                402
            ],
            "on_OnChainPack": [
                410
            ],
            "on_Pack": [
                433
            ],
            "on_PackListing": [
                439
            ],
            "on_PacksForUserCollection": [
                470
            ],
            "on_Play": [
                482
            ],
            "on_Set": [
                610
            ],
            "on_Showcase": [
                624
            ],
            "on_User": [
                688
            ],
            "on_UserChallenge": [
                696
            ],
            "on_UserSetAssociation": [
                708
            ],
            "on_WatchedEdition": [
                736
            ],
            "__typename": [
                643
            ]
        },
        "SortableCollection": {
            "data": [
                634
            ],
            "size": [
                310
            ],
            "on_Activities": [
                1
            ],
            "on_EditionListings": [
                137
            ],
            "on_Editions": [
                141
            ],
            "on_MarketplaceTransactions": [
                348
            ],
            "on_MintedMoments": [
                360
            ],
            "on_MomentGroups": [
                366
            ],
            "on_MomentListings": [
                372
            ],
            "on_Offers": [
                409
            ],
            "on_PackListings": [
                450
            ],
            "on_PacksForUserCollections": [
                473
            ],
            "on_Plays": [
                502
            ],
            "on_Sets": [
                618
            ],
            "on_Showcases": [
                627
            ],
            "on_UserChallenges": [
                697
            ],
            "on_UserSetAssociations": [
                711
            ],
            "on_Users": [
                716
            ],
            "on_WatchedEditions": [
                740
            ],
            "__typename": [
                643
            ]
        },
        "SpecialNFT": {
            "flowID": [
                310
            ],
            "seriesFlowID": [
                310
            ],
            "version": [
                310
            ],
            "type": [
                637
            ],
            "set": [
                640
            ],
            "acquiredAt": [
                662
            ],
            "owner": [
                397
            ],
            "originalOwner": [
                397
            ],
            "momentTopshotScore": [
                380
            ],
            "auction": [
                20
            ],
            "price": [
                507
            ],
            "__typename": [
                643
            ]
        },
        "SpecialNFTType": {},
        "SpecialNftPurchasedActivity": {
            "specialNFT": [
                636
            ],
            "__typename": [
                643
            ]
        },
        "SpecialNftSoldActivity": {
            "specialNFT": [
                636
            ],
            "__typename": [
                643
            ]
        },
        "SpecialSet": {
            "flowID": [
                310
            ],
            "seriesFlowID": [
                310
            ],
            "seriesName": [
                643
            ],
            "version": [
                310
            ],
            "vipCustomID": [
                310
            ],
            "name": [
                643
            ],
            "description": [
                643
            ],
            "assetUri": [
                643
            ],
            "assetPreviewUri": [
                643
            ],
            "additionalImages": [
                643
            ],
            "assetFileType": [
                643
            ],
            "metadata": [
                748
            ],
            "__typename": [
                643
            ]
        },
        "StatsPlayerGameScores": {
            "blocks": [
                310
            ],
            "points": [
                310
            ],
            "steals": [
                310
            ],
            "assists": [
                310
            ],
            "minutes": [
                643
            ],
            "rebounds": [
                310
            ],
            "turnovers": [
                310
            ],
            "plusMinus": [
                310
            ],
            "flagrantFouls": [
                310
            ],
            "personalFouls": [
                310
            ],
            "technicalFouls": [
                310
            ],
            "twoPointsMade": [
                310
            ],
            "blockedAttempts": [
                310
            ],
            "fieldGoalsMade": [
                310
            ],
            "freeThrowsMade": [
                310
            ],
            "threePointsMade": [
                310
            ],
            "defensiveRebounds": [
                310
            ],
            "offensiveRebounds": [
                310
            ],
            "pointsOffTurnovers": [
                310
            ],
            "twoPointsAttempted": [
                310
            ],
            "assistTurnoverRatio": [
                157
            ],
            "fieldGoalsAttempted": [
                310
            ],
            "freeThrowsAttempted": [
                310
            ],
            "twoPointsPercentage": [
                157
            ],
            "fieldGoalsPercentage": [
                157
            ],
            "freeThrowsPercentage": [
                157
            ],
            "threePointsAttempted": [
                310
            ],
            "threePointsPercentage": [
                157
            ],
            "playerPosition": [
                500
            ],
            "__typename": [
                643
            ]
        },
        "StatsPlayerSeasonAverageScores": {
            "minutes": [
                643
            ],
            "blocks": [
                157
            ],
            "points": [
                157
            ],
            "steals": [
                157
            ],
            "assists": [
                157
            ],
            "rebounds": [
                157
            ],
            "turnovers": [
                157
            ],
            "plusMinus": [
                157
            ],
            "flagrantFouls": [
                157
            ],
            "personalFouls": [
                157
            ],
            "technicalFouls": [
                157
            ],
            "twoPointsMade": [
                157
            ],
            "blockedAttempts": [
                157
            ],
            "fieldGoalsMade": [
                157
            ],
            "freeThrowsMade": [
                157
            ],
            "threePointsMade": [
                157
            ],
            "defensiveRebounds": [
                157
            ],
            "offensiveRebounds": [
                157
            ],
            "pointsOffTurnovers": [
                157
            ],
            "twoPointsAttempted": [
                157
            ],
            "assistTurnoverRatio": [
                157
            ],
            "fieldGoalsAttempted": [
                157
            ],
            "freeThrowsAttempted": [
                157
            ],
            "twoPointsPercentage": [
                157
            ],
            "fieldGoalsPercentage": [
                157
            ],
            "freeThrowsPercentage": [
                157
            ],
            "threePointsAttempted": [
                157
            ],
            "threePointsPercentage": [
                157
            ],
            "efficiency": [
                157
            ],
            "true_shooting_attempts": [
                157
            ],
            "points_in_paint_made": [
                157
            ],
            "points_in_paint_attempted": [
                157
            ],
            "points_in_paint": [
                157
            ],
            "fouls_drawn": [
                157
            ],
            "offensive_fouls": [
                157
            ],
            "fast_break_points": [
                157
            ],
            "fast_break_points_attempted": [
                157
            ],
            "fast_break_points_made": [
                157
            ],
            "second_chance_points": [
                157
            ],
            "second_chance_points_attempted": [
                157
            ],
            "second_chance_points_made": [
                157
            ],
            "__typename": [
                643
            ]
        },
        "String": {},
        "StringTuple": {
            "key": [
                643
            ],
            "value": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "SubmitVoteForPollError": {},
        "SubmitVoteForPollInput": {
            "pollID": [
                308
            ],
            "playID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "SubmitVoteForPollResponse": {
            "error": [
                645
            ],
            "__typename": [
                643
            ]
        },
        "Syncable": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "on_Edition": [
                130
            ],
            "on_EditionListing": [
                134
            ],
            "on_MarketplaceTransaction": [
                341
            ],
            "on_MintedMoment": [
                354
            ],
            "on_MomentGroup": [
                365
            ],
            "on_MomentListing": [
                367
            ],
            "on_OnChainPack": [
                410
            ],
            "on_Pack": [
                433
            ],
            "on_PackListing": [
                439
            ],
            "on_PacksForUserCollection": [
                470
            ],
            "on_Play": [
                482
            ],
            "on_Set": [
                610
            ],
            "on_Showcase": [
                624
            ],
            "on_UserChallenge": [
                696
            ],
            "__typename": [
                643
            ]
        },
        "TS50": {
            "polls": [
                503
            ],
            "__typename": [
                643
            ]
        },
        "Tag": {
            "id": [
                308
            ],
            "name": [
                643
            ],
            "title": [
                643
            ],
            "visible": [
                31
            ],
            "hardcourt": [
                31
            ],
            "level": [
                651
            ],
            "__typename": [
                643
            ]
        },
        "TagLevel": {},
        "Team": {
            "id": [
                308
            ],
            "name": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "TeamCollectionFilters": {
            "bySeries": [
                609
            ],
            "__typename": [
                643
            ]
        },
        "TeamCollectionFiltersInput": {
            "bySeries": [
                609
            ],
            "__typename": [
                643
            ]
        },
        "TeamCompletionPlayer": {
            "playerId": [
                643
            ],
            "playerName": [
                643
            ],
            "owned": [
                31
            ],
            "locked": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "TeamCompletionProgress": {
            "ownedPlayerCount": [
                310
            ],
            "lockedPlayerCount": [
                310
            ],
            "requiredCount": [
                310
            ],
            "teamId": [
                308
            ],
            "players": [
                655
            ],
            "bonusPointsAvailable": [
                310
            ],
            "bonusPointsEarned": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "TeamLeaderboard": {
            "id": [
                643
            ],
            "kind": [
                322
            ],
            "entries": [
                325
            ],
            "__typename": [
                643
            ]
        },
        "TeamScoresByQuarter": {
            "quarterScores": [
                530
            ],
            "__typename": [
                643
            ]
        },
        "TeamSeriesCompletionProgress": {
            "ownedPlayerCount": [
                310
            ],
            "lockedPlayerCount": [
                310
            ],
            "requiredCount": [
                310
            ],
            "teamId": [
                308
            ],
            "flowSeriesNumber": [
                310
            ],
            "players": [
                655
            ],
            "bonusPointsAvailable": [
                310
            ],
            "bonusPointsEarned": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "TeamSeriesCompletionProgressBucket": {
            "teamId": [
                308
            ],
            "seriesProgress": [
                659
            ],
            "contemporaryProgress": [
                656
            ],
            "allProgress": [
                656
            ],
            "__typename": [
                643
            ]
        },
        "Teams": {
            "size": [
                310
            ],
            "data": [
                652
            ],
            "__typename": [
                643
            ]
        },
        "Time": {},
        "Title": {
            "id": [
                308
            ],
            "name": [
                643
            ],
            "description": [
                643
            ],
            "category": [
                664
            ],
            "collectorCount": [
                310
            ],
            "collectorFraction": [
                157
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "TitleCategory": {
            "id": [
                308
            ],
            "name": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "TopshotScore": {
            "dapperID": [
                308
            ],
            "score": [
                310
            ],
            "momentCount": [
                310
            ],
            "bonusData": [
                667
            ],
            "__typename": [
                643
            ]
        },
        "TopshotScoreBonus": {
            "bonusID": [
                668
            ],
            "bonusPts": [
                310
            ],
            "qualified": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "TopshotScoreBonusData": {
            "name": [
                643
            ],
            "bonusTotal": [
                310
            ],
            "bonuses": [
                666
            ],
            "__typename": [
                643
            ]
        },
        "TopshotScoreBonusID": {},
        "TopshotScoreFilters": {
            "byTeamIDs": [
                308
            ],
            "byPlayerIDs": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "TopshotScoreRequestBonusGroup": {
            "name": [
                643
            ],
            "bonusIds": [
                668
            ],
            "__typename": [
                643
            ]
        },
        "TotalBurnedMomentCountByRarity": {
            "momentTier": [
                379
            ],
            "momentCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "TransferPacksInput": {
            "packIDs": [
                643
            ],
            "receiverDapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "TransferPacksResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "URL": {},
        "UnhideOffersInput": {
            "offerIDs": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UnhideOffersResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "UnpinMomentInput": {
            "momentID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "UnpinMomentResponse": {
            "success": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "UpdateMomentGroupInput": {
            "momentGroupID": [
                643
            ],
            "name": [
                643
            ],
            "order": [
                157
            ],
            "__typename": [
                643
            ]
        },
        "UpdateMomentGroupResponse": {
            "momentGroup": [
                365
            ],
            "__typename": [
                643
            ]
        },
        "UpdateNBAMarketingRequest": {
            "ip": [
                643
            ],
            "email": [
                643
            ],
            "nbaNewsletter": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "UpdateNBAMarketingResponse": {
            "isSuccess": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "UpdateUserSettingsResponse": {
            "userSettings": [
                712
            ],
            "__typename": [
                643
            ]
        },
        "UpdateVariableChallengeSubmissionInput": {
            "submissionID": [
                308
            ],
            "challengeID": [
                308
            ],
            "slots": [
                729
            ],
            "__typename": [
                643
            ]
        },
        "UpdateWatchlistInput": {
            "id": [
                308
            ],
            "title": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "UpsertUserProfileInput": {
            "flowAddress": [
                643
            ],
            "dapperID": [
                643
            ],
            "email": [
                643
            ],
            "username": [
                643
            ],
            "profileImageUrl": [
                643
            ],
            "twitterHandle": [
                643
            ],
            "segmentId": [
                643
            ],
            "favoriteTeamID": [
                643
            ],
            "country": [
                643
            ],
            "city": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "UpsertUserProfileResponse": {
            "dapperID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "User": {
            "sortID": [
                633
            ],
            "dapperID": [
                643
            ],
            "email": [
                643
            ],
            "flowAddress": [
                643
            ],
            "username": [
                643
            ],
            "profileImageUrl": [
                643
            ],
            "twitterHandle": [
                643
            ],
            "segmentID": [
                643
            ],
            "country": [
                643
            ],
            "city": [
                643
            ],
            "topshotScore": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserBallerStatus": {
            "level": [
                24
            ],
            "totalPoints": [
                310
            ],
            "milestones": [
                690
            ],
            "dapperID": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "UserBallerStatusMilestone": {
            "label": [
                27
            ],
            "orderedTasks": [
                691
            ],
            "numCompletedActions": [
                310
            ],
            "seenAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "UserBallerStatusTask": {
            "points": [
                310
            ],
            "status": [
                28
            ],
            "numRequiredActions": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserBurnedMoment": {
            "id": [
                643
            ],
            "flowID": [
                310
            ],
            "flowSerialNumber": [
                310
            ],
            "subeditionID": [
                310
            ],
            "assetPathPrefix": [
                643
            ],
            "flowSeriesNumber": [
                310
            ],
            "tier": [
                379
            ],
            "flowName": [
                643
            ],
            "visualID": [
                734
            ],
            "playID": [
                643
            ],
            "headline": [
                643
            ],
            "circulationCount": [
                310
            ],
            "username": [
                643
            ],
            "profileImageURL": [
                643
            ],
            "score": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserBurnedMomentStats": {
            "username": [
                643
            ],
            "profileImageURL": [
                643
            ],
            "momentCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserBurnedTopshotScore": {
            "username": [
                643
            ],
            "profileImageURL": [
                643
            ],
            "score": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserCampaignEventProgress": {
            "timesCompleted": [
                310
            ],
            "completedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "UserChallenge": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "sortID": [
                633
            ],
            "name": [
                643
            ],
            "description": [
                643
            ],
            "expirationDate": [
                662
            ],
            "slots": [
                53
            ],
            "reward": [
                51
            ],
            "rewardStatus": [
                52
            ],
            "numUsersCompleted": [
                310
            ],
            "numUserSubmissions": [
                310
            ],
            "type": [
                55
            ],
            "variableChallenge": [
                718
            ],
            "userSubmission": [
                726
            ],
            "visibility": [
                56
            ],
            "__typename": [
                643
            ]
        },
        "UserChallenges": {
            "size": [
                310
            ],
            "data": [
                696
            ],
            "__typename": [
                643
            ]
        },
        "UserMomentListing": {
            "id": [
                308
            ],
            "version": [
                733
            ],
            "price": [
                507
            ],
            "moment": [
                354
            ],
            "seller": [
                688
            ],
            "__typename": [
                643
            ]
        },
        "UserMomentListings": {
            "set": [
                610
            ],
            "play": [
                482
            ],
            "assetPathPrefix": [
                643
            ],
            "version": [
                733
            ],
            "priceRange": [
                508
            ],
            "momentListings": [
                698
            ],
            "setPlay": [
                361
            ],
            "circulationCount": [
                310
            ],
            "flowRetired": [
                31
            ],
            "momentListingCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserMomentListingsResponse": {
            "data": [
                699
            ],
            "__typename": [
                643
            ]
        },
        "UserPackListingEligibility": {
            "isEligible": [
                31
            ],
            "levels": [
                702
            ],
            "maxOrderQuantity": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserPackListingLevelEligibility": {
            "id": [
                308
            ],
            "name": [
                643
            ],
            "isEligible": [
                31
            ],
            "requirements": [
                549
            ],
            "maxOrderQuantity": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "UserPackListingsSort": {},
        "UserPublicInfo": {
            "dapperID": [
                643
            ],
            "flowAddress": [
                643
            ],
            "username": [
                643
            ],
            "profileImageUrl": [
                643
            ],
            "twitterHandle": [
                643
            ],
            "createdAt": [
                662
            ],
            "favoriteTeamID": [
                643
            ],
            "country": [
                643
            ],
            "city": [
                643
            ],
            "successfulReferrals": [
                310
            ],
            "ownedSpecialNFTTypes": [
                637
            ],
            "collectorScore": [
                75
            ],
            "titles": [
                714
            ],
            "__typename": [
                643
            ]
        },
        "UserSearchFilters": {
            "country": [
                643
            ],
            "city": [
                643
            ],
            "username": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "UserSearchSortType": {},
        "UserSearchSummary": {
            "filters": [
                705
            ],
            "sortBy": [
                706
            ],
            "searchSummary": [
                598
            ],
            "__typename": [
                643
            ]
        },
        "UserSetAssociation": {
            "sortID": [
                633
            ],
            "setID": [
                308
            ],
            "user": [
                704
            ],
            "startedAt": [
                662
            ],
            "completedAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "UserSetAssociationFilters": {
            "byIsCompleted": [
                31
            ],
            "bySets": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "UserSetAssociationSortType": {},
        "UserSetAssociations": {
            "size": [
                310
            ],
            "data": [
                708
            ],
            "__typename": [
                643
            ]
        },
        "UserSettings": {
            "notificationSettings": [
                399
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "UserSettingsUpdateInput": {
            "notificationSettings": [
                400
            ],
            "__typename": [
                643
            ]
        },
        "UserTitle": {
            "dapperID": [
                308
            ],
            "title": [
                663
            ],
            "isSelected": [
                31
            ],
            "createdAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "UserTopshotTag": {
            "id": [
                308
            ],
            "tagID": [
                308
            ],
            "dapperID": [
                643
            ],
            "title": [
                643
            ],
            "rewardedFromTitle": [
                643
            ],
            "description": [
                643
            ],
            "imageURL": [
                643
            ],
            "videoURL": [
                643
            ],
            "slug": [
                643
            ],
            "obtainedAt": [
                662
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "Users": {
            "size": [
                310
            ],
            "data": [
                688
            ],
            "__typename": [
                643
            ]
        },
        "ValueType": {},
        "VariableChallenge": {
            "id": [
                308
            ],
            "Category": [
                720
            ],
            "summary": [
                643
            ],
            "finePrint": [
                643
            ],
            "ribbonText": [
                643
            ],
            "prize": [
                643
            ],
            "startDate": [
                662
            ],
            "assets": [
                719
            ],
            "prerequisites": [
                722
            ],
            "variableSlots": [
                723
            ],
            "pageData": [
                721
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeAssets": {
            "image": [
                643
            ],
            "video": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeCategory": {},
        "VariableChallengePageData": {
            "completedTitle": [
                643
            ],
            "incompletedTitle": [
                643
            ],
            "successDescription": [
                643
            ],
            "successMedia": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengePrerequisites": {
            "prerequisites": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSlot": {
            "id": [
                308
            ],
            "label": [
                643
            ],
            "query": [
                724
            ],
            "slotOrder": [
                310
            ],
            "helpText": [
                643
            ],
            "slotType": [
                725
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSlotQuery": {
            "byPlayers": [
                308
            ],
            "bySetPlayTagIDs": [
                308
            ],
            "byPlayTagIDs": [
                308
            ],
            "byPlayIDs": [
                308
            ],
            "byTeams": [
                308
            ],
            "bySets": [
                308
            ],
            "bySeries": [
                308
            ],
            "bySetVisuals": [
                308
            ],
            "byMomentTiers": [
                379
            ],
            "byPlayCategory": [
                308
            ],
            "byActiveChallenge": [
                308
            ],
            "byPrimaryPlayerPosition": [
                500
            ],
            "byLeagues": [
                326
            ],
            "byGameDate": [
                116
            ],
            "byCreatedAt": [
                116
            ],
            "byPrice": [
                509
            ],
            "byEditions": [
                142
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSlotType": {},
        "VariableChallengeSubmission": {
            "id": [
                308
            ],
            "status": [
                731
            ],
            "slots": [
                728
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSubmissionResponse": {
            "id": [
                308
            ],
            "challengeID": [
                308
            ],
            "slots": [
                730
            ],
            "status": [
                731
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSubmissionSlot": {
            "id": [
                308
            ],
            "slotID": [
                308
            ],
            "momentID": [
                308
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSubmissionSlotInput": {
            "slotID": [
                308
            ],
            "momentID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSubmissionSlotResponse": {
            "id": [
                308
            ],
            "slotID": [
                308
            ],
            "momentID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "VariableChallengeSubmissionStatus": {},
        "VendorMomentListing": {
            "id": [
                308
            ],
            "set": [
                610
            ],
            "play": [
                482
            ],
            "version": [
                733
            ],
            "price": [
                507
            ],
            "assetPathPrefix": [
                643
            ],
            "previousPrice": [
                507
            ],
            "circulationCount": [
                310
            ],
            "__typename": [
                643
            ]
        },
        "Version": {},
        "VisualIdType": {},
        "WaitingRoom": {
            "name": [
                643
            ],
            "isActive": [
                31
            ],
            "activeAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "WatchedEdition": {
            "sortID": [
                633
            ],
            "playId": [
                643
            ],
            "setId": [
                643
            ],
            "watchlistId": [
                643
            ],
            "watchersCount": [
                310
            ],
            "edition": [
                130
            ],
            "__typename": [
                643
            ]
        },
        "WatchedEditionFilters": {
            "byWatchlistID": [
                308
            ],
            "byWatchlistDapperID": [
                308
            ],
            "byWatchedEdition": [
                736
            ],
            "byWatchlistTitle": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "WatchedEditionFiltersInput": {
            "byWatchlistID": [
                308
            ],
            "byWatchlistDapperID": [
                308
            ],
            "byWatchedEdition": [
                739
            ],
            "byWatchlistTitle": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "WatchedEditionInput": {
            "playID": [
                308
            ],
            "setID": [
                308
            ],
            "__typename": [
                643
            ]
        },
        "WatchedEditions": {
            "size": [
                310
            ],
            "data": [
                736
            ],
            "__typename": [
                643
            ]
        },
        "WatchedEditionsSortType": {},
        "Watchlist": {
            "id": [
                308
            ],
            "dapperID": [
                308
            ],
            "title": [
                643
            ],
            "createdAt": [
                662
            ],
            "updatedAt": [
                662
            ],
            "__typename": [
                643
            ]
        },
        "WatchlistData": {
            "watcherCount": [
                310
            ],
            "isWatchedByUser": [
                31
            ],
            "__typename": [
                643
            ]
        },
        "WatchlistResponse": {
            "data": [
                742
            ],
            "__typename": [
                643
            ]
        },
        "authorizePackNFTsMintingResponse": {
            "signature": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "getUserProfileByUsernameInput": {
            "username": [
                643
            ],
            "__typename": [
                643
            ]
        },
        "headlineSourceType": {},
        "metadata": {
            "on_AllstarSetMetadata": [
                19
            ],
            "__typename": [
                643
            ]
        }
    }
}