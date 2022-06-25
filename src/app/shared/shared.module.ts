import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NavigationComponent } from './navigation/navigation.component';

import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { FormStyleComponent } from './form-style/form-style.component';
import { FormHeaderComponent } from './form-header/form-header.component';

@NgModule({
  declarations: [
    InputComponent,
    NavigationComponent,
    FormStyleComponent,
    FormHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    MenubarModule,
    TabViewModule,
  ],
  exports: [InputComponent, NavigationComponent, FormStyleComponent],
})
export class SharedModule {}
