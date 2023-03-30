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

    // appel au back 

    // si is réponse guard ok 
    // alors : 
    this.isItConected.emit(true);
    this.itIsConnected = true;

    // réponse guard Nok alors  this.isItConected.emit(false);
  }
  isUnConected(){

    // appel de déconection 
    // demande de réponse 
    // même shéma si réponse ok -> false --Si réponse NOK --> Message d'erreur 
    this.isItConected.emit(false);
    this.itIsConnected = false;
  }
}