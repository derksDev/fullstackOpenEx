import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const getRandomAnecdote = () => {
    const randomQuote = getRandomIntInclusive(0,7)
    setSelected(randomQuote)
  } 

  const updateVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    const maxCopy = [...maxVoted]
    if (copy[selected] > maxVoted[1]){
      maxCopy[0] = selected
      maxCopy[1] = copy[selected]
    }
    setVotes(copy)
    setMaxVoted(maxCopy)
  }

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [maxVoted, setMaxVoted] = useState([0,0])


  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={getRandomAnecdote} text={"next anecdote"} />
      <Button onClick={updateVotes} text={"vote"} />
      <Anecdote title="Anecdote with most votes" anecdote={anecdotes[maxVoted[0]]} votes={maxVoted[1]} />
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Anecdote = ({title, anecdote, votes}) => {
  return(
    <div>
      <h1>{title}</h1>
      <h3>{anecdote}</h3>
      <h3>Has {votes} votes</h3>
    </div>
  )
}

export default App