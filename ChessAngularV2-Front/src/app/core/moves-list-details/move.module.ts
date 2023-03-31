import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveRoutingModule } from './move-routing.module';
import { MoveDetailComponent } from './move-detail/move-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MovesListComponent } from './moves-list/moves-list.component';

// Import for use  Angular Material
import { MatDialogModule, MatDialogRef,  MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    MoveDetailComponent,
    MovesListComponent,
  ],
  imports: [
    CommonModule,
    MoveRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule
    
    
  ],
  exports: [
    MoveDetailComponent,
    MovesListComponent,
  ]
})
export class MoveModule { }
