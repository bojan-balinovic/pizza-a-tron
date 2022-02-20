import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
  import {GoogleAuthProvider}  from 'firebase/auth';

import { Observable } from 'rxjs';
import { Auth, User } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  userData: Observable<firebase.default.User|null>;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    this.userData.subscribe(bla=>{
      console.log(bla)
    })
  
  }

/* Sign up */
  signUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }
  // signUpWithGoogle(){
  //   this.angularFireAuth.
  // }
  signInWithGoogle(){
    return this.angularFireAuth.signInWithPopup(new GoogleAuthProvider())
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
  /* Sign in */
  signIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('youre in');
    })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  /* Sign out */
  signOut() {
    return this.angularFireAuth
      .signOut();
  }

}
