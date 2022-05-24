import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH = 'RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH';
export const rdxMainWalletPrevTransactionFetch = createAction(
    RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH,
    props<IActionCreator<number>>()
)
export const RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ONE  = 'RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ONE';
export const rdxMainWalletPrevTransactionFetchOne = createAction(
  RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ONE,
  props<IActionCreator<string>>()
)
export const RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_SUCCESS = 'RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_SUCCESS';
export const rdxMainWalletPrevTransactionFetchSuccess = createAction(
  RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ERROR = 'RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ERROR';
export const rdxMainWalletPrevTransactionFetchError = createAction(
  RDX_MAIN_WALLET_PREV_TRANSACTION_FETCH_ERROR,
  props<IActionCreator<any>>()
)
