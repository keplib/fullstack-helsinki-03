import './App.css'

import axios from 'axios';

import Filter from './components/Filter'
import AddNew from './components/AddNew'
import ContactList from './components/ContactList'

import { useState, useEffect } from 'react'

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add new:</h3>
      <AddNew newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        persons={persons}
      />
      <ContactList persons={persons} filter={filter} />
    </div>
  )
}

export default App