import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoupsComponent } from './coups.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoupsRoutingModule } from './coups-routing.module';
import { MoveDetailComponent } from './move-detail/move-detail.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoupsComponent,
    MoveDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    CoupsRoutingModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    CoupsComponent
  ]
})
export class CoupsModule { }
