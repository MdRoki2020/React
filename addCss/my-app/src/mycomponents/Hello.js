import React from 'react';

function Hello(props){

    
  function doThis(a){
    alert(a);
  }
  

    return(
        <div>
            <button onClick={doThis.bind(this,'Button Is Clicked from functional components')}>Click Me</button>
            <h1>Name: {props.name} And Age: {props.age}</h1>
        </div>
    );
}

export default Hello;