import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Newdemo extends Component {

    myfun(){
        var container=document.getElementById('myId');
        var element=<h1>I Am Student At Daffodil International University this view came from ReactDOM</h1>
        var callBack=function(){
            alert('Hii I Am Call Back Function');
        }
        ReactDOM.render(element,container,callBack);
    }


    render() {
        return (
            <div>
                <button onClick={this.myfun}>Change</button>
                <h1 id='myId'>My Name is Roki</h1>
            </div>
        );
    }
}

export default Newdemo;