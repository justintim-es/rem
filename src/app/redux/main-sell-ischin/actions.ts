import { createAction, props } from "@ngrx/store";
import { IActionCreator, IMainSellIschinFetch, IMainSellIschinFetchError } from "../combiner";
export const RDX_MAIN_SELL_ISCHIN_PUSH = 'RDX_MAIN_SELL_ISCHIN_PUSH';
export const rdxMainSellIschinPush = createAction(
  RDX_MAIN_SELL_ISCHIN_PUSH,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_ISCHIN_FETCH = 'RDX_MAIN_SELL_ISCHIN_FETCH';
export const rdxMainSellIschinFetch = createAction(
    RDX_MAIN_SELL_ISCHIN_FETCH,
    props<IActionCreator<IMainSellIschinFetch>>()
)
export const RDX_MAIN_SELL_ISCHIN_FETCH_SUCCESS = 'RDX_MAIN_SELL_ISCHIN_FETCH_SUCCESS';
export const rdxMainSellIschinFetchSuccess = createAction(
  RDX_MAIN_SELL_ISCHIN_FETCH_SUCCESS,
  props<IActionCreator<number>>()
)
export const RDX_MAIN_SELL_ISCHIN_FETCH_ERROR = 'RDX_MAIN_SELL_ISCHIN_FETCH_ERROR';
export const rdxMainSellIschinFetchError = createAction(
  RDX_MAIN_SELL_ISCHIN_FETCH_ERROR,
  props<IActionCreator<IMainSellIschinFetchError>>()
)
