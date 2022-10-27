import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoupsComponent } from './coups.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoupsRoutingModule } from './coups-routing.module';



@NgModule({
  declarations: [
    CoupsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    CoupsRoutingModule,

  ],
  exports: [
    CoupsComponent
  ]
})
export class CoupsModule { }
