import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITransferReducer } from "./reducer";

const getTransferFeatureState = createFeatureSelector<ITransferReducer>('transferReducer');

export const getTransferIsFetch = createSelector(
  getTransferFeatureState,
  state => state.isFetch
)
export const getTransferIsFetchSuccess = createSelector(
  getTransferFeatureState,
  state => state.isFetchSuccess
)
export const getTransferIsFetchError = createSelector(
  getTransferFeatureState,
  state => state.isFetchError
)
export const getTransferFetchError = createSelector(
  getTransferFeatureState,
  state => state.fetchError
)

