import React, { useState } from 'react'

const AddingArray = () => {

  const [things, setThings] = useState(["things 1", "things 2"])

  const thingsElement = things.map((thing) => <p id={thing}>{thing}</p>)

  function addThings() {
    setThings((prevThings) => {
      return [...prevThings, `things ${prevThings.length + 1}`]
    })
  }

  return (
    <div>
      <div className="flex justify-start items-center flex-col gap-[20px] h-screen">
        <button onClick={addThings} className='px-6 py-3 text-3xl rounded-md bg-orange-500 border'>Add things to the array</button>
        <p className=' text-left font-bold text-xl px-4 w-60 capitalize'>{thingsElement}</p>
      </div>
    </div>
  )
}

export default AddingArray