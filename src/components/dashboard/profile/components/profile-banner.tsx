import UploadIcon from '@/assets/svgs/UploadIcon';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import PencilIcon from '@/components/icons/user/profile/pencil-icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Trash2 } from 'lucide-react';
import { PropsWithChildren } from 'react';

interface ProfileBannerProps extends PropsWithChildren {
  bannerUrl: string;
  onEditCoverOptions?: () => void;
  onDeleteCover?: () => void;
}

const bannerImageClasses =
  'w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-t-md rounded-tr-md';

export function ProfileBanner({
  bannerUrl,
  children,
  onEditCoverOptions,
  onDeleteCover,
}: ProfileBannerProps) {
  return (
    <div className="relative rounded-3xl">
      <PrimaryImage
        src={bannerUrl}
        width={896}
        height={200}
        alt="banner"
        className={bannerImageClasses}
      />
      {onEditCoverOptions && (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none absolute top-2 right-2 rounded-full p-2 bg-pure-white m-3 cursor-pointer">
            {/* <MoreHorizontal className="h-5 w-6 text-black" /> */}
            <PencilIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white cursor-pointer shadow-md p-3 flex flex-col gap-5 rounded-[0.625rem]  m-0"
            align="center"
          >
            <DropdownMenuItem
              className="flex cursor-pointer items-center text-sm gap-3 p-0"
              onClick={onEditCoverOptions}
            >
              <UploadIcon /> Upload Cover Photo
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex  cursor-pointer items-center text-sm gap-3 p-0"
              onClick={onDeleteCover}
            >
              <Trash2 className="h-4 w-4" />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {children}
    </div>
  );
}
