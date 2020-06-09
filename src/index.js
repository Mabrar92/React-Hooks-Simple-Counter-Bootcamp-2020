import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <h1 className='background_color'>
   Bootcamp 2020 class 3 </h1>
    <br/>
    <ul>
    Hello <strong>Abrar  whitespace check</strong>
    <p>..  ...   <b>....</b>... .  .   .    .     .      .       .</p>
    { 2+32+4
    }
    </ul>
    
    <App name = "Abrar" age = {28} idd = "a4"  />
  </div>,
  document.getElementById('root')
);
/*  
React.createElement('div',null,"hello world from creat element_div",React.createElement('span',null,"hello world from span_createlement"))*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
