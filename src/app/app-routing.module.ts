import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: LayoutComponent , children: [
      { path: 'users', component: UsersComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
