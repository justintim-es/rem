import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainPayoutReducer } from "./reducer";

const getMainPayoutFeatureState = createFeatureSelector<IMainPayoutReducer>('mainPayoutReducer');

export const getMainPayoutIsFetch = createSelector(
  getMainPayoutFeatureState,
  state => state.isFetch
)
export const getMainPayoutIsFetchSuccess = createSelector(
  getMainPayoutFeatureState,
  state => state.isFetchSuccess
)
export const getMainPayoutIsFetchError = createSelector(
  getMainPayoutFeatureState,
  state => state.isFetchError
)
export const getMainPayoutBalance = createSelector(
  getMainPayoutFeatureState,
  state => state.balance
)
