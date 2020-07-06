import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromReducers from '../reducers/router.reducer';
import * as fromSelectors from '../selectors/router.selectors';

@Injectable({ providedIn: 'root' })
export class RouterStoreFacade {
  route$ = this.store.pipe(select(fromSelectors.getCompleteRouterState));
  data$ = this.store.pipe(select(fromSelectors.getData));
  url$ = this.store.pipe(select(fromSelectors.getUrl));
  params$ = this.store.pipe(select(fromSelectors.getParams));
  queryParams$ = this.store.pipe(select(fromSelectors.getQueryParams));

  constructor(private store: Store<fromReducers.RouterStateUrl>) {}

}
