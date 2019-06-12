import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  token: string;

  public getUserToken(): string {
    return this.token;
  }

  public isAdmin(): boolean {
    return this.currentUser.roles.includes( role => role.name === 'admin');
  }
}
