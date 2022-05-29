import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";
import { IMainSellSellActivateFixum, IMainSellSellActivateFixumError } from "../main-sell/interfaces";

export const RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM = 'RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM';
export const rdxMainSellSellActivateFixum = createAction(
  RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM,
  props<IActionCreator<IMainSellSellActivateFixum>>()
);
export const RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_SUCCESS = 'RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_SUCCESS';
export const rdxMainSellSellActivateFixumSuccess = createAction(
  RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_SUCCESS,
  props<IActionCreator<number>>()
)
export const RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_ERROR = 'RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_ERROR';
export const rdxMainSellSellActivateFixumError = createAction(
  RDX_MAIN_SELL_SELL_ACTIVATE_FIXUM_ERROR,
  props<IActionCreator<IMainSellSellActivateFixumError>>()
)
