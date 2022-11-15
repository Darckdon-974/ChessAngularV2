import { Component, OnInit } from '@angular/core';
import { CoupService } from 'src/app/core/services/coup.service';
import { Coup } from 'src/app/shared/models/CoupModel';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MoveDetailComponent } from './move-detail/move-detail.component';

@Component({
  selector: 'app-coups',
  templateUrl: './coups.component.html',
  styleUrls: ['./coups.component.scss']
})
export class CoupsComponent implements OnInit {

  gridColumns = 4;
  coups: Coup[] = [];

  constructor(
    private coupService: CoupService,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.getCoups();
  }

  getCoups(): void {
    this.coupService.getMoves().subscribe(coups => this.coups = coups);
  }

  delete(coup: Coup): void {
    this.coups = this.coups.filter(h => h !== coup);
    this.coupService.deleteMove(coup.id).subscribe();
  }

  openDialog(coup : Coup) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: coup.id,
      name: coup.name,
      description: coup.description,
      url : coup.url,
    }
    const dialogRef = this.dialog.open(MoveDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      (data: Coup) => {
        if(data!=null){
          console.log("Dialog output:", data);
          this.coupService.updateMove(data).subscribe();
        }
      }
    );
  }
}
