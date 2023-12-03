import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.development';

import { Observable } from 'rxjs';
import { Credential } from '../model/credential.model';
import { AdminResponse } from '../model/admin-response.model';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private http: HttpClient) { }

  adminLogin(credential: Credential) : Observable<AdminResponse> {

    return this.http
                 .post<AdminResponse>( 
                      environment.host + "/admins/login", 
                      credential
                  );
  }

}
