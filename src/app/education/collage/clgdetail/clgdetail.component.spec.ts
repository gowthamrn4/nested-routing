import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgdetailComponent } from './clgdetail.component';

describe('ClgdetailComponent', () => {
  let component: ClgdetailComponent;
  let fixture: ComponentFixture<ClgdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClgdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
