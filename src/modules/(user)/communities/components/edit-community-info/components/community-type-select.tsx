'use client';

import { ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { useState } from 'react';
import { CommunityType } from '../types/edit-community.type';

interface CommunityTypeSelectProps {
  communityTypes: CommunityType[];
}

export default function CommunityTypeSelect({
  communityTypes,
}: CommunityTypeSelectProps) {
  const [value, setValue] = useState('public');
  const selectedType = communityTypes.find(type => type.id === value);

  return (
    <div className="w-full space-y-2">
      <label className="text-base font-semibold">Community Type</label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full relative border-muted bg-muted/50 px-3 md:px-6 py-16 sm:py-9 [&>svg]:hidden [&>span]:flex [&>span]:flex-1">
          {selectedType && (
            <div className="flex relative items-center justify-between w-full">
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-1 sm:gap-4 flex-1">
                {selectedType.icon}
                <div className="flex flex-col items-start gap-1">
                  <div className="font-medium text-red">
                    {selectedType.title}
                  </div>
                  <div className="text-sm text-black text-start md:text-center text-muted-foreground">
                    {selectedType.description}
                  </div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
            </div>
          )}
        </SelectTrigger>
        <SelectContent
          className="bg-light-grey"
          style={{
            maxHeight: 'var(--radix-select-content-available-height)',
            maxWidth: 'var(--radix-select-content-available-width)',
          }}
        >
          <SelectGroup>
            {communityTypes.map(type => (
              <SelectItem
                key={type.id}
                value={type.id}
                className="p-4 focus:bg-muted/50 [&>svg]:hidden"
                hideCheckmark
              >
                <div className="flex items-center justify-center gap-4 cursor-pointer">
                  {type.icon}
                  <div className="flex flex-col items-start gap-1">
                    <div className="font-medium">{type.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {type.description}
                    </div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
