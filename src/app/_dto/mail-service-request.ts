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
        this.recaptcha = recaptcha;

        // replace newlines into <br>
        this.mailMessage = mailMessage.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
}
