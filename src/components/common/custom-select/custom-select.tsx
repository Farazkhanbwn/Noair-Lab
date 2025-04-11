'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CustomSelectProps, SelectTheme } from './custom-select.types';
import CustomButton from '../custom-button/custom-button';
import { CustomButtonTypes } from '../custom-button/custom-button.types';

// Default theme configuration
// const defaultTheme: SelectTheme = {
//   trigger: {
//     bg: 'bg-gray-100',
//     text: 'text-gray-800',
//     border: 'border-gray-300',
//     hover: 'hover:bg-gray-200',
//     focus: 'focus:border-blue-500',
//   },
//   content: {
//     bg: 'bg-white',
//     border: 'border-gray-200',
//   },
//   item: {
//     hover: 'hover:bg-gray-100',
//     focus: 'focus:bg-gray-100',
//     text: 'text-gray-800',
//   },
//   addButton: {
//     bg: 'bg-gray-50',
//     text: 'text-gray-600',
//     border: 'border-gray-300',
//     hover: 'hover:bg-gray-100',
//   },
// };

const defaultTheme: SelectTheme = {
  trigger: {
    bg: 'bg-dark-grey',
    text: 'text-pure-white',
    border: 'border-stroke-grey',
    hover: 'hover:bg-dark-grey',
    focus: 'focus:border-primary-color',
  },
  content: {
    bg: 'bg-dark-grey',
    border: 'border-gray-700',
    // For Moving on Top
    className: 'z-[1000]',
  },
  item: {
    hover: 'hover:!bg-secondary-grey-500',
    focus: 'focus:bg-gray-700/50',
    text: 'text-stroke-grey focus:text-pure-white',
  },
  addButton: {
    bg: 'bg-transparent',
    text: 'text-white text-xs',
    border: 'border-stroke-grey',
    hover: '',
  },
  dropDownIcon: {
    color: 'pure-white',
  },
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = 'Select an option',
  value,
  rules,
  onChange,
  className,
  onAddClick,
  buttonText,
  theme = defaultTheme,
}) => {
  // Merge default theme with custom theme
  const mergedTheme: SelectTheme = { ...defaultTheme, ...theme };

  return (
    <Select
      value={value}
      onValueChange={value => {
        if (rules?.required && !value) {
          console.log('Field is required');
        }
        onChange(value);
      }}
    >
      <SelectTrigger
        className={cn(
          `flex items-center justify-between w-full px-4 py-5 rounded-full text-sm sm:text-base transition-colors`,
          mergedTheme?.trigger?.bg,
          mergedTheme?.trigger?.text,
          mergedTheme?.trigger?.border,
          mergedTheme?.trigger?.hover,
          mergedTheme?.trigger?.focus,
          className
        )}
      >
        <SelectValue
          className="data-[state=checked]:font-semibold"
          placeholder={placeholder}
        />
      </SelectTrigger>
      <SelectContent
        position="popper"
        style={{ maxHeight: 'var(--radix-select-content-available-height)' }}
        className={cn(
          'rounded-lg overflow-y-auto',
          mergedTheme?.content?.bg,
          mergedTheme?.content?.border,
          mergedTheme?.content?.className,
          `data-[state=open]:text-${mergedTheme?.dropDownIcon?.color}`
        )}
      >
        <SelectGroup>
          {options.map(option => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={cn(
                'cursor-pointer',
                mergedTheme?.item?.hover,
                mergedTheme?.item?.focus,
                mergedTheme?.item?.text
              )}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
        {onAddClick && (
          <div className="px-3 pt-0">
            <CustomButton
              styleType={CustomButtonTypes.TERTIARY}
              onClick={onAddClick}
              className={cn(
                'rounded-full border py-2 px-4 ml-4 text-sm mt-1',
                mergedTheme?.addButton?.bg,
                mergedTheme?.addButton?.text,
                mergedTheme?.addButton?.border,
                mergedTheme?.addButton?.hover
              )}
            >
              {buttonText}
            </CustomButton>
          </div>
        )}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
