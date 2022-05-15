export class StudentConstructor {
  //basic datastructure for a student
  firstName: string;
  lastName: string;
  email: string;
  constructor(firstName: string, lastName: string,  email: string, ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
