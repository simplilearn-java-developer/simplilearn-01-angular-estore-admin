import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Output()
  userAuthenticated = new EventEmitter<boolean>();
  
  constructor(private toastr: ToastrService){
    
  }
  onLogout():void {
    this.toastr.success('Logout Successful', 'eCommerce Store');
    this.userAuthenticated.emit(false);
  }
}
