import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Form extends Component {

    constructor (){
        super()
        this.state={
            name:''
        }
    }


    onchangeHandelar=(event)=>{
        var newName=event.target.value;
        this.setState({name:newName})
    }


    render() {
        return (
            <div>
                
                <form>
                    <br></br>
                    <p>My First Form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onchangeHandelar} type='text' placeholder='Enter Your Name'></input><br></br><br></br>
                    <input className='btn btn-primary' type='submit' value='Submit Now'></input>
                </form>

            </div>
        );
    }
}

export default Form;