import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CowModel } from '../../../models/cow.model';
import { Action, ActionTypes } from '../../../models/action.model';
import CowTypes from '../../../models/cow.type.model';


@Component({
  selector: 'app-cows-list-minimal',
  templateUrl: './cows-list-minimal.component.html',
  styleUrls: ['./cows-list-minimal.component.scss']
})
export class CowsListMinimalComponent implements OnInit {
  public displayedColumns: string[] = ['animalId', 'ageInDays', 'startDateTime', 'daysInLactation', 'type', 'action'];
  public cowTypes = CowTypes;

  @Input() public items: { [key: string]: CowModel };
  @Input() public ids: string[];
  @Input() public loading: boolean;
  @Input() public error: boolean;
  @Output() public action = new EventEmitter<Action>();

  constructor() { }

  ngOnInit(): void {
  }

  public edit(id: string) {
    this.action.emit({ id, actionType: ActionTypes.Update });
  }

  public delete(id: string) {
    this.action.emit({ id, actionType: ActionTypes.Delete });
  }
}
