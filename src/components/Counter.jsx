import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  function Increment() {
    return (
      setCount(prevValue => prevValue + 1)
    )
  }
  function Decrement() {
    if (count > 0) {
      setCount(preValue => preValue - 1)
    }
    else {
      setCount(0)
    }

  } function Reset() {
    setCount(0)
  }

  return (
    <div className='flex flex-col gap-3 justify-center h-screen'>
      <h1 className='font-bold text-3xl text-center uppercase'>counter</h1>
      <div className='relative flex items-center gap-5 justify-center'>
        <span className='w-20 h-20 border rounded-full text-4xl flex justify-center items-center'>{count}</span>
        <button onClick={Increment} className='absolute z-10 left-[46%] top-[25%] cursor-pointer text-2xl border rounded-l-full px-2 bg-slate-500 hover:bg-green-500'>+</button>
        <button onClick={Decrement} className='absolute z-10 right-[46%] top-[25%] cursor-pointer text-2xl border rounded-r-full px-2 bg-slate-500 hover:bg-red-500'>-</button>
        <button onClick={Reset} className='absolute z-10 top-[90%] cursor-pointer text-xl border rounded-b-full  px-2 pb-2 bg-slate-500 hover:bg-slate-700'>Reset</button>
      </div>
    </div>
  )
}

export default Counter