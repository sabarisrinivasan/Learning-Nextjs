"use client"
import { useCounterStore } from '@/store/store'
import React  from 'react'

const Manage = () => {
  const count =useCounterStore((state)=>state.count)
  return (
    <>
    <OtherComponent count={count}/>
    </>
  )
}
const OtherComponent=({count}:{count:number})=>{
  const increment =useCounterStore((state)=>state.increment)
  const decrement =useCounterStore((state)=>state.decrement)
  return(
    <div>
     {count}
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Manage