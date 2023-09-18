import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

export const fetchRockets : (limit: number, offset: number) => Promise<Rocket[]> = async (limit?: number, offset?: number) => {
  if (!limit) limit = 10;
  if (!offset) offset = 1;
  const response = await api.get(`/rockets?limit=${limit}&offset=${offset}`);
  return response.data;
}

export const fetchRocket : (id: string) => Promise<Rocket> = async (id: string) => {
  const response = await api.get(`/rockets/${id}`);
  return response.data;
}

export const fetchCapsules : (limit: number, offset: number) => Promise<Capsule[]> = async (limit?: number, offset?: number) => {
  if (!limit) limit = 10;
  if (!offset) offset = 1;
  const response = await api.get(`/capsules?limit=${limit}&offset=${offset}`);
  return response.data;
}

export const fetchCapsule : (id: string) => Promise<Capsule> = async (id: string) => {
  const response = await api.get(`/capsules/${id}`);
  return response.data;
}

