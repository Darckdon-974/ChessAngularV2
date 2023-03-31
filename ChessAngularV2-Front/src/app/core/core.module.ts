import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoggedInLayoutComponent } from './logged-in-layout/logged-in-layout.component';
// Import for use  Angular Material
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ConectComponent } from './connect/conect.component';
import { FooterComponent } from './footer/footer.component';
import { WelcolmComponent } from './welcolm/welcolm.component';
import { MovesListComponent } from './moves-list-details/moves-list/moves-list.component';
import { MoveDetailComponent } from './moves-list-details/move-detail/move-detail.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoveModule } from './moves-list-details/move.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        HeaderComponent,
        LoggedInLayoutComponent,
        LoggedInLayoutComponent,
        ConectComponent,
        FooterComponent,
        WelcolmComponent,
    ],
    exports: [
        HeaderComponent,
        ConectComponent,
        FooterComponent,
        WelcolmComponent,
    ],
    providers: [MovesListComponent, MoveDetailComponent, MatDialogModule, AuthService, {
            provide: MatDialogRef,
            useValue: []
        }, {
            provide: MAT_DIALOG_DATA,
            useValue: []
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
          }

        ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        AppRoutingModule,
        MatDialogModule,
        MoveModule,
        ReactiveFormsModule
        

    ]
})
export class CoreModule { }
