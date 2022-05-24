import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainSellIschinReducer } from "./reducer";


export const getMainSellIschinFeatureState = createFeatureSelector<IMainSellIschinReducer>('mainSellIschinReducer');

export const getMainSellIschinIsTransferFetch = (ischin: number) => createSelector(
  getMainSellIschinFeatureState,
  state => state.isTransferFetchs.get(ischin)
)
export const getMainSellIschinIsTransferFetchSuccess = (ischin: number) =>  createSelector(
  getMainSellIschinFeatureState,
  state => state.isTransferFetchSuccesss.get(ischin)
)
export const getMainSellIschinIsTransferFetchError = (ischin: number) => createSelector(
  getMainSellIschinFeatureState,
  state => state.isTransferFetchErrors.get(ischin)
)
export const getMainSellIschinTransferFetchErrorMessage = (ischin: number) => createSelector(
  getMainSellIschinFeatureState,
  state => state.transferFetchErrorMessages.get(ischin)
)
