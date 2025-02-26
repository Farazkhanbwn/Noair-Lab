import React, { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  label?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className = 'bg-primary-color text-white font-bold py-2 px-8 rounded-[20px]',
  onClick,
  label,
  children,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

export default Button;
