import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { BookComponent } from './mycomponents/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
