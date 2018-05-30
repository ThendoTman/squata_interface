import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LocationStrategy, Location ,HashLocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from './core/core.module';
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';




@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    SortablejsModule,
  ],

  declarations: [AppComponent, ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
