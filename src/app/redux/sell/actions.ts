import { createAction, props  } from '@ngrx/store';
import { IActionCreator } from '../combiner';
import { ISellFetch } from '../combiner';
export const RDX_SELL_ACCOUNT_FETCH = 'RDX_SELL_ACCOUNT_FETCH';
export const rdxSellAccountFetch = createAction('RDX_SELL_ACCOUNT_FETCH', props<IActionCreator<string>>());
export const RDX_SELL_ACCOUNT_FETCH_SUCCESS = 'RDX_SELL_ACCOUNT_FETCH_SUCCESS';
export const rdxSellAccountFetchSuccess = createAction('RDX_SELL_ACCOUNT_FETCH_SUCCESS', props<IActionCreator<string>>());
export const RDX_SELL_ACCOUNT_FETCH_ERROR = 'RDX_SELL_ACCOUNT_FETCH_ERROR';
export const rdxSellAccountFetchError = createAction('RDX_SELL_ACCOUNT_FETCH_ERROR', props<IActionCreator<any>>());

export const RDX_SELL_ACCOUNT_SEND_EMAIL = 'RDX_SELL_ACCOUNT_SEND_EMAIL';
export const rdxSellAccountSendEmail = createAction(RDX_SELL_ACCOUNT_SEND_EMAIL, props<IActionCreator<ISellFetch>>());
export const RDX_SELL_ACCOUNT_SEND_EMAIL_SUCCESS =  'RDX_SELL_ACCOUNT_SEND_EMAIL_SUCCESS';
export const rdxSellAccountSendEmailSuccess = createAction(RDX_SELL_ACCOUNT_SEND_EMAIL_SUCCESS, props<IActionCreator<string>>());
export const RDX_SELL_ACCOUNT_SEND_EMAIL_ERROR = 'RDX_SELL_ACCOUNT_SEND_EMAIL_ERROR';
export const rdxSellAccountSendEmailError = createAction(RDX_SELL_ACCOUNT_SEND_EMAIL_ERROR, props<IActionCreator<any>>());
