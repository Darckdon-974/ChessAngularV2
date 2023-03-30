import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in-layout',
  templateUrl: './logged-in-layout.component.html',
  styleUrls: ['./logged-in-layout.component.scss']
})
export class LoggedInLayoutComponent implements OnInit {
 isConected = false;

  constructor() { }

  ngOnInit(): void {

  }

  isItConnected(itIsConnected: boolean) {
    this.isConected =  itIsConnected ; 
  }

}
