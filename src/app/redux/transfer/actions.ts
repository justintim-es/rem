import { createAction, props } from "@ngrx/store";
import { IActionCreator, IError } from "../combiner";

export const RDX_TRANSFER_LIBER_FETCH  = 'RDX_TRANSFER_LIBER_FETCH';
export const rdxTransferLiberFetch = createAction(
    RDX_TRANSFER_LIBER_FETCH,
    props<IActionCreator<any>>()
)
export const RDX_TRANSFER_FIXUM_FETCH = 'RDX_TRANSFER_FIXUM_FETCH';
export const rdxTransferFixumFetch = createAction(
  RDX_TRANSFER_FIXUM_FETCH,
  props<IActionCreator<any>>()
)
export const RDX_TRANSFER_LIBER_FETCH_SUCCESS = 'RDX_TRANSFER_LIBER_FETCH_SUCCESS';
export const rdxTransferLiberFetchSuccess = createAction(
  RDX_TRANSFER_LIBER_FETCH_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_TRANSFER_FIXUM_FETCH_SUCCESS = 'RDX_TRANSFER_FIXUM_FETCH_SUCCESS';
export const rdxTransferFixumFetchSuccess = createAction(
  RDX_TRANSFER_LIBER_FETCH_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_TRANSFER_LIBER_FETCH_ERROR = 'RDX_TRANSFER_LIBER_FETCH_ERROR';
export const rdxTransferLiberFetchError = createAction(
  RDX_TRANSFER_LIBER_FETCH_ERROR,
  props<IActionCreator<IError>>()
)
export const RDX_TRANSFER_FIXUM_FETCH_ERROR = 'RDX_TRANSFER_FIXUM_FETCH_ERROR';
export const rdxTransferFixumFetchError = createAction(
  RDX_TRANSFER_FIXUM_FETCH_ERROR,
  props<IActionCreator<IError>>()
)
