import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
  import {getAuth, GoogleAuthProvider}  from 'firebase/auth';

import { Observable } from 'rxjs';
import { Auth, User } from '@angular/fire/auth';
import * as firebase from 'firebase/compat';

@Injectable()
export class AuthService {
  userData: Auth;
  
  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData =getAuth();
  }

  signUp(email: string, password: string) {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password);
  }

  signInWithGoogle(){
    return this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  signIn(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.angularFireAuth
      .signOut();
  }

}
