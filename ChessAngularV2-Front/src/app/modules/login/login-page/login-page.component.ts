import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  userForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private readonly fb: NonNullableFormBuilder
    ) {
      this.userForm = fb.group({
        username: new FormControl('', [Validators.required, Validators.minLength(4)]),
        password: new FormControl('', [Validators.required])
      });
     }

  ngOnInit(): void {
  }

  login() {
    if (this.userForm.invalid){
      return;
    }
    this.authService.login(this.userForm.value.username, this.userForm.value.password);
  }
}
