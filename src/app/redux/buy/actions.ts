import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_BUY_FETCH  = 'RDX_BUY_FETCH';
export const rdxBuyFetch = createAction(
    RDX_BUY_FETCH,
    props<IActionCreator<any>>()
)
export const RDX_BUY_FETCH_SUCCESS = 'RDX_BUY_FETCH_SUCCESS';
export const rdxBuyFetchSuccess = createAction(
    RDX_BUY_FETCH_SUCCESS,
    props<IActionCreator<any>>()
)
export const RDX_BUY_FETCH_ERROR = 'RDX_BUY_FETCH_ERROR';
export const rdxBuyFetchError = createAction(
    RDX_BUY_FETCH_ERROR,
    props<IActionCreator<any>>()
)
export const RDX_BUY_IS_PLEASE_TRUE = 'RDX_BUY_IS_PLEASE_TRUE';
export const rdxBuyIsPleaseTrue = createAction(
    RDX_BUY_IS_PLEASE_TRUE,
    props<IActionCreator<any>>()
)