import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { LoggedInLayoutComponent } from './logged-in-layout/logged-in-layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoggedInLayoutComponent,
    LoggedInLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,

  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
