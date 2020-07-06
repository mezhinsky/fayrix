import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsListMinimalComponent } from './cows-list-minimal.component';

describe('CowsListMinimalComponent', () => {
  let component: CowsListMinimalComponent;
  let fixture: ComponentFixture<CowsListMinimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowsListMinimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowsListMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
