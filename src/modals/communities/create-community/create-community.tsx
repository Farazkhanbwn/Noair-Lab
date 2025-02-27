import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '@/components/common/form-input';
import FormTextArea from '@/components/common/form-textarea/form-textarea';
import ProgressSteps from '@/components/common/progress-steps/progress-steps';
import {
  CommunityFormData,
  CreateCommunityModalProps,
} from '../communities.types';
import CommunityModalLayout from '../community.layout';

const CreateCommunityModal: FC<CreateCommunityModalProps> = ({
  isOpen,
  onClose,
  onBackButton,
  onNextButton,
}) => {
  const methods = useForm<CommunityFormData>();
  const { handleSubmit } = useForm<CommunityFormData>();

  const onSubmit = (data: CommunityFormData) => {
    console.log(data);
  };

  return (
    <CommunityModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Tell us about your community"
      description="A name and description help people understand what your community is all about."
      onNext={onNextButton}
      onBack={onBackButton}
    >
      <FormProvider {...methods}>
        <ProgressSteps
          steps={4}
          currentStep={1}
          classNames="max-w-[14rem] mx-auto mb-4"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="communityName"
            placeholder="Community name"
            className="!border-primary-grey rounded-md text-description outline-none max-w-[23rem] bg-light-grey focus:border-primary-grey p-2 mb-3"
          />

          <FormTextArea
            name="description"
            placeholder="Description"
            className="border !border-primary-grey rounded-md text-description outline-none w-full max-w-[23rem] bg-light-grey focus:border-primary-grey min-h-[100px] p-2 !mb-0"
          />
        </form>
      </FormProvider>
    </CommunityModalLayout>
  );
};

export default CreateCommunityModal;
