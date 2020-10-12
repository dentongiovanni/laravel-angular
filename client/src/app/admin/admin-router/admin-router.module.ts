
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { AuthGuard } from '../../guards/';

@NgModule({
  declarations: [],
  imports: [
  
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          { path: 'dashboard', component: DashboardComponent },
        ]
      }
    ])

  ],
  exports: [
    RouterModule
  ]
})
export class AdminRouterModule { }