 
import './App.css'

function App() {
   
  return (
    <>
      <Todo title='Goto movie' description='YOu have to got to movie' done={false} />
    </>
  )
}

interface TodoProp{
  title:string,
  description:string,
  done:boolean
}

function Todo(props: TodoProp){

  return <div>

    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
    <h1>{props.done}</h1>

  </div>
}

export default App
