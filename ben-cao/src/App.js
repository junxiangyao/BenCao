import logo from './logo.svg';
import './App.css';
import React from "react";

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
