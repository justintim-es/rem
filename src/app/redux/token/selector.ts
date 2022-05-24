import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITokenReducer } from "./reducer";

const tokenFeatureState = createFeatureSelector<ITokenReducer>('tokenReducer');

export const getTokenToken = createSelector(
    tokenFeatureState, 
    state => state.token
)