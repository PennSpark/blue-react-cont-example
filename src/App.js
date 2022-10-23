import { useState } from 'react'

function App() {
  const notes = [
    'Hello!',
    "my",
    "name",
    "is",
    "Paul!"
  ]

  return (
    <div>
      <ListOfThings notes = {notes}/>
    </div>
  );
}


const ListOfThings = ({notes}) => {

  const jsxNotes = (note, index) =>  {
      return <p>Note {index}: {note}</p>
  }

  const jsxArrayOfNotes = notes.map(jsxNotes)
  
  return (
    <div>
      {jsxArrayOfNotes}
    </div>
  )
}



const CounterApp = () => {

  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {setCounter(counter+1)}
  
  return (
    <div>
      <button onClick={increaseByOne}>Increment</button>
      {counter}
    </div>
  )
}

const MessageForm = () => {
  const [displayText, setDisplayText] = useState("")
  const [field, setField] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setDisplayText(field)
    setField("")
  }

  const handleChange = event => {
    setField(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={field} onChange={handleChange}></input>
        <button type='Submit'>Submit</button>
      </form>
      <p>The last message was: {displayText}</p>
    </div>
  )
}


export default App;
