//exercise 1.1

/*const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
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
    <>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App*/

//exercise 1.2

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part course={props.courses[0]} />
      <Part course={props.courses[1]} />
      <Part course={props.courses[2]} />

    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    < div >
      <p>
        {props.course.part} {props.course.exercises}
      </p>
    </div >
  )

}

const Total = (props) => {
  console.log(props)

  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'

  const courses = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }

  ]

  return (
    <>
      <Header course={course} />
      <Content courses={courses} />
      <Total exercises={courses[0].exercises + courses[1].exercises + courses[2].exercises} />
    </>
  )
}

export default App
