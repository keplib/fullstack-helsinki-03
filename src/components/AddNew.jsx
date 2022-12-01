import personService from '../services/person';

const AddNew = ({ newName, newNumber, setNewName, setNewNumber, setPersons, persons }) => {

    const submitName = (event) => {
        event.preventDefault();

        if (isAlreadyinBook(newName, persons)) {
            if (confirm(`${newName} is already in the book. Do you want to update it?`)) {
                const itemToUpdate = persons.filter(person => person.name === newName)[0]
                // const updatedItem = { ...itemToUpdate, number: newNumber }
                // const url = personService.baseUrl + updatedItem.id
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
                    setPersons(persons.concat(addedPerson));
                    setNewName('');
                    setNewNumber('');
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