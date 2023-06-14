import React from 'react'

function useroutput(props) {
  return (
    <div className='useroutput'>
      <h1>My name is {props.username}, I live in {props.address}.</h1>
 <br/>
    </div>
  )
}

export default useroutput
