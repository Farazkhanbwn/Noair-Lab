'use client';

import { DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';
import { CustomModal } from '@/components/common/custom-modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import CustomSelect from '@/components/common/custom-select/custom-select';
import { DISCIPLINE_CATEGORIES } from '@/constants/signup/signup';
import { Input } from '@/components/ui/input';
import { defaultSelectTheme } from '@/constants';

interface ExperienceFormData {
  title: string;
  specialization: string;
  organization: string;
  description: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  currentlyWorking: boolean;
}

function AddEducation({
  open,
  onCloseModal,
}: {
  open: boolean;
  onCloseModal: () => void;
}) {
  const [formData, setFormData] = useState<ExperienceFormData>({
    title: '',
    specialization: '',
    organization: '',
    description: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    currentlyWorking: false,
  });

  const handleSave = () => {
    onCloseModal();
  };

  const EducationContent = () => {
    return (
      <>
        <div className="flex flex-col w-full gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="organization">University</Label>

            <CustomSelect
              theme={defaultSelectTheme}
              options={DISCIPLINE_CATEGORIES}
              placeholder="Select your University"
              onChange={value => console.log('value is : ', value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Degree</Label>
            <Input
              placeholder="Ex: Add Link here"
              className="w-full bg-light-grey focus:border focus:border-input"
            />
          </div>

          <div className="flex w-full gap-4">
            <div className="w-full">
              <Label>Start Date</Label>
              <div className="flex flex-row justify-between gap-5">
                <Select
                  value={formData.startMonth}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, startMonth: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="bg-light-grey overflow-y-auto"
                    style={{
                      maxHeight: 'var(--radix-select-content-available-height)',
                    }}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                      <SelectItem key={month} value={month.toString()}>
                        {new Date(2000, month - 1).toLocaleString('default', {
                          month: 'long',
                        })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={formData.startYear}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, startYear: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="bg-light-grey overflow-y-auto"
                    style={{
                      maxHeight: 'var(--radix-select-content-available-height)',
                    }}
                  >
                    {Array.from(
                      { length: 10 },
                      (_, i) => new Date().getFullYear() - i
                    ).map(year => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="space-y-2 w-full">
              <Label>End Date</Label>
              <div className="flex flex-row justify-between gap-5">
                <Select
                  value={formData.endMonth}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, endMonth: value }))
                  }
                  disabled={formData.currentlyWorking}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="bg-light-grey overflow-y-auto"
                    style={{
                      maxHeight: 'var(--radix-select-content-available-height)',
                    }}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                      <SelectItem key={month} value={month.toString()}>
                        {new Date(2000, month - 1).toLocaleString('default', {
                          month: 'long',
                        })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={formData.endYear}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, endYear: value }))
                  }
                  disabled={formData.currentlyWorking}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="bg-light-grey overflow-y-auto"
                    style={{
                      maxHeight: 'var(--radix-select-content-available-height)',
                    }}
                  >
                    {Array.from(
                      { length: 10 },
                      (_, i) => new Date().getFullYear() - i
                    ).map(year => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-start gap-3 mt-4">
          <Button
            variant="outline"
            onClick={() => {
              handleSave();
            }}
            className="py-5 px-7 bg-light-grey border-none hover:bg-light-grey hover:text-secondary-grey text-secondary-grey font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSave();
            }}
            className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
          >
            Save
          </Button>
        </div>
      </>
    );
  };
  return (
    <CustomModal
      isOpen={open}
      className="max-w-[90%] md:max-w-[75%] xl:max-w-[50%] rounded-lg min-h-[40vh] max-h-[90vh] overflow-y-auto"
      onClose={onCloseModal}
      dialogHeaderContent={
        <div className="w-full flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">Add Education</DialogTitle>
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
      dialogBodyContent={
        <>
          <EducationContent />
        </>
      }
    />
  );
}

export default AddEducation;
