import {Injectable} from '@angular/core';
import { AnimalsService } from '../../services/animals-service/animals.service';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromActions from '../actions/cows-list.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import { CowsListResponse } from '../../models/cows.response.model';

@Injectable()
export class CowsListEffects {

  constructor(private AnimalsService: AnimalsService,
              private store$: Store<any>,
              private actions$: Actions) {
  }

  @Effect()
  loadCowsList$ = this.actions$.pipe(
    ofType<fromActions.CowsListActions>(fromActions.GET_COWS_LIST),
    switchMap(action => {
        return this.AnimalsService.getJSON()
          .pipe(
            map((response: CowsListResponse) => {
              return new fromActions.GetCowsListSuccessAction(response);
            }),
            catchError(err => {
              return of(new fromActions.GetCowsListErrorAction(err));
            })
          );
      }
    )
  );
}
