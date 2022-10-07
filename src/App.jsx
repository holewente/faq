import React,{useState} from 'react';
import './App.css';
import {questions} from "./data.js"
import { motion } from "framer-motion"




function App() {
  const [data,setData]=useState(questions)
  const [showInfo,setShowInfo]=useState(false)
  const [selId, setSelId]=useState(null)
  const handlePlus=(e) => {
    console.log(e.target.id)
    setSelId(e.target.id)
    if(showInfo==false)
    setShowInfo(true)
    if(showInfo==true)
    setShowInfo(false)
  }
  const variants = {
    open: { opacity: 4, y: 16},
    closed: { opacity: 6, x: "-75%" },
  }
  
  console.log(data)
  return (

    
    <div className="container border">
        <h3>Questions and answers</h3>
        {data.map(obj=>(
          <div id='adatok' key={obj.id}>
            <h6>{obj.title}</h6>
          <button id={obj.id} onClick={handlePlus}>{showInfo && obj.id==selId ? "-" : "+"}</button>
          {showInfo && obj.id==selId && <div><motion.nav
            animate={selId ? "open" : "closed"}
            variants={variants}
            >
            {obj.info}</motion.nav></div>}
          
          </div>
          
        
          
        ))}
    </div>
  );
  
}

export default App;
