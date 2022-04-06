import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ISellReducer } from './reducer';
export const getFeatureSellStateSelector = createFeatureSelector<ISellReducer>('sellReducer');

export const getSellIsAccountId = createSelector(
  getFeatureSellStateSelector,
  state => state.isAccountId
)
export const getSellAccountId = createSelector(
  getFeatureSellStateSelector,
  state => state.accountId
)
export const getSellIsOnboardSuccess = createSelector(
  getFeatureSellStateSelector,
  state => state.isOnboardSuccess
)
export const getSellIsOnboard = createSelector(
  getFeatureSellStateSelector,
  state => state.isOnboard 
);
export const getSellIsEmail = createSelector(
  getFeatureSellStateSelector,
  state => state.isEmail
);