import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Signup extends Component {

    constructor(){
        super();
        this.state={
            fname: '',
            lname: '',
            email: '',
            mobile: ''
        }
    }

    onchangeHandelar=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue});
    }


    render() {
        return (
            <div>
                <br></br>
                <h1>Signup</h1>
                <form>
                <input onChange={this.onchangeHandelar} name='fname' type='text' placeholder='Enter Your First Name'></input><br></br><br></br>
                <input onChange={this.onchangeHandelar} name='lname' type='text' placeholder='Enter Your Last Name'></input><br></br><br></br>
                <input onChange={this.onchangeHandelar} name='email' type='email' placeholder='Enter Your Email'></input><br></br><br></br>
                <input onChange={this.onchangeHandelar} name='mobile' type='text' placeholder='Enter Your Mobile'></input><br></br><br></br>
                <input onChange={this.onchangeHandelar} className='btn btn-primary' type='name' type='submit' value='save now'></input><br></br><br></br>
                </form>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.mobile}</p>
            </div>
        );
    }
}

export default Signup;