import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost/server/Login/login.php'
});

export default instance;