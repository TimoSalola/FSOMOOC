import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsLine = (props) => {
    return (
      <tr>
        <td>
          {props.name}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    )
}

const Button = (props) =>  {
    return (
      <button onClick = {() => props.fun(props.curval +1)}>
        {props.text}
      </button>
    )
}

const Statistics = (props) => {
  if ((props.good ===  0) &&  (props.bad === 0) && (props.neutral === 0)){
    return(
      <>
      <h3>Statistics</h3>
      <p>No feedback given</p>
      </>
    )

  }
  return (
    <>
    <h3>Statistics</h3>
    <table>
    <tbody>
      <StatisticsLine  name = {"Good"} value = {props.good}/>
      <StatisticsLine  name = {"Neutral"} value = {props.neutral}/>
      <StatisticsLine  name = {"Bad"} value = {props.bad}/>

      <tr>
        <td>
          Average
        </td>

        <td>
          {(props.good - props.bad)/(props.good + props.neutral + props.bad)}
        </td>
      </tr>

      <tr>
        <td>
          Positive
        </td>

        <td>
          {100* (props.good /(props.bad + props.neutral + props.good)) }%
        </td>
      </tr>
      </tbody>
    </table>

    </>

  )

}

const


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>

    <h3>Give feedback</h3>


    <Button text= {"Good"} fun = {setGood} curval = {good}/>
    <Button text= {"Neutral"} fun = {setNeutral} curval = {neutral}/>
    <Button text= {"Bad"} fun = {setBad} curval = {bad}/>

    <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
