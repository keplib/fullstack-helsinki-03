import axios from "axios";
const baseUrl = 'http://localhost:3000/persons/';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const createNew = newPerson => {
    const request = axios.post(baseUrl, newPerson);
    return request.then(response => response.data);
}

// const createNew = newPerson => axios.post(baseUrl, newPerson);
const deletePerson = sourceUrl => axios.delete(sourceUrl);

const updatePerson = (url, updateItem) => {
    const request = axios.put(url, updateItem)
    return request.then(response => response.data);
}

export default { getAll, createNew, deletePerson, baseUrl, updatePerson };
