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

      <Link href={'/'} className="flex items-center h-16 max-h-20">
        <NavLogo className="w-20 md:w-28 h-24 md:h-28" />
      </Link>
    </header>
  );
};

export default AuthHeader;
