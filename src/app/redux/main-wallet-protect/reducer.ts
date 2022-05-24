import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IDefence, IMainWalletProtectAccount, IOtherBid, IYourBid } from "../combiner";
import { rdxMainWalletFetchError } from "../main-wallet/actions";
import {
  rdxMainWalletProtectFetch,
  rdxMainWalletProtectFetchSuccess,
  rdxMainWalletProtectGrabOther,
  rdxMainWalletProtectGrabOtherError,
  rdxMainWalletProtectGrabOtherSuccess,
  rdxMainWalletProtectGrabOtherYourSuccess,
  rdxMainWalletProtectGrabYour,
  rdxMainWalletProtectGrabYourError,
  rdxMainWalletProtectGrabYourOtherSuccess,
  rdxMainWalletProtectGrabYourSuccess,
  rdxMainWalletProtectIsOtherBid,
  rdxMainWalletProtectIsToolbarFalse,
  rdxMainWalletProtectIsToolbarTrue,
  rdxMainWalletProtectIsYourBid,
  rdxMainWalletProtectDefencesSuccess,
  rdxMainWalletProtectFetchError
} from "./actions";

export interface IMainWalletProtectReducer {
  isDefences: boolean;
  baseDefence: string;
  liberDefences: IDefence[];
  fixumDefences: IDefence[];
  isBuy: boolean;
  isToolbar: boolean;
  isOtherBid: boolean;
  isYourBid: boolean;
  isOtherBidFetch: boolean;
  isYourBidFetch: boolean;
  isOtherBidFetchSuccess: boolean;
  isYourBidFetchSuccess: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
  otherBidsLiber: List<IOtherBid>;
  otherBidsFixum: List<IOtherBid>;
  yourBidsLiber: List<IYourBid>;
  yourBidsFixum: List<IYourBid>;
  blocknumber: number[];
  accounts: IMainWalletProtectAccount[];
}
export const mainWalletProtectInitial: IMainWalletProtectReducer = {
  isDefences: false,
  baseDefence: '',
  liberDefences: [],
  fixumDefences: [],
  isBuy: false,
  isToolbar: false,
  isOtherBid: true,
  isYourBid: false,
  isOtherBidFetch: false,
  isYourBidFetch: false,
  isOtherBidFetchSuccess: false,
  isYourBidFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: '',
  otherBidsFixum: List(),
  otherBidsLiber: List(),
  yourBidsFixum: List(),
  yourBidsLiber: List(),
  blocknumber: [],
  accounts: []
}
export const mainWalletProtectReducer = createReducer(
  mainWalletProtectInitial,
  on(rdxMainWalletProtectFetch, (state: IMainWalletProtectReducer) => {
    return {
      ...state,
      isDefences: true
    }
  }),
  on(rdxMainWalletProtectFetchSuccess, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      isDefences: false,
      baseDefence: action.payload!.baseDefence,
      liberDefences: action.payload!.liberDefences,
      fixumDefences: action.payload!.fixumDefences,
      blocknumber: action.payload!.blocknumber
    }
  }),
  on(rdxMainWalletProtectFetchError, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      isDefences: false,
    }
  }),
  on(rdxMainWalletProtectIsYourBid, (state: IMainWalletProtectReducer) => {
    return {
      ...state,
      isOtherBid: false,
      isYourBid: true,
      yourBids: List([]),
      otherBids: List([])
    }
  }),
  on(rdxMainWalletProtectIsOtherBid, (state: IMainWalletProtectReducer) => {
    return {
      ...state,
      isOtherBid: true,
      isYourBid: false,
      yourBids: List([]),
      otherBids: List([])
    }
  }),
  on(rdxMainWalletProtectGrabYour, (state: IMainWalletProtectReducer) => {
    return {
      ...state,
      isYourBidFetch: true,
      isYourBidFetchSuccess: false,
      isFetchError: false,
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectGrabYourSuccess, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      isYourBidFetch: false,
      isYourBidFetchSuccess: true,
      yourBidsLiber: List(action.payload!.liberDefences),
      yourBidsFixum: List(action.payload!.fixumDefences)
    }
  }),
  on(rdxMainWalletProtectGrabYourError, (state: IMainWalletProtectReducer) => {
    return {
      ...state,
      isYourBidFetch: false,
      isFetchError: true
    }
  }),
  on(rdxMainWalletProtectGrabOther, (state: IMainWalletProtectReducer) => {
    return {
      ...state,
      isOtherBidFetch: true,
      isOtherBidFetchSuccess: false,
      isFetchError: false,
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectGrabOtherSuccess, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      isOtherBidFetch: false,
      isOtherBidFetchSuccess: true,
      otherBidsLiber: List(action.payload!.liberDefences),
      otherBidsFixum: List(action.payload!.fixumDefences)
    }
  }),
  on(rdxMainWalletProtectGrabOtherError, (state: IMainWalletProtectReducer) => {
    return {
      ...state,
      isOtherBidFetch: false,
      isFetchError: false,
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectGrabOtherYourSuccess, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      otherBidsLiber: state.otherBidsLiber.setIn([action.payload!.index, 'your'], action.payload!.yourLiber),
      otherBidsFixum: state.otherBidsFixum.setIn([action.payload!.index, 'your'], action.payload!.yourFixum)
    }
  }),
  on(rdxMainWalletProtectGrabYourOtherSuccess, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      yourBidsLiber: state.yourBidsLiber.setIn([action.payload!.index, 'other'], action.payload!.otherLiber),
      yourBidsFixum: state.yourBidsFixum.setIn([action.payload!.index, 'other'], action.payload!.otherFixum)
    }
  }),
  on(rdxMainWalletProtectIsToolbarTrue, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      isToolbar: true
    }
  }),
  on(rdxMainWalletProtectIsToolbarFalse, (state: IMainWalletProtectReducer, action) => {
    return {
      ...state,
      isToolbar: false
    }
  }),
)
