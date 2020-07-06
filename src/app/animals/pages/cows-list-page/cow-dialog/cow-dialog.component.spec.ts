import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowDialogComponent } from './cow-dialog.component';

describe('CowDialogComponent', () => {
  let component: CowDialogComponent;
  let fixture: ComponentFixture<CowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
