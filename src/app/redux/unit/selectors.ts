import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IUnitReducer } from "./reducer"


export const getUnitFeatureState = createFeatureSelector<IUnitReducer>('unitReducer');
export const getUnitGla = createSelector(
  getUnitFeatureState,
  state => state.gla
)

