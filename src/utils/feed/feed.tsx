import ExcelDocumentIcon from '@/components/icons/user/feed/scientific-document/excel-doc-icon';
import JpgIcon from '@/components/icons/user/feed/scientific-document/jpg-icon';
import JsonDocumentIcon from '@/components/icons/user/feed/scientific-document/json-doc-icon';
import NotePadIcon from '@/components/icons/user/feed/scientific-document/notepad-icon';
import PdfIcon from '@/components/icons/user/feed/scientific-document/pdf-icon';
import PngIcon from '@/components/icons/user/feed/scientific-document/png-icon';
import WordDocumentIcon from '@/components/icons/user/feed/scientific-document/word-doc-icon';
import { ReactNode } from 'react';

export const getFileIcon = (type: string): ReactNode => {
  const icons: Record<string, ReactNode> = {
    'application/pdf': <PdfIcon />,
    'application/msword': <WordDocumentIcon />,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': (
      <WordDocumentIcon />
    ),
    'text/csv': <ExcelDocumentIcon />,
    'text/plain': <NotePadIcon />,
    'application/json': <JsonDocumentIcon />,
    'image/png': <PngIcon />,
    'image/jpeg': <JpgIcon />,
  };
  return icons[type] || <NotePadIcon />; // default icon
};

export const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'k';
  }
  return num?.toString();
};
