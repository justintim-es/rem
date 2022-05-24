import { createAction, createSelector, props } from "@ngrx/store";
import { IActionCreator, IBalanceResponse, IMainWalletResponse, IWalletTransaction, IWalletTransactionResponse } from "../combiner";

export const RDX_MAIN_WALLET_FETCH = 'RDX_MAIN_WALLET_FETCH';
export const rdxMainWalletFetch = createAction(
    RDX_MAIN_WALLET_FETCH,
    props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_FETCH_SUCCESS = 'RDX_MAIN_WALLET_FETCH_SUCCESS';
export const rdxMainWalletFetchSuccess = createAction(
    RDX_MAIN_WALLET_FETCH_SUCCESS,
    props<IActionCreator<IMainWalletResponse>>()
)
export const RDX_MAIN_WALLET_FETCH_ERROR = 'RDX_MAIN_WALLET_FETCH_ERROR';
export const rdxMainWalletFetchError = createAction(
    RDX_MAIN_WALLET_FETCH_ERROR,
    props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_TRANSACTION = 'RDX_MAIN_WALLET_TRANSACTION';
export const rdxMainWalletTransaction = createAction(
  RDX_MAIN_WALLET_TRANSACTION,
  props<IActionCreator<IWalletTransaction>>()
)
export const RDX_MAIN_WALLET_TRANSACTION_SUCCESS = 'RDX_MAIN_WALLET_TRANSACTION_SUCCESS';
export const rdxMainWalletTransactionSuccess = createAction(
  RDX_MAIN_WALLET_TRANSACTION_SUCCESS,
  props<IActionCreator<IWalletTransactionResponse>>()
)
export const RDX_MAIN_WALLET_TRANSACTION_ERROR = 'RDX_MAIN_WALLET_TRANSACTION_ERROR';
export const rdxMainWalletTransactionError = createAction(
  RDX_MAIN_WALLET_TRANSACTION_ERROR,
  props<IActionCreator<any>>()
)

export const RDX_MAIN_WALLET_DEFEND = 'RDX_MAIN_WALLET_DEFEND';
export const rdxMainWalletDefend = createAction(
  RDX_MAIN_WALLET_DEFEND,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_DEFEND_SUCCESS = 'RDX_MAIN_WALLET_DEFEND_SUCCESS';
export const rdxMainWalletDefendSuccess = createAction(
  RDX_MAIN_WALLET_DEFEND_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_DEFEND_ERROR = 'RDX_MAIN_WALLET_DEFEND_ERROR';
export const rdxMainWalletDefendError = createAction(
  RDX_MAIN_WALLET_DEFEND_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_IS_DEFENDED = 'RDX_MAIN_WALLET_IS_DEFENDED';
export const rdxMainWalletIsDefended = createAction(
  RDX_MAIN_WALLET_IS_DEFENDED,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_IS_DEFENDED_SUCCESS = 'RDX_MAIN_WALLET_IS_DEFENDED_SUCCESS';
export const rdxMainWalletIsDefendedSuccess = createAction(
  RDX_MAIN_WALLET_IS_DEFENDED_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_IS_DEFENDED_ERROR = 'RDX_MAIN_WALLET_IS_DEFENDED_ERROR';
export const rdxMainWalletIsDefendedError = createAction(
  RDX_MAIN_WALLET_IS_DEFENDED_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_BALANCE = 'RDX_MAIN_WALLET_BALANCE';
export const rdxMainWalletBalance = createAction(
  RDX_MAIN_WALLET_BALANCE,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_BALANCE_SUCCESS = 'RDX_MAIN_WALLET_BALANCE_SUCCESS';
export const rdxMainWalletBalanceSuccess = createAction(
  RDX_MAIN_WALLET_BALANCE_SUCCESS,
  props<IActionCreator<IBalanceResponse>>()
)
export const RDX_MAIN_WALLET_BALANCE_ERROR = 'RDX_MAIN_WALLET_BALANCE_ERROR';
export const rdxMainWalletBalanceError = createAction(
  RDX_MAIN_WALLET_BALANCE_ERROR,
  props<IActionCreator<any>>()
)
