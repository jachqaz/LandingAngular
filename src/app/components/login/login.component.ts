import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: firebase.User;


  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
    afAuth.authState.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.afAuth.auth.getRedirectResult().then(result => {
      if (result.user) {
        this.router.navigate(['/home']);
      }
    });
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.router.navigated = false;
    //     this.router.navigate(['/home']);
    //   } else {
    //   }
    // });
  }


  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // this.router.navigate(['/home']);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

}
