import React, { useState } from 'react'

const Joke = (props) => {

  const [showText, setShowText] = useState(false)

  function toggleText() {
    return (
      setShowText(!showText)
    )
  }

  return (
    <div className='w-1/2 cursor-pointer' onClick={toggleText}>
      {
        props.setup && <h1 className='font-bold text-2xl'>{props.setup}</h1>

      }
      {showText && <p >{props.punchline}</p>}
      <hr />
    </div>
  )
}

export default Joke