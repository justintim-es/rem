import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";
import { IMainBuyDefencesDefenceSuccess, IMainBuyDefencesFetchSuccess } from "./interfaces";

export const RDX_MAIN_BUY_DEFENCES_FETCH = 'RDX_MAIN_BUY_DEFENCES_FETCH';
export const rdxMainBuyDefencesFetch = createAction(
    RDX_MAIN_BUY_DEFENCES_FETCH,
    props<IActionCreator<string>>()
)
export const RDX_MAIN_BUY_DEFENCES_FETCH_SUCCESS = 'RDX_MAIN_BUY_DEFENCES_FETCH_SUCCESS';
export const rdxMainBuyDefencesFetchSuccess = createAction(
  RDX_MAIN_BUY_DEFENCES_FETCH_SUCCESS,
  props<IActionCreator<IMainBuyDefencesFetchSuccess>>()
)
export const RDX_MAIN_BUY_DEFENCES_FETCH_ERROR = 'RDX_MAIN_BUY_DEFENCES_FETCH_ERROR';
export const rdxMainBuyDefencesFetchError = createAction(
  RDX_MAIN_BUY_DEFENCES_FETCH_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_BUY_DEFENCES_DEFENCE_SUCCESS = 'RDX_MAIN_BUY_DEFENCES_DEFENCE_SUCCESS';
export const rdxMainBuyDefencesDefenceSuccess = createAction(
  RDX_MAIN_BUY_DEFENCES_DEFENCE_SUCCESS,
  props<IActionCreator<IMainBuyDefencesDefenceSuccess>>()
)
