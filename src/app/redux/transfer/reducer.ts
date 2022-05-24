import { createReducer, on } from "@ngrx/store";
import { IError } from "../combiner";
import { rdxTransferFixumFetch, rdxTransferFixumFetchError, rdxTransferFixumFetchSuccess, rdxTransferLiberFetch, rdxTransferLiberFetchError, rdxTransferLiberFetchSuccess } from "./actions";

export interface ITransferReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchError: IError;
}
export const transferInitial: ITransferReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: {
    code: 0,
    message: "",
    english: ""
  }
}
export const transferReducer = createReducer(
  transferInitial,
  on(rdxTransferLiberFetch || rdxTransferFixumFetch, (state: ITransferReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
    }
  }),
  on(rdxTransferLiberFetchSuccess || rdxTransferFixumFetchSuccess, (state: ITransferReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
    }
  }),
  on(rdxTransferLiberFetchError || rdxTransferFixumFetchError, (state: ITransferReducer, action) => {
    console.log(action.payload!);
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  })
)
