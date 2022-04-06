import { createReducer, on } from '@ngrx/store';
import { rdxConfirmFetch, rdxConfirmFetchError, rdxConfirmFetchSuccess } from './actions';
export interface IConfirmReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
  url: string
}
export const confirmInitial: IConfirmReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: '',
  url: ''
}
export const confirmReducer = createReducer(
  confirmInitial,
  on(rdxConfirmFetch, (state: IConfirmReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchErrorMessage: ''
    }
  }),
  on(rdxConfirmFetchSuccess, (state: IConfirmReducer, action) => {
    return {
      ...state,
      isFetch: false,
      url: action.payload!,
      isFetchSuccess: false,
    }
  }),
  on(rdxConfirmFetchError, (state: IConfirmReducer, action) => {
    return {
      ...state,
      isFetch: false,
      fetchErrorMessage: action.payload!
    }
  })
)
