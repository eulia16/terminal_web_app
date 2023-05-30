import stuff from './MyTerminalAppName.png';
import './App.css';
import BasePage from '../src/pages/BasePage'




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



function App() {
  return (
    <BasePage/>
    )
}

export default App;
