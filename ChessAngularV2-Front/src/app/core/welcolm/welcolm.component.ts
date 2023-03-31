import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MoveDetailComponent } from '../moves-list-details/move-detail/move-detail.component';
import { MovesListComponent } from '../moves-list-details/moves-list/moves-list.component';
import { AuthService } from '../services/auth.service';

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

  constructor(
    public moves: MovesListComponent,
    public details: MoveDetailComponent,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

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
    if (this.registerForm.invalid) {
      return;
    } else if (this.registerForm.valid) {
      this.authService.register(this.registerForm.get('email')!.value, this.registerForm.get('password')!.value)
      .subscribe(response => {
        if (response) {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
          this.subscriptionForm = false;
        }
      });
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.subscriptionForm = false;
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
  }
}