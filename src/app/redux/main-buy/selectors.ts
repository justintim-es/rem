import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainBuyReducer } from "./reducer";

const getMainBuyFeatureState = createFeatureSelector<IMainBuyReducer>('mainBuyReducer');
export const getMainBuyIsFetch = createSelector(
  getMainBuyFeatureState,
  state => state.isFetch
)
export const getMainBuyIsFetchSuccess = createSelector(
  getMainBuyFeatureState,
  state => state.isFetchSuccess
)
export const getMainBuyIsFetchError = createSelector(
  getMainBuyFeatureState,
  state => state.isFetchError
)
export const getMainBuyOffersLG = createSelector(
  getMainBuyFeatureState,
  state => state.offersLG.filter(o => o.payment)
)
export const getMainBuyOffersLA = createSelector(
  getMainBuyFeatureState,
  state => state.offersLA.filter(o => o.payment)
)
export const getMainBuyOffersLP = createSelector(
  getMainBuyFeatureState,
  state => state.offersLP.filter(o => o.payment)
)
export const getMainBuyOffersFG = createSelector(
  getMainBuyFeatureState,
  state => state.offersFG.filter(o => o.payment)
)
export const getMainBuyOffersFA = createSelector(
  getMainBuyFeatureState,
  state => state.offersFA.filter(o => o.payment)
)
export const getMainBuyOffersFP = createSelector(
  getMainBuyFeatureState,
  state => state.offersFP.filter(o => o.payment)
)
