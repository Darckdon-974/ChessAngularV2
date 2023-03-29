import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conect',
  templateUrl: './conect.component.html',
  styleUrls: ['./conect.component.scss']
})
export class ConectComponent implements OnInit {

  @Output() isItConected = new EventEmitter<boolean>();

  public itIsConnected = false;

  constructor() { }

  ngOnInit(): void {
  }

  isConected(){
    this.isItConected.emit(true);
    this.itIsConnected = true;
  }
  isUnConected(){
    this.isItConected.emit(false);
    this.itIsConnected = false;
  }
}