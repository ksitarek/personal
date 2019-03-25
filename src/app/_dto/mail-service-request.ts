export class MailServiceRequest {
    senderName: string;
    senderEmail: string;
    mailSubject: string;
    mailMessage: string;
    recaptcha: string;

    constructor(senderName: string, senderEmail: string, mailSubject: string, mailMessage: string, recaptcha: string) {
        this.senderName = senderName;
        this.senderEmail = senderEmail;
        this.mailSubject = mailSubject;
        this.mailMessage = mailMessage;
        this.recaptcha = recaptcha;
    }
}
