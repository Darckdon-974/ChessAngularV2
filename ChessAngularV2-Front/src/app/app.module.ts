import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { MoveModule } from './core/moves-list-details/move.module';
import { MovesListComponent } from './core/moves-list-details/moves-list/moves-list.component';
import { MoveDetailComponent } from './core/moves-list-details/move-detail/move-detail.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HomeModule } from './modules/home/home.module';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
