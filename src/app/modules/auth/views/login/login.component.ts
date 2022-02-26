import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    public router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  login() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.loginForm.errors
      const { email, password } = this.loginForm.value;
      this.auth.signIn(email, password).then(() => {
        this.router.navigate(['/configurator']);
      }, (error) => {
        this.snackbar.open('Wrong username or password.', 'OK', { duration: 2000 });
      });
    }
  }
  loginWithGoogle() {
    this.auth.signInWithGoogle().then(() => {
      this.router.navigate(['/configurator']);
    }, (error) => {
      this.snackbar.open('Error logging in with google.', 'OK', { duration: 2000 });
    });

  }
  redirectToRegister() {
    this.router.navigate(['/register']);
  }
} 
