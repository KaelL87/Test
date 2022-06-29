import axios from 'axios';

// Make an 'instance' of axios
const instance = axios.create({
  // .. where we make our configurations
  baseURL: process.env.API_SERVER_URL,
});

// Add configure interceptors && all the other cool stuff
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.message);
  },
);

export default instance;
