import React, { useState } from 'react'
import { saveselectedOption } from '../redux';
import { connect } from 'react-redux'

function AnswerOptions(props) {
  // let classes = ['answer'];
  const [selectedOption, setSelectedOption] = useState('');

  let clickHandler = (ques, ans) => {
    // let data = {}
    // data.id = id;
    // data.value = e
    // let dataArray =  [{
    //   quesKey,
    //   answer
    // }] ;
    setSelectedOption(props.option);
    let index = props.selectedOptions.findIndex((el) => { return el.quesKey === ques });
    let dataArray = props.selectedOptions;
    if (index > -1) {// Value present already -> replace
      dataArray[index].answer = ans;
    }
    else {
      dataArray.push({ quesKey: ques, answer: ans });
    }
    props.saveselectedOption(dataArray);
  }

  let getCurrentSelection = (ques) => {
    // debugger
    let index = props.selectedOptions.findIndex((el) => { return el.quesKey === ques });
    if (index > -1) {
      let currAns = props.selectedOptions[index].answer;
      return currAns;
    }
    else return ''
  }

  console.log('PROPS---', props, 'PREV', props.selectedOptions, 'SEL', selectedOption)
  return (
    <div className="AnswerOptionsContainer" >
      <div class="btn" >
        {getCurrentSelection(props.currentQuestion) !== '' ?
          <label key={props.id} className="AnswerOptionsLabel">
            <input type="radio"
              key={props.id}
              name={props.currentQuestion}
              value={props.option}
              onClick={() => clickHandler(props.currentQuestion, props.option)}
              // onClick={this.props.click} 
              // onClick={() => {clickHandler}}
              checked={getCurrentSelection(props.currentQuestion) === props.option}
            />
            {props.option}
          </label> :
          <label key={props.id} className="AnswerOptionsLabel">
            <input type="radio"
              key={props.id}
              name={props.currentQuestion}
              value={props.option}
              onClick={() => clickHandler(props.currentQuestion, props.option)}
            // onClick={this.props.click} 
            // onClick={() => {clickHandler}}
            />
            {props.option}
          </label>
        }
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    questionKey: state.qId,
    selectedOptions: state.selectedOptions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveselectedOption: (data) => dispatch(saveselectedOption(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions)