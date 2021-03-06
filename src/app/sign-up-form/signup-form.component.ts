import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
