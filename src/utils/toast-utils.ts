import { ShowToast } from '@/components/common/Toast';
import { AxiosError } from 'axios';

interface ErrorResponse {
  message?: string | string[];
}

export const handleRequestError = (error: unknown) => {
  const axiosError = error as AxiosError;

  if (axiosError?.response) {
    const msg = axiosError.response.data as ErrorResponse;

    // Handle both string and array cases
    const errorMessage = Array.isArray(msg?.message)
      ? msg.message.join(', ') // Join array messages into a single string
      : msg?.message || 'Something went wrong. Please try again.';

    ShowToast(errorMessage, {
      variant: 'error',
      preventDuplicate: true,
    });
  } else {
    ShowToast('An unexpected error occurred. Please try again later.', {
      variant: 'error',
    });
  }
};


export const handleRequestSuccess = (message: string) => {
  ShowToast(message, { variant: 'success' })
}