import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { SearchParams, SearchResponse } from './search-service.types';

const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

const getToken = () => {
  // Check if we're in a browser environment before accessing localStorage
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) return token;
  }
  return null;
};

export const useSearch = () => {
  const search = async (params: SearchParams): Promise<SearchResponse> => {
    const token = getToken();

    const response = await axios.get(`${url}/api/v1/search?keyword=${params.query}`, {
      withCredentials: true,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        'Content-Type': 'application/json',
      },
    });
    
    console.log(response.data);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: search,
  });

  return {
    ...mutation,
  };
};