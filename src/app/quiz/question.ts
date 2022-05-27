export class Question {
  questionText: string;
  originChapter: number;
  originSection: number;
  answers: Answer[];
  questionAnswered: number;
  correctAnswer: number;
  constructor(
    questionText: string,
    originChapter: number,
    originSection: number,
    answers: Answer[],
    correctAnswer: number
  ) {
    this.questionText = questionText;
    this.originChapter = originChapter;
    this.originSection = originSection;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
    this.questionAnswered = null;
  }
}

export class Answer {
  text: string;
  correct: boolean;
  num: number;
  constructor(text, correct, num) {
    this.text = text;
    this.correct = correct;
    this.num = num;
  }
}
