import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IMainWalletTransaction } from "../combiner";
import { rdxMainWalletPrevTransactionFetch, rdxMainWalletPrevTransactionFetchSuccess } from "./actions";

export interface IMainWalletPrevTransactionReducer {
  isTransactions: boolean;
  transactions: List<IMainWalletTransaction>;
}
export const mainWalletPrevTransactionInitial: IMainWalletPrevTransactionReducer = {
  isTransactions: true,
  transactions: List()
};
export const mainWalletPrevTransactionReducer = createReducer(
  mainWalletPrevTransactionInitial,
  on(rdxMainWalletPrevTransactionFetch, (state: IMainWalletPrevTransactionReducer) => {
    return {
      ...state,
      isTransactions: true,
    }
  }),
  on(rdxMainWalletPrevTransactionFetchSuccess, (state: IMainWalletPrevTransactionReducer, action) => {
    return {
      ...state,
      isTransactions: false,
      transactions: state.transactions.push(action.payload!)
    }
  })
)
