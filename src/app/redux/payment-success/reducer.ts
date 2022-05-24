import { createReducer, on } from "@ngrx/store";
import { rdxPaymentSuccessLogin, rdxPaymentSuccessLoginError, rdxPaymentSuccessLoginSuccess, rdxPaymentSuccessTransfer, rdxPaymentSuccessTransferError, rdxPaymentSuccessTransferSuccess } from "./actions";
export interface IPaymentSuccessReducer {
  isLoginFetch: boolean;
  isLoginFetchSuccess: boolean;
  isLoginFetchError: boolean;
  isTransferFetch: boolean;
  isTransferFetchError: boolean;
  isTransferFetchSuccess: boolean;
  fetchErrorMessage: string;
}
export const paymentSuccessInitial: IPaymentSuccessReducer = {
  isLoginFetch: false,
  isLoginFetchSuccess: false,
  isLoginFetchError: false,
  isTransferFetch: false,
  isTransferFetchError: false,
  isTransferFetchSuccess: false,
  fetchErrorMessage: ''
}
export const paymentSuccessReducer = createReducer(
  paymentSuccessInitial,
  on(rdxPaymentSuccessLogin, (state: IPaymentSuccessReducer) => {
    return {
      ...state,
      isLoginFetch: true,
      isLoginFetchSuccess: false,
      isLoginFetchError: false,
    }
  }),
  on(rdxPaymentSuccessLoginSuccess, (state: IPaymentSuccessReducer) => {
    return {
      ...state,
      isLoginFetch: false,
      isLoginFetchSuccess: true,
    }
  }),
  on(rdxPaymentSuccessLoginError, (state: IPaymentSuccessReducer, action) => {
    return {
      ...state,
      isLoginFetch: false,
      isLoginFetchError: true,
      fetchErrorMessage: action.payload!
    }
  }),
  on(rdxPaymentSuccessTransfer, (state: IPaymentSuccessReducer) => {
    return {
      ...state,
      isTransferFetch: true,
      isTransferFetchError: false,
      isTransferFetchSuccess: false
    }
  }),
  on(rdxPaymentSuccessTransferSuccess, (state: IPaymentSuccessReducer) => {
    return {
      ...state,
      isTransferFetch: false,
      isTransferFetchSuccess: true
    }
  }),
  on(rdxPaymentSuccessTransferError, (state: IPaymentSuccessReducer, action) => {
    return {
      ...state,
      isTransferFetch: false,
      isTransferFetchError: true,
      fetchErrorMessage: action.payload!
    }
  }),

)
