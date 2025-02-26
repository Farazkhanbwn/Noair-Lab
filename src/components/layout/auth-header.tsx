import React, { FC } from 'react';

interface AuthHeaderProps {
  classNames?: string;
}
const AuthHeader: FC<AuthHeaderProps> = ({ classNames }) => {
  return (
    <header className={`bg-white px-4 pt-2 ${classNames}`}>
      {/* Left Section - Logo */}
      <div className="flex items-center pb-3 row">
        <h1 className="heading-primary font-bold text-black">NOAIR</h1>
      </div>
    </header>
  );
};

export default AuthHeader;
