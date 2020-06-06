import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1> {props.course.name} </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.course.parts[0]}/>
      <Part part = {props.course.parts[1]}/>
      <Part part = {props.course.parts[2]}/>


    </>
  )

}

const Part = (props) => {
  return (
    //<p>{props.part.name} {props.part.len}</p>
    <p> {props.part.name} {props.part.len}</p>
  )
}


const Total = (props) => {
  //
  return (
    <p>Number of exercises {props.course.parts[0].len + props.course.parts[1].len + props.course.parts[2].len }</p>
  )
}




const App = () => {

  const course = {
    name: 'Half Stack application development',

    parts:  [
      {
        name: 'Fundamentals of React',
        len:  10,
      },
      {
        name: 'Using props to pass data',
        len: 7,
      },
      {
        name: 'State of a component',
        len: 14,
      }
    ]
  }


  return (
    <div>
      <Header course = {course}/>

      <Content course = {course}/>

      <Total course = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
