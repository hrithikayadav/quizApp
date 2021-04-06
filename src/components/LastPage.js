import React,{useState} from 'react'
import { saveselectedOption } from '../redux';
import { reset } from '../redux'
import { connect } from 'react-redux'
import { data } from './data'
import { Link, Redirect } from 'react-router-dom'
import  Asset1 from '../Asset 1.png'
import  Asset4 from '../Asset 4.png'


function LastPage(props) {
  
 
  
    const AllSelectedoptions=props.selectedOptions;
    const ans=AllSelectedoptions.answer;
    
    // const listItems=AllSelectedoptions.map((number,i)=>
    // <li key={i}>{number.quesKey}</li>
    
    // );


    const userIds=data.map(a=>a.id);

    const listI=AllSelectedoptions.map(a=>{
        

        if(userIds.includes(a.id)){
            console.log("list")
            console.log(JSON.stringify(a))
            return a;
        }
    })
  
    
    const ids = AllSelectedoptions.map(o => o.id);
    //let result = AllSelectedoptions.filter(o1 => data.some(o2 => o1.id === o2.id));
    console.log("Props LP",props.selectedOptions)
    const totalscore=data.length;
    
    console.log("Data",data);
    console.log("list",listI);
    const renderResult=(c)=>{
       const  myobj=AllSelectedoptions.find(el=>el.quesKey===c.id)
        if(myobj){
            return myobj.answer
        }else{
            return "-"
        }
    }
    const calculateScore=()=>{
        let scored=0;
        data.map((e,i)=>{
            console.log(renderResult(e),e.answer)
            if(renderResult(e)===e.answer){
                scored=scored+1;
                
            }
        })
        return scored
        
     }

    const c=()=>{
        props.reset();
         //window.location.reload(false)
         window.location.href="/"
    }
    
    return (
        
        <div className="resultComponent">
            <div style={{textAlign:"center",paddingBottom:"50px"}}>
            <h3>Quiz Result</h3>
            <hr/>
            <div>
                {calculateScore()>=3?
                <div class="wrapper"> 
                    <div className="grid-item">
                        <p><h1>You're a Champ !</h1></p>
                        <p> <span >Your Score</span> {calculateScore()}/{totalscore}</p>
                    </div>
                    <div className="grid-item">
                        <img src={Asset1} alt=""/>
                    </div>
                </div>
                :
                <div class="wrapper"> 
                    <div className="grid-item">
                        <p><h1>You can do better !</h1></p>
                        <p> <span >Your Score</span> {calculateScore()}/{totalscore}</p>
                    </div>
                    <div className="grid-item">
                        <img src={Asset4} alt=""/>
                    </div>
                </div>
                    }
                    
                 </div>   
                          
                   
                
               
            
            </div>
            
              {data.map((e,i)=>
                <div className="resultComponent1">
                 <p>{renderResult(e)===e.answer?
                 <div className="resultComponent2">
                    <h5 style={{color: "green"}}><i class="bi bi-check2"></i> {e.id+1}. {e.question}</h5>
                   <p className="UserAns"> Your Answer <br/> <b>{renderResult(e)} </b></p>
                   
                 </div>:<div className="resultComponent2">
                 <h5 style={{color: "red"}}><i class="bi bi-x "></i>{e.id+1}. {e.question}</h5>
                   <p className="UserAns"> Your Answer <br/> <b>{renderResult(e)}</b>  </p>
                    <p className="CorrectAns" style={{backgroundColor:"rgba(0,255,0,0.1)"}}>Correct Answer <br/><b>{e.answer} </b> </p>
                    
                 </div>

                        
                 }</p>
                  
                </div>
              
        )}
        <button className="btn btn-warning lastPagebtn" onClick={c}>Back To Home</button>
        
        

                 {/* {data.map((e,i)=> */}
                    
                   
                        {/* // e.answer===AllSelectedoptions[id].answer?
                        //     <div >
                        //         <h3>{e.question}</h3>
                        //         <p style={{color: "green"}}>Your answer :{AllSelectedoptions[id].answer}</p>
                        //         <p>Correct Answer: {answer}</p>
                                
                                
                        //     </div>
                        //     : <div>
                        //     <h3>e.{question}</h3>
                        //     <p style={{color: "red"}}>Your answer{AllSelectedoptions[id].answer}</p>
                        //     <p>Correct Answer: {answer}</p>
                        //     </div> */}
                    

                
                {/* )}  */}
                {/* {AllSelectedoptions.map((e,i)=>
                    e.answer===data[e.quesKey].answer? 
                    <div>
                    <div>{data[e.quesKey].question}</div>
                        <div style={{color: "green"}}>{e.answer}</div>
                        <div>correct answer: {data[e.quesKey].answer}</div>
                    </div>:
                    <div>
                    <div>{data[e.quesKey].question}</div>
                        <div style={{color: "red"}} >{e.answer}</div>
                        <div>correct answer: {data[e.quesKey].answer}</div>
                    </div>
                 ) } */}
                
                
        </div>
                
                // <div>{props.options.map(function(qn,a){
                //     <p>{a}</p>
                // })} </div>
                // <React.Fragment>
                    
                //     {<div className="submittedComponent">
                //         <h1>Thank you !</h1>
                //         <p>Your response has been recorded. </p>
                //         <button className="btn">Back To Home</button>
                //     </div> }

                    
                // </React.Fragment>
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
      saveselectedOption: (data) => dispatch(saveselectedOption(data)),
      reset:()=>dispatch(reset())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(LastPage)





