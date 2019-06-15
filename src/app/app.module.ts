import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './components/users/users.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UsersComponent,
    LoginComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  bootstrap: [ AppComponent ],
  providers   : [
    { provide: NZ_I18N, useValue: es_ES },
    AuthInterceptor,
  ]
})
export class AppModule { }
