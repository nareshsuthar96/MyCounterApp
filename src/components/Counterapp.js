import React, { useState } from 'react'

const Counterapp = () => {
    const [counter, setCounter] =  useState(0)
    let Inc =()=>{
      setCounter(counter+1)
    }
    let Dec =()=>{
      setCounter(counter-1)
    }
  return (
    <div>
      <h2>COUNTER :-{counter}</h2>
      <button type='button' onClick={Inc} className='btn btn-primary'>increment</button>
      <br></br> <br></br>
      <button type='button' onClick={Dec} className='btn btn-danger'>decrement</button>
  
    </div>
  )
}

export default Counterapp
