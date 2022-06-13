/* The StudentConstructor class is a class that creates a student object with the following properties:
index, email, role, courses, availableCourses, firstName, lastName, and password. */
export class StudentConstructor {
  firstName: string;
  role: string;
  lastName: string;
  email: string;
  availableCourses;
  password: string;
  courses;
  index: number;
  constructor(
    index: number,
    email: string,
    role = 'student',
    courses = {},
    availableCourses = {},
    firstName = '',
    lastName = '',
    password = `${email.toLowerCase()}`
  ) {
    this.index = index;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.availableCourses = availableCourses;
    this.password = password;
    this.courses = courses;
  }
}

/* The CourseConstructor class is a class that creates a new course object. */
export class CourseConstructor {
  courseID;
  courseDate: string;
  courseType: string;
  courseInstructor: string;
  students: string[];
  courseIndex: number;
  unlockedChapters: any[];
  unlockedQuizzes: any[];
  constructor(
    courseID: string,
    courseIndex: number,
    courseDate: string,
    courseType: string,
    courseInstructor: string,
    students: string[] = null
  ) {
    this.courseID = courseID;
    this.courseDate = courseDate;
    this.courseType = courseType;
    this.courseInstructor = courseInstructor;
    this.students = students;
    this.courseIndex = courseIndex;
    this.unlockedChapters = [0];
    this.unlockedQuizzes = [];
  }
}
