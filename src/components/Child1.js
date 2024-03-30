import React from 'react'
import SubChild from './SubChild'
import { useSelector } from 'react-redux'

const Child1 = () => {
    const data = useSelector((c)=>{
        return (c.show.value)
    })
  return (  
    <div>
    <h3>Child Component..{data}</h3>
      <SubChild/>
    </div>
  )
}

export default Child1
