import Link from 'next/link';
import React, { FC } from 'react';
import NavLogo from '../common/logo/NavLogo';

interface AuthHeaderProps {
  classNames?: string;
}
const AuthHeader: FC<AuthHeaderProps> = ({ classNames }) => {
  return (
    <header className={`bg-white px-4 pt-2 ${classNames}`}>
      {/* Left Section - Logo */}
      <Link href={'/'} className="flex items-center pb-3 row">
        <NavLogo />
      </Link>
    </header>
  );
};

export default AuthHeader;
