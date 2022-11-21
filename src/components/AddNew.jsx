const AddNew = ({ newName, newNumber, setNewName, setNewNumber, setPersons, persons }) => {

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
    }

    const numberChangeHandler = (event) => {
        event.preventDefault();
        setNewNumber(event.target.value);
    }

    const isAlreadyinBook = (name, arr) => {
        return arr.some((element) => element.name === name);
    };

    return (
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
    )
}

export default AddNew;