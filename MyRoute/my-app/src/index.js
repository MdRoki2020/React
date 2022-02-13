import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import {Route,Link,BrowserRouter as Router } from '../node_modules/react-router-dom';

import reportWebVitals from './reportWebVitals';


const myrouter=(
  
  <Router>
    <div>

      <ul>

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/portfolio'>Portfolio</Link>

      </ul>

      <Route exact path='/' component={App}/>
      <Route path='/About' component={About}/>
      <Route path='/Contacts' component={Contacts}/>
      <Route path='/Portfolio' component={Portfolio}/>

    </div>
  </Router>

)



ReactDOM.render(
  myrouter,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
