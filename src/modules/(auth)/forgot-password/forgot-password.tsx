'use client';

import { useForm, FormProvider } from 'react-hook-form';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import FormInput from '@/components/common/form-input';
import CustomButton from '@/components/common/custom-button/custom-button';
import { useRouter } from 'next/navigation';

type ForgotPasswordForm = {
  email: string;
};

const ForgotPasswordPage = () => {
  const router = useRouter();
  const methods = useForm<ForgotPasswordForm>();

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log(data);
  };

  const handleClick = () => {
    router.push('/verify-code');
  };

  return (
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
          <form className="space-y-4" onSubmit={methods.handleSubmit(onSubmit)}>
            <FormInput
              name="email"
              type="email"
              placeholder="user@gmail.com"
              className="max-w-[320px]"
            />
            <CustomButton onClick={handleClick} type="submit">
              Submit
            </CustomButton>
          </form>
        </FormProvider>
      </AuthForm>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
