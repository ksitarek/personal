import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { NotFoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoamiComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
