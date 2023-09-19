import React, { useState } from 'react'

const SignUp = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
    retype: "",
    checkbox: false
  })

  function handleChange(event) {
    const { value, type, name, checked } = event.target
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(data)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='w-1/2' >
        <fieldset className='flex flex-col gap-5  bg-indigo-700 px-6 py-10 rounded-sm text-black border-2 border-slate-950'>
          <legend className='font-bold text-3xl uppercase tracking-wider'>SignUp form</legend>

          <input className='px-4 py-2 rounded-md outline-none'
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder='email address'
          />

          <input className='px-4 py-2 rounded-md outline-none'
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder='enter passsword'
          />

          <input className='px-4 py-2 rounded-md outline-none'
            type="password"
            name="retype"
            value={data.retype}
            onChange={handleChange}
            placeholder='retype passsword'
          />

          <div className='flex item-center gap-9 text-white text-xl'>
            <input className='px-4 py-2 rounded-md outline-none'
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={data.checkbox}
              onChange={handleChange}
            />
            <label htmlFor="checkbox">I want to jion the newsletter</label>
          </div>
          <div className='flex justify-center'>
            <button className='text-xl font-bold bg-lime-500 px-4 py-2 rounded-md'>Signup</button>
          </div>
        </fieldset>

      </form>
    </div>
  )
}

export default SignUp