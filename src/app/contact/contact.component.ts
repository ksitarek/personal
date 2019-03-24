import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', [Validators.required]),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),

    mailSubject: new FormControl('', [Validators.required]),
    mailMessage: new FormControl('', [Validators.required]),

    recaptcha: new FormControl('')
  });

  constructor() { }

  captchaResolved(response: string) {
    console.log(this.contactForm.value);
  }

  get senderName() { return this.contactForm.get('senderName'); }
  get senderEmail() { return this.contactForm.get('senderEmail'); }
  get mailSubject() { return this.contactForm.get('mailSubject'); }
  get mailMessage() { return this.contactForm.get('mailMessage'); }
}
