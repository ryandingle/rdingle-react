import axios from 'axios';

export default axios.create({
  // baseURL: `https://jsonplaceholder.typicode.com/`
    baseURL: `http://localhost:9090/api/v1/`
  // baseURL: `https://rdingle.com/api/v1/`
});


