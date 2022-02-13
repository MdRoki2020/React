import React, { Component } from 'react';

class Textarea extends Component {

    constructor(){
        super();
        this.state={
            desc:'please insert some text',
            userInput:''

        }
    }

    onChangeHandler=(event)=>{
        var myText=event.target.value;
        this.setState({userInput:myText})
    }

    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHandler}/>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Textarea;