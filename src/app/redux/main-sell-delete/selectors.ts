import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainSellDeleteReducer } from "./reducer";

const getMainSellDeleteFeatureState = createFeatureSelector<IMainSellDeleteReducer>('mainSellDeleteReducer');

export const getMainSellDeleteIsFetch = (ischin: number) => createSelector(
  getMainSellDeleteFeatureState,
  state => state.isFetch.get(ischin)
)
export const getMainSellDeleteIsFetchSuccess = (ischin: number) => createSelector(
  getMainSellDeleteFeatureState,
  state => state.isFetchSuccess.get(ischin)
)
export const getMainSellDeleteIsFetchError = (ischin: number) => createSelector(
  getMainSellDeleteFeatureState,
  state => state.isFetchError.get(ischin)
)
