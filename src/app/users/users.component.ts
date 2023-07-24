import { Component } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: User[] = [];

  constructor(){
    this.users = [ { 
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
    ]
  }
  
}
