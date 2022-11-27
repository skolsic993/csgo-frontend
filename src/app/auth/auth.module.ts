import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';

import { MessageModule } from 'primeng/message';

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
    MessageModule,
  ],
})
export class AuthModule {}
