import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IConfirmReducer } from './reducer';
const getFeatureConfirmStateSelector = createFeatureSelector<IConfirmReducer>('confirmReducer');
export const getConfirmIsFetch = createSelector(
  getFeatureConfirmStateSelector,
  state => state.isFetch
);
export const getConfirmIsFetchSuccess = createSelector(
  getFeatureConfirmStateSelector,
  state => state.isFetchSuccess
);
export const getConfirmIsFetchError = createSelector(
  getFeatureConfirmStateSelector,
  state => state.isFetchError
);
export const getConfirmFetchErrorMessage = createSelector(
  getFeatureConfirmStateSelector,
  state => state.fetchErrorMessage
);
export const getConfirmUrl = createSelector(
  getFeatureConfirmStateSelector,
  state => state.url
);  