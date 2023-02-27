import { Component } from '@angular/core';
import { auth } from 'src/app/shared/models/auth';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {


  get activeUser() : auth | undefined {
    return this._authService.activeUser
  }

  constructor(private _authService : AuthService){}

  logout(){
    this._authService.logout()
  }

}
