import personService from '../services/person.js';

const ContactList = ({ persons, filter }) => {

    const deleteHandler = (per) => {
        console.log(personService.baseUrl + per.id);
        personService
            .deletePerson(personService.baseUrl + per.id)
            .then(response => {
                console.log(response.data);
            });
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