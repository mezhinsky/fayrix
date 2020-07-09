import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from '../actions/cows-list.actions';
import * as fromReducers from '../reducers/cows-list.reducer';
import * as fromSelectors from '../selectors/cows-list.selectors';
import { CowModel } from '../../models/cow.model';

@Injectable({ providedIn: 'root' })
export class CowsListFacade {
  loading$ = this.store.pipe(select(fromSelectors.getLoading));
  error$ = this.store.pipe(select(fromSelectors.getError));
  items$ = this.store.pipe(select(fromSelectors.getItems));
  ids$ = this.store.pipe(select(fromSelectors.getItemIds));


  constructor(private store: Store<fromReducers.CowsListState>) {}

  LoadItems() {
    this.store.dispatch(new fromActions.GetCowsListAction());
  }

  getItemById(id: string) {
    return this.store.pipe(select(fromSelectors.getItemById(id)));
  }

  addCow(cow: CowModel) {
    this.store.dispatch(new fromActions.AddCowAction(cow));
  }

  updateCow(id: string, cow: CowModel) {
    this.store.dispatch(new fromActions.updateCowAction(id, cow));
  }

  deleteCow(id: string) {
    this.store.dispatch(new fromActions.deleteCowAction(id));
  }
}
