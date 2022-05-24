import { createReducer, on } from "@ngrx/store";
import { rdxMainPayoutFetch, rdxMainPayoutFetchError, rdxMainPayoutFetchSuccess } from "./actions";

export interface IMainPayoutReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  balance: number;
}
export const mainPayoutInitial: IMainPayoutReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  balance: 0
}
export const mainPayoutReducer = createReducer(
  mainPayoutInitial,
  on(rdxMainPayoutFetch, (state: IMainPayoutReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false
    }
  }),
  on(rdxMainPayoutFetchSuccess, (state: IMainPayoutReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      balance: action.payload!
    }
  }),
  on(rdxMainPayoutFetchError, (state: IMainPayoutReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true
    }
  })
)
