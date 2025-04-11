'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import FormInput from '@/components/common/form-input';
import CustomButton from '@/components/common/custom-button/custom-button';
import Link from '@/components/common/custom-link/custom-link';

import { useState } from 'react';
import ConfirmationModal from '@/components/common/signup-login-success-modal';
import { handleRequestError } from '@/utils/toast-utils';
import { useLogin } from '@/service/auth-service/auth-service';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '@/store/userSlice';

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const { isPending, mutateAsync } = useLogin();
  const [isLoginSuccessModal, setIsLoginSuccessModal] = useState(false);
  const dispatch = useDispatch()

  const methods = useForm<LoginForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await mutateAsync(data);
      dispatch(signupSuccess(response?.data?.user))
      localStorage.setItem('token', response.data.accessToken);
      setIsLoginSuccessModal(true);
    } catch (error) {
      handleRequestError(error);
    }
  };

  return (
    <>
      {isPending && <FullScreenLoader />}
      <AuthLayout>
        <AuthForm
          title="WELCOME BACK!"
          heading="Log In to access your account"
          helperText="Don’t have an account? "
          linkLabel="Sign Up"
          link="/signup"
          classNames="max-w-[330px]"
        >
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FormInput
                type="email"
                name="email"
                placeholder="user@gmail.com"
                // className='md:px-0 md:py-0 px-1 py-2'
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                }}
              />
              <div>
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

                <div className="text-end mt-2">
                  <Link className="text-primary-color" href="/forgot-password">
                    Forget Password?
                  </Link>
                </div>
              </div>
              <CustomButton type="submit" className="self-start">
                Log In
              </CustomButton>
            </form>
          </FormProvider>
        </AuthForm>
      </AuthLayout>
      <ConfirmationModal
        open={isLoginSuccessModal}
        onCloseModal={() => setIsLoginSuccessModal(false)}
        title="Login Successful!"
        description="Welcome back! You've successfully logged in."
        onSubmit={() => {
          setIsLoginSuccessModal(false);
          router.push('/suggested-users');
        }}
      />
    </>
  );
};

export default LoginPage;
