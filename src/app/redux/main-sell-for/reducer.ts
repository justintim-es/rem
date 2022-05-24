import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { rdxMainSellForFetch, rdxMainSellForFetchError, rdxMainSellForFetchSuccess, rdxMainSellPush } from "./actions";

export interface IMainSellForReducer {
    isFetchs: List<boolean>;
    isFetchSuccesss: List<boolean>;
    isFetchErrors: List<boolean>;
    fetchErrorMessages: List<string>;
}
export const mainSellForInitial: IMainSellForReducer = {
  isFetchs: List(),
  isFetchSuccesss: List(),
  isFetchErrors: List(),
  fetchErrorMessages: List()
}
export const mainSellForReducer = createReducer(
  mainSellForInitial,
  on(rdxMainSellPush, (state: IMainSellForReducer) => {
    return {
      ...state,
      isFetchs: state.isFetchs.push(false),
      isFetchSuccesss: state.isFetchSuccesss.push(false),
      isFetchErrors: state.isFetchErrors.push(false),
      fetchErrorMessages: state.fetchErrorMessages.push(''),
    }
  }),
  on(rdxMainSellForFetch, (state: IMainSellForReducer, action) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainSellForFetchSuccess, (state: IMainSellForReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
    }
  }),
  on(rdxMainSellForFetchError, (state: IMainSellForReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload!
    }
  })
)
