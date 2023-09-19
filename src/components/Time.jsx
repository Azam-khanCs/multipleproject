import { useEffect, useState } from "react"

const Time = () => {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  const hours = time.getHours()
  const minuts = time.getMinutes()
  const seconds = time.getSeconds()
  const date = time.getDate()
  const month = time.getMonth() + 1
  const year = time.getFullYear()

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h3 className="border-b-2 text-3xl font-bold pb-2">Current Time and Date</h3>
      <h4 className="font-semibold capitalize text-2xl"> the current time is = {`${hours} : ${minuts} : ${seconds}`}</h4>
      <h4 className="font-semibold capitalize text-2xl">the current date is = {` ${date} / ${month} / ${year}`}</h4>
    </div>
  )
}

export default Time