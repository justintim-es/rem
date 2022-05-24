import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPaymentSuccessReducer } from "./reducer";


const getPaymentSuccessFeatureState = createFeatureSelector<IPaymentSuccessReducer>('paymentSuccessReducer');

export const getPaymentSuccessIsLoginFetch = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isLoginFetch
)
export const getPaymentSuccessIsLoginFetchSuccess = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isLoginFetchSuccess
)
export const getPaymentSuccessIsLoginFetchError = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isLoginFetchError
)
export const getPaymentSuccessIsTransferFetch = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isTransferFetch
)
export const getPaymentSuccessIsTransferFetchError = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isTransferFetchError
)
export const getPaymentSuccessIsTransferFetchSuccess = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isTransferFetchSuccess
)
export const getPaymentSuccessFetchErrorMessage = createSelector(
  getPaymentSuccessFeatureState,
  state => state.fetchErrorMessage
)
