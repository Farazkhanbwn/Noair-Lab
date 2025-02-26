// import AuthHeader from '@/components/layout/auth-header';
// import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
