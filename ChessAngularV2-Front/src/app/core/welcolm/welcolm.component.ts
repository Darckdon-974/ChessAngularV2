import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoveDetailComponent } from '../moves-list-details/move-detail/move-detail.component';
import { MovesListComponent } from '../moves-list-details/moves-list/moves-list.component';

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
    private route: ActivatedRoute, 
    public moves: MovesListComponent,
    public details: MoveDetailComponent,
    private formBuilder: FormBuilder
   
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
  }
}

