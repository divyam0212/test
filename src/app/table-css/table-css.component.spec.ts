import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCssComponent } from './table-css.component';

describe('TableCssComponent', () => {
  let component: TableCssComponent;
  let fixture: ComponentFixture<TableCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
