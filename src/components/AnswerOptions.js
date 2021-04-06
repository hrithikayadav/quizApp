import React, { useState } from 'react'
import { saveselectedOption } from '../redux';
import { connect } from 'react-redux'

function AnswerOptions(props) {
  // let classes = ['answer'];
  const [selectedOption, setSelectedOption] = useState('');

  let clickHandler = (ques, ans) => {
   
    //console.log("ch")
    setSelectedOption(props.option);
    
    let dataArray =JSON.parse(JSON.stringify(props.selectedOptions));
    let index = props.selectedOptions.findIndex((el) => { return el.quesKey === ques });
    if (index > -1) {// Value present already -> replace
      dataArray[index].answer = ans;
      
      //console.log("ii")
    }
    else {
      dataArray.push({ quesKey: ques, answer: ans });
    }
    props.saveselectedOption(dataArray);
  }

  let getCurrentSelection = (ques) => {
    //debugger
    //console.log("gc")
    //console.log("---------------------------")
    let index = props.selectedOptions.findIndex((el) => { return el.quesKey === ques });
    if (index > -1) {
      let currAns = props.selectedOptions[index].answer;
      return currAns;
    }
    else return ''
  }

  //console.log('PROPS---', props.selectedOptions, 'PREV', props.selectedOptions, 'SEL', selectedOption)
  return (
    <div className="AnswerOptionsContainer container-fluid" >
      <div class="btnAnswerOption " >
      <label key={props.id} className="AnswerOptionsLabel ">
            <input 
              type="radio"
              
              key={props.id}
              name={props.currentQuestion}
              value={props.option}
              onClick={() => clickHandler(props.currentQuestion, props.option)}
               //onClick={props.onClick} 
              // onClick={() => {clickHandler}}
              checked={getCurrentSelection(props.currentQuestion) === props.option}
            />
            <span >  {props.option}</span>
          </label>
        {/* {getCurrentSelection(props.currentQuestion) !== '' ?
          <label key={props.id} className="AnswerOptionsLabel ">
            <input 
              type="radio"
              
              key={props.id}
              name={props.currentQuestion}
              value={props.option}
              onClick={() => clickHandler(props.currentQuestion, props.option)}
              // onClick={this.props.click} 
              // onClick={() => {clickHandler}}
              checked={getCurrentSelection(props.currentQuestion) === props.option}
            />
            <span >  {props.option}</span>
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
           <span> {props.option} </span>
          </label>
        } */}
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
