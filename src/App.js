import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import Button from'./components/button';

import {useState, UseState} from 'react'

function App(){

  const [counter,setCount]= useState(0);

  const[name,setName]=useState("Lerato")

  var c=0;
  const changename= ()=>{
    setName("Lerato")


  }

  const changenumber=()=>{
    setCount(20)

    

  }

  const increment =()=>{
    let sum=counter +1;
    setCount(sum);
    
  }
  const decrement= ()=>{
    let sum =counter -1;
    setCount(sum);

    if (counter ==0){
      setCount(0)
    }

    else{
      let sum =counter -1;
    setCount(sum);


    }

    

  
      





  


    

   

   } 


  return (
    <div className="App">

      <Display  counter={counter}/>

      {counter}
      <Button  increment={ increment}  decrement={decrement}/>
      <h1>{name}</h1>
      <h1>{counter}</h1>

      <button onClick={changename}>SET NAME</button>
      <button onClick={changenumber}>SET NUMBER</button>
      
    </div>
  );
}

export default App;
