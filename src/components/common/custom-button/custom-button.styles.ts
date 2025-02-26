import { CustomButtonTypes } from './custom-button.types';

const primaryButtonStyles =
  'bg-primary-color text-white font-bold px-8 py-2 rounded-[20px] hover:bg-[#0025e2]';

const secondaryButtonStyles =
  'text-primary-color hover:bg-primary-color hover:text-white border border-primary-color';

const tertiaryButtonStyles = '';

export const customButtonStyles = Object.freeze({
  [CustomButtonTypes.PRIMARY]: primaryButtonStyles,
  [CustomButtonTypes.SECONDARY]: secondaryButtonStyles,
  [CustomButtonTypes.TERTIARY]: tertiaryButtonStyles,
});
