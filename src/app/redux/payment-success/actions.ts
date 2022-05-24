import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_PAYMENT_SUCCESS_LOGIN  = 'RDX_PAYMENT_SUCCESS_LOGIN';
export const rdxPaymentSuccessLogin = createAction(
    RDX_PAYMENT_SUCCESS_LOGIN,
    props<IActionCreator<any>>()
);
export const RDX_PAYMENT_SUCCESS_LOGIN_SUCCESS = 'RDX_PAYMENT_SUCCESS_LOGIN_SUCCESS';
export const rdxPaymentSuccessLoginSuccess = createAction(
  RDX_PAYMENT_SUCCESS_LOGIN_SUCCESS,
  props<IActionCreator<any>>()
);
export const RDX_PAYMENT_SUCCESS_LOGIN_ERROR = 'RDX_PAYMENT_SUCCESS_LOGIN_ERROR';
export const rdxPaymentSuccessLoginError = createAction(
  RDX_PAYMENT_SUCCESS_LOGIN_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_PAYMENT_SUCCESS_TRANSFER = 'RDX_PAYMENT_SUCCESS_TRANSFER';
export const rdxPaymentSuccessTransfer = createAction(
  RDX_PAYMENT_SUCCESS_TRANSFER,
  props<IActionCreator<any>>()
)
export const RDX_PAYMENT_SUCCESS_TRANSFER_SUCCESS = 'RDX_PAYMENT_SUCCESS_TRANSFER_SUCCESS';
export const rdxPaymentSuccessTransferSuccess = createAction(
  RDX_PAYMENT_SUCCESS_TRANSFER_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_PAYMENT_SUCCESS_TRANSFER_ERROR = 'RDX_PAYMENT_SUCCESS_TRANSFER_ERROR';
export const rdxPaymentSuccessTransferError = createAction(
  RDX_PAYMENT_SUCCESS_TRANSFER_ERROR,
  props<IActionCreator<any>>()
)
