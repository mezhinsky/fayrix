import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsListPageComponent } from './cows-list-page.component';

describe('CowsListPageComponent', () => {
  let component: CowsListPageComponent;
  let fixture: ComponentFixture<CowsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
