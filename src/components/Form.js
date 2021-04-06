import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

export default class Form extends Component {
    // handleClick = event => event.target.classList.add('.click-state');
    
    constructor(props) {
        super(props);
        this.state = { redirect: false,
        name:'',
        class_:'',
        phonenumber:'',
        }
    }
    
    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
      }
      handleClassChange = (evt) => {
        this.setState({ class_: evt.target.value });
      }
       handlePhonenumberChange = (evt) => {
        this.setState({ phonenumber: evt.target.value });
      }
    handleSubmit() {
        // do some check before setting redirect to true
        this.setState({ redirect: true });

        let obj={}
        obj.name=this.state.name;
        obj.class_=this.state.class_;
        obj.phonenumber=this.state.phonenumber;

        console.log("state",obj)
        console.log("state",this.state)
    }
    
   

    render() {
        const{name, class_, phonenumber}=this.state;
        const enabled=name.length>0 && class_.length>0 &&phonenumber.length>0;

        if (this.state.redirect) return <Redirect to='confirmationPage' />;
    else return(
            <React.Fragment>
                
                <div className="FormComponent" > 
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label className="nameLabel">
                            Name:
                            <input type="text" name="name" onChange={this.handleNameChange}required/>
                        </label>

                        <label className="classLabel">
                            Class
                            <select name="somename" onChange={this.handleClassChange} required>
                                <option value=""> </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="2">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </label>

                        <label className="phonenoLabel">
                            Phone Number:
                            <input type="tel" pattern="[789][0-9]{9}" name="phonenum"  maxLength="10" onChange={this.handlePhonenumberChange} required />
                        </label>
                        
                        {/* <button className={className} onClick={this.addClass}>Submit</button> */}
                        <input className="btn btn-primary" disabled={!enabled} type="submit" value="Submit" />
                    </form>
                </div>

                
                </React.Fragment>
        )
    }
}
