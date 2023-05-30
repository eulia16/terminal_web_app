import stuff from '../MyTerminalAppName.png';
import '../App.css';
import { useEffect, useState } from 'react'



//were probably gonna have to use 'usestate' and then when the state changes, parse the command when 
//the user hits enter, if its not a proper command, return to a new line with an error message, otherwise 
//print out whatever component is associated w that command, also should add functionality to clear, exit, 
//and other basic terminal commands

//use this function to type some words out when something is called: 
/*
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} */



function BasePage() {


     const [searchTerm, setSearchTerm] = useState('/h');

     const handleSearch = event => {
          event.persist();
         setSearchTerm(event.target.value);
          //searchTerm = event.target.value
         console.log("search term new value: " + searchTerm)
         if(searchTerm === "/h")
             console.log("string matched help command")
     }; 

     useEffect(() => {
          console.log("Search message inside useEffect: ", searchTerm);
        }, [searchTerm]);



  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={stuff} className="App-logo" alt="logo" /> */}
        <img src={stuff} className = "ascii-art-app-name" alt="logo" />
     </header>

        <div className = 'input-text-div'>
          
        {/* <p className='input-text-from-user'>
        > Enter a command... (enter /h for help)
        </p> */}
        
        <div className="input-text-from-user">
        <input type="text" name="" className="command-line-input" value={searchTerm} onChange={(e) => {console.log(e.target.value); handleSearch(e)}} placeholder="Enter a command...  (enter /h for help)"/>

        </div>
        
      
      </div>
     
      
    </div>
  );
}

export default BasePage;
