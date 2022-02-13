import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const AlertMe=(a)=>{
    alert(a);
}

const Arrow=()=>{
    return(
        <button onClick={AlertMe.bind(this,'Button Is Clicked')} className='btn btn-info m-5'>Arrow Button</button>
    );
}
export default Arrow;