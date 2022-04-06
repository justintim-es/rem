import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMainReducer } from './reducer';

const getMainFeatureState = createFeatureSelector<IMainReducer>('mainReducer');
export const getMainTopState = createSelector(
    getMainFeatureState,
    state => state.topState
)
export const getMainTopValue = createSelector(
    getMainFeatureState,
    state => state.topValue
)
export const getMainIsTop = createSelector(
    getMainFeatureState,
    state => state.isTop
)
export const getMainBottomState = createSelector(
    getMainFeatureState,
    state => state.bottomState
)
export const getMainIsBottom = createSelector(
    getMainFeatureState,
    state => state.isBottom
)
export const getMainBottomValue = createSelector(
    getMainFeatureState,
    state => state.bottomValue
)