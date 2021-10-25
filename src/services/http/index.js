import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:4500/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default request