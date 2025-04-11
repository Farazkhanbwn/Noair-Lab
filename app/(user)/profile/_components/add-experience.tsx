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
import { Textarea } from '@/components/ui/textarea';
import CustomSwitch from '@/components/common/custom-switch/custom-switch';
import CustomSelect from '@/components/common/custom-select/custom-select';
import { PROFESSIONAL_TITLES } from '../constants/constant';
import { DISCIPLINE_CATEGORIES } from '@/constants/signup/signup';
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

function AddExperience({
  open,
  onCloseModal,
  intialState = {
    title: '',
    specialization: '',
    organization: '',
    description: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    currentlyWorking: false,
  },
}: {
  open: boolean;
  onCloseModal: () => void;
  intialState?: ExperienceFormData;
}) {
  console.log({ intialState });
  const [isCurrentlyWoerking, setIsCurrentlyWorking] = useState(false);
  const [formData, setFormData] = useState<ExperienceFormData>(intialState);

  const handleSave = () => {
    onCloseModal();
  };

  const AddEditExperienceContent = () => {
    return (
      <>
        <div className="flex flex-col w-full gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <CustomSelect
              theme={defaultSelectTheme}
              options={PROFESSIONAL_TITLES}
              placeholder="Select your Title"
              buttonText="Add User Type"
              onAddClick={() => console.log('Add User Type')}
              onChange={value => console.log('value are : ', value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="specialization">Specialization</Label>
            {/* <Select
              value={formData.specialization}
              onValueChange={value =>
                setFormData(prev => ({ ...prev, specialization: value }))
              }
            >
              <SelectTrigger id="specialization">
                <SelectValue placeholder="Select your Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Development</SelectItem>
                <SelectItem value="backend">Backend Development</SelectItem>
                <SelectItem value="fullstack">
                  Full Stack Development
                </SelectItem>
              </SelectContent>
            </Select> */}

            <CustomSelect
              options={DISCIPLINE_CATEGORIES}
              theme={defaultSelectTheme}
              placeholder="Select your Specialization"
              buttonText="Add Disciplines"
              onAddClick={() => console.log('Add Disciplines')}
              onChange={value => console.log('value are : ', value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="organization">Organization</Label>

            <CustomSelect
              theme={defaultSelectTheme}
              options={DISCIPLINE_CATEGORIES}
              placeholder="Select your University"
              onChange={value => console.log('value are : ', value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Ex: About your job"
              value={formData.description}
              onChange={e =>
                setFormData(prev => ({ ...prev, description: e.target.value }))
              }
              className="h-32 resize-none hover:border-primary focus:border focus:border-primary px-3 py-2 relative"
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
                  <SelectTrigger>
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
                  <SelectTrigger>
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
                  <SelectTrigger>
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
                  <SelectTrigger>
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

          <div className="flex items-center space-x-2">
            <Label htmlFor="currently-working">Currently Working</Label>
            <CustomSwitch
              checked={isCurrentlyWoerking}
              onCheckedChange={checked => setIsCurrentlyWorking(checked)}
            />
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
          <DialogTitle className="text-xl font-bold">
            Add Experience
          </DialogTitle>
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
          <AddEditExperienceContent />
        </>
      }
    />
  );
}

export default AddExperience;
