import { FC, PropsWithChildren } from 'react';

interface FragmentProps extends PropsWithChildren {
  hide?: boolean;
}

const Fragment: FC<FragmentProps> = ({ hide, children }) => {
  if (hide) {
    return null;
  }
  return <>{children}</>;
};

export default Fragment;
