export class StudentConstructor {
  //basic datastructure for a student
  firstName: string;
  role: string;
  lastName: string;
  email: string;
  availableCourses: any[]
  password: string
  constructor(firstName: string, lastName: string,  email: string, role = "student") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role
    this.email = email;
    this.availableCourses = []
    this.password = `${firstName.toLowerCase()}${lastName.toLowerCase()}`
  }
}

export class CourseConstructor {
  courseDate: string
  courseType: string
  courseInstructor: string
  students: string[]
  constructor(courseDate: string, courseType: string, courseInstructor: string, students: string[]=null){
  this.courseDate = courseDate
  this.courseType = courseType
  this.courseInstructor = courseInstructor
  this.students = students
  }
}