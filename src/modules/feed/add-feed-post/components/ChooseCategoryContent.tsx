/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import CustomButton from '@/components/common/custom-button/custom-button';
import CustomSelect from '@/components/common/custom-select/custom-select';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { defaultSelectTheme } from '@/constants';
import { feedCategoryTypes } from '@/utils/constants/feed';
import { DialogProps } from '@radix-ui/react-dialog';
import Link from 'next/link';
import { useState } from 'react';

interface ChooseCategoryContentProps extends DialogProps {
  onNext?: (postType: string | null) => void;
  postType: string | null;
}

function ChooseCategoryContent(props: ChooseCategoryContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    props.postType
  );
  return (
    <>
      <div className="flex flex-col px-3 md:px-6">
        <Link href="/profile" className="flex items-center gap-3">
          <PrimaryImage
            width={40}
            height={40}
            src="/Ellipse 24.svg"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
          <span className=" text-black font-semibold !no-underline">
            Lewis Morissette
          </span>
        </Link>
        <div className="flex px-3 md:px-8 flex-col w-full mt-7 gap-3">
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium" htmlFor="organization">
              {' '}
              What Would You Like to Share?
            </Label>

            <CustomSelect
              theme={defaultSelectTheme}
              options={feedCategoryTypes}
              onChange={value => setSelectedCategory(value)}
              placeholder="Select a Category"
            />
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer w-full rounded-[10px]"
              asChild
            >
              <DropdownMenuTrigger asChild>
                <Button className="w-full bg-transparent hover:bg-transparent flex justify-between items-center rounded-[10px] border border-black px-4 py-2 text-sm">
                  <div className="flex w-full justify-between items-center">
                    {selectedCategory ? (
                      <span>
                        {
                          feedCategoryTypes.find(
                            c => c.value === selectedCategory
                          )?.label
                        }
                      </span>
                    ) : (
                      <span className="text-sm">Select a Category</span>
                    )}
                    <Image
                      width={10}
                      height={5}
                      className="w-3 h-2"
                      src={'/icon-dropdown.svg'}
                      alt="dropdown"
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-pure-white px-0 !w-full !rounded-sm max-h-96 overflow-y-auto min-w-[var(--radix-dropdown-menu-trigger-width)]"
              align={'end'}
              side={'bottom'}
            >
              {feedCategoryTypes.map(category => {
                return (
                  <DropdownMenuItem
                    key={category.value}
                    className="cursor-pointer px-5 rounded-none focus:bg-light-grey focus:shadow-md"
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    <span>{category.label}</span>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
      <hr className="border-t border-stroke-grey mt-10" />

      <div className="flex items-center justify-end gap-3 my-3 mr-6">
        <CustomButton
          className={`${!selectedCategory ? '!bg-stroke-grey hover:!bg-[#9a9a9a]' : ''} !font-semibold`}
          onClick={() => props.onNext?.(selectedCategory)}
          disable={!selectedCategory}
        >
          Next
        </CustomButton>
      </div>
    </>
  );
}

export default ChooseCategoryContent;
