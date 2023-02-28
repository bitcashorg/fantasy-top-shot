export type Scalars = {
    Boolean: boolean,
    Cursor: any,
    Date: any,
    Float: number,
    ID: string,
    Int: number,
    Map: any,
    Price: any,
    SortID: any,
    String: string,
    Time: any,
    URL: any,
    Version: any,
}

export interface AccountFirstPurchaseAgeError {
    accountFirstPurchaseAgeMinutesLeft: Scalars['Int']
    accountFirstPurchaseAgeSecondsLeft: Scalars['Int']
    __typename: 'AccountFirstPurchaseAgeError'
}

export interface Activities {
    size?: Scalars['Int']
    data: Activity[]
    __typename: 'Activities'
}

export interface Activity {
    id: Scalars['ID']
    sortID?: Scalars['SortID']
    subject?: ActivitySubject
    status?: ActivityStatus
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    activityType?: ActivityType
    isRead?: Scalars['Boolean']
    __typename: 'Activity'
}

export interface ActivityFilters {
    byUnread?: Scalars['Boolean']
    byStatus?: ActivityStatus[]
    byType?: ActivityType[]
    __typename: 'ActivityFilters'
}

export type ActivitySortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC'

export type ActivityStatus = 'PENDING' | 'SUCCESS' | 'FAILED'

export type ActivitySubject = (PurchaseVendorMomentActivity | PurchaseP2PMomentActivity | P2PMomentListingActivity | P2PMomentListingCancellationActivity | P2PMomentListingSoldActivity | PurchasePackActivity | MomentTransferRequestActivity | MomentTransferReceivedActivity | MomentTradeInRequestActivity | MomentsTradeInRequestActivity | OfferAvailableActivity | OfferCompletedActivity | SpecialNftPurchasedActivity | SpecialNftSoldActivity) & { __isUnion?: true }

export type ActivityType = 'PURCHASE_VENDOR_MOMENT' | 'P2P_MOMENT_LISTING' | 'P2P_MOMENT_LISTING_CANCELLATION' | 'P2P_MOMENT_LISTING_SOLD' | 'PURCHASE_P2P_MOMENT' | 'PURCHASE_PACK' | 'MOMENT_TRANSFER_REQUEST' | 'MOMENT_TRANSFER_RECEIVED' | 'MOMENT_TRADE_IN_REQUEST' | 'PURCHASE_PACK_WITH_TICKETS' | 'MOMENTS_TRADE_IN_REQUEST' | 'OFFER_AVAILABLE' | 'OFFER_COMPLETED' | 'SPECIAL_NFT_PURCHASED' | 'SPECIAL_NFT_SOLD'

export interface AddEditionToWatchlistResponse {
    success: Scalars['Boolean']
    __typename: 'AddEditionToWatchlistResponse'
}

export interface AddMomentsToGroupsResponse {
    groupMomentIDs?: Scalars['String'][]
    __typename: 'AddMomentsToGroupsResponse'
}

export interface AddUserMarketingCampaignResponse {
    isAdded: Scalars['Boolean']
    __typename: 'AddUserMarketingCampaignResponse'
}

export interface AddUserReferralResponse {
    isAdded: Scalars['Boolean']
    __typename: 'AddUserReferralResponse'
}

export interface AllstarSetMetadata {
    teamID?: Scalars['String']
    __typename: 'AllstarSetMetadata'
}

export interface Auction {
    listingID: Scalars['Int']
    maxBid: Scalars['Price']
    maxBidWalletID: Scalars['String']
    saleEndDate: Scalars['Time']
    __typename: 'Auction'
}

export interface AuthenticateResponse {
    idToken: Scalars['String']
    refreshToken: Scalars['String']
    __typename: 'AuthenticateResponse'
}

export interface BallerStatusLevel {
    label?: BallerStatusLevelLabel
    pointThreshold?: Scalars['Int']
    __typename: 'BallerStatusLevel'
}

export type BallerStatusLevelLabel = 'STREET_BALLER' | 'ROOK' | 'RISING_STAR' | 'VET' | 'ELITE' | 'ALL_STAR'

export interface BallerStatusLevels {
    levels?: (BallerStatusLevel | undefined)[]
    __typename: 'BallerStatusLevels'
}

export type BallerStatusMilestoneLabel = 'BUY_FIRST_PACK' | 'COMMON_PACK_PURCHASE' | 'RARE_PACK_PURCHASE' | 'LEGENDARY_PACK_PURCHASE' | 'BUILD_SHOWCASE' | 'COLLECT_COMMON_PACK_MOMENTS' | 'COLLECT_RARE_PACK_MOMENTS' | 'COLLECT_LEGENDARY_PACK_MOMENTS' | 'EARLY_ADOPTER' | 'CHALLENGE_COMPLETION' | 'LIST_FIRST_MOMENT_FOR_SALE' | 'SELL_MOMENT' | 'COLLECT_FAVORITE_TEAM_MOMENT' | 'COLLECT_PLAYS_DUNK'

export type BallerStatusTaskStatus = 'ACTIVE' | 'COMPLETE'

export interface Bonus {
    /** id is a human readable ID, i.e. cool_cats, net_spend */
    id: Scalars['String']
    /** @deprecated score is deprecated. Use id only */
    score?: Scalars['Int']
    __typename: 'Bonus'
}

export interface BurnedEdition {
    setID?: Scalars['String']
    playID?: Scalars['String']
    subeditionID?: Scalars['Int']
    flowSeriesNumber?: Scalars['Int']
    flowName?: Scalars['String']
    visualID?: VisualIdType
    headline?: Scalars['String']
    assetPathPrefix?: Scalars['String']
    momentCount?: Scalars['Int']
    totalMomentCount?: Scalars['Int']
    __typename: 'BurnedEdition'
}

export type CSInterval = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'

export interface Campaign {
    id: Scalars['ID']
    slug?: Scalars['String']
    title: Scalars['String']
    description: Scalars['String']
    imageUrl: Scalars['String']
    startAt: Scalars['Time']
    endAt: Scalars['Time']
    visibility: CampaignVisibility
    reward: CampaignReward
    events?: CampaignEvent[]
    __typename: 'Campaign'
}

export interface CampaignEvent {
    id: Scalars['ID']
    category: Scalars['String']
    title: Scalars['String']
    description: Scalars['String']
    actionLink?: Scalars['String']
    timesRequired: Scalars['Int']
    validFrom: Scalars['Time']
    validTo: Scalars['Time']
    userProgress?: UserCampaignEventProgress
    __typename: 'CampaignEvent'
}

export interface CampaignReward {
    id: Scalars['ID']
    title: Scalars['String']
    description: Scalars['String']
    imageUrl: Scalars['String']
    videoUrl: Scalars['String']
    __typename: 'CampaignReward'
}

export type CampaignVisibility = 'PUBLIC' | 'DRAFT'

export interface CancelMomentSaleResponse {
    orderID: Scalars['String']
    __typename: 'CancelMomentSaleResponse'
}

export interface CancelPurchasePackResponse {
    success: Scalars['Boolean']
    __typename: 'CancelPurchasePackResponse'
}

export interface CancelReservationResponse {
    error?: CancelReservationResponseError
    __typename: 'CancelReservationResponse'
}

export type CancelReservationResponseError = 'RESERVATION_NOT_FOUND' | 'RESERVATION_NOT_APPROVED'

export type Chain = 'PUBLIC_MAIN_NET' | 'TS_MAIN_NET' | 'PUBLIC_TEST_NET' | 'TS_TEST_NET'

export type ChallengeCompletionStateFilter = 'COMPLETED' | 'NOT_COMPLETED'

export type ChallengeExpiryStateFilter = 'ACTIVE' | 'EXPIRED'

export interface ChallengeFilters {
    byUserID?: Scalars['String']
    byChallengeCompletionState?: ChallengeCompletionStateFilter
    byChallengeExpiryState?: ChallengeExpiryStateFilter
    byChallengeTypes?: ChallengeType[]
    byLoggedDapperId?: Scalars['String']
    /** @deprecated byHasValidUserSubmission should be used */
    byHasUserSubmission?: Scalars['Boolean']
    byHasValidUserSubmission?: Scalars['Boolean']
    byVariableChallengeCategories?: VariableChallengeCategory[]
    byChallengeVisibilities?: ChallengeVisibility[]
    __typename: 'ChallengeFilters'
}

export interface ChallengeProgress {
    challenge?: UserChallenge
    numTotalSlots?: Scalars['Int']
    numFilledSlots?: Scalars['Int']
    __typename: 'ChallengeProgress'
}

export interface ChallengeReward {
    playID?: Scalars['String']
    setID?: Scalars['String']
    assetPathPrefix?: Scalars['String']
    __typename: 'ChallengeReward'
}

export type ChallengeRewardStatus = 'PENDING' | 'RECEIVED'

export interface ChallengeSlot {
    playID?: Scalars['String']
    setID?: Scalars['String']
    filledMomentID?: Scalars['ID']
    __typename: 'ChallengeSlot'
}

export type ChallengeSortType = 'EXPIRATION_DATE_ASC' | 'EXPIRATION_DATE_DESC'

export type ChallengeType = 'TRADITIONAL' | 'SHOWCASE' | 'VARIABLE'

export type ChallengeVisibility = 'NONE' | 'PRIVATE' | 'PUBLIC' | 'HIDDEN'

export interface ChallengesProgress {
    progress?: ChallengeProgress[]
    __typename: 'ChallengesProgress'
}

export interface ChallengesSearchSummary {
    filters?: ChallengeFilters
    searchSummary?: SearchSummary
    sortBy?: ChallengeSortType
    __typename: 'ChallengesSearchSummary'
}

export interface CheckActiveChallengeSubmissionsByMomentIDResponse {
    isUsed: Scalars['Boolean']
    __typename: 'CheckActiveChallengeSubmissionsByMomentIDResponse'
}

export interface CheckExistingP2POrdersResponse {
    ordersExist: Scalars['Boolean']
    __typename: 'CheckExistingP2POrdersResponse'
}

export interface CodexFilters {
    bySeries?: SeriesFilter
    __typename: 'CodexFilters'
}

export interface CodexSet {
    set?: Set
    totalEditionSlots?: Scalars['Int']
    filledEditionSlots?: Scalars['Int']
    uniqueMoments?: Scalars['Int']
    hasChallengeReward?: Scalars['Boolean']
    isCompleted: Scalars['Boolean']
    completedAt?: Scalars['Time']
    __typename: 'CodexSet'
}

export interface CodexSetWithEditions {
    codexSet?: CodexSet
    editionSlots?: (EditionSlot | undefined)[]
    __typename: 'CodexSetWithEditions'
}

export interface Collectible {
    id: Scalars['ID']
    playID: Scalars['ID']
    setID: Scalars['ID']
    chain?: Chain
    mintNumber: Scalars['Int']
    __typename: 'Collectible'
}

export interface CollectorBonus {
    bonusId: Scalars['String']
    bonusPts?: Scalars['Int']
    qualified?: Scalars['Boolean']
    __typename: 'CollectorBonus'
}

export interface CollectorBonusData {
    name: Scalars['String']
    bonusTotal?: Scalars['Int']
    bonuses?: (CollectorBonus | undefined)[]
    __typename: 'CollectorBonusData'
}

export interface CollectorChallengeCounts {
    challengeRewards?: Scalars['Int']
    challengeCompletions?: Scalars['Int']
    __typename: 'CollectorChallengeCounts'
}

export interface CollectorEdition {
    quantity?: Scalars['Int']
    setName?: Scalars['String']
    visualId?: Scalars['Int']
    seriesNumber?: Scalars['Int']
    challengeReward?: Scalars['Boolean']
    challengeCompleted?: Scalars['Boolean']
    playerId?: Scalars['String']
    teamId?: Scalars['String']
    editionId?: Scalars['String']
    league?: Scalars['String']
    moments?: (CollectorMoment | undefined)[]
    __typename: 'CollectorEdition'
}

export interface CollectorIntervalData {
    score?: Scalars['Int']
    interval?: CSInterval
    __typename: 'CollectorIntervalData'
}

export interface CollectorMoment {
    acquiredAt?: Scalars['Time']
    serialNumber?: Scalars['Int']
    collectorScorePts?: CollectorScorePts
    __typename: 'CollectorMoment'
}

export interface CollectorPlayerTeamData {
    playerId: Scalars['ID']
    playerName?: Scalars['String']
    owned?: Scalars['Boolean']
    __typename: 'CollectorPlayerTeamData'
}

export interface CollectorScore {
    dapperId?: Scalars['String']
    score?: Scalars['Int']
    incrementScoreByMoment?: Scalars['Int']
    incrementScoreSinceDate?: Scalars['Int']
    incrementScoreByTeam?: Scalars['Int']
    incrementScoreByWNBA?: Scalars['Int']
    decrementScoreByMoment?: Scalars['Int']
    decrementScoreByMoments?: Scalars['Int']
    favoriteTeamId?: Scalars['String']
    teamData?: (CollectorScoreTeamCompletion | undefined)[]
    decrementedTeamData?: (CollectorScoreTeamCompletion | undefined)[]
    setData?: (CollectorSetData | undefined)[]
    decrementedSetData?: (CollectorSetData | undefined)[]
    seriesData?: (CollectorSeriesData | undefined)[]
    decrementedSeriesData?: (CollectorSeriesData | undefined)[]
    bonusData?: (CollectorBonusData | undefined)[]
    intervalData?: (CollectorIntervalData | undefined)[]
    momentData?: (CollectorEdition | undefined)[]
    specialNFTData?: (CollectorSpecialNFT | undefined)[]
    __typename: 'CollectorScore'
}

export interface CollectorScorePts {
    teamCompletionPts?: Scalars['Int']
    setCompletionPts?: Scalars['Int']
    seriesPts?: Scalars['Int']
    totalPts?: Scalars['Int']
    __typename: 'CollectorScorePts'
}

export interface CollectorScoreTeamCompletion {
    teamId: Scalars['ID']
    teamName?: Scalars['String']
    teamScore?: Scalars['Int']
    seriesCounts?: (CollectorTeamSeriesCounts | undefined)[]
    __typename: 'CollectorScoreTeamCompletion'
}

export interface CollectorSeriesCount {
    total?: Scalars['Int']
    title?: Scalars['String']
    challengeCounts?: CollectorChallengeCounts
    __typename: 'CollectorSeriesCount'
}

export interface CollectorSeriesData {
    seriesNumber?: Scalars['Int']
    title?: Scalars['String']
    challengeTitle?: Scalars['String']
    commonBase?: CollectorSeriesCount
    commonSE?: CollectorSeriesCount
    commonPromo?: CollectorSeriesCount
    fandom?: CollectorSeriesCount
    rare?: CollectorSeriesCount
    legendary?: CollectorSeriesCount
    anthology?: CollectorSeriesCount
    __typename: 'CollectorSeriesData'
}

export interface CollectorSetData {
    setId: Scalars['ID']
    setImage?: Scalars['String']
    setName?: Scalars['String']
    seriesNumber?: Scalars['Int']
    total?: Scalars['Int']
    owned?: Scalars['Int']
    isComplete?: Scalars['Boolean']
    __typename: 'CollectorSetData'
}

export interface CollectorSpecialNFT {
    flowId?: Scalars['Int']
    flowSetId?: Scalars['Int']
    teamId?: Scalars['String']
    acquiredAt?: Scalars['Time']
    momentTopshotScore?: MomentTopshotScore
    __typename: 'CollectorSpecialNFT'
}

export interface CollectorTeamSeriesCounts {
    seriesNumber?: Scalars['Int']
    owned?: Scalars['Int']
    total?: Scalars['Int']
    isComplete?: Scalars['Boolean']
    players?: (CollectorPlayerTeamData | undefined)[]
    __typename: 'CollectorTeamSeriesCounts'
}

export interface CompleteCampaignEventResponse {
    success: Scalars['Boolean']
    __typename: 'CompleteCampaignEventResponse'
}

export interface CompletedUserChallenge {
    challenge?: UserChallenge
    rewardStatus?: ChallengeRewardStatus
    __typename: 'CompletedUserChallenge'
}

export type ConfirmPackPurchaseError = 'ORDER_NOT_FOUND' | 'PACKS_NOT_RESERVED' | 'PACK_LISTING_NOT_FOUND' | 'RECEIPT_INVALID'

export interface ConfirmPackPurchaseResponse {
    error?: ConfirmPackPurchaseError
    orderID?: Scalars['ID']
    __typename: 'ConfirmPackPurchaseResponse'
}

export interface CountSummary {
    count?: Scalars['Int']
    __typename: 'CountSummary'
}

export interface CreateBulkMomentTradeInRequestResponse {
    RequestID: Scalars['String']
    __typename: 'CreateBulkMomentTradeInRequestResponse'
}

export type CreateDropSquadError = 'ALREADY_ASSOCIATED' | 'INVALID_PACK_LISTING'

export interface CreateDropSquadResponse {
    dropSquadID?: Scalars['ID']
    error?: CreateDropSquadError
    __typename: 'CreateDropSquadResponse'
}

export interface CreateMomentGroupResponse {
    momentGroup: MomentGroup
    __typename: 'CreateMomentGroupResponse'
}

export interface CreateMomentSaleResponse {
    orderID: Scalars['String']
    __typename: 'CreateMomentSaleResponse'
}

export interface CreateMomentTradeInRequestResponse {
    RequestID: Scalars['String']
    __typename: 'CreateMomentTradeInRequestResponse'
}

export interface CreateMomentTransferRequestResponse {
    ID: Scalars['String']
    validation: MomentTransferValidationResults
    __typename: 'CreateMomentTransferRequestResponse'
}

export type CreateMomentTransferRequestResult = (CreateMomentTransferRequestSuccess | AccountFirstPurchaseAgeError | MomentAgeError | InsufficientMomentsError) & { __isUnion?: true }

export interface CreateMomentTransferRequestSuccess {
    ID: Scalars['String']
    __typename: 'CreateMomentTransferRequestSuccess'
}

export interface CreatePackPurchaseIntentResponse {
    orderID?: Scalars['String']
    error?: CreatePackPurchaseIntentResponseError
    __typename: 'CreatePackPurchaseIntentResponse'
}

export type CreatePackPurchaseIntentResponseError = 'INELIGIBLE' | 'CAPTCHA_FAILED' | 'INVALID_QUEUE' | 'EXCEEDED_QUANTITY' | 'RESERVATION_EXISTS'

export type Currency = 'USD' | 'TICKETS' | 'DAPPER_CREDIT'

export type CursorDirection = 'LEFT' | 'RIGHT'

export interface DateRangeFilter {
    start?: Scalars['Time']
    end?: Scalars['Time']
    __typename: 'DateRangeFilter'
}

export interface DeleteMomentGroupResponse {
    success: Scalars['Boolean']
    __typename: 'DeleteMomentGroupResponse'
}

export interface DeleteShowcaseResponse {
    deletedShowcaseID: Scalars['ID']
    __typename: 'DeleteShowcaseResponse'
}

export interface DeleteWatchlistResponse {
    success: Scalars['Boolean']
    __typename: 'DeleteWatchlistResponse'
}

export type Direction = 'ASC' | 'DESC'

export interface DropSquad {
    /** Autogenerated unique identifier of a squad */
    id: Scalars['ID']
    /** packListingID is the unique identifier for the pack listing the squad is associated with */
    packListingID: Scalars['ID']
    /** members will be sorted by joined_at asc to prevent boxes moving around on the FE */
    members: DropSquadMember[]
    __typename: 'DropSquad'
}

export interface DropSquadMember {
    role: DropSquadMemberRole
    joinedAt: Scalars['Time']
    user: User
    __typename: 'DropSquadMember'
}

export type DropSquadMemberRole = 'OWNER' | 'MEMBER'

export interface DuplicateMomentGroupResponse {
    momentGroup: MomentGroup
    __typename: 'DuplicateMomentGroupResponse'
}

export interface Edition {
    id: Scalars['ID']
    set?: Set
    play?: Play
    setPlay: MintedSetPlay
    parallelSetPlay: MintedSetPlayParallel
    assetPathPrefix?: Scalars['String']
    sortID?: Scalars['SortID']
    version?: Scalars['Version']
    circulationCount?: Scalars['Int']
    flowRetired?: Scalars['Boolean']
    state?: EditionState
    tags?: (Tag | undefined)[]
    parallelID: Scalars['Int']
    challengeID?: Scalars['ID']
    momentTier?: MomentTier
    /** tier is the same as momentTier */
    tier?: MomentTier
    parallels?: (Edition | undefined)[]
    __typename: 'Edition'
}

export interface EditionAverageSaleData {
    averagePrice: Scalars['Price']
    numDays?: Scalars['Int']
    numSales?: Scalars['Int']
    __typename: 'EditionAverageSaleData'
}

export interface EditionFilters {
    bySetIDs?: (Scalars['ID'] | undefined)[]
    __typename: 'EditionFilters'
}

export interface EditionListing {
    id: Scalars['ID']
    version: Scalars['Version']
    sortID: Scalars['SortID']
    set?: Set
    play?: Play
    /** setPlay contains setPlay data including tags, circulation count and a retired flag */
    setPlay: MintedSetPlay
    /** parallelSetPlay contains setPlay data including tags, circulation count and a retired flag */
    parallelSetPlay: MintedSetPlayParallel
    assetPathPrefix?: Scalars['String']
    /** The price range for all the moments available for sale for this editions */
    priceRange: PriceRange
    /** How many of this edition listing are for sale */
    editionListingCount: Scalars['Int']
    /** how many of unique seller - edition pairs are on the marketplace */
    uniqueSellerCount: Scalars['Int']
    /** userOwnedEditionsCount is an amount of Editions(SetPlays) owned by the reqesting user */
    userOwnedEditionsCount: Scalars['Int']
    averageSaleData?: EditionAverageSaleData
    watchlistData?: WatchlistData
    tier?: MomentTier
    parallelID?: Scalars['Int']
    parallels?: (EditionListing | undefined)[]
    userID?: Scalars['ID']
    __typename: 'EditionListing'
}

export type EditionListingSortType = 'PRICE_USD_ASC' | 'PRICE_USD_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'GAME_DATE_ASC' | 'GAME_DATE_DESC' | 'SERIAL_NUMBER_ASC' | 'SERIAL_NUMBER_DESC' | 'PLAYER_FIRST_NAME_ASC' | 'PLAYER_FIRST_NAME_DESC' | 'PLAYER_LAST_NAME_ASC' | 'PLAYER_LAST_NAME_DESC' | 'MOST_WATCHED_ASC' | 'MOST_WATCHED_DESC' | 'RECOMMENDATIONS_ASC'

export interface EditionListings {
    size?: Scalars['Int']
    data: EditionListing[]
    __typename: 'EditionListings'
}

export interface EditionListingsFilters {
    bySets?: (Scalars['ID'] | undefined)[]
    byPlayers?: (Scalars['ID'] | undefined)[]
    byTeams?: (Scalars['ID'] | undefined)[]
    byPrimaryPlayerPosition?: (PlayerPosition | undefined)[]
    byPrice?: PriceRangeFilter
    bySerialNumber?: IntegerRangeFilter
    byPower?: IntegerRangeFilter
    byGameDate?: DateRangeFilter
    byCreatedAt?: DateRangeFilter
    byPlayerGameScores?: PlayerGameScoresFilters
    byPlayTagIDs?: (Scalars['ID'] | undefined)[]
    bySetPlayTagIDs?: (Scalars['ID'] | undefined)[]
    bySetVisuals?: (VisualIdType | undefined)[]
    byMomentTiers?: (MomentTier | undefined)[]
    byPlayIDs?: (Scalars['ID'] | undefined)[]
    bySeries?: (Scalars['ID'] | undefined)[]
    byPlayCategory?: (Scalars['ID'] | undefined)[]
    byActiveChallenge?: (Scalars['ID'] | undefined)[]
    byLeagues?: (League | undefined)[]
    byEditions?: (EditionsFilter | undefined)[]
    __typename: 'EditionListingsFilters'
}

export interface EditionSlot {
    edition?: Edition
    filledMomentIDs?: (Scalars['String'] | undefined)[]
    lockedMomentIDs?: (Scalars['String'] | undefined)[]
    __typename: 'EditionSlot'
}

export type EditionState = 'HIDDEN' | 'VISIBLE' | 'CHALLENGE_REWARD_UNRELEASED' | 'CHALLENGE_REWARD_RELEASED' | 'CHALLENGE_REWARD_COMING_SOON'

export interface Editions {
    size?: Scalars['Int']
    data: Edition[]
    __typename: 'Editions'
}

export interface EditionsFilter {
    setID: Scalars['ID']
    playID: Scalars['ID']
    __typename: 'EditionsFilter'
}

export interface ElasticsearchResponse {
    took?: Scalars['Int']
    timedOut?: Scalars['Boolean']
    hits?: ElasticsearchResponseHits
    aggregations?: Scalars['Map']
    __typename: 'ElasticsearchResponse'
}

export interface ElasticsearchResponseHits {
    total?: ElasticsearchResponseHitsTotal
    maxScore?: Scalars['Float']
    hits: ElasticsearchResponseHitsHits[]
    __typename: 'ElasticsearchResponseHits'
}

export interface ElasticsearchResponseHitsHits {
    index?: Scalars['String']
    id?: Scalars['String']
    score?: Scalars['Float']
    source?: Scalars['Map']
    __typename: 'ElasticsearchResponseHitsHits'
}

export interface ElasticsearchResponseHitsTotal {
    value?: Scalars['Int']
    relation?: Scalars['String']
    __typename: 'ElasticsearchResponseHitsTotal'
}

export interface ExchangeRate {
    from: ExchangeRateCurrency
    to: ExchangeRateCurrency
    rate: Scalars['String']
    __typename: 'ExchangeRate'
}

export type ExchangeRateCurrency = 'USD' | 'ETH' | 'FLOW'

export interface ExchangeRefreshTokenResponse {
    idToken: Scalars['String']
    newRefreshToken: Scalars['String']
    __typename: 'ExchangeRefreshTokenResponse'
}

export interface Expression {
    feature: MaxOrderQuantityFeature
    value: Scalars['Int']
    comparator: Scalars['String']
    result: Scalars['Int']
    __typename: 'Expression'
}

export type FeatureFlagKey = 'P2P' | 'P2P_DELISTING' | 'P2P_LISTING' | 'P2P_PURCHASING' | 'PACK_OPENING' | 'PACK_TRANSFERS' | 'PACKS' | 'TRANSFERS' | 'PUBLIC_COLLECTOR_SCORE' | 'TRADE_INS'

export interface FirstPurchaseReferral {
    packOrder?: PackPurchaseOrder
    p2pOrder?: P2PPurchaseOrder
    __typename: 'FirstPurchaseReferral'
}

export type ForSaleFilter = 'FOR_SALE' | 'NOT_FOR_SALE'

export interface GetActiveChallengesResponse {
    challenges?: UserChallenge[]
    __typename: 'GetActiveChallengesResponse'
}

export interface GetActiveUserSubmissionsByMomentIDsResponse {
    momentsUsageData?: MomentUsageData[]
    __typename: 'GetActiveUserSubmissionsByMomentIDsResponse'
}

export interface GetActivityResponse {
    data?: Activity
    __typename: 'GetActivityResponse'
}

export interface GetCodexResponse {
    codex?: (CodexSet | undefined)[]
    totalUserOwnedMoments?: Scalars['Int']
    numSetsInProgress?: Scalars['Int']
    numSetsCompleted?: Scalars['Int']
    totalUniqueEditionsOwned?: Scalars['Int']
    filters?: CodexFilters
    __typename: 'GetCodexResponse'
}

export interface GetCodexSetResponse {
    codexSetWithEditions?: CodexSetWithEditions
    __typename: 'GetCodexSetResponse'
}

export interface GetDropEligibilityResponse {
    normal: Scalars['Int']
    rare: Scalars['Int']
    legendary: Scalars['Int']
    totalSpend: Scalars['Int']
    eligible: Scalars['Boolean']
    __typename: 'GetDropEligibilityResponse'
}

export interface GetEditionListingResponse {
    data?: EditionListing
    lowestAskMoment?: MintedMoment
    __typename: 'GetEditionListingResponse'
}

export interface GetEditionResponse {
    edition?: Edition
    __typename: 'GetEditionResponse'
}

export interface GetEditionsWatcherCountResponse {
    editions?: WatchedEdition[]
    __typename: 'GetEditionsWatcherCountResponse'
}

export interface GetExchangeRatesResponse {
    exchangeRates?: (ExchangeRate | undefined)[]
    __typename: 'GetExchangeRatesResponse'
}

export interface GetGiftedMomentURLResponse {
    gifterID: Scalars['String']
    momentID: Scalars['String']
    redemptionUrl: Scalars['String']
    __typename: 'GetGiftedMomentURLResponse'
}

export interface GetHotEditionListingsResponse {
    listings?: EditionListing[]
    __typename: 'GetHotEditionListingsResponse'
}

export interface GetKYCStatusResponse {
    kycStatus: KYCStatus
    kycType: KycType
    __typename: 'GetKYCStatusResponse'
}

export interface GetLeaderboardEntryRelationshipResponse {
    relationships: (LeaderboardEntryRelationship | undefined)[]
    __typename: 'GetLeaderboardEntryRelationshipResponse'
}

export interface GetLeaderboardEntryResponse {
    entry: LeaderboardEntry
    __typename: 'GetLeaderboardEntryResponse'
}

export interface GetLeaderboardPotentialResponse {
    playerLeaderboards?: (LeaderboardPotential | undefined)[]
    teamLeaderboards?: (LeaderboardPotential | undefined)[]
    __typename: 'GetLeaderboardPotentialResponse'
}

export interface GetLeaderboardResponse {
    leaderboard?: Leaderboard
    pagination?: Pagination
    count?: Scalars['Int']
    __typename: 'GetLeaderboardResponse'
}

export interface GetMarketplaceTransactionEditionStatsResponse {
    editionStats?: MarketplaceTransactionEditionStats
    __typename: 'GetMarketplaceTransactionEditionStatsResponse'
}

export interface GetMintedMomentProgressForQuestResponse {
    id: Scalars['ID']
    current: Scalars['Int']
    total: Scalars['Int']
    complete: Scalars['Boolean']
    __typename: 'GetMintedMomentProgressForQuestResponse'
}

export interface GetMintedMomentsResponse {
    data?: (MintedMoment | undefined)[]
    __typename: 'GetMintedMomentsResponse'
}

export interface GetMomentGroupResponse {
    momentGroup: MomentGroup
    __typename: 'GetMomentGroupResponse'
}

export interface GetMomentTradeInRequestResponse {
    tradeInRequest?: MomentTradeInRequest
    __typename: 'GetMomentTradeInRequestResponse'
}

export interface GetMomentTransferRequestResponse {
    data?: MomentTransferRequest
    __typename: 'GetMomentTransferRequestResponse'
}

export interface GetMomentsTradeInRequestResponse {
    tradeInRequest?: MomentsTradeInRequest
    __typename: 'GetMomentsTradeInRequestResponse'
}

export interface GetMomentsWithHighestBurnedTopshotScoreResponse {
    moments?: (UserBurnedMoment | undefined)[]
    __typename: 'GetMomentsWithHighestBurnedTopshotScoreResponse'
}

export interface GetMyActiveChallengesResponse {
    challenges?: UserChallenge[]
    __typename: 'GetMyActiveChallengesResponse'
}

export interface GetMyCompletedChallengesResponse {
    completedUserChallenges?: CompletedUserChallenge[]
    __typename: 'GetMyCompletedChallengesResponse'
}

export interface GetMyProfileResponse {
    publicInfo: UserPublicInfo
    email: Scalars['String']
    segmentId?: Scalars['String']
    /** @deprecated use SearchMintedMoments filter byOwnerDapperID */
    moments: (MintedMoment | undefined)[]
    momentCount: Scalars['Int']
    referredByUserID?: Scalars['String']
    tradeTicketCount?: Scalars['Int']
    marketingCampaign?: Scalars['String']
    __typename: 'GetMyProfileResponse'
}

export interface GetMyReferralResponse {
    referredByUser?: User
    firstPurchase?: FirstPurchaseReferral
    __typename: 'GetMyReferralResponse'
}

export interface GetMyShowcasesResponse {
    showcases?: Showcase[]
    __typename: 'GetMyShowcasesResponse'
}

export interface GetOnChainPackResponse {
    onChainPack: OnChainPack
    __typename: 'GetOnChainPackResponse'
}

export interface GetOrderResponse {
    order?: Order
    __typename: 'GetOrderResponse'
}

export interface GetPackListingEligibilityV2Response {
    packListingId: Scalars['ID']
    listingEligibility?: ListingEligibility
    levelEligibility?: (LevelEligibility | undefined)[]
    __typename: 'GetPackListingEligibilityV2Response'
}

export interface GetPackListingResponse {
    data?: PackListing
    __typename: 'GetPackListingResponse'
}

export interface GetPackSummaryProgressResponse {
    /** Returns progress towards all active challenges */
    challengesProgress?: ChallengesProgress
    /** Returns progress towards all existing sets */
    setsProgress?: SetsProgress
    __typename: 'GetPackSummaryProgressResponse'
}

export interface GetPacksResponse {
    packs?: Packs
    __typename: 'GetPacksResponse'
}

export interface GetPinnedMomentsResponse {
    moments?: (MintedMoment | undefined)[]
    __typename: 'GetPinnedMomentsResponse'
}

export interface GetPlayResponse {
    play?: Play
    __typename: 'GetPlayResponse'
}

export interface GetPlayerDataWithCurrentStatsResponse {
    playerData?: PlayerData
    playerSeasonAverageScores?: StatsPlayerSeasonAverageScores
    __typename: 'GetPlayerDataWithCurrentStatsResponse'
}

export interface GetSetResponse {
    set?: Set
    __typename: 'GetSetResponse'
}

export interface GetSoftCurrencyPriceResponse {
    price: Scalars['Int']
    __typename: 'GetSoftCurrencyPriceResponse'
}

export interface GetSpecialNFTResponse {
    nft: SpecialNFT
    __typename: 'GetSpecialNFTResponse'
}

export interface GetSpecialNFTsResponse {
    nfts?: (SpecialNFT | undefined)[]
    __typename: 'GetSpecialNFTsResponse'
}

export interface GetTagsResponse {
    tags?: (Tag | undefined)[]
    __typename: 'GetTagsResponse'
}

export interface GetTeamSeriesCompletionProgressResponse {
    seriesProgress: TeamSeriesCompletionProgress[]
    contemporaryProgress: TeamCompletionProgress
    allProgress: TeamCompletionProgress
    __typename: 'GetTeamSeriesCompletionProgressResponse'
}

export interface GetTickerDataResponse {
    uniquePurchaseCount: Scalars['Int']
    uniqueBuyerCount: Scalars['Int']
    totalVolume: Scalars['Price']
    biggestSales: (SaleDto | undefined)[]
    mostPurchasedPlayer?: Scalars['String']
    __typename: 'GetTickerDataResponse'
}

export interface GetTitlesResponse {
    titles: (Title | undefined)[]
    __typename: 'GetTitlesResponse'
}

export interface GetTopNBurnedEditionsResponse {
    editions?: (BurnedEdition | undefined)[]
    __typename: 'GetTopNBurnedEditionsResponse'
}

export interface GetTopshotScoreAllTeamsSeriesCompletionProgressResponse {
    teamSeriesCompletionProgress: (TeamSeriesCompletionProgressBucket | undefined)[]
    __typename: 'GetTopshotScoreAllTeamsSeriesCompletionProgressResponse'
}

export interface GetTotalBurnedMomentCountByRarityResponse {
    counts?: (TotalBurnedMomentCountByRarity | undefined)[]
    __typename: 'GetTotalBurnedMomentCountByRarityResponse'
}

export interface GetTotalBurnedMomentCountResponse {
    count: Scalars['Int']
    __typename: 'GetTotalBurnedMomentCountResponse'
}

export interface GetTotalBurnedMomentsResponse {
    /** The total number of burned moments. */
    totalBurnedMoments: Scalars['Int']
    __typename: 'GetTotalBurnedMomentsResponse'
}

export interface GetTransferEligibilityResponse {
    accountFirstPurchaseAge: NumericTransferRequirement
    accountMomentCount: NumericTransferRequirement
    momentAge: NumericTransferRequirement
    __typename: 'GetTransferEligibilityResponse'
}

export interface GetUserCodexResponse {
    codex?: (CodexSet | undefined)[]
    totalUserOwnedMoments?: Scalars['Int']
    __typename: 'GetUserCodexResponse'
}

export interface GetUserCoolDownsResponse {
    p2pPurchaseRemainingSeconds?: Scalars['Int']
    p2pListingRemainingSeconds?: Scalars['Int']
    p2pDelistingRemainingSeconds?: Scalars['Int']
    __typename: 'GetUserCoolDownsResponse'
}

export interface GetUserEligibilityForJoiningPackListingQueueResponse {
    isEligibleToJoin: Scalars['Boolean']
    ineligibilityReason?: Scalars['String']
    __typename: 'GetUserEligibilityForJoiningPackListingQueueResponse'
}

export interface GetUserOrdersResponse {
    orders?: Orders
    __typename: 'GetUserOrdersResponse'
}

export interface GetUserOwnedSpecialNFTsResponse {
    nfts?: (SpecialNFT | undefined)[]
    __typename: 'GetUserOwnedSpecialNFTsResponse'
}

export interface GetUserP2PListingOrderResponse {
    data?: P2PListingOrder
    __typename: 'GetUserP2PListingOrderResponse'
}

export interface GetUserP2PListingOrdersResponse {
    data?: P2PListingOrders
    __typename: 'GetUserP2PListingOrdersResponse'
}

export interface GetUserP2PPurchaseOrderResponse {
    data?: P2PPurchaseOrder
    __typename: 'GetUserP2PPurchaseOrderResponse'
}

export interface GetUserP2PPurchaseOrdersResponse {
    data?: P2PPurchaseOrders
    __typename: 'GetUserP2PPurchaseOrdersResponse'
}

export interface GetUserPackOrderResponse {
    data?: PackPurchaseOrder
    __typename: 'GetUserPackOrderResponse'
}

export interface GetUserPackOrdersResponse {
    data?: PackPurchaseOrders
    __typename: 'GetUserPackOrdersResponse'
}

export interface GetUserPendingTxStatesResponse {
    hasPendingPackOpenRequests: Scalars['Boolean']
    __typename: 'GetUserPendingTxStatesResponse'
}

export interface GetUserProfileResponse {
    publicInfo: UserPublicInfo
    /** @deprecated use SearchMintedMoments filter byOwnerDapperID */
    moments: (MintedMoment | undefined)[]
    momentCount: Scalars['Int']
    __typename: 'GetUserProfileResponse'
}

export interface GetUserPurchaseStatsResponse {
    packsPurchased: Scalars['Int']
    starterPacksPurchased: Scalars['Int']
    boosterPacksPurchased: Scalars['Int']
    momentsPurchased: Scalars['Int']
    __typename: 'GetUserPurchaseStatsResponse'
}

export interface GetUserScoresForAllStarsBurningLeaderboardResponse {
    users?: (UserBurnedTopshotScore | undefined)[]
    __typename: 'GetUserScoresForAllStarsBurningLeaderboardResponse'
}

export interface GetUserScoresForRisingStarsLockingLeaderboardResponse {
    users?: (UserBurnedTopshotScore | undefined)[]
    __typename: 'GetUserScoresForRisingStarsLockingLeaderboardResponse'
}

export interface GetUserSettingsResponse {
    userSettings?: UserSettings
    __typename: 'GetUserSettingsResponse'
}

export interface GetUserShowcasesResponse {
    showcases?: Showcase[]
    __typename: 'GetUserShowcasesResponse'
}

export interface GetUserStatsByLocationResponse {
    data: Location[]
    __typename: 'GetUserStatsByLocationResponse'
}

export interface GetUserTitlesResponse {
    userTitles: (UserTitle | undefined)[]
    __typename: 'GetUserTitlesResponse'
}

export interface GetUserTopshotTagsResponse {
    tags?: UserTopshotTag[]
    __typename: 'GetUserTopshotTagsResponse'
}

export interface GetUsersWatchlistsResponse {
    size?: Scalars['Int']
    data: (Watchlist | undefined)[]
    __typename: 'GetUsersWatchlistsResponse'
}

export interface GetUsersWithHighestBurnedTopshotScoreResponse {
    users?: (UserBurnedTopshotScore | undefined)[]
    __typename: 'GetUsersWithHighestBurnedTopshotScoreResponse'
}

export interface GetUsersWithHighestNumberOfBurnedMomentsResponse {
    users?: (UserBurnedMomentStats | undefined)[]
    __typename: 'GetUsersWithHighestNumberOfBurnedMomentsResponse'
}

export interface GetVendorMomentListingResponse {
    data?: VendorMomentListing
    __typename: 'GetVendorMomentListingResponse'
}

export interface GiglabsAdditionalMetadata {
    image?: Scalars['String']
    preview?: Scalars['String']
    creatorName?: Scalars['String']
    externalUrl?: Scalars['String']
    ipfsImageHash?: Scalars['String']
    sha256ImageHash?: Scalars['String']
    ipfsMetadataHashes?: (Scalars['String'] | undefined)[]
    teamId?: Scalars['String']
    __typename: 'GiglabsAdditionalMetadata'
}

export interface GiglabsBadge {
    id?: Scalars['Int']
    name?: Scalars['String']
    assetUri?: Scalars['String']
    badgeToListingAssignment?: GiglabsBadgeToListingAssignment
    __typename: 'GiglabsBadge'
}

export interface GiglabsBadgeToListingAssignment {
    index?: Scalars['Int']
    createdDate?: Scalars['String']
    updatedDate?: Scalars['String']
    listingId?: Scalars['Int']
    badgeId?: Scalars['Int']
    __typename: 'GiglabsBadgeToListingAssignment'
}

export interface GiglabsBid {
    id?: Scalars['Int']
    walletID?: Scalars['String']
    price?: Scalars['Float']
    createdDate?: Scalars['String']
    listingID?: Scalars['Int']
    __typename: 'GiglabsBid'
}

export interface GiglabsListingBidsResponse {
    bids?: (GiglabsBid | undefined)[]
    __typename: 'GiglabsListingBidsResponse'
}

export type GiglabsListingType = 'LIMITED' | 'OPEN' | 'AUCTION'

export interface GiglabsMarketPlaceListingResponse {
    id?: Scalars['Int']
    uuid?: Scalars['String']
    orgID?: Scalars['Int']
    seriesID?: Scalars['Int']
    setName?: Scalars['String']
    setIndex?: Scalars['Int']
    listingType?: Scalars['String']
    status?: Scalars['String']
    active?: Scalars['Boolean']
    featured?: Scalars['Boolean']
    banner?: Scalars['Boolean']
    description?: Scalars['String']
    tags?: Scalars['String']
    assetUri?: Scalars['String']
    assetPreviewUri?: Scalars['String']
    assetStorageUri?: Scalars['String']
    assetPreviewStorageUri?: Scalars['String']
    assetFileType?: Scalars['String']
    additionalImages?: (Scalars['String'] | undefined)[]
    price?: Scalars['Float']
    reservePrice?: Scalars['Float']
    maxBid?: Scalars['Float']
    maxBidWalletID?: Scalars['String']
    nextBid?: Scalars['Float']
    mintQuantity?: Scalars['Int']
    hasUnlockableContent?: Scalars['Boolean']
    unlockableContentDesc?: Scalars['String']
    publishDate?: Scalars['String']
    saleStartDate?: Scalars['String']
    saleEndDate?: Scalars['String']
    requires?: Scalars['String']
    requiresOperator?: Scalars['String']
    modifiers?: Scalars['String']
    modifierType?: Scalars['String']
    modifierAmount?: Scalars['Int']
    shippingAddressRequired?: Scalars['Boolean']
    createdDate?: Scalars['String']
    updatedDate?: Scalars['String']
    purchaseLimit?: Scalars['Int']
    reserveMet?: Scalars['Boolean']
    additionalMetadata?: GiglabsAdditionalMetadata
    badges?: (GiglabsBadge | undefined)[]
    __typename: 'GiglabsMarketPlaceListingResponse'
}

export interface GiglabsMarketPlaceListingsResponse {
    records?: (GiglabsMarketPlaceListingResponse | undefined)[]
    count?: Scalars['Int']
    __typename: 'GiglabsMarketPlaceListingsResponse'
}

export interface GroupMomentOrder {
    id: Scalars['ID']
    momentGroupID: Scalars['String']
    momentID: Scalars['String']
    order: Scalars['Float']
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    __typename: 'GroupMomentOrder'
}

export interface HasUnreadActivitiesResponse {
    hasUnreadActivities: Scalars['Boolean']
    __typename: 'HasUnreadActivitiesResponse'
}

export interface HideOffersResponse {
    success: Scalars['Boolean']
    __typename: 'HideOffersResponse'
}

export interface InsufficientMomentsError {
    remainingMomentCount: Scalars['Int']
    __typename: 'InsufficientMomentsError'
}

export interface IntegerRangeFilter {
    min?: Scalars['Int']
    max?: Scalars['Int']
    __typename: 'IntegerRangeFilter'
}

export type JoinDropSquadError = 'DROP_SQUAD_FULL' | 'ALREADY_ASSOCIATED' | 'NOT_FOUND' | 'INVALID_PACK_LISTING' | 'DROP_STARTED'

export interface JoinDropSquadResponse {
    dropSquadID?: Scalars['ID']
    error?: JoinDropSquadError
    __typename: 'JoinDropSquadResponse'
}

export interface KYCCached {
    kycStatus: KYCStatus
    kycType: KycType
    updatedAt: Scalars['Time']
    __typename: 'KYCCached'
}

export type KYCStatus = 'NOT_INITIATED' | 'INITIATED' | 'UNSUCCESSFUL_ATTEMPT' | 'FAILED' | 'SUCCESS'

export type KycType = 'FULL' | 'LIGHT'

export type Leaderboard = (PlayerLeaderboard | TeamLeaderboard) & { __isUnion?: true }

export type LeaderboardEntry = (LeaderboardUser) & { __isUnion?: true }

export interface LeaderboardEntryRelationship {
    leaderboardID: Scalars['String']
    score: Scalars['Int']
    rank: Scalars['Int']
    entryCount: Scalars['Int']
    __typename: 'LeaderboardEntryRelationship'
}

export type LeaderboardKind = 'PLAYER' | 'TEAM'

export interface LeaderboardPotential {
    kind: LeaderboardKind
    id: Scalars['String']
    scoreAdded: Scalars['Int']
    scoreAddedFromBonus: Scalars['Int']
    scoreTotal: Scalars['Int']
    rank: Scalars['Int']
    totalUsers: Scalars['Int']
    __typename: 'LeaderboardPotential'
}

export type LeaderboardSortType = 'SCORE_ASC' | 'SCORE_DESC'

export interface LeaderboardUser {
    flowAddress: Scalars['String']
    score: Scalars['Int']
    rank: Scalars['Int']
    username: Scalars['String']
    profileImageURL: Scalars['String']
    __typename: 'LeaderboardUser'
}

export type League = 'NBA' | 'WNBA'

export type LeaveDropSquadError = 'NOT_FOUND'

export interface LeaveDropSquadResponse {
    error?: LeaveDropSquadError
    __typename: 'LeaveDropSquadResponse'
}

export interface Level {
    id: Scalars['String']
    name?: Scalars['String']
    waitingRoom?: WaitingRoom
    requirements?: (Requirement | undefined)[]
    bonuses?: (Bonus | undefined)[]
    maxOrderQuantity?: MaxOrderQuantityV2
    __typename: 'Level'
}

export interface LevelEligibility {
    isEligible: Scalars['Boolean']
    levelName?: Scalars['String']
    levelID: Scalars['String']
    requirements?: (Requirement | undefined)[]
    maxOrderQuantity: Scalars['Int']
    __typename: 'LevelEligibility'
}

export interface ListingEligibility {
    isEligible: Scalars['Boolean']
    requirements?: (Requirement | undefined)[]
    __typename: 'ListingEligibility'
}

export interface Location {
    country: Scalars['String']
    city?: Scalars['String']
    collectorsCount: Scalars['Int']
    totalMomentsOwned: Scalars['Int']
    totalTopshotScore: Scalars['Int']
    __typename: 'Location'
}

export type LockStatusFilter = 'LOCKED' | 'NOT_LOCKED'

export interface MarkActivitiesAsReadResponse {
    ok?: Scalars['Boolean']
    __typename: 'MarkActivitiesAsReadResponse'
}

export interface MarkAllActivitiesAsReadResponse {
    ok?: Scalars['Boolean']
    __typename: 'MarkAllActivitiesAsReadResponse'
}

export interface MarkAllUserTitlesAsSeenResponse {
    ok: Scalars['Boolean']
    __typename: 'MarkAllUserTitlesAsSeenResponse'
}

export interface MarketplaceTransaction {
    id: Scalars['ID']
    version: Scalars['Version']
    sortID: Scalars['SortID']
    seller: UserPublicInfo
    buyer: UserPublicInfo
    price: Scalars['Price']
    moment: MintedMoment
    txHash: Scalars['String']
    updatedAt: Scalars['Time']
    __typename: 'MarketplaceTransaction'
}

export interface MarketplaceTransactionEditionStats {
    totalSales?: Scalars['Int']
    mostRecentEditionSale?: MostRecentEditionSale
    averageSalePrice?: Scalars['Price']
    averageSalePriceInSerialNumRange?: Scalars['Price']
    highestSalePrice?: Scalars['Price']
    __typename: 'MarketplaceTransactionEditionStats'
}

export interface MarketplaceTransactionFilters {
    byEditions?: (EditionsFilter | undefined)[]
    byMoments?: Scalars['ID'][]
    byTeams?: Scalars['ID'][]
    byPrice?: PriceRangeFilter
    __typename: 'MarketplaceTransactionFilters'
}

export interface MarketplaceTransactionSearchSummary {
    filters?: MarketplaceTransactionFilters
    sortBy?: MarketplaceTransactionSortType
    searchSummary?: SearchSummary
    __typename: 'MarketplaceTransactionSearchSummary'
}

export interface MarketplaceTransactionSearchSummaryResponse {
    data?: MarketplaceTransactionSearchSummary
    __typename: 'MarketplaceTransactionSearchSummaryResponse'
}

export type MarketplaceTransactionSortType = 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'PRICE_ASC' | 'PRICE_DESC'

export interface MarketplaceTransactions {
    size?: Scalars['Int']
    data: MarketplaceTransaction[]
    __typename: 'MarketplaceTransactions'
}

export type MaxOrderQuantityFeature = 'COLLECTOR_SCORE' | 'TOPSHOT_SCORE'

export type MaxOrderQuantityOperator = 'PICK'

export interface MaxOrderQuantityV2 {
    operator: MaxOrderQuantityOperator
    expressions?: Expression[]
    __typename: 'MaxOrderQuantityV2'
}

export interface Me {
    dapperID: Scalars['ID']
    flowAddress?: Scalars['String']
    username?: Scalars['String']
    favoriteTeamID?: Scalars['String']
    country?: Scalars['String']
    city?: Scalars['String']
    shop: Shop
    __typename: 'Me'
}

export interface MintedMoment {
    id: Scalars['ID']
    version?: Scalars['Version']
    sortID?: Scalars['SortID']
    set?: Set
    play?: Play
    flowId?: Scalars['String']
    flowSerialNumber?: Scalars['String']
    price?: Scalars['Price']
    forSale?: Scalars['Boolean']
    listingOrderID?: Scalars['String']
    userListingID?: Scalars['String']
    /** @deprecated use ownerV2 instead, which supports non-custodial users */
    owner?: User
    ownerV2?: MomentOwner
    assetPathPrefix?: Scalars['String']
    setPlay?: MintedSetPlay
    createdAt?: Scalars['Time']
    acquiredAt?: Scalars['Time']
    destroyedAt?: Scalars['Time']
    packListingID?: Scalars['String']
    tags?: (Tag | undefined)[]
    groupMomentOrder?: GroupMomentOrder
    momentGroups?: MomentGroup[]
    topshotScore?: MomentTopshotScore
    lastPurchasePrice?: Scalars['Price']
    tier?: MomentTier
    lockExpiryAt?: Scalars['Time']
    isLocked?: Scalars['Boolean']
    parallelID: Scalars['Int']
    parallelSetPlay: MintedSetPlayParallel
    __typename: 'MintedMoment'
}

export interface MintedMomentFilters {
    byOwnerDapperID?: (Scalars['String'] | undefined)[]
    bySets?: (Scalars['ID'] | undefined)[]
    bySeries?: (Scalars['ID'] | undefined)[]
    byPlays?: (Scalars['ID'] | undefined)[]
    byPlayers?: (Scalars['ID'] | undefined)[]
    byTeams?: (Scalars['ID'] | undefined)[]
    bySetVisuals?: (VisualIdType | undefined)[]
    byMomentTiers?: (MomentTier | undefined)[]
    byForSale?: ForSaleFilter
    byPlayTagIDs?: (Scalars['ID'] | undefined)[]
    bySetPlayTagIDs?: (Scalars['ID'] | undefined)[]
    byMomentTagIDs?: (Scalars['ID'] | undefined)[]
    byPlayCategory?: (Scalars['ID'] | undefined)[]
    byPrimaryPlayerPosition?: (PlayerPosition | undefined)[]
    byGameDate?: DateRangeFilter
    byCreatedAt?: DateRangeFilter
    byPlayerGameScores?: PlayerGameScoresFilters
    byPrice?: PriceRangeFilter
    byActiveChallenge?: (Scalars['ID'] | undefined)[]
    byLeagues?: (League | undefined)[]
    byOwnerFlowAddress?: (Scalars['String'] | undefined)[]
    byEditions?: (EditionsFilter | undefined)[]
    byGroupID?: Scalars['ID']
    byGroupSlug?: Scalars['String']
    byPotentialTopshotScore?: Scalars['Boolean']
    byLockStatus?: LockStatusFilter
    byFlowID?: (Scalars['ID'] | undefined)[]
    bySubeditionID?: Scalars['Int'][]
    __typename: 'MintedMomentFilters'
}

export interface MintedMomentResponse {
    data?: MintedMoment
    __typename: 'MintedMomentResponse'
}

export interface MintedMomentSearchSummary {
    filters?: MintedMomentFilters
    sortBy?: MintedMomentSortType
    searchSummary?: SearchSummary
    __typename: 'MintedMomentSearchSummary'
}

export type MintedMomentSortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'ACQUIRED_AT_ASC' | 'ACQUIRED_AT_DESC' | 'RARITY_ASC' | 'RARITY_DESC' | 'PRICE_USD_ASC' | 'PRICE_USD_DESC' | 'PRICE_USD_ASC_NULLS_LAST' | 'SERIAL_NUMBER_ASC' | 'SERIAL_NUMBER_DESC' | 'PLAYER_FIRST_NAME_ASC' | 'PLAYER_FIRST_NAME_DESC' | 'PLAYER_LAST_NAME_ASC' | 'PLAYER_LAST_NAME_DESC' | 'TOPSHOT_SCORE_ASC' | 'TOPSHOT_SCORE_DESC' | 'LAST_PURCHASE_PRICE_ASC' | 'LAST_PURCHASE_PRICE_DESC' | 'AVERAGE_SALE_PRICE_ASC' | 'AVERAGE_SALE_PRICE_DESC'

export interface MintedMoments {
    size?: Scalars['Int']
    data: MintedMoment[]
    __typename: 'MintedMoments'
}

export interface MintedSetPlay {
    ID: Scalars['ID']
    setID: Scalars['ID']
    playID: Scalars['ID']
    flowRetired: Scalars['Boolean']
    /** @deprecated use values in SetPlayCirculation  */
    circulationCount?: Scalars['Int']
    tags?: (Tag | undefined)[]
    circulations?: SetPlayCirculations
    __typename: 'MintedSetPlay'
}

export interface MintedSetPlayParallel {
    setID: Scalars['ID']
    playID: Scalars['ID']
    parallelID: Scalars['Int']
    circulations?: SetPlayCirculations
    iconAssetURL?: Scalars['String']
    __typename: 'MintedSetPlayParallel'
}

export interface MomentAgeError {
    momentAgeMinutesLeft: Scalars['Int']
    momentAgeSecondsLeft: Scalars['Int']
    __typename: 'MomentAgeError'
}

export interface MomentCountPerTeam {
    teamID?: Scalars['String']
    momentCount?: Scalars['Int']
    __typename: 'MomentCountPerTeam'
}

export interface MomentGroup {
    sortID?: Scalars['SortID']
    version?: Scalars['Version']
    id: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    order: Scalars['Float']
    MomentsTotal: Scalars['Int']
    Commons: Scalars['Int']
    Rares: Scalars['Int']
    Legendaries: Scalars['Int']
    Fandoms: Scalars['Int']
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    groupMomentOrders?: GroupMomentOrder[]
    __typename: 'MomentGroup'
}

export interface MomentGroups {
    size?: Scalars['Int']
    data: MomentGroup[]
    __typename: 'MomentGroups'
}

export interface MomentListing {
    /** The listing id is the unique combination of editionID and listingType */
    id: Scalars['ID']
    version: Scalars['Version']
    sortID: Scalars['SortID']
    set?: Set
    play?: Play
    assetPathPrefix?: Scalars['String']
    /**
     * @deprecated use circulationCount field found inside mintedSetPlay instead
     * The number of minted moments for this set/play.
     */
    circulationCount?: Scalars['Int']
    /**
     * @deprecated use flowRetired field found inside mintedSetPlay instead
     * flowRetired indicates whether the set/play has been retired
     */
    flowRetired?: Scalars['Boolean']
    listingType: MomentListingType
    /**
     * For user listings: The price range for all the moments available for sale for this set/play
     * For vendor listings: The price range min/max will be the same
     */
    priceRange: PriceRange
    /** Tags are not implemented */
    tags?: (Tag | undefined)[]
    /** Vendor listing field: whether the listing is available for sale */
    forSale: Scalars['Boolean']
    /** Vendor listing field: an admin input value, the previous price for sale display */
    vendorPreviousPrice?: Scalars['Price']
    /** Vendor listing field: the vendor moment listing id, used for direct purchase */
    vendorListingID?: Scalars['ID']
    /** Count of moments avalible for sale (listings) */
    momentListingCount: Scalars['Int']
    limit: Scalars['Int']
    /**
     * @deprecated renamed to setPlay for consistency, this field is left empty
     * TODO: delete once FE migrated the fixtures: https://github.com/dapperlabs/nba-api/pull/3768/files#r578669841
     */
    mintedSetPlay?: MintedSetPlay
    /** setPlay contains setPlay data including tags, circulation count and a retired flag */
    setPlay?: MintedSetPlay
    /**
     * @deprecated use getUserMomentListings or MomentListingCount
     * momentListings are the moments put up for sale by users for this edition
     */
    momentListings?: UserMomentListing[]
    watchedCount: Scalars['Int']
    isWatched: Scalars['Boolean']
    __typename: 'MomentListing'
}

export interface MomentListingFilters {
    bySets?: (Scalars['ID'] | undefined)[]
    byPlayers?: (Scalars['ID'] | undefined)[]
    byTeams?: (Scalars['ID'] | undefined)[]
    byPrimaryPlayerPosition?: (PlayerPosition | undefined)[]
    byPrice?: PriceRangeFilter
    bySerialNumber?: IntegerRangeFilter
    byPower?: IntegerRangeFilter
    byGameDate?: DateRangeFilter
    byCreatedAt?: DateRangeFilter
    byPlayerGameScores?: PlayerGameScoresFilters
    byListingType?: (MomentListingType | undefined)[]
    /** @deprecated will be deleted in favour of TagIDs fields */
    byTagNames?: (Scalars['String'] | undefined)[]
    byPlayTagIDs?: (Scalars['ID'] | undefined)[]
    bySetPlayTagIDs?: (Scalars['ID'] | undefined)[]
    bySetVisuals?: (VisualIdType | undefined)[]
    byMomentTiers?: (MomentTier | undefined)[]
    byPlayIDs?: (Scalars['ID'] | undefined)[]
    bySeries?: (Scalars['ID'] | undefined)[]
    byPlayCategory?: (Scalars['ID'] | undefined)[]
    __typename: 'MomentListingFilters'
}

export type MomentListingSortType = 'PRICE_USD_ASC' | 'PRICE_USD_DESC' | 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'GAME_DATE_ASC' | 'GAME_DATE_DESC' | 'SERIAL_NUMBER_ASC' | 'SERIAL_NUMBER_DESC' | 'MOST_WATCHED_ASC' | 'MOST_WATCHED_DESC'

export type MomentListingType = 'BY_VENDOR' | 'BY_USERS'

export interface MomentListings {
    size?: Scalars['Int']
    data: MomentListing[]
    __typename: 'MomentListings'
}

export interface MomentListingsSearchSummary {
    filters?: MomentListingFilters
    sortBy?: MomentListingSortType
    searchSummary?: SearchSummary
    __typename: 'MomentListingsSearchSummary'
}

export interface MomentListingsSearchSummaryResponse {
    data?: MomentListingsSearchSummary
    __typename: 'MomentListingsSearchSummaryResponse'
}

export interface MomentMediaURIResponse {
    path: Scalars['String']
    __typename: 'MomentMediaURIResponse'
}

export type MomentOwner = (User | NonCustodialUser) & { __isUnion?: true }

export interface MomentSaleCSImpactData {
    ownedTeamEditionsCount?: Scalars['Int']
    totalTeamEditionsCount?: Scalars['Int']
    willLoseChallengeReward?: Scalars['Boolean']
    __typename: 'MomentSaleCSImpactData'
}

export type MomentTier = 'MOMENT_TIER_NIL' | 'MOMENT_TIER_COMMON' | 'MOMENT_TIER_RARE' | 'MOMENT_TIER_LEGENDARY' | 'MOMENT_TIER_ULTIMATE' | 'MOMENT_TIER_FANDOM' | 'MOMENT_TIER_ANTHOLOGY'

export interface MomentTopshotScore {
    score: Scalars['Int']
    derivedVia: Scalars['String']
    calculatedAt: Scalars['Time']
    averageSalePrice?: Scalars['Price']
    purchasePrice?: Scalars['Price']
    __typename: 'MomentTopshotScore'
}

export interface MomentTradeInRequest {
    id: Scalars['ID']
    senderDapperID?: Scalars['String']
    status?: MomentTradeInRequestStatus
    state?: MomentTradeInRequestState
    momentID?: Scalars['String']
    version: Scalars['Int']
    invocationIntentID?: Scalars['String']
    redirectURL?: Scalars['String']
    momentImage?: Scalars['String']
    momentTitle?: Scalars['String']
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    moment?: MintedMoment
    txHash?: Scalars['String']
    __typename: 'MomentTradeInRequest'
}

export interface MomentTradeInRequestActivity {
    tradeIn?: MomentTradeInRequest
    __typename: 'MomentTradeInRequestActivity'
}

export type MomentTradeInRequestState = 'CREATED' | 'INVOCATION_INTENT_CREATED' | 'INVOCATION_SUBMITTED' | 'SUCCEEDED' | 'FAILED'

export type MomentTradeInRequestStatus = 'PROCESSING' | 'FAILED' | 'SUCCEEDED'

export interface MomentTransferReceivedActivity {
    transfer?: MomentTransferRequest
    __typename: 'MomentTransferReceivedActivity'
}

export interface MomentTransferRequest {
    id: Scalars['ID']
    senderDapperID?: Scalars['String']
    receiverDapperID?: Scalars['String']
    status?: MomentTransferRequestStatus
    state?: MomentTransferRequestState
    momentID?: Scalars['String']
    version: Scalars['Int']
    invocationIntentID?: Scalars['String']
    redirectURL?: Scalars['String']
    momentImage?: Scalars['String']
    momentTitle?: Scalars['String']
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    moment?: MintedMoment
    txHash?: Scalars['String']
    __typename: 'MomentTransferRequest'
}

export interface MomentTransferRequestActivity {
    transfer?: MomentTransferRequest
    __typename: 'MomentTransferRequestActivity'
}

export type MomentTransferRequestState = 'CREATED' | 'REQUEST_VALIDATED' | 'INVOCATION_INTENT_CREATED' | 'INVOCATION_SUBMITTED' | 'SUCCEEDED' | 'REQUEST_VALIDATION_FAILED' | 'FAILED'

export type MomentTransferRequestStatus = 'PROCESSING' | 'FAILED' | 'SUCCEEDED'

export type MomentTransferValidationResults = 'VALIDATION_RESULTS_OK' | 'VALIDATION_RESULTS_ERROR' | 'VALIDATION_RESULTS_MOMENT_LOCKED' | 'VALIDATION_RESULTS_ACCOUNT_AGE' | 'VALIDATION_RESULTS_INSUFFICIENT_MOMENTS'

export interface MomentUsageData {
    momentID: Scalars['ID']
    challengeID: Scalars['ID']
    variableChallengeCategory: VariableChallengeCategory
    submissionID: Scalars['ID']
    userSubmissionStatus: VariableChallengeSubmissionStatus
    slotType?: VariableChallengeSlotType
    __typename: 'MomentUsageData'
}

export interface MomentsFromPack {
    packID: Scalars['String']
    momentIDs?: Scalars['String'][]
    __typename: 'MomentsFromPack'
}

export interface MomentsTradeInRequest {
    id: Scalars['ID']
    senderDapperID?: Scalars['String']
    status?: MomentTradeInRequestStatus
    state?: MomentTradeInRequestState
    momentIDs?: Scalars['String'][]
    version: Scalars['Int']
    invocationIntentID?: Scalars['String']
    redirectURL?: Scalars['String']
    image?: Scalars['String']
    title?: Scalars['String']
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    moments?: MintedMoment[]
    txHash?: Scalars['String']
    __typename: 'MomentsTradeInRequest'
}

export interface MomentsTradeInRequestActivity {
    tradeIn?: MomentsTradeInRequest
    __typename: 'MomentsTradeInRequestActivity'
}

export interface MostRecentEditionSale {
    price?: Scalars['Price']
    serialNumber?: Scalars['Int']
    __typename: 'MostRecentEditionSale'
}

export interface Mutation {
    NoOp?: Scalars['Boolean']
    setSelectedUserTitles?: SetSelectedUserTitlesResponse
    markAllUserTitlesAsSeen?: MarkAllUserTitlesAsSeenResponse
    markActivitiesAsRead?: MarkActivitiesAsReadResponse
    markAllActivitiesAsRead?: MarkAllActivitiesAsReadResponse
    createWatchlist?: WatchlistResponse
    updateWatchlist?: WatchlistResponse
    deleteWatchlist?: DeleteWatchlistResponse
    addEditionToWatchlist?: AddEditionToWatchlistResponse
    removeEditionFromWatchlist?: RemoveEditionFromWatchlistResponse
    removeAllEditionsFromWatchlist?: RemoveAllEditionsFromWatchlistResponse
    completeCampaignEvent?: CompleteCampaignEventResponse
    createVariableChallengeSubmission: VariableChallengeSubmissionResponse
    updateVariableChallengeSubmission: VariableChallengeSubmissionResponse
    purchaseMomentWithSoftCurrency?: PurchaseMomentWithSoftCurrencyResponse
    purchaseAssetsWithDapperPayment?: PurchaseAssetsWithDapperPaymentResponse
    /** @deprecated Use createMomentTransferRequestV2 */
    createMomentTransferRequest?: CreateMomentTransferRequestResponse
    createMomentTransferRequestV2?: CreateMomentTransferRequestResult
    addMomentsToGroups: AddMomentsToGroupsResponse
    removeMomentsFromGroup: RemoveMomentsFromGroupResponse
    createMomentGroup: CreateMomentGroupResponse
    duplicateMomentGroup: DuplicateMomentGroupResponse
    updateMomentGroup: UpdateMomentGroupResponse
    deleteMomentGroup: DeleteMomentGroupResponse
    pinMoment: PintMomentResponse
    unpinMoment: UnpinMomentResponse
    /** hideOffers will hide multiple offers by given offer ids. */
    hideOffers: HideOffersResponse
    /** unhideOffers will hide multiple offers by given offer ids. */
    unhideOffers: UnhideOffersResponse
    /** populateOfferByTransaction will search for offer by given transaction id on chain and will populate it in search */
    populateOfferByTransaction: PopulateOfferByTransactionResponse
    createMomentSale?: CreateMomentSaleResponse
    cancelMomentSale?: CancelMomentSaleResponse
    purchaseP2PMoment?: PurchaseP2PMomentResponse
    reservePack?: ReservePackResponse
    cancelReservation?: CancelReservationResponse
    transferPacks?: TransferPacksResponse
    purchasePack?: PurchasePackResponse
    createPackPurchaseIntent?: CreatePackPurchaseIntentResponse
    confirmPackPurchase?: ConfirmPackPurchaseResponse
    cancelPurchasePack?: CancelPurchasePackResponse
    openPacks?: OpenPacksResponse
    openPacksV2?: OpenPacksV2Response
    packNFTHashes?: PackNFTHashesResponse
    authorizePackNFTsMinting?: authorizePackNFTsMintingResponse
    purchaseVendorMoment?: PurchaseVendorMomentResponse
    saveShowcase?: SaveShowcaseResponse
    deleteShowcase?: DeleteShowcaseResponse
    createDropSquad: CreateDropSquadResponse
    joinDropSquad: JoinDropSquadResponse
    removeFromDropSquad: RemoveFromDropSquadResponse
    leaveDropSquad: LeaveDropSquadResponse
    createMomentTradeInRequest?: CreateMomentTradeInRequestResponse
    createBulkMomentTradeInRequest?: CreateBulkMomentTradeInRequestResponse
    submitVoteForPoll?: SubmitVoteForPollResponse
    addUserMarketingCampaign: AddUserMarketingCampaignResponse
    updateNBAMarketing: UpdateNBAMarketingResponse
    addUserReferral: AddUserReferralResponse
    upsertUserProfile: UpsertUserProfileResponse
    upsertUserProfileFromToken: UpsertUserProfileResponse
    patchUserPreferences: PatchUserPreferencesResponse
    UpdateUserSettings?: UpdateUserSettingsResponse
    __typename: 'Mutation'
}

export type NftOwner = (User | NonCustodialUser) & { __isUnion?: true }

export interface NonCustodialUser {
    flowAddress: Scalars['String']
    __typename: 'NonCustodialUser'
}

export interface NotificationSettings {
    receiveEmails: Scalars['Boolean']
    __typename: 'NotificationSettings'
}

export interface NumericTransferRequirement {
    threshold: Scalars['Int']
    current: Scalars['Int']
    valid: Scalars['Boolean']
    __typename: 'NumericTransferRequirement'
}

export interface Offer {
    id: Scalars['Int']
    sortID?: Scalars['SortID']
    createdByFlowAddress: Scalars['String']
    createdByDapperID: Scalars['String']
    acceptedByFlowAddress?: Scalars['String']
    acceptedByDapperID?: Scalars['String']
    momentID: Scalars['String']
    momentFlowID: Scalars['Int']
    price?: Scalars['Price']
    completed: Scalars['Boolean']
    purchased: Scalars['Boolean']
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    acceptedAt?: Scalars['Time']
    offerAvailableTxHash: Scalars['String']
    offerCompletedTxHash?: Scalars['String']
    moment?: MintedMoment
    createdByUser?: User
    version?: OfferVersion
    offerType?: OfferType
    edition?: Edition
    visibility?: OfferVisibility
    parallelID: Scalars['Int']
    __typename: 'Offer'
}

export interface OfferAvailableActivity {
    offer?: Offer
    __typename: 'OfferAvailableActivity'
}

export interface OfferCompletedActivity {
    offer?: Offer
    __typename: 'OfferCompletedActivity'
}

export type OfferType = 'NIL' | 'Serial' | 'Edition' | 'Parallel'

export type OfferVersion = 'V1' | 'V2'

export type OfferVisibility = 'VISIBLE' | 'HIDDEN'

export type OfferVisibilityFilter = 'ALL' | 'VISIBLE' | 'HIDDEN'

export interface Offers {
    size?: Scalars['Int']
    data: Offer[]
    __typename: 'Offers'
}

export interface OnChainPack {
    id: Scalars['ID']
    state: OnChainPackState
    momentIds: Scalars['String'][]
    sortID?: Scalars['SortID']
    version: Scalars['Version']
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    __typename: 'OnChainPack'
}

export type OnChainPackState = 'NIL' | 'REVEAL_PACK_SUCCEEDED'


/**
 * SEALED:    When an on-chain pack is at sealed status, moments of the pack have not been revealed on the blockchain
 * REVEALED:  When an on-chain pack is at opened status, moments of the pack have been revealed, but on-chain transfer of the moments
 * are not finished yet.
 * OPENED:    When a pack is at opened status, it means all moments of the pack are transferred to the user's wallet on-chain.
 */
export type OnChainPackStatus = 'SEALED' | 'REVEALED' | 'OPENED'

export interface OpenPacksResponse {
    success: Scalars['Boolean']
    ID: Scalars['String']
    __typename: 'OpenPacksResponse'
}

export interface OpenPacksV2Response {
    momentsFromPacks?: MomentsFromPack[]
    __typename: 'OpenPacksV2Response'
}

export interface Order {
    id: Scalars['ID']
    status: OrderStatus
    state: OrderState
    momentListingID: Scalars['ID']
    playID: Scalars['ID']
    setID: Scalars['ID']
    userID: Scalars['ID']
    moment?: MintedMoment
    price?: Scalars['Price']
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    dapperIntentID?: Scalars['String']
    __typename: 'Order'
}

export type OrderState = 'CREATED' | 'PURCHASE_INTENT_CREATED' | 'PROCESSING_RESERVATION' | 'MOMENT_RESERVED' | 'VALIDATING_MOMENT' | 'MOMENT_VALIDATED' | 'MOMENT_UNAVAILABLE' | 'PAYMENT_FAILED' | 'PAYMENT_SUCCEEDED' | 'PROCESSING_MINTING' | 'MINTING_SUCCEEDED' | 'MINTING_FAILED' | 'PROCESSING_TRANSFER' | 'TRANSFER_SUCCEEDED' | 'TRANSFER_FAILED' | 'PROCESSING_PAYMENT'

export type OrderStatus = 'SUBMITTED' | 'PROCESSING' | 'FAILED' | 'COMPLETED'

export interface Orders {
    size?: Scalars['Int']
    data: Order[]
    __typename: 'Orders'
}

export interface P2PListingOrder {
    id: Scalars['ID']
    price: Scalars['Price']
    status: P2PListingOrderStatus
    state: P2PListingOrderState
    version: Scalars['Int']
    moment?: MintedMoment
    seller?: User
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    listingInvocationIntentID?: Scalars['String']
    delistingInvocationIntentID?: Scalars['String']
    listingTxHash?: Scalars['String']
    delistingTxHash?: Scalars['String']
    __typename: 'P2PListingOrder'
}

export type P2PListingOrderState = 'NIL' | 'CREATED' | 'OWNERSHIP_VERIFIED' | 'LISTING_INVOCATION_INTENT_CREATED' | 'LISTING_INVOCATION_SUBMITTED' | 'LISTING_SUCCEEDED' | 'LISTING_CANCELLED' | 'MOMENT_SOLD' | 'DELISTING_REQUESTED' | 'DELISTING_INVOCATION_INTENT_CREATED' | 'DELISTING_INVOCATION_SUBMITTED' | 'DELISTING_SUCCEEDED' | 'DELISTING_FAILED' | 'OWNERSHIP_VERIFICATION_FAILED' | 'LISTING_FAILED'

export type P2PListingOrderStatus = 'NIL' | 'PROCESSING' | 'FAILED' | 'LISTED' | 'DELISTED' | 'SOLD'

export interface P2PListingOrders {
    size?: Scalars['Int']
    data: P2PListingOrder[]
    __typename: 'P2PListingOrders'
}

export interface P2PMomentListingActivity {
    order?: P2PListingOrder
    __typename: 'P2PMomentListingActivity'
}

export interface P2PMomentListingCancellationActivity {
    order?: P2PListingOrder
    __typename: 'P2PMomentListingCancellationActivity'
}

export interface P2PMomentListingSoldActivity {
    order?: P2PListingOrder
    __typename: 'P2PMomentListingSoldActivity'
}

export interface P2PPurchaseOrder {
    id: Scalars['ID']
    price: Scalars['Price']
    status: P2PPurchaseOrderStatus
    state: P2PPurchaseOrderState
    version: Scalars['Int']
    moment?: MintedMoment
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    purchaseIntentID?: Scalars['String']
    buyer?: User
    failureReason?: P2PPurchaseOrderFailureReason
    txHash?: Scalars['String']
    __typename: 'P2PPurchaseOrder'
}

export type P2PPurchaseOrderFailureReason = 'MOMENT_NO_LONGER_AVAILABLE'

export type P2PPurchaseOrderState = 'CREATED' | 'USERS_VERIFIED' | 'CREATE_INTENT_SUCCEEDED' | 'PAYMENT_SUBMITTED' | 'PAYMENT_SUCCEEDED' | 'PURCHASE_SUCCEEDED' | 'USER_VERIFICATION_FAILED' | 'PAYMENT_FAILED' | 'MOMENT_UNAVAILABLE' | 'PURCHASE_FAILED'

export type P2PPurchaseOrderStatus = 'PROCESSING' | 'FAILED' | 'SUCCEEDED'

export interface P2PPurchaseOrders {
    size?: Scalars['Int']
    data: P2PPurchaseOrder[]
    __typename: 'P2PPurchaseOrders'
}

export interface Pack {
    id: Scalars['ID']
    state?: PackState
    status?: PackStatus
    /** momentIds are only available on opened packs */
    momentIds?: (Scalars['ID'] | undefined)[]
    sortID?: Scalars['SortID']
    version?: Scalars['Version']
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    /** @deprecated Use `packListingID` instead. */
    packListing?: PackListing
    packListingID?: Scalars['ID']
    fulfillmentTxHash?: Scalars['String']
    preorder?: Scalars['Boolean']
    locked?: Scalars['Boolean']
    flowID?: Scalars['String']
    distributionID?: Scalars['String']
    commitHash?: Scalars['String']
    onChainStatus?: OnChainPackStatus
    ownerDapperID?: Scalars['String']
    ownerFlowAddress?: Scalars['String']
    __typename: 'Pack'
}

export interface PackEdition {
    setID: Scalars['ID']
    playID: Scalars['ID']
    edition: Edition
    count: Scalars['Int']
    minSerialNumber: Scalars['Int']
    maxSerialNumber: Scalars['Int']
    __typename: 'PackEdition'
}

export interface PackEditionConnection {
    edges?: PackEditionEdge[]
    pageInfo: PageInfo
    __typename: 'PackEditionConnection'
}

export interface PackEditionEdge {
    cursor: Scalars['String']
    node?: PackEdition
    __typename: 'PackEditionEdge'
}

export interface PackFilters {
    byOwnerDapperID?: Scalars['String']
    __typename: 'PackFilters'
}

export interface PackListing {
    id: Scalars['ID']
    remaining?: Scalars['Int']
    title?: Scalars['String']
    description?: Scalars['String']
    price?: Scalars['Price']
    priceV2?: PriceV2
    expiryDate?: Scalars['Time']
    forSale?: Scalars['Boolean']
    images?: (PackListingImage | undefined)[]
    sortID?: Scalars['SortID']
    version?: Scalars['Version']
    packListingTemplate?: PackListingTemplate
    totalPackCount?: Scalars['Int']
    /** visualId is the highest visualId of the sets in a packlisting template */
    visualId?: VisualIdType
    slug?: Scalars['String']
    startDate?: Scalars['Time']
    isStarterPack?: Scalars['Boolean']
    preorder?: Scalars['Boolean']
    /** The packlistingID to which the user gets redirected if this one sells out when they are next in line */
    reboundPackListingID?: Scalars['String']
    orderPurchaseCoolDownTimeInMinutes?: Scalars['Int']
    waitingRoom?: Scalars['String']
    waitingRoomActive?: Scalars['Boolean']
    momentCountPerTeam?: (MomentCountPerTeam | undefined)[]
    maxOrderQuantity?: Scalars['Int']
    maxOrderQuantityV2?: MaxOrderQuantityV2
    listingQuantity?: Scalars['Int']
    levels?: (Level | undefined)[]
    packEditions?: (PackEdition | undefined)[]
    packEditionsV2?: PackEditionConnection
    appStoreProductID?: Scalars['String']
    /** momentsPerPack is the number of moments that a collector can pull per pack */
    momentsPerPack?: Scalars['Int']
    /** distributionID is the on-chain representation of the pack listing */
    distributionID?: Scalars['String']
    rsvpMetadata?: RSVPMetadata
    __typename: 'PackListing'
}

export type PackListingExpiryStateFilter = 'ACTIVE' | 'EXPIRED'

export interface PackListingFilters {
    isMobileSupported?: Scalars['Boolean']
    __typename: 'PackListingFilters'
}

export interface PackListingImage {
    type?: PackListingImageType
    url?: Scalars['String']
    __typename: 'PackListingImage'
}

export type PackListingImageType = 'DEFAULT' | 'BACKGROUND'

export type PackListingPackEditionSort = 'PLAYER_FIRST_NAME'

export interface PackListingSlot {
    set?: Set
    playIDCountMap?: (PlayIDCountTuple | undefined)[]
    __typename: 'PackListingSlot'
}

export type PackListingSortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC'

export interface PackListingTemplate {
    packListingSlots?: (PackListingSlot | undefined)[]
    __typename: 'PackListingTemplate'
}

export interface PackListings {
    size?: Scalars['Int']
    data: PackListing[]
    __typename: 'PackListings'
}

export interface PackListingsSearchSummary {
    filters?: PackListingFilters
    sortBy?: PackListingSortType
    searchSummary?: SearchSummary
    __typename: 'PackListingsSearchSummary'
}

export interface PackNFTHashResponse {
    packID: Scalars['String']
    distributionID: Scalars['String']
    commitHash: Scalars['String']
    __typename: 'PackNFTHashResponse'
}

export interface PackNFTHashesResponse {
    packNFTHashes: (PackNFTHashResponse | undefined)[]
    __typename: 'PackNFTHashesResponse'
}

export type PackOrderState = 'NIL' | 'CREATED' | 'RESERVATION_SUCCEEDED' | 'RESERVATION_FAILED' | 'RESERVATION_TIMEOUT' | 'CREATE_INTENT_SUCCEEDED' | 'CREATE_INTENT_FAILED' | 'PAYMENT_SUCCEEDED' | 'PAYMENT_FAILED' | 'CANCEL_RESERVATION_REQUESTED' | 'RESERVATION_CANCELLED' | 'PAYMENT_CANCELLATION_REQUESTED' | 'PAYMENT_CANCELLATION_SUCCEEDED' | 'INTENT_CANCELLATION_REQUESTED' | 'INTENT_CANCELLATION_SUCCEEDED' | 'INTENT_CANCELLATION_FAILED' | 'INTENT_EXPIRED' | 'FULFILLMENT_SUCCEEDED' | 'FULFILLMENT_FAILED' | 'FULFILLMENT_REQUESTED' | 'FULFILLMENT_TIMEOUT' | 'FULFILLMENT_EXPIRED'

export type PackOrderStatus = 'NIL' | 'SUBMITTED' | 'PROCESSING' | 'FAILED' | 'COMPLETED'

export interface PackPurchaseOrder {
    id: Scalars['ID']
    price: Scalars['Price']
    status: PackOrderStatus
    state: PackOrderState
    paymentTxHash?: Scalars['String']
    packListing?: PackListing
    quantity?: Scalars['Int']
    /**
     * The packs in the order will be revealed as soon as payment is successful.
     * There are a few scenarios:
     * 
     * 1) Payment Succeeded:
     * Pack with momentIds returned and fulfillment is in processing.
     * The moments will NOT show up with searchMintedMoments query filter byOwnerDapperID.
     * 
     * PackOrderState : PAYMENT_SUCCEEDED
     * PackOrderStatus : PROCESSING
     * 
     * 2) Fulfillment is Completed:
     * Pack with momentIds returned, order is completed.
     * The moments will eventually show up with searchMintedMoments query filter byOwnerDapperID.
     * Note: Moment ownership updates may still be happening when fulfillment is complete, so the moments will not be returned by searchMintedMoments query filter byOwnerDapperID right away.
     * 
     * PackOrderState : FULFILLMENT_SUCCEEDED
     * PackOrderStatus : COMPLETED
     * 
     * 3) Fulfillment Failed:
     * Pack with moment_ids returned for failed fulfillment (failed moment transfer to user).
     * The moments will not show up with searchMintedMoments query filter byOwnerDapperID.
     * 
     * state : FULLFILLMENT_FAILED
     * status : FAILED
     */
    packs?: (Pack | undefined)[]
    dapperIntentId?: Scalars['String']
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    __typename: 'PackPurchaseOrder'
}

export interface PackPurchaseOrders {
    size?: Scalars['Int']
    data: PackPurchaseOrder[]
    __typename: 'PackPurchaseOrders'
}

export interface PackReservation {
    id: Scalars['ID']
    packListingID: Scalars['ID']
    levelID: Scalars['String']
    quantity: Scalars['Int']
    payment: PackReservationPayment
    __typename: 'PackReservation'
}

export interface PackReservationPayment {
    status: PackReservationPaymentStatus
    confirmationRedirectURL: Scalars['String']
    price: PriceV2
    __typename: 'PackReservationPayment'
}

export type PackReservationPaymentStatus = 'AWAITING_CONFIRMATION' | 'APPROVED' | 'CANCELLED' | 'SUCCEEDED'

export interface PackSearchSummary {
    searchSummary?: SearchSummary
    __typename: 'PackSearchSummary'
}


/**
 * Key states:
 * 
 * OPEN_PACK_SUCCEEDED:    It means this is ready to show moments to users, and moments fulfillment will start soon.
 * OPEN_PACK_FAILED:       Open pack is initiated, but failed before fulfilling moments. It is not ready to show moments to users.
 * FULFILL_PACK_REQUESTED: It means moments fulfillment started.
 * on-chain.
 * FULFILL_PACK_FAILED:    All moments or part of the moments fulfillment failed.
 * FULFILL_PACK_SUCCEEDED: All moments are fulfilled successfully.
 * 
 * Other states:
 * 
 * FULFILL_PACK_TIMEOUT & FULFILL_PACK_EXPIRED: Since moment fulfillment consists of multiple on-chain transactions, these
 * transactions are probably timeout or expired. But these two states are not used at the moment. Timeout on-chain
 * transactions or expired transactions are treated as failed.
 */
export type PackState = 'SEALED' | 'OPEN_PACK_REQUESTED' | 'OPEN_PACK_FAILED' | 'OPEN_PACK_SUCCEEDED' | 'FULFILL_PACK_REQUESTED' | 'FULFILL_PACK_TIMEOUT' | 'FULFILL_PACK_EXPIRED' | 'FULFILL_PACK_FAILED' | 'FULFILL_PACK_SUCCEEDED'


/**
 * SEALED:    When a pack is at sealed status, moments of the pack will not be revealed.
 * OPENED:    When a pack is at opened status, moments of the pack will be returned, but on-chain transfer of the moments
 * are not finished yet.
 * FULFILLED: When a pack is at fulfilled status, it means all moments of the pack are transferred to the user's wallet
 * on-chain.
 */
export type PackStatus = 'SEALED' | 'OPENED' | 'FULFILLED'

export interface Packs {
    size?: Scalars['Int']
    data: Pack[]
    __typename: 'Packs'
}

export interface PacksForUserCollection {
    id: Scalars['ID']
    title?: Scalars['String']
    description?: Scalars['String']
    images?: (PackListingImage | undefined)[]
    sortID?: Scalars['SortID']
    version?: Scalars['Version']
    data?: Packs
    /** visualId is the highest visualId of the sets in a packlisting template */
    visualId?: VisualIdType
    __typename: 'PacksForUserCollection'
}

export interface PacksForUserCollectionSearchSummary {
    filters?: PackFilters
    searchSummary?: SearchSummary
    __typename: 'PacksForUserCollectionSearchSummary'
}

export interface PacksForUserCollectionSearchSummaryResponse {
    data?: PacksForUserCollectionSearchSummary
    __typename: 'PacksForUserCollectionSearchSummaryResponse'
}

export interface PacksForUserCollections {
    size?: Scalars['Int']
    data: PacksForUserCollection[]
    __typename: 'PacksForUserCollections'
}

export interface PageInfo {
    startCursor?: Scalars['String']
    endCursor?: Scalars['String']
    hasNextPage: Scalars['Boolean']
    __typename: 'PageInfo'
}

export interface Pagination {
    leftCursor?: Scalars['Cursor']
    rightCursor?: Scalars['Cursor']
    __typename: 'Pagination'
}

export interface PatchUserPreferencesResponse {
    /** @deprecated use publicInfo */
    success: Scalars['Boolean']
    publicInfo: UserPublicInfo
    __typename: 'PatchUserPreferencesResponse'
}

export type PaymentProvider = 'DAPPER' | 'IAP'

export interface PintMomentResponse {
    success: Scalars['Boolean']
    __typename: 'PintMomentResponse'
}

export interface Play {
    id: Scalars['ID']
    version?: Scalars['Version']
    description?: Scalars['String']
    flowID?: Scalars['ID']
    sortID?: Scalars['SortID']
    status?: PlayStatus
    assets?: PlayAssets
    stats?: PlayStats
    statsPlayerGameScores?: StatsPlayerGameScores
    statsPlayerSeasonAverageScores?: StatsPlayerSeasonAverageScores
    tags?: (Tag | undefined)[]
    league?: League
    headline?: Scalars['String']
    headlineSource?: headlineSourceType
    shortDescription?: Scalars['String']
    keyStats?: (Scalars['String'] | undefined)[]
    __typename: 'Play'
}

export interface PlayAssets {
    videos?: (PlayVideo | undefined)[]
    images?: (PlayImage | undefined)[]
    /** @deprecated video length is now associated with PlayVideo */
    videoLengthInMilliseconds?: Scalars['Int']
    __typename: 'PlayAssets'
}

export interface PlayFilter {
    ByPlayers?: (Scalars['ID'] | undefined)[]
    __typename: 'PlayFilter'
}

export interface PlayIDCountTuple {
    id: Scalars['String']
    count: Scalars['Int']
    __typename: 'PlayIDCountTuple'
}

export interface PlayImage {
    type: PlayImageType
    url: Scalars['String']
    __typename: 'PlayImage'
}

export type PlayImageType = 'PLAY_IMAGE_TYPE_NIL' | 'PLAY_IMAGE_TYPE_PLAYER'

export interface PlaySearchSummary {
    sortBy?: PlaySortType
    filters?: PlayFilter
    searchSummary?: SearchSummary
    __typename: 'PlaySearchSummary'
}

export type PlaySortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC' | 'DATE_OF_MOMENT_ASC' | 'DATE_OF_MOMENT_DESC'

export interface PlayStats {
    playerID?: Scalars['String']
    playerName?: Scalars['String']
    firstName?: Scalars['String']
    lastName?: Scalars['String']
    jerseyNumber?: Scalars['String']
    teamAtMoment?: Scalars['String']
    awayTeamName?: Scalars['String']
    awayTeamScore?: Scalars['Int']
    homeTeamName?: Scalars['String']
    homeTeamScore?: Scalars['Int']
    dateOfMoment?: Scalars['Time']
    totalYearsExperience?: Scalars['String']
    teamAtMomentNbaId?: Scalars['String']
    height?: Scalars['Int']
    weight?: Scalars['Int']
    currentTeam?: Scalars['String']
    currentTeamId?: Scalars['String']
    primaryPosition?: PlayerPosition
    homeTeamNbaId?: Scalars['String']
    awayTeamNbaId?: Scalars['String']
    nbaSeason?: Scalars['String']
    draftYear?: Scalars['Int']
    draftSelection?: Scalars['String']
    draftRound?: Scalars['String']
    birthplace?: Scalars['String']
    birthdate?: Scalars['Date']
    draftTeam?: Scalars['String']
    draftTeamNbaId?: Scalars['String']
    playCategory?: Scalars['String']
    playType?: Scalars['String']
    quarter?: Quarter
    homeTeamScoresByQuarter?: TeamScoresByQuarter
    awayTeamScoresByQuarter?: TeamScoresByQuarter
    overrideHeadline?: Scalars['String']
    __typename: 'PlayStats'
}

export type PlayStatus = 'RECEIVED' | 'DRAFT' | 'REVIEW' | 'APPROVED' | 'REJECTED' | 'PUBLISHED'

export interface PlayVideo {
    type?: PlayVideoType
    url?: Scalars['URL']
    videoLength?: Scalars['Int']
    __typename: 'PlayVideo'
}

export type PlayVideoType = 'PLAY_VIDEO_TYPE_VERTICAL' | 'PLAY_VIDEO_TYPE_SQUARE'

export interface Player {
    id: Scalars['ID']
    name?: Scalars['String']
    __typename: 'Player'
}

export interface PlayerData {
    jerseyNumber?: Scalars['String']
    position?: Scalars['String']
    height?: Scalars['Int']
    weight?: Scalars['Int']
    currentTeamName?: Scalars['String']
    currentTeamId?: Scalars['String']
    firstName?: Scalars['String']
    lastName?: Scalars['String']
    birthplace?: Scalars['String']
    birthdate?: Scalars['Date']
    yearsExperience?: Scalars['Int']
    teamsPlayedFor?: (Scalars['String'] | undefined)[]
    __typename: 'PlayerData'
}

export interface PlayerGameScoresFilters {
    points?: IntegerRangeFilter
    __typename: 'PlayerGameScoresFilters'
}

export interface PlayerLeaderboard {
    id: Scalars['String']
    kind: LeaderboardKind
    entries: (LeaderboardUser | undefined)[]
    __typename: 'PlayerLeaderboard'
}

export type PlayerPosition = 'NA' | 'C' | 'CF' | 'F' | 'FC' | 'FG' | 'G' | 'GF' | 'PF' | 'PG' | 'SF' | 'SG'

export interface Players {
    size?: Scalars['Int']
    data: Player[]
    __typename: 'Players'
}

export interface Plays {
    size?: Scalars['Int']
    data: Play[]
    __typename: 'Plays'
}

export interface Poll {
    /** id is the unique identifier of the poll. This is auto-generated upon creation. */
    id: Scalars['ID']
    /** candidatePlays are the plays that can be voted on. */
    candidatePlays: PollPlay[]
    /** startsAt is the timestamp that the poll will start at */
    startsAt: Scalars['Time']
    /** expiresAt is the timestamp that the poll will expire at */
    expiresAt: Scalars['Time']
    /**
     * votedFor can only be populated for an authenticated request.
     * This returns the ID of the play that the user has voted for.
     */
    votedFor?: Scalars['String']
    /** headline is the name of the player or team - depends on moment type */
    headline: Scalars['String']
    /** The wave that the TS50 player belongs to */
    wave: Scalars['Int']
    /** imageURL is an optional image url for the given poll */
    imageURL?: Scalars['String']
    __typename: 'Poll'
}

export interface PollPlay {
    /**
     * contentfulEntryID is the entry to the play in contentful.
     * This is a short-term solution as we won't have the play data in our backend
     * for this campaign.
     */
    contentfulEntryID?: Scalars['String']
    /** totalVotes is the total number of votes that the play has received */
    totalVotes: Scalars['Int']
    __typename: 'PollPlay'
}

export interface PopulateOfferByTransactionResponse {
    Offer: Offer
    __typename: 'PopulateOfferByTransactionResponse'
}

export interface PriceRange {
    min: Scalars['Price']
    max: Scalars['Price']
    __typename: 'PriceRange'
}

export interface PriceRangeFilter {
    min?: Scalars['Price']
    max?: Scalars['Price']
    __typename: 'PriceRangeFilter'
}

export interface PriceV2 {
    value: Scalars['Price']
    currency: Currency
    __typename: 'PriceV2'
}

export interface PurchaseAssetsWithDapperPaymentResponse {
    assetID: Scalars['ID']
    price: Scalars['Int']
    purchaseType: PurchaseType
    __typename: 'PurchaseAssetsWithDapperPaymentResponse'
}

export interface PurchaseMomentWithSoftCurrencyResponse {
    momentID: Scalars['String']
    __typename: 'PurchaseMomentWithSoftCurrencyResponse'
}

export interface PurchaseP2PMomentActivity {
    order?: P2PPurchaseOrder
    __typename: 'PurchaseP2PMomentActivity'
}

export interface PurchaseP2PMomentResponse {
    orderID: Scalars['String']
    __typename: 'PurchaseP2PMomentResponse'
}

export interface PurchasePackActivity {
    order?: PackPurchaseOrder
    __typename: 'PurchasePackActivity'
}

export interface PurchasePackResponse {
    orderID: Scalars['String']
    existingReservation?: Scalars['Boolean']
    packsReserved?: Scalars['Int']
    __typename: 'PurchasePackResponse'
}

export interface PurchaseSoftCurrencyWithDapperPaymentResponse {
    success: Scalars['Boolean']
    __typename: 'PurchaseSoftCurrencyWithDapperPaymentResponse'
}

export type PurchaseType = 'SOFT_CURRENCY_PURCHASE' | 'BASIC_MOMENT_PURCHASE' | 'NFT_MOMENT_PURCHASE'

export interface PurchaseVendorMomentActivity {
    order?: Order
    __typename: 'PurchaseVendorMomentActivity'
}

export interface PurchaseVendorMomentResponse {
    orderID: Scalars['ID']
    /** @deprecated no longer given */
    paymentTransactionID?: Scalars['String']
    __typename: 'PurchaseVendorMomentResponse'
}

export type Quarter = 'NA' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'OT1' | 'OT2' | 'OT3' | 'OT4' | 'OT5' | 'OT6' | 'OT7' | 'OT8' | 'OT9' | 'OT10'

export interface QuarterScore {
    type?: Scalars['String']
    number?: Scalars['Int']
    sequence?: Scalars['Int']
    points?: Scalars['Int']
    __typename: 'QuarterScore'
}

export interface Query {
    NoOp?: Scalars['Boolean']
    GetActivity?: GetActivityResponse
    SearchActivity?: SearchActivityResponse
    GetUserPurchaseStats?: GetUserPurchaseStatsResponse
    HasUnreadActivities?: HasUnreadActivitiesResponse
    activeCampaigns?: Campaign[]
    getMyActiveChallenges: GetMyActiveChallengesResponse
    getMyCompletedChallenges: GetMyCompletedChallengesResponse
    /** @deprecated deprecated in favour of getCollectorScorePublic */
    getCollectorScore?: CollectorScore
    queryElasticsearch?: QueryElasticsearchResponse
    getKYCStatus: GetKYCStatusResponse
    authenticate?: AuthenticateResponse
    requestLoginUrl?: RequestLoginUrlResponse
    exchangeRefreshToken?: ExchangeRefreshTokenResponse
    revokeToken?: RevokeTokenResponse
    me?: Me
    getMintedMomentProgressForQuest?: GetMintedMomentProgressForQuestResponse
    getMomentTransferRequest?: GetMomentTransferRequestResponse
    getTransferEligibility: GetTransferEligibilityResponse
    getGiftedMomentURL: GetGiftedMomentURLResponse
    searchMomentGroups: SearchMomentGroupsResponse
    getMomentGroup: GetMomentGroupResponse
    /** This query returns total number of burned moments. */
    getTotalBurnedMoments: GetTotalBurnedMomentsResponse
    getPinnedMoments: GetPinnedMomentsResponse
    getUserP2PListingOrder?: GetUserP2PListingOrderResponse
    getUserP2PListingOrders?: GetUserP2PListingOrdersResponse
    getUserP2PPurchaseOrder?: GetUserP2PPurchaseOrderResponse
    getUserP2PPurchaseOrders?: GetUserP2PPurchaseOrdersResponse
    getMomentSaleCSImpactData?: MomentSaleCSImpactData
    /** @deprecated use getPacklistingEligibilityDetails */
    getDropEligibility?: GetDropEligibilityResponse
    getPacklistingEligibilityDetails?: StringTuple[]
    GetPackListingEligibilityV2?: GetPackListingEligibilityV2Response
    getUserPackOrder?: GetUserPackOrderResponse
    getUserPackOrders?: GetUserPackOrdersResponse
    packReservation?: PackReservation
    packReservations: (PackReservation | undefined)[]
    getOrder?: GetOrderResponse
    getUserOrders?: GetUserOrdersResponse
    getMyShowcases?: GetMyShowcasesResponse
    getMomentTradeInRequest?: GetMomentTradeInRequestResponse
    getMomentsTradeInRequest?: GetMomentsTradeInRequestResponse
    getMyReferral?: GetMyReferralResponse
    getMyProfile: GetMyProfileResponse
    getUserPendingTxStates: GetUserPendingTxStatesResponse
    getUserCoolDowns: GetUserCoolDownsResponse
    searchUsersByLocation?: SearchUsersResponse
    GetUserSettings?: GetUserSettingsResponse
    getUserStatsByLocation?: GetUserStatsByLocationResponse
    getPlay?: GetPlayResponse
    /** Get a list of Titles. */
    getTitles?: GetTitlesResponse
    /** Get a users Titles. */
    getUserTitles?: GetUserTitlesResponse
    SearchActivityByDapperId?: SearchActivityResponse
    getWatchlist?: WatchlistResponse
    getUsersWatchlists?: GetUsersWatchlistsResponse
    searchWatchedEditions?: SearchWatchedEditionsResponse
    getEditionsWatcherCount?: GetEditionsWatcherCountResponse
    getGiglabsMarketplaceListings?: GiglabsMarketPlaceListingsResponse
    getGiglabsMarketplaceListing?: GiglabsMarketPlaceListingResponse
    getGiglabsListingBids?: GiglabsListingBidsResponse
    /** Gets a users baller status. */
    getUserBallerStatus?: UserBallerStatus
    /** Gets an ordered list of baller status levels. */
    getBallerStatusLevels?: BallerStatusLevels
    /** Check if a baller status has processed pack fulfillment's. */
    hasBallerStatusProcessedPackFulfillments?: Scalars['Boolean']
    getUsersWithHighestNumberOfBurnedMoments: GetUsersWithHighestNumberOfBurnedMomentsResponse
    getUsersWithHighestBurnedTopshotScore: GetUsersWithHighestBurnedTopshotScoreResponse
    getMomentsWithHighestBurnedTopshotScore: GetMomentsWithHighestBurnedTopshotScoreResponse
    getTotalBurnedMomentCount: GetTotalBurnedMomentCountResponse
    getTotalBurnedMomentCountByRarity: GetTotalBurnedMomentCountByRarityResponse
    getTopNBurnedEditions: GetTopNBurnedEditionsResponse
    getUserScoreForRisingStarsLockingLeaderboard: UserBurnedTopshotScore
    getUserScoresForRisingStarsLockingLeaderboard: GetUserScoresForRisingStarsLockingLeaderboardResponse
    getUserScoreForAllStarsBurningLeaderboard: UserBurnedTopshotScore
    getUserScoresForAllStarsBurningLeaderboard: GetUserScoresForAllStarsBurningLeaderboardResponse
    /** Gets all active challenges. */
    getActiveChallenges: GetActiveChallengesResponse
    /**
     * Searches challenges based on the given input.
     * SearchChallenges sorts by ExpirationDate DESC by default, filledMomentIds is currently null as we are not yet showing the progress of active challenges
     */
    searchChallenges?: SearchChallengesResponse
    getChallengeByID: UserChallenge
    checkActiveChallengeSubmissionsByMomentID: CheckActiveChallengeSubmissionsByMomentIDResponse
    getActiveUserSubmissionsByMomentIDs: GetActiveUserSubmissionsByMomentIDsResponse
    /** @deprecated use getCodex instead (with optional userID) */
    getUserCodex?: GetUserCodexResponse
    getCodex?: GetCodexResponse
    getCodexSet?: GetCodexSetResponse
    getCollectorScorePublic?: CollectorScore
    searchTeamCollection?: SearchTeamCollectionResponse
    /** Gets an Edition. */
    getEdition?: GetEditionResponse
    /** Search Editions based on the inputted filters. */
    searchEditions?: SearchEditionsResponse
    /** Gets an Edition listing */
    getEditionListing?: GetEditionListingResponse
    /** Gets an Edition listing from the cache. */
    getEditionListingCached?: GetEditionListingResponse
    /**
     * getHotEditionListings returns edition listings that we deem to be "hot" (e.g. high
     * sales volume in the last x hours). The listings in the response should be ordered
     * from most to least host.
     */
    getHotEditionListings?: GetHotEditionListingsResponse
    /** Search current Edition listings. */
    searchEditionListings?: SearchEditionListingsResponse
    getExchangeRates: GetExchangeRatesResponse
    /** Get the current leaderboard. */
    getLeaderboard?: GetLeaderboardResponse
    /** Get an entry from the leaderboard. */
    getLeaderboardEntry?: GetLeaderboardEntryResponse
    /** Get the leaderboard potential. */
    getLeaderboardPotential?: GetLeaderboardPotentialResponse
    /** Get the leaderboard entry relationships. */
    getLeaderboardEntryRelationships?: GetLeaderboardEntryRelationshipResponse
    /** Search the marketplace transactions. */
    searchMarketplaceTransactions?: MarketplaceTransactionSearchSummaryResponse
    /** Get the marketplace transaction edition stats. */
    getMarketplaceTransactionEditionStats?: GetMarketplaceTransactionEditionStatsResponse
    /** Get the latest marketplace transactions */
    getLatestMarketplaceTransactions?: MarketplaceTransactionSearchSummaryResponse
    searchMintedMoments?: SearchMintedMomentsResponse
    /** Get minted moment by id. */
    getMintedMoment?: MintedMomentResponse
    /** Get a list of minted moment by id. */
    getMintedMoments?: GetMintedMomentsResponse
    /** Returns a list of all players. */
    allPlayers?: Players
    /**
     * Search suggestions returns all players whose name contain the string given in the input field.
     * For example: "Lebron James", "bron J", and "James" would return Lebron James. However, "Lbron" would not.
     */
    getSearchSuggestions?: SearchSuggestions
    /** Returns all players for a given League. */
    allPlayersByLeagues?: Players
    /** Get the soft currency price. */
    getSoftCurrencyPrice?: GetSoftCurrencyPriceResponse
    /** Returns a list of all teams. */
    allTeams?: Teams
    /** Returns a list of teams in a given League. */
    allTeamsByLeagues?: Teams
    /** @deprecated deprecated in favour of SearchEditionListings */
    searchMomentListings?: MomentListingsSearchSummaryResponse
    /** @deprecated deprecated in favour of EditionListings */
    getUserMomentListings?: UserMomentListingsResponse
    /** @deprecated vendor endpoints aren't used */
    getVendorMomentListing?: GetVendorMomentListingResponse
    /** Get the media uri from the moments flow id. */
    MomentMediaURI?: MomentMediaURIResponse
    /** searchOffers will search for offers given the filters, sort by or a cursor */
    searchOffers?: SearchOffersResponse
    /** getOffer will search for offer by given id or offerAvailableTxHash or offercompletedTxHash, only one of these three input should be filled. */
    getOffer: Offer
    /** Get on chain pack info by packID. */
    getOnChainPack?: GetOnChainPackResponse
    checkExistingP2POrders?: CheckExistingP2POrdersResponse
    /** Search pack listings. searchPackListings currently does not support limit/pagination/filters/sorts. */
    searchPackListings?: SearchPackListingsResponse
    /** Get pack listing based on the pack listing id, */
    getPackListing?: GetPackListingResponse
    getUserPackOrderByDapperId?: GetUserPackOrderResponse
    getUserPackOrdersByDapperId?: GetUserPackOrdersResponse
    /**
     * Return user progress against sets + challenges.
     * 
     * If the `withPacks` field is filled in, this query will have the following behaviour:
     *  - Return only Sets and Challenges that are relevant to those packs
     *  - Consider moments in the user's account AND moments from the passed packs towards progress
     * 
     * When the `withPacks` field is not filled in, the behaviour is:
     *  - Return all visible Sets and active Challenges
     *  - Consider only moments in the user's account
     * 
     * In order to obtain the diff in user progress from before and after a series of pack openings,
     * this query should be called prior to pack opening, and then again with the `withPacks`
     * field filled in.
     */
    getPackSummaryProgress?: GetPackSummaryProgressResponse
    /** Returns UserBallerStatus with only milestones relevant to Pack Opening. */
    getPackSummaryBallerStatus?: UserBallerStatus
    /** Get a list of packs by their IDs. */
    getPacks?: GetPacksResponse
    /** Not yet implemented. searchPacks currently does not currently support limit/pagination/sorts. */
    searchPacks?: SearchPacksResponse
    /** Search packs for a users collection. */
    searchPacksForUserCollection?: PacksForUserCollectionSearchSummaryResponse
    /** Get the players data with their current stats. */
    getPlayerDataWithCurrentStats?: GetPlayerDataWithCurrentStatsResponse
    searchPlays?: PlaySearchSummary
    /** searchSets currently returns all sets in existence. */
    searchSets?: SearchSetsResponse
    /** Get a set by its id. */
    getSet?: GetSetResponse
    getShowcaseByID?: Showcase
    getUserShowcases?: GetUserShowcasesResponse
    searchShowcases?: SearchShowcasesResponse
    /** Get special NFTs for a given user. */
    getUserOwnedSpecialNFTs?: GetUserOwnedSpecialNFTsResponse
    /** Get a list of special NFTs. */
    getSpecialNFTs?: GetSpecialNFTsResponse
    /** Get a special NFT by it's flow ID. */
    getSpecialNFT?: GetSpecialNFTResponse
    /** Get a list of Tags. */
    getTags?: GetTagsResponse
    getTickerData?: GetTickerDataResponse
    /** Get a Top Shot score by a users dapper ID. */
    topshotScore: TopshotScore
    /** Get a Top Shot score for a team series completion. */
    topshotScoreTeamSeriesCompletion?: GetTeamSeriesCompletionProgressResponse
    /** Get a Top Shot score for all team series completion. */
    topshotScoreAllTeamsSeriesCompletion?: GetTopshotScoreAllTeamsSeriesCompletionProgressResponse
    getUserTopshotTags?: GetUserTopshotTagsResponse
    /**
     * ts50 is a query to list all polls for ts50 players.
     * The default behaviour of this API is to return polls in expiring asc order,
     * followed by polls that the user has completed voting for.
     * The query has an optional filter to filter by a particular player.
     */
    ts50?: TS50
    /** Search a users set associations. */
    searchUserSetAssociations?: SearchUserSetAssociationsResponse
    getUserProfile: GetUserProfileResponse
    getUserProfileByUsername: GetUserProfileResponse
    /** @deprecated use getPackListingEligibilityV2 instead */
    getUserEligibilityForJoiningPackListingQueue: GetUserEligibilityForJoiningPackListingQueueResponse
    __typename: 'Query'
}

export interface QueryElasticsearchResponse {
    data?: ElasticsearchResponse
    __typename: 'QueryElasticsearchResponse'
}

export interface RSVPMetadata {
    totalPacksReserved: Scalars['Int']
    __typename: 'RSVPMetadata'
}

export type RecommendationType = 'NONE' | 'SIGNUP' | 'PERSONALIZED'

export type ReferralType = 'FIRST_PURCHASE'

export interface RemoveAllEditionsFromWatchlistResponse {
    success: Scalars['Boolean']
    __typename: 'RemoveAllEditionsFromWatchlistResponse'
}

export interface RemoveEditionFromWatchlistResponse {
    success: Scalars['Boolean']
    __typename: 'RemoveEditionFromWatchlistResponse'
}

export type RemoveFromDropSquadError = 'UNAUTHORIZED' | 'NOT_FOUND'

export interface RemoveFromDropSquadResponse {
    error?: RemoveFromDropSquadError
    __typename: 'RemoveFromDropSquadResponse'
}

export interface RemoveMomentsFromGroupResponse {
    momentIDs?: Scalars['String'][]
    __typename: 'RemoveMomentsFromGroupResponse'
}

export interface RequestLoginUrlResponse {
    url: Scalars['String']
    __typename: 'RequestLoginUrlResponse'
}

export interface Requirement {
    /** The name of the requirement */
    name: Scalars['String']
    /** The enumerated name of the requirement */
    nameV2?: RequirementName
    /** The threshold at which the requirement is compared  */
    value: Scalars['String']
    /** Optional field if value is not of type string */
    valueType?: ValueType
    /** The operator with which the comparison uses,  i.e. "=", "<=", ">=" */
    comparator: Scalars['String']
    /** Whether a user has qualified for this requirement */
    isQualified?: Scalars['Boolean']
    /** The user value for this requirement */
    userValue?: Scalars['String']
    __typename: 'Requirement'
}

export type RequirementName = 'ALLOWLIST' | 'TOPSHOT_SCORE' | 'PACKS_PURCHASED' | 'TRADE_TICKET' | 'REMAINING_PACKS' | 'MAX_ORDER_QUANTITY' | 'MIN_MOMENTS_PURCHASED' | 'PENDING_PACK_ORDER' | 'COOLDOWN_TIME' | 'FAVORITE_TEAM_MOMENTS_OWNED' | 'PLAY_TYPE_HANDLES' | 'PLAY_TYPE_DUNK' | 'PLAY_TYPE_ASSIST' | 'PLAY_TYPE_JUMPSHOT' | 'PLAY_TYPE_STEAL' | 'PLAY_TYPE_BLOCK' | 'PLAY_TYPE_THREE_POINTER' | 'PLAY_CATEGORY_LAYUP'

export interface ReservePackResponse {
    packReservation?: PackReservation
    error?: ReservePackResponseError
    __typename: 'ReservePackResponse'
}

export type ReservePackResponseError = 'INELIGIBLE' | 'EXCEEDED_QUANTITY' | 'RESERVATION_EXISTS'

export interface RevokeTokenResponse {
    success: Scalars['Boolean']
    __typename: 'RevokeTokenResponse'
}

export type Role = 'SUPER_ADMIN' | 'CREATOR_ADMIN' | 'MARKETPLACE_ADMIN' | 'REVIEWER_ADMIN'

export interface SaleDto {
    orderId?: Scalars['String']
    sellerAddress?: Scalars['String']
    buyerAddress?: Scalars['String']
    buyerId?: Scalars['String']
    buyerUsername?: Scalars['String']
    bidPrice: Scalars['Price']
    momentId?: Scalars['String']
    momentName?: Scalars['String']
    momentDescription?: Scalars['String']
    momentImageUrl?: Scalars['String']
    soldDateTime?: Scalars['Time']
    playId?: Scalars['String']
    playDescription?: Scalars['String']
    playerId?: Scalars['String']
    playerName?: Scalars['String']
    teamName?: Scalars['String']
    setVisualId?: Scalars['Int']
    setId?: Scalars['String']
    setSeries?: Scalars['Int']
    setName?: Scalars['String']
    serialNumber?: Scalars['Int']
    __typename: 'SaleDto'
}

export interface SaveShowcaseResponse {
    showcaseID: Scalars['ID']
    __typename: 'SaveShowcaseResponse'
}

export interface SearchActivityResponse {
    filters?: ActivityFilters
    sortBy?: ActivitySortType
    searchSummary?: SearchSummary
    __typename: 'SearchActivityResponse'
}

export interface SearchChallengesResponse {
    data?: ChallengesSearchSummary
    __typename: 'SearchChallengesResponse'
}

export interface SearchEditionListingsResponse {
    data?: SearchEditionListingsSummary
    __typename: 'SearchEditionListingsResponse'
}

export interface SearchEditionListingsSummary {
    filters?: EditionListingsFilters
    sortBy?: EditionListingSortType
    searchSummary?: SearchSummary
    __typename: 'SearchEditionListingsSummary'
}

export interface SearchEditionsResponse {
    filters?: EditionFilters
    searchSummary?: SearchSummary
    __typename: 'SearchEditionsResponse'
}

export interface SearchMintedMomentsResponse {
    data?: MintedMomentSearchSummary
    __typename: 'SearchMintedMomentsResponse'
}

export interface SearchMomentGroupSummary {
    searchSummary?: SearchSummary
    __typename: 'SearchMomentGroupSummary'
}

export interface SearchMomentGroupsResponse {
    data?: SearchMomentGroupSummary
    __typename: 'SearchMomentGroupsResponse'
}

export interface SearchOffersFilter {
    createdByDapperIDs?: Scalars['String'][]
    byMomentIDs?: Scalars['String'][]
    byType?: SearchOffersType
    byOfferState?: SearchOffersState
    byPrice?: PriceRangeFilter
    byEditions?: (EditionsFilter | undefined)[]
    byOfferTypes?: OfferType[]
    byOfferVisibility?: OfferVisibilityFilter
    byParallels?: Scalars['Int'][]
    __typename: 'SearchOffersFilter'
}

export interface SearchOffersResponse {
    data?: SearchOffersSummary
    __typename: 'SearchOffersResponse'
}

export type SearchOffersSortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'PRICE_ASC' | 'PRICE_DESC'

export type SearchOffersState = 'OPENED' | 'COMPLETED' | 'CANCELED' | 'PURCHASED' | 'ALL'

export interface SearchOffersSummary {
    filters?: SearchOffersFilter
    sortBy?: SearchOffersSortType
    searchSummary?: SearchSummary
    __typename: 'SearchOffersSummary'
}

export type SearchOffersType = 'MADE' | 'RECEIVED'

export interface SearchPackListingsResponse {
    data?: PackListingsSearchSummary
    __typename: 'SearchPackListingsResponse'
}

export interface SearchPacksResponse {
    data?: PackSearchSummary
    __typename: 'SearchPacksResponse'
}

export interface SearchSetsResponse {
    searchSummary?: SearchSummary
    __typename: 'SearchSetsResponse'
}

export interface SearchShowcasesResponse {
    data?: ShowcasesSearchSummary
    __typename: 'SearchShowcasesResponse'
}

export interface SearchSuggestions {
    playerSuggestions?: (Player | undefined)[]
    __typename: 'SearchSuggestions'
}

export interface SearchSummary {
    count?: CountSummary
    totalCount?: Scalars['Int']
    pagination?: Pagination
    data?: SortableCollection
    __typename: 'SearchSummary'
}

export interface SearchTeamCollectionResponse {
    bySeries?: TeamCollectionFilters
    teamCollection?: CollectorTeamSeriesCounts
    totalPlayers?: Scalars['Int']
    totalPlayersOwned?: Scalars['Int']
    __typename: 'SearchTeamCollectionResponse'
}

export interface SearchUserSetAssociationsResponse {
    filters?: UserSetAssociationFilters
    sortBy?: UserSetAssociationSortType
    searchSummary?: SearchSummary
    __typename: 'SearchUserSetAssociationsResponse'
}

export interface SearchUsersResponse {
    data?: UserSearchSummary
    __typename: 'SearchUsersResponse'
}

export interface SearchWatchedEditionsResponse {
    sortBy?: WatchedEditionsSortType
    searchSummary?: SearchSummary
    filters?: WatchedEditionFilters
    __typename: 'SearchWatchedEditionsResponse'
}

export type SeriesFilter = 'SERIES_1' | 'SERIES_2' | 'SERIES_S2021' | 'SERIES_3' | 'SERIES_4'

export interface Set {
    id: Scalars['ID']
    sortID?: Scalars['SortID']
    version?: Scalars['Version']
    flowId?: Scalars['Int']
    flowName?: Scalars['String']
    flowSeriesNumber?: Scalars['Int']
    flowLocked?: Scalars['Boolean']
    setVisualId?: VisualIdType
    assetPath?: Scalars['String']
    assets?: SetAssets
    plays?: Play[]
    leagues?: (League | undefined)[]
    __typename: 'Set'
}

export interface SetAssets {
    images?: (SetImage | undefined)[]
    __typename: 'SetAssets'
}

export interface SetImage {
    type?: SetImageType
    url: Scalars['String']
    __typename: 'SetImage'
}

export type SetImageType = 'SET_IMAGE_TYPE_NIL' | 'SPECIAL_EDITION_GAME_PANEL_EXTERIOR'

export interface SetPlayCirculations {
    ownedByCollectors: Scalars['Int']
    forSaleByCollectors: Scalars['Int']
    hiddenInPacks: Scalars['Int']
    unavailableForPurchase: Scalars['Int']
    circulationCount: Scalars['Int']
    burned: Scalars['Int']
    locked: Scalars['Int']
    __typename: 'SetPlayCirculations'
}

export interface SetProgress {
    set?: Set
    numTotalEditionSlots?: Scalars['Int']
    numFilledEditionSlots?: Scalars['Int']
    __typename: 'SetProgress'
}

export interface SetSelectedUserTitlesResponse {
    ok: Scalars['Boolean']
    __typename: 'SetSelectedUserTitlesResponse'
}

export interface Sets {
    size?: Scalars['Int']
    data: Set[]
    __typename: 'Sets'
}

export interface SetsProgress {
    progress?: SetProgress[]
    __typename: 'SetsProgress'
}

export interface Shop {
    packListings?: ShopPackListingsConnection
    __typename: 'Shop'
}

export interface ShopPackListingsConnection {
    pageInfo: PageInfo
    edges?: ShopPackListingsEdge[]
    __typename: 'ShopPackListingsConnection'
}

export interface ShopPackListingsEdge {
    node?: PackListing
    eligibility?: UserPackListingEligibility
    __typename: 'ShopPackListingsEdge'
}

export interface Showcase {
    id: Scalars['ID']
    sortID: Scalars['SortID']
    version: Scalars['Version']
    name: Scalars['String']
    userID: Scalars['ID']
    momentIDs?: Scalars['ID'][]
    moments?: MintedMoment[]
    user?: UserPublicInfo
    momentsOrder?: (ShowcaseMomentOrder | undefined)[]
    questID?: Scalars['ID']
    __typename: 'Showcase'
}

export interface ShowcaseMomentOrder {
    order: Scalars['Int']
    momentID: Scalars['ID']
    __typename: 'ShowcaseMomentOrder'
}

export interface Showcases {
    size?: Scalars['Int']
    data: Showcase[]
    __typename: 'Showcases'
}

export interface ShowcasesFilters {
    byUserID?: Scalars['String']
    byQuestID?: Scalars['ID']
    byShowcaseName?: Scalars['String']
    __typename: 'ShowcasesFilters'
}

export interface ShowcasesSearchSummary {
    filters?: ShowcasesFilters
    sortBy?: ShowcasesSortType
    searchSummary?: SearchSummary
    __typename: 'ShowcasesSearchSummary'
}

export type ShowcasesSortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC'

export type SignableType = 'REPACK' | 'MARKETPLACE_PACKS'

export type Sortable = (Activity | Edition | EditionListing | MarketplaceTransaction | MintedMoment | MomentGroup | MomentListing | Offer | OnChainPack | Pack | PackListing | PacksForUserCollection | Play | Set | Showcase | User | UserChallenge | UserSetAssociation | WatchedEdition) & { __isUnion?: true }

export type SortableCollection = (Activities | EditionListings | Editions | MarketplaceTransactions | MintedMoments | MomentGroups | MomentListings | Offers | PackListings | PacksForUserCollections | Plays | Sets | Showcases | UserChallenges | UserSetAssociations | Users | WatchedEditions) & { __isUnion?: true }

export interface SpecialNFT {
    flowID: Scalars['Int']
    seriesFlowID: Scalars['Int']
    version: Scalars['Int']
    type: SpecialNFTType
    set: SpecialSet
    acquiredAt: Scalars['Time']
    owner?: NftOwner
    originalOwner?: NftOwner
    momentTopshotScore?: MomentTopshotScore
    auction?: Auction
    price?: Scalars['Price']
    __typename: 'SpecialNFT'
}

export type SpecialNFTType = 'ALL_STAR_NFT' | 'ANNIVERSARY_NFT' | 'ALL_NFT'

export interface SpecialNftPurchasedActivity {
    specialNFT?: SpecialNFT
    __typename: 'SpecialNftPurchasedActivity'
}

export interface SpecialNftSoldActivity {
    specialNFT?: SpecialNFT
    __typename: 'SpecialNftSoldActivity'
}

export interface SpecialSet {
    flowID: Scalars['Int']
    seriesFlowID: Scalars['Int']
    seriesName: Scalars['String']
    version: Scalars['Int']
    vipCustomID?: Scalars['Int']
    name?: Scalars['String']
    description?: Scalars['String']
    assetUri?: Scalars['String']
    assetPreviewUri?: Scalars['String']
    additionalImages?: Scalars['String']
    assetFileType?: Scalars['String']
    metadata?: metadata
    __typename: 'SpecialSet'
}

export interface StatsPlayerGameScores {
    blocks?: Scalars['Int']
    points?: Scalars['Int']
    steals?: Scalars['Int']
    assists?: Scalars['Int']
    minutes?: Scalars['String']
    rebounds?: Scalars['Int']
    turnovers?: Scalars['Int']
    plusMinus?: Scalars['Int']
    flagrantFouls?: Scalars['Int']
    personalFouls?: Scalars['Int']
    technicalFouls?: Scalars['Int']
    twoPointsMade?: Scalars['Int']
    blockedAttempts?: Scalars['Int']
    fieldGoalsMade?: Scalars['Int']
    freeThrowsMade?: Scalars['Int']
    threePointsMade?: Scalars['Int']
    defensiveRebounds?: Scalars['Int']
    offensiveRebounds?: Scalars['Int']
    pointsOffTurnovers?: Scalars['Int']
    twoPointsAttempted?: Scalars['Int']
    assistTurnoverRatio?: Scalars['Float']
    fieldGoalsAttempted?: Scalars['Int']
    freeThrowsAttempted?: Scalars['Int']
    twoPointsPercentage?: Scalars['Float']
    fieldGoalsPercentage?: Scalars['Float']
    freeThrowsPercentage?: Scalars['Float']
    threePointsAttempted?: Scalars['Int']
    threePointsPercentage?: Scalars['Float']
    playerPosition?: PlayerPosition
    __typename: 'StatsPlayerGameScores'
}

export interface StatsPlayerSeasonAverageScores {
    minutes?: Scalars['String']
    blocks?: Scalars['Float']
    points?: Scalars['Float']
    steals?: Scalars['Float']
    assists?: Scalars['Float']
    rebounds?: Scalars['Float']
    turnovers?: Scalars['Float']
    plusMinus?: Scalars['Float']
    flagrantFouls?: Scalars['Float']
    personalFouls?: Scalars['Float']
    technicalFouls?: Scalars['Float']
    twoPointsMade?: Scalars['Float']
    blockedAttempts?: Scalars['Float']
    fieldGoalsMade?: Scalars['Float']
    freeThrowsMade?: Scalars['Float']
    threePointsMade?: Scalars['Float']
    defensiveRebounds?: Scalars['Float']
    offensiveRebounds?: Scalars['Float']
    pointsOffTurnovers?: Scalars['Float']
    twoPointsAttempted?: Scalars['Float']
    assistTurnoverRatio?: Scalars['Float']
    fieldGoalsAttempted?: Scalars['Float']
    freeThrowsAttempted?: Scalars['Float']
    twoPointsPercentage?: Scalars['Float']
    fieldGoalsPercentage?: Scalars['Float']
    freeThrowsPercentage?: Scalars['Float']
    threePointsAttempted?: Scalars['Float']
    threePointsPercentage?: Scalars['Float']
    efficiency?: Scalars['Float']
    true_shooting_attempts?: Scalars['Float']
    points_in_paint_made?: Scalars['Float']
    points_in_paint_attempted?: Scalars['Float']
    points_in_paint?: Scalars['Float']
    fouls_drawn?: Scalars['Float']
    offensive_fouls?: Scalars['Float']
    fast_break_points?: Scalars['Float']
    fast_break_points_attempted?: Scalars['Float']
    fast_break_points_made?: Scalars['Float']
    second_chance_points?: Scalars['Float']
    second_chance_points_attempted?: Scalars['Float']
    second_chance_points_made?: Scalars['Float']
    __typename: 'StatsPlayerSeasonAverageScores'
}

export interface StringTuple {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'StringTuple'
}

export type SubmitVoteForPollError = 'POLL_NOT_STARTED' | 'POLL_EXPIRED'

export interface SubmitVoteForPollResponse {
    error?: SubmitVoteForPollError
    __typename: 'SubmitVoteForPollResponse'
}

export type Syncable = (Edition | EditionListing | MarketplaceTransaction | MintedMoment | MomentGroup | MomentListing | OnChainPack | Pack | PackListing | PacksForUserCollection | Play | Set | Showcase | UserChallenge) & { __isUnion?: true }

export interface TS50 {
    /** polls is a list of TS50 polls which are released in small increments. The product term is called waves. */
    polls: Poll[]
    __typename: 'TS50'
}

export interface Tag {
    id: Scalars['ID']
    /** @deprecated name is from an old tag definition that is no longer used */
    name: Scalars['String']
    title: Scalars['String']
    visible: Scalars['Boolean']
    hardcourt: Scalars['Boolean']
    level: TagLevel
    __typename: 'Tag'
}

export type TagLevel = 'NIL' | 'MOMENT' | 'SETPLAY' | 'PLAY'

export interface Team {
    id: Scalars['ID']
    name?: Scalars['String']
    __typename: 'Team'
}

export interface TeamCollectionFilters {
    bySeries?: SeriesFilter
    __typename: 'TeamCollectionFilters'
}

export interface TeamCompletionPlayer {
    playerId: Scalars['String']
    playerName: Scalars['String']
    owned: Scalars['Boolean']
    locked: Scalars['Boolean']
    __typename: 'TeamCompletionPlayer'
}

export interface TeamCompletionProgress {
    ownedPlayerCount: Scalars['Int']
    lockedPlayerCount: Scalars['Int']
    requiredCount: Scalars['Int']
    teamId: Scalars['ID']
    players: (TeamCompletionPlayer | undefined)[]
    bonusPointsAvailable: Scalars['Int']
    bonusPointsEarned: Scalars['Int']
    __typename: 'TeamCompletionProgress'
}

export interface TeamLeaderboard {
    id: Scalars['String']
    kind: LeaderboardKind
    entries: (LeaderboardUser | undefined)[]
    __typename: 'TeamLeaderboard'
}

export interface TeamScoresByQuarter {
    quarterScores?: (QuarterScore | undefined)[]
    __typename: 'TeamScoresByQuarter'
}

export interface TeamSeriesCompletionProgress {
    ownedPlayerCount: Scalars['Int']
    lockedPlayerCount: Scalars['Int']
    requiredCount: Scalars['Int']
    teamId: Scalars['ID']
    flowSeriesNumber: Scalars['Int']
    players: (TeamCompletionPlayer | undefined)[]
    bonusPointsAvailable: Scalars['Int']
    bonusPointsEarned: Scalars['Int']
    __typename: 'TeamSeriesCompletionProgress'
}

export interface TeamSeriesCompletionProgressBucket {
    teamId: Scalars['ID']
    seriesProgress: TeamSeriesCompletionProgress[]
    contemporaryProgress: TeamCompletionProgress
    allProgress: TeamCompletionProgress
    __typename: 'TeamSeriesCompletionProgressBucket'
}

export interface Teams {
    size?: Scalars['Int']
    data: Team[]
    __typename: 'Teams'
}

export interface Title {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    category: TitleCategory
    collectorCount: Scalars['Int']
    collectorFraction: Scalars['Float']
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    __typename: 'Title'
}

export interface TitleCategory {
    id: Scalars['ID']
    name: Scalars['String']
    __typename: 'TitleCategory'
}

export interface TopshotScore {
    dapperID: Scalars['ID']
    score: Scalars['Int']
    momentCount: Scalars['Int']
    bonusData: TopshotScoreBonusData[]
    __typename: 'TopshotScore'
}

export interface TopshotScoreBonus {
    bonusID: TopshotScoreBonusID
    bonusPts: Scalars['Int']
    qualified: Scalars['Boolean']
    __typename: 'TopshotScoreBonus'
}

export interface TopshotScoreBonusData {
    name: Scalars['String']
    bonusTotal: Scalars['Int']
    bonuses: TopshotScoreBonus[]
    __typename: 'TopshotScoreBonusData'
}

export type TopshotScoreBonusID = 'FAVORITE_TEAM' | 'EARLY_ADOPTER'

export interface TotalBurnedMomentCountByRarity {
    momentTier?: MomentTier
    momentCount?: Scalars['Int']
    __typename: 'TotalBurnedMomentCountByRarity'
}

export interface TransferPacksResponse {
    success: Scalars['Boolean']
    __typename: 'TransferPacksResponse'
}

export interface UnhideOffersResponse {
    success: Scalars['Boolean']
    __typename: 'UnhideOffersResponse'
}

export interface UnpinMomentResponse {
    success: Scalars['Boolean']
    __typename: 'UnpinMomentResponse'
}

export interface UpdateMomentGroupResponse {
    momentGroup: MomentGroup
    __typename: 'UpdateMomentGroupResponse'
}

export interface UpdateNBAMarketingResponse {
    isSuccess: Scalars['Boolean']
    __typename: 'UpdateNBAMarketingResponse'
}

export interface UpdateUserSettingsResponse {
    userSettings?: UserSettings
    __typename: 'UpdateUserSettingsResponse'
}

export interface UpsertUserProfileResponse {
    dapperID: Scalars['ID']
    __typename: 'UpsertUserProfileResponse'
}

export interface User {
    sortID?: Scalars['SortID']
    dapperID: Scalars['String']
    /** @deprecated email is not a public field, will always be blank, will be removed soon */
    email: Scalars['String']
    flowAddress?: Scalars['String']
    username?: Scalars['String']
    profileImageUrl?: Scalars['String']
    twitterHandle?: Scalars['String']
    segmentID?: Scalars['String']
    country?: Scalars['String']
    city?: Scalars['String']
    topshotScore?: Scalars['Int']
    __typename: 'User'
}

export interface UserBallerStatus {
    level?: BallerStatusLevel
    totalPoints?: Scalars['Int']
    milestones?: (UserBallerStatusMilestone | undefined)[]
    dapperID: Scalars['String']
    __typename: 'UserBallerStatus'
}

export interface UserBallerStatusMilestone {
    label?: BallerStatusMilestoneLabel
    orderedTasks?: (UserBallerStatusTask | undefined)[]
    numCompletedActions?: Scalars['Int']
    seenAt?: Scalars['Time']
    __typename: 'UserBallerStatusMilestone'
}

export interface UserBallerStatusTask {
    points?: Scalars['Int']
    status?: BallerStatusTaskStatus
    numRequiredActions?: Scalars['Int']
    __typename: 'UserBallerStatusTask'
}

export interface UserBurnedMoment {
    id?: Scalars['String']
    flowID?: Scalars['Int']
    flowSerialNumber?: Scalars['Int']
    subeditionID?: Scalars['Int']
    assetPathPrefix?: Scalars['String']
    flowSeriesNumber?: Scalars['Int']
    tier?: MomentTier
    flowName?: Scalars['String']
    visualID?: VisualIdType
    playID?: Scalars['String']
    headline?: Scalars['String']
    circulationCount?: Scalars['Int']
    username?: Scalars['String']
    profileImageURL?: Scalars['String']
    score?: Scalars['Int']
    __typename: 'UserBurnedMoment'
}

export interface UserBurnedMomentStats {
    username?: Scalars['String']
    profileImageURL?: Scalars['String']
    momentCount?: Scalars['Int']
    __typename: 'UserBurnedMomentStats'
}

export interface UserBurnedTopshotScore {
    username?: Scalars['String']
    profileImageURL?: Scalars['String']
    score?: Scalars['Int']
    __typename: 'UserBurnedTopshotScore'
}

export interface UserCampaignEventProgress {
    timesCompleted: Scalars['Int']
    completedAt?: Scalars['Time']
    __typename: 'UserCampaignEventProgress'
}

export interface UserChallenge {
    id: Scalars['ID']
    version?: Scalars['Version']
    sortID?: Scalars['SortID']
    name: Scalars['String']
    description: Scalars['String']
    expirationDate?: Scalars['Time']
    slots?: ChallengeSlot[]
    reward?: ChallengeReward
    rewardStatus?: ChallengeRewardStatus
    numUsersCompleted?: Scalars['Int']
    numUserSubmissions?: Scalars['Int']
    type: ChallengeType
    variableChallenge?: VariableChallenge
    userSubmission?: VariableChallengeSubmission
    visibility?: ChallengeVisibility
    __typename: 'UserChallenge'
}

export interface UserChallenges {
    size?: Scalars['Int']
    data: UserChallenge[]
    __typename: 'UserChallenges'
}

export interface UserMomentListing {
    id?: Scalars['ID']
    version?: Scalars['Version']
    price?: Scalars['Price']
    moment?: MintedMoment
    seller?: User
    __typename: 'UserMomentListing'
}

export interface UserMomentListings {
    set?: Set
    play?: Play
    assetPathPrefix?: Scalars['String']
    version?: Scalars['Version']
    priceRange?: PriceRange
    momentListings?: UserMomentListing[]
    setPlay?: MintedSetPlay
    /** @deprecated use flowRetired field found inside mintedSetPlay instead */
    circulationCount?: Scalars['Int']
    /** @deprecated use flowRetired field found inside mintedSetPlay instead */
    flowRetired?: Scalars['Boolean']
    momentListingCount: Scalars['Int']
    __typename: 'UserMomentListings'
}

export interface UserMomentListingsResponse {
    data?: UserMomentListings
    __typename: 'UserMomentListingsResponse'
}

export interface UserPackListingEligibility {
    isEligible: Scalars['Boolean']
    levels?: UserPackListingLevelEligibility[]
    maxOrderQuantity: Scalars['Int']
    __typename: 'UserPackListingEligibility'
}

export interface UserPackListingLevelEligibility {
    id: Scalars['ID']
    name: Scalars['String']
    isEligible: Scalars['Boolean']
    requirements?: Requirement[]
    maxOrderQuantity: Scalars['Int']
    __typename: 'UserPackListingLevelEligibility'
}

export type UserPackListingsSort = 'CREATED_AT'

export interface UserPublicInfo {
    dapperID: Scalars['String']
    flowAddress?: Scalars['String']
    username?: Scalars['String']
    profileImageUrl?: Scalars['String']
    twitterHandle?: Scalars['String']
    createdAt?: Scalars['Time']
    favoriteTeamID?: Scalars['String']
    country?: Scalars['String']
    city?: Scalars['String']
    successfulReferrals?: Scalars['Int']
    ownedSpecialNFTTypes?: SpecialNFTType[]
    collectorScore?: CollectorScore
    titles?: UserTitle[]
    __typename: 'UserPublicInfo'
}

export interface UserSearchFilters {
    country?: Scalars['String']
    city?: Scalars['String']
    username?: Scalars['String']
    __typename: 'UserSearchFilters'
}

export type UserSearchSortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'TOPSHOT_SCORE_DESC'

export interface UserSearchSummary {
    filters?: UserSearchFilters
    sortBy?: UserSearchSortType
    searchSummary?: SearchSummary
    __typename: 'UserSearchSummary'
}

export interface UserSetAssociation {
    sortID?: Scalars['SortID']
    setID: Scalars['ID']
    user: UserPublicInfo
    startedAt?: Scalars['Time']
    completedAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    __typename: 'UserSetAssociation'
}

export interface UserSetAssociationFilters {
    byIsCompleted?: Scalars['Boolean']
    bySets?: (Scalars['ID'] | undefined)[]
    __typename: 'UserSetAssociationFilters'
}

export type UserSetAssociationSortType = 'COMPLETED_AT_ASC' | 'COMPLETED_AT_DESC' | 'UPDATED_AT_ASC' | 'UPDATED_AT_DESC'

export interface UserSetAssociations {
    size?: Scalars['Int']
    data: UserSetAssociation[]
    __typename: 'UserSetAssociations'
}

export interface UserSettings {
    notificationSettings?: NotificationSettings
    updatedAt?: Scalars['Time']
    __typename: 'UserSettings'
}

export interface UserTitle {
    dapperID: Scalars['ID']
    title: Title
    isSelected: Scalars['Boolean']
    createdAt: Scalars['Time']
    __typename: 'UserTitle'
}

export interface UserTopshotTag {
    id: Scalars['ID']
    tagID?: Scalars['ID']
    dapperID?: Scalars['String']
    title?: Scalars['String']
    rewardedFromTitle?: Scalars['String']
    description?: Scalars['String']
    imageURL?: Scalars['String']
    videoURL?: Scalars['String']
    slug?: Scalars['String']
    obtainedAt?: Scalars['Time']
    createdAt?: Scalars['Time']
    updatedAt?: Scalars['Time']
    __typename: 'UserTopshotTag'
}

export interface Users {
    size?: Scalars['Int']
    data: User[]
    __typename: 'Users'
}

export type ValueType = 'STRING' | 'BOOLEAN' | 'INT'

export interface VariableChallenge {
    id: Scalars['ID']
    Category: VariableChallengeCategory
    summary: Scalars['String']
    finePrint: Scalars['String']
    ribbonText: Scalars['String']
    prize: Scalars['String']
    startDate: Scalars['Time']
    assets: VariableChallengeAssets
    prerequisites: VariableChallengePrerequisites
    variableSlots: VariableChallengeSlot[]
    pageData: VariableChallengePageData
    __typename: 'VariableChallenge'
}

export interface VariableChallengeAssets {
    image?: Scalars['String']
    video?: Scalars['String']
    __typename: 'VariableChallengeAssets'
}

export type VariableChallengeCategory = 'SHOWCASE' | 'FLASH' | 'BURN' | 'HYBRID'

export interface VariableChallengePageData {
    completedTitle?: Scalars['String']
    incompletedTitle?: Scalars['String']
    successDescription?: Scalars['String']
    successMedia?: Scalars['String']
    __typename: 'VariableChallengePageData'
}

export interface VariableChallengePrerequisites {
    prerequisites?: Scalars['String'][]
    __typename: 'VariableChallengePrerequisites'
}

export interface VariableChallengeSlot {
    id: Scalars['ID']
    label: Scalars['String']
    query: VariableChallengeSlotQuery
    slotOrder: Scalars['Int']
    helpText?: Scalars['String']
    slotType?: VariableChallengeSlotType
    __typename: 'VariableChallengeSlot'
}

export interface VariableChallengeSlotQuery {
    byPlayers?: (Scalars['ID'] | undefined)[]
    bySetPlayTagIDs?: (Scalars['ID'] | undefined)[]
    byPlayTagIDs?: (Scalars['ID'] | undefined)[]
    byPlayIDs?: (Scalars['ID'] | undefined)[]
    byTeams?: (Scalars['ID'] | undefined)[]
    bySets?: (Scalars['ID'] | undefined)[]
    bySeries?: (Scalars['ID'] | undefined)[]
    bySetVisuals?: (Scalars['ID'] | undefined)[]
    byMomentTiers?: (MomentTier | undefined)[]
    byPlayCategory?: (Scalars['ID'] | undefined)[]
    byActiveChallenge?: (Scalars['ID'] | undefined)[]
    byPrimaryPlayerPosition?: (PlayerPosition | undefined)[]
    byLeagues?: (League | undefined)[]
    byGameDate?: DateRangeFilter
    byCreatedAt?: DateRangeFilter
    byPrice?: PriceRangeFilter
    byEditions?: (EditionsFilter | undefined)[]
    __typename: 'VariableChallengeSlotQuery'
}

export type VariableChallengeSlotType = 'NIL' | 'SAVE' | 'BURN' | 'FREEZE' | 'LOCK'

export interface VariableChallengeSubmission {
    id: Scalars['ID']
    status: VariableChallengeSubmissionStatus
    slots?: VariableChallengeSubmissionSlot[]
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    __typename: 'VariableChallengeSubmission'
}

export interface VariableChallengeSubmissionResponse {
    id: Scalars['ID']
    challengeID: Scalars['ID']
    slots: VariableChallengeSubmissionSlotResponse[]
    status: VariableChallengeSubmissionStatus
    __typename: 'VariableChallengeSubmissionResponse'
}

export interface VariableChallengeSubmissionSlot {
    id: Scalars['ID']
    slotID: Scalars['ID']
    momentID: Scalars['ID']
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    __typename: 'VariableChallengeSubmissionSlot'
}

export interface VariableChallengeSubmissionSlotResponse {
    id: Scalars['ID']
    slotID: Scalars['ID']
    momentID: Scalars['ID']
    __typename: 'VariableChallengeSubmissionSlotResponse'
}

export type VariableChallengeSubmissionStatus = 'VALID' | 'MISSING_REQUIREMENTS' | 'BURNING_PENDING' | 'USER_ACTION_PENDING'

export interface VendorMomentListing {
    id?: Scalars['ID']
    set?: Set
    play?: Play
    version?: Scalars['Version']
    price?: Scalars['Price']
    assetPathPrefix?: Scalars['String']
    /** admin-set previous price for sale display */
    previousPrice?: Scalars['Price']
    circulationCount?: Scalars['Int']
    __typename: 'VendorMomentListing'
}

export type VisualIdType = 'SET_VISUAL_NIL' | 'SET_VISUAL_COMMON' | 'SET_VISUAL_RARE' | 'SET_VISUAL_LEGENDARY' | 'SET_VISUAL_ULTIMATE' | 'SET_VISUAL_FANDOM' | 'SET_VISUAL_ANTHOLOGY'

export interface WaitingRoom {
    name?: Scalars['String']
    /** Whether the waiting room is active or not   */
    isActive?: Scalars['Boolean']
    /** The timestamp at which waiting room is to be active */
    activeAt?: Scalars['Time']
    __typename: 'WaitingRoom'
}

export interface WatchedEdition {
    sortID?: Scalars['SortID']
    playId: Scalars['String']
    setId: Scalars['String']
    watchlistId: Scalars['String']
    watchersCount: Scalars['Int']
    edition?: Edition
    __typename: 'WatchedEdition'
}

export interface WatchedEditionFilters {
    byWatchlistID?: Scalars['ID'][]
    byWatchlistDapperID?: Scalars['ID'][]
    byWatchedEdition?: WatchedEdition[]
    byWatchlistTitle?: Scalars['String'][]
    __typename: 'WatchedEditionFilters'
}

export interface WatchedEditions {
    size?: Scalars['Int']
    data: WatchedEdition[]
    __typename: 'WatchedEditions'
}

export type WatchedEditionsSortType = 'CREATED_AT_ASC' | 'CREATED_AT_DESC' | 'MOST_WATCHED_ASC' | 'MOST_WATCHED_DESC' | 'MOST_GAINED_ASC' | 'MOST_GAINED_DESC'

export interface Watchlist {
    id: Scalars['ID']
    dapperID: Scalars['ID']
    title: Scalars['String']
    createdAt: Scalars['Time']
    updatedAt: Scalars['Time']
    __typename: 'Watchlist'
}

export interface WatchlistData {
    watcherCount: Scalars['Int']
    isWatchedByUser: Scalars['Boolean']
    __typename: 'WatchlistData'
}

export interface WatchlistResponse {
    data?: Watchlist
    __typename: 'WatchlistResponse'
}

export interface authorizePackNFTsMintingResponse {
    signature: Scalars['String']
    __typename: 'authorizePackNFTsMintingResponse'
}

export type headlineSourceType = 'OVERRIDE' | 'PLAYER' | 'TEAM'

export type metadata = (AllstarSetMetadata) & { __isUnion?: true }

export interface AccountFirstPurchaseAgeErrorGenqlSelection{
    accountFirstPurchaseAgeMinutesLeft?: boolean | number
    accountFirstPurchaseAgeSecondsLeft?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivitiesGenqlSelection{
    size?: boolean | number
    data?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityGenqlSelection{
    id?: boolean | number
    sortID?: boolean | number
    subject?: ActivitySubjectGenqlSelection
    status?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    activityType?: boolean | number
    isRead?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityFiltersGenqlSelection{
    byUnread?: boolean | number
    byStatus?: boolean | number
    byType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityFiltersInput {byUnread?: (Scalars['Boolean'] | null),byStatus?: (ActivityStatus[] | null),byType?: (ActivityType[] | null)}

export interface ActivitySubjectGenqlSelection{
    on_PurchaseVendorMomentActivity?:PurchaseVendorMomentActivityGenqlSelection,
    on_PurchaseP2PMomentActivity?:PurchaseP2PMomentActivityGenqlSelection,
    on_P2PMomentListingActivity?:P2PMomentListingActivityGenqlSelection,
    on_P2PMomentListingCancellationActivity?:P2PMomentListingCancellationActivityGenqlSelection,
    on_P2PMomentListingSoldActivity?:P2PMomentListingSoldActivityGenqlSelection,
    on_PurchasePackActivity?:PurchasePackActivityGenqlSelection,
    on_MomentTransferRequestActivity?:MomentTransferRequestActivityGenqlSelection,
    on_MomentTransferReceivedActivity?:MomentTransferReceivedActivityGenqlSelection,
    on_MomentTradeInRequestActivity?:MomentTradeInRequestActivityGenqlSelection,
    on_MomentsTradeInRequestActivity?:MomentsTradeInRequestActivityGenqlSelection,
    on_OfferAvailableActivity?:OfferAvailableActivityGenqlSelection,
    on_OfferCompletedActivity?:OfferCompletedActivityGenqlSelection,
    on_SpecialNftPurchasedActivity?:SpecialNftPurchasedActivityGenqlSelection,
    on_SpecialNftSoldActivity?:SpecialNftSoldActivityGenqlSelection,
    __typename?: boolean | number
}

export interface AddEditionToWatchlistInput {watchlistId?: (Scalars['ID'] | null),playID: Scalars['String'],setID: Scalars['String']}

export interface AddEditionToWatchlistResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddMomentsToGroupsInput {momentIDs?: (Scalars['String'][] | null),momentGroupIDs?: (Scalars['String'][] | null)}

export interface AddMomentsToGroupsResponseGenqlSelection{
    groupMomentIDs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddUserMarketingCampaignRequest {campaign: Scalars['String']}

export interface AddUserMarketingCampaignResponseGenqlSelection{
    isAdded?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddUserReferralRequest {referralCode: Scalars['String'],referralType: ReferralType}

export interface AddUserReferralResponseGenqlSelection{
    isAdded?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AllPlayersByLeaguesInput {leagues: (League | null)[]}

export interface AllTeamsByLeaguesInput {leagues: (League | null)[]}

export interface AllstarSetMetadataGenqlSelection{
    teamID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuctionGenqlSelection{
    listingID?: boolean | number
    maxBid?: boolean | number
    maxBidWalletID?: boolean | number
    saleEndDate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuthenticateInput {code: Scalars['String'],redirectUrl?: (Scalars['String'] | null),source?: (Scalars['String'] | null)}

export interface AuthenticateResponseGenqlSelection{
    idToken?: boolean | number
    refreshToken?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuthorizePackNFTsMintingInput {signable: Scalars['String'],mintType: SignableType}

export interface BallerStatusLevelGenqlSelection{
    label?: boolean | number
    pointThreshold?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BallerStatusLevelsGenqlSelection{
    levels?: BallerStatusLevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaseSearchInput {pagination: PaginationInput}

export interface BonusGenqlSelection{
    /** id is a human readable ID, i.e. cool_cats, net_spend */
    id?: boolean | number
    /** @deprecated score is deprecated. Use id only */
    score?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BurnedEditionGenqlSelection{
    setID?: boolean | number
    playID?: boolean | number
    subeditionID?: boolean | number
    flowSeriesNumber?: boolean | number
    flowName?: boolean | number
    visualID?: boolean | number
    headline?: boolean | number
    assetPathPrefix?: boolean | number
    momentCount?: boolean | number
    totalMomentCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CampaignGenqlSelection{
    id?: boolean | number
    slug?: boolean | number
    title?: boolean | number
    description?: boolean | number
    imageUrl?: boolean | number
    startAt?: boolean | number
    endAt?: boolean | number
    visibility?: boolean | number
    reward?: CampaignRewardGenqlSelection
    events?: CampaignEventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CampaignEventGenqlSelection{
    id?: boolean | number
    category?: boolean | number
    title?: boolean | number
    description?: boolean | number
    actionLink?: boolean | number
    timesRequired?: boolean | number
    validFrom?: boolean | number
    validTo?: boolean | number
    userProgress?: UserCampaignEventProgressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CampaignRewardGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    description?: boolean | number
    imageUrl?: boolean | number
    videoUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CancelMomentSaleInput {orderID: Scalars['String'],redirectURL: Scalars['String']}

export interface CancelMomentSaleResponseGenqlSelection{
    orderID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CancelPurchasePackInput {orderID: Scalars['String']}

export interface CancelPurchasePackResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CancelReservationInput {id: Scalars['ID']}

export interface CancelReservationResponseGenqlSelection{
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChallengeFiltersGenqlSelection{
    byUserID?: boolean | number
    byChallengeCompletionState?: boolean | number
    byChallengeExpiryState?: boolean | number
    byChallengeTypes?: boolean | number
    byLoggedDapperId?: boolean | number
    /** @deprecated byHasValidUserSubmission should be used */
    byHasUserSubmission?: boolean | number
    byHasValidUserSubmission?: boolean | number
    byVariableChallengeCategories?: boolean | number
    byChallengeVisibilities?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChallengeFiltersInput {byUserID?: (Scalars['String'] | null),byChallengeCompletionState?: (ChallengeCompletionStateFilter | null),byChallengeExpiryState?: (ChallengeExpiryStateFilter | null),byChallengeTypes?: (ChallengeType[] | null),byLoggedDapperId?: (Scalars['String'] | null),byHasUserSubmission?: (Scalars['Boolean'] | null),byHasValidUserSubmission?: (Scalars['Boolean'] | null),byVariableChallengeCategories?: (VariableChallengeCategory[] | null),
/** Filter by visibilities, only internal users (set in challengeVisibility FF) can set this filter, default is Public */
byChallengeVisibilities?: (ChallengeVisibility[] | null)}

export interface ChallengeProgressGenqlSelection{
    challenge?: UserChallengeGenqlSelection
    numTotalSlots?: boolean | number
    numFilledSlots?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChallengeRewardGenqlSelection{
    playID?: boolean | number
    setID?: boolean | number
    assetPathPrefix?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChallengeSlotGenqlSelection{
    playID?: boolean | number
    setID?: boolean | number
    filledMomentID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChallengesProgressGenqlSelection{
    progress?: ChallengeProgressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChallengesSearchSummaryGenqlSelection{
    filters?: ChallengeFiltersGenqlSelection
    searchSummary?: SearchSummaryGenqlSelection
    sortBy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CheckActiveChallengeSubmissionsByMomentIDInput {momentID: Scalars['ID'],ignoreSubmissionID?: (Scalars['ID'] | null),variableChallengeCategories?: (VariableChallengeCategory[] | null)}

export interface CheckActiveChallengeSubmissionsByMomentIDResponseGenqlSelection{
    isUsed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CheckExistingP2POrdersInput {momentID: Scalars['ID']}

export interface CheckExistingP2POrdersResponseGenqlSelection{
    ordersExist?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CodexFiltersGenqlSelection{
    bySeries?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CodexFiltersInput {bySeries?: (SeriesFilter | null)}

export interface CodexSetGenqlSelection{
    set?: SetGenqlSelection
    totalEditionSlots?: boolean | number
    filledEditionSlots?: boolean | number
    uniqueMoments?: boolean | number
    hasChallengeReward?: boolean | number
    isCompleted?: boolean | number
    completedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CodexSetWithEditionsGenqlSelection{
    codexSet?: CodexSetGenqlSelection
    editionSlots?: EditionSlotGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectibleGenqlSelection{
    id?: boolean | number
    playID?: boolean | number
    setID?: boolean | number
    chain?: boolean | number
    mintNumber?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorBonusGenqlSelection{
    bonusId?: boolean | number
    bonusPts?: boolean | number
    qualified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorBonusDataGenqlSelection{
    name?: boolean | number
    bonusTotal?: boolean | number
    bonuses?: CollectorBonusGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorChallengeCountsGenqlSelection{
    challengeRewards?: boolean | number
    challengeCompletions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorEditionGenqlSelection{
    quantity?: boolean | number
    setName?: boolean | number
    visualId?: boolean | number
    seriesNumber?: boolean | number
    challengeReward?: boolean | number
    challengeCompleted?: boolean | number
    playerId?: boolean | number
    teamId?: boolean | number
    editionId?: boolean | number
    league?: boolean | number
    moments?: CollectorMomentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorIntervalDataGenqlSelection{
    score?: boolean | number
    interval?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorMomentGenqlSelection{
    acquiredAt?: boolean | number
    serialNumber?: boolean | number
    collectorScorePts?: CollectorScorePtsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorPlayerTeamDataGenqlSelection{
    playerId?: boolean | number
    playerName?: boolean | number
    owned?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorScoreGenqlSelection{
    dapperId?: boolean | number
    score?: boolean | number
    incrementScoreByMoment?: boolean | number
    incrementScoreSinceDate?: boolean | number
    incrementScoreByTeam?: boolean | number
    incrementScoreByWNBA?: boolean | number
    decrementScoreByMoment?: boolean | number
    decrementScoreByMoments?: boolean | number
    favoriteTeamId?: boolean | number
    teamData?: CollectorScoreTeamCompletionGenqlSelection
    decrementedTeamData?: CollectorScoreTeamCompletionGenqlSelection
    setData?: CollectorSetDataGenqlSelection
    decrementedSetData?: CollectorSetDataGenqlSelection
    seriesData?: CollectorSeriesDataGenqlSelection
    decrementedSeriesData?: CollectorSeriesDataGenqlSelection
    bonusData?: CollectorBonusDataGenqlSelection
    intervalData?: CollectorIntervalDataGenqlSelection
    momentData?: CollectorEditionGenqlSelection
    specialNFTData?: CollectorSpecialNFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorScorePtsGenqlSelection{
    teamCompletionPts?: boolean | number
    setCompletionPts?: boolean | number
    seriesPts?: boolean | number
    totalPts?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorScoreRequestBonusGroup {name: Scalars['String'],bonusIds?: (Scalars['String'][] | null)}

export interface CollectorScoreTeamCompletionGenqlSelection{
    teamId?: boolean | number
    teamName?: boolean | number
    teamScore?: boolean | number
    seriesCounts?: CollectorTeamSeriesCountsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorSeriesCountGenqlSelection{
    total?: boolean | number
    title?: boolean | number
    challengeCounts?: CollectorChallengeCountsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorSeriesDataGenqlSelection{
    seriesNumber?: boolean | number
    title?: boolean | number
    challengeTitle?: boolean | number
    commonBase?: CollectorSeriesCountGenqlSelection
    commonSE?: CollectorSeriesCountGenqlSelection
    commonPromo?: CollectorSeriesCountGenqlSelection
    fandom?: CollectorSeriesCountGenqlSelection
    rare?: CollectorSeriesCountGenqlSelection
    legendary?: CollectorSeriesCountGenqlSelection
    anthology?: CollectorSeriesCountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorSetDataGenqlSelection{
    setId?: boolean | number
    setImage?: boolean | number
    setName?: boolean | number
    seriesNumber?: boolean | number
    total?: boolean | number
    owned?: boolean | number
    isComplete?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorSpecialNFTGenqlSelection{
    flowId?: boolean | number
    flowSetId?: boolean | number
    teamId?: boolean | number
    acquiredAt?: boolean | number
    momentTopshotScore?: MomentTopshotScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CollectorTeamSeriesCountsGenqlSelection{
    seriesNumber?: boolean | number
    owned?: boolean | number
    total?: boolean | number
    isComplete?: boolean | number
    players?: CollectorPlayerTeamDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CompleteCampaignEventInput {category: Scalars['String'],context: Scalars['String']}

export interface CompleteCampaignEventResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CompletedUserChallengeGenqlSelection{
    challenge?: UserChallengeGenqlSelection
    rewardStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfirmPackPurchaseInput {receipt?: (Scalars['String'] | null),orderID?: (Scalars['String'] | null),appStoreProductID?: (Scalars['String'] | null),paymentProvider: PaymentProvider}

export interface ConfirmPackPurchaseResponseGenqlSelection{
    error?: boolean | number
    orderID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CountSummaryGenqlSelection{
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateBulkMomentTradeInRequestInput {momentIDs?: (Scalars['ID'][] | null),momentFlowIDs?: (Scalars['String'][] | null),redirectURL: Scalars['String'],title: Scalars['String'],image: Scalars['String']}

export interface CreateBulkMomentTradeInRequestResponseGenqlSelection{
    RequestID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateDropSquadInput {packListingID: Scalars['ID']}

export interface CreateDropSquadResponseGenqlSelection{
    dropSquadID?: boolean | number
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateMomentGroupInput {name: Scalars['String']}

export interface CreateMomentGroupResponseGenqlSelection{
    momentGroup?: MomentGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateMomentSaleInput {momentID: Scalars['String'],price: Scalars['Price'],momentFlowID: Scalars['String'],redirectURL: Scalars['String'],momentMetaInput?: (MomentMetaInput | null)}

export interface CreateMomentSaleResponseGenqlSelection{
    orderID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateMomentTradeInRequestInput {momentID: Scalars['String'],momentFlowID: Scalars['String'],redirectURL: Scalars['String'],momentTitle: Scalars['String'],momentImage: Scalars['String']}

export interface CreateMomentTradeInRequestResponseGenqlSelection{
    RequestID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateMomentTransferRequestInput {momentID: Scalars['String'],momentFlowID: Scalars['String'],receiverDapperID: Scalars['String'],
/** This is the page that dapper will redirect back to for the transfer receipt page. */
redirectURL: Scalars['String'],
/** The title and image for the Dapper invocation confirmation display. */
momentTitle: Scalars['String'],momentImage: Scalars['String']}

export interface CreateMomentTransferRequestInputV2 {momentID: Scalars['String'],momentFlowID: Scalars['String'],receiverDapperID: Scalars['String'],redirectURL: Scalars['String'],momentTitle: Scalars['String'],momentImage: Scalars['String']}

export interface CreateMomentTransferRequestResponseGenqlSelection{
    ID?: boolean | number
    validation?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateMomentTransferRequestResultGenqlSelection{
    on_CreateMomentTransferRequestSuccess?:CreateMomentTransferRequestSuccessGenqlSelection,
    on_AccountFirstPurchaseAgeError?:AccountFirstPurchaseAgeErrorGenqlSelection,
    on_MomentAgeError?:MomentAgeErrorGenqlSelection,
    on_InsufficientMomentsError?:InsufficientMomentsErrorGenqlSelection,
    __typename?: boolean | number
}

export interface CreateMomentTransferRequestSuccessGenqlSelection{
    ID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreatePackPurchaseIntentInput {packListingID: Scalars['String'],quantity: Scalars['Int'],recaptchaToken?: (Scalars['String'] | null),queueID?: (Scalars['String'] | null),redirectURL?: (Scalars['String'] | null)}

export interface CreatePackPurchaseIntentResponseGenqlSelection{
    orderID?: boolean | number
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateVariableChallengeSubmissionInput {challengeID: Scalars['ID'],slots: VariableChallengeSubmissionSlotInput[]}

export interface CreateWatchlistInput {title: Scalars['String']}

export interface DateRangeFilterGenqlSelection{
    start?: boolean | number
    end?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DateRangeFilterInput {start?: (Scalars['Time'] | null),end?: (Scalars['Time'] | null)}

export interface DeleteMomentGroupInput {momentGroupID: Scalars['String']}

export interface DeleteMomentGroupResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteShowcaseInput {showcaseID: Scalars['ID']}

export interface DeleteShowcaseResponseGenqlSelection{
    deletedShowcaseID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteWatchlistInput {id: Scalars['ID']}

export interface DeleteWatchlistResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DropSquadGenqlSelection{
    /** Autogenerated unique identifier of a squad */
    id?: boolean | number
    /** packListingID is the unique identifier for the pack listing the squad is associated with */
    packListingID?: boolean | number
    /** members will be sorted by joined_at asc to prevent boxes moving around on the FE */
    members?: DropSquadMemberGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DropSquadMemberGenqlSelection{
    role?: boolean | number
    joinedAt?: boolean | number
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DuplicateMomentGroupInput {name: Scalars['String'],momentGroupFromID: Scalars['ID']}

export interface DuplicateMomentGroupResponseGenqlSelection{
    momentGroup?: MomentGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionGenqlSelection{
    id?: boolean | number
    set?: SetGenqlSelection
    play?: PlayGenqlSelection
    setPlay?: MintedSetPlayGenqlSelection
    parallelSetPlay?: MintedSetPlayParallelGenqlSelection
    assetPathPrefix?: boolean | number
    sortID?: boolean | number
    version?: boolean | number
    circulationCount?: boolean | number
    flowRetired?: boolean | number
    state?: boolean | number
    tags?: TagGenqlSelection
    parallelID?: boolean | number
    challengeID?: boolean | number
    momentTier?: boolean | number
    /** tier is the same as momentTier */
    tier?: boolean | number
    parallels?: EditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionAverageSaleDataGenqlSelection{
    averagePrice?: boolean | number
    numDays?: boolean | number
    numSales?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionFilterInput {bySetIDs?: ((Scalars['ID'] | null)[] | null)}

export interface EditionFiltersGenqlSelection{
    bySetIDs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionListingGenqlSelection{
    id?: boolean | number
    version?: boolean | number
    sortID?: boolean | number
    set?: SetGenqlSelection
    play?: PlayGenqlSelection
    /** setPlay contains setPlay data including tags, circulation count and a retired flag */
    setPlay?: MintedSetPlayGenqlSelection
    /** parallelSetPlay contains setPlay data including tags, circulation count and a retired flag */
    parallelSetPlay?: MintedSetPlayParallelGenqlSelection
    assetPathPrefix?: boolean | number
    /** The price range for all the moments available for sale for this editions */
    priceRange?: PriceRangeGenqlSelection
    /** How many of this edition listing are for sale */
    editionListingCount?: boolean | number
    /** how many of unique seller - edition pairs are on the marketplace */
    uniqueSellerCount?: boolean | number
    /** userOwnedEditionsCount is an amount of Editions(SetPlays) owned by the reqesting user */
    userOwnedEditionsCount?: boolean | number
    averageSaleData?: EditionAverageSaleDataGenqlSelection
    watchlistData?: WatchlistDataGenqlSelection
    tier?: boolean | number
    parallelID?: boolean | number
    parallels?: EditionListingGenqlSelection
    userID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionListingFilterInput {bySets?: ((Scalars['ID'] | null)[] | null),byPlayers?: ((Scalars['ID'] | null)[] | null),byTeams?: ((Scalars['ID'] | null)[] | null),byPrimaryPlayerPosition?: ((PlayerPosition | null)[] | null),byPrice?: (PriceRangeFilterInput | null),byPower?: (IntegerRangeFilterInput | null),byGameDate?: (DateRangeFilterInput | null),byCreatedAt?: (DateRangeFilterInput | null),byPlayerGameScores?: (PlayerGameScoresFiltersInput | null),bySetVisuals?: ((VisualIdType | null)[] | null),byMomentTiers?: ((MomentTier | null)[] | null),byPlayIDs?: ((Scalars['ID'] | null)[] | null),bySeries?: ((Scalars['ID'] | null)[] | null),byPlayTagIDs?: ((Scalars['ID'] | null)[] | null),bySetPlayTagIDs?: ((Scalars['ID'] | null)[] | null),bySerialNumber?: (IntegerRangeFilterInput | null),byPlayCategory?: ((Scalars['ID'] | null)[] | null),byActiveChallenge?: ((Scalars['ID'] | null)[] | null),byLeagues?: ((League | null)[] | null),byEditions?: ((EditionsFilterInput | null)[] | null),byParallelIDs?: ((Scalars['Int'] | null)[] | null),byRecommendation?: (RecommendationType | null)}

export interface EditionListingsGenqlSelection{
    size?: boolean | number
    data?: EditionListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionListingsFiltersGenqlSelection{
    bySets?: boolean | number
    byPlayers?: boolean | number
    byTeams?: boolean | number
    byPrimaryPlayerPosition?: boolean | number
    byPrice?: PriceRangeFilterGenqlSelection
    bySerialNumber?: IntegerRangeFilterGenqlSelection
    byPower?: IntegerRangeFilterGenqlSelection
    byGameDate?: DateRangeFilterGenqlSelection
    byCreatedAt?: DateRangeFilterGenqlSelection
    byPlayerGameScores?: PlayerGameScoresFiltersGenqlSelection
    byPlayTagIDs?: boolean | number
    bySetPlayTagIDs?: boolean | number
    bySetVisuals?: boolean | number
    byMomentTiers?: boolean | number
    byPlayIDs?: boolean | number
    bySeries?: boolean | number
    byPlayCategory?: boolean | number
    byActiveChallenge?: boolean | number
    byLeagues?: boolean | number
    byEditions?: EditionsFilterGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionSlotGenqlSelection{
    edition?: EditionGenqlSelection
    filledMomentIDs?: boolean | number
    lockedMomentIDs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionsGenqlSelection{
    size?: boolean | number
    data?: EditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionsFilterGenqlSelection{
    setID?: boolean | number
    playID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EditionsFilterInput {setID: Scalars['ID'],playID: Scalars['ID']}

export interface ElasticsearchResponseGenqlSelection{
    took?: boolean | number
    timedOut?: boolean | number
    hits?: ElasticsearchResponseHitsGenqlSelection
    aggregations?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ElasticsearchResponseHitsGenqlSelection{
    total?: ElasticsearchResponseHitsTotalGenqlSelection
    maxScore?: boolean | number
    hits?: ElasticsearchResponseHitsHitsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ElasticsearchResponseHitsHitsGenqlSelection{
    index?: boolean | number
    id?: boolean | number
    score?: boolean | number
    source?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ElasticsearchResponseHitsTotalGenqlSelection{
    value?: boolean | number
    relation?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExchangeRateGenqlSelection{
    from?: boolean | number
    to?: boolean | number
    rate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExchangeRateInput {from: ExchangeRateCurrency,to: ExchangeRateCurrency}

export interface ExchangeRefreshTokenInput {refreshToken: Scalars['String']}

export interface ExchangeRefreshTokenResponseGenqlSelection{
    idToken?: boolean | number
    newRefreshToken?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExpressionGenqlSelection{
    feature?: boolean | number
    value?: boolean | number
    comparator?: boolean | number
    result?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExpressionInput {feature: MaxOrderQuantityFeature,value: Scalars['Int'],comparator: Scalars['String'],result: Scalars['Int']}

export interface FirstPurchaseReferralGenqlSelection{
    packOrder?: PackPurchaseOrderGenqlSelection
    p2pOrder?: P2PPurchaseOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetActiveChallengesResponseGenqlSelection{
    challenges?: UserChallengeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetActiveUserSubmissionsByMomentIDsInput {momentIDs?: (Scalars['ID'][] | null),ignoreSubmissionID?: (Scalars['ID'] | null),variableChallengeCategories?: (VariableChallengeCategory[] | null),submissionStatuses?: (VariableChallengeSubmissionStatus[] | null),slotTypes?: (VariableChallengeSlotType[] | null)}

export interface GetActiveUserSubmissionsByMomentIDsResponseGenqlSelection{
    momentsUsageData?: MomentUsageDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetActivityResponseGenqlSelection{
    data?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetChallengeByIDInput {challengeID: Scalars['ID'],userID?: (Scalars['ID'] | null)}

export interface GetCodexInput {userID?: (Scalars['ID'] | null),filters?: (CodexFiltersInput | null)}

export interface GetCodexResponseGenqlSelection{
    codex?: CodexSetGenqlSelection
    totalUserOwnedMoments?: boolean | number
    numSetsInProgress?: boolean | number
    numSetsCompleted?: boolean | number
    totalUniqueEditionsOwned?: boolean | number
    filters?: CodexFiltersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetCodexSetInput {setID: Scalars['ID'],userID?: (Scalars['ID'] | null)}

export interface GetCodexSetResponseGenqlSelection{
    codexSetWithEditions?: CodexSetWithEditionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetCollectorScoreRequest {dapperID: Scalars['String'],bonusGroups?: ((CollectorScoreRequestBonusGroup | null)[] | null),incrementByMoment?: (Scalars['String'] | null),incrementSinceDate?: (Scalars['Time'] | null),incrementByTeam?: (Scalars['String'] | null),decrementByMoment?: (Scalars['String'] | null),decrementByMoments?: ((Scalars['String'] | null)[] | null)}

export interface GetDropEligibilityInput {packListingId: Scalars['ID']}

export interface GetDropEligibilityResponseGenqlSelection{
    normal?: boolean | number
    rare?: boolean | number
    legendary?: boolean | number
    totalSpend?: boolean | number
    eligible?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetEditionInput {setID: Scalars['ID'],playID: Scalars['ID']}

export interface GetEditionListingInput {setID: Scalars['ID'],playID: Scalars['ID'],userID?: (Scalars['ID'] | null),parallelID?: (Scalars['Int'] | null)}

export interface GetEditionListingResponseGenqlSelection{
    data?: EditionListingGenqlSelection
    lowestAskMoment?: MintedMomentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetEditionResponseGenqlSelection{
    edition?: EditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetEditionsWatcherCountInput {editions: WatchedEditionInput[]}

export interface GetEditionsWatcherCountResponseGenqlSelection{
    editions?: WatchedEditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetExchangeRatesInput {currencies?: (ExchangeRateInput[] | null)}

export interface GetExchangeRatesResponseGenqlSelection{
    exchangeRates?: ExchangeRateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetGiftedMomentURLInput {momentID: Scalars['String'],transferID: Scalars['String']}

export interface GetGiftedMomentURLResponseGenqlSelection{
    gifterID?: boolean | number
    momentID?: boolean | number
    redemptionUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetHotEditionListingsInput {userID?: (Scalars['ID'] | null)}

export interface GetHotEditionListingsResponseGenqlSelection{
    listings?: EditionListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetKYCStatusInput {minFresh?: (Scalars['String'] | null)}

export interface GetKYCStatusResponseGenqlSelection{
    kycStatus?: boolean | number
    kycType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetLeaderboardEntryInput {kind: LeaderboardKind,id: Scalars['String'],flowAddress: Scalars['String']}

export interface GetLeaderboardEntryRelationshipInput {kind: LeaderboardKind,flowAddress: Scalars['String']}

export interface GetLeaderboardEntryRelationshipResponseGenqlSelection{
    relationships?: LeaderboardEntryRelationshipGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetLeaderboardEntryResponseGenqlSelection{
    entry?: LeaderboardEntryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetLeaderboardInput {kind: LeaderboardKind,id: Scalars['String'],sortBy: LeaderboardSortType,pagination: PaginationInput}

export interface GetLeaderboardPotentialInput {flowAddress: Scalars['String'],momentIds: Scalars['String'][]}

export interface GetLeaderboardPotentialResponseGenqlSelection{
    playerLeaderboards?: LeaderboardPotentialGenqlSelection
    teamLeaderboards?: LeaderboardPotentialGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetLeaderboardResponseGenqlSelection{
    leaderboard?: LeaderboardGenqlSelection
    pagination?: PaginationGenqlSelection
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMarketplaceTransactionEditionStatsInput {edition: EditionsFilterInput,serialNumber?: (Scalars['Int'] | null)}

export interface GetMarketplaceTransactionEditionStatsResponseGenqlSelection{
    editionStats?: MarketplaceTransactionEditionStatsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMintedMomentProgressForQuestResponseGenqlSelection{
    id?: boolean | number
    current?: boolean | number
    total?: boolean | number
    complete?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMintedMomentsInput {momentIds: Scalars['ID'][]}

export interface GetMintedMomentsResponseGenqlSelection{
    data?: MintedMomentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMomentGroupInput {momentGroupSlug: Scalars['String']}

export interface GetMomentGroupResponseGenqlSelection{
    momentGroup?: MomentGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMomentTradeInRequestInput {id: Scalars['String']}

export interface GetMomentTradeInRequestResponseGenqlSelection{
    tradeInRequest?: MomentTradeInRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMomentTransferRequestInput {ID: Scalars['String']}

export interface GetMomentTransferRequestResponseGenqlSelection{
    data?: MomentTransferRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMomentsTradeInRequestInput {id: Scalars['String']}

export interface GetMomentsTradeInRequestResponseGenqlSelection{
    tradeInRequest?: MomentsTradeInRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMomentsWithHighestBurnedTopshotScoreResponseGenqlSelection{
    moments?: UserBurnedMomentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMyActiveChallengesResponseGenqlSelection{
    challenges?: UserChallengeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMyCompletedChallengesResponseGenqlSelection{
    completedUserChallenges?: CompletedUserChallengeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMyProfileResponseGenqlSelection{
    publicInfo?: UserPublicInfoGenqlSelection
    email?: boolean | number
    segmentId?: boolean | number
    /** @deprecated use SearchMintedMoments filter byOwnerDapperID */
    moments?: MintedMomentGenqlSelection
    momentCount?: boolean | number
    referredByUserID?: boolean | number
    tradeTicketCount?: boolean | number
    marketingCampaign?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMyReferralResponseGenqlSelection{
    referredByUser?: UserGenqlSelection
    firstPurchase?: FirstPurchaseReferralGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetMyShowcasesResponseGenqlSelection{
    showcases?: ShowcaseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetOfferInput {
/** id is an optional input field to retrieve specific offer by offer id. */
id?: (Scalars['Int'] | null),
/** offerAvailableTxHash is an optional input field to retrieve specific offer by offer available TxHash. */
offerAvailableTxHash?: (Scalars['String'] | null),
/** offerCompletedTxHash is an optional input field to retrieve specific offer by offer completed TxHash. */
offerCompletedTxHash?: (Scalars['String'] | null)}

export interface GetOnChainPackInput {packID: Scalars['String']}

export interface GetOnChainPackResponseGenqlSelection{
    onChainPack?: OnChainPackGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetOrderResponseGenqlSelection{
    order?: OrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetPackListingEligibilityV2Input {packListingId: Scalars['ID']}

export interface GetPackListingEligibilityV2ResponseGenqlSelection{
    packListingId?: boolean | number
    listingEligibility?: ListingEligibilityGenqlSelection
    levelEligibility?: LevelEligibilityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetPackListingInput {packListingId: Scalars['ID']}

export interface GetPackListingResponseGenqlSelection{
    data?: PackListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetPackSummaryBallerStatusInput {userID: Scalars['ID']}


/**
 * Optional withPacks input specifies that this call should provide
 * progress which includes the contents of the passed Packs.
 */
export interface GetPackSummaryProgressInput {userID: Scalars['ID'],withPacks?: (Scalars['ID'][] | null)}

export interface GetPackSummaryProgressResponseGenqlSelection{
    /** Returns progress towards all active challenges */
    challengesProgress?: ChallengesProgressGenqlSelection
    /** Returns progress towards all existing sets */
    setsProgress?: SetsProgressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetPacklistingEligibilityDetailsInput {packListingId: Scalars['ID']}

export interface GetPacksInput {packIDs: Scalars['String'][]}

export interface GetPacksResponseGenqlSelection{
    packs?: PacksGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetPinnedMomentsRequest {dapperID: Scalars['String']}

export interface GetPinnedMomentsResponseGenqlSelection{
    moments?: MintedMomentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetPlayInput {playID: Scalars['ID']}

export interface GetPlayResponseGenqlSelection{
    play?: PlayGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetPlayerDataWithCurrentStatsInput {nbaPlayerID: Scalars['ID']}

export interface GetPlayerDataWithCurrentStatsResponseGenqlSelection{
    playerData?: PlayerDataGenqlSelection
    playerSeasonAverageScores?: StatsPlayerSeasonAverageScoresGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetSetInput {setID: Scalars['ID']}

export interface GetSetResponseGenqlSelection{
    set?: SetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetSoftCurrencyPriceResponseGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetSpecialNFTResponseGenqlSelection{
    nft?: SpecialNFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetSpecialNFTsResponseGenqlSelection{
    nfts?: SpecialNFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTagsInput {byTagLevel?: ((TagLevel | null)[] | null)}

export interface GetTagsResponseGenqlSelection{
    tags?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTeamSeriesCompletionProgressResponseGenqlSelection{
    seriesProgress?: TeamSeriesCompletionProgressGenqlSelection
    contemporaryProgress?: TeamCompletionProgressGenqlSelection
    allProgress?: TeamCompletionProgressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTickerDataResponseGenqlSelection{
    uniquePurchaseCount?: boolean | number
    uniqueBuyerCount?: boolean | number
    totalVolume?: boolean | number
    biggestSales?: SaleDtoGenqlSelection
    mostPurchasedPlayer?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTitlesResponseGenqlSelection{
    titles?: TitleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTopNBurnedEditionsResponseGenqlSelection{
    editions?: BurnedEditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTopshotScoreAllTeamsSeriesCompletionProgressRequest {dapperID: Scalars['ID']}

export interface GetTopshotScoreAllTeamsSeriesCompletionProgressResponseGenqlSelection{
    teamSeriesCompletionProgress?: TeamSeriesCompletionProgressBucketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTopshotScoreRequest {dapperID: Scalars['ID'],filters?: (TopshotScoreFilters | null),bonusGroups?: (TopshotScoreRequestBonusGroup[] | null)}

export interface GetTopshotScoreTeamSeriesCompletionRequest {dapperID: Scalars['ID'],teamID: Scalars['ID']}

export interface GetTotalBurnedMomentCountByRarityResponseGenqlSelection{
    counts?: TotalBurnedMomentCountByRarityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTotalBurnedMomentCountResponseGenqlSelection{
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTotalBurnedMomentsResponseGenqlSelection{
    /** The total number of burned moments. */
    totalBurnedMoments?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetTransferEligibilityInput {momentFlowID: Scalars['String']}

export interface GetTransferEligibilityResponseGenqlSelection{
    accountFirstPurchaseAge?: NumericTransferRequirementGenqlSelection
    accountMomentCount?: NumericTransferRequirementGenqlSelection
    momentAge?: NumericTransferRequirementGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserBallerStatusRequest {dapperID: Scalars['String']}

export interface GetUserCodexInput {userID: Scalars['ID']}

export interface GetUserCodexResponseGenqlSelection{
    codex?: CodexSetGenqlSelection
    totalUserOwnedMoments?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserCoolDownsResponseGenqlSelection{
    p2pPurchaseRemainingSeconds?: boolean | number
    p2pListingRemainingSeconds?: boolean | number
    p2pDelistingRemainingSeconds?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserEligibilityForJoiningPackListingQueueInput {dapperID: Scalars['ID'],packListingID: Scalars['ID']}

export interface GetUserEligibilityForJoiningPackListingQueueResponseGenqlSelection{
    isEligibleToJoin?: boolean | number
    ineligibilityReason?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserMomentListingsInput {setID: Scalars['ID'],playID: Scalars['ID']}

export interface GetUserOrdersResponseGenqlSelection{
    orders?: OrdersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserOwnedSpecialNFTsInput {flowAddress: Scalars['String'],type?: (SpecialNFTType | null)}

export interface GetUserOwnedSpecialNFTsResponseGenqlSelection{
    nfts?: SpecialNFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserP2PListingOrderInput {orderID: Scalars['String']}

export interface GetUserP2PListingOrderResponseGenqlSelection{
    data?: P2PListingOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserP2PListingOrdersResponseGenqlSelection{
    data?: P2PListingOrdersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserP2PPurchaseOrderInput {orderID: Scalars['String']}

export interface GetUserP2PPurchaseOrderResponseGenqlSelection{
    data?: P2PPurchaseOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserP2PPurchaseOrdersResponseGenqlSelection{
    data?: P2PPurchaseOrdersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserPackOrderByDapperIdInput {orderId: Scalars['String'],dapperId: Scalars['String']}

export interface GetUserPackOrderInput {orderId: Scalars['String']}

export interface GetUserPackOrderResponseGenqlSelection{
    data?: PackPurchaseOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserPackOrdersResponseGenqlSelection{
    data?: PackPurchaseOrdersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserPendingTxStatesResponseGenqlSelection{
    hasPendingPackOpenRequests?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserProfileInput {dapperID?: (Scalars['ID'] | null),flowAddress?: (Scalars['String'] | null)}

export interface GetUserProfileResponseGenqlSelection{
    publicInfo?: UserPublicInfoGenqlSelection
    /** @deprecated use SearchMintedMoments filter byOwnerDapperID */
    moments?: MintedMomentGenqlSelection
    momentCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserPurchaseStatsResponseGenqlSelection{
    packsPurchased?: boolean | number
    starterPacksPurchased?: boolean | number
    boosterPacksPurchased?: boolean | number
    momentsPurchased?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserScoresForAllStarsBurningLeaderboardResponseGenqlSelection{
    users?: UserBurnedTopshotScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserScoresForRisingStarsLockingLeaderboardResponseGenqlSelection{
    users?: UserBurnedTopshotScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserSettingsResponseGenqlSelection{
    userSettings?: UserSettingsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserShowcasesInput {userID: Scalars['ID']}

export interface GetUserShowcasesResponseGenqlSelection{
    showcases?: ShowcaseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserStatsByLocationInput {country?: (Scalars['String'] | null),city?: (Scalars['String'] | null)}

export interface GetUserStatsByLocationResponseGenqlSelection{
    data?: LocationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserTitlesRequest {dapperID?: (Scalars['ID'] | null),titleID?: (Scalars['ID'] | null),categoryID?: (Scalars['ID'] | null),limit?: (Scalars['Int'] | null),isSelected?: (Scalars['Boolean'] | null),isUnseen?: (Scalars['Boolean'] | null)}

export interface GetUserTitlesResponseGenqlSelection{
    userTitles?: UserTitleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUserTopshotTagsRequest {dapperID: Scalars['String']}

export interface GetUserTopshotTagsResponseGenqlSelection{
    tags?: UserTopshotTagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUsersWatchlistsResponseGenqlSelection{
    size?: boolean | number
    data?: WatchlistGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUsersWithHighestBurnedTopshotScoreResponseGenqlSelection{
    users?: UserBurnedTopshotScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUsersWithHighestNumberOfBurnedMomentsResponseGenqlSelection{
    users?: UserBurnedMomentStatsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetVendorMomentListingInput {setID: Scalars['ID'],playID: Scalars['ID']}

export interface GetVendorMomentListingResponseGenqlSelection{
    data?: VendorMomentListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsAdditionalMetadataGenqlSelection{
    image?: boolean | number
    preview?: boolean | number
    creatorName?: boolean | number
    externalUrl?: boolean | number
    ipfsImageHash?: boolean | number
    sha256ImageHash?: boolean | number
    ipfsMetadataHashes?: boolean | number
    teamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsBadgeGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    assetUri?: boolean | number
    badgeToListingAssignment?: GiglabsBadgeToListingAssignmentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsBadgeToListingAssignmentGenqlSelection{
    index?: boolean | number
    createdDate?: boolean | number
    updatedDate?: boolean | number
    listingId?: boolean | number
    badgeId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsBidGenqlSelection{
    id?: boolean | number
    walletID?: boolean | number
    price?: boolean | number
    createdDate?: boolean | number
    listingID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsListingBidsInput {id: Scalars['Int'],limit?: (Scalars['Int'] | null)}

export interface GiglabsListingBidsResponseGenqlSelection{
    bids?: GiglabsBidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsMarketPlaceListingResponseGenqlSelection{
    id?: boolean | number
    uuid?: boolean | number
    orgID?: boolean | number
    seriesID?: boolean | number
    setName?: boolean | number
    setIndex?: boolean | number
    listingType?: boolean | number
    status?: boolean | number
    active?: boolean | number
    featured?: boolean | number
    banner?: boolean | number
    description?: boolean | number
    tags?: boolean | number
    assetUri?: boolean | number
    assetPreviewUri?: boolean | number
    assetStorageUri?: boolean | number
    assetPreviewStorageUri?: boolean | number
    assetFileType?: boolean | number
    additionalImages?: boolean | number
    price?: boolean | number
    reservePrice?: boolean | number
    maxBid?: boolean | number
    maxBidWalletID?: boolean | number
    nextBid?: boolean | number
    mintQuantity?: boolean | number
    hasUnlockableContent?: boolean | number
    unlockableContentDesc?: boolean | number
    publishDate?: boolean | number
    saleStartDate?: boolean | number
    saleEndDate?: boolean | number
    requires?: boolean | number
    requiresOperator?: boolean | number
    modifiers?: boolean | number
    modifierType?: boolean | number
    modifierAmount?: boolean | number
    shippingAddressRequired?: boolean | number
    createdDate?: boolean | number
    updatedDate?: boolean | number
    purchaseLimit?: boolean | number
    reserveMet?: boolean | number
    additionalMetadata?: GiglabsAdditionalMetadataGenqlSelection
    badges?: GiglabsBadgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsMarketPlaceListingsResponseGenqlSelection{
    records?: GiglabsMarketPlaceListingResponseGenqlSelection
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiglabsMarketplaceListingsInput {listingType: GiglabsListingType,seriesID?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),offset?: (Scalars['Int'] | null),search: Scalars['String'],order?: (Scalars['String'] | null)}

export interface GroupMomentOrderGenqlSelection{
    id?: boolean | number
    momentGroupID?: boolean | number
    momentID?: boolean | number
    order?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HasBallerStatusProcessedPackFulfillmentsInput {packIDs: Scalars['ID'][]}

export interface HasUnreadActivitiesInput {byActivityType?: (ActivityType[] | null)}

export interface HasUnreadActivitiesResponseGenqlSelection{
    hasUnreadActivities?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HideOffersInput {offerIDs?: (Scalars['Int'][] | null)}

export interface HideOffersResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface InsufficientMomentsErrorGenqlSelection{
    remainingMomentCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegerRangeFilterGenqlSelection{
    min?: boolean | number
    max?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegerRangeFilterInput {min?: (Scalars['Int'] | null),max?: (Scalars['Int'] | null)}

export interface JoinDropSquadInput {dropSquadID: Scalars['ID'],packListingID: Scalars['ID']}

export interface JoinDropSquadResponseGenqlSelection{
    dropSquadID?: boolean | number
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface KYCCachedGenqlSelection{
    kycStatus?: boolean | number
    kycType?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardGenqlSelection{
    id?: boolean | number
    kind?: boolean | number
    entries?: LeaderboardEntryGenqlSelection
    on_PlayerLeaderboard?: PlayerLeaderboardGenqlSelection
    on_TeamLeaderboard?: TeamLeaderboardGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardEntryGenqlSelection{
    score?: boolean | number
    rank?: boolean | number
    on_LeaderboardUser?: LeaderboardUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardEntryRelationshipGenqlSelection{
    leaderboardID?: boolean | number
    score?: boolean | number
    rank?: boolean | number
    entryCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardPotentialGenqlSelection{
    kind?: boolean | number
    id?: boolean | number
    scoreAdded?: boolean | number
    scoreAddedFromBonus?: boolean | number
    scoreTotal?: boolean | number
    rank?: boolean | number
    totalUsers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardUserGenqlSelection{
    flowAddress?: boolean | number
    score?: boolean | number
    rank?: boolean | number
    username?: boolean | number
    profileImageURL?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaveDropSquadInput {dropSquadID: Scalars['ID']}

export interface LeaveDropSquadResponseGenqlSelection{
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    waitingRoom?: WaitingRoomGenqlSelection
    requirements?: RequirementGenqlSelection
    bonuses?: BonusGenqlSelection
    maxOrderQuantity?: MaxOrderQuantityV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LevelEligibilityGenqlSelection{
    isEligible?: boolean | number
    levelName?: boolean | number
    levelID?: boolean | number
    requirements?: RequirementGenqlSelection
    maxOrderQuantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ListingEligibilityGenqlSelection{
    isEligible?: boolean | number
    requirements?: RequirementGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LocationGenqlSelection{
    country?: boolean | number
    city?: boolean | number
    collectorsCount?: boolean | number
    totalMomentsOwned?: boolean | number
    totalTopshotScore?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarkActivitiesAsReadInput {activityIDs: Scalars['ID'][]}

export interface MarkActivitiesAsReadResponseGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarkAllActivitiesAsReadInput {activitiesBefore: Scalars['Time']}

export interface MarkAllActivitiesAsReadResponseGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarkAllUserTitlesAsSeenResponseGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketplaceTransactionGenqlSelection{
    id?: boolean | number
    version?: boolean | number
    sortID?: boolean | number
    seller?: UserPublicInfoGenqlSelection
    buyer?: UserPublicInfoGenqlSelection
    price?: boolean | number
    moment?: MintedMomentGenqlSelection
    txHash?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketplaceTransactionEditionStatsGenqlSelection{
    totalSales?: boolean | number
    mostRecentEditionSale?: MostRecentEditionSaleGenqlSelection
    averageSalePrice?: boolean | number
    averageSalePriceInSerialNumRange?: boolean | number
    highestSalePrice?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketplaceTransactionFiltersGenqlSelection{
    byEditions?: EditionsFilterGenqlSelection
    byMoments?: boolean | number
    byTeams?: boolean | number
    byPrice?: PriceRangeFilterGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketplaceTransactionFiltersInput {byEditions?: ((EditionsFilterInput | null)[] | null),byMoments?: (Scalars['ID'][] | null),byTeams?: (Scalars['ID'][] | null),byPrice?: (PriceRangeFilterInput | null),byParallels?: (Scalars['Int'][] | null)}

export interface MarketplaceTransactionSearchSummaryGenqlSelection{
    filters?: MarketplaceTransactionFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketplaceTransactionSearchSummaryResponseGenqlSelection{
    data?: MarketplaceTransactionSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketplaceTransactionsGenqlSelection{
    size?: boolean | number
    data?: MarketplaceTransactionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MaxOrderQuantityV2GenqlSelection{
    operator?: boolean | number
    expressions?: ExpressionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MaxOrderQuantityV2Input {operator: MaxOrderQuantityOperator,expressions?: (ExpressionInput[] | null)}

export interface MeGenqlSelection{
    dapperID?: boolean | number
    flowAddress?: boolean | number
    username?: boolean | number
    favoriteTeamID?: boolean | number
    country?: boolean | number
    city?: boolean | number
    shop?: ShopGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MintedMomentGenqlSelection{
    id?: boolean | number
    version?: boolean | number
    sortID?: boolean | number
    set?: SetGenqlSelection
    play?: PlayGenqlSelection
    flowId?: boolean | number
    flowSerialNumber?: boolean | number
    price?: boolean | number
    forSale?: boolean | number
    listingOrderID?: boolean | number
    userListingID?: boolean | number
    /** @deprecated use ownerV2 instead, which supports non-custodial users */
    owner?: UserGenqlSelection
    ownerV2?: MomentOwnerGenqlSelection
    assetPathPrefix?: boolean | number
    setPlay?: MintedSetPlayGenqlSelection
    createdAt?: boolean | number
    acquiredAt?: boolean | number
    destroyedAt?: boolean | number
    packListingID?: boolean | number
    tags?: TagGenqlSelection
    groupMomentOrder?: GroupMomentOrderGenqlSelection
    momentGroups?: MomentGroupGenqlSelection
    topshotScore?: MomentTopshotScoreGenqlSelection
    lastPurchasePrice?: boolean | number
    tier?: boolean | number
    lockExpiryAt?: boolean | number
    isLocked?: boolean | number
    parallelID?: boolean | number
    parallelSetPlay?: MintedSetPlayParallelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MintedMomentFilterInput {byOwnerDapperID?: ((Scalars['String'] | null)[] | null),bySets?: ((Scalars['ID'] | null)[] | null),bySeries?: ((Scalars['ID'] | null)[] | null),byPlays?: ((Scalars['ID'] | null)[] | null),byPlayers?: ((Scalars['ID'] | null)[] | null),byTeams?: ((Scalars['ID'] | null)[] | null),bySetVisuals?: ((VisualIdType | null)[] | null),byMomentTiers?: ((MomentTier | null)[] | null),byForSale?: (ForSaleFilter | null),byPlayTagIDs?: ((Scalars['ID'] | null)[] | null),bySetPlayTagIDs?: ((Scalars['ID'] | null)[] | null),byMomentTagIDs?: ((Scalars['ID'] | null)[] | null),byPlayCategory?: ((Scalars['ID'] | null)[] | null),byPrimaryPlayerPosition?: ((PlayerPosition | null)[] | null),byGameDate?: (DateRangeFilterInput | null),byCreatedAt?: (DateRangeFilterInput | null),byPlayerGameScores?: (PlayerGameScoresFiltersInput | null),byPrice?: (PriceRangeFilterInput | null),byActiveChallenge?: ((Scalars['ID'] | null)[] | null),byLeagues?: ((League | null)[] | null),byOwnerFlowAddress?: ((Scalars['String'] | null)[] | null),byEditions?: ((EditionsFilterInput | null)[] | null),byGroupID?: (Scalars['ID'] | null),byGroupSlug?: (Scalars['String'] | null),byPotentialTopshotScore?: (Scalars['Boolean'] | null),byLockStatus?: (LockStatusFilter | null),byFlowID?: ((Scalars['ID'] | null)[] | null),bySubeditionID?: (Scalars['Int'][] | null)}

export interface MintedMomentFiltersGenqlSelection{
    byOwnerDapperID?: boolean | number
    bySets?: boolean | number
    bySeries?: boolean | number
    byPlays?: boolean | number
    byPlayers?: boolean | number
    byTeams?: boolean | number
    bySetVisuals?: boolean | number
    byMomentTiers?: boolean | number
    byForSale?: boolean | number
    byPlayTagIDs?: boolean | number
    bySetPlayTagIDs?: boolean | number
    byMomentTagIDs?: boolean | number
    byPlayCategory?: boolean | number
    byPrimaryPlayerPosition?: boolean | number
    byGameDate?: DateRangeFilterGenqlSelection
    byCreatedAt?: DateRangeFilterGenqlSelection
    byPlayerGameScores?: PlayerGameScoresFiltersGenqlSelection
    byPrice?: PriceRangeFilterGenqlSelection
    byActiveChallenge?: boolean | number
    byLeagues?: boolean | number
    byOwnerFlowAddress?: boolean | number
    byEditions?: EditionsFilterGenqlSelection
    byGroupID?: boolean | number
    byGroupSlug?: boolean | number
    byPotentialTopshotScore?: boolean | number
    byLockStatus?: boolean | number
    byFlowID?: boolean | number
    bySubeditionID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MintedMomentResponseGenqlSelection{
    data?: MintedMomentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MintedMomentSearchSummaryGenqlSelection{
    filters?: MintedMomentFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MintedMomentsGenqlSelection{
    size?: boolean | number
    data?: MintedMomentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MintedSetPlayGenqlSelection{
    ID?: boolean | number
    setID?: boolean | number
    playID?: boolean | number
    flowRetired?: boolean | number
    /** @deprecated use values in SetPlayCirculation  */
    circulationCount?: boolean | number
    tags?: TagGenqlSelection
    circulations?: SetPlayCirculationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MintedSetPlayParallelGenqlSelection{
    setID?: boolean | number
    playID?: boolean | number
    parallelID?: boolean | number
    circulations?: SetPlayCirculationsGenqlSelection
    iconAssetURL?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentAgeErrorGenqlSelection{
    momentAgeMinutesLeft?: boolean | number
    momentAgeSecondsLeft?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentCountPerTeamGenqlSelection{
    teamID?: boolean | number
    momentCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentGroupGenqlSelection{
    sortID?: boolean | number
    version?: boolean | number
    id?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    order?: boolean | number
    MomentsTotal?: boolean | number
    Commons?: boolean | number
    Rares?: boolean | number
    Legendaries?: boolean | number
    Fandoms?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    groupMomentOrders?: GroupMomentOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentGroupsGenqlSelection{
    size?: boolean | number
    data?: MomentGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentListingGenqlSelection{
    /** The listing id is the unique combination of editionID and listingType */
    id?: boolean | number
    version?: boolean | number
    sortID?: boolean | number
    set?: SetGenqlSelection
    play?: PlayGenqlSelection
    assetPathPrefix?: boolean | number
    /**
     * @deprecated use circulationCount field found inside mintedSetPlay instead
     * The number of minted moments for this set/play.
     */
    circulationCount?: boolean | number
    /**
     * @deprecated use flowRetired field found inside mintedSetPlay instead
     * flowRetired indicates whether the set/play has been retired
     */
    flowRetired?: boolean | number
    listingType?: boolean | number
    /**
     * For user listings: The price range for all the moments available for sale for this set/play
     * For vendor listings: The price range min/max will be the same
     */
    priceRange?: PriceRangeGenqlSelection
    /** Tags are not implemented */
    tags?: TagGenqlSelection
    /** Vendor listing field: whether the listing is available for sale */
    forSale?: boolean | number
    /** Vendor listing field: an admin input value, the previous price for sale display */
    vendorPreviousPrice?: boolean | number
    /** Vendor listing field: the vendor moment listing id, used for direct purchase */
    vendorListingID?: boolean | number
    /** Count of moments avalible for sale (listings) */
    momentListingCount?: boolean | number
    limit?: boolean | number
    /**
     * @deprecated renamed to setPlay for consistency, this field is left empty
     * TODO: delete once FE migrated the fixtures: https://github.com/dapperlabs/nba-api/pull/3768/files#r578669841
     */
    mintedSetPlay?: MintedSetPlayGenqlSelection
    /** setPlay contains setPlay data including tags, circulation count and a retired flag */
    setPlay?: MintedSetPlayGenqlSelection
    /**
     * @deprecated use getUserMomentListings or MomentListingCount
     * momentListings are the moments put up for sale by users for this edition
     */
    momentListings?: UserMomentListingGenqlSelection
    watchedCount?: boolean | number
    isWatched?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentListingFilterInput {bySets?: ((Scalars['ID'] | null)[] | null),byPlayers?: ((Scalars['ID'] | null)[] | null),byTeams?: ((Scalars['ID'] | null)[] | null),byPrimaryPlayerPosition?: ((PlayerPosition | null)[] | null),byPrice?: (PriceRangeFilterInput | null),bySerialNumber?: (IntegerRangeFilterInput | null),byPower?: (IntegerRangeFilterInput | null),byGameDate?: (DateRangeFilterInput | null),byCreatedAt?: (DateRangeFilterInput | null),byPlayerGameScores?: (PlayerGameScoresFiltersInput | null),byListingType?: ((MomentListingType | null)[] | null),bySetVisuals?: ((VisualIdType | null)[] | null),byMomentTiers?: ((MomentTier | null)[] | null),byPlayIDs?: ((Scalars['ID'] | null)[] | null),bySeries?: ((Scalars['ID'] | null)[] | null),byPlayTagIDs?: ((Scalars['ID'] | null)[] | null),bySetPlayTagIDs?: ((Scalars['ID'] | null)[] | null),byPlayCategory?: ((Scalars['ID'] | null)[] | null),
/** Tags are not implemented. */
byTagNames?: ((Scalars['String'] | null)[] | null),byParallelIDs?: ((Scalars['Int'] | null)[] | null)}

export interface MomentListingFiltersGenqlSelection{
    bySets?: boolean | number
    byPlayers?: boolean | number
    byTeams?: boolean | number
    byPrimaryPlayerPosition?: boolean | number
    byPrice?: PriceRangeFilterGenqlSelection
    bySerialNumber?: IntegerRangeFilterGenqlSelection
    byPower?: IntegerRangeFilterGenqlSelection
    byGameDate?: DateRangeFilterGenqlSelection
    byCreatedAt?: DateRangeFilterGenqlSelection
    byPlayerGameScores?: PlayerGameScoresFiltersGenqlSelection
    byListingType?: boolean | number
    /** @deprecated will be deleted in favour of TagIDs fields */
    byTagNames?: boolean | number
    byPlayTagIDs?: boolean | number
    bySetPlayTagIDs?: boolean | number
    bySetVisuals?: boolean | number
    byMomentTiers?: boolean | number
    byPlayIDs?: boolean | number
    bySeries?: boolean | number
    byPlayCategory?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentListingsGenqlSelection{
    size?: boolean | number
    data?: MomentListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentListingsSearchSummaryGenqlSelection{
    filters?: MomentListingFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentListingsSearchSummaryResponseGenqlSelection{
    data?: MomentListingsSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentMediaURIResponseGenqlSelection{
    path?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentMetaInput {momentTitle: Scalars['String'],momentDescription?: (Scalars['String'] | null),momentImageURL: Scalars['String']}

export interface MomentOwnerGenqlSelection{
    on_User?:UserGenqlSelection,
    on_NonCustodialUser?:NonCustodialUserGenqlSelection,
    on_Sortable?: SortableGenqlSelection,
    __typename?: boolean | number
}

export interface MomentSaleCSImpactDataGenqlSelection{
    ownedTeamEditionsCount?: boolean | number
    totalTeamEditionsCount?: boolean | number
    willLoseChallengeReward?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentTopshotScoreGenqlSelection{
    score?: boolean | number
    derivedVia?: boolean | number
    calculatedAt?: boolean | number
    averageSalePrice?: boolean | number
    purchasePrice?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentTradeInRequestGenqlSelection{
    id?: boolean | number
    senderDapperID?: boolean | number
    status?: boolean | number
    state?: boolean | number
    momentID?: boolean | number
    version?: boolean | number
    invocationIntentID?: boolean | number
    redirectURL?: boolean | number
    momentImage?: boolean | number
    momentTitle?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    moment?: MintedMomentGenqlSelection
    txHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentTradeInRequestActivityGenqlSelection{
    tradeIn?: MomentTradeInRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentTransferReceivedActivityGenqlSelection{
    transfer?: MomentTransferRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentTransferRequestGenqlSelection{
    id?: boolean | number
    senderDapperID?: boolean | number
    receiverDapperID?: boolean | number
    status?: boolean | number
    state?: boolean | number
    momentID?: boolean | number
    version?: boolean | number
    invocationIntentID?: boolean | number
    redirectURL?: boolean | number
    momentImage?: boolean | number
    momentTitle?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    moment?: MintedMomentGenqlSelection
    txHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentTransferRequestActivityGenqlSelection{
    transfer?: MomentTransferRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentUsageDataGenqlSelection{
    momentID?: boolean | number
    challengeID?: boolean | number
    variableChallengeCategory?: boolean | number
    submissionID?: boolean | number
    userSubmissionStatus?: boolean | number
    slotType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentsFromPackGenqlSelection{
    packID?: boolean | number
    momentIDs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentsTradeInRequestGenqlSelection{
    id?: boolean | number
    senderDapperID?: boolean | number
    status?: boolean | number
    state?: boolean | number
    momentIDs?: boolean | number
    version?: boolean | number
    invocationIntentID?: boolean | number
    redirectURL?: boolean | number
    image?: boolean | number
    title?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    moments?: MintedMomentGenqlSelection
    txHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MomentsTradeInRequestActivityGenqlSelection{
    tradeIn?: MomentsTradeInRequestGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MostRecentEditionSaleGenqlSelection{
    price?: boolean | number
    serialNumber?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    NoOp?: boolean | number
    setSelectedUserTitles?: (SetSelectedUserTitlesResponseGenqlSelection & { __args: {input: SetSelectedUserTitlesInput} })
    markAllUserTitlesAsSeen?: MarkAllUserTitlesAsSeenResponseGenqlSelection
    markActivitiesAsRead?: (MarkActivitiesAsReadResponseGenqlSelection & { __args: {input: MarkActivitiesAsReadInput} })
    markAllActivitiesAsRead?: (MarkAllActivitiesAsReadResponseGenqlSelection & { __args: {input: MarkAllActivitiesAsReadInput} })
    createWatchlist?: (WatchlistResponseGenqlSelection & { __args: {input: CreateWatchlistInput} })
    updateWatchlist?: (WatchlistResponseGenqlSelection & { __args: {input: UpdateWatchlistInput} })
    deleteWatchlist?: (DeleteWatchlistResponseGenqlSelection & { __args: {input: DeleteWatchlistInput} })
    addEditionToWatchlist?: (AddEditionToWatchlistResponseGenqlSelection & { __args: {input: AddEditionToWatchlistInput} })
    removeEditionFromWatchlist?: (RemoveEditionFromWatchlistResponseGenqlSelection & { __args: {input: RemoveEditionFromWatchlistInput} })
    removeAllEditionsFromWatchlist?: (RemoveAllEditionsFromWatchlistResponseGenqlSelection & { __args: {input: RemoveAllEditionsFromWatchlistInput} })
    completeCampaignEvent?: (CompleteCampaignEventResponseGenqlSelection & { __args: {input: CompleteCampaignEventInput} })
    createVariableChallengeSubmission?: (VariableChallengeSubmissionResponseGenqlSelection & { __args: {input: CreateVariableChallengeSubmissionInput} })
    updateVariableChallengeSubmission?: (VariableChallengeSubmissionResponseGenqlSelection & { __args: {input: UpdateVariableChallengeSubmissionInput} })
    purchaseMomentWithSoftCurrency?: (PurchaseMomentWithSoftCurrencyResponseGenqlSelection & { __args: {input: PurchaseMomentWithSoftCurrencyInput} })
    purchaseAssetsWithDapperPayment?: (PurchaseAssetsWithDapperPaymentResponseGenqlSelection & { __args: {input: PurchaseAssetsWithDapperPaymentInput} })
    /** @deprecated Use createMomentTransferRequestV2 */
    createMomentTransferRequest?: (CreateMomentTransferRequestResponseGenqlSelection & { __args: {input: CreateMomentTransferRequestInput} })
    createMomentTransferRequestV2?: (CreateMomentTransferRequestResultGenqlSelection & { __args: {input: CreateMomentTransferRequestInputV2} })
    addMomentsToGroups?: (AddMomentsToGroupsResponseGenqlSelection & { __args: {input: AddMomentsToGroupsInput} })
    removeMomentsFromGroup?: (RemoveMomentsFromGroupResponseGenqlSelection & { __args: {input: RemoveMomentsFromGroupInput} })
    createMomentGroup?: (CreateMomentGroupResponseGenqlSelection & { __args: {input: CreateMomentGroupInput} })
    duplicateMomentGroup?: (DuplicateMomentGroupResponseGenqlSelection & { __args: {input: DuplicateMomentGroupInput} })
    updateMomentGroup?: (UpdateMomentGroupResponseGenqlSelection & { __args: {input: UpdateMomentGroupInput} })
    deleteMomentGroup?: (DeleteMomentGroupResponseGenqlSelection & { __args: {input: DeleteMomentGroupInput} })
    pinMoment?: (PintMomentResponseGenqlSelection & { __args: {input: PinMomentInput} })
    unpinMoment?: (UnpinMomentResponseGenqlSelection & { __args: {input: UnpinMomentInput} })
    /** hideOffers will hide multiple offers by given offer ids. */
    hideOffers?: (HideOffersResponseGenqlSelection & { __args: {input: HideOffersInput} })
    /** unhideOffers will hide multiple offers by given offer ids. */
    unhideOffers?: (UnhideOffersResponseGenqlSelection & { __args: {input: UnhideOffersInput} })
    /** populateOfferByTransaction will search for offer by given transaction id on chain and will populate it in search */
    populateOfferByTransaction?: (PopulateOfferByTransactionResponseGenqlSelection & { __args: {input: PopulateOfferByTransactionInput} })
    createMomentSale?: (CreateMomentSaleResponseGenqlSelection & { __args: {input: CreateMomentSaleInput} })
    cancelMomentSale?: (CancelMomentSaleResponseGenqlSelection & { __args: {input: CancelMomentSaleInput} })
    purchaseP2PMoment?: (PurchaseP2PMomentResponseGenqlSelection & { __args: {input: PurchaseP2PMomentInput} })
    reservePack?: (ReservePackResponseGenqlSelection & { __args: {input: ReservePackInput} })
    cancelReservation?: (CancelReservationResponseGenqlSelection & { __args: {input: CancelReservationInput} })
    transferPacks?: (TransferPacksResponseGenqlSelection & { __args: {input: TransferPacksInput} })
    purchasePack?: (PurchasePackResponseGenqlSelection & { __args: {input: PurchasePackInput} })
    createPackPurchaseIntent?: (CreatePackPurchaseIntentResponseGenqlSelection & { __args: {input: CreatePackPurchaseIntentInput} })
    confirmPackPurchase?: (ConfirmPackPurchaseResponseGenqlSelection & { __args: {input: ConfirmPackPurchaseInput} })
    cancelPurchasePack?: (CancelPurchasePackResponseGenqlSelection & { __args: {input: CancelPurchasePackInput} })
    openPacks?: (OpenPacksResponseGenqlSelection & { __args: {input: OpenPacksInput} })
    openPacksV2?: (OpenPacksV2ResponseGenqlSelection & { __args: {input: OpenPacksV2Input} })
    packNFTHashes?: (PackNFTHashesResponseGenqlSelection & { __args: {input: PackNFTHashesInput} })
    authorizePackNFTsMinting?: (authorizePackNFTsMintingResponseGenqlSelection & { __args: {input: AuthorizePackNFTsMintingInput} })
    purchaseVendorMoment?: (PurchaseVendorMomentResponseGenqlSelection & { __args: {input: PurchaseVendorMomentInput} })
    saveShowcase?: (SaveShowcaseResponseGenqlSelection & { __args: {input: SaveShowcaseInput} })
    deleteShowcase?: (DeleteShowcaseResponseGenqlSelection & { __args: {input: DeleteShowcaseInput} })
    createDropSquad?: (CreateDropSquadResponseGenqlSelection & { __args: {input: CreateDropSquadInput} })
    joinDropSquad?: (JoinDropSquadResponseGenqlSelection & { __args: {input: JoinDropSquadInput} })
    removeFromDropSquad?: (RemoveFromDropSquadResponseGenqlSelection & { __args: {input: RemoveFromDropSquadInput} })
    leaveDropSquad?: (LeaveDropSquadResponseGenqlSelection & { __args: {input: LeaveDropSquadInput} })
    createMomentTradeInRequest?: (CreateMomentTradeInRequestResponseGenqlSelection & { __args: {input: CreateMomentTradeInRequestInput} })
    createBulkMomentTradeInRequest?: (CreateBulkMomentTradeInRequestResponseGenqlSelection & { __args: {input: CreateBulkMomentTradeInRequestInput} })
    submitVoteForPoll?: (SubmitVoteForPollResponseGenqlSelection & { __args: {input: SubmitVoteForPollInput} })
    addUserMarketingCampaign?: (AddUserMarketingCampaignResponseGenqlSelection & { __args: {input: AddUserMarketingCampaignRequest} })
    updateNBAMarketing?: (UpdateNBAMarketingResponseGenqlSelection & { __args: {input: UpdateNBAMarketingRequest} })
    addUserReferral?: (AddUserReferralResponseGenqlSelection & { __args: {input: AddUserReferralRequest} })
    upsertUserProfile?: (UpsertUserProfileResponseGenqlSelection & { __args: {input: UpsertUserProfileInput} })
    upsertUserProfileFromToken?: UpsertUserProfileResponseGenqlSelection
    patchUserPreferences?: (PatchUserPreferencesResponseGenqlSelection & { __args: {input: PatchUserPreferencesInput} })
    UpdateUserSettings?: (UpdateUserSettingsResponseGenqlSelection & { __args: {input: UserSettingsUpdateInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NftOwnerGenqlSelection{
    on_User?:UserGenqlSelection,
    on_NonCustodialUser?:NonCustodialUserGenqlSelection,
    on_Sortable?: SortableGenqlSelection,
    __typename?: boolean | number
}

export interface NonCustodialUserGenqlSelection{
    flowAddress?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NotificationSettingsGenqlSelection{
    receiveEmails?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NotificationSettingsInput {receiveEmails: Scalars['Boolean']}

export interface NumericTransferRequirementGenqlSelection{
    threshold?: boolean | number
    current?: boolean | number
    valid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OfferGenqlSelection{
    id?: boolean | number
    sortID?: boolean | number
    createdByFlowAddress?: boolean | number
    createdByDapperID?: boolean | number
    acceptedByFlowAddress?: boolean | number
    acceptedByDapperID?: boolean | number
    momentID?: boolean | number
    momentFlowID?: boolean | number
    price?: boolean | number
    completed?: boolean | number
    purchased?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    acceptedAt?: boolean | number
    offerAvailableTxHash?: boolean | number
    offerCompletedTxHash?: boolean | number
    moment?: MintedMomentGenqlSelection
    createdByUser?: UserGenqlSelection
    version?: boolean | number
    offerType?: boolean | number
    edition?: EditionGenqlSelection
    visibility?: boolean | number
    parallelID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OfferAvailableActivityGenqlSelection{
    offer?: OfferGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OfferCompletedActivityGenqlSelection{
    offer?: OfferGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OffersGenqlSelection{
    size?: boolean | number
    data?: OfferGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OnChainPackGenqlSelection{
    id?: boolean | number
    state?: boolean | number
    momentIds?: boolean | number
    sortID?: boolean | number
    version?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OpenPacksInput {packIDs: Scalars['String'][]}

export interface OpenPacksResponseGenqlSelection{
    success?: boolean | number
    ID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OpenPacksV2Input {packIDs: Scalars['String'][]}

export interface OpenPacksV2ResponseGenqlSelection{
    momentsFromPacks?: MomentsFromPackGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderGenqlSelection{
    id?: boolean | number
    status?: boolean | number
    state?: boolean | number
    momentListingID?: boolean | number
    playID?: boolean | number
    setID?: boolean | number
    userID?: boolean | number
    moment?: MintedMomentGenqlSelection
    price?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    dapperIntentID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrdersGenqlSelection{
    size?: boolean | number
    data?: OrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface P2PListingOrderGenqlSelection{
    id?: boolean | number
    price?: boolean | number
    status?: boolean | number
    state?: boolean | number
    version?: boolean | number
    moment?: MintedMomentGenqlSelection
    seller?: UserGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    listingInvocationIntentID?: boolean | number
    delistingInvocationIntentID?: boolean | number
    listingTxHash?: boolean | number
    delistingTxHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface P2PListingOrdersGenqlSelection{
    size?: boolean | number
    data?: P2PListingOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface P2PMomentListingActivityGenqlSelection{
    order?: P2PListingOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface P2PMomentListingCancellationActivityGenqlSelection{
    order?: P2PListingOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface P2PMomentListingSoldActivityGenqlSelection{
    order?: P2PListingOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface P2PPurchaseOrderGenqlSelection{
    id?: boolean | number
    price?: boolean | number
    status?: boolean | number
    state?: boolean | number
    version?: boolean | number
    moment?: MintedMomentGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    purchaseIntentID?: boolean | number
    buyer?: UserGenqlSelection
    failureReason?: boolean | number
    txHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface P2PPurchaseOrdersGenqlSelection{
    size?: boolean | number
    data?: P2PPurchaseOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackGenqlSelection{
    id?: boolean | number
    state?: boolean | number
    status?: boolean | number
    /** momentIds are only available on opened packs */
    momentIds?: boolean | number
    sortID?: boolean | number
    version?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    /** @deprecated Use `packListingID` instead. */
    packListing?: PackListingGenqlSelection
    packListingID?: boolean | number
    fulfillmentTxHash?: boolean | number
    preorder?: boolean | number
    locked?: boolean | number
    flowID?: boolean | number
    distributionID?: boolean | number
    commitHash?: boolean | number
    onChainStatus?: boolean | number
    ownerDapperID?: boolean | number
    ownerFlowAddress?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackEditionGenqlSelection{
    setID?: boolean | number
    playID?: boolean | number
    edition?: EditionGenqlSelection
    count?: boolean | number
    minSerialNumber?: boolean | number
    maxSerialNumber?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackEditionConnectionGenqlSelection{
    edges?: PackEditionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackEditionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: PackEditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackFiltersGenqlSelection{
    byOwnerDapperID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackFiltersInput {byOwnerDapperID?: (Scalars['String'] | null)}

export interface PackListingGenqlSelection{
    id?: boolean | number
    remaining?: boolean | number
    title?: boolean | number
    description?: boolean | number
    price?: boolean | number
    priceV2?: PriceV2GenqlSelection
    expiryDate?: boolean | number
    forSale?: boolean | number
    images?: PackListingImageGenqlSelection
    sortID?: boolean | number
    version?: boolean | number
    packListingTemplate?: PackListingTemplateGenqlSelection
    totalPackCount?: boolean | number
    /** visualId is the highest visualId of the sets in a packlisting template */
    visualId?: boolean | number
    slug?: boolean | number
    startDate?: boolean | number
    isStarterPack?: boolean | number
    preorder?: boolean | number
    /** The packlistingID to which the user gets redirected if this one sells out when they are next in line */
    reboundPackListingID?: boolean | number
    orderPurchaseCoolDownTimeInMinutes?: boolean | number
    waitingRoom?: boolean | number
    waitingRoomActive?: boolean | number
    momentCountPerTeam?: MomentCountPerTeamGenqlSelection
    maxOrderQuantity?: boolean | number
    maxOrderQuantityV2?: MaxOrderQuantityV2GenqlSelection
    listingQuantity?: boolean | number
    levels?: LevelGenqlSelection
    packEditions?: PackEditionGenqlSelection
    packEditionsV2?: (PackEditionConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['ID'] | null), orderBy?: (PackListingPackEditionOrdering | null)} })
    appStoreProductID?: boolean | number
    /** momentsPerPack is the number of moments that a collector can pull per pack */
    momentsPerPack?: boolean | number
    /** distributionID is the on-chain representation of the pack listing */
    distributionID?: boolean | number
    rsvpMetadata?: RSVPMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackListingFiltersGenqlSelection{
    isMobileSupported?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackListingFiltersInput {
/** isMobileSupported filters for pack listings that are associated with an appstore product */
isMobileSupported?: (Scalars['Boolean'] | null),
/** byExpiryState filters for pack listings based on date conditions */
byExpiryState?: (PackListingExpiryStateFilter | null)}

export interface PackListingImageGenqlSelection{
    type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackListingPackEditionOrdering {sort: PackListingPackEditionSort,direction: Direction}

export interface PackListingSlotGenqlSelection{
    set?: SetGenqlSelection
    playIDCountMap?: PlayIDCountTupleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackListingTemplateGenqlSelection{
    packListingSlots?: PackListingSlotGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackListingsGenqlSelection{
    size?: boolean | number
    data?: PackListingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackListingsFilter {
/** Filters for pack listings associated with an app store product ID */
isMobileSupported?: (Scalars['Boolean'] | null),
/** Filters for pack listings that fall in the expiry states */
byExpiryState?: (PackListingExpiryStateFilter | null)}

export interface PackListingsSearchSummaryGenqlSelection{
    filters?: PackListingFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackNFTHashResponseGenqlSelection{
    packID?: boolean | number
    distributionID?: boolean | number
    commitHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackNFTHashesInput {packIDs: Scalars['String'][]}

export interface PackNFTHashesResponseGenqlSelection{
    packNFTHashes?: PackNFTHashResponseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackPurchaseOrderGenqlSelection{
    id?: boolean | number
    price?: boolean | number
    status?: boolean | number
    state?: boolean | number
    paymentTxHash?: boolean | number
    packListing?: PackListingGenqlSelection
    quantity?: boolean | number
    /**
     * The packs in the order will be revealed as soon as payment is successful.
     * There are a few scenarios:
     * 
     * 1) Payment Succeeded:
     * Pack with momentIds returned and fulfillment is in processing.
     * The moments will NOT show up with searchMintedMoments query filter byOwnerDapperID.
     * 
     * PackOrderState : PAYMENT_SUCCEEDED
     * PackOrderStatus : PROCESSING
     * 
     * 2) Fulfillment is Completed:
     * Pack with momentIds returned, order is completed.
     * The moments will eventually show up with searchMintedMoments query filter byOwnerDapperID.
     * Note: Moment ownership updates may still be happening when fulfillment is complete, so the moments will not be returned by searchMintedMoments query filter byOwnerDapperID right away.
     * 
     * PackOrderState : FULFILLMENT_SUCCEEDED
     * PackOrderStatus : COMPLETED
     * 
     * 3) Fulfillment Failed:
     * Pack with moment_ids returned for failed fulfillment (failed moment transfer to user).
     * The moments will not show up with searchMintedMoments query filter byOwnerDapperID.
     * 
     * state : FULLFILLMENT_FAILED
     * status : FAILED
     */
    packs?: PackGenqlSelection
    dapperIntentId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackPurchaseOrdersGenqlSelection{
    size?: boolean | number
    data?: PackPurchaseOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackReservationGenqlSelection{
    id?: boolean | number
    packListingID?: boolean | number
    levelID?: boolean | number
    quantity?: boolean | number
    payment?: PackReservationPaymentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackReservationFilter {reservationID?: (Scalars['ID'] | null),packListingID?: (Scalars['ID'] | null)}

export interface PackReservationPaymentGenqlSelection{
    status?: boolean | number
    confirmationRedirectURL?: boolean | number
    price?: PriceV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackReservationsFilter {packListingID: Scalars['ID']}

export interface PackSearchSummaryGenqlSelection{
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PacksGenqlSelection{
    size?: boolean | number
    data?: PackGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PacksFiltersInput {byOwnerDapperID?: (Scalars['String'] | null)}

export interface PacksForUserCollectionGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    description?: boolean | number
    images?: PackListingImageGenqlSelection
    sortID?: boolean | number
    version?: boolean | number
    data?: PacksGenqlSelection
    /** visualId is the highest visualId of the sets in a packlisting template */
    visualId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PacksForUserCollectionSearchSummaryGenqlSelection{
    filters?: PackFiltersGenqlSelection
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PacksForUserCollectionSearchSummaryResponseGenqlSelection{
    data?: PacksForUserCollectionSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PacksForUserCollectionsGenqlSelection{
    size?: boolean | number
    data?: PacksForUserCollectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageInfoGenqlSelection{
    startCursor?: boolean | number
    endCursor?: boolean | number
    hasNextPage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationGenqlSelection{
    leftCursor?: boolean | number
    rightCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationInput {cursor: Scalars['Cursor'],direction: CursorDirection,limit: Scalars['Int']}

export interface PatchUserPreferencesInput {favoriteTeamID?: (Scalars['String'] | null),country?: (Scalars['String'] | null),city?: (Scalars['String'] | null)}

export interface PatchUserPreferencesResponseGenqlSelection{
    /** @deprecated use publicInfo */
    success?: boolean | number
    publicInfo?: UserPublicInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PinMomentInput {momentID: Scalars['String']}

export interface PintMomentResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayGenqlSelection{
    id?: boolean | number
    version?: boolean | number
    description?: boolean | number
    flowID?: boolean | number
    sortID?: boolean | number
    status?: boolean | number
    assets?: PlayAssetsGenqlSelection
    stats?: PlayStatsGenqlSelection
    statsPlayerGameScores?: StatsPlayerGameScoresGenqlSelection
    statsPlayerSeasonAverageScores?: StatsPlayerSeasonAverageScoresGenqlSelection
    tags?: TagGenqlSelection
    league?: boolean | number
    headline?: boolean | number
    headlineSource?: boolean | number
    shortDescription?: boolean | number
    keyStats?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayAssetsGenqlSelection{
    videos?: PlayVideoGenqlSelection
    images?: PlayImageGenqlSelection
    /** @deprecated video length is now associated with PlayVideo */
    videoLengthInMilliseconds?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayFilterGenqlSelection{
    ByPlayers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayFilterInput {byPlayers?: ((Scalars['ID'] | null)[] | null)}

export interface PlayIDCountTupleGenqlSelection{
    id?: boolean | number
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayImageGenqlSelection{
    type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlaySearchSummaryGenqlSelection{
    sortBy?: boolean | number
    filters?: PlayFilterGenqlSelection
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayStatsGenqlSelection{
    playerID?: boolean | number
    playerName?: boolean | number
    firstName?: boolean | number
    lastName?: boolean | number
    jerseyNumber?: boolean | number
    teamAtMoment?: boolean | number
    awayTeamName?: boolean | number
    awayTeamScore?: boolean | number
    homeTeamName?: boolean | number
    homeTeamScore?: boolean | number
    dateOfMoment?: boolean | number
    totalYearsExperience?: boolean | number
    teamAtMomentNbaId?: boolean | number
    height?: boolean | number
    weight?: boolean | number
    currentTeam?: boolean | number
    currentTeamId?: boolean | number
    primaryPosition?: boolean | number
    homeTeamNbaId?: boolean | number
    awayTeamNbaId?: boolean | number
    nbaSeason?: boolean | number
    draftYear?: boolean | number
    draftSelection?: boolean | number
    draftRound?: boolean | number
    birthplace?: boolean | number
    birthdate?: boolean | number
    draftTeam?: boolean | number
    draftTeamNbaId?: boolean | number
    playCategory?: boolean | number
    playType?: boolean | number
    quarter?: boolean | number
    homeTeamScoresByQuarter?: TeamScoresByQuarterGenqlSelection
    awayTeamScoresByQuarter?: TeamScoresByQuarterGenqlSelection
    overrideHeadline?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayVideoGenqlSelection{
    type?: boolean | number
    url?: boolean | number
    videoLength?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerDataGenqlSelection{
    jerseyNumber?: boolean | number
    position?: boolean | number
    height?: boolean | number
    weight?: boolean | number
    currentTeamName?: boolean | number
    currentTeamId?: boolean | number
    firstName?: boolean | number
    lastName?: boolean | number
    birthplace?: boolean | number
    birthdate?: boolean | number
    yearsExperience?: boolean | number
    teamsPlayedFor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerGameScoresFiltersGenqlSelection{
    points?: IntegerRangeFilterGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerGameScoresFiltersInput {points: IntegerRangeFilterInput}

export interface PlayerLeaderboardGenqlSelection{
    id?: boolean | number
    kind?: boolean | number
    entries?: LeaderboardUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayersGenqlSelection{
    size?: boolean | number
    data?: PlayerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlaysGenqlSelection{
    size?: boolean | number
    data?: PlayGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PollGenqlSelection{
    /** id is the unique identifier of the poll. This is auto-generated upon creation. */
    id?: boolean | number
    /** candidatePlays are the plays that can be voted on. */
    candidatePlays?: PollPlayGenqlSelection
    /** startsAt is the timestamp that the poll will start at */
    startsAt?: boolean | number
    /** expiresAt is the timestamp that the poll will expire at */
    expiresAt?: boolean | number
    /**
     * votedFor can only be populated for an authenticated request.
     * This returns the ID of the play that the user has voted for.
     */
    votedFor?: boolean | number
    /** headline is the name of the player or team - depends on moment type */
    headline?: boolean | number
    /** The wave that the TS50 player belongs to */
    wave?: boolean | number
    /** imageURL is an optional image url for the given poll */
    imageURL?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PollPlayGenqlSelection{
    /**
     * contentfulEntryID is the entry to the play in contentful.
     * This is a short-term solution as we won't have the play data in our backend
     * for this campaign.
     */
    contentfulEntryID?: boolean | number
    /** totalVotes is the total number of votes that the play has received */
    totalVotes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PopulateOfferByTransactionInput {
/** transactionID is an input field to retrieve specific offer on chain by transaction. */
transactionID: Scalars['String']}

export interface PopulateOfferByTransactionResponseGenqlSelection{
    Offer?: OfferGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceRangeGenqlSelection{
    min?: boolean | number
    max?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceRangeFilterGenqlSelection{
    min?: boolean | number
    max?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceRangeFilterInput {min?: (Scalars['Price'] | null),max?: (Scalars['Price'] | null)}

export interface PriceV2GenqlSelection{
    value?: boolean | number
    currency?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceV2Input {value: Scalars['Price'],currency: Currency}

export interface PurchaseAssetsWithDapperPaymentInput {orderToken: Scalars['String']}

export interface PurchaseAssetsWithDapperPaymentResponseGenqlSelection{
    assetID?: boolean | number
    price?: boolean | number
    purchaseType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchaseMomentWithSoftCurrencyInput {momentID: Scalars['String']}

export interface PurchaseMomentWithSoftCurrencyResponseGenqlSelection{
    momentID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchaseP2PMomentActivityGenqlSelection{
    order?: P2PPurchaseOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchaseP2PMomentInput {momentID: Scalars['String'],price: Scalars['Price'],momentFlowID: Scalars['String'],sellerID: Scalars['String'],userListingID?: (Scalars['String'] | null),redirectURL: Scalars['String'],momentName?: (Scalars['String'] | null),momentDescription?: (Scalars['String'] | null),momentImageURL?: (Scalars['String'] | null),momentMetaInput?: (MomentMetaInput | null),recaptchaToken?: (Scalars['String'] | null)}

export interface PurchaseP2PMomentResponseGenqlSelection{
    orderID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchasePackActivityGenqlSelection{
    order?: PackPurchaseOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchasePackInput {packListingID: Scalars['String'],price: Scalars['Price'],priceV2?: (PriceV2Input | null),quantity: Scalars['Int'],redirectURL: Scalars['String'],recaptchaToken?: (Scalars['String'] | null),queueID?: (Scalars['String'] | null)}

export interface PurchasePackResponseGenqlSelection{
    orderID?: boolean | number
    existingReservation?: boolean | number
    packsReserved?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchaseSoftCurrencyWithDapperPaymentInput {orderToken: Scalars['String']}

export interface PurchaseSoftCurrencyWithDapperPaymentResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchaseVendorMomentActivityGenqlSelection{
    order?: OrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PurchaseVendorMomentInput {orderToken?: (Scalars['String'] | null),purchaserID?: (Scalars['String'] | null),paymentTransactionID?: (Scalars['String'] | null),momentListingID: Scalars['String'],redirectURL: Scalars['String'],price?: (Scalars['Price'] | null),momentTitle?: (Scalars['String'] | null),momentImageURL?: (Scalars['String'] | null)}

export interface PurchaseVendorMomentResponseGenqlSelection{
    orderID?: boolean | number
    /** @deprecated no longer given */
    paymentTransactionID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuarterScoreGenqlSelection{
    type?: boolean | number
    number?: boolean | number
    sequence?: boolean | number
    points?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    NoOp?: boolean | number
    GetActivity?: (GetActivityResponseGenqlSelection & { __args: {activityID: Scalars['ID']} })
    SearchActivity?: (SearchActivityResponseGenqlSelection & { __args: {input: SearchActivityInput} })
    GetUserPurchaseStats?: GetUserPurchaseStatsResponseGenqlSelection
    HasUnreadActivities?: (HasUnreadActivitiesResponseGenqlSelection & { __args: {input: HasUnreadActivitiesInput} })
    activeCampaigns?: CampaignGenqlSelection
    getMyActiveChallenges?: GetMyActiveChallengesResponseGenqlSelection
    getMyCompletedChallenges?: GetMyCompletedChallengesResponseGenqlSelection
    /** @deprecated deprecated in favour of getCollectorScorePublic */
    getCollectorScore?: (CollectorScoreGenqlSelection & { __args?: {input?: ((CollectorScoreRequestBonusGroup | null)[] | null)} })
    queryElasticsearch?: (QueryElasticsearchResponseGenqlSelection & { __args?: {input?: (QueryElasticsearchInput | null)} })
    getKYCStatus?: (GetKYCStatusResponseGenqlSelection & { __args?: {input?: (GetKYCStatusInput | null)} })
    authenticate?: (AuthenticateResponseGenqlSelection & { __args: {input: AuthenticateInput} })
    requestLoginUrl?: (RequestLoginUrlResponseGenqlSelection & { __args: {input: RequestLoginUrlInput} })
    exchangeRefreshToken?: (ExchangeRefreshTokenResponseGenqlSelection & { __args: {input: ExchangeRefreshTokenInput} })
    revokeToken?: (RevokeTokenResponseGenqlSelection & { __args: {input: RevokeTokenInput} })
    me?: MeGenqlSelection
    getMintedMomentProgressForQuest?: GetMintedMomentProgressForQuestResponseGenqlSelection
    getMomentTransferRequest?: (GetMomentTransferRequestResponseGenqlSelection & { __args: {input: GetMomentTransferRequestInput} })
    getTransferEligibility?: (GetTransferEligibilityResponseGenqlSelection & { __args?: {input?: (GetTransferEligibilityInput | null)} })
    getGiftedMomentURL?: (GetGiftedMomentURLResponseGenqlSelection & { __args?: {input?: (GetGiftedMomentURLInput | null)} })
    searchMomentGroups?: (SearchMomentGroupsResponseGenqlSelection & { __args?: {input?: (SearchMomentGroupsInput | null)} })
    getMomentGroup?: (GetMomentGroupResponseGenqlSelection & { __args: {input: GetMomentGroupInput} })
    /** This query returns total number of burned moments. */
    getTotalBurnedMoments?: GetTotalBurnedMomentsResponseGenqlSelection
    getPinnedMoments?: (GetPinnedMomentsResponseGenqlSelection & { __args: {input: GetPinnedMomentsRequest} })
    getUserP2PListingOrder?: (GetUserP2PListingOrderResponseGenqlSelection & { __args?: {input?: (GetUserP2PListingOrderInput | null)} })
    getUserP2PListingOrders?: GetUserP2PListingOrdersResponseGenqlSelection
    getUserP2PPurchaseOrder?: (GetUserP2PPurchaseOrderResponseGenqlSelection & { __args?: {input?: (GetUserP2PPurchaseOrderInput | null)} })
    getUserP2PPurchaseOrders?: GetUserP2PPurchaseOrdersResponseGenqlSelection
    getMomentSaleCSImpactData?: (MomentSaleCSImpactDataGenqlSelection & { __args: {momentID: Scalars['ID']} })
    /** @deprecated use getPacklistingEligibilityDetails */
    getDropEligibility?: (GetDropEligibilityResponseGenqlSelection & { __args?: {input?: (GetDropEligibilityInput | null)} })
    getPacklistingEligibilityDetails?: (StringTupleGenqlSelection & { __args?: {input?: (GetPacklistingEligibilityDetailsInput | null)} })
    GetPackListingEligibilityV2?: (GetPackListingEligibilityV2ResponseGenqlSelection & { __args?: {input?: (GetPackListingEligibilityV2Input | null)} })
    getUserPackOrder?: (GetUserPackOrderResponseGenqlSelection & { __args?: {input?: (GetUserPackOrderInput | null)} })
    getUserPackOrders?: GetUserPackOrdersResponseGenqlSelection
    packReservation?: (PackReservationGenqlSelection & { __args: {filter: PackReservationFilter} })
    packReservations?: (PackReservationGenqlSelection & { __args: {filter: PackReservationsFilter} })
    getOrder?: (GetOrderResponseGenqlSelection & { __args: {orderID: Scalars['ID']} })
    getUserOrders?: GetUserOrdersResponseGenqlSelection
    getMyShowcases?: GetMyShowcasesResponseGenqlSelection
    getMomentTradeInRequest?: (GetMomentTradeInRequestResponseGenqlSelection & { __args: {input: GetMomentTradeInRequestInput} })
    getMomentsTradeInRequest?: (GetMomentsTradeInRequestResponseGenqlSelection & { __args: {input: GetMomentsTradeInRequestInput} })
    getMyReferral?: GetMyReferralResponseGenqlSelection
    getMyProfile?: GetMyProfileResponseGenqlSelection
    getUserPendingTxStates?: GetUserPendingTxStatesResponseGenqlSelection
    getUserCoolDowns?: GetUserCoolDownsResponseGenqlSelection
    searchUsersByLocation?: (SearchUsersResponseGenqlSelection & { __args?: {input?: (SearchUsersByLocationInput | null)} })
    GetUserSettings?: GetUserSettingsResponseGenqlSelection
    getUserStatsByLocation?: (GetUserStatsByLocationResponseGenqlSelection & { __args?: {input?: (GetUserStatsByLocationInput | null)} })
    getPlay?: (GetPlayResponseGenqlSelection & { __args: {playID: GetPlayInput} })
    /** Get a list of Titles. */
    getTitles?: GetTitlesResponseGenqlSelection
    /** Get a users Titles. */
    getUserTitles?: (GetUserTitlesResponseGenqlSelection & { __args: {input: GetUserTitlesRequest} })
    SearchActivityByDapperId?: (SearchActivityResponseGenqlSelection & { __args: {dapperID: Scalars['String'], input: SearchActivityInput} })
    getWatchlist?: (WatchlistResponseGenqlSelection & { __args: {id: Scalars['ID']} })
    getUsersWatchlists?: (GetUsersWatchlistsResponseGenqlSelection & { __args: {dapperID: Scalars['ID']} })
    searchWatchedEditions?: (SearchWatchedEditionsResponseGenqlSelection & { __args: {input: SearchWatchedEditionsInput} })
    getEditionsWatcherCount?: (GetEditionsWatcherCountResponseGenqlSelection & { __args: {input: GetEditionsWatcherCountInput} })
    getGiglabsMarketplaceListings?: (GiglabsMarketPlaceListingsResponseGenqlSelection & { __args: {input: GiglabsMarketplaceListingsInput} })
    getGiglabsMarketplaceListing?: (GiglabsMarketPlaceListingResponseGenqlSelection & { __args: {id: Scalars['Int']} })
    getGiglabsListingBids?: (GiglabsListingBidsResponseGenqlSelection & { __args: {input: GiglabsListingBidsInput} })
    /** Gets a users baller status. */
    getUserBallerStatus?: (UserBallerStatusGenqlSelection & { __args: {input: GetUserBallerStatusRequest} })
    /** Gets an ordered list of baller status levels. */
    getBallerStatusLevels?: BallerStatusLevelsGenqlSelection
    /** Check if a baller status has processed pack fulfillment's. */
    hasBallerStatusProcessedPackFulfillments?: { __args: {input: HasBallerStatusProcessedPackFulfillmentsInput} }
    getUsersWithHighestNumberOfBurnedMoments?: GetUsersWithHighestNumberOfBurnedMomentsResponseGenqlSelection
    getUsersWithHighestBurnedTopshotScore?: GetUsersWithHighestBurnedTopshotScoreResponseGenqlSelection
    getMomentsWithHighestBurnedTopshotScore?: GetMomentsWithHighestBurnedTopshotScoreResponseGenqlSelection
    getTotalBurnedMomentCount?: GetTotalBurnedMomentCountResponseGenqlSelection
    getTotalBurnedMomentCountByRarity?: GetTotalBurnedMomentCountByRarityResponseGenqlSelection
    getTopNBurnedEditions?: GetTopNBurnedEditionsResponseGenqlSelection
    getUserScoreForRisingStarsLockingLeaderboard?: (UserBurnedTopshotScoreGenqlSelection & { __args: {dapperID: Scalars['ID']} })
    getUserScoresForRisingStarsLockingLeaderboard?: GetUserScoresForRisingStarsLockingLeaderboardResponseGenqlSelection
    getUserScoreForAllStarsBurningLeaderboard?: (UserBurnedTopshotScoreGenqlSelection & { __args: {dapperID: Scalars['ID']} })
    getUserScoresForAllStarsBurningLeaderboard?: GetUserScoresForAllStarsBurningLeaderboardResponseGenqlSelection
    /** Gets all active challenges. */
    getActiveChallenges?: GetActiveChallengesResponseGenqlSelection
    /**
     * Searches challenges based on the given input.
     * SearchChallenges sorts by ExpirationDate DESC by default, filledMomentIds is currently null as we are not yet showing the progress of active challenges
     */
    searchChallenges?: (SearchChallengesResponseGenqlSelection & { __args: {input: SearchChallengesInput} })
    getChallengeByID?: (UserChallengeGenqlSelection & { __args: {input: GetChallengeByIDInput} })
    checkActiveChallengeSubmissionsByMomentID?: (CheckActiveChallengeSubmissionsByMomentIDResponseGenqlSelection & { __args: {input: CheckActiveChallengeSubmissionsByMomentIDInput} })
    getActiveUserSubmissionsByMomentIDs?: (GetActiveUserSubmissionsByMomentIDsResponseGenqlSelection & { __args: {input: GetActiveUserSubmissionsByMomentIDsInput} })
    /** @deprecated use getCodex instead (with optional userID) */
    getUserCodex?: (GetUserCodexResponseGenqlSelection & { __args: {input: GetUserCodexInput} })
    getCodex?: (GetCodexResponseGenqlSelection & { __args: {input: GetCodexInput} })
    getCodexSet?: (GetCodexSetResponseGenqlSelection & { __args: {input: GetCodexSetInput} })
    getCollectorScorePublic?: (CollectorScoreGenqlSelection & { __args: {input: GetCollectorScoreRequest} })
    searchTeamCollection?: (SearchTeamCollectionResponseGenqlSelection & { __args: {input: SearchTeamCollectionInput} })
    /** Gets an Edition. */
    getEdition?: (GetEditionResponseGenqlSelection & { __args: {input: GetEditionInput} })
    /** Search Editions based on the inputted filters. */
    searchEditions?: (SearchEditionsResponseGenqlSelection & { __args: {input: SearchEditionsInput} })
    /** Gets an Edition listing */
    getEditionListing?: (GetEditionListingResponseGenqlSelection & { __args: {input: GetEditionListingInput} })
    /** Gets an Edition listing from the cache. */
    getEditionListingCached?: (GetEditionListingResponseGenqlSelection & { __args: {input: GetEditionListingInput} })
    /**
     * getHotEditionListings returns edition listings that we deem to be "hot" (e.g. high
     * sales volume in the last x hours). The listings in the response should be ordered
     * from most to least host.
     */
    getHotEditionListings?: (GetHotEditionListingsResponseGenqlSelection & { __args?: {input?: (GetHotEditionListingsInput | null)} })
    /** Search current Edition listings. */
    searchEditionListings?: (SearchEditionListingsResponseGenqlSelection & { __args: {input: SearchEditionListingsInput} })
    getExchangeRates?: (GetExchangeRatesResponseGenqlSelection & { __args: {input: GetExchangeRatesInput} })
    /** Get the current leaderboard. */
    getLeaderboard?: (GetLeaderboardResponseGenqlSelection & { __args: {input: GetLeaderboardInput} })
    /** Get an entry from the leaderboard. */
    getLeaderboardEntry?: (GetLeaderboardEntryResponseGenqlSelection & { __args: {input: GetLeaderboardEntryInput} })
    /** Get the leaderboard potential. */
    getLeaderboardPotential?: (GetLeaderboardPotentialResponseGenqlSelection & { __args: {input: GetLeaderboardPotentialInput} })
    /** Get the leaderboard entry relationships. */
    getLeaderboardEntryRelationships?: (GetLeaderboardEntryRelationshipResponseGenqlSelection & { __args: {input: GetLeaderboardEntryRelationshipInput} })
    /** Search the marketplace transactions. */
    searchMarketplaceTransactions?: (MarketplaceTransactionSearchSummaryResponseGenqlSelection & { __args: {input: SearchMarketplaceTransactionsInput} })
    /** Get the marketplace transaction edition stats. */
    getMarketplaceTransactionEditionStats?: (GetMarketplaceTransactionEditionStatsResponseGenqlSelection & { __args: {input: GetMarketplaceTransactionEditionStatsInput} })
    /** Get the latest marketplace transactions */
    getLatestMarketplaceTransactions?: MarketplaceTransactionSearchSummaryResponseGenqlSelection
    searchMintedMoments?: (SearchMintedMomentsResponseGenqlSelection & { __args: {input: SearchMintedMomentsInput} })
    /** Get minted moment by id. */
    getMintedMoment?: (MintedMomentResponseGenqlSelection & { __args: {momentId: Scalars['ID']} })
    /** Get a list of minted moment by id. */
    getMintedMoments?: (GetMintedMomentsResponseGenqlSelection & { __args: {input: GetMintedMomentsInput} })
    /** Returns a list of all players. */
    allPlayers?: PlayersGenqlSelection
    /**
     * Search suggestions returns all players whose name contain the string given in the input field.
     * For example: "Lebron James", "bron J", and "James" would return Lebron James. However, "Lbron" would not.
     */
    getSearchSuggestions?: (SearchSuggestionsGenqlSelection & { __args: {input: SearchSuggestionsInput} })
    /** Returns all players for a given League. */
    allPlayersByLeagues?: (PlayersGenqlSelection & { __args: {input: AllPlayersByLeaguesInput} })
    /** Get the soft currency price. */
    getSoftCurrencyPrice?: GetSoftCurrencyPriceResponseGenqlSelection
    /** Returns a list of all teams. */
    allTeams?: TeamsGenqlSelection
    /** Returns a list of teams in a given League. */
    allTeamsByLeagues?: (TeamsGenqlSelection & { __args: {input: AllTeamsByLeaguesInput} })
    /** @deprecated deprecated in favour of SearchEditionListings */
    searchMomentListings?: (MomentListingsSearchSummaryResponseGenqlSelection & { __args: {input: SearchMomentListingsInput} })
    /** @deprecated deprecated in favour of EditionListings */
    getUserMomentListings?: (UserMomentListingsResponseGenqlSelection & { __args: {input: GetUserMomentListingsInput} })
    /** @deprecated vendor endpoints aren't used */
    getVendorMomentListing?: (GetVendorMomentListingResponseGenqlSelection & { __args: {input: GetVendorMomentListingInput} })
    /** Get the media uri from the moments flow id. */
    MomentMediaURI?: (MomentMediaURIResponseGenqlSelection & { __args: {momentFlowId: Scalars['Int']} })
    /** searchOffers will search for offers given the filters, sort by or a cursor */
    searchOffers?: (SearchOffersResponseGenqlSelection & { __args: {input: SearchOffersInput} })
    /** getOffer will search for offer by given id or offerAvailableTxHash or offercompletedTxHash, only one of these three input should be filled. */
    getOffer?: (OfferGenqlSelection & { __args: {input: GetOfferInput} })
    /** Get on chain pack info by packID. */
    getOnChainPack?: (GetOnChainPackResponseGenqlSelection & { __args: {input: GetOnChainPackInput} })
    checkExistingP2POrders?: (CheckExistingP2POrdersResponseGenqlSelection & { __args: {input: CheckExistingP2POrdersInput} })
    /** Search pack listings. searchPackListings currently does not support limit/pagination/filters/sorts. */
    searchPackListings?: (SearchPackListingsResponseGenqlSelection & { __args: {input: SearchPackListingsInput} })
    /** Get pack listing based on the pack listing id, */
    getPackListing?: (GetPackListingResponseGenqlSelection & { __args: {input: GetPackListingInput} })
    getUserPackOrderByDapperId?: (GetUserPackOrderResponseGenqlSelection & { __args?: {input?: (GetUserPackOrderByDapperIdInput | null)} })
    getUserPackOrdersByDapperId?: (GetUserPackOrdersResponseGenqlSelection & { __args: {dapperId: Scalars['String']} })
    /**
     * Return user progress against sets + challenges.
     * 
     * If the `withPacks` field is filled in, this query will have the following behaviour:
     *  - Return only Sets and Challenges that are relevant to those packs
     *  - Consider moments in the user's account AND moments from the passed packs towards progress
     * 
     * When the `withPacks` field is not filled in, the behaviour is:
     *  - Return all visible Sets and active Challenges
     *  - Consider only moments in the user's account
     * 
     * In order to obtain the diff in user progress from before and after a series of pack openings,
     * this query should be called prior to pack opening, and then again with the `withPacks`
     * field filled in.
     */
    getPackSummaryProgress?: (GetPackSummaryProgressResponseGenqlSelection & { __args: {input: GetPackSummaryProgressInput} })
    /** Returns UserBallerStatus with only milestones relevant to Pack Opening. */
    getPackSummaryBallerStatus?: (UserBallerStatusGenqlSelection & { __args: {input: GetPackSummaryBallerStatusInput} })
    /** Get a list of packs by their IDs. */
    getPacks?: (GetPacksResponseGenqlSelection & { __args: {input: GetPacksInput} })
    /** Not yet implemented. searchPacks currently does not currently support limit/pagination/sorts. */
    searchPacks?: (SearchPacksResponseGenqlSelection & { __args: {input: SearchPacksInput} })
    /** Search packs for a users collection. */
    searchPacksForUserCollection?: (PacksForUserCollectionSearchSummaryResponseGenqlSelection & { __args: {input: SearchPacksForUserCollectionInput} })
    /** Get the players data with their current stats. */
    getPlayerDataWithCurrentStats?: (GetPlayerDataWithCurrentStatsResponseGenqlSelection & { __args?: {input?: (GetPlayerDataWithCurrentStatsInput | null)} })
    searchPlays?: (PlaySearchSummaryGenqlSelection & { __args: {input: SearchPlaysInput} })
    /** searchSets currently returns all sets in existence. */
    searchSets?: (SearchSetsResponseGenqlSelection & { __args: {input: SearchSetsInput} })
    /** Get a set by its id. */
    getSet?: (GetSetResponseGenqlSelection & { __args: {input: GetSetInput} })
    getShowcaseByID?: (ShowcaseGenqlSelection & { __args: {showcaseID: Scalars['ID']} })
    getUserShowcases?: (GetUserShowcasesResponseGenqlSelection & { __args: {input: GetUserShowcasesInput} })
    searchShowcases?: (SearchShowcasesResponseGenqlSelection & { __args: {input: SearchShowcasesInput} })
    /** Get special NFTs for a given user. */
    getUserOwnedSpecialNFTs?: (GetUserOwnedSpecialNFTsResponseGenqlSelection & { __args: {input: GetUserOwnedSpecialNFTsInput} })
    /** Get a list of special NFTs. */
    getSpecialNFTs?: (GetSpecialNFTsResponseGenqlSelection & { __args?: {type?: (SpecialNFTType | null)} })
    /** Get a special NFT by it's flow ID. */
    getSpecialNFT?: (GetSpecialNFTResponseGenqlSelection & { __args: {flowID: Scalars['Int']} })
    /** Get a list of Tags. */
    getTags?: (GetTagsResponseGenqlSelection & { __args: {input: GetTagsInput} })
    getTickerData?: GetTickerDataResponseGenqlSelection
    /** Get a Top Shot score by a users dapper ID. */
    topshotScore?: (TopshotScoreGenqlSelection & { __args: {input: GetTopshotScoreRequest} })
    /** Get a Top Shot score for a team series completion. */
    topshotScoreTeamSeriesCompletion?: (GetTeamSeriesCompletionProgressResponseGenqlSelection & { __args: {input: GetTopshotScoreTeamSeriesCompletionRequest} })
    /** Get a Top Shot score for all team series completion. */
    topshotScoreAllTeamsSeriesCompletion?: (GetTopshotScoreAllTeamsSeriesCompletionProgressResponseGenqlSelection & { __args: {input: GetTopshotScoreAllTeamsSeriesCompletionProgressRequest} })
    getUserTopshotTags?: (GetUserTopshotTagsResponseGenqlSelection & { __args: {input: GetUserTopshotTagsRequest} })
    /**
     * ts50 is a query to list all polls for ts50 players.
     * The default behaviour of this API is to return polls in expiring asc order,
     * followed by polls that the user has completed voting for.
     * The query has an optional filter to filter by a particular player.
     */
    ts50?: TS50GenqlSelection
    /** Search a users set associations. */
    searchUserSetAssociations?: (SearchUserSetAssociationsResponseGenqlSelection & { __args: {input: SearchUserSetAssociationsInput} })
    getUserProfile?: (GetUserProfileResponseGenqlSelection & { __args: {input: GetUserProfileInput} })
    getUserProfileByUsername?: (GetUserProfileResponseGenqlSelection & { __args: {input: getUserProfileByUsernameInput} })
    /** @deprecated use getPackListingEligibilityV2 instead */
    getUserEligibilityForJoiningPackListingQueue?: (GetUserEligibilityForJoiningPackListingQueueResponseGenqlSelection & { __args: {input: GetUserEligibilityForJoiningPackListingQueueInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryElasticsearchInput {index: Scalars['String'],body: QueryElasticsearchInputBody}

export interface QueryElasticsearchInputBody {query?: (Scalars['Map'] | null),aggs?: (Scalars['Map'] | null)}

export interface QueryElasticsearchResponseGenqlSelection{
    data?: ElasticsearchResponseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RSVPMetadataGenqlSelection{
    totalPacksReserved?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RemoveAllEditionsFromWatchlistInput {watchlistId?: (Scalars['ID'] | null)}

export interface RemoveAllEditionsFromWatchlistResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RemoveEditionFromWatchlistInput {watchlistId?: (Scalars['ID'] | null),playID: Scalars['String'],setID: Scalars['String']}

export interface RemoveEditionFromWatchlistResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RemoveFromDropSquadInput {dropSquadID: Scalars['ID'],memberID: Scalars['ID']}

export interface RemoveFromDropSquadResponseGenqlSelection{
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RemoveMomentsFromGroupInput {momentGroupID: Scalars['String'],momentIDs?: (Scalars['String'][] | null)}

export interface RemoveMomentsFromGroupResponseGenqlSelection{
    momentIDs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RequestLoginUrlInput {state?: (Scalars['String'] | null),redirectUrl?: (Scalars['String'] | null),loginHint?: (Scalars['String'] | null)}

export interface RequestLoginUrlResponseGenqlSelection{
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RequirementGenqlSelection{
    /** The name of the requirement */
    name?: boolean | number
    /** The enumerated name of the requirement */
    nameV2?: boolean | number
    /** The threshold at which the requirement is compared  */
    value?: boolean | number
    /** Optional field if value is not of type string */
    valueType?: boolean | number
    /** The operator with which the comparison uses,  i.e. "=", "<=", ">=" */
    comparator?: boolean | number
    /** Whether a user has qualified for this requirement */
    isQualified?: boolean | number
    /** The user value for this requirement */
    userValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReservePackInput {packListingID: Scalars['ID'],levelID?: (Scalars['String'] | null),quantity: Scalars['Int'],postPaymentRedirectURL: Scalars['String']}

export interface ReservePackResponseGenqlSelection{
    packReservation?: PackReservationGenqlSelection
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RevokeTokenInput {refreshToken: Scalars['String']}

export interface RevokeTokenResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleDtoGenqlSelection{
    orderId?: boolean | number
    sellerAddress?: boolean | number
    buyerAddress?: boolean | number
    buyerId?: boolean | number
    buyerUsername?: boolean | number
    bidPrice?: boolean | number
    momentId?: boolean | number
    momentName?: boolean | number
    momentDescription?: boolean | number
    momentImageUrl?: boolean | number
    soldDateTime?: boolean | number
    playId?: boolean | number
    playDescription?: boolean | number
    playerId?: boolean | number
    playerName?: boolean | number
    teamName?: boolean | number
    setVisualId?: boolean | number
    setId?: boolean | number
    setSeries?: boolean | number
    setName?: boolean | number
    serialNumber?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaveShowcaseInput {showcaseID?: (Scalars['ID'] | null),momentIDs?: (Scalars['ID'][] | null),name?: (Scalars['String'] | null),momentsOrder?: ((ShowcaseMomentOrderInput | null)[] | null),questID?: (Scalars['ID'] | null)}

export interface SaveShowcaseResponseGenqlSelection{
    showcaseID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchActivityInput {filters: ActivityFiltersInput,sortBy?: (ActivitySortType | null),searchInput: BaseSearchInput}

export interface SearchActivityResponseGenqlSelection{
    filters?: ActivityFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchChallengesInput {filters?: (ChallengeFiltersInput | null),sortBy?: (ChallengeSortType | null),searchInput: BaseSearchInput}

export interface SearchChallengesResponseGenqlSelection{
    data?: ChallengesSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchEditionListingsInput {filters: EditionListingFilterInput,sortBy?: (EditionListingSortType | null),searchInput: BaseSearchInput,userID?: (Scalars['ID'] | null)}

export interface SearchEditionListingsResponseGenqlSelection{
    data?: SearchEditionListingsSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchEditionListingsSummaryGenqlSelection{
    filters?: EditionListingsFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchEditionsInput {filters: EditionFilterInput}

export interface SearchEditionsResponseGenqlSelection{
    filters?: EditionFiltersGenqlSelection
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchMarketplaceTransactionsInput {filters?: (MarketplaceTransactionFiltersInput | null),sortBy?: (MarketplaceTransactionSortType | null),searchInput: BaseSearchInput}

export interface SearchMintedMomentsInput {filters?: (MintedMomentFilterInput | null),sortBy?: (MintedMomentSortType | null),searchInput: BaseSearchInput}

export interface SearchMintedMomentsResponseGenqlSelection{
    data?: MintedMomentSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchMomentGroupFilterInput {addMomentsByMomentID?: (Scalars['ID'][] | null)}

export interface SearchMomentGroupSummaryGenqlSelection{
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchMomentGroupsInput {filters?: (SearchMomentGroupFilterInput | null)}

export interface SearchMomentGroupsResponseGenqlSelection{
    data?: SearchMomentGroupSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchMomentListingsInput {filters: MomentListingFilterInput,sortBy?: (MomentListingSortType | null),searchInput: BaseSearchInput,countOwnedSetPlaysForUserID?: (Scalars['ID'] | null)}

export interface SearchOffersFilterGenqlSelection{
    createdByDapperIDs?: boolean | number
    byMomentIDs?: boolean | number
    byType?: boolean | number
    byOfferState?: boolean | number
    byPrice?: PriceRangeFilterGenqlSelection
    byEditions?: EditionsFilterGenqlSelection
    byOfferTypes?: boolean | number
    byOfferVisibility?: boolean | number
    byParallels?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchOffersFilterInput {
/** createdByDapperIDs will filter all offers created by users (using their dapper IDs) */
createdByDapperIDs?: (Scalars['String'][] | null),
/** byMomentIDs will filter all offers for the given moments (list of moment IDs) */
byMomentIDs?: (Scalars['String'][] | null),
/**
 * byType will filter all offers using the Type enum:
 *   - MADE: filter offers created by the logged user
 *   - RECEIVED: filter offers received for the logged user
 */
byType?: (SearchOffersType | null),
/**
 * byOfferState will filter all offers using the State enum (by default it will return OPENED offers):
 *   - OPENED: filter offers which are not completed
 *   - COMPLETED: filter offers which are completed
 *   - CANCELED: filter offers which are completed but not purchased
 *   - PURCHASED: filter offers which are completed and purchased
 *   - ALL: return all offers 
 */
byOfferState?: (SearchOffersState | null),
/** byPrice will only return offers with prices falling inside the specified price range */
byPrice?: (PriceRangeFilterInput | null),
/** byEditions will filter all offers for the given editions */
byEditions?: ((EditionsFilterInput | null)[] | null),
/** byOfferTypes will filter all offers by offer-types (Serial, Edition) */
byOfferTypes?: (OfferType[] | null),
/** byVisibility will filter all offers by offer visibility (hidden, unhidden) */
byOfferVisibility?: (OfferVisibilityFilter | null),
/** byParallels will filter all offers by moment/edition subedition */
byParallels?: (Scalars['Int'][] | null)}

export interface SearchOffersInput {filters?: (SearchOffersFilterInput | null),sortBy?: (SearchOffersSortType | null),searchInput: BaseSearchInput}

export interface SearchOffersResponseGenqlSelection{
    data?: SearchOffersSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchOffersSummaryGenqlSelection{
    filters?: SearchOffersFilterGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchPackListingsInput {searchInput: BaseSearchInput,filters?: (PackListingFiltersInput | null),sortBy?: (PackListingSortType | null)}

export interface SearchPackListingsResponseGenqlSelection{
    data?: PackListingsSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchPacksForUserCollectionInput {searchInput: BaseSearchInput,filters?: (PacksFiltersInput | null)}

export interface SearchPacksInput {searchInput: BaseSearchInput,filters?: (PackFiltersInput | null)}

export interface SearchPacksResponseGenqlSelection{
    data?: PackSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchPlaysInput {sortBy?: (PlaySortType | null),filters?: (PlayFilterInput | null),searchInput: BaseSearchInput}

export interface SearchSetsFilterInput {byLeagues?: ((League | null)[] | null)}

export interface SearchSetsInput {searchInput?: (BaseSearchInput | null),filters?: (SearchSetsFilterInput | null)}

export interface SearchSetsResponseGenqlSelection{
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchShowcasesInput {filters: ShowcasesFiltersInput,sortBy?: (ShowcasesSortType | null),searchInput: BaseSearchInput}

export interface SearchShowcasesResponseGenqlSelection{
    data?: ShowcasesSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchSuggestionsGenqlSelection{
    playerSuggestions?: PlayerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchSuggestionsInput {input: Scalars['String']}

export interface SearchSummaryGenqlSelection{
    count?: CountSummaryGenqlSelection
    totalCount?: boolean | number
    pagination?: PaginationGenqlSelection
    data?: SortableCollectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchTeamCollectionInput {userID: Scalars['String'],teamID: Scalars['String'],bySeries?: (TeamCollectionFiltersInput | null)}

export interface SearchTeamCollectionResponseGenqlSelection{
    bySeries?: TeamCollectionFiltersGenqlSelection
    teamCollection?: CollectorTeamSeriesCountsGenqlSelection
    totalPlayers?: boolean | number
    totalPlayersOwned?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchUserSetAssociationsFiltersInput {byIsCompleted?: (Scalars['Boolean'] | null),bySets?: ((Scalars['ID'] | null)[] | null)}

export interface SearchUserSetAssociationsInput {searchInput?: (BaseSearchInput | null),sortBy?: (UserSetAssociationSortType | null),filters?: (SearchUserSetAssociationsFiltersInput | null)}

export interface SearchUserSetAssociationsResponseGenqlSelection{
    filters?: UserSetAssociationFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchUsersByLocationInput {filters?: (SearchUsersFilterInput | null),sortBy?: (UserSearchSortType | null),searchInput: BaseSearchInput}

export interface SearchUsersFilterInput {country?: (Scalars['String'] | null),city?: (Scalars['String'] | null),username?: (Scalars['String'] | null)}

export interface SearchUsersResponseGenqlSelection{
    data?: UserSearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchWatchedEditionsInput {searchInput?: (BaseSearchInput | null),sortBy?: (WatchedEditionsSortType | null),filters?: (WatchedEditionFiltersInput | null)}

export interface SearchWatchedEditionsResponseGenqlSelection{
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    filters?: WatchedEditionFiltersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetGenqlSelection{
    id?: boolean | number
    sortID?: boolean | number
    version?: boolean | number
    flowId?: boolean | number
    flowName?: boolean | number
    flowSeriesNumber?: boolean | number
    flowLocked?: boolean | number
    setVisualId?: boolean | number
    assetPath?: boolean | number
    assets?: SetAssetsGenqlSelection
    plays?: PlayGenqlSelection
    leagues?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetAssetsGenqlSelection{
    images?: SetImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetImageGenqlSelection{
    type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetPlayCirculationsGenqlSelection{
    ownedByCollectors?: boolean | number
    forSaleByCollectors?: boolean | number
    hiddenInPacks?: boolean | number
    unavailableForPurchase?: boolean | number
    circulationCount?: boolean | number
    burned?: boolean | number
    locked?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetProgressGenqlSelection{
    set?: SetGenqlSelection
    numTotalEditionSlots?: boolean | number
    numFilledEditionSlots?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetSelectedUserTitlesInput {titleIDs: Scalars['String'][]}

export interface SetSelectedUserTitlesResponseGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetsGenqlSelection{
    size?: boolean | number
    data?: SetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetsProgressGenqlSelection{
    progress?: SetProgressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopGenqlSelection{
    packListings?: (ShopPackListingsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['ID'] | null), orderBy?: (ShopPackListingsOrdering | null), filter?: (PackListingsFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopPackListingsConnectionGenqlSelection{
    pageInfo?: PageInfoGenqlSelection
    edges?: ShopPackListingsEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopPackListingsEdgeGenqlSelection{
    node?: PackListingGenqlSelection
    eligibility?: UserPackListingEligibilityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopPackListingsOrdering {sort: UserPackListingsSort,direction: Direction}

export interface ShowcaseGenqlSelection{
    id?: boolean | number
    sortID?: boolean | number
    version?: boolean | number
    name?: boolean | number
    userID?: boolean | number
    momentIDs?: boolean | number
    moments?: MintedMomentGenqlSelection
    user?: UserPublicInfoGenqlSelection
    momentsOrder?: ShowcaseMomentOrderGenqlSelection
    questID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShowcaseMomentOrderGenqlSelection{
    order?: boolean | number
    momentID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShowcaseMomentOrderInput {order: Scalars['Int'],momentID: Scalars['ID']}

export interface ShowcasesGenqlSelection{
    size?: boolean | number
    data?: ShowcaseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShowcasesFiltersGenqlSelection{
    byUserID?: boolean | number
    byQuestID?: boolean | number
    byShowcaseName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShowcasesFiltersInput {byUserID?: (Scalars['String'] | null),byQuestID?: (Scalars['ID'] | null),byShowcaseName?: (Scalars['String'] | null)}

export interface ShowcasesSearchSummaryGenqlSelection{
    filters?: ShowcasesFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SortableGenqlSelection{
    sortID?: boolean | number
    on_Activity?: ActivityGenqlSelection
    on_Edition?: EditionGenqlSelection
    on_EditionListing?: EditionListingGenqlSelection
    on_MarketplaceTransaction?: MarketplaceTransactionGenqlSelection
    on_MintedMoment?: MintedMomentGenqlSelection
    on_MomentGroup?: MomentGroupGenqlSelection
    on_MomentListing?: MomentListingGenqlSelection
    on_Offer?: OfferGenqlSelection
    on_OnChainPack?: OnChainPackGenqlSelection
    on_Pack?: PackGenqlSelection
    on_PackListing?: PackListingGenqlSelection
    on_PacksForUserCollection?: PacksForUserCollectionGenqlSelection
    on_Play?: PlayGenqlSelection
    on_Set?: SetGenqlSelection
    on_Showcase?: ShowcaseGenqlSelection
    on_User?: UserGenqlSelection
    on_UserChallenge?: UserChallengeGenqlSelection
    on_UserSetAssociation?: UserSetAssociationGenqlSelection
    on_WatchedEdition?: WatchedEditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SortableCollectionGenqlSelection{
    data?: SortableGenqlSelection
    size?: boolean | number
    on_Activities?: ActivitiesGenqlSelection
    on_EditionListings?: EditionListingsGenqlSelection
    on_Editions?: EditionsGenqlSelection
    on_MarketplaceTransactions?: MarketplaceTransactionsGenqlSelection
    on_MintedMoments?: MintedMomentsGenqlSelection
    on_MomentGroups?: MomentGroupsGenqlSelection
    on_MomentListings?: MomentListingsGenqlSelection
    on_Offers?: OffersGenqlSelection
    on_PackListings?: PackListingsGenqlSelection
    on_PacksForUserCollections?: PacksForUserCollectionsGenqlSelection
    on_Plays?: PlaysGenqlSelection
    on_Sets?: SetsGenqlSelection
    on_Showcases?: ShowcasesGenqlSelection
    on_UserChallenges?: UserChallengesGenqlSelection
    on_UserSetAssociations?: UserSetAssociationsGenqlSelection
    on_Users?: UsersGenqlSelection
    on_WatchedEditions?: WatchedEditionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SpecialNFTGenqlSelection{
    flowID?: boolean | number
    seriesFlowID?: boolean | number
    version?: boolean | number
    type?: boolean | number
    set?: SpecialSetGenqlSelection
    acquiredAt?: boolean | number
    owner?: NftOwnerGenqlSelection
    originalOwner?: NftOwnerGenqlSelection
    momentTopshotScore?: MomentTopshotScoreGenqlSelection
    auction?: AuctionGenqlSelection
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SpecialNftPurchasedActivityGenqlSelection{
    specialNFT?: SpecialNFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SpecialNftSoldActivityGenqlSelection{
    specialNFT?: SpecialNFTGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SpecialSetGenqlSelection{
    flowID?: boolean | number
    seriesFlowID?: boolean | number
    seriesName?: boolean | number
    version?: boolean | number
    vipCustomID?: boolean | number
    name?: boolean | number
    description?: boolean | number
    assetUri?: boolean | number
    assetPreviewUri?: boolean | number
    additionalImages?: boolean | number
    assetFileType?: boolean | number
    metadata?: metadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsPlayerGameScoresGenqlSelection{
    blocks?: boolean | number
    points?: boolean | number
    steals?: boolean | number
    assists?: boolean | number
    minutes?: boolean | number
    rebounds?: boolean | number
    turnovers?: boolean | number
    plusMinus?: boolean | number
    flagrantFouls?: boolean | number
    personalFouls?: boolean | number
    technicalFouls?: boolean | number
    twoPointsMade?: boolean | number
    blockedAttempts?: boolean | number
    fieldGoalsMade?: boolean | number
    freeThrowsMade?: boolean | number
    threePointsMade?: boolean | number
    defensiveRebounds?: boolean | number
    offensiveRebounds?: boolean | number
    pointsOffTurnovers?: boolean | number
    twoPointsAttempted?: boolean | number
    assistTurnoverRatio?: boolean | number
    fieldGoalsAttempted?: boolean | number
    freeThrowsAttempted?: boolean | number
    twoPointsPercentage?: boolean | number
    fieldGoalsPercentage?: boolean | number
    freeThrowsPercentage?: boolean | number
    threePointsAttempted?: boolean | number
    threePointsPercentage?: boolean | number
    playerPosition?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StatsPlayerSeasonAverageScoresGenqlSelection{
    minutes?: boolean | number
    blocks?: boolean | number
    points?: boolean | number
    steals?: boolean | number
    assists?: boolean | number
    rebounds?: boolean | number
    turnovers?: boolean | number
    plusMinus?: boolean | number
    flagrantFouls?: boolean | number
    personalFouls?: boolean | number
    technicalFouls?: boolean | number
    twoPointsMade?: boolean | number
    blockedAttempts?: boolean | number
    fieldGoalsMade?: boolean | number
    freeThrowsMade?: boolean | number
    threePointsMade?: boolean | number
    defensiveRebounds?: boolean | number
    offensiveRebounds?: boolean | number
    pointsOffTurnovers?: boolean | number
    twoPointsAttempted?: boolean | number
    assistTurnoverRatio?: boolean | number
    fieldGoalsAttempted?: boolean | number
    freeThrowsAttempted?: boolean | number
    twoPointsPercentage?: boolean | number
    fieldGoalsPercentage?: boolean | number
    freeThrowsPercentage?: boolean | number
    threePointsAttempted?: boolean | number
    threePointsPercentage?: boolean | number
    efficiency?: boolean | number
    true_shooting_attempts?: boolean | number
    points_in_paint_made?: boolean | number
    points_in_paint_attempted?: boolean | number
    points_in_paint?: boolean | number
    fouls_drawn?: boolean | number
    offensive_fouls?: boolean | number
    fast_break_points?: boolean | number
    fast_break_points_attempted?: boolean | number
    fast_break_points_made?: boolean | number
    second_chance_points?: boolean | number
    second_chance_points_attempted?: boolean | number
    second_chance_points_made?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StringTupleGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubmitVoteForPollInput {pollID: Scalars['ID'],playID: Scalars['ID']}

export interface SubmitVoteForPollResponseGenqlSelection{
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SyncableGenqlSelection{
    id?: boolean | number
    version?: boolean | number
    on_Edition?: EditionGenqlSelection
    on_EditionListing?: EditionListingGenqlSelection
    on_MarketplaceTransaction?: MarketplaceTransactionGenqlSelection
    on_MintedMoment?: MintedMomentGenqlSelection
    on_MomentGroup?: MomentGroupGenqlSelection
    on_MomentListing?: MomentListingGenqlSelection
    on_OnChainPack?: OnChainPackGenqlSelection
    on_Pack?: PackGenqlSelection
    on_PackListing?: PackListingGenqlSelection
    on_PacksForUserCollection?: PacksForUserCollectionGenqlSelection
    on_Play?: PlayGenqlSelection
    on_Set?: SetGenqlSelection
    on_Showcase?: ShowcaseGenqlSelection
    on_UserChallenge?: UserChallengeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TS50GenqlSelection{
    /** polls is a list of TS50 polls which are released in small increments. The product term is called waves. */
    polls?: PollGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TagGenqlSelection{
    id?: boolean | number
    /** @deprecated name is from an old tag definition that is no longer used */
    name?: boolean | number
    title?: boolean | number
    visible?: boolean | number
    hardcourt?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamCollectionFiltersGenqlSelection{
    bySeries?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamCollectionFiltersInput {bySeries?: (SeriesFilter | null)}

export interface TeamCompletionPlayerGenqlSelection{
    playerId?: boolean | number
    playerName?: boolean | number
    owned?: boolean | number
    locked?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamCompletionProgressGenqlSelection{
    ownedPlayerCount?: boolean | number
    lockedPlayerCount?: boolean | number
    requiredCount?: boolean | number
    teamId?: boolean | number
    players?: TeamCompletionPlayerGenqlSelection
    bonusPointsAvailable?: boolean | number
    bonusPointsEarned?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamLeaderboardGenqlSelection{
    id?: boolean | number
    kind?: boolean | number
    entries?: LeaderboardUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamScoresByQuarterGenqlSelection{
    quarterScores?: QuarterScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamSeriesCompletionProgressGenqlSelection{
    ownedPlayerCount?: boolean | number
    lockedPlayerCount?: boolean | number
    requiredCount?: boolean | number
    teamId?: boolean | number
    flowSeriesNumber?: boolean | number
    players?: TeamCompletionPlayerGenqlSelection
    bonusPointsAvailable?: boolean | number
    bonusPointsEarned?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamSeriesCompletionProgressBucketGenqlSelection{
    teamId?: boolean | number
    seriesProgress?: TeamSeriesCompletionProgressGenqlSelection
    contemporaryProgress?: TeamCompletionProgressGenqlSelection
    allProgress?: TeamCompletionProgressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamsGenqlSelection{
    size?: boolean | number
    data?: TeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TitleGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    category?: TitleCategoryGenqlSelection
    collectorCount?: boolean | number
    collectorFraction?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TitleCategoryGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TopshotScoreGenqlSelection{
    dapperID?: boolean | number
    score?: boolean | number
    momentCount?: boolean | number
    bonusData?: TopshotScoreBonusDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TopshotScoreBonusGenqlSelection{
    bonusID?: boolean | number
    bonusPts?: boolean | number
    qualified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TopshotScoreBonusDataGenqlSelection{
    name?: boolean | number
    bonusTotal?: boolean | number
    bonuses?: TopshotScoreBonusGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TopshotScoreFilters {byTeamIDs?: ((Scalars['ID'] | null)[] | null),byPlayerIDs?: ((Scalars['ID'] | null)[] | null)}

export interface TopshotScoreRequestBonusGroup {name: Scalars['String'],bonusIds?: (TopshotScoreBonusID[] | null)}

export interface TotalBurnedMomentCountByRarityGenqlSelection{
    momentTier?: boolean | number
    momentCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TransferPacksInput {packIDs: Scalars['String'][],receiverDapperID: Scalars['String']}

export interface TransferPacksResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UnhideOffersInput {offerIDs?: (Scalars['Int'][] | null)}

export interface UnhideOffersResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UnpinMomentInput {momentID: Scalars['String']}

export interface UnpinMomentResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateMomentGroupInput {momentGroupID: Scalars['String'],name?: (Scalars['String'] | null),order?: (Scalars['Float'] | null)}

export interface UpdateMomentGroupResponseGenqlSelection{
    momentGroup?: MomentGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateNBAMarketingRequest {ip: Scalars['String'],email: Scalars['String'],nbaNewsletter: Scalars['Boolean']}

export interface UpdateNBAMarketingResponseGenqlSelection{
    isSuccess?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateUserSettingsResponseGenqlSelection{
    userSettings?: UserSettingsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateVariableChallengeSubmissionInput {submissionID: Scalars['ID'],challengeID: Scalars['ID'],slots: VariableChallengeSubmissionSlotInput[]}

export interface UpdateWatchlistInput {id: Scalars['ID'],title: Scalars['String']}

export interface UpsertUserProfileInput {flowAddress?: (Scalars['String'] | null),dapperID: Scalars['String'],email: Scalars['String'],username?: (Scalars['String'] | null),profileImageUrl?: (Scalars['String'] | null),twitterHandle?: (Scalars['String'] | null),segmentId?: (Scalars['String'] | null),favoriteTeamID?: (Scalars['String'] | null),country?: (Scalars['String'] | null),city?: (Scalars['String'] | null)}

export interface UpsertUserProfileResponseGenqlSelection{
    dapperID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenqlSelection{
    sortID?: boolean | number
    dapperID?: boolean | number
    /** @deprecated email is not a public field, will always be blank, will be removed soon */
    email?: boolean | number
    flowAddress?: boolean | number
    username?: boolean | number
    profileImageUrl?: boolean | number
    twitterHandle?: boolean | number
    segmentID?: boolean | number
    country?: boolean | number
    city?: boolean | number
    topshotScore?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBallerStatusGenqlSelection{
    level?: BallerStatusLevelGenqlSelection
    totalPoints?: boolean | number
    milestones?: UserBallerStatusMilestoneGenqlSelection
    dapperID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBallerStatusMilestoneGenqlSelection{
    label?: boolean | number
    orderedTasks?: UserBallerStatusTaskGenqlSelection
    numCompletedActions?: boolean | number
    seenAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBallerStatusTaskGenqlSelection{
    points?: boolean | number
    status?: boolean | number
    numRequiredActions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBurnedMomentGenqlSelection{
    id?: boolean | number
    flowID?: boolean | number
    flowSerialNumber?: boolean | number
    subeditionID?: boolean | number
    assetPathPrefix?: boolean | number
    flowSeriesNumber?: boolean | number
    tier?: boolean | number
    flowName?: boolean | number
    visualID?: boolean | number
    playID?: boolean | number
    headline?: boolean | number
    circulationCount?: boolean | number
    username?: boolean | number
    profileImageURL?: boolean | number
    score?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBurnedMomentStatsGenqlSelection{
    username?: boolean | number
    profileImageURL?: boolean | number
    momentCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBurnedTopshotScoreGenqlSelection{
    username?: boolean | number
    profileImageURL?: boolean | number
    score?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserCampaignEventProgressGenqlSelection{
    timesCompleted?: boolean | number
    completedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserChallengeGenqlSelection{
    id?: boolean | number
    version?: boolean | number
    sortID?: boolean | number
    name?: boolean | number
    description?: boolean | number
    expirationDate?: boolean | number
    slots?: ChallengeSlotGenqlSelection
    reward?: ChallengeRewardGenqlSelection
    rewardStatus?: boolean | number
    numUsersCompleted?: boolean | number
    numUserSubmissions?: boolean | number
    type?: boolean | number
    variableChallenge?: VariableChallengeGenqlSelection
    userSubmission?: VariableChallengeSubmissionGenqlSelection
    visibility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserChallengesGenqlSelection{
    size?: boolean | number
    data?: UserChallengeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserMomentListingGenqlSelection{
    id?: boolean | number
    version?: boolean | number
    price?: boolean | number
    moment?: MintedMomentGenqlSelection
    seller?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserMomentListingsGenqlSelection{
    set?: SetGenqlSelection
    play?: PlayGenqlSelection
    assetPathPrefix?: boolean | number
    version?: boolean | number
    priceRange?: PriceRangeGenqlSelection
    momentListings?: UserMomentListingGenqlSelection
    setPlay?: MintedSetPlayGenqlSelection
    /** @deprecated use flowRetired field found inside mintedSetPlay instead */
    circulationCount?: boolean | number
    /** @deprecated use flowRetired field found inside mintedSetPlay instead */
    flowRetired?: boolean | number
    momentListingCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserMomentListingsResponseGenqlSelection{
    data?: UserMomentListingsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserPackListingEligibilityGenqlSelection{
    isEligible?: boolean | number
    levels?: UserPackListingLevelEligibilityGenqlSelection
    maxOrderQuantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserPackListingLevelEligibilityGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    isEligible?: boolean | number
    requirements?: RequirementGenqlSelection
    maxOrderQuantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserPublicInfoGenqlSelection{
    dapperID?: boolean | number
    flowAddress?: boolean | number
    username?: boolean | number
    profileImageUrl?: boolean | number
    twitterHandle?: boolean | number
    createdAt?: boolean | number
    favoriteTeamID?: boolean | number
    country?: boolean | number
    city?: boolean | number
    successfulReferrals?: boolean | number
    ownedSpecialNFTTypes?: boolean | number
    collectorScore?: CollectorScoreGenqlSelection
    titles?: UserTitleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSearchFiltersGenqlSelection{
    country?: boolean | number
    city?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSearchSummaryGenqlSelection{
    filters?: UserSearchFiltersGenqlSelection
    sortBy?: boolean | number
    searchSummary?: SearchSummaryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSetAssociationGenqlSelection{
    sortID?: boolean | number
    setID?: boolean | number
    user?: UserPublicInfoGenqlSelection
    startedAt?: boolean | number
    completedAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSetAssociationFiltersGenqlSelection{
    byIsCompleted?: boolean | number
    bySets?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSetAssociationsGenqlSelection{
    size?: boolean | number
    data?: UserSetAssociationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSettingsGenqlSelection{
    notificationSettings?: NotificationSettingsGenqlSelection
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSettingsUpdateInput {notificationSettings?: (NotificationSettingsInput | null)}

export interface UserTitleGenqlSelection{
    dapperID?: boolean | number
    title?: TitleGenqlSelection
    isSelected?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserTopshotTagGenqlSelection{
    id?: boolean | number
    tagID?: boolean | number
    dapperID?: boolean | number
    title?: boolean | number
    rewardedFromTitle?: boolean | number
    description?: boolean | number
    imageURL?: boolean | number
    videoURL?: boolean | number
    slug?: boolean | number
    obtainedAt?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersGenqlSelection{
    size?: boolean | number
    data?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeGenqlSelection{
    id?: boolean | number
    Category?: boolean | number
    summary?: boolean | number
    finePrint?: boolean | number
    ribbonText?: boolean | number
    prize?: boolean | number
    startDate?: boolean | number
    assets?: VariableChallengeAssetsGenqlSelection
    prerequisites?: VariableChallengePrerequisitesGenqlSelection
    variableSlots?: VariableChallengeSlotGenqlSelection
    pageData?: VariableChallengePageDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeAssetsGenqlSelection{
    image?: boolean | number
    video?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengePageDataGenqlSelection{
    completedTitle?: boolean | number
    incompletedTitle?: boolean | number
    successDescription?: boolean | number
    successMedia?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengePrerequisitesGenqlSelection{
    prerequisites?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeSlotGenqlSelection{
    id?: boolean | number
    label?: boolean | number
    query?: VariableChallengeSlotQueryGenqlSelection
    slotOrder?: boolean | number
    helpText?: boolean | number
    slotType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeSlotQueryGenqlSelection{
    byPlayers?: boolean | number
    bySetPlayTagIDs?: boolean | number
    byPlayTagIDs?: boolean | number
    byPlayIDs?: boolean | number
    byTeams?: boolean | number
    bySets?: boolean | number
    bySeries?: boolean | number
    bySetVisuals?: boolean | number
    byMomentTiers?: boolean | number
    byPlayCategory?: boolean | number
    byActiveChallenge?: boolean | number
    byPrimaryPlayerPosition?: boolean | number
    byLeagues?: boolean | number
    byGameDate?: DateRangeFilterGenqlSelection
    byCreatedAt?: DateRangeFilterGenqlSelection
    byPrice?: PriceRangeFilterGenqlSelection
    byEditions?: EditionsFilterGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeSubmissionGenqlSelection{
    id?: boolean | number
    status?: boolean | number
    slots?: VariableChallengeSubmissionSlotGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeSubmissionResponseGenqlSelection{
    id?: boolean | number
    challengeID?: boolean | number
    slots?: VariableChallengeSubmissionSlotResponseGenqlSelection
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeSubmissionSlotGenqlSelection{
    id?: boolean | number
    slotID?: boolean | number
    momentID?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableChallengeSubmissionSlotInput {slotID: Scalars['ID'],momentID: Scalars['ID']}

export interface VariableChallengeSubmissionSlotResponseGenqlSelection{
    id?: boolean | number
    slotID?: boolean | number
    momentID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VendorMomentListingGenqlSelection{
    id?: boolean | number
    set?: SetGenqlSelection
    play?: PlayGenqlSelection
    version?: boolean | number
    price?: boolean | number
    assetPathPrefix?: boolean | number
    /** admin-set previous price for sale display */
    previousPrice?: boolean | number
    circulationCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WaitingRoomGenqlSelection{
    name?: boolean | number
    /** Whether the waiting room is active or not   */
    isActive?: boolean | number
    /** The timestamp at which waiting room is to be active */
    activeAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WatchedEditionGenqlSelection{
    sortID?: boolean | number
    playId?: boolean | number
    setId?: boolean | number
    watchlistId?: boolean | number
    watchersCount?: boolean | number
    edition?: EditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WatchedEditionFiltersGenqlSelection{
    byWatchlistID?: boolean | number
    byWatchlistDapperID?: boolean | number
    byWatchedEdition?: WatchedEditionGenqlSelection
    byWatchlistTitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WatchedEditionFiltersInput {byWatchlistID?: (Scalars['ID'][] | null),byWatchlistDapperID?: (Scalars['ID'][] | null),byWatchedEdition?: (WatchedEditionInput[] | null),byWatchlistTitle?: (Scalars['String'][] | null)}

export interface WatchedEditionInput {playID: Scalars['ID'],setID: Scalars['ID']}

export interface WatchedEditionsGenqlSelection{
    size?: boolean | number
    data?: WatchedEditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WatchlistGenqlSelection{
    id?: boolean | number
    dapperID?: boolean | number
    title?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WatchlistDataGenqlSelection{
    watcherCount?: boolean | number
    isWatchedByUser?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WatchlistResponseGenqlSelection{
    data?: WatchlistGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface authorizePackNFTsMintingResponseGenqlSelection{
    signature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface getUserProfileByUsernameInput {username: Scalars['String']}

export interface metadataGenqlSelection{
    on_AllstarSetMetadata?:AllstarSetMetadataGenqlSelection,
    __typename?: boolean | number
}


    const AccountFirstPurchaseAgeError_possibleTypes: string[] = ['AccountFirstPurchaseAgeError']
    export const isAccountFirstPurchaseAgeError = (obj?: { __typename?: any } | null): obj is AccountFirstPurchaseAgeError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountFirstPurchaseAgeError"')
      return AccountFirstPurchaseAgeError_possibleTypes.includes(obj.__typename)
    }
    


    const Activities_possibleTypes: string[] = ['Activities']
    export const isActivities = (obj?: { __typename?: any } | null): obj is Activities => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivities"')
      return Activities_possibleTypes.includes(obj.__typename)
    }
    


    const Activity_possibleTypes: string[] = ['Activity']
    export const isActivity = (obj?: { __typename?: any } | null): obj is Activity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivity"')
      return Activity_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityFilters_possibleTypes: string[] = ['ActivityFilters']
    export const isActivityFilters = (obj?: { __typename?: any } | null): obj is ActivityFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityFilters"')
      return ActivityFilters_possibleTypes.includes(obj.__typename)
    }
    


    const ActivitySubject_possibleTypes: string[] = ['PurchaseVendorMomentActivity','PurchaseP2PMomentActivity','P2PMomentListingActivity','P2PMomentListingCancellationActivity','P2PMomentListingSoldActivity','PurchasePackActivity','MomentTransferRequestActivity','MomentTransferReceivedActivity','MomentTradeInRequestActivity','MomentsTradeInRequestActivity','OfferAvailableActivity','OfferCompletedActivity','SpecialNftPurchasedActivity','SpecialNftSoldActivity']
    export const isActivitySubject = (obj?: { __typename?: any } | null): obj is ActivitySubject => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivitySubject"')
      return ActivitySubject_possibleTypes.includes(obj.__typename)
    }
    


    const AddEditionToWatchlistResponse_possibleTypes: string[] = ['AddEditionToWatchlistResponse']
    export const isAddEditionToWatchlistResponse = (obj?: { __typename?: any } | null): obj is AddEditionToWatchlistResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddEditionToWatchlistResponse"')
      return AddEditionToWatchlistResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AddMomentsToGroupsResponse_possibleTypes: string[] = ['AddMomentsToGroupsResponse']
    export const isAddMomentsToGroupsResponse = (obj?: { __typename?: any } | null): obj is AddMomentsToGroupsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddMomentsToGroupsResponse"')
      return AddMomentsToGroupsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AddUserMarketingCampaignResponse_possibleTypes: string[] = ['AddUserMarketingCampaignResponse']
    export const isAddUserMarketingCampaignResponse = (obj?: { __typename?: any } | null): obj is AddUserMarketingCampaignResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddUserMarketingCampaignResponse"')
      return AddUserMarketingCampaignResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AddUserReferralResponse_possibleTypes: string[] = ['AddUserReferralResponse']
    export const isAddUserReferralResponse = (obj?: { __typename?: any } | null): obj is AddUserReferralResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddUserReferralResponse"')
      return AddUserReferralResponse_possibleTypes.includes(obj.__typename)
    }
    


    const AllstarSetMetadata_possibleTypes: string[] = ['AllstarSetMetadata']
    export const isAllstarSetMetadata = (obj?: { __typename?: any } | null): obj is AllstarSetMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAllstarSetMetadata"')
      return AllstarSetMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const Auction_possibleTypes: string[] = ['Auction']
    export const isAuction = (obj?: { __typename?: any } | null): obj is Auction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuction"')
      return Auction_possibleTypes.includes(obj.__typename)
    }
    


    const AuthenticateResponse_possibleTypes: string[] = ['AuthenticateResponse']
    export const isAuthenticateResponse = (obj?: { __typename?: any } | null): obj is AuthenticateResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthenticateResponse"')
      return AuthenticateResponse_possibleTypes.includes(obj.__typename)
    }
    


    const BallerStatusLevel_possibleTypes: string[] = ['BallerStatusLevel']
    export const isBallerStatusLevel = (obj?: { __typename?: any } | null): obj is BallerStatusLevel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBallerStatusLevel"')
      return BallerStatusLevel_possibleTypes.includes(obj.__typename)
    }
    


    const BallerStatusLevels_possibleTypes: string[] = ['BallerStatusLevels']
    export const isBallerStatusLevels = (obj?: { __typename?: any } | null): obj is BallerStatusLevels => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBallerStatusLevels"')
      return BallerStatusLevels_possibleTypes.includes(obj.__typename)
    }
    


    const Bonus_possibleTypes: string[] = ['Bonus']
    export const isBonus = (obj?: { __typename?: any } | null): obj is Bonus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBonus"')
      return Bonus_possibleTypes.includes(obj.__typename)
    }
    


    const BurnedEdition_possibleTypes: string[] = ['BurnedEdition']
    export const isBurnedEdition = (obj?: { __typename?: any } | null): obj is BurnedEdition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBurnedEdition"')
      return BurnedEdition_possibleTypes.includes(obj.__typename)
    }
    


    const Campaign_possibleTypes: string[] = ['Campaign']
    export const isCampaign = (obj?: { __typename?: any } | null): obj is Campaign => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCampaign"')
      return Campaign_possibleTypes.includes(obj.__typename)
    }
    


    const CampaignEvent_possibleTypes: string[] = ['CampaignEvent']
    export const isCampaignEvent = (obj?: { __typename?: any } | null): obj is CampaignEvent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCampaignEvent"')
      return CampaignEvent_possibleTypes.includes(obj.__typename)
    }
    


    const CampaignReward_possibleTypes: string[] = ['CampaignReward']
    export const isCampaignReward = (obj?: { __typename?: any } | null): obj is CampaignReward => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCampaignReward"')
      return CampaignReward_possibleTypes.includes(obj.__typename)
    }
    


    const CancelMomentSaleResponse_possibleTypes: string[] = ['CancelMomentSaleResponse']
    export const isCancelMomentSaleResponse = (obj?: { __typename?: any } | null): obj is CancelMomentSaleResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCancelMomentSaleResponse"')
      return CancelMomentSaleResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CancelPurchasePackResponse_possibleTypes: string[] = ['CancelPurchasePackResponse']
    export const isCancelPurchasePackResponse = (obj?: { __typename?: any } | null): obj is CancelPurchasePackResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCancelPurchasePackResponse"')
      return CancelPurchasePackResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CancelReservationResponse_possibleTypes: string[] = ['CancelReservationResponse']
    export const isCancelReservationResponse = (obj?: { __typename?: any } | null): obj is CancelReservationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCancelReservationResponse"')
      return CancelReservationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ChallengeFilters_possibleTypes: string[] = ['ChallengeFilters']
    export const isChallengeFilters = (obj?: { __typename?: any } | null): obj is ChallengeFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChallengeFilters"')
      return ChallengeFilters_possibleTypes.includes(obj.__typename)
    }
    


    const ChallengeProgress_possibleTypes: string[] = ['ChallengeProgress']
    export const isChallengeProgress = (obj?: { __typename?: any } | null): obj is ChallengeProgress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChallengeProgress"')
      return ChallengeProgress_possibleTypes.includes(obj.__typename)
    }
    


    const ChallengeReward_possibleTypes: string[] = ['ChallengeReward']
    export const isChallengeReward = (obj?: { __typename?: any } | null): obj is ChallengeReward => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChallengeReward"')
      return ChallengeReward_possibleTypes.includes(obj.__typename)
    }
    


    const ChallengeSlot_possibleTypes: string[] = ['ChallengeSlot']
    export const isChallengeSlot = (obj?: { __typename?: any } | null): obj is ChallengeSlot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChallengeSlot"')
      return ChallengeSlot_possibleTypes.includes(obj.__typename)
    }
    


    const ChallengesProgress_possibleTypes: string[] = ['ChallengesProgress']
    export const isChallengesProgress = (obj?: { __typename?: any } | null): obj is ChallengesProgress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChallengesProgress"')
      return ChallengesProgress_possibleTypes.includes(obj.__typename)
    }
    


    const ChallengesSearchSummary_possibleTypes: string[] = ['ChallengesSearchSummary']
    export const isChallengesSearchSummary = (obj?: { __typename?: any } | null): obj is ChallengesSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChallengesSearchSummary"')
      return ChallengesSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const CheckActiveChallengeSubmissionsByMomentIDResponse_possibleTypes: string[] = ['CheckActiveChallengeSubmissionsByMomentIDResponse']
    export const isCheckActiveChallengeSubmissionsByMomentIDResponse = (obj?: { __typename?: any } | null): obj is CheckActiveChallengeSubmissionsByMomentIDResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckActiveChallengeSubmissionsByMomentIDResponse"')
      return CheckActiveChallengeSubmissionsByMomentIDResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CheckExistingP2POrdersResponse_possibleTypes: string[] = ['CheckExistingP2POrdersResponse']
    export const isCheckExistingP2POrdersResponse = (obj?: { __typename?: any } | null): obj is CheckExistingP2POrdersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckExistingP2POrdersResponse"')
      return CheckExistingP2POrdersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CodexFilters_possibleTypes: string[] = ['CodexFilters']
    export const isCodexFilters = (obj?: { __typename?: any } | null): obj is CodexFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCodexFilters"')
      return CodexFilters_possibleTypes.includes(obj.__typename)
    }
    


    const CodexSet_possibleTypes: string[] = ['CodexSet']
    export const isCodexSet = (obj?: { __typename?: any } | null): obj is CodexSet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCodexSet"')
      return CodexSet_possibleTypes.includes(obj.__typename)
    }
    


    const CodexSetWithEditions_possibleTypes: string[] = ['CodexSetWithEditions']
    export const isCodexSetWithEditions = (obj?: { __typename?: any } | null): obj is CodexSetWithEditions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCodexSetWithEditions"')
      return CodexSetWithEditions_possibleTypes.includes(obj.__typename)
    }
    


    const Collectible_possibleTypes: string[] = ['Collectible']
    export const isCollectible = (obj?: { __typename?: any } | null): obj is Collectible => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectible"')
      return Collectible_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorBonus_possibleTypes: string[] = ['CollectorBonus']
    export const isCollectorBonus = (obj?: { __typename?: any } | null): obj is CollectorBonus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorBonus"')
      return CollectorBonus_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorBonusData_possibleTypes: string[] = ['CollectorBonusData']
    export const isCollectorBonusData = (obj?: { __typename?: any } | null): obj is CollectorBonusData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorBonusData"')
      return CollectorBonusData_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorChallengeCounts_possibleTypes: string[] = ['CollectorChallengeCounts']
    export const isCollectorChallengeCounts = (obj?: { __typename?: any } | null): obj is CollectorChallengeCounts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorChallengeCounts"')
      return CollectorChallengeCounts_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorEdition_possibleTypes: string[] = ['CollectorEdition']
    export const isCollectorEdition = (obj?: { __typename?: any } | null): obj is CollectorEdition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorEdition"')
      return CollectorEdition_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorIntervalData_possibleTypes: string[] = ['CollectorIntervalData']
    export const isCollectorIntervalData = (obj?: { __typename?: any } | null): obj is CollectorIntervalData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorIntervalData"')
      return CollectorIntervalData_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorMoment_possibleTypes: string[] = ['CollectorMoment']
    export const isCollectorMoment = (obj?: { __typename?: any } | null): obj is CollectorMoment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorMoment"')
      return CollectorMoment_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorPlayerTeamData_possibleTypes: string[] = ['CollectorPlayerTeamData']
    export const isCollectorPlayerTeamData = (obj?: { __typename?: any } | null): obj is CollectorPlayerTeamData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorPlayerTeamData"')
      return CollectorPlayerTeamData_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorScore_possibleTypes: string[] = ['CollectorScore']
    export const isCollectorScore = (obj?: { __typename?: any } | null): obj is CollectorScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorScore"')
      return CollectorScore_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorScorePts_possibleTypes: string[] = ['CollectorScorePts']
    export const isCollectorScorePts = (obj?: { __typename?: any } | null): obj is CollectorScorePts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorScorePts"')
      return CollectorScorePts_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorScoreTeamCompletion_possibleTypes: string[] = ['CollectorScoreTeamCompletion']
    export const isCollectorScoreTeamCompletion = (obj?: { __typename?: any } | null): obj is CollectorScoreTeamCompletion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorScoreTeamCompletion"')
      return CollectorScoreTeamCompletion_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorSeriesCount_possibleTypes: string[] = ['CollectorSeriesCount']
    export const isCollectorSeriesCount = (obj?: { __typename?: any } | null): obj is CollectorSeriesCount => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorSeriesCount"')
      return CollectorSeriesCount_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorSeriesData_possibleTypes: string[] = ['CollectorSeriesData']
    export const isCollectorSeriesData = (obj?: { __typename?: any } | null): obj is CollectorSeriesData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorSeriesData"')
      return CollectorSeriesData_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorSetData_possibleTypes: string[] = ['CollectorSetData']
    export const isCollectorSetData = (obj?: { __typename?: any } | null): obj is CollectorSetData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorSetData"')
      return CollectorSetData_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorSpecialNFT_possibleTypes: string[] = ['CollectorSpecialNFT']
    export const isCollectorSpecialNFT = (obj?: { __typename?: any } | null): obj is CollectorSpecialNFT => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorSpecialNFT"')
      return CollectorSpecialNFT_possibleTypes.includes(obj.__typename)
    }
    


    const CollectorTeamSeriesCounts_possibleTypes: string[] = ['CollectorTeamSeriesCounts']
    export const isCollectorTeamSeriesCounts = (obj?: { __typename?: any } | null): obj is CollectorTeamSeriesCounts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectorTeamSeriesCounts"')
      return CollectorTeamSeriesCounts_possibleTypes.includes(obj.__typename)
    }
    


    const CompleteCampaignEventResponse_possibleTypes: string[] = ['CompleteCampaignEventResponse']
    export const isCompleteCampaignEventResponse = (obj?: { __typename?: any } | null): obj is CompleteCampaignEventResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCompleteCampaignEventResponse"')
      return CompleteCampaignEventResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CompletedUserChallenge_possibleTypes: string[] = ['CompletedUserChallenge']
    export const isCompletedUserChallenge = (obj?: { __typename?: any } | null): obj is CompletedUserChallenge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCompletedUserChallenge"')
      return CompletedUserChallenge_possibleTypes.includes(obj.__typename)
    }
    


    const ConfirmPackPurchaseResponse_possibleTypes: string[] = ['ConfirmPackPurchaseResponse']
    export const isConfirmPackPurchaseResponse = (obj?: { __typename?: any } | null): obj is ConfirmPackPurchaseResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfirmPackPurchaseResponse"')
      return ConfirmPackPurchaseResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CountSummary_possibleTypes: string[] = ['CountSummary']
    export const isCountSummary = (obj?: { __typename?: any } | null): obj is CountSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCountSummary"')
      return CountSummary_possibleTypes.includes(obj.__typename)
    }
    


    const CreateBulkMomentTradeInRequestResponse_possibleTypes: string[] = ['CreateBulkMomentTradeInRequestResponse']
    export const isCreateBulkMomentTradeInRequestResponse = (obj?: { __typename?: any } | null): obj is CreateBulkMomentTradeInRequestResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateBulkMomentTradeInRequestResponse"')
      return CreateBulkMomentTradeInRequestResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CreateDropSquadResponse_possibleTypes: string[] = ['CreateDropSquadResponse']
    export const isCreateDropSquadResponse = (obj?: { __typename?: any } | null): obj is CreateDropSquadResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateDropSquadResponse"')
      return CreateDropSquadResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CreateMomentGroupResponse_possibleTypes: string[] = ['CreateMomentGroupResponse']
    export const isCreateMomentGroupResponse = (obj?: { __typename?: any } | null): obj is CreateMomentGroupResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateMomentGroupResponse"')
      return CreateMomentGroupResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CreateMomentSaleResponse_possibleTypes: string[] = ['CreateMomentSaleResponse']
    export const isCreateMomentSaleResponse = (obj?: { __typename?: any } | null): obj is CreateMomentSaleResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateMomentSaleResponse"')
      return CreateMomentSaleResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CreateMomentTradeInRequestResponse_possibleTypes: string[] = ['CreateMomentTradeInRequestResponse']
    export const isCreateMomentTradeInRequestResponse = (obj?: { __typename?: any } | null): obj is CreateMomentTradeInRequestResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateMomentTradeInRequestResponse"')
      return CreateMomentTradeInRequestResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CreateMomentTransferRequestResponse_possibleTypes: string[] = ['CreateMomentTransferRequestResponse']
    export const isCreateMomentTransferRequestResponse = (obj?: { __typename?: any } | null): obj is CreateMomentTransferRequestResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateMomentTransferRequestResponse"')
      return CreateMomentTransferRequestResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CreateMomentTransferRequestResult_possibleTypes: string[] = ['CreateMomentTransferRequestSuccess','AccountFirstPurchaseAgeError','MomentAgeError','InsufficientMomentsError']
    export const isCreateMomentTransferRequestResult = (obj?: { __typename?: any } | null): obj is CreateMomentTransferRequestResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateMomentTransferRequestResult"')
      return CreateMomentTransferRequestResult_possibleTypes.includes(obj.__typename)
    }
    


    const CreateMomentTransferRequestSuccess_possibleTypes: string[] = ['CreateMomentTransferRequestSuccess']
    export const isCreateMomentTransferRequestSuccess = (obj?: { __typename?: any } | null): obj is CreateMomentTransferRequestSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateMomentTransferRequestSuccess"')
      return CreateMomentTransferRequestSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const CreatePackPurchaseIntentResponse_possibleTypes: string[] = ['CreatePackPurchaseIntentResponse']
    export const isCreatePackPurchaseIntentResponse = (obj?: { __typename?: any } | null): obj is CreatePackPurchaseIntentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreatePackPurchaseIntentResponse"')
      return CreatePackPurchaseIntentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const DateRangeFilter_possibleTypes: string[] = ['DateRangeFilter']
    export const isDateRangeFilter = (obj?: { __typename?: any } | null): obj is DateRangeFilter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDateRangeFilter"')
      return DateRangeFilter_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteMomentGroupResponse_possibleTypes: string[] = ['DeleteMomentGroupResponse']
    export const isDeleteMomentGroupResponse = (obj?: { __typename?: any } | null): obj is DeleteMomentGroupResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteMomentGroupResponse"')
      return DeleteMomentGroupResponse_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteShowcaseResponse_possibleTypes: string[] = ['DeleteShowcaseResponse']
    export const isDeleteShowcaseResponse = (obj?: { __typename?: any } | null): obj is DeleteShowcaseResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteShowcaseResponse"')
      return DeleteShowcaseResponse_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteWatchlistResponse_possibleTypes: string[] = ['DeleteWatchlistResponse']
    export const isDeleteWatchlistResponse = (obj?: { __typename?: any } | null): obj is DeleteWatchlistResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteWatchlistResponse"')
      return DeleteWatchlistResponse_possibleTypes.includes(obj.__typename)
    }
    


    const DropSquad_possibleTypes: string[] = ['DropSquad']
    export const isDropSquad = (obj?: { __typename?: any } | null): obj is DropSquad => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDropSquad"')
      return DropSquad_possibleTypes.includes(obj.__typename)
    }
    


    const DropSquadMember_possibleTypes: string[] = ['DropSquadMember']
    export const isDropSquadMember = (obj?: { __typename?: any } | null): obj is DropSquadMember => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDropSquadMember"')
      return DropSquadMember_possibleTypes.includes(obj.__typename)
    }
    


    const DuplicateMomentGroupResponse_possibleTypes: string[] = ['DuplicateMomentGroupResponse']
    export const isDuplicateMomentGroupResponse = (obj?: { __typename?: any } | null): obj is DuplicateMomentGroupResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDuplicateMomentGroupResponse"')
      return DuplicateMomentGroupResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Edition_possibleTypes: string[] = ['Edition']
    export const isEdition = (obj?: { __typename?: any } | null): obj is Edition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEdition"')
      return Edition_possibleTypes.includes(obj.__typename)
    }
    


    const EditionAverageSaleData_possibleTypes: string[] = ['EditionAverageSaleData']
    export const isEditionAverageSaleData = (obj?: { __typename?: any } | null): obj is EditionAverageSaleData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditionAverageSaleData"')
      return EditionAverageSaleData_possibleTypes.includes(obj.__typename)
    }
    


    const EditionFilters_possibleTypes: string[] = ['EditionFilters']
    export const isEditionFilters = (obj?: { __typename?: any } | null): obj is EditionFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditionFilters"')
      return EditionFilters_possibleTypes.includes(obj.__typename)
    }
    


    const EditionListing_possibleTypes: string[] = ['EditionListing']
    export const isEditionListing = (obj?: { __typename?: any } | null): obj is EditionListing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditionListing"')
      return EditionListing_possibleTypes.includes(obj.__typename)
    }
    


    const EditionListings_possibleTypes: string[] = ['EditionListings']
    export const isEditionListings = (obj?: { __typename?: any } | null): obj is EditionListings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditionListings"')
      return EditionListings_possibleTypes.includes(obj.__typename)
    }
    


    const EditionListingsFilters_possibleTypes: string[] = ['EditionListingsFilters']
    export const isEditionListingsFilters = (obj?: { __typename?: any } | null): obj is EditionListingsFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditionListingsFilters"')
      return EditionListingsFilters_possibleTypes.includes(obj.__typename)
    }
    


    const EditionSlot_possibleTypes: string[] = ['EditionSlot']
    export const isEditionSlot = (obj?: { __typename?: any } | null): obj is EditionSlot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditionSlot"')
      return EditionSlot_possibleTypes.includes(obj.__typename)
    }
    


    const Editions_possibleTypes: string[] = ['Editions']
    export const isEditions = (obj?: { __typename?: any } | null): obj is Editions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditions"')
      return Editions_possibleTypes.includes(obj.__typename)
    }
    


    const EditionsFilter_possibleTypes: string[] = ['EditionsFilter']
    export const isEditionsFilter = (obj?: { __typename?: any } | null): obj is EditionsFilter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEditionsFilter"')
      return EditionsFilter_possibleTypes.includes(obj.__typename)
    }
    


    const ElasticsearchResponse_possibleTypes: string[] = ['ElasticsearchResponse']
    export const isElasticsearchResponse = (obj?: { __typename?: any } | null): obj is ElasticsearchResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isElasticsearchResponse"')
      return ElasticsearchResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ElasticsearchResponseHits_possibleTypes: string[] = ['ElasticsearchResponseHits']
    export const isElasticsearchResponseHits = (obj?: { __typename?: any } | null): obj is ElasticsearchResponseHits => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isElasticsearchResponseHits"')
      return ElasticsearchResponseHits_possibleTypes.includes(obj.__typename)
    }
    


    const ElasticsearchResponseHitsHits_possibleTypes: string[] = ['ElasticsearchResponseHitsHits']
    export const isElasticsearchResponseHitsHits = (obj?: { __typename?: any } | null): obj is ElasticsearchResponseHitsHits => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isElasticsearchResponseHitsHits"')
      return ElasticsearchResponseHitsHits_possibleTypes.includes(obj.__typename)
    }
    


    const ElasticsearchResponseHitsTotal_possibleTypes: string[] = ['ElasticsearchResponseHitsTotal']
    export const isElasticsearchResponseHitsTotal = (obj?: { __typename?: any } | null): obj is ElasticsearchResponseHitsTotal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isElasticsearchResponseHitsTotal"')
      return ElasticsearchResponseHitsTotal_possibleTypes.includes(obj.__typename)
    }
    


    const ExchangeRate_possibleTypes: string[] = ['ExchangeRate']
    export const isExchangeRate = (obj?: { __typename?: any } | null): obj is ExchangeRate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExchangeRate"')
      return ExchangeRate_possibleTypes.includes(obj.__typename)
    }
    


    const ExchangeRefreshTokenResponse_possibleTypes: string[] = ['ExchangeRefreshTokenResponse']
    export const isExchangeRefreshTokenResponse = (obj?: { __typename?: any } | null): obj is ExchangeRefreshTokenResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExchangeRefreshTokenResponse"')
      return ExchangeRefreshTokenResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Expression_possibleTypes: string[] = ['Expression']
    export const isExpression = (obj?: { __typename?: any } | null): obj is Expression => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExpression"')
      return Expression_possibleTypes.includes(obj.__typename)
    }
    


    const FirstPurchaseReferral_possibleTypes: string[] = ['FirstPurchaseReferral']
    export const isFirstPurchaseReferral = (obj?: { __typename?: any } | null): obj is FirstPurchaseReferral => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFirstPurchaseReferral"')
      return FirstPurchaseReferral_possibleTypes.includes(obj.__typename)
    }
    


    const GetActiveChallengesResponse_possibleTypes: string[] = ['GetActiveChallengesResponse']
    export const isGetActiveChallengesResponse = (obj?: { __typename?: any } | null): obj is GetActiveChallengesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetActiveChallengesResponse"')
      return GetActiveChallengesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetActiveUserSubmissionsByMomentIDsResponse_possibleTypes: string[] = ['GetActiveUserSubmissionsByMomentIDsResponse']
    export const isGetActiveUserSubmissionsByMomentIDsResponse = (obj?: { __typename?: any } | null): obj is GetActiveUserSubmissionsByMomentIDsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetActiveUserSubmissionsByMomentIDsResponse"')
      return GetActiveUserSubmissionsByMomentIDsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetActivityResponse_possibleTypes: string[] = ['GetActivityResponse']
    export const isGetActivityResponse = (obj?: { __typename?: any } | null): obj is GetActivityResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetActivityResponse"')
      return GetActivityResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetCodexResponse_possibleTypes: string[] = ['GetCodexResponse']
    export const isGetCodexResponse = (obj?: { __typename?: any } | null): obj is GetCodexResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetCodexResponse"')
      return GetCodexResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetCodexSetResponse_possibleTypes: string[] = ['GetCodexSetResponse']
    export const isGetCodexSetResponse = (obj?: { __typename?: any } | null): obj is GetCodexSetResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetCodexSetResponse"')
      return GetCodexSetResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetDropEligibilityResponse_possibleTypes: string[] = ['GetDropEligibilityResponse']
    export const isGetDropEligibilityResponse = (obj?: { __typename?: any } | null): obj is GetDropEligibilityResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetDropEligibilityResponse"')
      return GetDropEligibilityResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetEditionListingResponse_possibleTypes: string[] = ['GetEditionListingResponse']
    export const isGetEditionListingResponse = (obj?: { __typename?: any } | null): obj is GetEditionListingResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetEditionListingResponse"')
      return GetEditionListingResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetEditionResponse_possibleTypes: string[] = ['GetEditionResponse']
    export const isGetEditionResponse = (obj?: { __typename?: any } | null): obj is GetEditionResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetEditionResponse"')
      return GetEditionResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetEditionsWatcherCountResponse_possibleTypes: string[] = ['GetEditionsWatcherCountResponse']
    export const isGetEditionsWatcherCountResponse = (obj?: { __typename?: any } | null): obj is GetEditionsWatcherCountResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetEditionsWatcherCountResponse"')
      return GetEditionsWatcherCountResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetExchangeRatesResponse_possibleTypes: string[] = ['GetExchangeRatesResponse']
    export const isGetExchangeRatesResponse = (obj?: { __typename?: any } | null): obj is GetExchangeRatesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetExchangeRatesResponse"')
      return GetExchangeRatesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetGiftedMomentURLResponse_possibleTypes: string[] = ['GetGiftedMomentURLResponse']
    export const isGetGiftedMomentURLResponse = (obj?: { __typename?: any } | null): obj is GetGiftedMomentURLResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetGiftedMomentURLResponse"')
      return GetGiftedMomentURLResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetHotEditionListingsResponse_possibleTypes: string[] = ['GetHotEditionListingsResponse']
    export const isGetHotEditionListingsResponse = (obj?: { __typename?: any } | null): obj is GetHotEditionListingsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetHotEditionListingsResponse"')
      return GetHotEditionListingsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetKYCStatusResponse_possibleTypes: string[] = ['GetKYCStatusResponse']
    export const isGetKYCStatusResponse = (obj?: { __typename?: any } | null): obj is GetKYCStatusResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetKYCStatusResponse"')
      return GetKYCStatusResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetLeaderboardEntryRelationshipResponse_possibleTypes: string[] = ['GetLeaderboardEntryRelationshipResponse']
    export const isGetLeaderboardEntryRelationshipResponse = (obj?: { __typename?: any } | null): obj is GetLeaderboardEntryRelationshipResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetLeaderboardEntryRelationshipResponse"')
      return GetLeaderboardEntryRelationshipResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetLeaderboardEntryResponse_possibleTypes: string[] = ['GetLeaderboardEntryResponse']
    export const isGetLeaderboardEntryResponse = (obj?: { __typename?: any } | null): obj is GetLeaderboardEntryResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetLeaderboardEntryResponse"')
      return GetLeaderboardEntryResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetLeaderboardPotentialResponse_possibleTypes: string[] = ['GetLeaderboardPotentialResponse']
    export const isGetLeaderboardPotentialResponse = (obj?: { __typename?: any } | null): obj is GetLeaderboardPotentialResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetLeaderboardPotentialResponse"')
      return GetLeaderboardPotentialResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetLeaderboardResponse_possibleTypes: string[] = ['GetLeaderboardResponse']
    export const isGetLeaderboardResponse = (obj?: { __typename?: any } | null): obj is GetLeaderboardResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetLeaderboardResponse"')
      return GetLeaderboardResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMarketplaceTransactionEditionStatsResponse_possibleTypes: string[] = ['GetMarketplaceTransactionEditionStatsResponse']
    export const isGetMarketplaceTransactionEditionStatsResponse = (obj?: { __typename?: any } | null): obj is GetMarketplaceTransactionEditionStatsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMarketplaceTransactionEditionStatsResponse"')
      return GetMarketplaceTransactionEditionStatsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMintedMomentProgressForQuestResponse_possibleTypes: string[] = ['GetMintedMomentProgressForQuestResponse']
    export const isGetMintedMomentProgressForQuestResponse = (obj?: { __typename?: any } | null): obj is GetMintedMomentProgressForQuestResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMintedMomentProgressForQuestResponse"')
      return GetMintedMomentProgressForQuestResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMintedMomentsResponse_possibleTypes: string[] = ['GetMintedMomentsResponse']
    export const isGetMintedMomentsResponse = (obj?: { __typename?: any } | null): obj is GetMintedMomentsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMintedMomentsResponse"')
      return GetMintedMomentsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMomentGroupResponse_possibleTypes: string[] = ['GetMomentGroupResponse']
    export const isGetMomentGroupResponse = (obj?: { __typename?: any } | null): obj is GetMomentGroupResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMomentGroupResponse"')
      return GetMomentGroupResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMomentTradeInRequestResponse_possibleTypes: string[] = ['GetMomentTradeInRequestResponse']
    export const isGetMomentTradeInRequestResponse = (obj?: { __typename?: any } | null): obj is GetMomentTradeInRequestResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMomentTradeInRequestResponse"')
      return GetMomentTradeInRequestResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMomentTransferRequestResponse_possibleTypes: string[] = ['GetMomentTransferRequestResponse']
    export const isGetMomentTransferRequestResponse = (obj?: { __typename?: any } | null): obj is GetMomentTransferRequestResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMomentTransferRequestResponse"')
      return GetMomentTransferRequestResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMomentsTradeInRequestResponse_possibleTypes: string[] = ['GetMomentsTradeInRequestResponse']
    export const isGetMomentsTradeInRequestResponse = (obj?: { __typename?: any } | null): obj is GetMomentsTradeInRequestResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMomentsTradeInRequestResponse"')
      return GetMomentsTradeInRequestResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMomentsWithHighestBurnedTopshotScoreResponse_possibleTypes: string[] = ['GetMomentsWithHighestBurnedTopshotScoreResponse']
    export const isGetMomentsWithHighestBurnedTopshotScoreResponse = (obj?: { __typename?: any } | null): obj is GetMomentsWithHighestBurnedTopshotScoreResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMomentsWithHighestBurnedTopshotScoreResponse"')
      return GetMomentsWithHighestBurnedTopshotScoreResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMyActiveChallengesResponse_possibleTypes: string[] = ['GetMyActiveChallengesResponse']
    export const isGetMyActiveChallengesResponse = (obj?: { __typename?: any } | null): obj is GetMyActiveChallengesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMyActiveChallengesResponse"')
      return GetMyActiveChallengesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMyCompletedChallengesResponse_possibleTypes: string[] = ['GetMyCompletedChallengesResponse']
    export const isGetMyCompletedChallengesResponse = (obj?: { __typename?: any } | null): obj is GetMyCompletedChallengesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMyCompletedChallengesResponse"')
      return GetMyCompletedChallengesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMyProfileResponse_possibleTypes: string[] = ['GetMyProfileResponse']
    export const isGetMyProfileResponse = (obj?: { __typename?: any } | null): obj is GetMyProfileResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMyProfileResponse"')
      return GetMyProfileResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMyReferralResponse_possibleTypes: string[] = ['GetMyReferralResponse']
    export const isGetMyReferralResponse = (obj?: { __typename?: any } | null): obj is GetMyReferralResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMyReferralResponse"')
      return GetMyReferralResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetMyShowcasesResponse_possibleTypes: string[] = ['GetMyShowcasesResponse']
    export const isGetMyShowcasesResponse = (obj?: { __typename?: any } | null): obj is GetMyShowcasesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetMyShowcasesResponse"')
      return GetMyShowcasesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetOnChainPackResponse_possibleTypes: string[] = ['GetOnChainPackResponse']
    export const isGetOnChainPackResponse = (obj?: { __typename?: any } | null): obj is GetOnChainPackResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetOnChainPackResponse"')
      return GetOnChainPackResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetOrderResponse_possibleTypes: string[] = ['GetOrderResponse']
    export const isGetOrderResponse = (obj?: { __typename?: any } | null): obj is GetOrderResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetOrderResponse"')
      return GetOrderResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetPackListingEligibilityV2Response_possibleTypes: string[] = ['GetPackListingEligibilityV2Response']
    export const isGetPackListingEligibilityV2Response = (obj?: { __typename?: any } | null): obj is GetPackListingEligibilityV2Response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetPackListingEligibilityV2Response"')
      return GetPackListingEligibilityV2Response_possibleTypes.includes(obj.__typename)
    }
    


    const GetPackListingResponse_possibleTypes: string[] = ['GetPackListingResponse']
    export const isGetPackListingResponse = (obj?: { __typename?: any } | null): obj is GetPackListingResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetPackListingResponse"')
      return GetPackListingResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetPackSummaryProgressResponse_possibleTypes: string[] = ['GetPackSummaryProgressResponse']
    export const isGetPackSummaryProgressResponse = (obj?: { __typename?: any } | null): obj is GetPackSummaryProgressResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetPackSummaryProgressResponse"')
      return GetPackSummaryProgressResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetPacksResponse_possibleTypes: string[] = ['GetPacksResponse']
    export const isGetPacksResponse = (obj?: { __typename?: any } | null): obj is GetPacksResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetPacksResponse"')
      return GetPacksResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetPinnedMomentsResponse_possibleTypes: string[] = ['GetPinnedMomentsResponse']
    export const isGetPinnedMomentsResponse = (obj?: { __typename?: any } | null): obj is GetPinnedMomentsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetPinnedMomentsResponse"')
      return GetPinnedMomentsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetPlayResponse_possibleTypes: string[] = ['GetPlayResponse']
    export const isGetPlayResponse = (obj?: { __typename?: any } | null): obj is GetPlayResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetPlayResponse"')
      return GetPlayResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetPlayerDataWithCurrentStatsResponse_possibleTypes: string[] = ['GetPlayerDataWithCurrentStatsResponse']
    export const isGetPlayerDataWithCurrentStatsResponse = (obj?: { __typename?: any } | null): obj is GetPlayerDataWithCurrentStatsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetPlayerDataWithCurrentStatsResponse"')
      return GetPlayerDataWithCurrentStatsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetSetResponse_possibleTypes: string[] = ['GetSetResponse']
    export const isGetSetResponse = (obj?: { __typename?: any } | null): obj is GetSetResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetSetResponse"')
      return GetSetResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetSoftCurrencyPriceResponse_possibleTypes: string[] = ['GetSoftCurrencyPriceResponse']
    export const isGetSoftCurrencyPriceResponse = (obj?: { __typename?: any } | null): obj is GetSoftCurrencyPriceResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetSoftCurrencyPriceResponse"')
      return GetSoftCurrencyPriceResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetSpecialNFTResponse_possibleTypes: string[] = ['GetSpecialNFTResponse']
    export const isGetSpecialNFTResponse = (obj?: { __typename?: any } | null): obj is GetSpecialNFTResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetSpecialNFTResponse"')
      return GetSpecialNFTResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetSpecialNFTsResponse_possibleTypes: string[] = ['GetSpecialNFTsResponse']
    export const isGetSpecialNFTsResponse = (obj?: { __typename?: any } | null): obj is GetSpecialNFTsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetSpecialNFTsResponse"')
      return GetSpecialNFTsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTagsResponse_possibleTypes: string[] = ['GetTagsResponse']
    export const isGetTagsResponse = (obj?: { __typename?: any } | null): obj is GetTagsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTagsResponse"')
      return GetTagsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTeamSeriesCompletionProgressResponse_possibleTypes: string[] = ['GetTeamSeriesCompletionProgressResponse']
    export const isGetTeamSeriesCompletionProgressResponse = (obj?: { __typename?: any } | null): obj is GetTeamSeriesCompletionProgressResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTeamSeriesCompletionProgressResponse"')
      return GetTeamSeriesCompletionProgressResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTickerDataResponse_possibleTypes: string[] = ['GetTickerDataResponse']
    export const isGetTickerDataResponse = (obj?: { __typename?: any } | null): obj is GetTickerDataResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTickerDataResponse"')
      return GetTickerDataResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTitlesResponse_possibleTypes: string[] = ['GetTitlesResponse']
    export const isGetTitlesResponse = (obj?: { __typename?: any } | null): obj is GetTitlesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTitlesResponse"')
      return GetTitlesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTopNBurnedEditionsResponse_possibleTypes: string[] = ['GetTopNBurnedEditionsResponse']
    export const isGetTopNBurnedEditionsResponse = (obj?: { __typename?: any } | null): obj is GetTopNBurnedEditionsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTopNBurnedEditionsResponse"')
      return GetTopNBurnedEditionsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTopshotScoreAllTeamsSeriesCompletionProgressResponse_possibleTypes: string[] = ['GetTopshotScoreAllTeamsSeriesCompletionProgressResponse']
    export const isGetTopshotScoreAllTeamsSeriesCompletionProgressResponse = (obj?: { __typename?: any } | null): obj is GetTopshotScoreAllTeamsSeriesCompletionProgressResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTopshotScoreAllTeamsSeriesCompletionProgressResponse"')
      return GetTopshotScoreAllTeamsSeriesCompletionProgressResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTotalBurnedMomentCountByRarityResponse_possibleTypes: string[] = ['GetTotalBurnedMomentCountByRarityResponse']
    export const isGetTotalBurnedMomentCountByRarityResponse = (obj?: { __typename?: any } | null): obj is GetTotalBurnedMomentCountByRarityResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTotalBurnedMomentCountByRarityResponse"')
      return GetTotalBurnedMomentCountByRarityResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTotalBurnedMomentCountResponse_possibleTypes: string[] = ['GetTotalBurnedMomentCountResponse']
    export const isGetTotalBurnedMomentCountResponse = (obj?: { __typename?: any } | null): obj is GetTotalBurnedMomentCountResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTotalBurnedMomentCountResponse"')
      return GetTotalBurnedMomentCountResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTotalBurnedMomentsResponse_possibleTypes: string[] = ['GetTotalBurnedMomentsResponse']
    export const isGetTotalBurnedMomentsResponse = (obj?: { __typename?: any } | null): obj is GetTotalBurnedMomentsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTotalBurnedMomentsResponse"')
      return GetTotalBurnedMomentsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetTransferEligibilityResponse_possibleTypes: string[] = ['GetTransferEligibilityResponse']
    export const isGetTransferEligibilityResponse = (obj?: { __typename?: any } | null): obj is GetTransferEligibilityResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetTransferEligibilityResponse"')
      return GetTransferEligibilityResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserCodexResponse_possibleTypes: string[] = ['GetUserCodexResponse']
    export const isGetUserCodexResponse = (obj?: { __typename?: any } | null): obj is GetUserCodexResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserCodexResponse"')
      return GetUserCodexResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserCoolDownsResponse_possibleTypes: string[] = ['GetUserCoolDownsResponse']
    export const isGetUserCoolDownsResponse = (obj?: { __typename?: any } | null): obj is GetUserCoolDownsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserCoolDownsResponse"')
      return GetUserCoolDownsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserEligibilityForJoiningPackListingQueueResponse_possibleTypes: string[] = ['GetUserEligibilityForJoiningPackListingQueueResponse']
    export const isGetUserEligibilityForJoiningPackListingQueueResponse = (obj?: { __typename?: any } | null): obj is GetUserEligibilityForJoiningPackListingQueueResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserEligibilityForJoiningPackListingQueueResponse"')
      return GetUserEligibilityForJoiningPackListingQueueResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserOrdersResponse_possibleTypes: string[] = ['GetUserOrdersResponse']
    export const isGetUserOrdersResponse = (obj?: { __typename?: any } | null): obj is GetUserOrdersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserOrdersResponse"')
      return GetUserOrdersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserOwnedSpecialNFTsResponse_possibleTypes: string[] = ['GetUserOwnedSpecialNFTsResponse']
    export const isGetUserOwnedSpecialNFTsResponse = (obj?: { __typename?: any } | null): obj is GetUserOwnedSpecialNFTsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserOwnedSpecialNFTsResponse"')
      return GetUserOwnedSpecialNFTsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserP2PListingOrderResponse_possibleTypes: string[] = ['GetUserP2PListingOrderResponse']
    export const isGetUserP2PListingOrderResponse = (obj?: { __typename?: any } | null): obj is GetUserP2PListingOrderResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserP2PListingOrderResponse"')
      return GetUserP2PListingOrderResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserP2PListingOrdersResponse_possibleTypes: string[] = ['GetUserP2PListingOrdersResponse']
    export const isGetUserP2PListingOrdersResponse = (obj?: { __typename?: any } | null): obj is GetUserP2PListingOrdersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserP2PListingOrdersResponse"')
      return GetUserP2PListingOrdersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserP2PPurchaseOrderResponse_possibleTypes: string[] = ['GetUserP2PPurchaseOrderResponse']
    export const isGetUserP2PPurchaseOrderResponse = (obj?: { __typename?: any } | null): obj is GetUserP2PPurchaseOrderResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserP2PPurchaseOrderResponse"')
      return GetUserP2PPurchaseOrderResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserP2PPurchaseOrdersResponse_possibleTypes: string[] = ['GetUserP2PPurchaseOrdersResponse']
    export const isGetUserP2PPurchaseOrdersResponse = (obj?: { __typename?: any } | null): obj is GetUserP2PPurchaseOrdersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserP2PPurchaseOrdersResponse"')
      return GetUserP2PPurchaseOrdersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserPackOrderResponse_possibleTypes: string[] = ['GetUserPackOrderResponse']
    export const isGetUserPackOrderResponse = (obj?: { __typename?: any } | null): obj is GetUserPackOrderResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserPackOrderResponse"')
      return GetUserPackOrderResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserPackOrdersResponse_possibleTypes: string[] = ['GetUserPackOrdersResponse']
    export const isGetUserPackOrdersResponse = (obj?: { __typename?: any } | null): obj is GetUserPackOrdersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserPackOrdersResponse"')
      return GetUserPackOrdersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserPendingTxStatesResponse_possibleTypes: string[] = ['GetUserPendingTxStatesResponse']
    export const isGetUserPendingTxStatesResponse = (obj?: { __typename?: any } | null): obj is GetUserPendingTxStatesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserPendingTxStatesResponse"')
      return GetUserPendingTxStatesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserProfileResponse_possibleTypes: string[] = ['GetUserProfileResponse']
    export const isGetUserProfileResponse = (obj?: { __typename?: any } | null): obj is GetUserProfileResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserProfileResponse"')
      return GetUserProfileResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserPurchaseStatsResponse_possibleTypes: string[] = ['GetUserPurchaseStatsResponse']
    export const isGetUserPurchaseStatsResponse = (obj?: { __typename?: any } | null): obj is GetUserPurchaseStatsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserPurchaseStatsResponse"')
      return GetUserPurchaseStatsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserScoresForAllStarsBurningLeaderboardResponse_possibleTypes: string[] = ['GetUserScoresForAllStarsBurningLeaderboardResponse']
    export const isGetUserScoresForAllStarsBurningLeaderboardResponse = (obj?: { __typename?: any } | null): obj is GetUserScoresForAllStarsBurningLeaderboardResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserScoresForAllStarsBurningLeaderboardResponse"')
      return GetUserScoresForAllStarsBurningLeaderboardResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserScoresForRisingStarsLockingLeaderboardResponse_possibleTypes: string[] = ['GetUserScoresForRisingStarsLockingLeaderboardResponse']
    export const isGetUserScoresForRisingStarsLockingLeaderboardResponse = (obj?: { __typename?: any } | null): obj is GetUserScoresForRisingStarsLockingLeaderboardResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserScoresForRisingStarsLockingLeaderboardResponse"')
      return GetUserScoresForRisingStarsLockingLeaderboardResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserSettingsResponse_possibleTypes: string[] = ['GetUserSettingsResponse']
    export const isGetUserSettingsResponse = (obj?: { __typename?: any } | null): obj is GetUserSettingsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserSettingsResponse"')
      return GetUserSettingsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserShowcasesResponse_possibleTypes: string[] = ['GetUserShowcasesResponse']
    export const isGetUserShowcasesResponse = (obj?: { __typename?: any } | null): obj is GetUserShowcasesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserShowcasesResponse"')
      return GetUserShowcasesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserStatsByLocationResponse_possibleTypes: string[] = ['GetUserStatsByLocationResponse']
    export const isGetUserStatsByLocationResponse = (obj?: { __typename?: any } | null): obj is GetUserStatsByLocationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserStatsByLocationResponse"')
      return GetUserStatsByLocationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserTitlesResponse_possibleTypes: string[] = ['GetUserTitlesResponse']
    export const isGetUserTitlesResponse = (obj?: { __typename?: any } | null): obj is GetUserTitlesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserTitlesResponse"')
      return GetUserTitlesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserTopshotTagsResponse_possibleTypes: string[] = ['GetUserTopshotTagsResponse']
    export const isGetUserTopshotTagsResponse = (obj?: { __typename?: any } | null): obj is GetUserTopshotTagsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserTopshotTagsResponse"')
      return GetUserTopshotTagsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUsersWatchlistsResponse_possibleTypes: string[] = ['GetUsersWatchlistsResponse']
    export const isGetUsersWatchlistsResponse = (obj?: { __typename?: any } | null): obj is GetUsersWatchlistsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUsersWatchlistsResponse"')
      return GetUsersWatchlistsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUsersWithHighestBurnedTopshotScoreResponse_possibleTypes: string[] = ['GetUsersWithHighestBurnedTopshotScoreResponse']
    export const isGetUsersWithHighestBurnedTopshotScoreResponse = (obj?: { __typename?: any } | null): obj is GetUsersWithHighestBurnedTopshotScoreResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUsersWithHighestBurnedTopshotScoreResponse"')
      return GetUsersWithHighestBurnedTopshotScoreResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetUsersWithHighestNumberOfBurnedMomentsResponse_possibleTypes: string[] = ['GetUsersWithHighestNumberOfBurnedMomentsResponse']
    export const isGetUsersWithHighestNumberOfBurnedMomentsResponse = (obj?: { __typename?: any } | null): obj is GetUsersWithHighestNumberOfBurnedMomentsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUsersWithHighestNumberOfBurnedMomentsResponse"')
      return GetUsersWithHighestNumberOfBurnedMomentsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GetVendorMomentListingResponse_possibleTypes: string[] = ['GetVendorMomentListingResponse']
    export const isGetVendorMomentListingResponse = (obj?: { __typename?: any } | null): obj is GetVendorMomentListingResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetVendorMomentListingResponse"')
      return GetVendorMomentListingResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GiglabsAdditionalMetadata_possibleTypes: string[] = ['GiglabsAdditionalMetadata']
    export const isGiglabsAdditionalMetadata = (obj?: { __typename?: any } | null): obj is GiglabsAdditionalMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiglabsAdditionalMetadata"')
      return GiglabsAdditionalMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const GiglabsBadge_possibleTypes: string[] = ['GiglabsBadge']
    export const isGiglabsBadge = (obj?: { __typename?: any } | null): obj is GiglabsBadge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiglabsBadge"')
      return GiglabsBadge_possibleTypes.includes(obj.__typename)
    }
    


    const GiglabsBadgeToListingAssignment_possibleTypes: string[] = ['GiglabsBadgeToListingAssignment']
    export const isGiglabsBadgeToListingAssignment = (obj?: { __typename?: any } | null): obj is GiglabsBadgeToListingAssignment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiglabsBadgeToListingAssignment"')
      return GiglabsBadgeToListingAssignment_possibleTypes.includes(obj.__typename)
    }
    


    const GiglabsBid_possibleTypes: string[] = ['GiglabsBid']
    export const isGiglabsBid = (obj?: { __typename?: any } | null): obj is GiglabsBid => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiglabsBid"')
      return GiglabsBid_possibleTypes.includes(obj.__typename)
    }
    


    const GiglabsListingBidsResponse_possibleTypes: string[] = ['GiglabsListingBidsResponse']
    export const isGiglabsListingBidsResponse = (obj?: { __typename?: any } | null): obj is GiglabsListingBidsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiglabsListingBidsResponse"')
      return GiglabsListingBidsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GiglabsMarketPlaceListingResponse_possibleTypes: string[] = ['GiglabsMarketPlaceListingResponse']
    export const isGiglabsMarketPlaceListingResponse = (obj?: { __typename?: any } | null): obj is GiglabsMarketPlaceListingResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiglabsMarketPlaceListingResponse"')
      return GiglabsMarketPlaceListingResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GiglabsMarketPlaceListingsResponse_possibleTypes: string[] = ['GiglabsMarketPlaceListingsResponse']
    export const isGiglabsMarketPlaceListingsResponse = (obj?: { __typename?: any } | null): obj is GiglabsMarketPlaceListingsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiglabsMarketPlaceListingsResponse"')
      return GiglabsMarketPlaceListingsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const GroupMomentOrder_possibleTypes: string[] = ['GroupMomentOrder']
    export const isGroupMomentOrder = (obj?: { __typename?: any } | null): obj is GroupMomentOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupMomentOrder"')
      return GroupMomentOrder_possibleTypes.includes(obj.__typename)
    }
    


    const HasUnreadActivitiesResponse_possibleTypes: string[] = ['HasUnreadActivitiesResponse']
    export const isHasUnreadActivitiesResponse = (obj?: { __typename?: any } | null): obj is HasUnreadActivitiesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHasUnreadActivitiesResponse"')
      return HasUnreadActivitiesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const HideOffersResponse_possibleTypes: string[] = ['HideOffersResponse']
    export const isHideOffersResponse = (obj?: { __typename?: any } | null): obj is HideOffersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHideOffersResponse"')
      return HideOffersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const InsufficientMomentsError_possibleTypes: string[] = ['InsufficientMomentsError']
    export const isInsufficientMomentsError = (obj?: { __typename?: any } | null): obj is InsufficientMomentsError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInsufficientMomentsError"')
      return InsufficientMomentsError_possibleTypes.includes(obj.__typename)
    }
    


    const IntegerRangeFilter_possibleTypes: string[] = ['IntegerRangeFilter']
    export const isIntegerRangeFilter = (obj?: { __typename?: any } | null): obj is IntegerRangeFilter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegerRangeFilter"')
      return IntegerRangeFilter_possibleTypes.includes(obj.__typename)
    }
    


    const JoinDropSquadResponse_possibleTypes: string[] = ['JoinDropSquadResponse']
    export const isJoinDropSquadResponse = (obj?: { __typename?: any } | null): obj is JoinDropSquadResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isJoinDropSquadResponse"')
      return JoinDropSquadResponse_possibleTypes.includes(obj.__typename)
    }
    


    const KYCCached_possibleTypes: string[] = ['KYCCached']
    export const isKYCCached = (obj?: { __typename?: any } | null): obj is KYCCached => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isKYCCached"')
      return KYCCached_possibleTypes.includes(obj.__typename)
    }
    


    const Leaderboard_possibleTypes: string[] = ['PlayerLeaderboard','TeamLeaderboard']
    export const isLeaderboard = (obj?: { __typename?: any } | null): obj is Leaderboard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboard"')
      return Leaderboard_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardEntry_possibleTypes: string[] = ['LeaderboardUser']
    export const isLeaderboardEntry = (obj?: { __typename?: any } | null): obj is LeaderboardEntry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardEntry"')
      return LeaderboardEntry_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardEntryRelationship_possibleTypes: string[] = ['LeaderboardEntryRelationship']
    export const isLeaderboardEntryRelationship = (obj?: { __typename?: any } | null): obj is LeaderboardEntryRelationship => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardEntryRelationship"')
      return LeaderboardEntryRelationship_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardPotential_possibleTypes: string[] = ['LeaderboardPotential']
    export const isLeaderboardPotential = (obj?: { __typename?: any } | null): obj is LeaderboardPotential => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardPotential"')
      return LeaderboardPotential_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardUser_possibleTypes: string[] = ['LeaderboardUser']
    export const isLeaderboardUser = (obj?: { __typename?: any } | null): obj is LeaderboardUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardUser"')
      return LeaderboardUser_possibleTypes.includes(obj.__typename)
    }
    


    const LeaveDropSquadResponse_possibleTypes: string[] = ['LeaveDropSquadResponse']
    export const isLeaveDropSquadResponse = (obj?: { __typename?: any } | null): obj is LeaveDropSquadResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaveDropSquadResponse"')
      return LeaveDropSquadResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Level_possibleTypes: string[] = ['Level']
    export const isLevel = (obj?: { __typename?: any } | null): obj is Level => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevel"')
      return Level_possibleTypes.includes(obj.__typename)
    }
    


    const LevelEligibility_possibleTypes: string[] = ['LevelEligibility']
    export const isLevelEligibility = (obj?: { __typename?: any } | null): obj is LevelEligibility => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevelEligibility"')
      return LevelEligibility_possibleTypes.includes(obj.__typename)
    }
    


    const ListingEligibility_possibleTypes: string[] = ['ListingEligibility']
    export const isListingEligibility = (obj?: { __typename?: any } | null): obj is ListingEligibility => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListingEligibility"')
      return ListingEligibility_possibleTypes.includes(obj.__typename)
    }
    


    const Location_possibleTypes: string[] = ['Location']
    export const isLocation = (obj?: { __typename?: any } | null): obj is Location => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocation"')
      return Location_possibleTypes.includes(obj.__typename)
    }
    


    const MarkActivitiesAsReadResponse_possibleTypes: string[] = ['MarkActivitiesAsReadResponse']
    export const isMarkActivitiesAsReadResponse = (obj?: { __typename?: any } | null): obj is MarkActivitiesAsReadResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarkActivitiesAsReadResponse"')
      return MarkActivitiesAsReadResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MarkAllActivitiesAsReadResponse_possibleTypes: string[] = ['MarkAllActivitiesAsReadResponse']
    export const isMarkAllActivitiesAsReadResponse = (obj?: { __typename?: any } | null): obj is MarkAllActivitiesAsReadResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarkAllActivitiesAsReadResponse"')
      return MarkAllActivitiesAsReadResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MarkAllUserTitlesAsSeenResponse_possibleTypes: string[] = ['MarkAllUserTitlesAsSeenResponse']
    export const isMarkAllUserTitlesAsSeenResponse = (obj?: { __typename?: any } | null): obj is MarkAllUserTitlesAsSeenResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarkAllUserTitlesAsSeenResponse"')
      return MarkAllUserTitlesAsSeenResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceTransaction_possibleTypes: string[] = ['MarketplaceTransaction']
    export const isMarketplaceTransaction = (obj?: { __typename?: any } | null): obj is MarketplaceTransaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceTransaction"')
      return MarketplaceTransaction_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceTransactionEditionStats_possibleTypes: string[] = ['MarketplaceTransactionEditionStats']
    export const isMarketplaceTransactionEditionStats = (obj?: { __typename?: any } | null): obj is MarketplaceTransactionEditionStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceTransactionEditionStats"')
      return MarketplaceTransactionEditionStats_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceTransactionFilters_possibleTypes: string[] = ['MarketplaceTransactionFilters']
    export const isMarketplaceTransactionFilters = (obj?: { __typename?: any } | null): obj is MarketplaceTransactionFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceTransactionFilters"')
      return MarketplaceTransactionFilters_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceTransactionSearchSummary_possibleTypes: string[] = ['MarketplaceTransactionSearchSummary']
    export const isMarketplaceTransactionSearchSummary = (obj?: { __typename?: any } | null): obj is MarketplaceTransactionSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceTransactionSearchSummary"')
      return MarketplaceTransactionSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceTransactionSearchSummaryResponse_possibleTypes: string[] = ['MarketplaceTransactionSearchSummaryResponse']
    export const isMarketplaceTransactionSearchSummaryResponse = (obj?: { __typename?: any } | null): obj is MarketplaceTransactionSearchSummaryResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceTransactionSearchSummaryResponse"')
      return MarketplaceTransactionSearchSummaryResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceTransactions_possibleTypes: string[] = ['MarketplaceTransactions']
    export const isMarketplaceTransactions = (obj?: { __typename?: any } | null): obj is MarketplaceTransactions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceTransactions"')
      return MarketplaceTransactions_possibleTypes.includes(obj.__typename)
    }
    


    const MaxOrderQuantityV2_possibleTypes: string[] = ['MaxOrderQuantityV2']
    export const isMaxOrderQuantityV2 = (obj?: { __typename?: any } | null): obj is MaxOrderQuantityV2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMaxOrderQuantityV2"')
      return MaxOrderQuantityV2_possibleTypes.includes(obj.__typename)
    }
    


    const Me_possibleTypes: string[] = ['Me']
    export const isMe = (obj?: { __typename?: any } | null): obj is Me => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMe"')
      return Me_possibleTypes.includes(obj.__typename)
    }
    


    const MintedMoment_possibleTypes: string[] = ['MintedMoment']
    export const isMintedMoment = (obj?: { __typename?: any } | null): obj is MintedMoment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMintedMoment"')
      return MintedMoment_possibleTypes.includes(obj.__typename)
    }
    


    const MintedMomentFilters_possibleTypes: string[] = ['MintedMomentFilters']
    export const isMintedMomentFilters = (obj?: { __typename?: any } | null): obj is MintedMomentFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMintedMomentFilters"')
      return MintedMomentFilters_possibleTypes.includes(obj.__typename)
    }
    


    const MintedMomentResponse_possibleTypes: string[] = ['MintedMomentResponse']
    export const isMintedMomentResponse = (obj?: { __typename?: any } | null): obj is MintedMomentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMintedMomentResponse"')
      return MintedMomentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MintedMomentSearchSummary_possibleTypes: string[] = ['MintedMomentSearchSummary']
    export const isMintedMomentSearchSummary = (obj?: { __typename?: any } | null): obj is MintedMomentSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMintedMomentSearchSummary"')
      return MintedMomentSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const MintedMoments_possibleTypes: string[] = ['MintedMoments']
    export const isMintedMoments = (obj?: { __typename?: any } | null): obj is MintedMoments => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMintedMoments"')
      return MintedMoments_possibleTypes.includes(obj.__typename)
    }
    


    const MintedSetPlay_possibleTypes: string[] = ['MintedSetPlay']
    export const isMintedSetPlay = (obj?: { __typename?: any } | null): obj is MintedSetPlay => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMintedSetPlay"')
      return MintedSetPlay_possibleTypes.includes(obj.__typename)
    }
    


    const MintedSetPlayParallel_possibleTypes: string[] = ['MintedSetPlayParallel']
    export const isMintedSetPlayParallel = (obj?: { __typename?: any } | null): obj is MintedSetPlayParallel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMintedSetPlayParallel"')
      return MintedSetPlayParallel_possibleTypes.includes(obj.__typename)
    }
    


    const MomentAgeError_possibleTypes: string[] = ['MomentAgeError']
    export const isMomentAgeError = (obj?: { __typename?: any } | null): obj is MomentAgeError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentAgeError"')
      return MomentAgeError_possibleTypes.includes(obj.__typename)
    }
    


    const MomentCountPerTeam_possibleTypes: string[] = ['MomentCountPerTeam']
    export const isMomentCountPerTeam = (obj?: { __typename?: any } | null): obj is MomentCountPerTeam => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentCountPerTeam"')
      return MomentCountPerTeam_possibleTypes.includes(obj.__typename)
    }
    


    const MomentGroup_possibleTypes: string[] = ['MomentGroup']
    export const isMomentGroup = (obj?: { __typename?: any } | null): obj is MomentGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentGroup"')
      return MomentGroup_possibleTypes.includes(obj.__typename)
    }
    


    const MomentGroups_possibleTypes: string[] = ['MomentGroups']
    export const isMomentGroups = (obj?: { __typename?: any } | null): obj is MomentGroups => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentGroups"')
      return MomentGroups_possibleTypes.includes(obj.__typename)
    }
    


    const MomentListing_possibleTypes: string[] = ['MomentListing']
    export const isMomentListing = (obj?: { __typename?: any } | null): obj is MomentListing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentListing"')
      return MomentListing_possibleTypes.includes(obj.__typename)
    }
    


    const MomentListingFilters_possibleTypes: string[] = ['MomentListingFilters']
    export const isMomentListingFilters = (obj?: { __typename?: any } | null): obj is MomentListingFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentListingFilters"')
      return MomentListingFilters_possibleTypes.includes(obj.__typename)
    }
    


    const MomentListings_possibleTypes: string[] = ['MomentListings']
    export const isMomentListings = (obj?: { __typename?: any } | null): obj is MomentListings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentListings"')
      return MomentListings_possibleTypes.includes(obj.__typename)
    }
    


    const MomentListingsSearchSummary_possibleTypes: string[] = ['MomentListingsSearchSummary']
    export const isMomentListingsSearchSummary = (obj?: { __typename?: any } | null): obj is MomentListingsSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentListingsSearchSummary"')
      return MomentListingsSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const MomentListingsSearchSummaryResponse_possibleTypes: string[] = ['MomentListingsSearchSummaryResponse']
    export const isMomentListingsSearchSummaryResponse = (obj?: { __typename?: any } | null): obj is MomentListingsSearchSummaryResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentListingsSearchSummaryResponse"')
      return MomentListingsSearchSummaryResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MomentMediaURIResponse_possibleTypes: string[] = ['MomentMediaURIResponse']
    export const isMomentMediaURIResponse = (obj?: { __typename?: any } | null): obj is MomentMediaURIResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentMediaURIResponse"')
      return MomentMediaURIResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MomentOwner_possibleTypes: string[] = ['User','NonCustodialUser']
    export const isMomentOwner = (obj?: { __typename?: any } | null): obj is MomentOwner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentOwner"')
      return MomentOwner_possibleTypes.includes(obj.__typename)
    }
    


    const MomentSaleCSImpactData_possibleTypes: string[] = ['MomentSaleCSImpactData']
    export const isMomentSaleCSImpactData = (obj?: { __typename?: any } | null): obj is MomentSaleCSImpactData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentSaleCSImpactData"')
      return MomentSaleCSImpactData_possibleTypes.includes(obj.__typename)
    }
    


    const MomentTopshotScore_possibleTypes: string[] = ['MomentTopshotScore']
    export const isMomentTopshotScore = (obj?: { __typename?: any } | null): obj is MomentTopshotScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentTopshotScore"')
      return MomentTopshotScore_possibleTypes.includes(obj.__typename)
    }
    


    const MomentTradeInRequest_possibleTypes: string[] = ['MomentTradeInRequest']
    export const isMomentTradeInRequest = (obj?: { __typename?: any } | null): obj is MomentTradeInRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentTradeInRequest"')
      return MomentTradeInRequest_possibleTypes.includes(obj.__typename)
    }
    


    const MomentTradeInRequestActivity_possibleTypes: string[] = ['MomentTradeInRequestActivity']
    export const isMomentTradeInRequestActivity = (obj?: { __typename?: any } | null): obj is MomentTradeInRequestActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentTradeInRequestActivity"')
      return MomentTradeInRequestActivity_possibleTypes.includes(obj.__typename)
    }
    


    const MomentTransferReceivedActivity_possibleTypes: string[] = ['MomentTransferReceivedActivity']
    export const isMomentTransferReceivedActivity = (obj?: { __typename?: any } | null): obj is MomentTransferReceivedActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentTransferReceivedActivity"')
      return MomentTransferReceivedActivity_possibleTypes.includes(obj.__typename)
    }
    


    const MomentTransferRequest_possibleTypes: string[] = ['MomentTransferRequest']
    export const isMomentTransferRequest = (obj?: { __typename?: any } | null): obj is MomentTransferRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentTransferRequest"')
      return MomentTransferRequest_possibleTypes.includes(obj.__typename)
    }
    


    const MomentTransferRequestActivity_possibleTypes: string[] = ['MomentTransferRequestActivity']
    export const isMomentTransferRequestActivity = (obj?: { __typename?: any } | null): obj is MomentTransferRequestActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentTransferRequestActivity"')
      return MomentTransferRequestActivity_possibleTypes.includes(obj.__typename)
    }
    


    const MomentUsageData_possibleTypes: string[] = ['MomentUsageData']
    export const isMomentUsageData = (obj?: { __typename?: any } | null): obj is MomentUsageData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentUsageData"')
      return MomentUsageData_possibleTypes.includes(obj.__typename)
    }
    


    const MomentsFromPack_possibleTypes: string[] = ['MomentsFromPack']
    export const isMomentsFromPack = (obj?: { __typename?: any } | null): obj is MomentsFromPack => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentsFromPack"')
      return MomentsFromPack_possibleTypes.includes(obj.__typename)
    }
    


    const MomentsTradeInRequest_possibleTypes: string[] = ['MomentsTradeInRequest']
    export const isMomentsTradeInRequest = (obj?: { __typename?: any } | null): obj is MomentsTradeInRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentsTradeInRequest"')
      return MomentsTradeInRequest_possibleTypes.includes(obj.__typename)
    }
    


    const MomentsTradeInRequestActivity_possibleTypes: string[] = ['MomentsTradeInRequestActivity']
    export const isMomentsTradeInRequestActivity = (obj?: { __typename?: any } | null): obj is MomentsTradeInRequestActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMomentsTradeInRequestActivity"')
      return MomentsTradeInRequestActivity_possibleTypes.includes(obj.__typename)
    }
    


    const MostRecentEditionSale_possibleTypes: string[] = ['MostRecentEditionSale']
    export const isMostRecentEditionSale = (obj?: { __typename?: any } | null): obj is MostRecentEditionSale => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMostRecentEditionSale"')
      return MostRecentEditionSale_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const NftOwner_possibleTypes: string[] = ['User','NonCustodialUser']
    export const isNftOwner = (obj?: { __typename?: any } | null): obj is NftOwner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNftOwner"')
      return NftOwner_possibleTypes.includes(obj.__typename)
    }
    


    const NonCustodialUser_possibleTypes: string[] = ['NonCustodialUser']
    export const isNonCustodialUser = (obj?: { __typename?: any } | null): obj is NonCustodialUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNonCustodialUser"')
      return NonCustodialUser_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationSettings_possibleTypes: string[] = ['NotificationSettings']
    export const isNotificationSettings = (obj?: { __typename?: any } | null): obj is NotificationSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationSettings"')
      return NotificationSettings_possibleTypes.includes(obj.__typename)
    }
    


    const NumericTransferRequirement_possibleTypes: string[] = ['NumericTransferRequirement']
    export const isNumericTransferRequirement = (obj?: { __typename?: any } | null): obj is NumericTransferRequirement => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNumericTransferRequirement"')
      return NumericTransferRequirement_possibleTypes.includes(obj.__typename)
    }
    


    const Offer_possibleTypes: string[] = ['Offer']
    export const isOffer = (obj?: { __typename?: any } | null): obj is Offer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOffer"')
      return Offer_possibleTypes.includes(obj.__typename)
    }
    


    const OfferAvailableActivity_possibleTypes: string[] = ['OfferAvailableActivity']
    export const isOfferAvailableActivity = (obj?: { __typename?: any } | null): obj is OfferAvailableActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOfferAvailableActivity"')
      return OfferAvailableActivity_possibleTypes.includes(obj.__typename)
    }
    


    const OfferCompletedActivity_possibleTypes: string[] = ['OfferCompletedActivity']
    export const isOfferCompletedActivity = (obj?: { __typename?: any } | null): obj is OfferCompletedActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOfferCompletedActivity"')
      return OfferCompletedActivity_possibleTypes.includes(obj.__typename)
    }
    


    const Offers_possibleTypes: string[] = ['Offers']
    export const isOffers = (obj?: { __typename?: any } | null): obj is Offers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOffers"')
      return Offers_possibleTypes.includes(obj.__typename)
    }
    


    const OnChainPack_possibleTypes: string[] = ['OnChainPack']
    export const isOnChainPack = (obj?: { __typename?: any } | null): obj is OnChainPack => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOnChainPack"')
      return OnChainPack_possibleTypes.includes(obj.__typename)
    }
    


    const OpenPacksResponse_possibleTypes: string[] = ['OpenPacksResponse']
    export const isOpenPacksResponse = (obj?: { __typename?: any } | null): obj is OpenPacksResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOpenPacksResponse"')
      return OpenPacksResponse_possibleTypes.includes(obj.__typename)
    }
    


    const OpenPacksV2Response_possibleTypes: string[] = ['OpenPacksV2Response']
    export const isOpenPacksV2Response = (obj?: { __typename?: any } | null): obj is OpenPacksV2Response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOpenPacksV2Response"')
      return OpenPacksV2Response_possibleTypes.includes(obj.__typename)
    }
    


    const Order_possibleTypes: string[] = ['Order']
    export const isOrder = (obj?: { __typename?: any } | null): obj is Order => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrder"')
      return Order_possibleTypes.includes(obj.__typename)
    }
    


    const Orders_possibleTypes: string[] = ['Orders']
    export const isOrders = (obj?: { __typename?: any } | null): obj is Orders => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrders"')
      return Orders_possibleTypes.includes(obj.__typename)
    }
    


    const P2PListingOrder_possibleTypes: string[] = ['P2PListingOrder']
    export const isP2PListingOrder = (obj?: { __typename?: any } | null): obj is P2PListingOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isP2PListingOrder"')
      return P2PListingOrder_possibleTypes.includes(obj.__typename)
    }
    


    const P2PListingOrders_possibleTypes: string[] = ['P2PListingOrders']
    export const isP2PListingOrders = (obj?: { __typename?: any } | null): obj is P2PListingOrders => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isP2PListingOrders"')
      return P2PListingOrders_possibleTypes.includes(obj.__typename)
    }
    


    const P2PMomentListingActivity_possibleTypes: string[] = ['P2PMomentListingActivity']
    export const isP2PMomentListingActivity = (obj?: { __typename?: any } | null): obj is P2PMomentListingActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isP2PMomentListingActivity"')
      return P2PMomentListingActivity_possibleTypes.includes(obj.__typename)
    }
    


    const P2PMomentListingCancellationActivity_possibleTypes: string[] = ['P2PMomentListingCancellationActivity']
    export const isP2PMomentListingCancellationActivity = (obj?: { __typename?: any } | null): obj is P2PMomentListingCancellationActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isP2PMomentListingCancellationActivity"')
      return P2PMomentListingCancellationActivity_possibleTypes.includes(obj.__typename)
    }
    


    const P2PMomentListingSoldActivity_possibleTypes: string[] = ['P2PMomentListingSoldActivity']
    export const isP2PMomentListingSoldActivity = (obj?: { __typename?: any } | null): obj is P2PMomentListingSoldActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isP2PMomentListingSoldActivity"')
      return P2PMomentListingSoldActivity_possibleTypes.includes(obj.__typename)
    }
    


    const P2PPurchaseOrder_possibleTypes: string[] = ['P2PPurchaseOrder']
    export const isP2PPurchaseOrder = (obj?: { __typename?: any } | null): obj is P2PPurchaseOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isP2PPurchaseOrder"')
      return P2PPurchaseOrder_possibleTypes.includes(obj.__typename)
    }
    


    const P2PPurchaseOrders_possibleTypes: string[] = ['P2PPurchaseOrders']
    export const isP2PPurchaseOrders = (obj?: { __typename?: any } | null): obj is P2PPurchaseOrders => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isP2PPurchaseOrders"')
      return P2PPurchaseOrders_possibleTypes.includes(obj.__typename)
    }
    


    const Pack_possibleTypes: string[] = ['Pack']
    export const isPack = (obj?: { __typename?: any } | null): obj is Pack => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPack"')
      return Pack_possibleTypes.includes(obj.__typename)
    }
    


    const PackEdition_possibleTypes: string[] = ['PackEdition']
    export const isPackEdition = (obj?: { __typename?: any } | null): obj is PackEdition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackEdition"')
      return PackEdition_possibleTypes.includes(obj.__typename)
    }
    


    const PackEditionConnection_possibleTypes: string[] = ['PackEditionConnection']
    export const isPackEditionConnection = (obj?: { __typename?: any } | null): obj is PackEditionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackEditionConnection"')
      return PackEditionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PackEditionEdge_possibleTypes: string[] = ['PackEditionEdge']
    export const isPackEditionEdge = (obj?: { __typename?: any } | null): obj is PackEditionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackEditionEdge"')
      return PackEditionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PackFilters_possibleTypes: string[] = ['PackFilters']
    export const isPackFilters = (obj?: { __typename?: any } | null): obj is PackFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackFilters"')
      return PackFilters_possibleTypes.includes(obj.__typename)
    }
    


    const PackListing_possibleTypes: string[] = ['PackListing']
    export const isPackListing = (obj?: { __typename?: any } | null): obj is PackListing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackListing"')
      return PackListing_possibleTypes.includes(obj.__typename)
    }
    


    const PackListingFilters_possibleTypes: string[] = ['PackListingFilters']
    export const isPackListingFilters = (obj?: { __typename?: any } | null): obj is PackListingFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackListingFilters"')
      return PackListingFilters_possibleTypes.includes(obj.__typename)
    }
    


    const PackListingImage_possibleTypes: string[] = ['PackListingImage']
    export const isPackListingImage = (obj?: { __typename?: any } | null): obj is PackListingImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackListingImage"')
      return PackListingImage_possibleTypes.includes(obj.__typename)
    }
    


    const PackListingSlot_possibleTypes: string[] = ['PackListingSlot']
    export const isPackListingSlot = (obj?: { __typename?: any } | null): obj is PackListingSlot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackListingSlot"')
      return PackListingSlot_possibleTypes.includes(obj.__typename)
    }
    


    const PackListingTemplate_possibleTypes: string[] = ['PackListingTemplate']
    export const isPackListingTemplate = (obj?: { __typename?: any } | null): obj is PackListingTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackListingTemplate"')
      return PackListingTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const PackListings_possibleTypes: string[] = ['PackListings']
    export const isPackListings = (obj?: { __typename?: any } | null): obj is PackListings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackListings"')
      return PackListings_possibleTypes.includes(obj.__typename)
    }
    


    const PackListingsSearchSummary_possibleTypes: string[] = ['PackListingsSearchSummary']
    export const isPackListingsSearchSummary = (obj?: { __typename?: any } | null): obj is PackListingsSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackListingsSearchSummary"')
      return PackListingsSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const PackNFTHashResponse_possibleTypes: string[] = ['PackNFTHashResponse']
    export const isPackNFTHashResponse = (obj?: { __typename?: any } | null): obj is PackNFTHashResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackNFTHashResponse"')
      return PackNFTHashResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PackNFTHashesResponse_possibleTypes: string[] = ['PackNFTHashesResponse']
    export const isPackNFTHashesResponse = (obj?: { __typename?: any } | null): obj is PackNFTHashesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackNFTHashesResponse"')
      return PackNFTHashesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PackPurchaseOrder_possibleTypes: string[] = ['PackPurchaseOrder']
    export const isPackPurchaseOrder = (obj?: { __typename?: any } | null): obj is PackPurchaseOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackPurchaseOrder"')
      return PackPurchaseOrder_possibleTypes.includes(obj.__typename)
    }
    


    const PackPurchaseOrders_possibleTypes: string[] = ['PackPurchaseOrders']
    export const isPackPurchaseOrders = (obj?: { __typename?: any } | null): obj is PackPurchaseOrders => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackPurchaseOrders"')
      return PackPurchaseOrders_possibleTypes.includes(obj.__typename)
    }
    


    const PackReservation_possibleTypes: string[] = ['PackReservation']
    export const isPackReservation = (obj?: { __typename?: any } | null): obj is PackReservation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackReservation"')
      return PackReservation_possibleTypes.includes(obj.__typename)
    }
    


    const PackReservationPayment_possibleTypes: string[] = ['PackReservationPayment']
    export const isPackReservationPayment = (obj?: { __typename?: any } | null): obj is PackReservationPayment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackReservationPayment"')
      return PackReservationPayment_possibleTypes.includes(obj.__typename)
    }
    


    const PackSearchSummary_possibleTypes: string[] = ['PackSearchSummary']
    export const isPackSearchSummary = (obj?: { __typename?: any } | null): obj is PackSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackSearchSummary"')
      return PackSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const Packs_possibleTypes: string[] = ['Packs']
    export const isPacks = (obj?: { __typename?: any } | null): obj is Packs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPacks"')
      return Packs_possibleTypes.includes(obj.__typename)
    }
    


    const PacksForUserCollection_possibleTypes: string[] = ['PacksForUserCollection']
    export const isPacksForUserCollection = (obj?: { __typename?: any } | null): obj is PacksForUserCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPacksForUserCollection"')
      return PacksForUserCollection_possibleTypes.includes(obj.__typename)
    }
    


    const PacksForUserCollectionSearchSummary_possibleTypes: string[] = ['PacksForUserCollectionSearchSummary']
    export const isPacksForUserCollectionSearchSummary = (obj?: { __typename?: any } | null): obj is PacksForUserCollectionSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPacksForUserCollectionSearchSummary"')
      return PacksForUserCollectionSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const PacksForUserCollectionSearchSummaryResponse_possibleTypes: string[] = ['PacksForUserCollectionSearchSummaryResponse']
    export const isPacksForUserCollectionSearchSummaryResponse = (obj?: { __typename?: any } | null): obj is PacksForUserCollectionSearchSummaryResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPacksForUserCollectionSearchSummaryResponse"')
      return PacksForUserCollectionSearchSummaryResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PacksForUserCollections_possibleTypes: string[] = ['PacksForUserCollections']
    export const isPacksForUserCollections = (obj?: { __typename?: any } | null): obj is PacksForUserCollections => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPacksForUserCollections"')
      return PacksForUserCollections_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Pagination_possibleTypes: string[] = ['Pagination']
    export const isPagination = (obj?: { __typename?: any } | null): obj is Pagination => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPagination"')
      return Pagination_possibleTypes.includes(obj.__typename)
    }
    


    const PatchUserPreferencesResponse_possibleTypes: string[] = ['PatchUserPreferencesResponse']
    export const isPatchUserPreferencesResponse = (obj?: { __typename?: any } | null): obj is PatchUserPreferencesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPatchUserPreferencesResponse"')
      return PatchUserPreferencesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PintMomentResponse_possibleTypes: string[] = ['PintMomentResponse']
    export const isPintMomentResponse = (obj?: { __typename?: any } | null): obj is PintMomentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPintMomentResponse"')
      return PintMomentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Play_possibleTypes: string[] = ['Play']
    export const isPlay = (obj?: { __typename?: any } | null): obj is Play => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlay"')
      return Play_possibleTypes.includes(obj.__typename)
    }
    


    const PlayAssets_possibleTypes: string[] = ['PlayAssets']
    export const isPlayAssets = (obj?: { __typename?: any } | null): obj is PlayAssets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayAssets"')
      return PlayAssets_possibleTypes.includes(obj.__typename)
    }
    


    const PlayFilter_possibleTypes: string[] = ['PlayFilter']
    export const isPlayFilter = (obj?: { __typename?: any } | null): obj is PlayFilter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayFilter"')
      return PlayFilter_possibleTypes.includes(obj.__typename)
    }
    


    const PlayIDCountTuple_possibleTypes: string[] = ['PlayIDCountTuple']
    export const isPlayIDCountTuple = (obj?: { __typename?: any } | null): obj is PlayIDCountTuple => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayIDCountTuple"')
      return PlayIDCountTuple_possibleTypes.includes(obj.__typename)
    }
    


    const PlayImage_possibleTypes: string[] = ['PlayImage']
    export const isPlayImage = (obj?: { __typename?: any } | null): obj is PlayImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayImage"')
      return PlayImage_possibleTypes.includes(obj.__typename)
    }
    


    const PlaySearchSummary_possibleTypes: string[] = ['PlaySearchSummary']
    export const isPlaySearchSummary = (obj?: { __typename?: any } | null): obj is PlaySearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlaySearchSummary"')
      return PlaySearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const PlayStats_possibleTypes: string[] = ['PlayStats']
    export const isPlayStats = (obj?: { __typename?: any } | null): obj is PlayStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayStats"')
      return PlayStats_possibleTypes.includes(obj.__typename)
    }
    


    const PlayVideo_possibleTypes: string[] = ['PlayVideo']
    export const isPlayVideo = (obj?: { __typename?: any } | null): obj is PlayVideo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayVideo"')
      return PlayVideo_possibleTypes.includes(obj.__typename)
    }
    


    const Player_possibleTypes: string[] = ['Player']
    export const isPlayer = (obj?: { __typename?: any } | null): obj is Player => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayer"')
      return Player_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerData_possibleTypes: string[] = ['PlayerData']
    export const isPlayerData = (obj?: { __typename?: any } | null): obj is PlayerData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerData"')
      return PlayerData_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerGameScoresFilters_possibleTypes: string[] = ['PlayerGameScoresFilters']
    export const isPlayerGameScoresFilters = (obj?: { __typename?: any } | null): obj is PlayerGameScoresFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerGameScoresFilters"')
      return PlayerGameScoresFilters_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerLeaderboard_possibleTypes: string[] = ['PlayerLeaderboard']
    export const isPlayerLeaderboard = (obj?: { __typename?: any } | null): obj is PlayerLeaderboard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerLeaderboard"')
      return PlayerLeaderboard_possibleTypes.includes(obj.__typename)
    }
    


    const Players_possibleTypes: string[] = ['Players']
    export const isPlayers = (obj?: { __typename?: any } | null): obj is Players => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayers"')
      return Players_possibleTypes.includes(obj.__typename)
    }
    


    const Plays_possibleTypes: string[] = ['Plays']
    export const isPlays = (obj?: { __typename?: any } | null): obj is Plays => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlays"')
      return Plays_possibleTypes.includes(obj.__typename)
    }
    


    const Poll_possibleTypes: string[] = ['Poll']
    export const isPoll = (obj?: { __typename?: any } | null): obj is Poll => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPoll"')
      return Poll_possibleTypes.includes(obj.__typename)
    }
    


    const PollPlay_possibleTypes: string[] = ['PollPlay']
    export const isPollPlay = (obj?: { __typename?: any } | null): obj is PollPlay => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPollPlay"')
      return PollPlay_possibleTypes.includes(obj.__typename)
    }
    


    const PopulateOfferByTransactionResponse_possibleTypes: string[] = ['PopulateOfferByTransactionResponse']
    export const isPopulateOfferByTransactionResponse = (obj?: { __typename?: any } | null): obj is PopulateOfferByTransactionResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPopulateOfferByTransactionResponse"')
      return PopulateOfferByTransactionResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PriceRange_possibleTypes: string[] = ['PriceRange']
    export const isPriceRange = (obj?: { __typename?: any } | null): obj is PriceRange => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPriceRange"')
      return PriceRange_possibleTypes.includes(obj.__typename)
    }
    


    const PriceRangeFilter_possibleTypes: string[] = ['PriceRangeFilter']
    export const isPriceRangeFilter = (obj?: { __typename?: any } | null): obj is PriceRangeFilter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPriceRangeFilter"')
      return PriceRangeFilter_possibleTypes.includes(obj.__typename)
    }
    


    const PriceV2_possibleTypes: string[] = ['PriceV2']
    export const isPriceV2 = (obj?: { __typename?: any } | null): obj is PriceV2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPriceV2"')
      return PriceV2_possibleTypes.includes(obj.__typename)
    }
    


    const PurchaseAssetsWithDapperPaymentResponse_possibleTypes: string[] = ['PurchaseAssetsWithDapperPaymentResponse']
    export const isPurchaseAssetsWithDapperPaymentResponse = (obj?: { __typename?: any } | null): obj is PurchaseAssetsWithDapperPaymentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchaseAssetsWithDapperPaymentResponse"')
      return PurchaseAssetsWithDapperPaymentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PurchaseMomentWithSoftCurrencyResponse_possibleTypes: string[] = ['PurchaseMomentWithSoftCurrencyResponse']
    export const isPurchaseMomentWithSoftCurrencyResponse = (obj?: { __typename?: any } | null): obj is PurchaseMomentWithSoftCurrencyResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchaseMomentWithSoftCurrencyResponse"')
      return PurchaseMomentWithSoftCurrencyResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PurchaseP2PMomentActivity_possibleTypes: string[] = ['PurchaseP2PMomentActivity']
    export const isPurchaseP2PMomentActivity = (obj?: { __typename?: any } | null): obj is PurchaseP2PMomentActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchaseP2PMomentActivity"')
      return PurchaseP2PMomentActivity_possibleTypes.includes(obj.__typename)
    }
    


    const PurchaseP2PMomentResponse_possibleTypes: string[] = ['PurchaseP2PMomentResponse']
    export const isPurchaseP2PMomentResponse = (obj?: { __typename?: any } | null): obj is PurchaseP2PMomentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchaseP2PMomentResponse"')
      return PurchaseP2PMomentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PurchasePackActivity_possibleTypes: string[] = ['PurchasePackActivity']
    export const isPurchasePackActivity = (obj?: { __typename?: any } | null): obj is PurchasePackActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchasePackActivity"')
      return PurchasePackActivity_possibleTypes.includes(obj.__typename)
    }
    


    const PurchasePackResponse_possibleTypes: string[] = ['PurchasePackResponse']
    export const isPurchasePackResponse = (obj?: { __typename?: any } | null): obj is PurchasePackResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchasePackResponse"')
      return PurchasePackResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PurchaseSoftCurrencyWithDapperPaymentResponse_possibleTypes: string[] = ['PurchaseSoftCurrencyWithDapperPaymentResponse']
    export const isPurchaseSoftCurrencyWithDapperPaymentResponse = (obj?: { __typename?: any } | null): obj is PurchaseSoftCurrencyWithDapperPaymentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchaseSoftCurrencyWithDapperPaymentResponse"')
      return PurchaseSoftCurrencyWithDapperPaymentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PurchaseVendorMomentActivity_possibleTypes: string[] = ['PurchaseVendorMomentActivity']
    export const isPurchaseVendorMomentActivity = (obj?: { __typename?: any } | null): obj is PurchaseVendorMomentActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchaseVendorMomentActivity"')
      return PurchaseVendorMomentActivity_possibleTypes.includes(obj.__typename)
    }
    


    const PurchaseVendorMomentResponse_possibleTypes: string[] = ['PurchaseVendorMomentResponse']
    export const isPurchaseVendorMomentResponse = (obj?: { __typename?: any } | null): obj is PurchaseVendorMomentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPurchaseVendorMomentResponse"')
      return PurchaseVendorMomentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const QuarterScore_possibleTypes: string[] = ['QuarterScore']
    export const isQuarterScore = (obj?: { __typename?: any } | null): obj is QuarterScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuarterScore"')
      return QuarterScore_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const QueryElasticsearchResponse_possibleTypes: string[] = ['QueryElasticsearchResponse']
    export const isQueryElasticsearchResponse = (obj?: { __typename?: any } | null): obj is QueryElasticsearchResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryElasticsearchResponse"')
      return QueryElasticsearchResponse_possibleTypes.includes(obj.__typename)
    }
    


    const RSVPMetadata_possibleTypes: string[] = ['RSVPMetadata']
    export const isRSVPMetadata = (obj?: { __typename?: any } | null): obj is RSVPMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRSVPMetadata"')
      return RSVPMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const RemoveAllEditionsFromWatchlistResponse_possibleTypes: string[] = ['RemoveAllEditionsFromWatchlistResponse']
    export const isRemoveAllEditionsFromWatchlistResponse = (obj?: { __typename?: any } | null): obj is RemoveAllEditionsFromWatchlistResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRemoveAllEditionsFromWatchlistResponse"')
      return RemoveAllEditionsFromWatchlistResponse_possibleTypes.includes(obj.__typename)
    }
    


    const RemoveEditionFromWatchlistResponse_possibleTypes: string[] = ['RemoveEditionFromWatchlistResponse']
    export const isRemoveEditionFromWatchlistResponse = (obj?: { __typename?: any } | null): obj is RemoveEditionFromWatchlistResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRemoveEditionFromWatchlistResponse"')
      return RemoveEditionFromWatchlistResponse_possibleTypes.includes(obj.__typename)
    }
    


    const RemoveFromDropSquadResponse_possibleTypes: string[] = ['RemoveFromDropSquadResponse']
    export const isRemoveFromDropSquadResponse = (obj?: { __typename?: any } | null): obj is RemoveFromDropSquadResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRemoveFromDropSquadResponse"')
      return RemoveFromDropSquadResponse_possibleTypes.includes(obj.__typename)
    }
    


    const RemoveMomentsFromGroupResponse_possibleTypes: string[] = ['RemoveMomentsFromGroupResponse']
    export const isRemoveMomentsFromGroupResponse = (obj?: { __typename?: any } | null): obj is RemoveMomentsFromGroupResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRemoveMomentsFromGroupResponse"')
      return RemoveMomentsFromGroupResponse_possibleTypes.includes(obj.__typename)
    }
    


    const RequestLoginUrlResponse_possibleTypes: string[] = ['RequestLoginUrlResponse']
    export const isRequestLoginUrlResponse = (obj?: { __typename?: any } | null): obj is RequestLoginUrlResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequestLoginUrlResponse"')
      return RequestLoginUrlResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Requirement_possibleTypes: string[] = ['Requirement']
    export const isRequirement = (obj?: { __typename?: any } | null): obj is Requirement => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequirement"')
      return Requirement_possibleTypes.includes(obj.__typename)
    }
    


    const ReservePackResponse_possibleTypes: string[] = ['ReservePackResponse']
    export const isReservePackResponse = (obj?: { __typename?: any } | null): obj is ReservePackResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReservePackResponse"')
      return ReservePackResponse_possibleTypes.includes(obj.__typename)
    }
    


    const RevokeTokenResponse_possibleTypes: string[] = ['RevokeTokenResponse']
    export const isRevokeTokenResponse = (obj?: { __typename?: any } | null): obj is RevokeTokenResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRevokeTokenResponse"')
      return RevokeTokenResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SaleDto_possibleTypes: string[] = ['SaleDto']
    export const isSaleDto = (obj?: { __typename?: any } | null): obj is SaleDto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleDto"')
      return SaleDto_possibleTypes.includes(obj.__typename)
    }
    


    const SaveShowcaseResponse_possibleTypes: string[] = ['SaveShowcaseResponse']
    export const isSaveShowcaseResponse = (obj?: { __typename?: any } | null): obj is SaveShowcaseResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaveShowcaseResponse"')
      return SaveShowcaseResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchActivityResponse_possibleTypes: string[] = ['SearchActivityResponse']
    export const isSearchActivityResponse = (obj?: { __typename?: any } | null): obj is SearchActivityResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchActivityResponse"')
      return SearchActivityResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchChallengesResponse_possibleTypes: string[] = ['SearchChallengesResponse']
    export const isSearchChallengesResponse = (obj?: { __typename?: any } | null): obj is SearchChallengesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchChallengesResponse"')
      return SearchChallengesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchEditionListingsResponse_possibleTypes: string[] = ['SearchEditionListingsResponse']
    export const isSearchEditionListingsResponse = (obj?: { __typename?: any } | null): obj is SearchEditionListingsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchEditionListingsResponse"')
      return SearchEditionListingsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchEditionListingsSummary_possibleTypes: string[] = ['SearchEditionListingsSummary']
    export const isSearchEditionListingsSummary = (obj?: { __typename?: any } | null): obj is SearchEditionListingsSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchEditionListingsSummary"')
      return SearchEditionListingsSummary_possibleTypes.includes(obj.__typename)
    }
    


    const SearchEditionsResponse_possibleTypes: string[] = ['SearchEditionsResponse']
    export const isSearchEditionsResponse = (obj?: { __typename?: any } | null): obj is SearchEditionsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchEditionsResponse"')
      return SearchEditionsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchMintedMomentsResponse_possibleTypes: string[] = ['SearchMintedMomentsResponse']
    export const isSearchMintedMomentsResponse = (obj?: { __typename?: any } | null): obj is SearchMintedMomentsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchMintedMomentsResponse"')
      return SearchMintedMomentsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchMomentGroupSummary_possibleTypes: string[] = ['SearchMomentGroupSummary']
    export const isSearchMomentGroupSummary = (obj?: { __typename?: any } | null): obj is SearchMomentGroupSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchMomentGroupSummary"')
      return SearchMomentGroupSummary_possibleTypes.includes(obj.__typename)
    }
    


    const SearchMomentGroupsResponse_possibleTypes: string[] = ['SearchMomentGroupsResponse']
    export const isSearchMomentGroupsResponse = (obj?: { __typename?: any } | null): obj is SearchMomentGroupsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchMomentGroupsResponse"')
      return SearchMomentGroupsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchOffersFilter_possibleTypes: string[] = ['SearchOffersFilter']
    export const isSearchOffersFilter = (obj?: { __typename?: any } | null): obj is SearchOffersFilter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchOffersFilter"')
      return SearchOffersFilter_possibleTypes.includes(obj.__typename)
    }
    


    const SearchOffersResponse_possibleTypes: string[] = ['SearchOffersResponse']
    export const isSearchOffersResponse = (obj?: { __typename?: any } | null): obj is SearchOffersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchOffersResponse"')
      return SearchOffersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchOffersSummary_possibleTypes: string[] = ['SearchOffersSummary']
    export const isSearchOffersSummary = (obj?: { __typename?: any } | null): obj is SearchOffersSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchOffersSummary"')
      return SearchOffersSummary_possibleTypes.includes(obj.__typename)
    }
    


    const SearchPackListingsResponse_possibleTypes: string[] = ['SearchPackListingsResponse']
    export const isSearchPackListingsResponse = (obj?: { __typename?: any } | null): obj is SearchPackListingsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchPackListingsResponse"')
      return SearchPackListingsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchPacksResponse_possibleTypes: string[] = ['SearchPacksResponse']
    export const isSearchPacksResponse = (obj?: { __typename?: any } | null): obj is SearchPacksResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchPacksResponse"')
      return SearchPacksResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchSetsResponse_possibleTypes: string[] = ['SearchSetsResponse']
    export const isSearchSetsResponse = (obj?: { __typename?: any } | null): obj is SearchSetsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchSetsResponse"')
      return SearchSetsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchShowcasesResponse_possibleTypes: string[] = ['SearchShowcasesResponse']
    export const isSearchShowcasesResponse = (obj?: { __typename?: any } | null): obj is SearchShowcasesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchShowcasesResponse"')
      return SearchShowcasesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchSuggestions_possibleTypes: string[] = ['SearchSuggestions']
    export const isSearchSuggestions = (obj?: { __typename?: any } | null): obj is SearchSuggestions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchSuggestions"')
      return SearchSuggestions_possibleTypes.includes(obj.__typename)
    }
    


    const SearchSummary_possibleTypes: string[] = ['SearchSummary']
    export const isSearchSummary = (obj?: { __typename?: any } | null): obj is SearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchSummary"')
      return SearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const SearchTeamCollectionResponse_possibleTypes: string[] = ['SearchTeamCollectionResponse']
    export const isSearchTeamCollectionResponse = (obj?: { __typename?: any } | null): obj is SearchTeamCollectionResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchTeamCollectionResponse"')
      return SearchTeamCollectionResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchUserSetAssociationsResponse_possibleTypes: string[] = ['SearchUserSetAssociationsResponse']
    export const isSearchUserSetAssociationsResponse = (obj?: { __typename?: any } | null): obj is SearchUserSetAssociationsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchUserSetAssociationsResponse"')
      return SearchUserSetAssociationsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchUsersResponse_possibleTypes: string[] = ['SearchUsersResponse']
    export const isSearchUsersResponse = (obj?: { __typename?: any } | null): obj is SearchUsersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchUsersResponse"')
      return SearchUsersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchWatchedEditionsResponse_possibleTypes: string[] = ['SearchWatchedEditionsResponse']
    export const isSearchWatchedEditionsResponse = (obj?: { __typename?: any } | null): obj is SearchWatchedEditionsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchWatchedEditionsResponse"')
      return SearchWatchedEditionsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Set_possibleTypes: string[] = ['Set']
    export const isSet = (obj?: { __typename?: any } | null): obj is Set => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSet"')
      return Set_possibleTypes.includes(obj.__typename)
    }
    


    const SetAssets_possibleTypes: string[] = ['SetAssets']
    export const isSetAssets = (obj?: { __typename?: any } | null): obj is SetAssets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetAssets"')
      return SetAssets_possibleTypes.includes(obj.__typename)
    }
    


    const SetImage_possibleTypes: string[] = ['SetImage']
    export const isSetImage = (obj?: { __typename?: any } | null): obj is SetImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetImage"')
      return SetImage_possibleTypes.includes(obj.__typename)
    }
    


    const SetPlayCirculations_possibleTypes: string[] = ['SetPlayCirculations']
    export const isSetPlayCirculations = (obj?: { __typename?: any } | null): obj is SetPlayCirculations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetPlayCirculations"')
      return SetPlayCirculations_possibleTypes.includes(obj.__typename)
    }
    


    const SetProgress_possibleTypes: string[] = ['SetProgress']
    export const isSetProgress = (obj?: { __typename?: any } | null): obj is SetProgress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetProgress"')
      return SetProgress_possibleTypes.includes(obj.__typename)
    }
    


    const SetSelectedUserTitlesResponse_possibleTypes: string[] = ['SetSelectedUserTitlesResponse']
    export const isSetSelectedUserTitlesResponse = (obj?: { __typename?: any } | null): obj is SetSelectedUserTitlesResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetSelectedUserTitlesResponse"')
      return SetSelectedUserTitlesResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Sets_possibleTypes: string[] = ['Sets']
    export const isSets = (obj?: { __typename?: any } | null): obj is Sets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSets"')
      return Sets_possibleTypes.includes(obj.__typename)
    }
    


    const SetsProgress_possibleTypes: string[] = ['SetsProgress']
    export const isSetsProgress = (obj?: { __typename?: any } | null): obj is SetsProgress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetsProgress"')
      return SetsProgress_possibleTypes.includes(obj.__typename)
    }
    


    const Shop_possibleTypes: string[] = ['Shop']
    export const isShop = (obj?: { __typename?: any } | null): obj is Shop => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShop"')
      return Shop_possibleTypes.includes(obj.__typename)
    }
    


    const ShopPackListingsConnection_possibleTypes: string[] = ['ShopPackListingsConnection']
    export const isShopPackListingsConnection = (obj?: { __typename?: any } | null): obj is ShopPackListingsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopPackListingsConnection"')
      return ShopPackListingsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ShopPackListingsEdge_possibleTypes: string[] = ['ShopPackListingsEdge']
    export const isShopPackListingsEdge = (obj?: { __typename?: any } | null): obj is ShopPackListingsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopPackListingsEdge"')
      return ShopPackListingsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Showcase_possibleTypes: string[] = ['Showcase']
    export const isShowcase = (obj?: { __typename?: any } | null): obj is Showcase => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShowcase"')
      return Showcase_possibleTypes.includes(obj.__typename)
    }
    


    const ShowcaseMomentOrder_possibleTypes: string[] = ['ShowcaseMomentOrder']
    export const isShowcaseMomentOrder = (obj?: { __typename?: any } | null): obj is ShowcaseMomentOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShowcaseMomentOrder"')
      return ShowcaseMomentOrder_possibleTypes.includes(obj.__typename)
    }
    


    const Showcases_possibleTypes: string[] = ['Showcases']
    export const isShowcases = (obj?: { __typename?: any } | null): obj is Showcases => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShowcases"')
      return Showcases_possibleTypes.includes(obj.__typename)
    }
    


    const ShowcasesFilters_possibleTypes: string[] = ['ShowcasesFilters']
    export const isShowcasesFilters = (obj?: { __typename?: any } | null): obj is ShowcasesFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShowcasesFilters"')
      return ShowcasesFilters_possibleTypes.includes(obj.__typename)
    }
    


    const ShowcasesSearchSummary_possibleTypes: string[] = ['ShowcasesSearchSummary']
    export const isShowcasesSearchSummary = (obj?: { __typename?: any } | null): obj is ShowcasesSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShowcasesSearchSummary"')
      return ShowcasesSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const Sortable_possibleTypes: string[] = ['Activity','Edition','EditionListing','MarketplaceTransaction','MintedMoment','MomentGroup','MomentListing','Offer','OnChainPack','Pack','PackListing','PacksForUserCollection','Play','Set','Showcase','User','UserChallenge','UserSetAssociation','WatchedEdition']
    export const isSortable = (obj?: { __typename?: any } | null): obj is Sortable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSortable"')
      return Sortable_possibleTypes.includes(obj.__typename)
    }
    


    const SortableCollection_possibleTypes: string[] = ['Activities','EditionListings','Editions','MarketplaceTransactions','MintedMoments','MomentGroups','MomentListings','Offers','PackListings','PacksForUserCollections','Plays','Sets','Showcases','UserChallenges','UserSetAssociations','Users','WatchedEditions']
    export const isSortableCollection = (obj?: { __typename?: any } | null): obj is SortableCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSortableCollection"')
      return SortableCollection_possibleTypes.includes(obj.__typename)
    }
    


    const SpecialNFT_possibleTypes: string[] = ['SpecialNFT']
    export const isSpecialNFT = (obj?: { __typename?: any } | null): obj is SpecialNFT => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSpecialNFT"')
      return SpecialNFT_possibleTypes.includes(obj.__typename)
    }
    


    const SpecialNftPurchasedActivity_possibleTypes: string[] = ['SpecialNftPurchasedActivity']
    export const isSpecialNftPurchasedActivity = (obj?: { __typename?: any } | null): obj is SpecialNftPurchasedActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSpecialNftPurchasedActivity"')
      return SpecialNftPurchasedActivity_possibleTypes.includes(obj.__typename)
    }
    


    const SpecialNftSoldActivity_possibleTypes: string[] = ['SpecialNftSoldActivity']
    export const isSpecialNftSoldActivity = (obj?: { __typename?: any } | null): obj is SpecialNftSoldActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSpecialNftSoldActivity"')
      return SpecialNftSoldActivity_possibleTypes.includes(obj.__typename)
    }
    


    const SpecialSet_possibleTypes: string[] = ['SpecialSet']
    export const isSpecialSet = (obj?: { __typename?: any } | null): obj is SpecialSet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSpecialSet"')
      return SpecialSet_possibleTypes.includes(obj.__typename)
    }
    


    const StatsPlayerGameScores_possibleTypes: string[] = ['StatsPlayerGameScores']
    export const isStatsPlayerGameScores = (obj?: { __typename?: any } | null): obj is StatsPlayerGameScores => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsPlayerGameScores"')
      return StatsPlayerGameScores_possibleTypes.includes(obj.__typename)
    }
    


    const StatsPlayerSeasonAverageScores_possibleTypes: string[] = ['StatsPlayerSeasonAverageScores']
    export const isStatsPlayerSeasonAverageScores = (obj?: { __typename?: any } | null): obj is StatsPlayerSeasonAverageScores => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsPlayerSeasonAverageScores"')
      return StatsPlayerSeasonAverageScores_possibleTypes.includes(obj.__typename)
    }
    


    const StringTuple_possibleTypes: string[] = ['StringTuple']
    export const isStringTuple = (obj?: { __typename?: any } | null): obj is StringTuple => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStringTuple"')
      return StringTuple_possibleTypes.includes(obj.__typename)
    }
    


    const SubmitVoteForPollResponse_possibleTypes: string[] = ['SubmitVoteForPollResponse']
    export const isSubmitVoteForPollResponse = (obj?: { __typename?: any } | null): obj is SubmitVoteForPollResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubmitVoteForPollResponse"')
      return SubmitVoteForPollResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Syncable_possibleTypes: string[] = ['Edition','EditionListing','MarketplaceTransaction','MintedMoment','MomentGroup','MomentListing','OnChainPack','Pack','PackListing','PacksForUserCollection','Play','Set','Showcase','UserChallenge']
    export const isSyncable = (obj?: { __typename?: any } | null): obj is Syncable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSyncable"')
      return Syncable_possibleTypes.includes(obj.__typename)
    }
    


    const TS50_possibleTypes: string[] = ['TS50']
    export const isTS50 = (obj?: { __typename?: any } | null): obj is TS50 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTS50"')
      return TS50_possibleTypes.includes(obj.__typename)
    }
    


    const Tag_possibleTypes: string[] = ['Tag']
    export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTag"')
      return Tag_possibleTypes.includes(obj.__typename)
    }
    


    const Team_possibleTypes: string[] = ['Team']
    export const isTeam = (obj?: { __typename?: any } | null): obj is Team => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeam"')
      return Team_possibleTypes.includes(obj.__typename)
    }
    


    const TeamCollectionFilters_possibleTypes: string[] = ['TeamCollectionFilters']
    export const isTeamCollectionFilters = (obj?: { __typename?: any } | null): obj is TeamCollectionFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamCollectionFilters"')
      return TeamCollectionFilters_possibleTypes.includes(obj.__typename)
    }
    


    const TeamCompletionPlayer_possibleTypes: string[] = ['TeamCompletionPlayer']
    export const isTeamCompletionPlayer = (obj?: { __typename?: any } | null): obj is TeamCompletionPlayer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamCompletionPlayer"')
      return TeamCompletionPlayer_possibleTypes.includes(obj.__typename)
    }
    


    const TeamCompletionProgress_possibleTypes: string[] = ['TeamCompletionProgress']
    export const isTeamCompletionProgress = (obj?: { __typename?: any } | null): obj is TeamCompletionProgress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamCompletionProgress"')
      return TeamCompletionProgress_possibleTypes.includes(obj.__typename)
    }
    


    const TeamLeaderboard_possibleTypes: string[] = ['TeamLeaderboard']
    export const isTeamLeaderboard = (obj?: { __typename?: any } | null): obj is TeamLeaderboard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamLeaderboard"')
      return TeamLeaderboard_possibleTypes.includes(obj.__typename)
    }
    


    const TeamScoresByQuarter_possibleTypes: string[] = ['TeamScoresByQuarter']
    export const isTeamScoresByQuarter = (obj?: { __typename?: any } | null): obj is TeamScoresByQuarter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamScoresByQuarter"')
      return TeamScoresByQuarter_possibleTypes.includes(obj.__typename)
    }
    


    const TeamSeriesCompletionProgress_possibleTypes: string[] = ['TeamSeriesCompletionProgress']
    export const isTeamSeriesCompletionProgress = (obj?: { __typename?: any } | null): obj is TeamSeriesCompletionProgress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamSeriesCompletionProgress"')
      return TeamSeriesCompletionProgress_possibleTypes.includes(obj.__typename)
    }
    


    const TeamSeriesCompletionProgressBucket_possibleTypes: string[] = ['TeamSeriesCompletionProgressBucket']
    export const isTeamSeriesCompletionProgressBucket = (obj?: { __typename?: any } | null): obj is TeamSeriesCompletionProgressBucket => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamSeriesCompletionProgressBucket"')
      return TeamSeriesCompletionProgressBucket_possibleTypes.includes(obj.__typename)
    }
    


    const Teams_possibleTypes: string[] = ['Teams']
    export const isTeams = (obj?: { __typename?: any } | null): obj is Teams => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeams"')
      return Teams_possibleTypes.includes(obj.__typename)
    }
    


    const Title_possibleTypes: string[] = ['Title']
    export const isTitle = (obj?: { __typename?: any } | null): obj is Title => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTitle"')
      return Title_possibleTypes.includes(obj.__typename)
    }
    


    const TitleCategory_possibleTypes: string[] = ['TitleCategory']
    export const isTitleCategory = (obj?: { __typename?: any } | null): obj is TitleCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTitleCategory"')
      return TitleCategory_possibleTypes.includes(obj.__typename)
    }
    


    const TopshotScore_possibleTypes: string[] = ['TopshotScore']
    export const isTopshotScore = (obj?: { __typename?: any } | null): obj is TopshotScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTopshotScore"')
      return TopshotScore_possibleTypes.includes(obj.__typename)
    }
    


    const TopshotScoreBonus_possibleTypes: string[] = ['TopshotScoreBonus']
    export const isTopshotScoreBonus = (obj?: { __typename?: any } | null): obj is TopshotScoreBonus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTopshotScoreBonus"')
      return TopshotScoreBonus_possibleTypes.includes(obj.__typename)
    }
    


    const TopshotScoreBonusData_possibleTypes: string[] = ['TopshotScoreBonusData']
    export const isTopshotScoreBonusData = (obj?: { __typename?: any } | null): obj is TopshotScoreBonusData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTopshotScoreBonusData"')
      return TopshotScoreBonusData_possibleTypes.includes(obj.__typename)
    }
    


    const TotalBurnedMomentCountByRarity_possibleTypes: string[] = ['TotalBurnedMomentCountByRarity']
    export const isTotalBurnedMomentCountByRarity = (obj?: { __typename?: any } | null): obj is TotalBurnedMomentCountByRarity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTotalBurnedMomentCountByRarity"')
      return TotalBurnedMomentCountByRarity_possibleTypes.includes(obj.__typename)
    }
    


    const TransferPacksResponse_possibleTypes: string[] = ['TransferPacksResponse']
    export const isTransferPacksResponse = (obj?: { __typename?: any } | null): obj is TransferPacksResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTransferPacksResponse"')
      return TransferPacksResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UnhideOffersResponse_possibleTypes: string[] = ['UnhideOffersResponse']
    export const isUnhideOffersResponse = (obj?: { __typename?: any } | null): obj is UnhideOffersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnhideOffersResponse"')
      return UnhideOffersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UnpinMomentResponse_possibleTypes: string[] = ['UnpinMomentResponse']
    export const isUnpinMomentResponse = (obj?: { __typename?: any } | null): obj is UnpinMomentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnpinMomentResponse"')
      return UnpinMomentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateMomentGroupResponse_possibleTypes: string[] = ['UpdateMomentGroupResponse']
    export const isUpdateMomentGroupResponse = (obj?: { __typename?: any } | null): obj is UpdateMomentGroupResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateMomentGroupResponse"')
      return UpdateMomentGroupResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateNBAMarketingResponse_possibleTypes: string[] = ['UpdateNBAMarketingResponse']
    export const isUpdateNBAMarketingResponse = (obj?: { __typename?: any } | null): obj is UpdateNBAMarketingResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateNBAMarketingResponse"')
      return UpdateNBAMarketingResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateUserSettingsResponse_possibleTypes: string[] = ['UpdateUserSettingsResponse']
    export const isUpdateUserSettingsResponse = (obj?: { __typename?: any } | null): obj is UpdateUserSettingsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateUserSettingsResponse"')
      return UpdateUserSettingsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UpsertUserProfileResponse_possibleTypes: string[] = ['UpsertUserProfileResponse']
    export const isUpsertUserProfileResponse = (obj?: { __typename?: any } | null): obj is UpsertUserProfileResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpsertUserProfileResponse"')
      return UpsertUserProfileResponse_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserBallerStatus_possibleTypes: string[] = ['UserBallerStatus']
    export const isUserBallerStatus = (obj?: { __typename?: any } | null): obj is UserBallerStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBallerStatus"')
      return UserBallerStatus_possibleTypes.includes(obj.__typename)
    }
    


    const UserBallerStatusMilestone_possibleTypes: string[] = ['UserBallerStatusMilestone']
    export const isUserBallerStatusMilestone = (obj?: { __typename?: any } | null): obj is UserBallerStatusMilestone => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBallerStatusMilestone"')
      return UserBallerStatusMilestone_possibleTypes.includes(obj.__typename)
    }
    


    const UserBallerStatusTask_possibleTypes: string[] = ['UserBallerStatusTask']
    export const isUserBallerStatusTask = (obj?: { __typename?: any } | null): obj is UserBallerStatusTask => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBallerStatusTask"')
      return UserBallerStatusTask_possibleTypes.includes(obj.__typename)
    }
    


    const UserBurnedMoment_possibleTypes: string[] = ['UserBurnedMoment']
    export const isUserBurnedMoment = (obj?: { __typename?: any } | null): obj is UserBurnedMoment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBurnedMoment"')
      return UserBurnedMoment_possibleTypes.includes(obj.__typename)
    }
    


    const UserBurnedMomentStats_possibleTypes: string[] = ['UserBurnedMomentStats']
    export const isUserBurnedMomentStats = (obj?: { __typename?: any } | null): obj is UserBurnedMomentStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBurnedMomentStats"')
      return UserBurnedMomentStats_possibleTypes.includes(obj.__typename)
    }
    


    const UserBurnedTopshotScore_possibleTypes: string[] = ['UserBurnedTopshotScore']
    export const isUserBurnedTopshotScore = (obj?: { __typename?: any } | null): obj is UserBurnedTopshotScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBurnedTopshotScore"')
      return UserBurnedTopshotScore_possibleTypes.includes(obj.__typename)
    }
    


    const UserCampaignEventProgress_possibleTypes: string[] = ['UserCampaignEventProgress']
    export const isUserCampaignEventProgress = (obj?: { __typename?: any } | null): obj is UserCampaignEventProgress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserCampaignEventProgress"')
      return UserCampaignEventProgress_possibleTypes.includes(obj.__typename)
    }
    


    const UserChallenge_possibleTypes: string[] = ['UserChallenge']
    export const isUserChallenge = (obj?: { __typename?: any } | null): obj is UserChallenge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserChallenge"')
      return UserChallenge_possibleTypes.includes(obj.__typename)
    }
    


    const UserChallenges_possibleTypes: string[] = ['UserChallenges']
    export const isUserChallenges = (obj?: { __typename?: any } | null): obj is UserChallenges => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserChallenges"')
      return UserChallenges_possibleTypes.includes(obj.__typename)
    }
    


    const UserMomentListing_possibleTypes: string[] = ['UserMomentListing']
    export const isUserMomentListing = (obj?: { __typename?: any } | null): obj is UserMomentListing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMomentListing"')
      return UserMomentListing_possibleTypes.includes(obj.__typename)
    }
    


    const UserMomentListings_possibleTypes: string[] = ['UserMomentListings']
    export const isUserMomentListings = (obj?: { __typename?: any } | null): obj is UserMomentListings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMomentListings"')
      return UserMomentListings_possibleTypes.includes(obj.__typename)
    }
    


    const UserMomentListingsResponse_possibleTypes: string[] = ['UserMomentListingsResponse']
    export const isUserMomentListingsResponse = (obj?: { __typename?: any } | null): obj is UserMomentListingsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMomentListingsResponse"')
      return UserMomentListingsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UserPackListingEligibility_possibleTypes: string[] = ['UserPackListingEligibility']
    export const isUserPackListingEligibility = (obj?: { __typename?: any } | null): obj is UserPackListingEligibility => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPackListingEligibility"')
      return UserPackListingEligibility_possibleTypes.includes(obj.__typename)
    }
    


    const UserPackListingLevelEligibility_possibleTypes: string[] = ['UserPackListingLevelEligibility']
    export const isUserPackListingLevelEligibility = (obj?: { __typename?: any } | null): obj is UserPackListingLevelEligibility => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPackListingLevelEligibility"')
      return UserPackListingLevelEligibility_possibleTypes.includes(obj.__typename)
    }
    


    const UserPublicInfo_possibleTypes: string[] = ['UserPublicInfo']
    export const isUserPublicInfo = (obj?: { __typename?: any } | null): obj is UserPublicInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPublicInfo"')
      return UserPublicInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserSearchFilters_possibleTypes: string[] = ['UserSearchFilters']
    export const isUserSearchFilters = (obj?: { __typename?: any } | null): obj is UserSearchFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSearchFilters"')
      return UserSearchFilters_possibleTypes.includes(obj.__typename)
    }
    


    const UserSearchSummary_possibleTypes: string[] = ['UserSearchSummary']
    export const isUserSearchSummary = (obj?: { __typename?: any } | null): obj is UserSearchSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSearchSummary"')
      return UserSearchSummary_possibleTypes.includes(obj.__typename)
    }
    


    const UserSetAssociation_possibleTypes: string[] = ['UserSetAssociation']
    export const isUserSetAssociation = (obj?: { __typename?: any } | null): obj is UserSetAssociation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSetAssociation"')
      return UserSetAssociation_possibleTypes.includes(obj.__typename)
    }
    


    const UserSetAssociationFilters_possibleTypes: string[] = ['UserSetAssociationFilters']
    export const isUserSetAssociationFilters = (obj?: { __typename?: any } | null): obj is UserSetAssociationFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSetAssociationFilters"')
      return UserSetAssociationFilters_possibleTypes.includes(obj.__typename)
    }
    


    const UserSetAssociations_possibleTypes: string[] = ['UserSetAssociations']
    export const isUserSetAssociations = (obj?: { __typename?: any } | null): obj is UserSetAssociations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSetAssociations"')
      return UserSetAssociations_possibleTypes.includes(obj.__typename)
    }
    


    const UserSettings_possibleTypes: string[] = ['UserSettings']
    export const isUserSettings = (obj?: { __typename?: any } | null): obj is UserSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSettings"')
      return UserSettings_possibleTypes.includes(obj.__typename)
    }
    


    const UserTitle_possibleTypes: string[] = ['UserTitle']
    export const isUserTitle = (obj?: { __typename?: any } | null): obj is UserTitle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserTitle"')
      return UserTitle_possibleTypes.includes(obj.__typename)
    }
    


    const UserTopshotTag_possibleTypes: string[] = ['UserTopshotTag']
    export const isUserTopshotTag = (obj?: { __typename?: any } | null): obj is UserTopshotTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserTopshotTag"')
      return UserTopshotTag_possibleTypes.includes(obj.__typename)
    }
    


    const Users_possibleTypes: string[] = ['Users']
    export const isUsers = (obj?: { __typename?: any } | null): obj is Users => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsers"')
      return Users_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallenge_possibleTypes: string[] = ['VariableChallenge']
    export const isVariableChallenge = (obj?: { __typename?: any } | null): obj is VariableChallenge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallenge"')
      return VariableChallenge_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengeAssets_possibleTypes: string[] = ['VariableChallengeAssets']
    export const isVariableChallengeAssets = (obj?: { __typename?: any } | null): obj is VariableChallengeAssets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengeAssets"')
      return VariableChallengeAssets_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengePageData_possibleTypes: string[] = ['VariableChallengePageData']
    export const isVariableChallengePageData = (obj?: { __typename?: any } | null): obj is VariableChallengePageData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengePageData"')
      return VariableChallengePageData_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengePrerequisites_possibleTypes: string[] = ['VariableChallengePrerequisites']
    export const isVariableChallengePrerequisites = (obj?: { __typename?: any } | null): obj is VariableChallengePrerequisites => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengePrerequisites"')
      return VariableChallengePrerequisites_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengeSlot_possibleTypes: string[] = ['VariableChallengeSlot']
    export const isVariableChallengeSlot = (obj?: { __typename?: any } | null): obj is VariableChallengeSlot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengeSlot"')
      return VariableChallengeSlot_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengeSlotQuery_possibleTypes: string[] = ['VariableChallengeSlotQuery']
    export const isVariableChallengeSlotQuery = (obj?: { __typename?: any } | null): obj is VariableChallengeSlotQuery => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengeSlotQuery"')
      return VariableChallengeSlotQuery_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengeSubmission_possibleTypes: string[] = ['VariableChallengeSubmission']
    export const isVariableChallengeSubmission = (obj?: { __typename?: any } | null): obj is VariableChallengeSubmission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengeSubmission"')
      return VariableChallengeSubmission_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengeSubmissionResponse_possibleTypes: string[] = ['VariableChallengeSubmissionResponse']
    export const isVariableChallengeSubmissionResponse = (obj?: { __typename?: any } | null): obj is VariableChallengeSubmissionResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengeSubmissionResponse"')
      return VariableChallengeSubmissionResponse_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengeSubmissionSlot_possibleTypes: string[] = ['VariableChallengeSubmissionSlot']
    export const isVariableChallengeSubmissionSlot = (obj?: { __typename?: any } | null): obj is VariableChallengeSubmissionSlot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengeSubmissionSlot"')
      return VariableChallengeSubmissionSlot_possibleTypes.includes(obj.__typename)
    }
    


    const VariableChallengeSubmissionSlotResponse_possibleTypes: string[] = ['VariableChallengeSubmissionSlotResponse']
    export const isVariableChallengeSubmissionSlotResponse = (obj?: { __typename?: any } | null): obj is VariableChallengeSubmissionSlotResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariableChallengeSubmissionSlotResponse"')
      return VariableChallengeSubmissionSlotResponse_possibleTypes.includes(obj.__typename)
    }
    


    const VendorMomentListing_possibleTypes: string[] = ['VendorMomentListing']
    export const isVendorMomentListing = (obj?: { __typename?: any } | null): obj is VendorMomentListing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVendorMomentListing"')
      return VendorMomentListing_possibleTypes.includes(obj.__typename)
    }
    


    const WaitingRoom_possibleTypes: string[] = ['WaitingRoom']
    export const isWaitingRoom = (obj?: { __typename?: any } | null): obj is WaitingRoom => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWaitingRoom"')
      return WaitingRoom_possibleTypes.includes(obj.__typename)
    }
    


    const WatchedEdition_possibleTypes: string[] = ['WatchedEdition']
    export const isWatchedEdition = (obj?: { __typename?: any } | null): obj is WatchedEdition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWatchedEdition"')
      return WatchedEdition_possibleTypes.includes(obj.__typename)
    }
    


    const WatchedEditionFilters_possibleTypes: string[] = ['WatchedEditionFilters']
    export const isWatchedEditionFilters = (obj?: { __typename?: any } | null): obj is WatchedEditionFilters => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWatchedEditionFilters"')
      return WatchedEditionFilters_possibleTypes.includes(obj.__typename)
    }
    


    const WatchedEditions_possibleTypes: string[] = ['WatchedEditions']
    export const isWatchedEditions = (obj?: { __typename?: any } | null): obj is WatchedEditions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWatchedEditions"')
      return WatchedEditions_possibleTypes.includes(obj.__typename)
    }
    


    const Watchlist_possibleTypes: string[] = ['Watchlist']
    export const isWatchlist = (obj?: { __typename?: any } | null): obj is Watchlist => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWatchlist"')
      return Watchlist_possibleTypes.includes(obj.__typename)
    }
    


    const WatchlistData_possibleTypes: string[] = ['WatchlistData']
    export const isWatchlistData = (obj?: { __typename?: any } | null): obj is WatchlistData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWatchlistData"')
      return WatchlistData_possibleTypes.includes(obj.__typename)
    }
    


    const WatchlistResponse_possibleTypes: string[] = ['WatchlistResponse']
    export const isWatchlistResponse = (obj?: { __typename?: any } | null): obj is WatchlistResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWatchlistResponse"')
      return WatchlistResponse_possibleTypes.includes(obj.__typename)
    }
    


    const authorizePackNFTsMintingResponse_possibleTypes: string[] = ['authorizePackNFTsMintingResponse']
    export const isauthorizePackNFTsMintingResponse = (obj?: { __typename?: any } | null): obj is authorizePackNFTsMintingResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthorizePackNFTsMintingResponse"')
      return authorizePackNFTsMintingResponse_possibleTypes.includes(obj.__typename)
    }
    


    const metadata_possibleTypes: string[] = ['AllstarSetMetadata']
    export const ismetadata = (obj?: { __typename?: any } | null): obj is metadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismetadata"')
      return metadata_possibleTypes.includes(obj.__typename)
    }
    

export const enumActivitySortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const
}

export const enumActivityStatus = {
   PENDING: 'PENDING' as const,
   SUCCESS: 'SUCCESS' as const,
   FAILED: 'FAILED' as const
}

export const enumActivityType = {
   PURCHASE_VENDOR_MOMENT: 'PURCHASE_VENDOR_MOMENT' as const,
   P2P_MOMENT_LISTING: 'P2P_MOMENT_LISTING' as const,
   P2P_MOMENT_LISTING_CANCELLATION: 'P2P_MOMENT_LISTING_CANCELLATION' as const,
   P2P_MOMENT_LISTING_SOLD: 'P2P_MOMENT_LISTING_SOLD' as const,
   PURCHASE_P2P_MOMENT: 'PURCHASE_P2P_MOMENT' as const,
   PURCHASE_PACK: 'PURCHASE_PACK' as const,
   MOMENT_TRANSFER_REQUEST: 'MOMENT_TRANSFER_REQUEST' as const,
   MOMENT_TRANSFER_RECEIVED: 'MOMENT_TRANSFER_RECEIVED' as const,
   MOMENT_TRADE_IN_REQUEST: 'MOMENT_TRADE_IN_REQUEST' as const,
   PURCHASE_PACK_WITH_TICKETS: 'PURCHASE_PACK_WITH_TICKETS' as const,
   MOMENTS_TRADE_IN_REQUEST: 'MOMENTS_TRADE_IN_REQUEST' as const,
   OFFER_AVAILABLE: 'OFFER_AVAILABLE' as const,
   OFFER_COMPLETED: 'OFFER_COMPLETED' as const,
   SPECIAL_NFT_PURCHASED: 'SPECIAL_NFT_PURCHASED' as const,
   SPECIAL_NFT_SOLD: 'SPECIAL_NFT_SOLD' as const
}

export const enumBallerStatusLevelLabel = {
   STREET_BALLER: 'STREET_BALLER' as const,
   ROOK: 'ROOK' as const,
   RISING_STAR: 'RISING_STAR' as const,
   VET: 'VET' as const,
   ELITE: 'ELITE' as const,
   ALL_STAR: 'ALL_STAR' as const
}

export const enumBallerStatusMilestoneLabel = {
   BUY_FIRST_PACK: 'BUY_FIRST_PACK' as const,
   COMMON_PACK_PURCHASE: 'COMMON_PACK_PURCHASE' as const,
   RARE_PACK_PURCHASE: 'RARE_PACK_PURCHASE' as const,
   LEGENDARY_PACK_PURCHASE: 'LEGENDARY_PACK_PURCHASE' as const,
   BUILD_SHOWCASE: 'BUILD_SHOWCASE' as const,
   COLLECT_COMMON_PACK_MOMENTS: 'COLLECT_COMMON_PACK_MOMENTS' as const,
   COLLECT_RARE_PACK_MOMENTS: 'COLLECT_RARE_PACK_MOMENTS' as const,
   COLLECT_LEGENDARY_PACK_MOMENTS: 'COLLECT_LEGENDARY_PACK_MOMENTS' as const,
   EARLY_ADOPTER: 'EARLY_ADOPTER' as const,
   CHALLENGE_COMPLETION: 'CHALLENGE_COMPLETION' as const,
   LIST_FIRST_MOMENT_FOR_SALE: 'LIST_FIRST_MOMENT_FOR_SALE' as const,
   SELL_MOMENT: 'SELL_MOMENT' as const,
   COLLECT_FAVORITE_TEAM_MOMENT: 'COLLECT_FAVORITE_TEAM_MOMENT' as const,
   COLLECT_PLAYS_DUNK: 'COLLECT_PLAYS_DUNK' as const
}

export const enumBallerStatusTaskStatus = {
   ACTIVE: 'ACTIVE' as const,
   COMPLETE: 'COMPLETE' as const
}

export const enumCsInterval = {
   DAILY: 'DAILY' as const,
   WEEKLY: 'WEEKLY' as const,
   MONTHLY: 'MONTHLY' as const,
   YEARLY: 'YEARLY' as const
}

export const enumCampaignVisibility = {
   PUBLIC: 'PUBLIC' as const,
   DRAFT: 'DRAFT' as const
}

export const enumCancelReservationResponseError = {
   RESERVATION_NOT_FOUND: 'RESERVATION_NOT_FOUND' as const,
   RESERVATION_NOT_APPROVED: 'RESERVATION_NOT_APPROVED' as const
}

export const enumChain = {
   PUBLIC_MAIN_NET: 'PUBLIC_MAIN_NET' as const,
   TS_MAIN_NET: 'TS_MAIN_NET' as const,
   PUBLIC_TEST_NET: 'PUBLIC_TEST_NET' as const,
   TS_TEST_NET: 'TS_TEST_NET' as const
}

export const enumChallengeCompletionStateFilter = {
   COMPLETED: 'COMPLETED' as const,
   NOT_COMPLETED: 'NOT_COMPLETED' as const
}

export const enumChallengeExpiryStateFilter = {
   ACTIVE: 'ACTIVE' as const,
   EXPIRED: 'EXPIRED' as const
}

export const enumChallengeRewardStatus = {
   PENDING: 'PENDING' as const,
   RECEIVED: 'RECEIVED' as const
}

export const enumChallengeSortType = {
   EXPIRATION_DATE_ASC: 'EXPIRATION_DATE_ASC' as const,
   EXPIRATION_DATE_DESC: 'EXPIRATION_DATE_DESC' as const
}

export const enumChallengeType = {
   TRADITIONAL: 'TRADITIONAL' as const,
   SHOWCASE: 'SHOWCASE' as const,
   VARIABLE: 'VARIABLE' as const
}

export const enumChallengeVisibility = {
   NONE: 'NONE' as const,
   PRIVATE: 'PRIVATE' as const,
   PUBLIC: 'PUBLIC' as const,
   HIDDEN: 'HIDDEN' as const
}

export const enumConfirmPackPurchaseError = {
   ORDER_NOT_FOUND: 'ORDER_NOT_FOUND' as const,
   PACKS_NOT_RESERVED: 'PACKS_NOT_RESERVED' as const,
   PACK_LISTING_NOT_FOUND: 'PACK_LISTING_NOT_FOUND' as const,
   RECEIPT_INVALID: 'RECEIPT_INVALID' as const
}

export const enumCreateDropSquadError = {
   ALREADY_ASSOCIATED: 'ALREADY_ASSOCIATED' as const,
   INVALID_PACK_LISTING: 'INVALID_PACK_LISTING' as const
}

export const enumCreatePackPurchaseIntentResponseError = {
   INELIGIBLE: 'INELIGIBLE' as const,
   CAPTCHA_FAILED: 'CAPTCHA_FAILED' as const,
   INVALID_QUEUE: 'INVALID_QUEUE' as const,
   EXCEEDED_QUANTITY: 'EXCEEDED_QUANTITY' as const,
   RESERVATION_EXISTS: 'RESERVATION_EXISTS' as const
}

export const enumCurrency = {
   USD: 'USD' as const,
   TICKETS: 'TICKETS' as const,
   DAPPER_CREDIT: 'DAPPER_CREDIT' as const
}

export const enumCursorDirection = {
   LEFT: 'LEFT' as const,
   RIGHT: 'RIGHT' as const
}

export const enumDirection = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumDropSquadMemberRole = {
   OWNER: 'OWNER' as const,
   MEMBER: 'MEMBER' as const
}

export const enumEditionListingSortType = {
   PRICE_USD_ASC: 'PRICE_USD_ASC' as const,
   PRICE_USD_DESC: 'PRICE_USD_DESC' as const,
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   GAME_DATE_ASC: 'GAME_DATE_ASC' as const,
   GAME_DATE_DESC: 'GAME_DATE_DESC' as const,
   SERIAL_NUMBER_ASC: 'SERIAL_NUMBER_ASC' as const,
   SERIAL_NUMBER_DESC: 'SERIAL_NUMBER_DESC' as const,
   PLAYER_FIRST_NAME_ASC: 'PLAYER_FIRST_NAME_ASC' as const,
   PLAYER_FIRST_NAME_DESC: 'PLAYER_FIRST_NAME_DESC' as const,
   PLAYER_LAST_NAME_ASC: 'PLAYER_LAST_NAME_ASC' as const,
   PLAYER_LAST_NAME_DESC: 'PLAYER_LAST_NAME_DESC' as const,
   MOST_WATCHED_ASC: 'MOST_WATCHED_ASC' as const,
   MOST_WATCHED_DESC: 'MOST_WATCHED_DESC' as const,
   RECOMMENDATIONS_ASC: 'RECOMMENDATIONS_ASC' as const
}

export const enumEditionState = {
   HIDDEN: 'HIDDEN' as const,
   VISIBLE: 'VISIBLE' as const,
   CHALLENGE_REWARD_UNRELEASED: 'CHALLENGE_REWARD_UNRELEASED' as const,
   CHALLENGE_REWARD_RELEASED: 'CHALLENGE_REWARD_RELEASED' as const,
   CHALLENGE_REWARD_COMING_SOON: 'CHALLENGE_REWARD_COMING_SOON' as const
}

export const enumExchangeRateCurrency = {
   USD: 'USD' as const,
   ETH: 'ETH' as const,
   FLOW: 'FLOW' as const
}

export const enumFeatureFlagKey = {
   P2P: 'P2P' as const,
   P2P_DELISTING: 'P2P_DELISTING' as const,
   P2P_LISTING: 'P2P_LISTING' as const,
   P2P_PURCHASING: 'P2P_PURCHASING' as const,
   PACK_OPENING: 'PACK_OPENING' as const,
   PACK_TRANSFERS: 'PACK_TRANSFERS' as const,
   PACKS: 'PACKS' as const,
   TRANSFERS: 'TRANSFERS' as const,
   PUBLIC_COLLECTOR_SCORE: 'PUBLIC_COLLECTOR_SCORE' as const,
   TRADE_INS: 'TRADE_INS' as const
}

export const enumForSaleFilter = {
   FOR_SALE: 'FOR_SALE' as const,
   NOT_FOR_SALE: 'NOT_FOR_SALE' as const
}

export const enumGiglabsListingType = {
   LIMITED: 'LIMITED' as const,
   OPEN: 'OPEN' as const,
   AUCTION: 'AUCTION' as const
}

export const enumJoinDropSquadError = {
   DROP_SQUAD_FULL: 'DROP_SQUAD_FULL' as const,
   ALREADY_ASSOCIATED: 'ALREADY_ASSOCIATED' as const,
   NOT_FOUND: 'NOT_FOUND' as const,
   INVALID_PACK_LISTING: 'INVALID_PACK_LISTING' as const,
   DROP_STARTED: 'DROP_STARTED' as const
}

export const enumKycStatus = {
   NOT_INITIATED: 'NOT_INITIATED' as const,
   INITIATED: 'INITIATED' as const,
   UNSUCCESSFUL_ATTEMPT: 'UNSUCCESSFUL_ATTEMPT' as const,
   FAILED: 'FAILED' as const,
   SUCCESS: 'SUCCESS' as const
}

export const enumKycType = {
   FULL: 'FULL' as const,
   LIGHT: 'LIGHT' as const
}

export const enumLeaderboardKind = {
   PLAYER: 'PLAYER' as const,
   TEAM: 'TEAM' as const
}

export const enumLeaderboardSortType = {
   SCORE_ASC: 'SCORE_ASC' as const,
   SCORE_DESC: 'SCORE_DESC' as const
}

export const enumLeague = {
   NBA: 'NBA' as const,
   WNBA: 'WNBA' as const
}

export const enumLeaveDropSquadError = {
   NOT_FOUND: 'NOT_FOUND' as const
}

export const enumLockStatusFilter = {
   LOCKED: 'LOCKED' as const,
   NOT_LOCKED: 'NOT_LOCKED' as const
}

export const enumMarketplaceTransactionSortType = {
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   PRICE_ASC: 'PRICE_ASC' as const,
   PRICE_DESC: 'PRICE_DESC' as const
}

export const enumMaxOrderQuantityFeature = {
   COLLECTOR_SCORE: 'COLLECTOR_SCORE' as const,
   TOPSHOT_SCORE: 'TOPSHOT_SCORE' as const
}

export const enumMaxOrderQuantityOperator = {
   PICK: 'PICK' as const
}

export const enumMintedMomentSortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   ACQUIRED_AT_ASC: 'ACQUIRED_AT_ASC' as const,
   ACQUIRED_AT_DESC: 'ACQUIRED_AT_DESC' as const,
   RARITY_ASC: 'RARITY_ASC' as const,
   RARITY_DESC: 'RARITY_DESC' as const,
   PRICE_USD_ASC: 'PRICE_USD_ASC' as const,
   PRICE_USD_DESC: 'PRICE_USD_DESC' as const,
   PRICE_USD_ASC_NULLS_LAST: 'PRICE_USD_ASC_NULLS_LAST' as const,
   SERIAL_NUMBER_ASC: 'SERIAL_NUMBER_ASC' as const,
   SERIAL_NUMBER_DESC: 'SERIAL_NUMBER_DESC' as const,
   PLAYER_FIRST_NAME_ASC: 'PLAYER_FIRST_NAME_ASC' as const,
   PLAYER_FIRST_NAME_DESC: 'PLAYER_FIRST_NAME_DESC' as const,
   PLAYER_LAST_NAME_ASC: 'PLAYER_LAST_NAME_ASC' as const,
   PLAYER_LAST_NAME_DESC: 'PLAYER_LAST_NAME_DESC' as const,
   TOPSHOT_SCORE_ASC: 'TOPSHOT_SCORE_ASC' as const,
   TOPSHOT_SCORE_DESC: 'TOPSHOT_SCORE_DESC' as const,
   LAST_PURCHASE_PRICE_ASC: 'LAST_PURCHASE_PRICE_ASC' as const,
   LAST_PURCHASE_PRICE_DESC: 'LAST_PURCHASE_PRICE_DESC' as const,
   AVERAGE_SALE_PRICE_ASC: 'AVERAGE_SALE_PRICE_ASC' as const,
   AVERAGE_SALE_PRICE_DESC: 'AVERAGE_SALE_PRICE_DESC' as const
}

export const enumMomentListingSortType = {
   PRICE_USD_ASC: 'PRICE_USD_ASC' as const,
   PRICE_USD_DESC: 'PRICE_USD_DESC' as const,
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   GAME_DATE_ASC: 'GAME_DATE_ASC' as const,
   GAME_DATE_DESC: 'GAME_DATE_DESC' as const,
   SERIAL_NUMBER_ASC: 'SERIAL_NUMBER_ASC' as const,
   SERIAL_NUMBER_DESC: 'SERIAL_NUMBER_DESC' as const,
   MOST_WATCHED_ASC: 'MOST_WATCHED_ASC' as const,
   MOST_WATCHED_DESC: 'MOST_WATCHED_DESC' as const
}

export const enumMomentListingType = {
   BY_VENDOR: 'BY_VENDOR' as const,
   BY_USERS: 'BY_USERS' as const
}

export const enumMomentTier = {
   MOMENT_TIER_NIL: 'MOMENT_TIER_NIL' as const,
   MOMENT_TIER_COMMON: 'MOMENT_TIER_COMMON' as const,
   MOMENT_TIER_RARE: 'MOMENT_TIER_RARE' as const,
   MOMENT_TIER_LEGENDARY: 'MOMENT_TIER_LEGENDARY' as const,
   MOMENT_TIER_ULTIMATE: 'MOMENT_TIER_ULTIMATE' as const,
   MOMENT_TIER_FANDOM: 'MOMENT_TIER_FANDOM' as const,
   MOMENT_TIER_ANTHOLOGY: 'MOMENT_TIER_ANTHOLOGY' as const
}

export const enumMomentTradeInRequestState = {
   CREATED: 'CREATED' as const,
   INVOCATION_INTENT_CREATED: 'INVOCATION_INTENT_CREATED' as const,
   INVOCATION_SUBMITTED: 'INVOCATION_SUBMITTED' as const,
   SUCCEEDED: 'SUCCEEDED' as const,
   FAILED: 'FAILED' as const
}

export const enumMomentTradeInRequestStatus = {
   PROCESSING: 'PROCESSING' as const,
   FAILED: 'FAILED' as const,
   SUCCEEDED: 'SUCCEEDED' as const
}

export const enumMomentTransferRequestState = {
   CREATED: 'CREATED' as const,
   REQUEST_VALIDATED: 'REQUEST_VALIDATED' as const,
   INVOCATION_INTENT_CREATED: 'INVOCATION_INTENT_CREATED' as const,
   INVOCATION_SUBMITTED: 'INVOCATION_SUBMITTED' as const,
   SUCCEEDED: 'SUCCEEDED' as const,
   REQUEST_VALIDATION_FAILED: 'REQUEST_VALIDATION_FAILED' as const,
   FAILED: 'FAILED' as const
}

export const enumMomentTransferRequestStatus = {
   PROCESSING: 'PROCESSING' as const,
   FAILED: 'FAILED' as const,
   SUCCEEDED: 'SUCCEEDED' as const
}

export const enumMomentTransferValidationResults = {
   VALIDATION_RESULTS_OK: 'VALIDATION_RESULTS_OK' as const,
   VALIDATION_RESULTS_ERROR: 'VALIDATION_RESULTS_ERROR' as const,
   VALIDATION_RESULTS_MOMENT_LOCKED: 'VALIDATION_RESULTS_MOMENT_LOCKED' as const,
   VALIDATION_RESULTS_ACCOUNT_AGE: 'VALIDATION_RESULTS_ACCOUNT_AGE' as const,
   VALIDATION_RESULTS_INSUFFICIENT_MOMENTS: 'VALIDATION_RESULTS_INSUFFICIENT_MOMENTS' as const
}

export const enumOfferType = {
   NIL: 'NIL' as const,
   Serial: 'Serial' as const,
   Edition: 'Edition' as const,
   Parallel: 'Parallel' as const
}

export const enumOfferVersion = {
   V1: 'V1' as const,
   V2: 'V2' as const
}

export const enumOfferVisibility = {
   VISIBLE: 'VISIBLE' as const,
   HIDDEN: 'HIDDEN' as const
}

export const enumOfferVisibilityFilter = {
   ALL: 'ALL' as const,
   VISIBLE: 'VISIBLE' as const,
   HIDDEN: 'HIDDEN' as const
}

export const enumOnChainPackState = {
   NIL: 'NIL' as const,
   REVEAL_PACK_SUCCEEDED: 'REVEAL_PACK_SUCCEEDED' as const
}

export const enumOnChainPackStatus = {
   SEALED: 'SEALED' as const,
   REVEALED: 'REVEALED' as const,
   OPENED: 'OPENED' as const
}

export const enumOrderState = {
   CREATED: 'CREATED' as const,
   PURCHASE_INTENT_CREATED: 'PURCHASE_INTENT_CREATED' as const,
   PROCESSING_RESERVATION: 'PROCESSING_RESERVATION' as const,
   MOMENT_RESERVED: 'MOMENT_RESERVED' as const,
   VALIDATING_MOMENT: 'VALIDATING_MOMENT' as const,
   MOMENT_VALIDATED: 'MOMENT_VALIDATED' as const,
   MOMENT_UNAVAILABLE: 'MOMENT_UNAVAILABLE' as const,
   PAYMENT_FAILED: 'PAYMENT_FAILED' as const,
   PAYMENT_SUCCEEDED: 'PAYMENT_SUCCEEDED' as const,
   PROCESSING_MINTING: 'PROCESSING_MINTING' as const,
   MINTING_SUCCEEDED: 'MINTING_SUCCEEDED' as const,
   MINTING_FAILED: 'MINTING_FAILED' as const,
   PROCESSING_TRANSFER: 'PROCESSING_TRANSFER' as const,
   TRANSFER_SUCCEEDED: 'TRANSFER_SUCCEEDED' as const,
   TRANSFER_FAILED: 'TRANSFER_FAILED' as const,
   PROCESSING_PAYMENT: 'PROCESSING_PAYMENT' as const
}

export const enumOrderStatus = {
   SUBMITTED: 'SUBMITTED' as const,
   PROCESSING: 'PROCESSING' as const,
   FAILED: 'FAILED' as const,
   COMPLETED: 'COMPLETED' as const
}

export const enumP2PListingOrderState = {
   NIL: 'NIL' as const,
   CREATED: 'CREATED' as const,
   OWNERSHIP_VERIFIED: 'OWNERSHIP_VERIFIED' as const,
   LISTING_INVOCATION_INTENT_CREATED: 'LISTING_INVOCATION_INTENT_CREATED' as const,
   LISTING_INVOCATION_SUBMITTED: 'LISTING_INVOCATION_SUBMITTED' as const,
   LISTING_SUCCEEDED: 'LISTING_SUCCEEDED' as const,
   LISTING_CANCELLED: 'LISTING_CANCELLED' as const,
   MOMENT_SOLD: 'MOMENT_SOLD' as const,
   DELISTING_REQUESTED: 'DELISTING_REQUESTED' as const,
   DELISTING_INVOCATION_INTENT_CREATED: 'DELISTING_INVOCATION_INTENT_CREATED' as const,
   DELISTING_INVOCATION_SUBMITTED: 'DELISTING_INVOCATION_SUBMITTED' as const,
   DELISTING_SUCCEEDED: 'DELISTING_SUCCEEDED' as const,
   DELISTING_FAILED: 'DELISTING_FAILED' as const,
   OWNERSHIP_VERIFICATION_FAILED: 'OWNERSHIP_VERIFICATION_FAILED' as const,
   LISTING_FAILED: 'LISTING_FAILED' as const
}

export const enumP2PListingOrderStatus = {
   NIL: 'NIL' as const,
   PROCESSING: 'PROCESSING' as const,
   FAILED: 'FAILED' as const,
   LISTED: 'LISTED' as const,
   DELISTED: 'DELISTED' as const,
   SOLD: 'SOLD' as const
}

export const enumP2PPurchaseOrderFailureReason = {
   MOMENT_NO_LONGER_AVAILABLE: 'MOMENT_NO_LONGER_AVAILABLE' as const
}

export const enumP2PPurchaseOrderState = {
   CREATED: 'CREATED' as const,
   USERS_VERIFIED: 'USERS_VERIFIED' as const,
   CREATE_INTENT_SUCCEEDED: 'CREATE_INTENT_SUCCEEDED' as const,
   PAYMENT_SUBMITTED: 'PAYMENT_SUBMITTED' as const,
   PAYMENT_SUCCEEDED: 'PAYMENT_SUCCEEDED' as const,
   PURCHASE_SUCCEEDED: 'PURCHASE_SUCCEEDED' as const,
   USER_VERIFICATION_FAILED: 'USER_VERIFICATION_FAILED' as const,
   PAYMENT_FAILED: 'PAYMENT_FAILED' as const,
   MOMENT_UNAVAILABLE: 'MOMENT_UNAVAILABLE' as const,
   PURCHASE_FAILED: 'PURCHASE_FAILED' as const
}

export const enumP2PPurchaseOrderStatus = {
   PROCESSING: 'PROCESSING' as const,
   FAILED: 'FAILED' as const,
   SUCCEEDED: 'SUCCEEDED' as const
}

export const enumPackListingExpiryStateFilter = {
   ACTIVE: 'ACTIVE' as const,
   EXPIRED: 'EXPIRED' as const
}

export const enumPackListingImageType = {
   DEFAULT: 'DEFAULT' as const,
   BACKGROUND: 'BACKGROUND' as const
}

export const enumPackListingPackEditionSort = {
   PLAYER_FIRST_NAME: 'PLAYER_FIRST_NAME' as const
}

export const enumPackListingSortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const
}

export const enumPackOrderState = {
   NIL: 'NIL' as const,
   CREATED: 'CREATED' as const,
   RESERVATION_SUCCEEDED: 'RESERVATION_SUCCEEDED' as const,
   RESERVATION_FAILED: 'RESERVATION_FAILED' as const,
   RESERVATION_TIMEOUT: 'RESERVATION_TIMEOUT' as const,
   CREATE_INTENT_SUCCEEDED: 'CREATE_INTENT_SUCCEEDED' as const,
   CREATE_INTENT_FAILED: 'CREATE_INTENT_FAILED' as const,
   PAYMENT_SUCCEEDED: 'PAYMENT_SUCCEEDED' as const,
   PAYMENT_FAILED: 'PAYMENT_FAILED' as const,
   CANCEL_RESERVATION_REQUESTED: 'CANCEL_RESERVATION_REQUESTED' as const,
   RESERVATION_CANCELLED: 'RESERVATION_CANCELLED' as const,
   PAYMENT_CANCELLATION_REQUESTED: 'PAYMENT_CANCELLATION_REQUESTED' as const,
   PAYMENT_CANCELLATION_SUCCEEDED: 'PAYMENT_CANCELLATION_SUCCEEDED' as const,
   INTENT_CANCELLATION_REQUESTED: 'INTENT_CANCELLATION_REQUESTED' as const,
   INTENT_CANCELLATION_SUCCEEDED: 'INTENT_CANCELLATION_SUCCEEDED' as const,
   INTENT_CANCELLATION_FAILED: 'INTENT_CANCELLATION_FAILED' as const,
   INTENT_EXPIRED: 'INTENT_EXPIRED' as const,
   FULFILLMENT_SUCCEEDED: 'FULFILLMENT_SUCCEEDED' as const,
   FULFILLMENT_FAILED: 'FULFILLMENT_FAILED' as const,
   FULFILLMENT_REQUESTED: 'FULFILLMENT_REQUESTED' as const,
   FULFILLMENT_TIMEOUT: 'FULFILLMENT_TIMEOUT' as const,
   FULFILLMENT_EXPIRED: 'FULFILLMENT_EXPIRED' as const
}

export const enumPackOrderStatus = {
   NIL: 'NIL' as const,
   SUBMITTED: 'SUBMITTED' as const,
   PROCESSING: 'PROCESSING' as const,
   FAILED: 'FAILED' as const,
   COMPLETED: 'COMPLETED' as const
}

export const enumPackReservationPaymentStatus = {
   AWAITING_CONFIRMATION: 'AWAITING_CONFIRMATION' as const,
   APPROVED: 'APPROVED' as const,
   CANCELLED: 'CANCELLED' as const,
   SUCCEEDED: 'SUCCEEDED' as const
}

export const enumPackState = {
   SEALED: 'SEALED' as const,
   OPEN_PACK_REQUESTED: 'OPEN_PACK_REQUESTED' as const,
   OPEN_PACK_FAILED: 'OPEN_PACK_FAILED' as const,
   OPEN_PACK_SUCCEEDED: 'OPEN_PACK_SUCCEEDED' as const,
   FULFILL_PACK_REQUESTED: 'FULFILL_PACK_REQUESTED' as const,
   FULFILL_PACK_TIMEOUT: 'FULFILL_PACK_TIMEOUT' as const,
   FULFILL_PACK_EXPIRED: 'FULFILL_PACK_EXPIRED' as const,
   FULFILL_PACK_FAILED: 'FULFILL_PACK_FAILED' as const,
   FULFILL_PACK_SUCCEEDED: 'FULFILL_PACK_SUCCEEDED' as const
}

export const enumPackStatus = {
   SEALED: 'SEALED' as const,
   OPENED: 'OPENED' as const,
   FULFILLED: 'FULFILLED' as const
}

export const enumPaymentProvider = {
   DAPPER: 'DAPPER' as const,
   IAP: 'IAP' as const
}

export const enumPlayImageType = {
   PLAY_IMAGE_TYPE_NIL: 'PLAY_IMAGE_TYPE_NIL' as const,
   PLAY_IMAGE_TYPE_PLAYER: 'PLAY_IMAGE_TYPE_PLAYER' as const
}

export const enumPlaySortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const,
   DATE_OF_MOMENT_ASC: 'DATE_OF_MOMENT_ASC' as const,
   DATE_OF_MOMENT_DESC: 'DATE_OF_MOMENT_DESC' as const
}

export const enumPlayStatus = {
   RECEIVED: 'RECEIVED' as const,
   DRAFT: 'DRAFT' as const,
   REVIEW: 'REVIEW' as const,
   APPROVED: 'APPROVED' as const,
   REJECTED: 'REJECTED' as const,
   PUBLISHED: 'PUBLISHED' as const
}

export const enumPlayVideoType = {
   PLAY_VIDEO_TYPE_VERTICAL: 'PLAY_VIDEO_TYPE_VERTICAL' as const,
   PLAY_VIDEO_TYPE_SQUARE: 'PLAY_VIDEO_TYPE_SQUARE' as const
}

export const enumPlayerPosition = {
   NA: 'NA' as const,
   C: 'C' as const,
   CF: 'CF' as const,
   F: 'F' as const,
   FC: 'FC' as const,
   FG: 'FG' as const,
   G: 'G' as const,
   GF: 'GF' as const,
   PF: 'PF' as const,
   PG: 'PG' as const,
   SF: 'SF' as const,
   SG: 'SG' as const
}

export const enumPurchaseType = {
   SOFT_CURRENCY_PURCHASE: 'SOFT_CURRENCY_PURCHASE' as const,
   BASIC_MOMENT_PURCHASE: 'BASIC_MOMENT_PURCHASE' as const,
   NFT_MOMENT_PURCHASE: 'NFT_MOMENT_PURCHASE' as const
}

export const enumQuarter = {
   NA: 'NA' as const,
   Q1: 'Q1' as const,
   Q2: 'Q2' as const,
   Q3: 'Q3' as const,
   Q4: 'Q4' as const,
   OT1: 'OT1' as const,
   OT2: 'OT2' as const,
   OT3: 'OT3' as const,
   OT4: 'OT4' as const,
   OT5: 'OT5' as const,
   OT6: 'OT6' as const,
   OT7: 'OT7' as const,
   OT8: 'OT8' as const,
   OT9: 'OT9' as const,
   OT10: 'OT10' as const
}

export const enumRecommendationType = {
   NONE: 'NONE' as const,
   SIGNUP: 'SIGNUP' as const,
   PERSONALIZED: 'PERSONALIZED' as const
}

export const enumReferralType = {
   FIRST_PURCHASE: 'FIRST_PURCHASE' as const
}

export const enumRemoveFromDropSquadError = {
   UNAUTHORIZED: 'UNAUTHORIZED' as const,
   NOT_FOUND: 'NOT_FOUND' as const
}

export const enumRequirementName = {
   ALLOWLIST: 'ALLOWLIST' as const,
   TOPSHOT_SCORE: 'TOPSHOT_SCORE' as const,
   PACKS_PURCHASED: 'PACKS_PURCHASED' as const,
   TRADE_TICKET: 'TRADE_TICKET' as const,
   REMAINING_PACKS: 'REMAINING_PACKS' as const,
   MAX_ORDER_QUANTITY: 'MAX_ORDER_QUANTITY' as const,
   MIN_MOMENTS_PURCHASED: 'MIN_MOMENTS_PURCHASED' as const,
   PENDING_PACK_ORDER: 'PENDING_PACK_ORDER' as const,
   COOLDOWN_TIME: 'COOLDOWN_TIME' as const,
   FAVORITE_TEAM_MOMENTS_OWNED: 'FAVORITE_TEAM_MOMENTS_OWNED' as const,
   PLAY_TYPE_HANDLES: 'PLAY_TYPE_HANDLES' as const,
   PLAY_TYPE_DUNK: 'PLAY_TYPE_DUNK' as const,
   PLAY_TYPE_ASSIST: 'PLAY_TYPE_ASSIST' as const,
   PLAY_TYPE_JUMPSHOT: 'PLAY_TYPE_JUMPSHOT' as const,
   PLAY_TYPE_STEAL: 'PLAY_TYPE_STEAL' as const,
   PLAY_TYPE_BLOCK: 'PLAY_TYPE_BLOCK' as const,
   PLAY_TYPE_THREE_POINTER: 'PLAY_TYPE_THREE_POINTER' as const,
   PLAY_CATEGORY_LAYUP: 'PLAY_CATEGORY_LAYUP' as const
}

export const enumReservePackResponseError = {
   INELIGIBLE: 'INELIGIBLE' as const,
   EXCEEDED_QUANTITY: 'EXCEEDED_QUANTITY' as const,
   RESERVATION_EXISTS: 'RESERVATION_EXISTS' as const
}

export const enumRole = {
   SUPER_ADMIN: 'SUPER_ADMIN' as const,
   CREATOR_ADMIN: 'CREATOR_ADMIN' as const,
   MARKETPLACE_ADMIN: 'MARKETPLACE_ADMIN' as const,
   REVIEWER_ADMIN: 'REVIEWER_ADMIN' as const
}

export const enumSearchOffersSortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   PRICE_ASC: 'PRICE_ASC' as const,
   PRICE_DESC: 'PRICE_DESC' as const
}

export const enumSearchOffersState = {
   OPENED: 'OPENED' as const,
   COMPLETED: 'COMPLETED' as const,
   CANCELED: 'CANCELED' as const,
   PURCHASED: 'PURCHASED' as const,
   ALL: 'ALL' as const
}

export const enumSearchOffersType = {
   MADE: 'MADE' as const,
   RECEIVED: 'RECEIVED' as const
}

export const enumSeriesFilter = {
   SERIES_1: 'SERIES_1' as const,
   SERIES_2: 'SERIES_2' as const,
   SERIES_S2021: 'SERIES_S2021' as const,
   SERIES_3: 'SERIES_3' as const,
   SERIES_4: 'SERIES_4' as const
}

export const enumSetImageType = {
   SET_IMAGE_TYPE_NIL: 'SET_IMAGE_TYPE_NIL' as const,
   SPECIAL_EDITION_GAME_PANEL_EXTERIOR: 'SPECIAL_EDITION_GAME_PANEL_EXTERIOR' as const
}

export const enumShowcasesSortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const
}

export const enumSignableType = {
   REPACK: 'REPACK' as const,
   MARKETPLACE_PACKS: 'MARKETPLACE_PACKS' as const
}

export const enumSpecialNftType = {
   ALL_STAR_NFT: 'ALL_STAR_NFT' as const,
   ANNIVERSARY_NFT: 'ANNIVERSARY_NFT' as const,
   ALL_NFT: 'ALL_NFT' as const
}

export const enumSubmitVoteForPollError = {
   POLL_NOT_STARTED: 'POLL_NOT_STARTED' as const,
   POLL_EXPIRED: 'POLL_EXPIRED' as const
}

export const enumTagLevel = {
   NIL: 'NIL' as const,
   MOMENT: 'MOMENT' as const,
   SETPLAY: 'SETPLAY' as const,
   PLAY: 'PLAY' as const
}

export const enumTopshotScoreBonusId = {
   FAVORITE_TEAM: 'FAVORITE_TEAM' as const,
   EARLY_ADOPTER: 'EARLY_ADOPTER' as const
}

export const enumUserPackListingsSort = {
   CREATED_AT: 'CREATED_AT' as const
}

export const enumUserSearchSortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   TOPSHOT_SCORE_DESC: 'TOPSHOT_SCORE_DESC' as const
}

export const enumUserSetAssociationSortType = {
   COMPLETED_AT_ASC: 'COMPLETED_AT_ASC' as const,
   COMPLETED_AT_DESC: 'COMPLETED_AT_DESC' as const,
   UPDATED_AT_ASC: 'UPDATED_AT_ASC' as const,
   UPDATED_AT_DESC: 'UPDATED_AT_DESC' as const
}

export const enumValueType = {
   STRING: 'STRING' as const,
   BOOLEAN: 'BOOLEAN' as const,
   INT: 'INT' as const
}

export const enumVariableChallengeCategory = {
   SHOWCASE: 'SHOWCASE' as const,
   FLASH: 'FLASH' as const,
   BURN: 'BURN' as const,
   HYBRID: 'HYBRID' as const
}

export const enumVariableChallengeSlotType = {
   NIL: 'NIL' as const,
   SAVE: 'SAVE' as const,
   BURN: 'BURN' as const,
   FREEZE: 'FREEZE' as const,
   LOCK: 'LOCK' as const
}

export const enumVariableChallengeSubmissionStatus = {
   VALID: 'VALID' as const,
   MISSING_REQUIREMENTS: 'MISSING_REQUIREMENTS' as const,
   BURNING_PENDING: 'BURNING_PENDING' as const,
   USER_ACTION_PENDING: 'USER_ACTION_PENDING' as const
}

export const enumVisualIdType = {
   SET_VISUAL_NIL: 'SET_VISUAL_NIL' as const,
   SET_VISUAL_COMMON: 'SET_VISUAL_COMMON' as const,
   SET_VISUAL_RARE: 'SET_VISUAL_RARE' as const,
   SET_VISUAL_LEGENDARY: 'SET_VISUAL_LEGENDARY' as const,
   SET_VISUAL_ULTIMATE: 'SET_VISUAL_ULTIMATE' as const,
   SET_VISUAL_FANDOM: 'SET_VISUAL_FANDOM' as const,
   SET_VISUAL_ANTHOLOGY: 'SET_VISUAL_ANTHOLOGY' as const
}

export const enumWatchedEditionsSortType = {
   CREATED_AT_ASC: 'CREATED_AT_ASC' as const,
   CREATED_AT_DESC: 'CREATED_AT_DESC' as const,
   MOST_WATCHED_ASC: 'MOST_WATCHED_ASC' as const,
   MOST_WATCHED_DESC: 'MOST_WATCHED_DESC' as const,
   MOST_GAINED_ASC: 'MOST_GAINED_ASC' as const,
   MOST_GAINED_DESC: 'MOST_GAINED_DESC' as const
}

export const enumheadlineSourceType = {
   OVERRIDE: 'OVERRIDE' as const,
   PLAYER: 'PLAYER' as const,
   TEAM: 'TEAM' as const
}
