import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, SignoutComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonModule,
    RippleModule,
  ],
})
export class AuthModule {}
