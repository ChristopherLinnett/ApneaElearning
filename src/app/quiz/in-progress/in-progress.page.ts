import { Component, OnInit } from '@angular/core';
import { Answer, Question } from '../question';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { IonRadioGroup, ModalController } from '@ionic/angular';
import { AfterContentChecked } from '@angular/core';
import { CurrentModuleService } from "../../content/detail-content/current-module.service"
import { CourseService } from 'src/app/course-landing/course.service';
import { UserService } from 'src/app/users/user.service';
import { DatastorageService } from 'src/app/datastorage.service';
SwiperCore.use([EffectCoverflow]);

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
/* I'm trying to create a quiz with 5 questions, each with 5 answers. */
export class InProgressPage implements OnInit{
  @ViewChild('swiper') swiper:SwiperComponent
  quizloaded = false
  quiz: Question[];
  allQuestionsAnswered: boolean = true
  chapterIndex: number
  courseIndex: number
  thisCourseInUserIndex;

  quizAnswered: any[] = []
  
  /**
   * The function creates a quiz object based on the chapter index.
   * @param {CurrentModuleService} currentModuleService - CurrentModuleService is a service that I
   * created to keep track of the current module that the user is on.
   * @param {CourseService} courseService - This is a service that contains the course object.
   */
  constructor(private modalController:ModalController ,private dataStorageService: DatastorageService, private currentModuleService: CurrentModuleService, private courseService:CourseService, private userService: UserService) {
    this.courseIndex =this.courseService.thisCourse.index
    this.chapterIndex = this.currentModuleService.currentModuleIndex

    let userCourseIndexes = this.userService.user.availableCourses.map(x => x.courseIndex)
    for (let i = 0; i <userCourseIndexes.length ; i++){
      if (userCourseIndexes[i] == this.courseIndex){
        this.thisCourseInUserIndex = i
      }
    }
  }

  async ngOnInit(): Promise<void> {
    this.quiz = await this.createQuiz(this.chapterIndex)

  }

  /**
   * It creates a quiz with 5 questions, each question has 5 answers, one of which is correct.
   * @param {number} chapter - number - the chapter number of the quiz
   * @returns An array of Question objects.
   */
  async createQuiz(chapter:number){
    if (this.currentModuleService.currentModuleIndex !in this.userService.user.availableCourses[this.thisCourseInUserIndex].unlockedQuizzes){
      this.userService.user.availableCourses[this.thisCourseInUserIndex].unlockedQuizzes.push(this.currentModuleService.currentModuleIndex)
      var allUsers = await this.dataStorageService.lookup('users')
      let allUsersEmail = allUsers.map(x => x.email)
      let userIndex = allUsersEmail.indexOf(this.userService.user.email)
    allUsers[userIndex] = this.userService.user
    await this.dataStorageService.save('users', allUsers)
    }

    var quiz=[]
    for (let i = 0; i<1 ; i++){
      let question = new Question("In which continent are Chile, Argentina and Brazil?", 0, 0,[],3)
      for (let j = 0; j<5 ; j++){
      question.answers.push(new Answer(`answer${j}`,j%4==0, j))
      this.quizAnswered.push(9)
    }
    console.log(question)
      quiz.push(question)
      for (let question of quiz){
        console.log(question.questionText)
      }
    }
    this.quizloaded = true
    return quiz
  }
  /**
   * For each question in the quiz, if the question has been answered and the answer is correct, add an
   * object to the results array with a property of correct set to true. Otherwise, add an object to
   * the results array with a property of correct set to false and a property of correctAnswer set to
   * the correct answer.
   */
  async markQuiz(){
    let studentAnswers = this.quizAnswered
    let correctAnswers = this.quiz.map(x => x.correctAnswer)
    var userScore = 0
    var corrections = []
    
    
    for (let i = 0 ; i<correctAnswers.length ; i++){
      if (studentAnswers[0] == correctAnswers[0]){
        userScore++
      }
      else {
        corrections.push(this.quiz[0])
      }
    }
    if (userScore/correctAnswers.length > 0.75){
      this.userService.user.availableCourses[this.thisCourseInUserIndex].unlockedChapters.push(this.courseIndex+1)
     var allUsers = await this.dataStorageService.lookup('users')
    let allUsersEmail = allUsers.map(x => x.email)
    let userIndex = allUsersEmail.indexOf(this.userService.user.email)
    allUsers[userIndex] = this.userService.user
    await this.dataStorageService.save('users',allUsers)
    this.modalController.dismiss()
    }

  }
  /**
   * For each question in the quiz, if the question has been answered and the answer is correct, add an
   * object to the results array with a property of correct set to true. Otherwise, add an object to
   * the results array with a property of correct set to false and a property of correctAnswer set to
   * the correct answer.
   */
  checkQuestionsAnswered(){
    for (let question of this.quiz){
      if (question.questionAnswered != null){
        continue
      }
    }
    this.allQuestionsAnswered = true
  }

  ngAfterContentChanged() {
  }
}
