import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IMainSellReducer } from "../main-sell/reducer";
import { rdxMainSellSellActivateFixum, rdxMainSellSellActivateFixumError, rdxMainSellSellActivateFixumSuccess } from "./actions";

export interface IMainSellActivateReducer {
    isActivateFixum: List<boolean>;
    isActivateFixumSuccess: List<boolean>;
    isActivateFixumError: List<boolean>;
    isActivateFixumErrorMessage: List<string>;
}
export const mainSellActivateInitial: IMainSellActivateReducer = {
  isActivateFixum: List(),
  isActivateFixumSuccess: List(),
  isActivateFixumError: List(),
  isActivateFixumErrorMessage: List(),
}
export const mainSellActivateReducer = createReducer(
  mainSellActivateInitial,
  on(rdxMainSellSellActivateFixum, (state: IMainSellActivateReducer, action) => {
    return {
      ...state,
      isActivateFixum: state.isActivateFixum.set(action.payload!.index, true),
      isActivateFixumSuccess: state.isActivateFixumSuccess.set(action.payload!.index, false),
      isActivateFixumError: state.isActivateFixumError.set(action.payload!.index, false)
    }
  }),
  on(rdxMainSellSellActivateFixumSuccess, (state: IMainSellActivateReducer, action) => {
    return {
      ...state,
      isActivateFixum: state.isActivateFixum.set(action.payload!, false),
      isActivateFixumSuccess: state.isActivateFixumSuccess.set(action.payload!, true)
    }
  }),
  on(rdxMainSellSellActivateFixumError, (state: IMainSellActivateReducer, action) => {
    return {
      ...state,
      isActivateFixum: state.isActivateFixum.set(action.payload!.index, false),
      isActivateFixumError: state.isActivateFixumError.set(action.payload!.index, true),
      isActivateFixumErrorMessage: state.isActivateFixumErrorMessage.set(action.payload!.index, action.payload!.message)
    }
  })
)
