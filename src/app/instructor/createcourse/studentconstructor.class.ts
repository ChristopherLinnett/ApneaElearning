export class StudentConstructor {
  //basic datastructure for a student
  firstName: string;
  role: string;
  lastName: string;
  email: string;
  availableCourses: any[]
  password: string
  courses: any[]
  index: number
  constructor(index: number, firstName: string, lastName: string,  email: string, role = "student", courses = null) {
    this.index = index;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role
    this.email = email;
    this.availableCourses = []
    this.password = `${firstName.toLowerCase()}${lastName.toLowerCase()}`
    this.courses = courses
  }
}

export class CourseConstructor {
  courseDate: string
  courseType: string
  courseInstructor: string
  students: string[]
  courseIndex: number
  unlockedChapters: any[]
  unlockedQuizzes: any[]
  constructor(courseIndex: number, courseDate: string, courseType: string, courseInstructor: string, students: string[]=null){
  this.courseDate = courseDate
  this.courseType = courseType
  this.courseInstructor = courseInstructor
  this.students = students
  this.courseIndex = courseIndex
  this.unlockedChapters = [0]
  this.unlockedQuizzes = []
  }


}
