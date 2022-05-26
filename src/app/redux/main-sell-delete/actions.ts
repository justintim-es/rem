import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";
import { IMainSellDeleteFetch, IMainSellDeleteFetchError } from "./interfaces";

export const RDX_MAIN_SELL_DELETE_FETCH = 'RDX_MAIN_SELL_DELETE_FETCH';
export const rdxMainSellDeleteFetch = createAction(
  RDX_MAIN_SELL_DELETE_FETCH,
  props<IActionCreator<IMainSellDeleteFetch>>()
)
export const RDX_MAIN_SELL_DELETE_FETCH_SUCCESS = 'RDX_MAIN_SELL_DELETE_FETCH_SUCCESS';
export const rdxMainSellDeleteFetchSuccess = createAction(
  RDX_MAIN_SELL_DELETE_FETCH_SUCCESS,
  props<IActionCreator<number>>()
)
export const RDX_MAIN_SELL_DELETE_FETCH_ERROR =  'RDX_MAIN_SELL_DELETE_FETCH_ERROR';
export const rdxMainSellDeleteFetchError = createAction(
  RDX_MAIN_SELL_DELETE_FETCH_ERROR,
  props<IActionCreator<IMainSellDeleteFetchError>>()
)
