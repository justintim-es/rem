import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_ONBOARD_FAIL_FETCH = 'RDX_ONBOARD_FAIL_FETCH';
export const rdxOnboardFailFetch = createAction(
    RDX_ONBOARD_FAIL_FETCH,
    props<IActionCreator<any>>()
);
export const RDX_ONBOARD_FAIL_FETCH_SUCCESS = 'RDX_ONBOARD_FAIL_FETCH_SUCCESS';
export const rdxOnboardFailFetchSuccess = createAction(
  RDX_ONBOARD_FAIL_FETCH_SUCCESS,
  props<IActionCreator<string>>()
)
export const RDX_ONBOARD_FAIL_FETCH_ERROR = 'RDX_ONBOARD_FAIL_FETCH_ERROR';
export const rdxOnboardFailFetchError = createAction(
  RDX_ONBOARD_FAIL_FETCH_ERROR,
  props<IActionCreator<string>>()
)
