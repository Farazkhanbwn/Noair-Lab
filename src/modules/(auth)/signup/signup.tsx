'use client';

import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import FormInput from '@/components/common/form-input';
import CustomButton from '@/components/common/custom-button/custom-button';
import CustomSelect from '@/components/common/custom-select/custom-select';
import { DISCIPLINE_CATEGORIES, USER_TYPES } from '@/constants/signup/signup';
import CustomCheckbox from '@/components/common/custom-checkbox/custom-checkbox';
import { useState } from 'react';
import ConfirmationModal from '@/components/common/signup-login-success-modal';

type CreateAccountForm = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const CreateAccount = () => {
  const router = useRouter();
  const methods = useForm<CreateAccountForm>();
  const [isSignupSuccessModal, setIsSignupSuccessModal] = useState(false);

  const onSubmit = (data: CreateAccountForm) => {
    console.log(data);
  };

  return (
    <>
      <AuthLayout>
        <AuthForm classNames="max-w-[330px]">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormInput
                type="email"
                name="email"
                placeholder="user@gmail.com"
              />
              <FormInput type="text" name="username" placeholder="User Name" />

              <CustomSelect
                options={USER_TYPES}
                placeholder="Title"
                className="mb-4 max-w-[21rem]"
                buttonText="Add User Type"
                onAddClick={() => console.log('Add User Type')}
              />

              <CustomSelect
                options={DISCIPLINE_CATEGORIES}
                placeholder="Specialization"
                className="mb-4 max-w-[21rem]"
                buttonText="Add Disciplines"
                onAddClick={() => console.log('Add Disciplines')}
              />

              <FormInput
                type="password"
                name="password"
                placeholder="Password"
              />

              <FormInput
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <div className="flex items-center ml-1">
                <CustomCheckbox />
                <p className="w-full text-description text-pure-white ml-4">
                  I agree to the Terms and conditions.
                </p>
              </div>

              <CustomButton
                onClick={() => {
                  setIsSignupSuccessModal(true);
                }}
                type="submit"
              >
                Sign Up
              </CustomButton>
            </form>
          </FormProvider>
        </AuthForm>
      </AuthLayout>
      <ConfirmationModal
        open={isSignupSuccessModal}
        onCloseModal={() => setIsSignupSuccessModal(false)}
        title="SignUp Successfully!"
        description="Welcome to NOAIR LAB! Your account has been created successfully."
        onSubmit={() => {
          setIsSignupSuccessModal(false);
          router.push('/pricing');
        }}
      />
    </>
  );
};

export default CreateAccount;
