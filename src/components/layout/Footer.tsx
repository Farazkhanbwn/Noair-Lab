import React, { FC } from 'react';

interface FooterProps {
  classNames?: string;
}

const Footer: FC<FooterProps> = ({ classNames }) => {
  return (
    <footer
      className={`bg-pure-white text-secondary-grey text-sm p-4 sm:px-8 md:px-16 lg:px-[60px] ${classNames}`}
    >
      <div className="row flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <p className="text-center md:text-left">
          © 2008-2024 ResearchGate GmbH. All rights reserved.
        </p>
        <ul className="flex items-center gap-4 md:gap-6 text-center">
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Copyright</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
