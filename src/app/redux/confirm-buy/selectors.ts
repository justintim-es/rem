import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IConfirmBuy } from "./reducer";

const getConfirmBuyFeatureState = createFeatureSelector<IConfirmBuy>('confirmBuyReducer');
export const getConfirmBuyIsFetch = createSelector(
    getConfirmBuyFeatureState,
    state => state.isFetch
)
export const getConfirmBuyIsFetchSuccess = createSelector(
    getConfirmBuyFeatureState,
    state => state.isFetchSuccess
)
export const getConfirmBuyIsFetchError = createSelector(
    getConfirmBuyFeatureState,
    state => state.isFetchError
)
export const getConfirmBuyFetchErrorMessage = createSelector(
    getConfirmBuyFeatureState,
    state => state.fetchErrorMessage
)