import { useState } from 'react'
import './App.css'

const Anecdote = ({ anecdotes, selectedAnecdote, votes }) => {
  return (
    <div>
      <p>{anecdotes[selectedAnecdote]}</p>
      <p id='vote-count'>Received {votes[selectedAnecdote]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const getRandomAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNum)
  }

  const updateVoteCount = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log('copy: ', copy)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div className='outerContainer'>
    <div className='innerContainer'>
      <h1>Vote For an Anecdote</h1>
      <Anecdote
        anecdotes={anecdotes}
        selectedAnecdote={selected}
        votes={votes}
      />
      <div className='buttonsContainer'>

      <button onClick={updateVoteCount}>Vote</button>
      <button onClick={getRandomAnecdote}>Generate Anecdote</button>
      </div>
      <div className='mostVotesContainer'>
      <h3>Anecdote Hall of Fame</h3>

      <Anecdote
        anecdotes={anecdotes}
        selectedAnecdote={votes.indexOf(Math.max(...votes))}
        votes={votes}
      />
      </div>
    </div>
          </div>
  )
}

export default App
