import { Injectable } from '@angular/core';
import { AnimalsService } from '../../services/animals-service/animals.service';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/cows-list.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

import { CowsListResponse } from '../../models/cows.response.model';


@Injectable()
export class CowsListEffects {
  constructor(
    private AnimalsService: AnimalsService,
    private store$: Store<any>,
    private actions$: Actions,
    private _snackBar: MatSnackBar,
  ) {}


  openSnackBar(action: string) {
    this._snackBar.open('Success', action, {
      duration: 2000,
    });
  }

  @Effect()
  loadCowsList$ = this.actions$.pipe(
    ofType<fromActions.CowsListActions>(fromActions.GET_COWS_LIST),
    switchMap((action) => {
      return this.AnimalsService.getList().pipe(
        map((response: any) => {
          return new fromActions.GetCowsListSuccessAction(response);
        }),
        catchError((err) => {
          return of(new fromActions.GetCowsListErrorAction(err));
        })
      );
    })
  );

  @Effect()
  addCow$ = this.actions$.pipe(
    ofType<fromActions.CowsListActions>(fromActions.ADD_COW),
    switchMap((action: any) => {
      return this.AnimalsService.createItem(action.cow).pipe(
        map((response: any) => {
          return new fromActions.AddCowSuccessAction(response);
        }),
        catchError((err) => {
          return of(new fromActions.AddCowErrorAction(err));
        })
      );
    })
  );

  @Effect()
  updateCow$ = this.actions$.pipe(
    ofType<fromActions.CowsListActions>(fromActions.UPDATE_COW),
    switchMap((action: any) => {
      return this.AnimalsService.updateItem(action.cowId, action.cow).pipe(
        map((response: any) => {
          return new fromActions.updateCowSuccessAction(response);
        }),
        catchError((err) => {
          return of(new fromActions.updateCowErrrorAction(err));
        })
      );
    })
  );

  @Effect()
  deleteCow$ = this.actions$.pipe(
    ofType<fromActions.CowsListActions>(fromActions.DELETE_COW),
    switchMap((action: any) => {
      return this.AnimalsService.deleteItem(action.cowId).pipe(
        map((response: any) => {
          return new fromActions.deleteCowSuccessAction(action.cowId);
        }),
        catchError((err) => {
          return of(new fromActions.updateCowErrrorAction(err));
        })
      );
    })
  );


  @Effect({ dispatch: false })
  deleteMessage$ = this.actions$.pipe(
    ofType<fromActions.deleteCowSuccessAction>(fromActions.DELETE_COW_SUCCESS),
    tap((action) => {
      this.openSnackBar('Record Deleted');
    })
  );

  @Effect({ dispatch: false })
  updateMessage$ = this.actions$.pipe(
    ofType<fromActions.updateCowSuccessAction>(fromActions.UPDATE_COW_SUCCESS),
    tap((action) => {
      this.openSnackBar('Record Updated');
    })
  );

  @Effect({ dispatch: false })
  addMessage$ = this.actions$.pipe(
    ofType<fromActions.AddCowSuccessAction>(fromActions.ADD_COW_SUCCESS),
    tap((action) => {
      this.openSnackBar('Record Added');
    })
  );

}
