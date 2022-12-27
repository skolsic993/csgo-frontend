import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthHttpInterceptor } from './../auth/auth-http-interceptor';
import { AuthModule } from './../auth/auth.module';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './main/home.component';

import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SpeedDialModule } from 'primeng/speeddial';
import { StyleClassModule } from 'primeng/styleclass';
import { TabViewModule } from 'primeng/tabview';
import { MapSegmentsComponent } from './components/map-segments/map-segments.component';
import { RatesComponent } from './components/rates/rates.component';
import { FriendListSkeletonComponent } from './components/skeleton/friend-list-skeleton/friend-list-skeleton.component';
import { RatesSkeletonComponent } from './components/skeleton/rates-skeleton/rates-skeleton.component';
import { UserInformationsSkeletonComponent } from './components/skeleton/user-informations-skeleton/user-informations-skeleton.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { UserInformationsComponent } from './components/user-informations/user-informations.component';
import { UserStatisticsComponent } from './components/user-statistics/user-statistics.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserStatisticsComponent,
    UserInformationsComponent,
    UserInformationsSkeletonComponent,
    RatesComponent,
    RatesSkeletonComponent,
    FriendListSkeletonComponent,
    MapSegmentsComponent,
    TeamMembersComponent,
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
    TabViewModule,
    OverlayPanelModule,
    SlideMenuModule,
    DropdownModule,
    ListboxModule,
    FormsModule,
    RadioButtonModule,
    DialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
})
export class HomeModule {}
