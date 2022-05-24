import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainWalletProtectReducer } from "./reducer";

const getMainWalletProtectFeatureState = createFeatureSelector<IMainWalletProtectReducer>('mainWalletProtectReducer');

export const getMainWalletProtectIsLoading = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isDefences
);
export const getMainWalletProtectBaseDefence = createSelector(
  getMainWalletProtectFeatureState,
  state => state.baseDefence
)
export const getMainWalletProtectLiberDefences = createSelector(
  getMainWalletProtectFeatureState,
  state => state.liberDefences
)
export const getMainWalletProtectFixumDefences = createSelector(
  getMainWalletProtectFeatureState,
  state => state.fixumDefences
)
export const getMainWalletProtectIsOtherBid = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isOtherBid
)
export const getMainWalletProtectIsYourBid = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isYourBid
)
export const getMainWalletProtectIsOtherBidFetch = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isOtherBidFetch
)
export const getMainWalletProtectIsYourBidFetch = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isYourBidFetch
)
export const getMainWalletProtectIsOtherBidFetchSuccess = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isOtherBidFetchSuccess
)
export const getMainWalletProtectIsYourBidFetchSuccess = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isYourBidFetchSuccess
)
export const getMainWalletProtectIsFetchError = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isFetchError
)
export const getMainWalletProtectFetchErrorMessage = createSelector(
  getMainWalletProtectFeatureState,
  state => state.fetchErrorMessage
)
export const getMainWalletProtectOtherBidsLiber = createSelector(
  getMainWalletProtectFeatureState,
  state => state.otherBidsLiber
)
export const getMainWalletProtectOtherBidFixum = createSelector(
  getMainWalletProtectFeatureState,
  state => state.otherBidsFixum
)
export const getMainWalletProtectOtherBidsFixum = createSelector(
  getMainWalletProtectFeatureState,
  state => state.otherBidsFixum,
);
export const getMainWalletProtectYourBidsLiber = createSelector(
  getMainWalletProtectFeatureState,
  state => state.yourBidsLiber
);
export const getMainWalletProtectYourBidsFixum = createSelector(
  getMainWalletProtectFeatureState,
  state => state.yourBidsFixum
)
export const getMainWalletProtectIsToolbar = createSelector(
  getMainWalletProtectFeatureState,
  state => state.isToolbar
)
export const getMainWalletProtectBlocknumber = createSelector(
  getMainWalletProtectFeatureState,
  state => state.blocknumber
)
export const getMainWalletProtectOtherBidsProbationemLiber = (ischin: number) => createSelector(
  getMainWalletProtectFeatureState,
  state => state.otherBidsLiber.getIn([ischin, 'probationem'])
)
export const getMainWalletProtectOtherBidsProbationemFixum = (ischin: number) => createSelector(
  getMainWalletProtectFeatureState,
  state => state.otherBidsFixum.getIn([ischin, 'probationem'])
)
export const getMainWalletProtectYourBidsProbationemLiber = (ischin: number) => createSelector(
  getMainWalletProtectFeatureState,
  state => state.yourBidsLiber.getIn([ischin, 'probationem'])
)
export const getMainWalletProtectYourBidsProbationemFixum = (ischin: number) => createSelector(
  getMainWalletProtectFeatureState,
  state => state.yourBidsFixum.getIn([ischin, 'probationem'])
)
export const getMainWalletProtectAccounts = createSelector(
  getMainWalletProtectFeatureState,
  state => state.accounts
)
