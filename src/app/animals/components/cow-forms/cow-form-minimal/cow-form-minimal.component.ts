import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { CowModel } from '../../../models/cow.model';
import { ThrowStmt } from '@angular/compiler';
import * as moment from 'moment';
import { Moment } from 'moment';

import CowTypes from '../../../models/cow.type.model';

@Component({
  selector: 'app-cow-form-minimal',
  templateUrl: './cow-form-minimal.component.html',
  styleUrls: ['./cow-form-minimal.component.scss']
})
export class CowFormMinimalComponent implements OnInit {
  public cowForm: FormGroup;
  public cowTypes = CowTypes;


  @Input() public item: CowModel;
  @Output() public onChange = new EventEmitter<any>();
  @Output() public onCancel = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.cowForm = this.fb.group({
      cowId: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      animalId: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      eventId: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      healthIndex: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      heatIndexPeak: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      endDate: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      minValueDateTime: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      type: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      deletable: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
        ]),
      ],
      lactationNumber: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.maxLength(100),
        ]),
      ],
      daysInLactation: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.maxLength(200),
        ]),
      ],
      ageInDays: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      startDateTime: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
      reportingDateTime: [
        {
          value : null,
          disabled: false,
        },
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {
    this.fillForm();
  }

  private genFakeId(): number {
    return Math.floor(Math.random() * 100000)
  }

  private fillForm(): void {
    if (this.item) {
      this.cowForm.patchValue(this.item);
      this.cowForm.patchValue(
        {
          startDateTime: moment(this.item.startDateTime),
          reportingDateTime: moment(this.item.reportingDateTime),
          endDate: moment(this.item.endDate),
          minValueDateTime: moment(this.item.minValueDateTime),
        }
      )


    } else {
      //этого может и не быть, зависит от архитектуры backend
      this.cowForm.patchValue({
        cowId: this.genFakeId(),
        animalId: this.genFakeId(),
        eventId: this.genFakeId(),
      })
    }
  }

  public submit(form: FormGroup): void {
    let startDateTime: AbstractControl & Moment = form.get('startDateTime').value
    let reportingDateTime: AbstractControl & Moment = form.get('reportingDateTime').value
    let endDate: AbstractControl & Moment = form.get('endDate').value
    let minValueDateTime: AbstractControl & Moment = form.get('minValueDateTime').value

    form.patchValue({
      startDateTime: startDateTime ? startDateTime.unix() * 1000 : null,
      reportingDateTime: reportingDateTime ? reportingDateTime.unix() * 1000 : null,
      endDate: endDate ? endDate.unix() * 1000 : null,
      minValueDateTime: minValueDateTime?  minValueDateTime.unix() * 1000 : null,
    })

    this.onChange.emit(form.value);
  }

  public cancel(): void {
    this.onCancel.emit();
  }

}
