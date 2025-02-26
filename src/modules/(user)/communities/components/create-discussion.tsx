'use client';

import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import CustomSelect from '@/components/common/custom-select/custom-select';
import { defaultSelectTheme } from '@/constants';
import { CustomModal } from '@/components/common/custom-modal';
import { DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

export const COMMUNTIES_LIST: { label: string; value: string }[] = [
  { label: 'Community 1', value: 'community-1' },
  { label: 'Community 2', value: 'community-2' },
  { label: 'Community 3', value: 'community-3' },
];
function CreateDiscussion({
  open,
  onCloseModal,
  onSubmit,
}: {
  open: boolean;
  onCloseModal: () => void;
  onSubmit: (
    title: string | null | undefined,
    body: string | null | undefined,
    image: string | null | undefined
  ) => void;
}) {
  const [image, setImage] = useState<string | null>(null);

  const handleSave = useCallback(() => {
    onSubmit(null, null, image); // This is a bug, the onSubmit function should be called with the title, body and image as arguments
    onCloseModal();
  }, [image, onCloseModal, onSubmit]);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }
    },
    []
  );

  const handleRemove = useCallback(() => {
    if (image) {
      URL.revokeObjectURL(image);
      setImage(null);
    }
  }, [image]);

  const DiscussionContent = useMemo(() => {
    return (
      <>
        <div className="flex flex-col w-full gap-4 py-4">
          <CustomSelect
            theme={{
              ...defaultSelectTheme,
              trigger: {
                ...defaultSelectTheme.trigger,
                border: 'border-none',
              },
            }}
            options={COMMUNTIES_LIST}
            className="w-full sm:w-3/4 md:w-2/3 xl:w-1/2"
            placeholder="Select your Community"
            buttonText="hello"
          />
          <Tabs defaultValue="text" className="bg-transparent shadow-none">
            <TabsList className="w-1/2 flex gap-4 justify-start items-start">
              <TabsTrigger
                value="text"
                className="px-2 shadow-none data-[state=active]:shadow-none  data-[state=active]:border-b-2 border-primary rounded-none "
              >
                Text
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="px-2 shadow-none data-[state=active]:shadow-none  data-[state=active]:border-b-2 border-primary rounded-none "
              >
                Images & Videos
              </TabsTrigger>
              <TabsTrigger
                value="link"
                className="px-2 shadow-none data-[state=active]:shadow-none  data-[state=active]:border-b-2 border-primary rounded-none "
              >
                Link
              </TabsTrigger>
            </TabsList>
            <div className="h-[200px] w-full md:w-3/4">
              <TabsContent value="text" className="h-full">
                <div className="flex flex-col gap-4 mt-5 h-full">
                  <Input
                    placeholder="Title"
                    className="w-full bg-light-grey hover:border-primary focus:border focus:border-primary "
                  />
                  <Textarea
                    placeholder="Body"
                    className="min-h-[140px] resize-none text-left px-3 py-2 hover:border-primary focus:border focus:border-primary"
                  />
                </div>
              </TabsContent>

              <TabsContent value="media" className="h-full">
                <div className="flex flex-col gap-4 mt-5 h-full">
                  <Input
                    placeholder="Title"
                    className="w-full bg-light-grey hover:border-primary focus:border focus:border-primary "
                  />
                  <div className="relative flex w-full bg-light-grey justify-center items-center rounded-md h-full min-h-[140px] border border-dark-grey">
                    {image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          fill
                          alt="upload banner"
                          className="object-cover rounded-md"
                          priority
                        />
                        <Button
                          variant="default"
                          size="icon"
                          className="h-6 w-6 p-3 absolute top-2 right-2 rounded-full shadow-none bg-light-grey hover:bg-[#F9F9F9]"
                          onClick={handleRemove}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <label className="flex h-full w-full cursor-pointer items-center justify-center">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                          <Upload className="h-4 w-4 text-black" />
                          <span className="text-xs">
                            Click to Upload Your Banner
                          </span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="link" className="h-full">
                <div className="flex flex-col gap-4 mt-5 h-full">
                  <Input
                    placeholder="Title"
                    className="w-full bg-light-grey hover:border-primary focus:border focus:border-primary "
                  />
                  <Input
                    placeholder="Link URL"
                    className="w-full bg-light-grey hover:border-primary focus:border focus:border-primary "
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <div className="flex w-full justify-start gap-3 mt-4">
          <Button
            onClick={() => {
              handleSave();
            }}
            className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
          >
            Post
          </Button>
        </div>
      </>
    );
  }, [image, handleFileChange, handleRemove, handleSave]);

  return (
    <CustomModal
      isOpen={open}
      className="max-w-[90%] md:max-w-[75%] xl:max-w-[45%] rounded-lg min-h-[40vh] max-h-[80vh] overflow-y-auto"
      onClose={onCloseModal}
      dialogHeaderContent={
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <DialogTitle className="text-xl font-bold">
              Let&apos;s Create a Discussion
            </DialogTitle>
            <span>
              Please enter your post title or body (you can also attach Image,
              Videos or Emojis).
            </span>
          </div>
          <Button
            variant="default"
            size="icon"
            className="h-6 w-6 p-3 rounded-full shadow-none bg-light-grey hover:bg-stroke-grey"
            onClick={onCloseModal}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      }
      dialogBodyContent={<>{DiscussionContent}</>}
    />
  );
}

export default CreateDiscussion;
