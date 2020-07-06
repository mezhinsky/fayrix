import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
  Data,
} from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;
}

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    let data: Data = state.data;

    while (state.firstChild) {
      state = state.firstChild;
      data = state.data;
    }

    const { params } = state;

    return { url, queryParams, params, data };
  }
}

export const getRouteUrl = (state: RouterStateUrl) => state.url;
export const getRouteQueryParams = (state: RouterStateUrl) => state.queryParams;
export const getRouteData = (state: RouterStateUrl) => state.data;
export const getRouteParams = (state: RouterStateUrl) => state.params;
