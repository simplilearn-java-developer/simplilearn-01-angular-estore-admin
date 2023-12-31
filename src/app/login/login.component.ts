import { Component, EventEmitter, Output } from '@angular/core';
import { AdminAuthService } from '../core/admin-auth.service';

import { Credential } from '../model/credential.model';
import { AdminResponse } from '../model/admin-response.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  @Output()
  userAuthenticated = new EventEmitter<boolean>();

  constructor(private adminAuthService: AdminAuthService,
              private toastr: ToastrService){

  }

  onValidate():void{
    console.log(`Email: ${ this.email }, Password: ${ this.password }`)

    /*
      1. Validate if the email is valid

      2. Call the backend to validate email and password using an Angular Service.
    */

    const credential: Credential = {
        email: this.email,
        password: this.password
    }

    this.adminLogin(credential);
 
  }

  private adminLogin(credential: Credential): void{

    this.adminAuthService.adminLogin(credential)
      .subscribe({
        next:(response: AdminResponse) => {
          
          console.log(response);

          if (response.code === 101){
           
            this.toastr.success('Login Successful!', 'eCommerce Store');
            localStorage.setItem("authCode",response.code.toString());
            this.userAuthenticated.emit(true);
          }
          else{
            this.toastr.warning('Invalid Credentials!', 'eCommerce Store');
            localStorage.setItem("authCode","");
          }
        },
        error: (err: any) => {
          this.toastr.error('Error while Login!', 'eCommerce Store');
          console.error(err)
        } 
      });
  }

}
