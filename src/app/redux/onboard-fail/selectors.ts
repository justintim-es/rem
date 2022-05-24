import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IOnboardFail } from "./reducer";

const getFeatureOnboardFailSelector = createFeatureSelector<IOnboardFail>('onboardFailReducer');

export const getOnboardFailIsFetch = createSelector(
  getFeatureOnboardFailSelector,
  state => state.isFetch
);
export const getOnboardFailUrl = createSelector(
  getFeatureOnboardFailSelector,
  state => state.url
);
