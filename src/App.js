import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { data } from './components/data'
import Form from './components/Form'
import { Link } from 'react-router-dom'
import Questions from './components/Questions'
import QuestionCount from './components/QuestionCount';
import AnswerOptions from './components/AnswerOptions'
import LastPage from './components/LastPage'

export default class AppComponent extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: '',
    options: [],
    previouslySelectedAnswer: '',
    disabled: true,
  };

  // handleAnswerSelected(event) {
  //   this.setUserAnswer(event.currentTarget.value);
  // }

  loadQuiz = () => {

    this.setState(() => {
      return {
        questions: data[this.state.currentQuestion].question,
        options: data[this.state.currentQuestion].options,
        answer: data[this.state.currentQuestion].answer,
        id: data[this.state.currentQuestion].id
      }
    })
  }

  componentDidMount() {
    this.loadQuiz();
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: data[this.state.currentQuestion].question,
          options: data[this.state.currentQuestion].options,
          answer: data[this.state.currentQuestion].answer,
          id: data[this.state.currentQuestion].id
        };
      });
    }
  }

  nextQuestionHandler = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      options: []

    })
  }

  prevQuestionHandler = () => {
    let previouslySavedAnswer = this.getPreviouslySavedAnswer();
    this.setState({
      currentQuestion: this.state.currentQuestion - 1,
      previouslySelectedAnswer: previouslySavedAnswer[0].answer
      // selectedAnswer:[this.state.selectedAnswer]
    })
  }

  // clickedOptionHandler=(option)=>{
  //   // console.log(option)
  //   this.setState({selectedOption:option})
  // }

  getPreviouslySavedAnswer() {
    let returnData = this.props.selectedOptions.filter((element) => {
      return element.quesKey === this.state.currentQuestion - 1
    })
    return returnData;
  }

  render() {
    let { questions, options, id, answer, currentQuestion, previouslySelectedAnswer } = this.state;
    console.log('ANS---', this.state.answer)
    return (
      <Router>
        <Route exact path="/">
          <div className="container main-container">
            <Questions questions={questions} />
            <QuestionCount currentQuestion={currentQuestion} id={id} />

            {
              options.map((option, index) => {
                return <AnswerOptions
                  key={index}
                  currentQuestion={currentQuestion}
                  questions={questions}
                  option={option}
                  answer={answer}
                  previouslySelectedAnswer={previouslySelectedAnswer}
                // onClick={this.clickHandler(option)}
                // checked={this.state.selectedOption === {option}}
                // change={(a)=>this.change(a)}
                // click={()=>this.clickedOptionHandler(option)}

                />
              })
            }

            {currentQuestion > 0 && (
              <button type="button" className="btn btn-outline-warning" onClick={this.prevQuestionHandler}>Previous</button>)}

            {currentQuestion < data.length - 1 && (
              <button type="button" className="btn btn-outline-warning" onClick={this.nextQuestionHandler} >Next</button>)}

            {currentQuestion === data.length - 1 && (
              <Link to="/info"> <button type="button" className="btn btn-outline-warning">Finish Quiz</button></Link>
            )}
          </div>
        </Route>
        <Route exact path="/info" component={Form} />
        <Route exact path="/confirmationPage" component={LastPage} />
      </Router>

    )
  }
}