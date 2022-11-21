import './App.css'

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 123456 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const filterHandler = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
    console.log(filter);
  }

  const isAlreadyinBook = (name, arr) => {
    return arr.some((element) => element.name === name);
  };

  const submitName = (event) => {
    event.preventDefault();

    if (isAlreadyinBook(newName, persons)) {
      alert(`${newName} is already in the book`)
    } else {
      let copy = [...persons]
      copy.push({ name: newName, number: newNumber })
      setPersons(copy);
      setNewName('');
      setNewNumber('');
    }
  }

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
    console.log(newName)
  }

  const numberChangeHandler = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Find entry:</p>
      <input value={filter} placeholder='type name here...' onChange={filterHandler} />
      <form onSubmit={submitName}>
        <div>
          name: <input value={newName} placeholder='insert a name here' onChange={inputChangeHandler} />
        </div>
        <div>
          name: <input value={newNumber} placeholder='insert a number here' onChange={numberChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App