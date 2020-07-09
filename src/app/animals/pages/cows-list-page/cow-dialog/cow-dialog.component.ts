import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Action } from '../../../models/action.model';
import { CowModel } from '../../../models/cow.model';

import { CowsListFacade } from '../../../animals-store/facades/cows-list.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cow-dialog',
  templateUrl: './cow-dialog.component.html',
  styleUrls: ['./cow-dialog.component.scss']
})
export class CowDialogComponent implements OnInit {
  public item$: Observable<CowModel>;

  constructor(
    public dialogRef: MatDialogRef<CowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Action,
    private cowsListFacade: CowsListFacade,
  ) { }

  ngOnInit(): void {
    this.loadCow(this.data.id);
  }

  loadCow(id: string): void {
    this.item$ = this.cowsListFacade.getItemById(id);
  }

  addCow(cow: CowModel): void {
    this.cowsListFacade.addCow(cow)
  }

  updateCow(id: string, cow: CowModel): void {
    this.cowsListFacade.updateCow(id, cow)
    this.dialogRef.close();
  }

  deleteCow(id: string): void {
    this.cowsListFacade.deleteCow(id)
  }

  public onFormChange(formValue) {
    console.log(formValue);
    if (this.data.actionType === 'UPDATE') {
      this.updateCow(this.data.id, formValue)
    } else {
      this.addCow(formValue)
    }
  }

  public onFormCancel() {
    this.dialogRef.close();
  }

}
