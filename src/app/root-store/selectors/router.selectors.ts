import { createSelector } from '@ngrx/store';
import { getRouterState } from '../reducers';
import * as fromReducer from '../reducers/router.reducer';

export const getCompleteRouterState = createSelector(getRouterState, (routerReducerState) => routerReducerState.state);

export const getData = createSelector(
  getCompleteRouterState,
  fromReducer.getRouteData
);

export const getParams = createSelector(
  getCompleteRouterState,
  fromReducer.getRouteParams
);

export const getQueryParams = createSelector(
  getCompleteRouterState,
  fromReducer.getRouteQueryParams
);

export const getUrl = createSelector(
  getCompleteRouterState,
  fromReducer.getRouteUrl
);
