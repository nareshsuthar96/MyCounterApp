import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/showSlice'
const SubChild = () => {
    const dispatch = useDispatch()
    const data = useSelector((c)=>{
        return (c.show.value)
    })
  return (
    <div>
      <h3>SubChild component..{data}</h3>
      <button onClick={()=>dispatch(increment())}>click</button>
    </div>
  )
}

export default SubChild
