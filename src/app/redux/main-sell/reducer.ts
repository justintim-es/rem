import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IMainSellSellSuccess } from "../combiner";
import {
  rdxMainSellBalance,
  rdxMainSellBalanceError,
  rdxMainSellBalanceSuccess,
  rdxMainSellChooseFixum,
  rdxMainSellChooseLiber,
  rdxMainSellFixumSubmitError,
  rdxMainSellFixumSubmitSuccess,
  rdxMainSellIsOnboardComplete,
  rdxMainSellIsOnboardCompleteError,
  rdxMainSellIsOnboardCompleteSuccess,
  rdxMainSellLiberSubmit,
  rdxMainSellLiberSubmitError,
  rdxMainSellLiberSubmitSuccess,
  rdxMainSellSellBalance,
  rdxMainSellSellBalanceSuccess,
  rdxMainSellSellRationemSuccess,
  rdxMainSellSells,
  rdxMainSellSellsError,
  rdxMainSellSellsSuccess,
  rdxMainSellCreateAccountFetch,
  rdxMainSellCreateAccountFetchSuccess,
  rdxMainSellCreateAccountFetchError,
  rdxMainSellOnboardLinkFetchSuccess,
  rdxMainSellSellLatestPaymentSuccess,
  rdxMainSellSellReuseFetch,
  rdxMainSellSellReuseFetchSuccess,
  rdxMainSellSellReuseFetchError
} from "./actions";

export interface IMainSellReducer {
    isLiber: boolean;
    isFixum: boolean;
    isAmount: boolean;
    isBalance: boolean;
    fixumBalance: number;
    liberBalance: number;
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    sells: List<IMainSellSellSuccess>;
    isSells: boolean;
    isSellBalance: List<boolean>;
    isOnboardCompleting: boolean;
    isOnboardComplete: boolean;
    onboardLink: string | null;
    isAccount: boolean;
    isAccountCreateFetch: boolean;
    isAccountCreateFetchSuccess: boolean;
    isAccountCreateFetchError: boolean;
    stripeAccountId: string;
    isOnboardLinkFetchSuccess: boolean;
    isReuse: List<boolean>;
    isReuseSuccess: List<boolean>;
    isReuseError: List<boolean>;
    reuseErrorMessage: List<string>;
}
export const mainSellInitial: IMainSellReducer = {
    isLiber: false,
    isFixum: false,
    isAmount: false,
    isBalance: false,
    fixumBalance: 0,
    liberBalance: 0,
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    sells: List(),
    isSells: false,
    isSellBalance: List(),
    isOnboardCompleting: false,
    isOnboardComplete: false,
    onboardLink: '',
    isAccount: false,
    isAccountCreateFetch: false,
    isAccountCreateFetchSuccess: false,
    isAccountCreateFetchError: false,
    stripeAccountId: '',
    isOnboardLinkFetchSuccess: false,
    isReuse: List(),
    isReuseSuccess: List(),
    isReuseError: List(),
    reuseErrorMessage: List()
}
export const mainSellReducer = createReducer(
  mainSellInitial,
  on(rdxMainSellChooseLiber, (state: IMainSellReducer) => {
    return {
      ...state,
      isLiber: true,
      isFixum: false,
    }
  }),
  on(rdxMainSellChooseFixum, (state: IMainSellReducer) => {
    return {
      ...state,
      isLiber: false,
      isFixum: true,
      isAmount: true
    }
  }),
  on(rdxMainSellBalance, (state: IMainSellReducer) => {
    return {
      ...state,
      isBalance: true
    }
  }),
  on(rdxMainSellBalanceSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isBalance: false,
      fixumBalance: action.payload!.fixum,
      liberBalance: action.payload!.liber
    }
  }),
  on(rdxMainSellBalanceError, (state: IMainSellReducer) => {
    return {
      ...state,
      isBalance: false
    }
  }),
  on(rdxMainSellLiberSubmit, (state: IMainSellReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false
    }
  }),
  on(rdxMainSellLiberSubmitSuccess, (state: IMainSellReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      isFetchError: false
    }
  }),
  on(rdxMainSellFixumSubmitError, (state: IMainSellReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: false,
      isFetchError: false
    }
  }),
  on(rdxMainSellLiberSubmitError, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload!
    }
  }),
  on(rdxMainSellFixumSubmitError, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload!
    }
  }),
  on(rdxMainSellFixumSubmitSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
    }
  }),
  on(rdxMainSellSells, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isSells: true,
    }
  }),
  on(rdxMainSellSellsSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isSells: false,
      sells: List(action.payload!)
    }
  }),
  on(rdxMainSellSellsError, (state: IMainSellReducer) => {
    return {
      ...state,
      isSells: false
    }
  }),
  on(rdxMainSellSellRationemSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      sells: state.sells.setIn([action.payload!.index, 'rationem'], action.payload!.rationem)
    }
  }),
  on(rdxMainSellSellBalance, (state: IMainSellReducer) => {
    return {
      ...state,
      isSellBalance: state.isSellBalance.push(false)
    }
  }),
  on(rdxMainSellSellBalanceSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isSellBalance: state.isSellBalance.set(action.payload!.index, true),
      sells: state.sells.setIn([action.payload!.index, 'balance'], action.payload!.balance)
    }
  }),
  on(rdxMainSellIsOnboardComplete, (state: IMainSellReducer) => {
    return {
      ...state,
      isOnboardCompleting: true
    }
  }),
  on(rdxMainSellIsOnboardCompleteSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isOnboardCompleting: false,
      isOnboardComplete: action.payload!.is,
      onboardLink: action.payload!.link!,
      isAccount: action.payload!.isAccount
    }
  }),
  on(rdxMainSellIsOnboardCompleteError, (state: IMainSellReducer) => {
    return {
      ...state,
      isOnboardCompleting: false,
    }
  }),
  on(rdxMainSellCreateAccountFetch, (state: IMainSellReducer) => {
    return {
      ...state,
      isAccountCreateFetch: true,
      isAccountCreateFetchSuccess: false,
      isAccountCreateFetchError: false,
    }
  }),
  on(rdxMainSellCreateAccountFetchSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isAccountCreateFetch: false,
      isAccountCreateFetchSuccess: true,
      stripeAccountId: action.payload!
    }
  }),
  on(rdxMainSellCreateAccountFetchError, (state: IMainSellReducer) => {
    return {
      ...state,
      isAccountCreateFetch: false,
      isAccountCreateFetchError: true
    }
  }),
  on(rdxMainSellOnboardLinkFetchSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isOnboardLinkFetchSuccess: true,
      isAccountCreateFetch: false,
      onboardLink: action.payload!
    }
  }),
  on(rdxMainSellSellLatestPaymentSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      sells: state.sells.setIn([action.payload!.index, 'price'], action.payload!.price).setIn([action.payload!.index, 'average'], action.payload!.average)
    }
  }),
  on(rdxMainSellSellReuseFetch, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isReuse: state.isReuse.set(action.payload!.index, true),
      isReuseSuccess: state.isReuseSuccess.set(action.payload!.index, false),
      isReuseError: state.isReuseError.set(action.payload!.index, false),
    }
  }),
  on(rdxMainSellSellReuseFetchSuccess, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isReuse: state.isReuse.set(action.payload!, false),
      isReuseSuccess: state.isReuseSuccess.set(action.payload!, true)
    }
  }),
  on(rdxMainSellSellReuseFetchError, (state: IMainSellReducer, action) => {
    return {
      ...state,
      isReuse: state.isReuse.set(action.payload!.index, false),
      isReuseError: state.isReuse.set(action.payload!.index, true),
      reuseErrorMessage: state.reuseErrorMessage.set(action.payload!.index, action.payload!.error)
    }
  })
)

