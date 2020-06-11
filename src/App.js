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


function App() {

   let [count, setCount] = React.useState(0);
   let [isLit, setLit] = React.useState(true);


   return <div className={`body ${isLit? "":"Darkmode"}` }>
   <h3> Light Mode Theme </h3>
   <h5>Counter Value : {count}</h5>
<h6>The Theme is {isLit ? "Light Mode" : "Dark Mode"}</h6>

   <button onClick = {() => {return setCount(++count);}}>Increment</button>
   <button onClick = {()=>{return setLit(!isLit)}}>TOggle Theme</button>
 

   </div>
}

export default App;
