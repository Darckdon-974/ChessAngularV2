import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoupsComponent } from './coups.component';

const routes: Routes = [
  {
    path: '',
    component: CoupsComponent,
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]

})
export class CoupsRoutingModule { }
