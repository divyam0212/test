import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TableCssComponent } from './table-css/table-css.component';
import { TableFormControlComponent } from './table-form-control/table-form-control.component';
import { TableFormControlLabelComponent } from './table-form-control-label/table-form-control-label.component';
import { CardCssComponent } from './card-css/card-css.component';

const routes: Routes = [
  {
    path: 'table',
    component:TableComponent
  },
  {
    path: 'tableCss',
    component:TableCssComponent
  },
  {
    path:'formControl',
    component: TableFormControlComponent
  },
  {
    path:'label',
    component: TableFormControlLabelComponent
  },
  {
    path: 'card',
    component:CardCssComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
