import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailServiceResponse } from '../_dto/mail-service-response';
import { MailServiceRequest } from '../_dto/mail-service-request';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  sendMail(data: MailServiceRequest): Promise<MailServiceResponse> {
    return this.http.post<MailServiceResponse>(environment.mailServiceEndpoint, data)
      .toPromise();
  }
}
