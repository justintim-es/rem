import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainBuyDefencesReducer } from "./reducer";

const getMainBuyDefencesFeatureState = createFeatureSelector<IMainBuyDefencesReducer>('mainBuyDefencesReducer');

export const getMainBuyDefencesIsFetch = createSelector(
  getMainBuyDefencesFeatureState,
  state => state.isFetch
);
export const getMainBuyDefencesIsFetchSuccess = createSelector(
  getMainBuyDefencesFeatureState,
  state => state.isFetchSuccess
)
export const getMainBuyDefencesIsFetchError = createSelector(
  getMainBuyDefencesFeatureState,
  state => state.isFetchError
)
export const getMainBuyDefencesLiber = createSelector(
  getMainBuyDefencesFeatureState,
  state => state.liber
)
export const getMainBuyDefencesFixum = createSelector(
  getMainBuyDefencesFeatureState,
  state => state.fixum
)