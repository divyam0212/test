import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormControlLabelComponent } from './table-form-control-label.component';

describe('TableFormControlLabelComponent', () => {
  let component: TableFormControlLabelComponent;
  let fixture: ComponentFixture<TableFormControlLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFormControlLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormControlLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
