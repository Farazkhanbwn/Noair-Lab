/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useRouter } from 'next/navigation';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import FormInput from '@/components/common/form-input';
import CustomButton from '@/components/common/custom-button/custom-button';
import CustomSelect from '@/components/common/custom-select/custom-select';
import { DISCIPLINE_CATEGORIES, USER_TYPES } from '@/constants/signup/signup';
import CustomCheckbox from '@/components/common/custom-checkbox/custom-checkbox';
import { useState } from 'react';
import ConfirmationModal from '@/components/common/signup-login-success-modal';
import { useSignup } from '@/service/auth-service/auth-service';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/types';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';
import { ShowToast } from '@/components/common/Toast';
import { handleRequestError } from '@/utils/toast-utils';

type CreateAccountForm = {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
  title: string;
  specialization: string;
};

const CreateAccount = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useSignup();
  const methods = useForm<CreateAccountForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const [isSignupSuccessModal, setIsSignupSuccessModal] = useState(false);

  const onSubmit = async (data: CreateAccountForm) => {
    try {
      const { confirm_password, ...requestData } = data;
      await mutateAsync({
        ...requestData,
        name: data.username,
      });
      setIsSignupSuccessModal(true);
    } catch (error) {
      handleRequestError(error);
    }
  };

  return (
    <>
      {isPending && <FullScreenLoader color="#0029FA" />}
      <AuthLayout>
        <AuthForm classNames="max-w-[330px]">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormInput
                type="text"
                name="username"
                placeholder="User Name"
                rules={{
                  required: 'Username is required',
                }}
              />

              <FormInput
                type="email"
                name="email"
                placeholder="user@gmail.com"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                }}
              />

              <Controller
                name="title"
                control={methods.control}
                rules={{ required: 'Title is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <CustomSelect
                      {...field}
                      options={USER_TYPES}
                      placeholder="Title"
                      className="mb-4 max-w-[21rem]"
                      buttonText="Add User Type"
                      onAddClick={() => console.log('Add User Type')}
                      onChange={value => field.onChange(value)} // Trigger validation
                    />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm !m-0 !mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />

              <Controller
                name="specialization"
                control={methods.control}
                rules={{ required: 'Specialization is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <CustomSelect
                      {...field}
                      options={DISCIPLINE_CATEGORIES}
                      placeholder="Specialization"
                      className="mb-4 max-w-[21rem]"
                      buttonText="Add User Type"
                      onAddClick={() => console.log('Add User Type')}
                      onChange={value => field.onChange(value)} // Trigger validation
                    />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm !m-0 !mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />

              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                }}
              />

              <FormInput
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                rules={{
                  required: 'Please confirm your password',
                  validate: value =>
                    value === methods.getValues('password') ||
                    'Passwords do not match',
                }}
              />

              <div className="flex items-center ml-1">
                <CustomCheckbox />
              </div>

              <CustomButton type="submit" disable={isPending}>
                {'Sign Up'}
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
