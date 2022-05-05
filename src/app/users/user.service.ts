import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: {username: string, password: string, role: string, availableCourses: string[]}
  existingUsers = [{username:"Instructor", password:"password", role: "Instructor", availableCourses: ["AIDA1","AIDA2","AIDA3","AIDA4","AIDA Instructor"]},{username: "NewStudent", password: "password",role: "Student", availableCourses: ["AIDA2"]}]
  loggedIn: Boolean = false;
  loggedInChanged: Subject<Boolean> = new Subject<Boolean>();
  constructor() {
   }

  login(inputUser:String, inputPass: String) {
    for (let user of this.existingUsers) {
        if (user.username == inputUser && user.password == inputPass){
          this.loggedIn = true
          this.user = user
          this.loggedInChanged.next(this.isLoggedIn())
          return
        }
    }
  }
getCourses() {
if (this.loggedIn) {
      return this.user.availableCourses
    }
  }
  getUsername() {
    if (this.loggedIn){
    return this.user.username}
  }
  getUserRole() {
    if (this.loggedIn){
      return this.user.role
    }
  }
  logout(){
    this.user = undefined
    this.loggedIn = false
  }
  isLoggedIn() {
    return this.loggedIn
  }
}
