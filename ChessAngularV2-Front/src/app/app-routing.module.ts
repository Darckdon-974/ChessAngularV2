import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInLayoutComponent } from './core/logged-in-layout/logged-in-layout.component';

const routes: Routes = [
  {
    path: '',
    component:LoggedInLayoutComponent,
    // canActivate: [AuthGuard],
    children : [
      {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule),
      },

      
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
