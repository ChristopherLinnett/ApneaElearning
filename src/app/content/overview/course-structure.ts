export class InnerModule {
title: String
content: String
completed: Boolean
  constructor(title:String, content: String, completed=false) {
    this.title=title;
    this.content=content
    this.completed=false
  }
}

export class CourseStructure {
  title: String;
  innerModules: [InnerModule];
  completed: Boolean
  constructor(title: String, innerModules: [InnerModule], completed: Boolean) {
    this.title = title;
    this.innerModules = innerModules;
    this.completed = completed;
  }
}
