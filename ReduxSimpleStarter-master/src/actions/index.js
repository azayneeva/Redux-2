import axios from 'axios';

const API_KEY = '975fe6072ce6b21a01db43be0b8f5ed8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
