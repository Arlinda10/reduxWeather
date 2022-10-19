import axios from "axios";

const KEY = 'cca17caf181da8743b259466c301ed8a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}