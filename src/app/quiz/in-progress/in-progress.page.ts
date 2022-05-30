import { Component, OnInit } from '@angular/core';
import { Answer, Question } from '../question';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { IonRadioGroup } from '@ionic/angular';
import { AfterContentChecked } from '@angular/core';
import { CurrentModuleService } from "../../content/detail-content/current-module.service"
import { CourseService } from 'src/app/course-landing/course.service';
SwiperCore.use([EffectCoverflow]);

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
/* I'm trying to create a quiz with 5 questions, each with 5 answers. */
export class InProgressPage {
  @ViewChild('swiper') swiper:SwiperComponent
  @ViewChild('quizquestions') quizquestions:IonRadioGroup;
  quizloaded = false
  quiz: Question[];
  allQuestionsAnswered: boolean = true
  chapterIndex: number
  courseIndex: number
  
  /**
   * The function creates a quiz object based on the chapter index.
   * @param {CurrentModuleService} currentModuleService - CurrentModuleService is a service that I
   * created to keep track of the current module that the user is on.
   * @param {CourseService} courseService - This is a service that contains the course object.
   */
  constructor(private currentModuleService: CurrentModuleService, private courseService:CourseService) {
    this.courseIndex =this.courseService.getCourse().index
    this.chapterIndex = this.currentModuleService.currentModuleIndex
    this.quiz = this.createQuiz(this.chapterIndex)
  }

  /**
   * It creates a quiz with 5 questions, each question has 5 answers, one of which is correct.
   * @param {number} chapter - number - the chapter number of the quiz
   * @returns An array of Question objects.
   */
  createQuiz(chapter:number){
    var quiz=[]
    for (let i = 0; i<5 ; i++){
      let question = new Question("In which continent are Chile, Argentina and Brazil?", 0, 0,[],3)
      for (let j = 0; j<5 ; j++){
      question.answers.push(new Answer(`answer${j}`,j%4==0, j))
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
  markQuiz(){
    var results = []
    for (let question of this.quiz){
      if (question.questionAnswered && question.questionAnswered == question.correctAnswer){
        results.push({correct: true})
      } else {
        results.push({correct: false, correctAnswer: question.answers[question.correctAnswer]})
      }
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
