import personService from '../services/person.js';

const ContactList = ({ persons, filter, setPersons }) => {

    const deleteHandler = (person) => {
        if (window.confirm(`Do you really want to delete ${person.name}?`)) {
            personService
                .deletePerson(personService.baseUrl + person.id)
                .then(response => {
                    personService.getAll()
                        .then(personList => setPersons(personList))
                });
        }
    }

    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                .map(person =>
                    <p key={person.name}>
                        {person.name} {person.number} <button onClick={() => deleteHandler(person)}>Delete</button>
                    </p>)}
        </div>
    )
}

export default ContactList;
