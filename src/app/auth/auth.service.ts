import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginRequest } from '../models/request/loginRequest';
import { environment } from '../../environments/environment';
import 'rxjs-compat/add/operator/mergeMap';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs-compat/add/observable/of';
import { UserService } from '../services/user.service';
import 'rxjs-compat/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>(null);
  private isLogged: boolean = false;
  private currentUser: User = null;
  private token: string = null;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  initCurrentUserFromToken() {
    if ( this.token !== null ) {
      this.fetchUserAuth().toPromise()
        .then((user: User) => {
          this.currentUser = user;
          this.currentUserSubject.next(user);
      });
    }
    return Observable.of(null);
  }

  login(loginRequest: LoginRequest): Observable<void> {

    return this.fetchLogin(loginRequest).flatMap((response: HttpResponse<any>) => {
      this.token = response.headers.get('Authorization');
      this.isLogged = true;
      return this.initCurrentUserFromToken();
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.isLogged = false;
    this.currentUser = null;
    this.token = null;
  }

  getUserToken(): string {
    return this.token;
  }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject;
  }

  isAdmin(): boolean {
    return this.currentUser.roles.find((role: Role) => role.name === 'admin') !== undefined;
  }

  isUserLogged(): boolean {
    return this.isLogged;
  }

  private fetchLogin(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${environment.loginEndpoint}`, loginRequest, { observe: 'response' });
  }

  private fetchUserAuth(): Observable<User> {
    return this.userService.getLoggedUserInfo();
  }
}
