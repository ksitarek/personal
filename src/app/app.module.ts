import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ProgrammingComponent } from './programming/programming.component';
import { DevopsComponent } from './devops/devops.component';
import { ContactComponent } from './contact/contact.component';

import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HttpClientModule } from '@angular/common/http';
import { GtagModule } from 'angular-gtag';

@NgModule({
  declarations: [
    AppComponent,
    WhoamiComponent,
    NotFoundComponent,
    ProgrammingComponent,
    DevopsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    GtagModule.forRoot({ trackingId: 'UA-138209527-1', trackPageviews: true })
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6Ld-p5kUAAAAAM2Xu-Tfz-Jqkap1XyCOlSiDw8FM',
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
