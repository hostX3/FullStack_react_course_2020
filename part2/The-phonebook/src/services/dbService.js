import axios from 'axios'

// const PORT = process.env.REACT_APP_PORT_API
// console.log(PORT);
const baseUrl = `/api/person`
// const baseUrl2 = 'https://thephonebooks.herokuapp.com/api/person'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default {
  getAll,
  create,
  update,
  deletePerson
}
