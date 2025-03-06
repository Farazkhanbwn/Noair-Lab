import React, { ReactNode } from 'react';
import AuthHeader from './layout/auth-header';
import Footer from './layout/Footer';
import Image from 'next/image';
// import AuthBg from '@/assets/icons/auth-bg.svg';

interface AuthLayoutProps {
  children: ReactNode;
  classNames?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, classNames }) => {
  return (
    // <div className={`min-h-screen bg-black text-white mx-auto ${classNames}`}>
    //   <AuthHeader />
    //   <div
    //     className="min-h-screen flex items-center bg-cover bg-center max-w-[90rem] mx-auto"
    //     style={{
    //       backgroundImage: 'url(/images/earth-bg.png)',
    //       backgroundPosition: 'right center',
    //       backgroundSize: '40rem',
    //       backgroundRepeat: 'no-repeat',
    //     }}
    //   >
    //     <div className="w-full ml-0 sm:ml-8 md:ml-14 lg:ml-24 p-4">
    //       {children}
    //     </div>
    //   </div>
    //   <Footer />
    // </div>

    <div className={`min-h-screen bg-black text-white mx-auto ${classNames}`}>
      <AuthHeader />
      <div className="relative min-h-screen flex items-center max-w-[90rem] mx-auto">
        {/* Background Image */}
        <Image
          src="/images/earth-bg.png"
          alt="Background"
          width={600}
          height={200}
          className="z-0 absolute right-0 top-0 sm:top-[50%] bottom-0 -translate-y-0 sm:-translate-y-1/2 aspect-square h-[250px] sm:h-[350px] md:h-full max-w-[250px] w-full sm:max-w-[350px] md:max-w-[600px]"
        />

        {/* Content */}
        <div className="w-full ml-0 sm:ml-8 md:ml-14 lg:ml-24 p-4 z-10">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
