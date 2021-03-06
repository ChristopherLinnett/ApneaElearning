import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { DatastorageService } from '../datastorage.service';
import { CourseConstructor } from '../instructor/createcourse/studentconstructor.class';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  userlist;
  user;
  existingUsers = {
    instructor: {
      firstname: 'none',
      lastname: 'none',
      email: 'instructor',
      password: 'password',
      role: 'Instructor',
      courses: {},
      availableCourses: {
        0: new CourseConstructor('0', 0, String(new Date()), 'AIDA1', 'none'),
        1: new CourseConstructor('1', 0, String(new Date()), 'AIDA2', 'none'),
        2: new CourseConstructor('2', 0, String(new Date()), 'AIDA3', 'none'),
        3: new CourseConstructor('3', 0, String(new Date()), 'AIDA4', 'none'),
        4: new CourseConstructor('4', 0, String(new Date()), 'AIDA5', 'none'),
      },
    },
    instructor2: {
      firstname: 'none',
      lastname: 'none',
      email: 'instructor2',
      password: 'password',
      role: 'Instructor',
      courses: {},
      availableCourses: {
        0: new CourseConstructor('0', 0, String(new Date()), 'AIDA1', 'none'),
        1: new CourseConstructor('1', 0, String(new Date()), 'AIDA2', 'none'),
        2: new CourseConstructor('2', 0, String(new Date()), 'AIDA3', 'none'),
        3: new CourseConstructor('3', 0, String(new Date()), 'AIDA4', 'none'),
        4: new CourseConstructor('4', 0, String(new Date()), 'AIDA5', 'none'),
      },
    },
    instructor3: {
      firstname: 'none',
      lastname: 'none',
      email: 'instructor3',
      password: 'password',
      role: 'Instructor',
      courses: {},
      availableCourses: {
        0: new CourseConstructor('0', 0, String(new Date()), 'AIDA1', 'none'),
        1: new CourseConstructor('1', 0, String(new Date()), 'AIDA2', 'none'),
        2: new CourseConstructor('2', 0, String(new Date()), 'AIDA3', 'none'),
        3: new CourseConstructor('3', 0, String(new Date()), 'AIDA4', 'none'),
        4: new CourseConstructor('4', 0, String(new Date()), 'AIDA5', 'none'),
      },
    },
  };
  userIndexInDB;
  loggedIn: boolean = false;
  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router,
    private dataStorageService: DatastorageService
  ) {}

  ngOnInit() {
    this.updateUserlist();
  }

  async updateUser() {
    this.user = this.userlist[`${this.user.email}`];
  }

  async updateUserlist(updateUser = true) {
    this.userlist = await this.dataStorageService.lookup('users');
    if (updateUser) {
      this.updateUser();
    }
  }

  async login(inputUser: string, inputPass: string) {
    inputUser = inputUser.toLowerCase().trim();
    inputPass = inputPass.toLowerCase().trim();
    await this.updateUserlist(false);
    if (this.userlist === null) {
      await this.dataStorageService.save('users', this.existingUsers);
      this.userlist = await this.dataStorageService.lookup('users');
    }
    if (
      Object.keys(this.userlist).includes(inputUser) &&
      this.userlist[`${inputUser}`].password == inputPass
    ) {
      this.user = this.userlist[`${inputUser}`];
      this.loggedIn = true;
      return;
    }
  }
  async showUserOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          icon: 'trash',
          id: 'remove-circle-sharp',
          data: {
            type: 'delete',
          },
          handler: () => {
            this.logout();
          },
        },
        {
          text: 'Profile',
          icon: 'person-circle-outline',
          handler: () => {
            this.router.navigate(['/profile']);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();
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
    this.userlist = await this.dataStorageService.lookup('users');
    if (this.userlist) {
      var saveme = this.userlist;
      for (let user of usersArray) {
        this.userlist[`${user.email}`] = user;
      }
      await this.dataStorageService.save('users', this.userlist);
    } else {
      await this.dataStorageService.save('users', this.existingUsers);
    }
  }
  async addCourse(course: CourseConstructor) {
    this.userlist = await this.dataStorageService.lookup('users');
    this.userlist[`${this.user.email}`].courses[`${course.courseID}`] = course;
    this.dataStorageService.save('users', this.userlist);
    return;
  }

  /**
   * It takes a courseID and a studentName, and adds the studentName to the students array of the
   * course with the courseID.
   * @param {string} courseID - string = the course ID
   * @param studentName - string
   */
  async updateCourse(courseID: string, studentName) {
    this.userlist = await this.dataStorageService.lookup('users');
    let newlist = this.userlist;
    newlist[`${this.user.email}`].courses[`${courseID}`].students.push(
      studentName
    );
    this.dataStorageService.save('users', newlist);
  }
  /**
   * If the user is logged in, return the available courses
   * @returns The availableCourses property of the user object.
   */
  getCourses() {
    if (this.loggedIn) {
      return this.user.availableCourses;
    }
  }
  /**
   * If the user is logged in, return the user's email.
   * @returns The username of the user if they are logged in.
   */
  getUsername() {
    if (this.loggedIn) {
      return this.user.email;
    }
  }
  /**
   * If the user is logged in, return the user's role.
   * @returns The user role if logged in.
   */
  getUserRole() {
    if (this.loggedIn) {
      return this.user.role;
    }
  }
  /**
   * This function logs out the user and navigates to the login page.
   */
  logout() {
    this.user = undefined;
    this.loggedIn = false;
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  /**
   * This function returns whether the app state shows logged in.
   * @returns The loggedIn variable is being returned.
   */
  isLoggedIn() {
    //returns whether app state shows logged in
    return this.loggedIn;
  }
  /**
   * It returns the firstname property of the user object.
   * @returns The firstname property of the user object.
   */
  getfirstname() {
    return this.user.firstname;
  }
}
