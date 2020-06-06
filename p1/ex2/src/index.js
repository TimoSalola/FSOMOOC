import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1> {props.title} </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part p_title = {props.p1_title} p_len = {props.p1_len}/>
      <Part p_title = {props.p2_title} p_len = {props.p2_len}/>
      <Part p_title = {props.p3_title} p_len = {props.p3_len}/>
    </>
  )

}

const Part = (props) => {
  return (
    <p>{props.p_title} {props.p_len}</p>
  )
}


const Total = (props) => {
  //
  const total = props.e1+ props.e2+ props.e3
  return (
    <p>Number of exercises {total}</p>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>

      <Content p1_title = {part1} p1_len = {exercises1} p2_title = {part2} p2_len = {exercises2} p3_title = {part3} p3_len = {exercises3}/>

      <Total e1 = {exercises1} e2 = {exercises2} e3 = {exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
