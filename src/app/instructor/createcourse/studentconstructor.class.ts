

export class StudentConstructor {
  //basic datastructure for a student
  firstName: string;
  role: string;
  lastName: string;
  email: string;
  availableCourses;
  password: string
  courses;
  index: number
  constructor(index: number,  email: string, role = "student", courses = {}, availableCourses = {}, firstName = "", lastName= "", password= `${email.toLowerCase()}`){
    this.index = index;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role
    this.email = email;
    this.availableCourses = availableCourses
    this.password = password
    this.courses = courses
  }
}

export class CourseConstructor {
  courseID;
  courseDate: string
  courseType: string
  courseInstructor: string
  students: string[]
  courseIndex: number
  unlockedChapters: any[]
  unlockedQuizzes: any[]
  constructor(courseID: string, courseIndex: number, courseDate: string, courseType: string, courseInstructor: string, students: string[]=null){
  this.courseID = courseID
    this.courseDate = courseDate
  this.courseType = courseType
  this.courseInstructor = courseInstructor
  this.students = students
  this.courseIndex = courseIndex
  this.unlockedChapters = [0]
  this.unlockedQuizzes = []
  }


}
