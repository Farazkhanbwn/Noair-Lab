import Link from './common/custom-link/custom-link';
import React, { ReactNode } from 'react';
import TooltipWrapper from './common/tooltip-wrapper/tooltip-wrapper';
import { Info } from 'lucide-react';

interface AuthFormProps {
  children: ReactNode;
  title?: string;
  heading?: string;
  helperText?: string;
  linkLabel?: string;
  link?: string;
  description?: string;
  showHelperTextAfterChildren?: boolean;
  headingEnd?: string;
  classNames?: string;
  toolTip?: string;
  toolTipLink?: { label: string; href: string };
}
const AuthForm: React.FC<AuthFormProps> = ({
  children,
  headingEnd = '.',
  title = 'Start for free',
  heading = 'Create new account',
  helperText = 'Already A Member?',
  linkLabel = 'Log In',
  description = '',
  link = '/login',
  showHelperTextAfterChildren = false,
  classNames,
  toolTip = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toolTipLink,
}) => {
  const helperTextElement = (
    <p className="text-secondary-grey font-semibold mt-0">
      {helperText}{' '}
      <Link href={link} className="text-primary-color">
        {linkLabel}
      </Link>
    </p>
  );
  return (
    <div className={`flex flex-col gap-y-2 sm:gap-y-3 ${classNames}`}>
      {title && (
        <h1 className="text-sm sm:text-base font-semibold uppercase text-secondary-grey mb-0">
          {title}
        </h1>
      )}

      {heading && (
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-0 leading-tight">
            {heading}
            <span className="text-primary-color">{headingEnd}</span>
          </h1>
          {toolTip && (
            <TooltipWrapper
              content={
                <>
                  Only emails ending in
                  <Link
                    href="https://university.edu"
                    className="text-primary-color underline"
                  >
                    @university.edu
                  </Link>
                  &nbsp; are eligible for the Waitlist.
                </>
              }
              className="max-w-[200px] px-2 py-6 text-center rounded-3xl !bg-[#373737]"
            >
              <Info className="w-4 h-4 sm:w-5 sm:h-5  text-pure-white cursor-pointer" />
            </TooltipWrapper>
          )}
        </div>
      )}

      {description && (
        <p className="text-sm sm:text-base text-secondary-grey font-semibold mt-0 max-w-[322px]">
          {description}
        </p>
      )}

      {!showHelperTextAfterChildren && helperTextElement}
      {children}
      {showHelperTextAfterChildren && helperTextElement}
    </div>
  );
};

export default AuthForm;
