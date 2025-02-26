import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import CrossIcon from '@/components/icons/cross-icon';
import { getFileIcon } from '@/utils/feed/feed';

interface UploadFileItemProps {
  fileName: string;
  fileSize: string;
  fileType: string;
  onRemove?: () => void;
  className?: string;
}

const UploadFileItem: FC<UploadFileItemProps> = ({
  fileName = 'file.zip',
  fileSize = '5.3KB',
  fileType = '',
  className = '',
  onRemove,
}) => {
  return (
    <div className={`flex-between gap-3 w-full ${className}`}>
      <div className="flex items-center gap-2">
        <div>{getFileIcon(fileType)}</div>
        <div className="min-w-0">
          <p className="heading-tertiary font-medium truncate">{fileName}</p>
          <p className="text-description text-muted-foreground">{fileSize}</p>
        </div>
      </div>
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        aria-label="Remove uploaded file"
        className="p-1.5 border-2 border-secondary-grey-400 bg-[#dadada] rounded-full flex-center text-muted-foreground hover:text-foreground"
        onClick={onRemove}
      >
        <CrossIcon width={10} height={10} className="h-4 w-4" />
        <span className="sr-only">Remove file</span>
      </CustomButton>
    </div>
  );
};

export default UploadFileItem;
