import { createFeatureSelector, createSelector } from "@ngrx/store";
import { List } from "immutable";
import { IMainWalletReducer } from "./reducer";

const getMainWalletFeatureState = createFeatureSelector<IMainWalletReducer>('mainWalletReducer');

export const getMainWalletIsFetch = createSelector(
    getMainWalletFeatureState,
    state => state.isFetch
)
export const getMainWalletPublic = createSelector(
    getMainWalletFeatureState,
    state => state.public
)
export const getMainWalletGladiator = createSelector(
  getMainWalletFeatureState,
  state => state.gladiator
)
export const getMainWalletLiber = createSelector(
    getMainWalletFeatureState,
    state => state.liber
)
export const getMainWalletFixum = createSelector(
    getMainWalletFeatureState,
    state => state.fixum
)
export const getMainWalletTransfers = createSelector(
  getMainWalletFeatureState,
  state => state.transfers
)
export const getMainWalletTransferPrevTxIds = (ischin: number) => createSelector(
  getMainWalletFeatureState,
  state => state.transfers.getIn([ischin, 'transaction', 'data', 'priorTxIds']) as string[]
);
export const getMainWalletIsDefending = createSelector(
  getMainWalletFeatureState,
  state => state.isDefending
)
export const getMainWalletButton = createSelector(
  getMainWalletFeatureState,
  state => state.button
)
export const getMainWalletRationem = createSelector(
  getMainWalletFeatureState,
  state => state.rationem
)
export const getMainWalletIsRationem = createSelector(
  getMainWalletFeatureState,
  state => state.isRationem
)
