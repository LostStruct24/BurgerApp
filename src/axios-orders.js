import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-928a4-default-rtdb.firebaseio.com/'
});

export default instance;