import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { UsersComponent } from './components/users/users.component';
import { AuthUserViewGuardService } from './auth/guards/auth-user-view-guard.service';
import { LoginComponent } from './components/login/login.component';
import { AuthInfoViewGuardService } from './auth/guards/auth-info-view-guard.service';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent , children: [
      { path: 'info', component: InfoComponent, canActivate: [AuthInfoViewGuardService] },
      { path: 'users', component: UsersComponent, canActivate: [AuthUserViewGuardService] },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
