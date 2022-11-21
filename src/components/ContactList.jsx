const ContactList = ({ persons, filter }) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default ContactList;