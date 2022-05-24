import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { Observable } from "rxjs";
import { rdxMainSellIschinFetch, rdxMainSellIschinFetchError, rdxMainSellIschinFetchSuccess, rdxMainSellIschinPush } from "./actions";
export interface IMainSellIschinReducer {
    isTransferFetchs: List<boolean>;
    isTransferFetchErrors: List<boolean>;
    isTransferFetchSuccesss: List<boolean>;
    transferFetchErrorMessages: List<String>;
}
export const mainSellIschinInitial: IMainSellIschinReducer = {
  isTransferFetchs: List([]),
  isTransferFetchErrors: List([]),
  isTransferFetchSuccesss: List([]),
  transferFetchErrorMessages: List([]),
};
export const mainSellIschinReducer = createReducer(
  mainSellIschinInitial,
  on(rdxMainSellIschinPush, (state: IMainSellIschinReducer) => {
    return {
      ...state,
      isTransferFetchs: state.isTransferFetchs.push(false),
      isTransferFetchErrors: state.isTransferFetchErrors.push(false),
      isTransferFetchSuccesss: state.isTransferFetchSuccesss.push(false),
      transferFetchErrorMessages: state.transferFetchErrorMessages.push('')
    }
  }),
  on(rdxMainSellIschinFetch, (state: IMainSellIschinReducer, action) => {
    return {
      ...state,
      isTransferFetchs: state.isTransferFetchs.set(action.payload!.index, true),
      isTransferFetchSuccesss:  state.isTransferFetchSuccesss.set(action.payload!.index, false),
      isTransferFetchErrors: state.isTransferFetchErrors.set(action.payload!.index, false)
    };
  }),
  on(rdxMainSellIschinFetchSuccess, (state: IMainSellIschinReducer, action) => {
    return {
      ...state,
      isTransferFetchs: state.isTransferFetchs.set(action.payload!, false),
      isTransferFetchSuccesss: state.isTransferFetchSuccesss.set(action.payload!, true)
    }
  }),
  on(rdxMainSellIschinFetchError, (state: IMainSellIschinReducer, action) => {
    return {
      ...state,
      isTransferFetchs: state.isTransferFetchs.set(action.payload!.index, false),
      isTransferFetchErrors: state.isTransferFetchErrors.set(action.payload!.index, true),
      transferFetchErrorMessages: state.transferFetchErrorMessages.set(action.payload!.index, action.payload!.message)
    }
  })
)
