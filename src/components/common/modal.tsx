// import React, { ReactNode } from 'react';

// interface ModalProps {
//   children: ReactNode;
//   footer?: ReactNode;
//   onClose: () => void;
//   title: string;
// }

// const Modal: React.FC<ModalProps> = ({ title, children, footer, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="relative bg-white rounded-2xl w-full max-w-2xl h-[480px] mx-4 overflow-hidden flex flex-col">
//         <h1 className="text-2xl text-center font-bold pt-6 pb-4 border-b border-light-grey mb-0">
//           {title}
//         </h1>
//         <button
//           className="absolute top-5 right-5 p-2 hover:bg-gray-100 rounded-full shadow-button"
//           onClick={onClose}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="#9A9A9A"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <div className="overflow-scroll flex-1">{children}</div>
//         {footer && footer}
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { FC } from 'react';
import ReactResponsiveModal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

interface ModalStyles {
  modal?: React.CSSProperties;
  closeIcon?: React.CSSProperties;
  modalContainer?: React.CSSProperties;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseIcon?: boolean;
  styles: ModalStyles;
  classNames?: string;
  allowBackgroundScroll?: boolean;
}

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  children,
  styles,
  classNames,
  showCloseIcon = true,
  allowBackgroundScroll = true,
}) => {
  return (
    <ReactResponsiveModal
      classNames={{
        modal: `m-0 p-0 ${classNames}`,
        closeButton: 'outline-none',
      }}
      blockScroll={allowBackgroundScroll}
      styles={{
        modal: {
          maxWidth: 'unset',
          padding: 'unset',
          margin: 'unset',
          background: 'transparent',
          width: '100%',
          ...styles?.modal,
        },
        modalContainer: {
          ...styles?.modalContainer,
        },
        closeIcon: {
          fill: styles?.closeIcon?.fill || '#000',
          marginTop: '.5rem',
        },
      }}
      open={open}
      onClose={onClose}
      showCloseIcon={showCloseIcon}
      center
    >
      {children}
    </ReactResponsiveModal>
  );
};

export default Modal;
