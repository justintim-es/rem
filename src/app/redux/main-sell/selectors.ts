import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainSellReducer } from "./reducer";

const getMainSellFeatureState = createFeatureSelector<IMainSellReducer>('mainSellReducer');

export const getMainSellIsLiber = createSelector(
  getMainSellFeatureState,
  state => state.isLiber
)
export const getMainSellIsFixum = createSelector(
  getMainSellFeatureState,
  state => state.isFixum
)
export const getMainSellIsAmount  = createSelector(
  getMainSellFeatureState,
  state => state.isAmount
);
export const getMainSellIsBalance = createSelector(
  getMainSellFeatureState,
  state => state.isBalance
)
export const getMainSellFixumBalance = createSelector(
  getMainSellFeatureState,
  state => state.fixumBalance
)
export const getMainSellLiberBalance = createSelector(
  getMainSellFeatureState,
  state => state.liberBalance
)
export const getMainSellIsFetch = createSelector(
  getMainSellFeatureState,
  state => state.isFetch
)
export const getMainSellIsFetchSuccess = createSelector(
  getMainSellFeatureState,
  state => state.isFetchSuccess
)
export const getMainSellIsFetchError = createSelector(
  getMainSellFeatureState,
  state => state.isFetchError
)
export const getMainSellFetchErrorMessage = createSelector(
  getMainSellFeatureState,
  state => state.fetchErrorMessage
)
export const getMainSellSellsFilterLiber = createSelector(
  getMainSellFeatureState,
  state => state.sells.filter(x => x.liber)
)
export const getMainSellSellFilterNotLiber = createSelector(
  getMainSellFeatureState,
  state => state.sells.filter(x => !x.liber)
)
export const getMainSellIsSells = createSelector(
  getMainSellFeatureState,
  state => state.isSells
)
export const getMainSellSellsId = (ischin: number) => createSelector(
  getMainSellFeatureState,
  state => state.sells.getIn([ischin, '_id'])
)
export const getMainSellIsOnboardComplete = createSelector(
  getMainSellFeatureState,
  state => state.isOnboardComplete
)
export const getMainSellIsOnboardCompleting = createSelector(
  getMainSellFeatureState,
  state => state.isOnboardCompleting
)
export const getMainSellOnboardLink = createSelector(
  getMainSellFeatureState,
  state => state.onboardLink
)
export const getMainSellIsAccount = createSelector(
  getMainSellFeatureState,
  state => state.isAccount
)
export const getMainSellIsAccountCreateFetch = createSelector(
  getMainSellFeatureState,
  state => state.isAccountCreateFetch
)
export const getMainSellIsAccountCreateFetchSuccess = createSelector(
  getMainSellFeatureState,
  state => state.isAccountCreateFetchSuccess
)
export const getMainSellIsAccountCreateFetchError = createSelector(
  getMainSellFeatureState,
  state => state.isAccountCreateFetchError
)
export const getMainSellIsOnboardLinkFetchSuccess = createSelector(
  getMainSellFeatureState,
  state => state.isOnboardLinkFetchSuccess
)
export const getMainSellIsReuse = createSelector(
  getMainSellFeatureState,
  state => state.isReuse
)
export const getMainSellIsReuseSuccess = createSelector(
  getMainSellFeatureState,
  state => state.isReuseSuccess
)
export const getMainSellIsReuseError = createSelector(
  getMainSellFeatureState,
  state => state.isReuseError
)
export const getMainSellReuseErrorMessage = createSelector(
  getMainSellFeatureState,
  state => state.reuseErrorMessage
)
