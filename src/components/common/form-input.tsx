'use client';

import React, { useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

interface FormInputProps {
  name: string;
  type?: string;
  placeholder: string;
  className?: string;
  maxLength?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: RegisterOptions;
  index?: number;
  onMoveToNext?: (nextIndex: number) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type = 'text',
  placeholder,
  className,
  maxLength,
  rules = {},
  index,
  onMoveToNext,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordType = type === 'password';
  const inputType = isPasswordType
    ? showPassword
      ? 'text'
      : 'password'
    : type;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    register(name).onChange(e);

    // Move focus to the next input if maxLength is reached
    if (value.length === maxLength && onMoveToNext && index !== undefined) {
      onMoveToNext(index + 1);
    }
  };

  return (
    <div className="space-y-1">
      <div className="relative">
        <input
          {...register(name, rules)}
          type={inputType}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={handleChange}
          className={`w-full bg-dark-grey border border-stroke-grey focus:border-primary-color rounded-[20px] mb-0 py-2 ${isPasswordType ? 'pr-10' : 'px-3'} pl-3 placeholder:text-stroke-grey ${className}`}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stroke-grey hover:text-gray-300 outline-none"
          >
            {showPassword ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
            <span className="sr-only">
              {showPassword ? 'Hide password' : 'Show password'}
            </span>
          </button>
        )}
      </div>
      {errors?.[name] && (
        <p className="text-red-500 text-sm">
          {errors?.[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormInput;

// 'use client';

// import React, { useState } from 'react';
// import { useFormContext, RegisterOptions } from 'react-hook-form';
// import { Eye, EyeOff } from 'lucide-react';

// interface FormInputProps {
//   name: string;
//   type?: string;
//   placeholder: string;
//   className?: string;
//   maxLength?: number;
//   rules?: RegisterOptions;
//   index?: number;
//   onMoveToNext?: (nextIndex: number) => void;
// }

// const FormInput: React.FC<FormInputProps> = ({
//   name,
//   type = 'text',
//   placeholder,
//   className,
//   maxLength,
//   rules,
//   index,
//   onMoveToNext,
// }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const isPasswordType = type === 'password';
//   const inputType = isPasswordType
//     ? showPassword
//       ? 'text'
//       : 'password'
//     : type;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;

//     // Move focus to the next input if maxLength is reached
//     if (value.length === maxLength && onMoveToNext && index !== undefined) {
//       onMoveToNext(index + 1);
//     }
//   };

//   return (
//     <div>
//       <div className="relative">
//         <input
//           {...register(name, rules)} // Pass validation rules correctly
//           type={inputType}
//           placeholder={placeholder}
//           maxLength={maxLength}
//           onChange={handleChange}
//           className={`w-full bg-dark-grey border border-stroke-grey focus:border-primary-color rounded-[20px] py-2 ${
//             isPasswordType ? 'pr-10' : 'px-3'
//           } pl-3 placeholder:text-stroke-grey ${className}`}
//         />
//         {isPasswordType && (
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-stroke-grey hover:text-gray-300 outline-none"
//           >
//             {showPassword ? (
//               <Eye className="h-5 w-5" />
//             ) : (
//               <EyeOff className="h-5 w-5" />
//             )}
//             <span className="sr-only">
//               {showPassword ? 'Hide password' : 'Show password'}
//             </span>
//           </button>
//         )}
//       </div>
//       {errors?.[name] && (
//         <p className="text-red-500 text-sm">
//           {errors[name]?.message as string}
//         </p>
//       )}
//     </div>
//   );
// };

// export default FormInput;
