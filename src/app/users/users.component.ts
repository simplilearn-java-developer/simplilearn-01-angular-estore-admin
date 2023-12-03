import { Component, OnInit } from '@angular/core';

import { UsersService } from '../core/users.service';
import { ToastrService } from 'ngx-toastr';
import { UserResponse } from '../model/user-response.model';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: User[] = [];

  constructor(private router: Router,
              private usersService: UsersService, 
              private toastr: ToastrService){
    /*this.users = [ { 
                    name: 'Carlos Zegarra',
                    username: 'carlos',
                    email: 'carlos@gmail.com',
                    city: 'Toronto',
                    contact: '6471234567'
                   },
                   { 
                    name: 'John Watson',
                    username: 'john',
                    email: 'john@example.com',
                    city: 'Ludhiana',
                    contact: '6471234567'
                   },
    ]*/
  }
  ngOnInit(): void {
    this.getUsers();
  }
  
  private getUsers(): void {

    this.usersService.getUsers().subscribe({
      next:(response: UserResponse) => {
          
        console.log(response);

        if (response.code === 101){
         
          this.users = response.data;
        }
        else{
          this.toastr.warning('Users Not Found', 'eCommerce Store');
        }
      },
      error: (err: any) => {
        this.toastr.error('Error while Loading Users!', 'eCommerce Store');
        console.error(err)
      } 
    });
  }

  onShowOrders(userId:number): void {
    this.router.navigate(['/orders']);
  }
}
