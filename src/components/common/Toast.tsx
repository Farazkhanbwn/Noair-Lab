// src/utils/toast.ts
import { enqueueSnackbar, OptionsObject } from 'notistack';

export const ShowToast = (message: string, options?: OptionsObject) => {
  enqueueSnackbar(message, {
    variant: 'default', // default variant
    preventDuplicate: true,
    ...options, // Spread to allow custom options
  });
};
