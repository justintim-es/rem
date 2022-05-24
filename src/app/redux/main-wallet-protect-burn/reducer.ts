import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import {
  rdxMainWalletProtectBurnOtherFetchErrorLiber,
  rdxMainWalletProtectBurnOtherFetchFixum,
  rdxMainWalletProtectBurnOtherFetchLiber,
  rdxMainWalletProtectBurnOtherFetchSuccessFixum,
  rdxMainWalletProtectBurnOtherFetchSuccessLiber,
  rdxMainWalletProtectBurnPush,
  rdxMainWalletProtectBurnSellOtherFetchErrorFixum,
  rdxMainWalletProtectBurnSellOtherFetchErrorLiber,
  rdxMainWalletProtectBurnSellOtherFetchFixum,
  rdxMainWalletProtectBurnSellOtherFetchLiber,
  rdxMainWalletProtectBurnSellOtherFetchSuccessFixum,
  rdxMainWalletProtectBurnSellOtherFetchSuccessLiber,
  rdxMainWalletProtectBurnSellYourFetchErrorFixum,
  rdxMainWalletProtectBurnSellYourFetchErrorLiber,
  rdxMainWalletProtectBurnSellYourFetchFixum,
  rdxMainWalletProtectBurnSellYourFetchLiber,
  rdxMainWalletProtectBurnSellYourFetchSuccessLiber,
  rdxMainWalletProtectBurnYourFetchErrorFixum,
  rdxMainWalletProtectBurnYourFetchErrorLiber,
  rdxMainWalletProtectBurnYourFetchFixum,
  rdxMainWalletProtectBurnYourFetchLiber,
  rdxMainWalletProtectBurnYourFetchSuccessFixum,
  rdxMainWalletProtectBurnYourFetchSuccessLiber,
} from "./actions";

export interface IMainWalletProtectBurnReducer {
    isFetch: List<boolean>;
    isFetchSuccess: List<boolean>;
    isFetchError: List<boolean>;
    fetchErrorMessage: string;
}
export const mainWalletProtectBurnInitial: IMainWalletProtectBurnReducer = {
    isFetch: List([]),
    isFetchSuccess: List([]),
    isFetchError: List([]),
    fetchErrorMessage: ''
}
export const mainWalletProtectBurnReducer = createReducer(
  mainWalletProtectBurnInitial,
  on(rdxMainWalletProtectBurnPush, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.push(false),
      isFetchSuccess: state.isFetchSuccess.push(false),
      isFetchError: state.isFetchError.push(false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnYourFetchLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),

  on(rdxMainWalletProtectBurnYourFetchFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnOtherFetchLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnOtherFetchFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnSellYourFetchLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnSellYourFetchFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnSellOtherFetchLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnSellOtherFetchFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, true),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, false),
      fetchErrorMessage: ''
    }
  }),
  on(rdxMainWalletProtectBurnYourFetchSuccessLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, true),
    }
  }),
  on(rdxMainWalletProtectBurnYourFetchSuccessFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, true),
    }
  }),
  on(rdxMainWalletProtectBurnOtherFetchSuccessLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, true),
    }
  }),
  on(rdxMainWalletProtectBurnOtherFetchSuccessFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, true),
    }
  }),
  on(rdxMainWalletProtectBurnSellOtherFetchSuccessLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, true),
    }
  }),
  on(rdxMainWalletProtectBurnSellOtherFetchSuccessFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, true),
    }
  }),
  on(rdxMainWalletProtectBurnSellYourFetchSuccessLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!, false),
      isFetchSuccess: state.isFetchSuccess.set(action.payload!, false)
    }
  }),
  on(rdxMainWalletProtectBurnOtherFetchErrorLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message
    }
  }),
  on(rdxMainWalletProtectBurnYourFetchErrorFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message
    }
  }),
  on(rdxMainWalletProtectBurnYourFetchErrorLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message
    }
  }),
  on(rdxMainWalletProtectBurnYourFetchErrorFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message
    }
  }),
  on(rdxMainWalletProtectBurnSellOtherFetchErrorLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message
    }
  }),
  on(rdxMainWalletProtectBurnSellOtherFetchErrorFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message

    }
  }),
  on(rdxMainWalletProtectBurnSellYourFetchErrorLiber, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message
    }
  }),
  on(rdxMainWalletProtectBurnSellYourFetchErrorFixum, (state: IMainWalletProtectBurnReducer, action) => {
    return {
      ...state,
      isFetch: state.isFetch.set(action.payload!.index, false),
      isFetchError: state.isFetchError.set(action.payload!.index, true),
      fetchErrorMessage: action.payload!.message
    }
  })
)

