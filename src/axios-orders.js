import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-90c24.firebaseio.com/'
});

export default instance;