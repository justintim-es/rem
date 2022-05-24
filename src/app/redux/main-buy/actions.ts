import { createAction, props } from "@ngrx/store";
import { IActionCreator, IMainBuyFetchDefencesSuccess, IMainBuyFetchRationem, IMainBuyFetchRationemSuccess, IMainBuyFetchSuccess } from "../combiner";

export const RDX_MAIN_BUY_FETCH = 'RDX_MAIN_BUY_FETCH';
export const rdxMainBuyFetch = createAction(
  RDX_MAIN_BUY_FETCH,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_BUY_FETCH_SUCCESS = 'RDX_MAIN_BUY_FETCH_SUCCESS';
export const rdxMainBuyFetchSuccess = createAction(
  RDX_MAIN_BUY_FETCH_SUCCESS,
  props<IActionCreator<IMainBuyFetchSuccess>>()
)
export const RDX_MAIN_BUY_FETCH_ERROR = 'RDX_MAIN_BUY_FETCH_ERROR';
export const rdxMainBuyFetchError = createAction(
  RDX_MAIN_BUY_FETCH_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_BUY_FETCH_RATIONEM = 'RDX_MAIN_BUY_FETCH_RATIONEM';
export const rdxMainBuyFetchRationem = createAction(
  RDX_MAIN_BUY_FETCH_RATIONEM,
  props<IActionCreator<IMainBuyFetchRationem>>()
)
export const RDX_MAIN_BUY_FETCH_DEFENCES = 'RDX_MAIN_BUY_FETCH_DEFENCES';
export const rdxMainBuyFetchDefences = createAction(
  RDX_MAIN_BUY_FETCH_DEFENCES,
  props<IActionCreator<IMainBuyFetchRationemSuccess>>()
)
export const RDX_MAIN_BUY_FETCH_DEFENCES_SUCCESS = 'RDX_MAIN_BUY_FETCH_DEFENCES_SUCCESS';
export const rdxMainBuyFetchDefencesSuccess = createAction(
  RDX_MAIN_BUY_FETCH_DEFENCES,
  props<IActionCreator<IMainBuyFetchDefencesSuccess>>()
)
export const RDX_MAIN_BUY_FETCH_DEFENCES_ERROR = 'RDX_MAIN_BUY_FETCH_DEFENCES_ERROR';
export const rdxMainBuyFetchDefencesError = createAction(
  RDX_MAIN_BUY_FETCH_DEFENCES_ERROR,
  props<IActionCreator<any>>()
)
