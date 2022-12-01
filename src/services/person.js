import axios from "axios";
const baseUrl = 'http://localhost:3000/persons/';

const getAll = () => axios.get(baseUrl);
const createNew = newPerson => axios.post(baseUrl, newPerson);
const deletePerson = sourceUrl => axios.delete(sourceUrl);

export default { getAll, createNew, deletePerson, baseUrl };
