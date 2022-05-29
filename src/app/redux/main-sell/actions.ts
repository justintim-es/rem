import { createAction, props } from "@ngrx/store";
import { IActionCreator, IBalanceResponse, IMainSellRationem, IMainSellSellBalance, IMainSellSellBalanceSuccess, IMainSellSellRationem, IMainSellSellRationemSuccess, IMainSellSellSuccess } from "../combiner";
import { IMainSellIsOnboardCompleteSuccess, IMainSellSellActivateFixum, IMainSellSellActivateFixumError, IMainSellSellLatestPayment, IMainSellSellLatestPaymentSuccess, IMainSellSellReuseFetch, IMainSellSellReuseFetchError } from "./interfaces";

export const RDX_MAIN_SELL_CHOOSE_LIBER = 'RDX_MAIN_SELL_CHOOSE_LIBER';
export const rdxMainSellChooseLiber = createAction(
    RDX_MAIN_SELL_CHOOSE_LIBER,
    props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_CHOOSE_FIXUM = 'RDX_MAIN_SELL_CHOOSE_FIXUM';
export const rdxMainSellChooseFixum = createAction(
  RDX_MAIN_SELL_CHOOSE_FIXUM,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_BALANCE = 'RDX_MAIN_SELL_BALANCE';
export const rdxMainSellBalance = createAction(
  RDX_MAIN_SELL_BALANCE,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_SELL_BALANCE_SUCCESS = 'RDX_MAIN_SELL_BALANCE_SUCCESS';
export const rdxMainSellBalanceSuccess = createAction(
  RDX_MAIN_SELL_BALANCE_SUCCESS,
  props<IActionCreator<IBalanceResponse>>()
)
export const RDX_MAIN_SELL_BALANCE_ERROR = 'RDX_MAIN_SELL_BALANCE_ERROR';
export const rdxMainSellBalanceError = createAction(
  RDX_MAIN_SELL_BALANCE_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_SUBMIT = 'RDX_MAIN_SELL_SUBMIT';
export const rdxMainSellSubmit = createAction(
  RDX_MAIN_SELL_SUBMIT,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_LIBER_SUBMIT = 'RDX_MAIN_SELL_LIBER_SUBMIT';
export const rdxMainSellLiberSubmit = createAction(
  RDX_MAIN_SELL_LIBER_SUBMIT,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_LIBER_SUBMIT_SUCCESS = 'RDX_MAIN_SELl_LIBER_SUBMIT_SUCCESS';
export const rdxMainSellLiberSubmitSuccess = createAction(
  RDX_MAIN_SELL_LIBER_SUBMIT_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_LIBER_SUBMIT_ERROR = 'RDX_MAIN_SELL_LIBER_SUBMIT_ERROR';
export const rdxMainSellLiberSubmitError = createAction(
  RDX_MAIN_SELL_LIBER_SUBMIT_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_FIXUM_SUBMIT = 'RDX_MAIN_SELL_FIXUM_SUBMIT';
export const rdxMainSellFixumSubmit = createAction(
  RDX_MAIN_SELL_FIXUM_SUBMIT,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_FIXUM_SUBMIT_SUCCESS = 'RDX_MAIN_SELL_FIXUM_SUBMIT_SUCCESS';
export const rdxMainSellFixumSubmitSuccess = createAction(
  RDX_MAIN_SELL_LIBER_SUBMIT_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_FIXUM_SUBMIT_ERROR = 'RDX_MAIN_SELL_FIXUM_SUBMIT_ERROR';
export const rdxMainSellFixumSubmitError = createAction(
  RDX_MAIN_SELL_FIXUM_SUBMIT_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_SELL_SELLS = 'RDX_MAIN_SELL_SELLS';
export const rdxMainSellSells = createAction(
  RDX_MAIN_SELL_SELLS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_SELLS_SUCCESS = 'RDX_MAIN_SELL_SELLS_SUCCESS';
export const rdxMainSellSellsSuccess = createAction(
  RDX_MAIN_SELL_SELLS_SUCCESS,
  props<IActionCreator<IMainSellSellSuccess[]>>()
)
export const RDX_MAIN_SELL_SELLS_ERROR = 'RDX_MAIN_SELL_SELLS_ERROR';
export const rdxMainSellSellsError = createAction(
  RDX_MAIN_SELL_SELLS_ERROR,
  props<IActionCreator<any>>()
)

export const RDX_MAIN_SELL_SELL_RATIONEM = 'RDX_MAIN_SELL_SELL_RATIONEM';
export const rdxMainSellSellRationem = createAction(
  RDX_MAIN_SELL_SELL_RATIONEM,
  props<IActionCreator<IMainSellSellRationem>>()
);
export const RDX_MAIN_SELL_SELL_RATIONEM_SUCCESS = 'RDX_MAIN_SELL_SELL_RATIONEM_SUCCESS';
export const rdxMainSellSellRationemSuccess = createAction(
  RDX_MAIN_SELL_SELL_RATIONEM_SUCCESS,
  props<IActionCreator<IMainSellSellRationemSuccess>>()
)
export const RDX_MAIN_SELL_SELL_RATIONEM_ERROR = 'RDX_MAIN_SELL_SELL_RATIONEM_ERROR';
export const rdxMainSellSellRationemError = createAction(
  RDX_MAIN_SELL_SELL_RATIONEM_ERROR,
  props<IActionCreator<any>>()
)

export const RDX_MAIN_SELL_SELL_BALANCE = 'RDX_MAIN_SELL_SELL_BALANCE';
export const rdxMainSellSellBalance = createAction(
  RDX_MAIN_SELL_SELL_BALANCE,
  props<IActionCreator<IMainSellSellBalance>>()
);
export const RDX_MAIN_SELL_SELL_BALANCE_SUCCESS = 'RDX_MAIN_SELL_SELL_BALANCE_SUCCESS';
export const rdxMainSellSellBalanceSuccess = createAction(
  RDX_MAIN_SELL_SELL_BALANCE_SUCCESS,
  props<IActionCreator<IMainSellSellBalanceSuccess>>()
)
export const RDX_MAIN_SELL_SELL_BALANCE_ERROR = 'RDX_MAIN_SELL_SELL_BALANCE_ERROR';
export const rdxMainSellSellBalanceError = createAction(
  RDX_MAIN_SELL_SELL_BALANCE_ERROR,
  props<IActionCreator<IMainSellSellRationemSuccess>>()
)
export const RDX_MAIN_SELL_IS_ONBOARD_COMPLETE = 'RDX_MAIN_SELL_IS_ONBOARD_COMPLETE';
export const rdxMainSellIsOnboardComplete = createAction(
  RDX_MAIN_SELL_IS_ONBOARD_COMPLETE,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_SUCCESS = 'RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_SUCCESS';
export const rdxMainSellIsOnboardCompleteSuccess = createAction(
  RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_SUCCESS,
  props<IActionCreator<IMainSellIsOnboardCompleteSuccess>>()
)
export const RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_ERROR = 'RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_SUCCESS';
export const rdxMainSellIsOnboardCompleteError = createAction(
  RDX_MAIN_SELL_IS_ONBOARD_COMPLETE_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_WEBSITE_FETCH = 'RDX_MAIN_SELL_WEBSITE_FETCH';
export const rdXMainSellWebsiteFetch = createAction(
  RDX_MAIN_SELL_WEBSITE_FETCH,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_WEBSITE_FETCH_SUCCESS = 'RDX_MAIN_SELL_WEBSITE_FETCH_SUCCESS';
export const rdxMainSellWebsiteFetchSuccess = createAction(
  RDX_MAIN_SELL_WEBSITE_FETCH_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_WEBSITE_FETCH_ERROR = 'RDX_MAIN_SELL_WEBSITE_FETCH_ERROR';
export const rdxMainSellWebsiteFetchError = createAction(
  RDX_MAIN_SELL_WEBSITE_FETCH_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH = 'RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH';
export const rdxMainSellCreateAccountFetch = createAction(
  RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH,
  props<IActionCreator<string>>()
)
export const RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_SUCCESS = 'RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_SUCCESS';
export const rdxMainSellCreateAccountFetchSuccess = createAction(
  RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_ERROR = 'RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_ERROR';
export const rdxMainSellCreateAccountFetchError = createAction(
  RDX_MAIN_SELL_CREATE_ACCOUNT_FETCH_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_ONBOARD_LINK_FETCH = 'RDX_MAIN_SELL_ONBOARD_LINK_FETCH';
export const rdxMainSellOnboardLinkFetch = createAction(
  RDX_MAIN_SELL_ONBOARD_LINK_FETCH,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_ONBOARD_LINK_FETCH_SUCCESS = 'RDX_MAIN_SELL_ONBOARD_LINK_FETCH_SUCCESS';
export const rdxMainSellOnboardLinkFetchSuccess = createAction(
  RDX_MAIN_SELL_ONBOARD_LINK_FETCH_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_SELL_ONBOARD_LINK_FETCH_ERROR = 'RDX_MAIN_SELL_ONBOARD_LINK_FETCH_ERROR';
export const rdxMainSellOnboardLinkFetchError = createAction(
  RDX_MAIN_SELL_ONBOARD_LINK_FETCH_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_SELL_SELL_LATEST_PAYMENT = 'RDX_MAIN_SELL_SELL_LATEST_PAYMENT';
export const rdxMainSellSellLatestPayment = createAction(
  RDX_MAIN_SELL_SELL_LATEST_PAYMENT,
  props<IActionCreator<IMainSellSellLatestPayment>>()
)
export const RDX_MAIN_SELL_SELL_LATEST_PAYMENT_SUCCESS = 'RDX_MAIN_SELL_SELL_LATEST_PAYMENT_SUCCESS';
export const rdxMainSellSellLatestPaymentSuccess = createAction(
  RDX_MAIN_SELL_SELL_LATEST_PAYMENT_SUCCESS,
  props<IActionCreator<IMainSellSellLatestPaymentSuccess>>()
)
export const RDX_MAIN_SELL_SELL_LATEST_PAYMENT_ERROR = 'RDX_MAIN_SELL_SELL_LATEST_PAYMENT_ERROR';
export const rdxMainSellSellLatestPaymentError = createAction(
  RDX_MAIN_SELL_SELL_LATEST_PAYMENT_ERROR,
  props<IActionCreator<any>>()
)

export const RDX_MAIN_SELL_SELL_REUSE_FETCH = 'RDX_MAIN_SELL_SELL_REUSE_FETCH';
export const rdxMainSellSellReuseFetch = createAction(
  RDX_MAIN_SELL_SELL_REUSE_FETCH,
  props<IActionCreator<IMainSellSellReuseFetch>>()
)
export const RDX_MAIN_SELL_SELL_REUSE_FETCH_SUCCESS = 'RDX_MAIN_SELL_SELL_REUSE_FETCH_SUCCESS';
export const rdxMainSellSellReuseFetchSuccess = createAction(
  RDX_MAIN_SELL_SELL_REUSE_FETCH_SUCCESS,
  props<IActionCreator<number>>()
)
export const RDX_MAIN_SELL_SELL_REUSE_FETCH_ERROR = 'RDX_MAIN_SELL_SELL_REUSE_FETCH_ERROR';
export const rdxMainSellSellReuseFetchError = createAction(
  RDX_MAIN_SELL_SELL_REUSE_FETCH_ERROR,
  props<IActionCreator<IMainSellSellReuseFetchError>>()
)
