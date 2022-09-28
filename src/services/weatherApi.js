import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  // baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
})

// -22.91134838563966, -47.0576034081462

// previsão de 5 dias
// weatherApi.get('?lat=-22.91134838563966&lon=-47.0576034081462&units=metric&cnt=5&appid=0b62816b08984d52d4ede22b7e1cf23d')
// .then(res => {
//   console.log(res.data)
// })

export default api;
