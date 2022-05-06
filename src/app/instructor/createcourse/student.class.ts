export class Student {
  //basic datastructure for a student
  name: string;
  email: string;
  constructor(name = 'empty', email = 'blank') {
    this.name = name;
    this.email = email;
  }
}
