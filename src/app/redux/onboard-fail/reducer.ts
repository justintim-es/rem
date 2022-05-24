import { createReducer, on } from "@ngrx/store";
import { rdxOnboardFailFetch, rdxOnboardFailFetchError, rdxOnboardFailFetchSuccess } from "./actions";

export interface IOnboardFail {
    isFetch: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    url: string;
}
export const onboardFailInitial: IOnboardFail = {
    isFetch: false,
    isFetchError: false,
    fetchErrorMessage: '',
    url: ''
}
export const onboardFailReducer = createReducer(
  onboardFailInitial,
  on(rdxOnboardFailFetch, (state: IOnboardFail) => {
    return {
      ...state,
      isFetch: true,
      isFetchError: false,
      url: ''
    }
  }),
  on(rdxOnboardFailFetchSuccess, (state: IOnboardFail, action) => {
    return {
      ...state,
      isFetch: false,
      url: action.payload!
    }
  }),
  on(rdxOnboardFailFetchError, (state: IOnboardFail, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload!
    }
  })
)
