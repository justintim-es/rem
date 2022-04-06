import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_ONBOARD_FETCH = 'RDX_ONBOARD_FETCH';
export const rdxOnboardFetch = createAction(RDX_ONBOARD_FETCH, props<IActionCreator<string>>());
export const RDX_ONBOARD_FETCH_SUCCESS = 'RDX_ONBOARD_FETCH_SUCCESS';
export const rdxOnboardFetchSuccess = createAction(RDX_ONBOARD_FETCH_SUCCESS, props<IActionCreator<any>>());
export const RDX_ONBOARD_FETCH_ERROR = 'RDX_ONBOARD_FETCH_ERROR';
export const rdxOnboardFetchError = createAction(RDX_ONBOARD_FETCH_ERROR, props<IActionCreator<string>>());