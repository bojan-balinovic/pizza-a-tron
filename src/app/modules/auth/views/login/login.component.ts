import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
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
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  async login() {
    const {email, password}=this.loginForm.value;
    await this.auth.signIn(email, password);
    this.router.navigate(['/configurator']);
  }
  async loginWithGoogle(){
    await this.auth.signInWithGoogle();
    this.router.navigate(['/configurator']);
  }
} 
