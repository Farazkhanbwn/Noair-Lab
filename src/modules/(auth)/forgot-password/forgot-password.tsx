'use client';

import { useForm, FormProvider } from 'react-hook-form';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import FormInput from '@/components/common/form-input';
import CustomButton from '@/components/common/custom-button/custom-button';
import { useRouter } from 'next/navigation';
import { useForgotPassword } from '@/service/auth-service/auth-service';
import { handleRequestError } from '@/utils/toast-utils';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';

type ForgotPasswordForm = {
  email: string;
};

const ForgotPasswordPage = () => {
  const router = useRouter();
  const { isPending, mutateAsync } = useForgotPassword();
  const methods = useForm<ForgotPasswordForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    try {
      await mutateAsync(data.email);
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleClick = () => {
    router.push('/verify-code');
  };

  return (
    <>
      {isPending && <FullScreenLoader />}
      <AuthLayout>
        <AuthForm
          title=""
          heading="Forgot Password"
          headingEnd="?"
          description="Enter your registered email to reset your password."
          helperText="Remember your password?"
          showHelperTextAfterChildren={true}
          classNames="max-w-[330px]"
        >
          <FormProvider {...methods}>
            <form
              className="space-y-4"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <FormInput
                name="email"
                type="email"
                placeholder="user@gmail.com"
                className="max-w-[320px]"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                }}
              />
              <CustomButton onClick={handleClick} type="submit">
                Submit
              </CustomButton>
            </form>
          </FormProvider>
        </AuthForm>
      </AuthLayout>
    </>
  );
};

export default ForgotPasswordPage;
