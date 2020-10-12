import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';

import { AdminRouterModule } from './admin-router/admin-router.module'

import { LayoutComponent} from '../shared/layout/layout.component';
import { HeaderComponent} from '../shared/layout/header/header.component';
import { FooterComponent} from '../shared/layout/footer/footer.component';
import { SidebarLeftComponent } from '../shared/layout/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from '../shared/layout/sidebar-right/sidebar-right.component';
import { ContentComponent } from '../shared/layout/content/content.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
                 LayoutComponent,
                 HeaderComponent,
                 FooterComponent,
                 SidebarLeftComponent,
                 SidebarRightComponent,
                 ContentComponent,
                 AdminComponent,
                 DashboardComponent 
                ],
  imports: [
    CommonModule,
    AdminRouterModule
  ]
})
export class AdminModule { }
