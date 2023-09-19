import React from 'react'
import myJoke from '../myjoke'
import Joke from './Joke'

const Jokes = () => {
  const thisJoke = myJoke.map((jokedata) => {
    return (
      <Joke
        key={jokedata.id}
        id={jokedata.id}
        setup={jokedata.setup}
        punchline={jokedata.punchline}
      />
    )
  })
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen'>{thisJoke}</div>
  )
}

export default Jokes