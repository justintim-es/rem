import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";
import { IMainPayoutFetchSuccess } from "./interfaces";

export const RDX_MAIN_PAYOUT_FETCH = 'RDX_MAIN_PAYOUT_FETCH';
export const rdxMainPayoutFetch = createAction(
    RDX_MAIN_PAYOUT_FETCH,
    props<IActionCreator<any>>()
)
export const RDX_MAIN_PAYOUT_FETCH_SUCCESS = 'RDX_MAIN_PAYOUT_FETCH_SUCCESS';
export const rdxMainPayoutFetchSuccess = createAction(
  RDX_MAIN_PAYOUT_FETCH_SUCCESS,
  props<IActionCreator<IMainPayoutFetchSuccess>>()
)
export const RDX_MAIN_PAYOUT_FETCH_ERROR = 'RDX_MAIN_PAYOUT_FETCH_ERROR';
export const rdxMainPayoutFetchError = createAction(
  RDX_MAIN_PAYOUT_FETCH_ERROR,
  props<IActionCreator<any>>()
)
