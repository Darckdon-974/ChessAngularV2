import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  registerForm!: FormGroup;
    submitted = false;

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
    private formBuilder: FormBuilder
    private authService: AuthService
  ) {
    
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.get('username')!.value, this.registerForm.get('password')!.value);
    }
  }
}

