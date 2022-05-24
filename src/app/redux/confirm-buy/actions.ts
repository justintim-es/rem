import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_CONFIRM_BUY_FETCH = 'RDX_CONFIRM_BUY_FETCH';
export const rdxConfirmBuyFetch = createAction(
    RDX_CONFIRM_BUY_FETCH,
    props<IActionCreator<any>>()
)
export const RDX_CONFIRM_BUY_FETCH_SUCCESS = 'RDX_CONFIRM_BUY_FETCH_SUCCESS';
export const rdxConfirmBuyFetchSuccess = createAction(
    RDX_CONFIRM_BUY_FETCH_SUCCESS,
    props<IActionCreator<any>>()
)
export const RDX_CONFIRM_BUY_FETCH_ERROR = 'RDX_CONFIRM_BUY_FETCH_ERROR';
export const rdxConfirmBuyFetchError = createAction(
    RDX_CONFIRM_BUY_FETCH_ERROR,
    props<IActionCreator<any>>()
)