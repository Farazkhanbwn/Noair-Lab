import React from 'react';

function NavLogo({ className }: { className?: string }) {
  return (
    <img
      className={`w-24 md:w-[11rem] h-[3.2rem] ${className}`}
      src="/app-logo.png"
      alt="logo"
    />
  );
}

export default NavLogo;
