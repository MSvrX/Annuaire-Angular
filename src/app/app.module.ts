import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ListeContactComponent,
    DetailContactComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
