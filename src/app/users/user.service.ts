import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: String
  password: String
  existingUsers = [{username:"Instructor", password:"password", role: "Instructor", availableCourses: ["AIDA1","AIDA2","AIDA3","AIDA4","AIDA Instructor"]},{username: "NewStudent", password: "password",role: "Student", availableCourses: ["AIDA2"]}]
  constructor() { }
}
