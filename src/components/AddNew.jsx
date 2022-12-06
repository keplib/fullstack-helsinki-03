import personService from '../services/person';
import Notification from './Notification';

const AddNew = ({ newName, newNumber, setNewName, setNewNumber, setPersons, persons, notification, setNotification }) => {

    const submitName = (event) => {
        event.preventDefault();

        if (isAlreadyinBook(newName, persons)) {
            if (confirm(`${newName} is already in the book. Do you want to update it?`)) {
                const itemToUpdate = persons.filter(person => person.name === newName)[0]
                personService.updatePerson(personService.baseUrl + itemToUpdate.id, { ...itemToUpdate, number: newNumber })
                    .then(updatedPerson => {
                        console.log(updatedPerson);
                        setPersons(persons.map(p => p.id !== itemToUpdate.id ? p : updatedPerson));
                    })
            }
        } else {
            const newPerson = { name: newName, number: newNumber }

            personService
                .createNew(newPerson)
                .then(addedPerson => {
                    personService.getAll()
                        .then(personList => setPersons(personList))
                    setNewName('');
                    setNewNumber('');
                    setNotification(`${newName} has been added to phobebook.`);
                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)
                });
        }
    }

    const inputChangeHandler = (event) => {
        event.preventDefault();
        setNewName(event.target.value);
    }

    const numberChangeHandler = (event) => {
        event.preventDefault();
        setNewNumber(event.target.value);
    }

    const isAlreadyinBook = (name, arr) => {
        return arr.some((element) => element.name === name);
    };

    return (
        <div>
            {notification ? <Notification message={notification} /> : null}
            <h3>Add new:</h3>
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
        </div>
    )
}

export default AddNew;