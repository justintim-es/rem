import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainSellActivateReducer } from "./reducer";

const getMainSellActivateFeatureState = createFeatureSelector<IMainSellActivateReducer>('mainSellActivateReducer');

export const getMainSellActivateIsActivateFixum = createSelector(
  getMainSellActivateFeatureState,
  state => state.isActivateFixum
)
export const getMainSellActivateIsActivateFixumSuccess = createSelector(
  getMainSellActivateFeatureState,
  state => state.isActivateFixumSuccess
)
export const getMainSellActivateIsActivateFixumError = createSelector(
  getMainSellActivateFeatureState,
  state => state.isActivateFixumError
)
export const getMainSellActivateIsActivateFixumErrorMessage = createSelector(
  getMainSellActivateFeatureState,
  state => state.isActivateFixumErrorMessage
)
