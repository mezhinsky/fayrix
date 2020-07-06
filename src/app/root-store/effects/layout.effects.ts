import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mapTo, switchMap, tap, withLatestFrom, concatMapTo } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class LayoutEffects {


  constructor(
    private router: Router,
    private store: Store,
    private actions$: Actions,
  ) { }
}
