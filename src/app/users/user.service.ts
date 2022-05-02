import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: String
  existingUsers = [{username:"Instructor", password:"password", role: "Instructor", availableCourses: ["AIDA1","AIDA2","AIDA3","AIDA4","AIDA Instructor"]},{username: "NewStudent", password: "password",role: "Student", availableCourses: ["AIDA2"]}]
  loggedIn = false
  constructor() { }

  login(inputUser:String, inputPass: String) {
    for (let user of this.existingUsers) {
        if (user.username == inputUser && user.password == inputPass){
          this.loggedIn = true
          this.username = inputUser
        }
    }
  }
  getUsername() {
    return this.username
  }
  logout(){
    this.loggedIn = false
  }
}
