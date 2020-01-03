import ProgressBar from 'react-bootstrap/ProgressBar'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("")
  const [progress, setProgress] = useState(0)

  const validSpecial=(e)=>{
    const a = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ".", "/", ">", "<", "\\", "|", "'", ";", ":", " ", "\""]
      for (let i=0 ; i<a.length; i++){
        if (e.includes(a[i])){
          return true
        }
      }
    }

  const detectNumber=(e)=>{
     // e.split('').find(x => !isNaN(x))
      const list=e.split('')
      for (let i =0; i<=list.length;i++){
        if (!isNaN(list[i])){
           return true
          }
        }
      return false
    }

  const handle = (e) => {
    if(e.length>=6){
      setColor("danger")
      setProgress(33)
      if(validSpecial(e)){
        setColor("warning")
        setProgress(66)
      }
      if(detectNumber(e)){
        setColor("warning")
        setProgress(66)
      }
      if(validSpecial(e) && detectNumber(e) ){
        setColor("success")
        setProgress(100)
      }
    }
    else {
      setProgress(0)
    }

  }

  return (
    <div className="appmain">

      <h1>Hello Password Meter</h1>

      <input type="password" onChange={e => { handle(e.target.value) }} />

      <div className="progressbar">
         <ProgressBar variant={color} now={progress} />
      </div>

      <h3>Note:</h3>

      <ul>
        <li>Must contain at least 6 characters</li>
        <li>Must contain at least one digit</li>
        <li>Must contain at least one special character</li>
      </ul>

    </div>
  );
}

export default App;
