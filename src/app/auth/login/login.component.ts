import { Component, inject, model } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

import { ButtonComponent } from "../../shared/button/button.component";

function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null);
  }
  return of({ notUnique: true });
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    })
  });

  stringFormControlIsInvalid(formControl: FormControl<string | null>): boolean {
    return formControl.touched && formControl.dirty && formControl.invalid;
  }

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.controls.email;
    console.log(enteredEmail);
    const enteredPassword = this.form.controls.password;
    console.log(enteredPassword);
  }

}
