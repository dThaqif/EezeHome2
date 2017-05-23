import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {

  constructor(public userAuth: AngularFireAuth) {
    console.log('Hello UserProvider Provider');
  }
loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.userAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }
  resetPassword(email: string): firebase.Promise<any> {
    return this.userAuth.auth.sendPasswordResetEmail(email);
  }
  logoutUser(): firebase.Promise<any> {
    return this.userAuth.auth.signOut();
  }
  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.userAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
  }

}
