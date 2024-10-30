import  axios from 'axios';
import { BASE_URL, API_READ_ACCESS_TOKEN } from '../constants/constants';

export default  axios.create({
    baseURL: BASE_URL,
    headers: {'Authorization': `Bearer ${API_READ_ACCESS_TOKEN}`}
  });

export const popular = 'movie/popular';
export const original = 'discover/tv?with_networks=213';
export const action = 'discover/movie?with_genres=28'
export const comedy = 'discover/movie?with_genres=35'
export const adventure = 'discover/movie?with_genres=12'
export const fantacy = 'discover/movie?with_genres=14'