import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainWalletProtectReducer } from "../main-wallet-protect/reducer";
import { IMainWalletProtectBurnReducer } from "./reducer";

const getMainWalletProtectBurnFeatureState = createFeatureSelector<IMainWalletProtectBurnReducer>('mainWalletProtectBurnReducer');
export const getMainWalletProtectBurnIsFetch = (ischin: number) => createSelector(
  getMainWalletProtectBurnFeatureState,
  state => state.isFetch.get(ischin),
)
export const getMainWalletProtectBurnIsFetchSuccess = (ischin: number) => createSelector(
  getMainWalletProtectBurnFeatureState,
  state => state.isFetchSuccess.get(ischin),
)
export const getMainWalletProtectBurnIsFetchError = (ischin: number) => createSelector(
  getMainWalletProtectBurnFeatureState,
  state => state.isFetchError.get(ischin)
)
export const getMainWalletProtectBurnFetchErrorMessage = createSelector(
  getMainWalletProtectBurnFeatureState,
  state => state.fetchErrorMessage
)
