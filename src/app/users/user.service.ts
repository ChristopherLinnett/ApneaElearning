import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: {
    username: string;
    password: string;
    role: string;
    availableCourses: string[];
  };
  existingUsers = [
    {
      username: 'instructor',
      password: 'password',
      role: 'Instructor',
      availableCourses: ['AIDA1', 'AIDA2', 'AIDA3', 'AIDA4', 'AIDA Instructor'],
    },
    {
      username: 'newstudent',
      password: 'password',
      role: 'Student',
      availableCourses: ['AIDA2'],
    },
  ];
  loggedIn: boolean = false;
  loggedInChanged: Subject<boolean> = new Subject<boolean>();
  constructor(private router: Router) {}

  login(inputUser: String, inputPass: String) {
    //authenticates login, updates info then returns
    for (let user of this.existingUsers) {
      if (user.username == inputUser.trim().toLowerCase() && user.password == inputPass.trim().toLowerCase()) {
        this.loggedIn = true;
        this.user = user;
        this.loggedInChanged.next(this.isLoggedIn());
        return;
      }
    }
  }
  getCourses() {
    //gets available courses if user logged in
    if (this.loggedIn) {
      return this.user.availableCourses;
    }
  }
  getUsername() {
    //gets username if logged in
    if (this.loggedIn) {
      return this.user.username;
    }
  }
  getUserRole() {
    //gets user role if logged in
    if (this.loggedIn) {
      return this.user.role;
    }
  }
  logout() {
    //logs out
    this.user = undefined;
    this.loggedIn = false;
    this.router.navigate(["login"])
  }
  isLoggedIn() {
    //returns whether app state shows logged in
    return this.loggedIn;
  }
}
