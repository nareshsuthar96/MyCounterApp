import React from 'react'
import Child1 from './components/Child1'
import { useSelector } from 'react-redux'

const App = () => {
  const data = useSelector((c)=>{
    return (c.show.value)
})
  return (
    <div>
    <h3>App {data} </h3>
      <Child1/>
    </div>
  )
}

export default App
