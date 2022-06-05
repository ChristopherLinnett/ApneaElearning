/* A Question object has a questionText, an array of Answer objects, a questionAnswered property, and a
correctAnswer property */
export class Question {
  questionText: string;
  answers: Answer[];
  questionAnswered: number;
  correctAnswer: number;
  constructor(questionText: string, answers: Answer[], correctAnswer: number) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
    this.questionAnswered = null;
  }
}

/* The Answer class has a text property and a num property, and the constructor takes two arguments,
text and num, and assigns them to the text and num properties. */
export class Answer {
  text: string;
  num: number;
  constructor(text, num) {
    this.text = text;
    this.num = num;
  }
}
