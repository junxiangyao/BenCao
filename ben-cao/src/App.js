// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>  
//   );
// }
// 
const App = () =>{

  const APP_KEY = "";
  const EXAMPLE_REQUEST = `http://api.tianapi.com/zhongyao/index?key=${APP_KEY}&word=金银花`;
  const [counter, setCounter] = useState(0);

  useEffect(async ()=>{
    console.log("Effect has been run!");
  }, []); 
  /*  
    Run everytime the page rerendered if there is the arrow function being the only parameter
    a [] as the second parameter, will make it run once at the beginning when it is mounted.

    [counter] will make it run everytime the counter is updated. - add this to return <button onClick={()=>{setCounter(counter+1)}} className="search_button" type = "submit">{counter}</button>
  */



  return (
    <div className="App">
      <h1>本草笔记</h1>
      <form className="search_form">
        <input className="search_bar" type = "text"/>
        <button className="search_button" type = "submit">检索</button>
      </form>
    </div> 
  );
}

export default App;
