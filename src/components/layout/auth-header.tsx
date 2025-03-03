import Link from 'next/link';
import React, { FC } from 'react';

interface AuthHeaderProps {
  classNames?: string;
}
const AuthHeader: FC<AuthHeaderProps> = ({ classNames }) => {
  return (
    <header className={`bg-white px-4 pt-2 ${classNames}`}>
      {/* Left Section - Logo */}
      <Link href={'/'} className="flex items-center pb-3 row">
        {/* <h1 className="heading-primary font-bold text-black">NOAIR</h1> */}
        <img className="w-24 md:w-32 h-14" src="/app-logo.png" alt="logo" />
      </Link>
    </header>
  );
};

export default AuthHeader;
