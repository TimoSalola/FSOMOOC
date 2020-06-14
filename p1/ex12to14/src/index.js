import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {

  const [selected, setSelected] = useState({
    indexOfThis: 0,
    votes : [0,0,0,0,0,0]
  })


  const voteCurrent = () => {
    //Adding 1 vote to currently shown anecdote
    const newCurrent = {
      //new state has to be generated
      indexOfThis: selected.indexOfThis,
      votes: selected.votes
    }

    //console.log("before")
    //console.log(newCurrent.votes)

    newCurrent.votes[newCurrent.indexOfThis] += 1

    //console.log("after")
    //console.log(newCurrent.votes)

    //saving new state
    setSelected(newCurrent)
  }

  const setCurrent = (newIndex) => {
    //Changing current anecdote to be something else
    console.log(newIndex)
    const newCurrent = {
      indexOfThis: newIndex,
      votes: selected.votes
    }

    setSelected(newCurrent)
    //Math.floor(anecdotes.length*Math.random())
  }




  return (
    <div>
      <AnecdoteHTML index= {selected.indexOfThis}/>

      <VotesHTML selected = {selected.indexOfThis} array= {selected.votes}/>

      <button onClick = {() => setCurrent(randomIndex(anecdotes.length))}>
      Get new
      </button>

      <button onClick = {() => voteCurrent()}>
      vote
      </button>

      <MostVotedHTML array = {selected.votes}/>

    </div>
  )
}

const maxIndex = (array) => {
  //Receives a number array and returns the index of the highest value
  var i;
  var highestFound = 0;
  var highestIndex = 0;
  for(i = 0; i < array.length; i++){
    //console.log("at index" + i + " value: " + array[i])
    if (array[i] > highestFound){
      highestFound = array[i]
      highestIndex = i
    }

  }
  return highestIndex
}


const MostVotedHTML = (props) => {
  //Returns the most voted anecdote as HTML
  return (
    <>
    <h3>Most voted</h3>
    <p>{anecdotes[maxIndex(props.array)]}</p>
    </>
  )
}

const AnecdoteHTML = (props) => {
  //Returns daily anecdote as HTML
  return (
    <>
    <h3>Anecdote of the day</h3>
    <p>{anecdotes[props.index]}</p>
    </>
  )

}


const VotesHTML = (props) =>{
  //Returns vote count of currently shown anecdote as HTML
  return(
    <p>Vote count: {props.array[props.selected]} </p>
  )
}



const randomIndex = (size) => {
  //Returns a random number between 0 and size-1
  return Math.floor(size*Math.random())
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
