import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainWalletPrevTransactionReducer } from "./reducer";


const getMainWalletPrevTransactionFeatureState = createFeatureSelector<IMainWalletPrevTransactionReducer>('mainWalletPrevTransactionReducer');
export const getMainWalletPrevTransactionIsTransactions = createSelector(
  getMainWalletPrevTransactionFeatureState,
  state => state.isTransactions
)
export const getMainWalletPrevTransactionTransactions = createSelector(
  getMainWalletPrevTransactionFeatureState,
  state => state.transactions
);
