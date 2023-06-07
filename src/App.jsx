import './App.css'
import React from 'react'
import Useroutput from './components/useroutput'
import Userinput from './components/userinput'

function App() {
  return (
    <div className='container'>
      <Useroutput/>
      <Userinput/>
    </div>
  )
}

export default App
