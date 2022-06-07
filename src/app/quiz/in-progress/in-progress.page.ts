import { Component, OnInit } from '@angular/core';
import { Answer, Question } from '../question';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import {
  AlertController,
  IonRadioGroup,
  ModalController,
} from '@ionic/angular';
import { CurrentModuleService } from '../../content/detail-content/current-module.service';
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
export class InProgressPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  quizloaded = false;
  quiz: Question[];
  allQuestionsAnswered: boolean = true;
  chapterIndex: number;
  course;
  thisCourseInUserIndex;

  questionList = {
    0: [
      {
        questionText: 'What is the main priority of an AIDA education',

        answers: [
          { text: 'Safety in Freediving', num: 0 },
          { text: 'Pushing past your perceived limits', num: 1 },
          { text: 'Getting students competition ready', num: 2 },
          { text: 'Increasing participation of Freediving', num: 3 },
        ],
        correctAnswer: 0,
      },
      {
        questionText:
          'If you are planning to go freediving, a minimum of how many people should be in your group?',

        answers: [
          { text: '1', num: 0 },
          { text: '2', num: 1 },
          { text: '3', num: 2 },
          { text: '4', num: 3 },
        ],
        correctAnswer: 1,
      },
      {
        questionText: 'Where does Freediving begin?',

        answers: [
          {
            text: 'The moment you start holding your breath in the water',
            num: 0,
          },
          { text: 'The moment you start descending', num: 1 },
          { text: 'When your body reacts to the breath hold', num: 2 },
          { text: 'When you are in the water', num: 3 },
        ],
        correctAnswer: 0,
      },
    ],

    1: [
      {
        questionText: 'To enrol in AIDA2, how far must you be able to swim?',

        answers: [
          { text: '200m without fins, 300m with fins', num: 0 },
          { text: '150m without fins, 250m with fins', num: 1 },
          { text: '250m without fins, 300m with fins', num: 2 },
          { text: '300m without fins, 400m with fins', num: 3 },
        ],
        correctAnswer: 0,
      },
      {
        questionText:
          'Which of these is NOT one of the crucial rules of freediving?',

        answers: [
          { text: 'Always dive with a buddy', num: 0 },
          { text: 'Relax before you hold your breath', num: 1 },
          { text: 'Be correctly weighted', num: 2 },
          {
            text: 'Breathe quickly and heavily when preparing for a dive',
            num: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        questionText:
          'Which of these do NOT need to be completed before starting diving?',

        answers: [
          { text: 'AIDA Medical Statement', num: 0 },
          { text: 'AIDA liability Release', num: 1 },
          { text: 'AIDA EOS Registration', num: 2 },
          { text: 'AIDA Theory Session', num: 3 },
        ],
        correctAnswer: 2,
      },
    ],

    2: [
      {
        questionText: 'Which of these is first in the freedive breathing Cycle',

        answers: [
          { text: 'One Full Breath', num: 0 },
          { text: 'Recovery Breathing', num: 1 },
          { text: 'Relaxation Phase', num: 2 },
          { text: 'Breath-Hold', num: 3 },
        ],
        correctAnswer: 2,
      },
      {
        questionText: 'What is the trigger for contractions?',

        answers: [
          { text: 'decreasing oxygen', num: 0 },
          { text: 'high discomfort', num: 1 },
          { text: 'increasing carbon dioxide', num: 2 },
          { text: 'poor preparation', num: 3 },
        ],
        correctAnswer: 2,
      },
      {
        questionText: 'Which of these accurately describes recovery breathing?',

        answers: [
          { text: 'Strong exhale, Strong inhale. Repeat', num: 0 },
          { text: 'Passive exhale, passive inhale. Repeate', num: 1 },
          { text: 'Strong exhale, passive inhale. Repeat', num: 2 },
          { text: 'Passive exhale, strong inhale. Repeat', num: 3 },
        ],
        correctAnswer: 3,
      },
    ],

    3: [
      {
        questionText:
          'At 20m below the surface, what volume are your lungs compared to at the surface?',

        answers: [
          { text: '1/2 volume', num: 0 },
          { text: '1/3 volume', num: 1 },
          { text: '2/3 volume', num: 2 },
          { text: '1/4 volume', num: 3 },
        ],
        correctAnswer: 1,
      },
      {
        questionText:
          'Which of these are NOT one of the air spaces you need to consider when equalising? ',

        answers: [
          { text: 'ears', num: 0 },
          { text: 'sinus', num: 1 },
          { text: 'lungs', num: 2 },
          { text: 'throat', num: 3 },
        ],
        correctAnswer: 3,
      },
      {
        questionText:
          'If having trouble equalising, which of these is not a helpful solution?',

        answers: [
          { text: 'Slow down your descent', num: 0 },
          { text: 'Blow harder to unblock your ears', num: 1 },
          { text: 'Fill your ears with water, (open hood on suit)', num: 2 },
          { text: 'Turn your body to orient your head upwards', num: 3 },
        ],
        correctAnswer: 1,
      },
    ],

    4: [
      {
        questionText: 'Which of these is not an example of good technique?',

        answers: [
          { text: 'Straight legs when kicking', num: 0 },
          { text: 'Weakened kicking towards the surface', num: 1 },
          { text: 'Grabbing the float after surfacing', num: 2 },
          {
            text: 'Stopping ascent to turn and achieve your depth goal',
            num: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        questionText:
          'Which of these is Not part of the turn after reaching your depth?',

        answers: [
          { text: 'Pull the line to start ascent', num: 0 },
          { text: 'Grab the line to stop', num: 1 },
          { text: 'Forward tumble turn to change direction', num: 2 },
          { text: 'Finning to improve maneoverability when turning', num: 3 },
        ],
        correctAnswer: 3,
      },
      {
        questionText: 'Which of these is NOT part of a duck dive technique?',

        answers: [
          { text: 'stretch yourself out on the surface', num: 0 },
          { text: 'bring your upper body to a right angle', num: 1 },
          {
            text: 'Doing a breast stroke pull to get under the surface',
            num: 2,
          },
          { text: 'Finning to assist with quick descent', num: 3 },
        ],
        correctAnswer: 3,
      },
    ],

    5: [
      {
        questionText:
          'Which of these is not an appropriate communication method when buddying during a static discipline?',

        answers: [
          { text: 'Ask to raise a finger if they are OK', num: 0 },
          {
            text: 'Ask the diver to raise multiple fingers to answer simple questions ',
            num: 1,
          },
          {
            text: 'Squeeze the shoulder to have the diver respond with a raised finger',
            num: 2,
          },
          {
            text: 'Give a visual signal for the diver to respond with a raised finger',
            num: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        questionText: 'Which is not a sign of a freediver in need of help?',

        answers: [
          { text: 'Change of finning style', num: 0 },
          { text: 'Unfocussed eyes', num: 1 },
          { text: 'Escaping Air', num: 2 },
          { text: 'Slowing down', num: 3 },
        ],
        correctAnswer: 3,
      },
      {
        questionText:
          'Which of these is NOT a symptom/sign of an oncoming blackout? ',

        answers: [
          { text: 'Feeling cold', num: 0 },
          { text: 'tunnel vision', num: 1 },
          { text: 'tingling sensation', num: 2 },
          { text: 'the dive gets easier', num: 3 },
        ],
        correctAnswer: 0,
      },
      {
        questionText:
          'After rescuing a diver, unless they are responsive. How long should you continue to Blow-Tap-Talk',

        answers: [
          { text: '5-10 seconds', num: 0 },
          { text: '10-15 seconds', num: 1 },
          { text: '15-20 seconds', num: 2 },
          { text: '20-25 seconds', num: 3 },
        ],
        correctAnswer: 1,
      },
      {
        questionText:
          'After rescuing a diver, unless they are responsive. How long should you continue to Blow-Tap-Talk',

        answers: [
          { text: '5-10 seconds', num: 0 },
          { text: '10-15 seconds', num: 1 },
          { text: '15-20 seconds', num: 2 },
          { text: '20-25 seconds', num: 3 },
        ],
        correctAnswer: 1,
      },
      {
        questionText:
          'After rescuing a diver, unless they are responsive. How long should you continue to Blow-Tap-Talk',

        answers: [
          { text: '5-10 seconds', num: 0 },
          { text: '10-15 seconds', num: 1 },
          { text: '15-20 seconds', num: 2 },
          { text: '20-25 seconds', num: 3 },
        ],
        correctAnswer: 1,
      },
    ],

    6: [
      {
        questionText: 'Which is not a good trait of a freedive mask?',

        answers: [
          { text: 'Low volume', num: 0 },
          { text: 'High flexibility', num: 1 },
          { text: 'Reflective lense', num: 2 },
          { text: 'Clear lense', num: 3 },
        ],
        correctAnswer: 2,
      },
      {
        questionText:
          'What is the order of durability for fins? Weakest to strongest',

        answers: [
          { text: 'fiberglass, plastic, carbon ', num: 0 },
          { text: 'carbon, fiberglass, plastic ', num: 1 },
          { text: 'plastic, fiberglass, carbon ', num: 2 },
          { text: 'carbon, plastic, fiberglass ', num: 3 },
        ],
        correctAnswer: 1,
      },
      {
        questionText:
          'What is the order of efficiency for fins? Highest to lowest',

        answers: [
          { text: 'fiberglass, carbon, plastic', num: 0 },
          { text: 'plastic, fiberglass, carbon', num: 1 },
          { text: 'carbon, fiberglass, plastic', num: 2 },
          { text: 'fiberglass, plastic, carbon', num: 3 },
        ],
        correctAnswer: 2,
      },
    ],
    7: [
      {
        questionText: 'Lying face down in a pool is which discipline?',

        answers: [
          { text: 'STA', num: 0 },
          { text: 'DYN', num: 1 },
          { text: 'CWT', num: 2 },
          { text: 'FIM', num: 3 },
        ],
        correctAnswer: 0,
      },
      {
        questionText:
          'Which of these involves swimming horizontal distance with fin(s)',

        answers: [
          { text: 'DNF', num: 0 },
          { text: 'FIM', num: 1 },
          { text: 'CWT', num: 2 },
          { text: 'DYN', num: 3 },
        ],
        correctAnswer: 3,
      },
      {
        questionText:
          'Which of these involves swimming up and down a line, wearing fins with a weight belt',

        answers: [
          { text: 'CNF', num: 0 },
          { text: 'CWT', num: 1 },
          { text: 'FIM', num: 2 },
          { text: 'NL', num: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    8: [
      {
        questionText:
          'Congratulations You have completed the Chapters. These questions will not unlock another chapter. Which of these are important?',

        answers: [
          { text: 'Mind Marine Life', num: 0 },
          { text: 'Not me', num: 1 },
          { text: 'Not the right answer', num: 2 },
          { text: 'Choose the first one', num: 3 },
        ],
        correctAnswer: 0,
      },
      {
        questionText: 'When diving on a reef, watch out for your long fins. ',

        answers: [
          { text: 'I will', num: 0 },
          { text: 'no', num: 1 },
          { text: 'of course', num: 0 },
          { text: 'sure', num: 0 },
        ],
        correctAnswer: 0,
      },
      {
        questionText:
          'Thanks for completing this app. I hope you have benefited from it',

        answers: [
          { text: 'yes', num: 0 },
          { text: 'no', num: 0 },
          { text: 'maybe', num: 0 },
          { text: `I don't know?`, num: 0 },
        ],
        correctAnswer: 0,
      },
    ],
  };
  quizAnswered: any[] = [];

  /**
   * The function creates a quiz object based on the chapter index.
   * @param {CurrentModuleService} currentModuleService - CurrentModuleService is a service that I
   * created to keep track of the current module that the user is on.
   * @param {CourseService} courseService - This is a service that contains the course object.
   */
  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private dataStorageService: DatastorageService,
    private currentModuleService: CurrentModuleService,
    private courseService: CourseService,
    private userService: UserService
  ) {
    this.chapterIndex = this.currentModuleService.currentModuleIndex;
    this.course = courseService.getCourse();
  }

  /**
   * The function creates a quiz object by calling the createQuiz function, which returns a promise,
   * and then assigns the quiz object to the quiz variable.
   */
  async ngOnInit(): Promise<void> {
    this.quiz = await this.createQuiz(this.chapterIndex);
  }


/**
   * The function above is a function that is called when the user clicks on the next button. The
   * function moves the content forward one section.
   */
 onNextClick(value?:'string') {
  //moves content forward one section
    this.swiper.swiperRef.slideNext()

}
/**
 * The above function is used to navigate to the previous slide in the swiper.
 */
onBackClick(value?:'string') {
  this.swiper.swiperRef.slidePrev()
}


  /**
   * It creates a quiz with 5 questions, each question has 5 answers, one of which is correct.
   * @param {number} chapter - number - the chapter number of the quiz
   * @returns An array of Question objects.
   */
  async createQuiz(chapter: number) {
    var unlockedQuizzes =
      this.userService.user.availableCourses[`${this.course.courseID}`]
        .unlockedQuizzes;
    if (
      !unlockedQuizzes.includes(this.currentModuleService.currentModuleIndex)
    ) {
      console.log('run');
      this.userService.user.availableCourses[
        `${this.course.courseID}`
      ].unlockedQuizzes.push(this.currentModuleService.currentModuleIndex);
      var allUsers = await this.dataStorageService.lookup('users');
      allUsers[`${this.userService.user.email}`] = this.userService.user;
      await this.dataStorageService.save('users', allUsers);
    }

    var quiz = [];
    for (let premadeQuestion of this.questionList[
      `${this.currentModuleService.currentModuleIndex}`
    ]) {
      let question = new Question(
        premadeQuestion.questionText,
        [],
        premadeQuestion.correctAnswer
      );
      for (let answer of premadeQuestion.answers) {
        question.answers.push(new Answer(answer.text, answer.num));
      }
      this.quizAnswered.push(9);

      quiz.push(question);
      for (let question of quiz) {
        console.log(question.questionText);
      }
    }
    this.quizloaded = true;
    return quiz;
  }
  /**
   * For each question in the quiz, if the question has been answered and the answer is correct, add an
   * object to the results array with a property of correct set to true. Otherwise, add an object to
   * the results array with a property of correct set to false and a property of correctAnswer set to
   * the correct answer.
   */
  async markQuiz() {
    let studentAnswers = this.quizAnswered;
    let correctAnswers = this.quiz.map((x) => x.correctAnswer);
    var userScore = 0;
    var corrections = [];

    for (let i = 0; i < correctAnswers.length; i++) {
      if (studentAnswers[i] == correctAnswers[i]) {
        userScore++;
        console.log(studentAnswers[i], 'correct');
      } else {
        corrections.push(this.quiz[i]);
        console.log(studentAnswers[i], 'incorrect', correctAnswers[i]);
      }
    }
    if (
      userScore / correctAnswers.length > 0.75 &&
      this.currentModuleService.currentModuleIndex <
        this.currentModuleService.moduleCount
    ) {
      if (
        !this.userService.user.availableCourses[
          `${this.course.courseID}`
        ].unlockedChapters.includes(this.chapterIndex + 1)
      ) {
        this.userService.user.availableCourses[
          `${this.course.courseID}`
        ].unlockedChapters.push(this.chapterIndex + 1);
        var allUsers = await this.dataStorageService.lookup('users');
        allUsers[`${this.userService.user.email}`] = this.userService.user;
        await this.dataStorageService.save('users', allUsers);
      }
      await this.finishedQuiz(true);
    } else {
      if (
        this.currentModuleService.currentModuleIndex ==
        this.currentModuleService.moduleCount
      ) {
        await this.finishedCourse();
      } else {
        await this.finishedQuiz(false);
      }
    }
    this.modalController.dismiss();
  }

  /**
   * The function is called when the user has completed the course, it then displays an alert to the
   * user.
   */
  async finishedCourse() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Course Completed',
      subHeader: 'You have completed this online learning',
      message:
        'Next step is the theory sessions, it will take a deeper delve into the content, then assess your learning',
      buttons: ['OK'],
    });

    await alert.present();
  }

  /**
   * This function is called when the user has completed the quiz, and it displays a message to the
   * user depending on whether they passed or failed the quiz.
   * @param {boolean} success - boolean - this is a boolean value that is passed in from the quiz
   * component.
   */
  async finishedQuiz(success: boolean) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quiz Completed',
      subHeader: success ? 'Nice Work' : 'sorry, that did not go as planned',
      message: success
        ? 'You successfully completed the quiz, you have unlocked the next chapter'
        : 'Please review this chapter, and retry the quiz from there',
      buttons: ['OK'],
    });

    await alert.present();
  }

  /**
   * For each question in the quiz, if the question has been answered and the answer is correct, add an
   * object to the results array with a property of correct set to true. Otherwise, add an object to
   * the results array with a property of correct set to false and a property of correctAnswer set to
   * the correct answer.
   */
  checkQuestionsAnswered() {
    for (let question of this.quiz) {
      if (question.questionAnswered != null) {
        continue;
      }
    }
    this.allQuestionsAnswered = true;
  }
}
