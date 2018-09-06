import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LnameComponent } from './lname.component';

describe('LnameComponent', () => {
  let component: LnameComponent;
  let fixture: ComponentFixture<LnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
