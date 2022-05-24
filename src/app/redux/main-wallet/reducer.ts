import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IRationem, IWalletTransactionResponse } from "../combiner";
import { rdxMainWalletBalance, rdxMainWalletBalanceError, rdxMainWalletBalanceSuccess, rdxMainWalletDefend, rdxMainWalletDefendError, rdxMainWalletDefendSuccess, rdxMainWalletFetch, rdxMainWalletFetchError, rdxMainWalletFetchSuccess, rdxMainWalletIsDefended, rdxMainWalletIsDefendedSuccess, rdxMainWalletTransaction, rdxMainWalletTransactionError, rdxMainWalletTransactionSuccess } from "./actions";

export interface IMainWalletReducer {
    isFetch: boolean;
    public: string;
    gladiator: string;
    liber: number;
    fixum: number;
    isTransfers: boolean;
    transfers: List<IWalletTransactionResponse>;
    isDefending: boolean;
    button: string;
    rationem: IRationem;
    isRationem: boolean;
    isBalance: boolean;
}
export const mainWalletInitial: IMainWalletReducer = {
    isFetch: false,
    public: '',
    gladiator: '',
    liber: 0,
    fixum: 0,
    isTransfers: false,
    transfers: List(),
    isDefending: false,
    button: 'defend',
    rationem: {
      data: {
        includi: false,
        index: 0,
      },
      scriptum: null,
      gladiatorId: ''
    },
    isRationem: false,
    isBalance: false,
}
export const mainWalletReducer = createReducer(
    mainWalletInitial,
    on(rdxMainWalletFetch, (state: IMainWalletReducer) => {
        return {
          ...state,
          isFetch: true,
          transfers: List([])
        }
    }),
    on(rdxMainWalletFetchSuccess, (state: IMainWalletReducer, action) => {
        return {
            ...state,
            isFetch: false,
            public: action.payload!.public,
            gladiator: action.payload!.gladiator,
            liber: action.payload!.liberBalance,
            fixum: action.payload!.fixumBalance,
            button: action.payload!.button,
            rationem: action.payload!.rationem,
        }
    }),
    on(rdxMainWalletFetchError, (state: IMainWalletReducer) => {
        return {
            ...state,
            isFetch: false,
        }
    }),
    on(rdxMainWalletTransaction, (state: IMainWalletReducer) => {
      return {
        ...state,
        isTransfers: true
      }
    }),
    on(rdxMainWalletTransactionSuccess, (state: IMainWalletReducer, action) => {
      return {
        ...state,
        isTransfers: false,
        transfers: state.transfers.push(action.payload!)
      }
    }),
    on(rdxMainWalletTransactionError, (state: IMainWalletReducer) => {
      return {
        ...state,
        isTransfers: false
      }
    }),
    on(rdxMainWalletDefend, (state: IMainWalletReducer) => {
      return {
        ...state,
        isDefending: true,
      }
    }),
    on(rdxMainWalletDefendSuccess, (state: IMainWalletReducer, action) => {
      return {
        ...state,
        isDefending: false,
      }
    }),
    on(rdxMainWalletDefendError, (state: IMainWalletReducer, action) => {
      return {
        ...state,
        isDefending: false,
      }
    }),
    on(rdxMainWalletIsDefended, (state: IMainWalletReducer) => {
      return {
        ...state,
        isRationem: true
      }
    }),
    on(rdxMainWalletIsDefendedSuccess, (state: IMainWalletReducer, action) => {
      return {
        ...state,
        isRationem: false,
        button: action.payload!.button,
        rationem: action.payload!.rationem
      }
    }),
    on(rdxMainWalletBalance, (state: IMainWalletReducer) => {
      return {
        ...state,
        isBalance: true
      }
    }),
    on(rdxMainWalletBalanceSuccess, (state: IMainWalletReducer, action) => {
      return {
        ...state,
        isBalance: false,
        liber: action.payload!.liber,
        fixum: action.payload!.fixum
      }
    }),
    on(rdxMainWalletBalanceError, (state: IMainWalletReducer) => {
      return {
        ...state,
        isBalance: false
      }
    })
)
