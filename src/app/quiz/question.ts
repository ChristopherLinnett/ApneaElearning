export class Question {
  questionText: string;
  answers: Answer[];
  questionAnswered: number;
  correctAnswer: number;
  constructor(
    questionText: string,
    answers: Answer[],
    correctAnswer: number
  ) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
    this.questionAnswered = null;
  }
}

export class Answer {
  text: string;
  num: number;
  constructor(text, num) {
    this.text = text;
    this.num = num;
  }
}
