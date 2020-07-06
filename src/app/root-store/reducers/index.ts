import * as fromLayout from './layout.reducer';
import * as fromRouter from '@ngrx/router-store';

import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateUrl } from './router.reducer';

export interface RootState {
  layout: fromLayout.LayoutState;
  router: fromRouter.RouterReducerState<RouterStateSnapshot>;
}

export const reducers: ActionReducerMap<RootState> = {
  // @ts-ignore
  layout: fromLayout.layoutReducer,
  // @ts-ignore
  router: fromRouter.routerReducer,
};

export const getLayoutState = createFeatureSelector<fromLayout.LayoutState>('layout');
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');
