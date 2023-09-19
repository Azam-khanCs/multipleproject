import React, { useState } from 'react'
import Box from '../components/Box'
import boxdata from '../boxdata'

const Boxes = () => {

  const [squares, setSquares] = useState(boxdata)

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  const squareELement = squares.map((square) => {
    return (
      <Box
        key={square.id}
        on={square.on}
        toggle={() => toggle(square.id)}

      />
    )
  })

  return (
    <div className=' flex justify-center flex-col gap-5 items-center h-screen container'>
      <h1 className='text-3xl font-semibold border-b-2'>Click on the box it will change bg color</h1>
      <div className='w-1/2 flex justify-center items-center flex-wrap gap-2'>{
        squareELement
      } </div>
    </div>
  )
}

export default Boxes