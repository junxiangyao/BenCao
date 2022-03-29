import React, {useEffect, useState} from "react";
import './App.css';
import BencaoAPI from "./BenCaoAPI";

const APIApp = () =>{

  const APP_KEY = "7c444e4d61527ec6697336c2c84191af";
  const [bencaoAPI,setBencaoAPI] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('金银花');
  const EXAMPLE_REQUEST = `http://api.tianapi.com/zhongyao/index?key=${APP_KEY}&word=${query}`;

  useEffect(()=>{
    getBencaoAPI();
  }, [query]); 
  /*  
    Run everytime the page rerendered if there is the arrow function being the only parameter
    a [] as the second parameter, will make it run once at the beginning when it is mounted.

    [counter] will make it run everytime the counter is updated. - add this to return <button onClick={()=>{setCounter(counter+1)}} className="search_button" type = "submit">{counter}</button> - also need this line at the top - const [counter, setCounter] = useState(0);
  */


  const getBencaoAPI = async () => {
    const response = await fetch(`http://api.tianapi.com/zhongyao/index?key=${APP_KEY}&word=${query}`);
    const data = await response.json();
    console.log(data.newslist);
    setBencaoAPI(data.newslist);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log("The current search is " + search);
  }

  const getSearch = e => {
    e.preventDefault(); // the whole function is used for preventing query to be sent everytime user type a letter in the input box, which is the default.
    setQuery(search);
    // setSearch(""):
    // console.log("The current query is" + query);
  }

  return (
    <div className="App">
      <h1>本草笔记</h1>
        <form onSubmit={getSearch} className="search_form">
            <input className="search_bar" type = "text" value={search} onChange={updateSearch}/>
            <button className="search_button" type = "submit">检索</button>
      </form>
      {bencaoAPI.map((item,i) => ( 
        <BencaoAPI title={item.title} content={item.content.replace(/(<([^>]+)>)/ig, "\n").split ('\n')} key="{i}"/>
        ))}
    </div> 
  );
}

export default APIApp;
