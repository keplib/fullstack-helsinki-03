import personService from '../services/person.js';

const ContactList = ({ persons, filter }) => {

    const deleteHandler = (person) => {
        if (window.confirm(`Do you really want to delete ${person.name}?`)) {
            console.log(personService.baseUrl + person.id);
            personService
                .deletePerson(personService.baseUrl + person.id)
                .then(response => {
                    console.log(response.data);
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
