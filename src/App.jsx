import './App.css'

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const isAlreadyinBook = (name, arr) => {
    return arr.some((element) => element.name === name);
  };

  const submitName = (event) => {
    event.preventDefault();

    if (isAlreadyinBook(newName, persons)) {
      alert(`${newName} is already in the book`)
    } else {
      let copy = [...persons]
      copy.push({ name: newName })
      setPersons(copy);
      setNewName('');
    }
  }

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
    console.log(newName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: <input value={newName} placeholder='insert a name here' onChange={inputChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App