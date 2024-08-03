import axios from "axios";
let token = JSON.parse(localStorage.getItem("token"));

var myAxios = axios.create({
    baseURL: 'https://tokokecil.theworkpc.com/api',
    headers: { 'Authorization': `Bearer ${token}` }
    
});


export default myAxios;