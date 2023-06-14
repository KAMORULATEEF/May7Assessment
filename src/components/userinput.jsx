import React from 'react'


function userinput(props) {
  return (
      <div 
      className='userinput'><input type="text" className='input_txt' onChange={props.change} value={props.value} placeholder='enter text here'/></div>
  )
}

export default userinput

