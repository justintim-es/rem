import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";
import { IMainSellForFetch } from "./interfaces";
export const RDX_MAIN_SELL_PUSH = 'RDX_MAIN_SELL_PUSH';
export const rdxMainSellPush = createAction(
  RDX_MAIN_SELL_PUSH,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_FOR_FETCH = 'RDX_MAIN_SELL_FOR_FETCH';
export const rdxMainSellForFetch = createAction(
    RDX_MAIN_SELL_FOR_FETCH,
    props<IActionCreator<IMainSellForFetch>>()
)
export const RDX_MAIN_SELL_FOR_FETCH_SUCCESS = 'RDX_MAIN_SELL_FOR_FETCH_SUCCESS';
export const rdxMainSellForFetchSuccess = createAction(
  RDX_MAIN_SELL_FOR_FETCH_SUCCESS,
  props<IActionCreator<number>>()
)
export const RDX_MAIN_SELL_FOR_FETCH_ERROR = 'RDX_MAIN_SELL_FOR_FETCH_ERROR';
export const rdxMainSellForFetchError = createAction(
  RDX_MAIN_SELL_FOR_FETCH_ERROR,
  props<IActionCreator<number>>()
)

