import { createAction, props } from "@ngrx/store";
import { IActionCreator, IMainWalletProtectBurnFetch, IMainWalletProtectBurnFetchError } from "../combiner";

export const RDX_MAIN_WALLET_PROTECT_BURN_PUSH_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_PUSH_LIBER';
export const rdxMainWalletProtectBurnPush = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_PUSH_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_PUSH_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_PUSH_FIXUM';
export const rdxMainWalletProtectBurnPushFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_PUSH_FIXUM,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_FETCH_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_FETCH_LIBER';
export const rdxMainWalletProtectBurnFetchLiber = createAction(
    RDX_MAIN_WALLET_PROTECT_BURN_FETCH_LIBER,
    props<IActionCreator<number>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_FETCH_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_FETCH_FIXUM';
export const rdxMainWalletProtectBurnFetchFixum = createAction(
    RDX_MAIN_WALLET_PROTECT_BURN_FETCH_FIXUM,
    props<IActionCreator<number>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_LIBER = 'RDX_MAIN_WALLET_PROTECT_YOUR_BURN_YOUR_FETCH_LIBER';
export const rdxMainWalletProtectBurnYourFetchLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_LIBER,
  props<IActionCreator<IMainWalletProtectBurnFetch>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_FIXUM = 'RDX_MAIN_WALLET_PROTECT_YOUR_BURN_YOUR_FETCH_FIXUM';
export const rdxMainWalletProtectBurnYourFetchFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_LIBER,
  props<IActionCreator<IMainWalletProtectBurnFetch>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_LIBER';
export const rdxMainWalletProtectBurnYourFetchSuccessLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_LIBER,
  props<IActionCreator<number>>()
);
export const RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_FIXUM';
export const rdxMainWalletProtectBurnYourFetchSuccessFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_SUCCESS_LIBER,
  props<IActionCreator<number>>()
);
export const RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_LIBER';
export const rdxMainWalletProtectBurnYourFetchErrorLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_LIBER,
  props<IActionCreator<IMainWalletProtectBurnFetchError>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_FIXUM';
export const rdxMainWalletProtectBurnYourFetchErrorFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_YOUR_FETCH_ERROR_FIXUM,
  props<IActionCreator<IMainWalletProtectBurnFetchError>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_LIBER';
export const rdxMainWalletProtectBurnOtherFetchLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_LIBER,
  props<IActionCreator<IMainWalletProtectBurnFetch>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_FIXUM';
export const rdxMainWalletProtectBurnOtherFetchFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_FIXUM,
  props<IActionCreator<IMainWalletProtectBurnFetch>>()
)
// export const RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_LIBER';
// export const rdxMainWalletProtectBurnOtherFetchError = createAction(
//   RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_LIBER,
//   props<IActionCreator<any>>()
// )
export const RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_LIBER';
export const rdxMainWalletProtectBurnOtherFetchSuccessLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_LIBER,
  props<IActionCreator<number>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_FIXUM';
export const rdxMainWalletProtectBurnOtherFetchSuccessFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_SUCCESS_FIXUM,
  props<IActionCreator<number>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_LIBER';
export const rdxMainWalletProtectBurnOtherFetchErrorLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_LIBER,
  props<IActionCreator<IMainWalletProtectBurnFetchError>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_FIXUM';
export const rdxMainWalletProtectBurnOtherFetchErrorFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_OTHER_FETCH_ERROR_FIXUM,
  props<IActionCreator<IMainWalletProtectBurnFetchError>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_LIBER';
export const rdxMainWalletProtectBurnSellFetchLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_FIXUM';
export const rdxMainWalletProtectBurnSellFetchFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_FIXUM,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_ERROR_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_LIBER';
export const rdxMainWalletProtectBurnSellFetchErrorLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_ERROR_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_ERROR_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_FIXUM';
export const rdxMainWalletProtectBurnSellFetchErrorFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_ERROR_FIXUM,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_LIBER';
export const rdxMainWalletProtectBurnSellYourFetchLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_FIXUM';
export const rdxMainWalletProtectBurnSellYourFetchFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_FIXUM,
  props<IActionCreator<any>>()
)

export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_LIBER';
export const rdxMainWalletProtectBurnSellYourFetchSuccessLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_FIXUM';
export const rdxMainWalletProtectBurnSellYourFetchSuccessFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_SUCCESS_FIXUM,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_ERROR_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_ERROR_LIBER';
export const rdxMainWalletProtectBurnSellYourFetchErrorLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_ERROR_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_ERROR_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_FETCH_ERROR_FIXUM';
export const rdxMainWalletProtectBurnSellYourFetchErrorFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_YOUR_FETCH_ERROR_FIXUM,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_LIBER';
export const rdxMainWalletProtectBurnSellOtherFetchLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_FIXUM';
export const rdxMainWalletProtectBurnSellOtherFetchFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_FIXUM,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_SUCCESS_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_SUCCESS_LIBER';
export const rdxMainWalletProtectBurnSellOtherFetchSuccessLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_SUCCESS_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_SUCCESS_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_SUCCESS_FIXUM';
export const rdxMainWalletProtectBurnSellOtherFetchSuccessFixum = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_SUCCESS_LIBER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_LIBER = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_LIBER';
export const rdxMainWalletProtectBurnSellOtherFetchErrorLiber = createAction(
  RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_LIBER,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_FIXUM = 'RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_FIXUM';
export const rdxMainWalletProtectBurnSellOtherFetchErrorFixum = createAction(
 RDX_MAIN_WALLET_PROTECT_BURN_SELL_OTHER_FETCH_ERROR_FIXUM,
  props<IActionCreator<any>>()
);
