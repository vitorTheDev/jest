import axios from 'axios';

export const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  null: () => null,
  createUser: () => ({
    name: 'Vitor', lastName: 'Barbieri',
  }),
  users: () => ['vitor', 'lucas', 'lizzy'],
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
}