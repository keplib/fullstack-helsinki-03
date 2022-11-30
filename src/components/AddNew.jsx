import axios from "axios";

const AddNew = ({ newName, newNumber, setNewName, setNewNumber, setPersons, persons }) => {

    const submitName = (event) => {
        event.preventDefault();

        if (isAlreadyinBook(newName, persons)) {
            alert(`${newName} is already in the book`)
        } else {
            const newPerson = { name: newName, number: newNumber }
            axios
                .post('http://localhost:3000/persons', newPerson)
                .then(response => {
                    console.log(response);
                    setPersons(persons.concat(response.data));
                    setNewName('');
                    setNewNumber('');
                })
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