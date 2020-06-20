import React from "react"

const Course = ({course}) => {

  const parts = course.parts
  const name = course.name


  const exArray = parts.map(ex => ex.exercises)

  console.log(exArray)


  const reducer = (accumulator, currentValue) => accumulator + currentValue

  const totalEx = exArray.reduce(reducer)
  console.log(totalEx)

  return (
    <>
      <h3>{name}</h3>
        <ul>
          {parts.map(part =>
            <li key={part.id}>{part.name} {part.exercises}  </li>
          )}
        </ul>
      <b>Total of {totalEx} exercises</b>
    </>
  )
}

export default Course
