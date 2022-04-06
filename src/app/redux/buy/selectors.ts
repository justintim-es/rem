import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBuyReducer } from "./reducer";

const getBuyFeatureState = createFeatureSelector<IBuyReducer>('buyReducer');

export const getBuyIsFetch = createSelector(
    getBuyFeatureState,
    state => state.isFetch
)
export const getBuyIsFetchSuccess = createSelector(
    getBuyFeatureState,
    state => state.isFetchSuccess
)
export const getBuyIsFetchError = createSelector(
    getBuyFeatureState,
    state => state.isFetchError
)
export const getBuyFetchErrorMessage = createSelector(
    getBuyFeatureState,
    state => state.fetchErrorMessage
)
export const getBuyIsPlease = createSelector(
    getBuyFeatureState,
    state => state.isPlease
)