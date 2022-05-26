import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { rdxMainSellDeleteFetch, rdxMainSellDeleteFetchError, rdxMainSellDeleteFetchSuccess } from "./actions";

export interface IMainSellDeleteReducer {
    isFetch: List<boolean>;
    isFetchSuccess: List<boolean>;
    isFetchError: List<boolean>;
    fetchErrorMessage: List<string>;
}

export const mainSellDeleteInitial: IMainSellDeleteReducer =  {
  isFetch: List(),
  isFetchSuccess: List(),
  isFetchError: List(),
  fetchErrorMessage: List()
}
export const mainSellDeleteReducer = createReducer(
  mainSellDeleteInitial,
  on(rdxMainSellDeleteFetch, (state: IMainSellDeleteReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: state.fetchErrorMessage.set(action.payload!.index, '')
    }
  }),
  on(rdxMainSellDeleteFetchSuccess, (state: IMainSellDeleteReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, true),
    }
  }),
  on(rdxMainSellDeleteFetchError, (state: IMainSellDeleteReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: state.fetchErrorMessage.set(action.payload!.index, action.payload!.message)
    }
  })
)
