import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IOnboardReducer } from "./reducer";

const getOnboardFeatureState = createFeatureSelector<IOnboardReducer>('onboardReducer');

export const getOnboardIsFetch = createSelector(
    getOnboardFeatureState,
    state => state.isFetch
)
export  const getOnboardIsFetchSuccess = createSelector(
    getOnboardFeatureState,
    state => state.isFetchSuccess
)
export const getOnboardIsFetchError = createSelector(
    getOnboardFeatureState,
    state => state.isFetchError
);
export const getOnboardFetchErrorMessage = createSelector(
    getOnboardFeatureState,
    state => state.fetchErrorMessage
)