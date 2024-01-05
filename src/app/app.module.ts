import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RegistrerUser } from './registration/components/register.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrerUser,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
