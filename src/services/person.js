import axios from "axios";
const baseUrl = 'http://localhost:3000/persons';

const getAll = () => axios.get(baseUrl);
const createNew = newPerson => axios.post(baseUrl, newPerson);

export default { getAll, createNew };
