import { ReactNode } from 'react';
import AuthHeader from '@/components/layout/auth-header';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AuthHeader classNames="shadow-md fixed top-0 left-0 right-0" />
      {children}
      <Footer />
    </div>
  );
}
