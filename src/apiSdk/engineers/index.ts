import axios from 'axios';
import queryString from 'query-string';
import { EngineerInterface, EngineerGetQueryInterface } from 'interfaces/engineer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEngineers = async (
  query?: EngineerGetQueryInterface,
): Promise<PaginatedInterface<EngineerInterface>> => {
  const response = await axios.get('/api/engineers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEngineer = async (engineer: EngineerInterface) => {
  const response = await axios.post('/api/engineers', engineer);
  return response.data;
};

export const updateEngineerById = async (id: string, engineer: EngineerInterface) => {
  const response = await axios.put(`/api/engineers/${id}`, engineer);
  return response.data;
};

export const getEngineerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/engineers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEngineerById = async (id: string) => {
  const response = await axios.delete(`/api/engineers/${id}`);
  return response.data;
};
