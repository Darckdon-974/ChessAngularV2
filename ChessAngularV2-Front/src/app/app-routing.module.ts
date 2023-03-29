import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
import { LoggedInLayoutComponent } from './core/logged-in-layout/logged-in-layout.component';

const routes: Routes = [
  {
    path: '',
    component:LoggedInLayoutComponent,
    children : [
      {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'list',
        loadChildren: () => import('./modules/move/move.module').then(m =>m.MoveModule)
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
