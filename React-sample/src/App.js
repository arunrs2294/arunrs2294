const Header = (props) => {
   return(
      <div>
         <h1> {props.name} </h1>
      </div>
   )
}


const Part = (props) => {
   return(
      <div>
         <p> {props.course} {props.exercises} </p>
      </div>
   )
}

const Content = (props) => {
   return(
      <div>
         { props.courses.map( (course) => <Part key={course.id} course={course.name} exercises={course.exercises} />) }
         <p> <strong> total of { props.courses.reduce((sum, course) => sum+course.exercises,0) } exercises </strong> </p>
      </div>
   )
}


const Course = (props) => {
   return(
      props.courses.map((course, index) => {
         return(
            <div>
               <Header key={index} name={course.name}/>
               <Content key={course.parts.id} courses={course.parts}/>
            </div>
         )
      })
   )
}


const App = () => {
 const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Course courses={courses} />
}

export default App
