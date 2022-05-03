import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: String
  existingUsers = [{username:"Instructor", password:"password", role: "Instructor", availableCourses: ["AIDA1","AIDA2","AIDA3","AIDA4","AIDA Instructor"]},{username: "NewStudent", password: "password",role: "Student", availableCourses: ["AIDA2"]}]
  loggedIn: Boolean = false;
  loggedInChanged: Subject<Boolean> = new Subject<Boolean>(); // observing that bool
  constructor() {
   }

  login(inputUser:String, inputPass: String) {
    for (let user of this.existingUsers) {
        if (user.username == inputUser && user.password == inputPass){
          this.loggedIn = true
          this.username = inputUser
          this.loggedInChanged.next(this.isLoggedIn())
        }
    }
  }
getCourses() {
if (this.loggedIn) {
  for (let thisUser of this.existingUsers) {
    if (thisUser.username == this.username){
      return thisUser.availableCourses
    }
  }
}
}
  getUsername() {
    if (this.loggedIn){
    return this.username}
  }
  logout(){
    this.username = undefined
    this.loggedIn = false
  }
  isLoggedIn() {
    return this.loggedIn
  }
}
