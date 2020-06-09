import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hi from './hi.js';

// function hi ({name}) {
//     return "function1";
// }

// let fun = 2;

// fun = function ({name})
// {
//     return "function2"
// }

// fun = ({name}) => {
//     return "arrow function"
// }

// fun = ({name}) => ( name)

// fun = ({name}) => name


function App({name,age,idd}) {

    return <div>
    Hello World from App.js  {name} {age} {idd} <Hi firstName = {name}></Hi>  
    </div>

}

export default App;
