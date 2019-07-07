import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { TableCssComponent } from './table-css/table-css.component';
import { TableComponent } from './table/table.component';
import { TableFormControlComponent } from './table-form-control/table-form-control.component';
import { TableFormControlLabelComponent } from './table-form-control-label/table-form-control-label.component';
import { CardCssComponent } from './card-css/card-css.component';

@NgModule({
  declarations: [
    AppComponent,
    TableCssComponent,
    TableComponent,
    TableFormControlComponent,
    TableFormControlLabelComponent,
    CardCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
