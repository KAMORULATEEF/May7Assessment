import './App.css'
import React, { useState } from 'react'
import Useroutput from './components/useroutput'
import Userinput from './components/userinput'

function App() {
  const [username, setUsername]= useState("Ayileru")
  function changeName(e) {
    setUsername(e.target.value)
  }
  return (
    <div className='container'>
      <Useroutput username = {username} address = "Iyana Isashi"/>
      <Userinput change={changeName}/>
    </div>
  )
}

export default App
 
