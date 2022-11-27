import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthHttpInterceptor } from './../auth/auth-http-interceptor';
import { AuthModule } from './../auth/auth.module';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './main/home.component';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SpeedDialModule } from 'primeng/speeddial';
import { StyleClassModule } from 'primeng/styleclass';
import { RatesComponent } from './components/rates/rates.component';
import { UserInformationsSkeletonComponent } from './components/user-informations-skeleton/user-informations-skeleton.component';
import { UserInformationsComponent } from './components/user-informations/user-informations.component';
import { UserStatisticsComponent } from './components/user-statistics/user-statistics.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserStatisticsComponent,
    UserInformationsComponent,
    UserInformationsSkeletonComponent,
    RatesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    RippleModule,
    MenuModule,
    SlideMenuModule,
    SpeedDialModule,
    StyleClassModule,
    MenubarModule,
    SkeletonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
})
export class HomeModule {}
