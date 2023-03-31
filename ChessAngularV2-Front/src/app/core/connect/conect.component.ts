import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-conect',
  templateUrl: './conect.component.html',
  styleUrls: ['./conect.component.scss']
})
export class ConectComponent implements OnInit {

  @Output() isItConected = new EventEmitter<boolean>();

  public itIsConnected = false;
  readonly fb = new FormBuilder();
  loginForm = this.fb.nonNullable.group({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.isItConected.emit(true);
      this.itIsConnected = true;
    } else {
      this.isItConected.emit(false);
      this.itIsConnected = false;
    }
  }

  async isConected(){
    if (this.loginForm.valid) {
      await this.authService.login(this.loginForm.get('username')!.value, this.loginForm.get('password')!.value)
      .subscribe(response => {
        this.authService.setSession(response.access_token);
        this.isItConected.emit(true);
        this.itIsConnected = true;
      });
    } else {
      this.isItConected.emit(false);
      this.itIsConnected = false;
    }
  }
  isUnConected(){
    this.authService.logout();
    this.isItConected.emit(false);
    this.itIsConnected = false;
  }
}