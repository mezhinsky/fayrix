import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from '../actions/layout.actions';
import * as fromReducers from '../reducers/layout.reducer';
import * as fromSelectors from '../selectors/layout.selectors';

@Injectable({ providedIn: 'root' })
export class LayoutStoreFacade {
  constructor(private store: Store<fromReducers.LayoutState>) {}


  pressBtn() {
    this.store.dispatch(new fromActions.BtnAction());
  }
}
