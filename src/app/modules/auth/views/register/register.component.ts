import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  register() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const {email, password}=this.registerForm.value;
      this.auth.signUp(email, password).then(
        () => {
          this.snackBar.open('You signed up!', 'OK', { duration: 2000 });
          this.router.navigate(['/login'])
        })
        .catch(
          (err) => {
            this.snackBar.open('There was a problem while trying to sign up','OK',{duration:2000});
          });
    }
  }
}
