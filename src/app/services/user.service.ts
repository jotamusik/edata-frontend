import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewUserRequest } from '../models/request/newUserRequest';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.apiUrl}${environment.userEndpoint}`);
  }

  public createNewUser(newUserRequest: NewUserRequest): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}${environment.userEndpoint}`, newUserRequest);
  }

  public getAllRoles(): Observable<Array<Role>> {
    return this.http.get<Array<Role>>(`${environment.apiUrl}${environment.roleEndpoint}`);
  }
}
