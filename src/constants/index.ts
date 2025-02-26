import { SelectTheme } from '@/components/common/custom-select/custom-select.types';

export const defaultSelectTheme: SelectTheme = {
  trigger: {
    bg: 'bg-light-grey',
    text: 'text-gray-800',
    border: 'border-black',
    hover: 'hover:bg-gray-200',
    focus: 'focus:border-black',
  },
  content: {
    bg: 'bg-light-grey',
    border: 'border-gray-200',
  },
  item: {
    hover: 'hover:bg-gray-100',
    focus: 'focus:bg-gray-100',
    text: 'text-gray-800',
  },
  addButton: {
    bg: 'bg-white',
    text: 'text-black text-xs',
    border: 'border-stroke-grey',
    hover: 'hover:bg-transparent',
  },
};
