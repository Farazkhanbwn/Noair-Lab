import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import DeleteModal from '@/components/common/delete-modal';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import ThreeDots from '@/components/icons/user/feed/three-dots';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, Trash2 } from 'lucide-react';
import { FC, useState } from 'react';

interface NotificationItemProps {
  item: {
    new: boolean;
    title: string;
    description: string;
    time: string;
  };
}

const NotificationItem: FC<NotificationItemProps> = ({ item }) => {
  const { new: isNew, title, description, time } = item;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div
        className={`p-5 flex items-start justify-between ${isNew ? 'bg-light-blue' : ''}`}
      >
        <div className="flex items-start mb-2">
          <PrimaryImage
            width={78}
            height={82}
            src="/images/earth-bg.png"
            alt="Notification Thumbnail"
            className="rounded-[10px] w-[78px] h-[82px] mr-4"
          />
          <div>
            <h2 className="heading-secondary font-semibold mt-1 mb-1.5">
              {title}
            </h2>
            <p className="heading-tertiary mb-1">{description}</p>
            <p className="text-description text-secondary-grey mt-1">{time}</p>
          </div>
        </div>
        <CustomButton styleType={CustomButtonTypes.TERTIARY}>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-non p-4">
              <ThreeDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-white p-3 flex cursor-pointer flex-col gap-4 rounded-[10px] m-0"
              align="end"
            >
              <DropdownMenuItem className="flex cursor-pointer items-center text-sm gap-2 p-0">
                <Check className="h-4 w-4 " /> Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex cursor-pointer items-center text-sm gap-2 p-0"
                onClick={() => setIsDeleteModalOpen(true)}
              >
                <Trash2 className="h-4 w-4" />
                Delete notification
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CustomButton>
      </div>
      <DeleteModal
        open={isDeleteModalOpen}
        onCloseModal={() => setIsDeleteModalOpen(false)}
        headerTitle="Delete Notification"
        description="Are you sure you want to delete this notification?"
        btnCancelText="Cancel"
        btnSubmitText="Delete"
        onSubmit={() => console.log('On Submit Clicked')}
      />
    </>
  );
};

export default NotificationItem;
