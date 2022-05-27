import { Component, OnInit } from '@angular/core';
import { Answer, Question } from '../question';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { IonRadioGroup } from '@ionic/angular';
import { AfterContentChecked } from '@angular/core';
SwiperCore.use([EffectCoverflow]);

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage {
  @ViewChild('swiper') swiper:SwiperComponent
  @ViewChild('quizquestions') quizquestions:IonRadioGroup;
  quizloaded = false
  quiz: Question[];
  allQuestionsAnswered: boolean = true
  
  constructor() {
    this.quiz = this.createQuiz(0)
  }

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
