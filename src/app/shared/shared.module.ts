import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputComponent } from './input/input.component';
import { NavigationComponent } from './navigation/navigation.component';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SpeedDialModule } from 'primeng/speeddial';
import { StyleClassModule } from 'primeng/styleclass';
import { TabViewModule } from 'primeng/tabview';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormStyleComponent } from './form-style/form-style.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    InputComponent,
    NavigationComponent,
    FormStyleComponent,
    FormHeaderComponent,
    SideNavigationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    MenubarModule,
    TabViewModule,
    SlideMenuModule,
    SpeedDialModule,
    StyleClassModule,
    RippleModule,
    MenuModule,
    MessageModule,
  ],
  exports: [
    InputComponent,
    NavigationComponent,
    FormStyleComponent,
    SideNavigationComponent,
  ],
})
export class SharedModule {}
