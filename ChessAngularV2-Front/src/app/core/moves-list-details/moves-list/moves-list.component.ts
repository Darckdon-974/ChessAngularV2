import { Component, OnInit } from '@angular/core';
import { Move } from '../../../../../../shared/interfaces/move.interface';
import { MoveDetailComponent } from '../../../core/moves-list-details/move-detail/move-detail.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MoveService } from '../../services/move.service';


@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  gridColumns: number = 4;
  moves: Move[] = [];
  public lotsOfTabs!: string[];

  constructor(
    private moveService: MoveService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.load();
     this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `coups ${index}`);
  }

  load(): void {
    this.moveService.getMoves().subscribe(data => this.moves = data);
  }

  openMoveDetailForAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 0,
      name: "",
      description: "",
      url: ""
    }
    const dialogRef = this.dialog.open(MoveDetailComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (data) => {
        if (data!=null) {
          this.moveService.addMove(data).subscribe(()=>this.load());
        }
      }
    );
  }

  openMoveDetailForUpdate(move: Move) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: move.id,
      name: move.name,
      description: move.description,
      url: move.url
    }
    const dialogRef = this.dialog.open(MoveDetailComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (data) => {
        if (data!=null) {
          this.moveService.updateMove(data).subscribe(()=>this.load());
        }
      }
    );
  }

  delete(moveId: number): void {
    this.moveService.deleteMove(moveId).subscribe(()=>this.load());
  }
}
