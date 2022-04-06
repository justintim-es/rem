import { createReducer, on } from '@ngrx/store';
import { rdxSellAccountFetch, rdxSellAccountFetchSuccess, rdxSellAccountFetchError, rdxSellAccountSendEmail, rdxSellAccountSendEmailSuccess, rdxSellAccountSendEmailError } from './actions';
export interface ISellReducer {
  isAccountId: boolean;
  accountId: string;
  isEmail: boolean;
  isOnboard: boolean;
  isOnboardSuccess: boolean;
}
export const sellInitial: ISellReducer = {
  isAccountId: false,
  accountId: '',
  isEmail: false,
  isOnboard: false,
  isOnboardSuccess: false
}
export const sellReducer = createReducer(
  sellInitial,
  on(rdxSellAccountFetch, (state: ISellReducer) => {
    return {
      ...state,
      isAccountId: true
    }
  }),
  on(rdxSellAccountFetchSuccess, (state: ISellReducer, action) => {
    return {
      ...state,
      isAccountId: false,
      isEmail: true,
      accountId: action.payload!
    }
  }),
  on(rdxSellAccountFetchError, (state: ISellReducer) => {
    return {
      ...state,
      isAccountId: false
    }
  }),
  on(rdxSellAccountSendEmail, (state: ISellReducer, action) => {
    return {
      ...state,
      isOnboard: true
    }
  }),
  on(rdxSellAccountSendEmailSuccess, (state: ISellReducer, action) => {
    return {
      ...state,
      isOnboard: false,
      onboardUrl: action.payload!,
      isOnboardUrl: true,
      isOnboardSuccess: true
    }
  })
)
