import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

import { AuthRoutingModule } from './auth-routing';

@NgModule({
  declarations: [LoginComponent, Login2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    AuthRoutingModule,
    CarouselModule
  ]
})
export class AuthModule { }
