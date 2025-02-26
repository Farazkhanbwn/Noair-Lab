import { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import Header from '../header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex mt-[74px] flex-grow bg-light-grey row">
        {children}
      </div>
      <Footer />
    </main>
  );
}
