import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';
import { MailService } from '../_services/mail.service';
import { MailServiceRequest } from '../_dto/mail-service-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private mailService: MailService
  ) { }

  sending = false;
  errored = false;
  sent = false;
  sentTo = '';

  contactForm = new FormGroup({
    senderName: new FormControl('', [Validators.required]),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),

    mailSubject: new FormControl('', [Validators.required]),
    mailMessage: new FormControl('', [Validators.required]),

    recaptcha: new FormControl('')
  });

  get senderName() { return this.contactForm.get('senderName'); }
  get senderEmail() { return this.contactForm.get('senderEmail'); }
  get mailSubject() { return this.contactForm.get('mailSubject'); }
  get mailMessage() { return this.contactForm.get('mailMessage'); }
  get recaptcha() { return this.contactForm.get('recaptcha'); }

  ngSubmit(recaptchaComponent: RecaptchaComponent) {
    console.log('submitted');
    // do not process twice
    if (this.sending) { return; }

    this.sending = true;
    recaptchaComponent.execute();
  }

  captchaResolved(response: string) {
    // ignore clearing recaptcha
    if (response === null) { return; }

    const data = new MailServiceRequest(this.senderName.value,
      this.senderEmail.value,
      this.mailSubject.value,
      this.mailMessage.value,
      response);

    console.log('called resolve');

    this.mailService.sendMail(data)
      .then(
        // successful response does not yet mean that we sent mail
        x => {
          if (!x.success) {
            this.errored = true;
          } else {
            this.sent = true;
            this.sentTo = this.senderName.value;
            this.errored = false;
            this.contactForm.reset();
          }

          this.sending = false;
        },

        // handle error
        x => {
          this.errored = true;
          this.sending = false;
        },
      );
  }
}
