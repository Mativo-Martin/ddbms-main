import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getVehicles = async () => {
  const { data } = await api.get('/vehicles');
  return data;
};

export const getServices = async () => {
  const { data } = await api.get('/services');
  return data;
};

export const getRequests = async () => {
  const { data } = await api.get('/requests');
  return data;
};