import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

export const fetchRockets = async (limit: number = 10, offset: number = 1) => {
  const response = await api.get(`/rockets?limit=${limit}&offset=${offset}`);
  return response.data;
}

export const fetchCapsules = async (limit: number = 8, offset: number = 1) => {
  const response = await api.get(`/capsules?limit=${limit}&offset=${offset}`);
  return response.data;
}

