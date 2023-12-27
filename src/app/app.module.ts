import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrerComponent } from './registration/registrer/registrer.component';
import { ListComponent } from './registration/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
