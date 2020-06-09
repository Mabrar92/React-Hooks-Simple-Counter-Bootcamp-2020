import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hi from './hi.js';

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
    Hello World From {name} age <strong>{age} </strong>
    {5+10}
     
    </div>

}

export default App;
