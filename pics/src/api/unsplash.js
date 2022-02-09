import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID oqaqD4tR2aEQjxFPyEqEACrSzV24SNk9wUCJ-I1Gtp0'
  }
})