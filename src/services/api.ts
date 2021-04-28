import axios from 'axios';

const api = axios.create({
    baseURL: 'https://script.google.com/macros/s/AKfycbxGaLN-OmqmY_OebpM1nyuYPNdSAodlNeUjmB0EgEkJEAm22Zg/exec',
})

export default api;