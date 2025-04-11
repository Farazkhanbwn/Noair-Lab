import { useMutation } from '@tanstack/react-query';
import { LoginUser, SignUpUser } from './auth-services.types';
import axiosInstance from '../axios';

const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const useSignup = () => {
  const login = async (userData: SignUpUser) => {
    const response = await axiosInstance.post(`${url}/api/v1/user/signup`, userData);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: login,
  });

  return {
    ...mutation,
  };
};

export const useLogin = () => {
  const login = async (userData: LoginUser) => {
    const response = await axiosInstance.post(`${url}/api/v1/user/login`, userData, {
      withCredentials: true,
    });
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: login,
  });

  return {
    ...mutation,
  };
};

export const useForgotPassword = () => {
  const login = async (email: string) => {
    const response = await axiosInstance.post(
      `${url}/api/v1/auth/forgot-password`,
      { email },
      {
        withCredentials: true,
      }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: login,
  });

  return {
    ...mutation,
  };
};
