import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainSellForReducer } from "./reducer";

const getMainSellForFeatureState = createFeatureSelector<IMainSellForReducer>('mainSellForReducer');
export const getMainSellForIsFetch = (ischin: number) => createSelector(
    getMainSellForFeatureState,
    state => state.isFetchs.get(ischin) as boolean
)
export const getMainSellForIsFetchSuccess = (ischin: number) =>  createSelector(
  getMainSellForFeatureState,
  state => state.isFetchSuccesss.get(ischin) as boolean
);
export const getMainSellForIsFetchError = (ischin: number) =>  createSelector(
  getMainSellForFeatureState,
  state => state.isFetchErrors.get(ischin) as boolean
)
export const getMainSellForIsFetchErrorMessage = (ischin: number) =>  createSelector(
  getMainSellForFeatureState,
  state => state.fetchErrorMessages.get(ischin) as string
)
