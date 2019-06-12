import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserRequest } from '../../models/request/newUserRequest';
import { Role } from '../../models/role';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  validateForm: FormGroup;

  users: Array<User> = new Array<User>();
  displayUsers = this.users;

  selectedRoles: Array<Role> = new Array<Role>();
  roles: Array<Role> = new Array<Role>();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.validateForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.getRoles();
  }

  submitForm(): void {
    this.cleanForm();
    this.createNewUser();
  }

  private cleanForm() {
    for ( const i in this.validateForm.controls ) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  private createNewUser() {
    let newUserRequest = new NewUserRequest();
    newUserRequest.username = this.validateForm.getRawValue()['username'];
    newUserRequest.password = this.validateForm.getRawValue()['password'];
    newUserRequest.roles = this.selectedRoles;

    console.log(newUserRequest);
    this.userService.createNewUser(newUserRequest).subscribe(
      () => {},
      () => {},
      () => this.getUsers()
    );
  }

  private getRoles() {
    this.userService.getAllRoles().subscribe(
      roles => this.roles = roles
    );
  }

  private getUsers() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
        this.displayUsers = users;

        console.log(users);
      }
    );
  }
}
