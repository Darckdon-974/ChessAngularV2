import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveDetailComponent } from '../moves-list-details/move-detail/move-detail.component';
import { MovesListComponent } from '../moves-list-details/moves-list/moves-list.component';

@Component({
  selector: 'app-welcolm',
  templateUrl: './welcolm.component.html',
  styleUrls: ['./welcolm.component.scss']
})
export class WelcolmComponent implements OnInit {

 @Input()
  public isConected!: boolean;

  public subscriptionForm = false;
 

  constructor(
    private route: ActivatedRoute, 
    public moves: MovesListComponent,
    public details: MoveDetailComponent
  ) {
    
   }

  ngOnInit(): void {
  }

  

 

}
