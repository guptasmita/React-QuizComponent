import React,{ Component } from 'react'
import QuizQuestion from "./QuizQuestion"
import QuizEnd from "./QuizEnd"
let quizData = require('./quiz_data.json')


class Quiz extends Component {
 constructor (props) {
   super(props);
   this.state = { quiz_position: 1}
 }
  render() {
    const isQuizEnd = Boolean((this.state.quizposition - 1) == quizData.quiz_questions.length);
    const display =   isQuizEnd  ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
    return (
        <div>
          {display}
        </div>
      )
  }
}

export default Quiz
