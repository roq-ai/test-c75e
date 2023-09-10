import axios from 'axios';
import queryString from 'query-string';
import { HiringRequestInterface, HiringRequestGetQueryInterface } from 'interfaces/hiring-request';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHiringRequests = async (
  query?: HiringRequestGetQueryInterface,
): Promise<PaginatedInterface<HiringRequestInterface>> => {
  const response = await axios.get('/api/hiring-requests', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHiringRequest = async (hiringRequest: HiringRequestInterface) => {
  const response = await axios.post('/api/hiring-requests', hiringRequest);
  return response.data;
};

export const updateHiringRequestById = async (id: string, hiringRequest: HiringRequestInterface) => {
  const response = await axios.put(`/api/hiring-requests/${id}`, hiringRequest);
  return response.data;
};

export const getHiringRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/hiring-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHiringRequestById = async (id: string) => {
  const response = await axios.delete(`/api/hiring-requests/${id}`);
  return response.data;
};
