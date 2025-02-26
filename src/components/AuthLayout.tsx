import React, { ReactNode } from 'react';
import AuthHeader from './layout/auth-header';
import Footer from './layout/Footer';
// import AuthBg from '@/assets/icons/auth-bg.svg';

interface AuthLayoutProps {
  children: ReactNode;
  classNames?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, classNames }) => {
  return (
    <div className={`min-h-screen bg-black text-white mx-auto ${classNames}`}>
      <AuthHeader />
      <div
        className="min-h-screen flex items-center bg-cover bg-center max-w-[90rem] mx-auto"
        style={{
          backgroundImage: 'url(/images/earth-bg.png)',
          backgroundPosition: 'right center',
          backgroundSize: '40rem',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full ml-0 sm:ml-8 md:ml-14 lg:ml-24 p-4">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
