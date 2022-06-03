import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { DatastorageService } from '../datastorage.service';
import { CourseConstructor } from '../instructor/createcourse/studentconstructor.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userlist;
  user;
  existingUsers = {instructor:
    {
      firstname: 'none',
      lastname: 'none',
      email: 'instructor',
      password: 'password',
      role: 'Instructor',
      courses: [],
      availableCourses: { aida1: new CourseConstructor('0',0,'25/05/2022', 'AIDA1', this.getUsername()),
        aida2: new CourseConstructor('0',1,'25/05/2022', 'AIDA2', this.getUsername()),
        aida3: new CourseConstructor('0',2,'25/05/2022', 'AIDA3', this.getUsername()),
        aida4: new CourseConstructor('0',3,'25/05/2022', 'AIDA4', this.getUsername()),
        aida5: new CourseConstructor('0',4,'25/05/2022','AIDA Instructor',this.getUsername()),
      },
    },newStudent: 
    {
      firstname: 'none',
      lastname: 'none',
      email: 'newstudent',
      password: 'password',
      role: 'Student',
      courses: [],
      availableCourses: { aida2: new CourseConstructor("0",1,'25/05/2022', 'AIDA2', 'Instructor'),
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

  async updateUserlist() {
    this.userlist = await this.dataStorageService.lookup('users')
  }

  async login(inputUser: string, inputPass: string){
    inputUser = inputUser.toLowerCase().trim()
    inputPass = inputPass.toLowerCase().trim()
    await this.updateUserlist()
    if (!this.userlist.instructor){
      await this.dataStorageService.save('users', this.existingUsers);
    }
    if (this.userlist.inputUser && this.userlist.inputUser.password == inputPass) {
      this.user = this.userlist.inputUser
      this.loggedIn = true
    }
  }


  async login(inputUser: string, inputPass: string) {
    //authenticates login, updates info then returns
    this.userlist= await this.dataStorageService.lookup('users');
    if (this.userlist) {
      for (let user of this.userlist) {
        if (
          user.email == inputUser.trim().toLowerCase() &&
          user.password == inputPass.trim().toLowerCase()
        ) {
          this.user = user;
          this.loggedIn = true;
          var userlistEmails = this.userlist.map(x => x.email)
          this.userIndexInDB = userlistEmails.indexOf(user.email)
        }
      }
    } else {
      await this.dataStorageService.save('users', this.existingUsers);
      this.login(inputUser, inputPass)
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
          handler: () => { },
        },
      ],
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('', role, data);
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
    this.userlist= await this.dataStorageService.lookup('users');
    if (this.userlist) {
      let saveme = this.userlist.concat(usersArray);
      console.log(this.userlist[this.userlist.length - 1]);
      await this.dataStorageService.save('users', saveme);
    } else {
      await this.dataStorageService.save('users', this.existingUsers);
    }
  }
  async addCourse(course: CourseConstructor) {
    this.userlist= await this.dataStorageService.lookup('users');
    if (this.userlist) {
      for (let user of this.userlist) {
        if (user.email == this.getUsername()) {
          user.courses.push(course);
          this.dataStorageService.save('users',this.userlist);
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
