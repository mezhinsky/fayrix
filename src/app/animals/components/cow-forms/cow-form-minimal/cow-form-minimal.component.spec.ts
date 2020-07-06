import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowFormMinimalComponent } from './cow-form-minimal.component';

describe('CowFormMinimalComponent', () => {
  let component: CowFormMinimalComponent;
  let fixture: ComponentFixture<CowFormMinimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowFormMinimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowFormMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
