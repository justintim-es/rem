import { createAction, props } from "@ngrx/store";
import { IActionCreator, IGrab, IGrabSuccess, IMainWalletProtectFetch, IMainWalletProtectFetchSuccess, IOtherBid, IYourBid } from "../combiner";
import { IMainWalletProtectGrabOtherSuccess, IMainWalletProtectGrabYourSuccess } from "./interfaces";

export const RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_TRUE  = 'RDX_MAIN_WALLET_IS_TOOLBAR_TRUE';
export const rdxMainWalletProtectIsToolbarTrue = createAction(
  RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_TRUE,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_FALSE  = 'RDX_MAIN_WALLET_IS_TOOLBAR_FALSE';
export const rdxMainWalletProtectIsToolbarFalse = createAction(
  RDX_MAIN_WALLET_PROTECT_IS_TOOLBAR_FALSE,
  props<IActionCreator<any>>()
);

export const RDX_MAIN_WALLET_PROTECT_FETCH  = 'RDX_MAIN_WALLET_PROTECT_FETCH';
export const rdxMainWalletProtectFetch = createAction(
    RDX_MAIN_WALLET_PROTECT_FETCH,
    props<IActionCreator<IMainWalletProtectFetch>>()
)
export const RDX_MAIN_WALLET_PROTECT_FETCH_SUCCESS = 'RDX_MAIN_WALLET_PROTECT_FETCH_SUCCESS';
export const rdxMainWalletProtectFetchSuccess = createAction(
  RDX_MAIN_WALLET_PROTECT_FETCH_SUCCESS,
  props<IActionCreator<IMainWalletProtectFetchSuccess>>()
)
export const RDX_MAIN_WALLET_PROTECT_FETCH_ERROR = 'RDX_MAIN_WALLET_PROTECT_FETCH_ERROR';
export const rdxMainWalletProtectFetchError = createAction(
  RDX_MAIN_WALLET_PROTECT_FETCH_ERROR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_IS_YOUR_BID = 'RDX_MAIN_WALLET_PROTECT_IS_YOUR_BID';
export const rdxMainWalletProtectIsYourBid = createAction(
  RDX_MAIN_WALLET_PROTECT_IS_YOUR_BID,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_PROTECT_IS_OTHER_BID = 'RDX_MAIN_WALLET_PROTECT_IS_OTHER_BID';
export const rdxMainWalletProtectIsOtherBid = createAction(
  RDX_MAIN_WALLET_PROTECT_IS_OTHER_BID,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB = 'RDX_MAIN_WALLET_PROTECT_GRAB';
export const rdxMainWalletProtectGrab = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB,
  props<IActionCreator<IGrab>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB_OTHER = 'RDX_MAIN_WALLET_PROTECT_GRAB_OTHER';
export const rdxMainWalletProtectGrabOther = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_OTHER,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB_YOUR = 'RDX_MAIN_WALLET_PROTECT_GRAB_YOUR';
export const rdxMainWalletProtectGrabYour = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_YOUR,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_SUCCESS =  'RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_SUCCESS';
export const rdxMainWalletProtectGrabOtherSuccess = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_SUCCESS,
  props<IActionCreator<IMainWalletProtectGrabOtherSuccess>>()
);
export const RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_SUCCESS = 'RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_SUCCESS'
export const rdxMainWalletProtectGrabYourSuccess = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_SUCCESS,
  props<IActionCreator<IMainWalletProtectGrabYourSuccess>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_ERROR = 'RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_ERROR';
export const rdxMainWalletProtectGrabOtherError = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_ERROR = 'RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_ERROR';
export const rdxMainWalletProtectGrabYourError = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR = 'RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR';
export const rdxMainWalletProtectGrabOtherYour = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR,
  props<IActionCreator<IGrabSuccess>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_SUCCESS = 'RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_SUCCESS';
export const rdxMainWalletProtectGrabOtherYourSuccess = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_SUCCESS,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_ERROR = 'RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_ERROR';
export const rdxMainWalletProtectGrabOtherYourError = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_OTHER_YOUR_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER = 'RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER';
export const rdxMainWalletProtectGrabYourOther = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER,
  props<IActionCreator<IGrabSuccess>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_SUCCESS = 'RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_SUCCESS';
export const rdxMainWalletProtectGrabYourOtherSuccess = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_ERROR = 'RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_ERROR';
export const rdxMainWalletProtectGrabYourOtherError = createAction(
  RDX_MAIN_WALLET_PROTECT_GRAB_YOUR_OTHER_ERROR,
  props<IActionCreator<any>>()
);
export const RDX_MAIN_WALLET_PROTECT_DEFENCES_SUCCESS = 'RDX_MAIN_WALLET_PROTECT_DEFENCES_SUCCESS';
export const rdxMainWalletProtectDefencesSuccess = createAction(
  RDX_MAIN_WALLET_PROTECT_DEFENCES_SUCCESS,
  props<IActionCreator<any>>()
)
export const RDX_MAIN_WALLET_PROTECT_DEFENCES_ERROR = 'RDX_MAIN_WALLET_PROTECT_DEFENCES_ERROR';
export const rdxMAinWalletProtectDefencesError = createAction(
  RDX_MAIN_WALLET_PROTECT_DEFENCES_ERROR,
  props<IActionCreator<any>>()
)
