import axios from "axios";

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0',
});

export default api;
