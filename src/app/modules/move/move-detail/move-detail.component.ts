import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Move } from 'src/app/shared/models/MoveModel';
// Import for use  Angular Material
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit {

  move: Move;
  moveForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required, Validators.minLength(10)]),
    url: new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  constructor(
    private dialogRef: MatDialogRef<MoveDetailComponent>,
    @Inject(MAT_DIALOG_DATA) data: Move,
  ) { 
    this.move = data;
  }

  ngOnInit(): void {
    this.moveForm.setValue({
      id: this.move.id,
      name: this.move.name,
      description: this.move.description,
      url: this.move.url
    });
  }

  save(){
    if (this.moveForm.invalid){
      return;
    }
    this.dialogRef.close(this.moveForm.value);
  }

  close(){
    this.dialogRef.close();
  }
}
