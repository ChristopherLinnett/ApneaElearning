import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from '../datastorage.service';
import { CourseConstructor } from '../instructor/createcourse/studentconstructor.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    phonenum: string;
    password: string;
    role: string;
    courses: any[];
    availableCourses: CourseConstructor[];
  };
  existingUsers = [
    {
      firstname: 'none',
      lastname: 'none',
      email: 'instructor',
      password: 'password',
      role: 'Instructor',
      courses: [],
      availableCourses: [
        new CourseConstructor(0,'25/05/2022', 'AIDA1', this.getUsername()),
        new CourseConstructor(1,'25/05/2022', 'AIDA2', this.getUsername()),
        new CourseConstructor(2,'25/05/2022', 'AIDA3', this.getUsername()),
        new CourseConstructor(3,'25/05/2022', 'AIDA4', this.getUsername()),
        new CourseConstructor(4,'25/05/2022','AIDA Instructor',this.getUsername()),
      ],
    },
    {
      firstname: 'none',
      lastname: 'none',
      email: 'newstudent',
      password: 'password',
      role: 'Student',
      courses: [],
      availableCourses: [
        new CourseConstructor(1,'25/05/2022', 'AIDA2', 'Instructor'),
      ],
    },
  ];
  loggedIn: boolean = false;
  constructor(
    private router: Router,
    private dataStorageService: DatastorageService
  ) {}

  async login(inputUser: String, inputPass: String) {
    //authenticates login, updates info then returns
    var userlist = await this.dataStorageService.lookup('users');
    if (userlist) {
      for (let user of userlist) {
        if (
          user.email == inputUser.trim().toLowerCase() &&
          user.password == inputPass.trim().toLowerCase()
        ) {
          this.user = user;
          this.loggedIn = true;
        }
      }
    } else {
      await this.dataStorageService.save('users', this.existingUsers);
    }
  }

  getUser() {
    if (this.user) {
      return this.user;
    }
  }

  getMyCourses() {
    return this.user.courses;
  }

  async addUsers(usersArray: any[]) {
    var userlist = await this.dataStorageService.lookup('users');
    if (userlist) {
      let saveme = userlist.concat(usersArray);
      console.log(userlist[userlist.length - 1]);
      await this.dataStorageService.save('users', saveme);
    } else {
      await this.dataStorageService.save('users', this.existingUsers);
    }
  }
  async addCourse(course: CourseConstructor) {
    var userList = await this.dataStorageService.lookup('users');
    if (userList) {
      for (let user of userList) {
        if (user.email == this.getUsername()) {
          user.courses.push(course);
          this.dataStorageService.save('users', userList);
          return;
        }
      }
    } else {
      await this.dataStorageService.save('users', this.existingUsers);
      this.addCourse(course);
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
      return this.user.email;
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
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  isLoggedIn() {
    //returns whether app state shows logged in
    return this.loggedIn;
  }
  getfirstname() {
    return this.user.firstname;
  }
}
