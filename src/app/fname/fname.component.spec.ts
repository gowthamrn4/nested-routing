import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnameComponent } from './fname.component';

describe('FnameComponent', () => {
  let component: FnameComponent;
  let fixture: ComponentFixture<FnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
