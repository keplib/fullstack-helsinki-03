import './App.css'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import ContactList from './components/ContactList'

import { useState, useEffect } from 'react'

import personService from './services/person.js'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <AddNew newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        persons={persons}
      />
      <ContactList persons={persons} filter={filter} setPersons={setPersons} />
    </div>
  )
}

export default App