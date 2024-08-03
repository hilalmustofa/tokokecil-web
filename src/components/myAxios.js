import axios from "axios";
let token = JSON.parse(localStorage.getItem("token"));

var myAxios = axios.create({
    baseURL: 'http://51.79.166.35:4525/api',
    headers: { 'Authorization': `Bearer ${token}` }
    
});


export default myAxios;