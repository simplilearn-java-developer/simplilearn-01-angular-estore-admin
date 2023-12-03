import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../model/user-response.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<UserResponse> {

    return this.http
                 .get<UserResponse>( 
                      environment.host + "/users/get"
                  );
  }
}
