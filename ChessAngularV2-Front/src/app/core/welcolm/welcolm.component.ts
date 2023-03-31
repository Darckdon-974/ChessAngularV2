import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveDetailComponent } from '../moves-list-details/move-detail/move-detail.component';
import { MovesListComponent } from '../moves-list-details/moves-list/moves-list.component';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcolm',
  templateUrl: './welcolm.component.html',
  styleUrls: ['./welcolm.component.scss']
})
export class WelcolmComponent implements OnInit {

 @Input()
  public isConected!: boolean;
  public subscriptionForm = false;
  readonly fb = new FormBuilder();
  registerForm = this.fb.nonNullable.group({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
 

  constructor(
    private route: ActivatedRoute, 
    public moves: MovesListComponent,
    public details: MoveDetailComponent,
    private authService: AuthService
  ) {
    
   }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.get('username')!.value, this.registerForm.get('password')!.value);
    }
  }
}
