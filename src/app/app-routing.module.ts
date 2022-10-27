import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInLayoutComponent } from './core/logged-in-layout/logged-in-layout.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    component:LoggedInLayoutComponent,
    children : [
      {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'list',
        loadChildren: () => import('./modules/coups/coups.module').then(m =>m.CoupsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
