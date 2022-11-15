import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Coup } from 'src/app/shared/models/CoupModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit {

  move: Coup;
  moveForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required, Validators.minLength(10)]),
    url: new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  constructor(
    private dialogRef: MatDialogRef<MoveDetailComponent>,
    @Inject(MAT_DIALOG_DATA) data: Coup) {
      this.move = data;
  }


  ngOnInit() {
    this.moveForm.setValue({
      id: this.move.id,
      name: this.move.name,
      description: this.move.description,
      url: this.move.url
    });
  }

  save(){
    if (this.moveForm.invalid) {
      return;
    }
    this.dialogRef.close(this.moveForm.value);
  }

  close(){
    this.dialogRef.close();
  }
}
