import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CowModel } from '../../../models/cow.model';

import {MatDialog} from '@angular/material/dialog';
import { CowDialogComponent } from '../cow-dialog/cow-dialog.component';

import { CowsListFacade } from '../../../animals-store/facades/cows-list.facade';
import { Action, ActionTypes } from '../../../models/action.model';


@Component({
  selector: 'app-cows-list-page',
  templateUrl: './cows-list-page.component.html',
  styleUrls: ['./cows-list-page.component.scss']
})
export class CowsListPageComponent implements OnInit {
  public items$: Observable<Record<string, CowModel>>;
  public ids$: Observable<string[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<boolean>;

  constructor(public cowsListFacade: CowsListFacade, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.items$ = this.cowsListFacade.items$;
    this.ids$ = this.cowsListFacade.ids$;

    this.loadItems();
  }


  loadItems(): void {
    this.cowsListFacade.LoadItems();
  }

  private openDialog(action: Action): void {
    const dialogRef = this.dialog.open(CowDialogComponent, {
      data: action
    });
  }

  public onAction(action: Action): void {
    if (action.actionType === 'DELETE') {
      this.cowsListFacade.deleteCow(action.id);
    } else {
      this.openDialog(action);
    }
  }

  public add(): void  {
    this.openDialog({ id: null, actionType: ActionTypes.Create })
  }
}
