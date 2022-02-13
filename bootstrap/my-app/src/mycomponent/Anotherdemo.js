import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'

class Anotherdemo extends Component {

    changeImg(){
        var container=document.getElementById('imgId');
        ReactDOM.findDOMNode(container).src='https://www.inspiringinterns.com/blog/wp-content/uploads/2018/07/thought-catalog-214785-unsplash-1200x800.jpg';
    }

    render() {
        return (
            <div>
                <br></br><button onClick={this.changeImg} className='btn btn-primary'>change image</button><br></br>
                <br></br><img id='imgId' className='img-fluid w-25 d-inline-block' src='https://www.moneycrashers.com/wp-content/uploads/2019/02/become-freelancer-types-work.jpg'></img>
            </div>
        );
    }
}

export default Anotherdemo;