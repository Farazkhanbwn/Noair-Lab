import React from 'react';

function NavLogo({ className }: { className?: string }) {
  return <img className={`${className}`} src="/app-logo.svg" alt="logo" />;
}

export default NavLogo;
