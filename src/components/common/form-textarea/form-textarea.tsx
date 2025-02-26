'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormTextAreaProps {
  name: string;
  placeholder: string;
  className?: string;
  maxLength?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: any;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  placeholder,
  className,
  maxLength,
  rules = {},
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <textarea
        {...register(name, rules)}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full bg-dark-grey border border-stroke-grey focus:border-primary-color rounded-[20px] p-3 placeholder:text-stroke-grey resize-none ${className}`}
        rows={4}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm">
          {errors?.[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormTextArea;
