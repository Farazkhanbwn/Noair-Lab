'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  BillingPeriod,
  PricingTier,
  UserType,
} from '@/modules/(auth)/pricing/pricing-card/pricing-card.type';
import { PricingCard } from '@/modules/(auth)/pricing/pricing-card/PricingCard';
import React from 'react';
import { Check } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import AuthHeader from '@/components/layout/auth-header';
import ConfirmationModal from '@/components/common/signup-login-success-modal';

const pricingData: PricingTier[] = [
  {
    name: 'Basic',
    price: {
      monthly: 120,
      yearly: 1200,
    },
    features: [
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
    ],
  },
  {
    name: 'Pro',
    price: {
      monthly: 150,
      yearly: 1500,
    },
    features: [
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
    ],
  },
  {
    name: 'Premium',
    price: {
      monthly: 200,
      yearly: 2000,
    },
    features: [
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
      { text: 'Lorem ipsum dolor sit.' },
    ],
  },
];

export default function PricingPage() {
  const [period, setPeriod] = useState<BillingPeriod>('Month');
  const [userType, setUserType] = useState<UserType>('student');
  const [isConfimrationModal, setIsConfimrationModal] = useState(false);

  return (
    <>
      <div className="w-full relative overflow-auto min-h-screen mx-auto mb-32">
        <AuthHeader />
        <div
          className={`h-[876px] min-h-[40%] max-h-[50%] items-center bg-black absolute  w-full flex bg-right-bottom md:bg-[position:right] bg-[length:10rem] sm:bg-[length:20rem] md:bg-[length:30rem] lg:bg-[length:40rem]  mx-auto}`}
          style={{
            backgroundImage: 'url(/images/earth-bg.png)',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="w-full absolute text-white p-4 mb-20">
          <div className="w-full flex flex-col items-center max-w-full mx-auto">
            <div className="flex w-full max-w-[90rem] flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-[2rem] text-white font-bold mt-8 mb-3">
                  Select Your Plan
                </h1>
                <p className="font-semibold mb-5">
                  Choose the perfect plan that fits your needs and get started
                  today.
                </p>

                {/* Billing Period Toggle */}
                <div className="inline-flex items-center rounded-full bg-primary-grey border border-secondary-grey mb-6">
                  <Button
                    variant={period === 'Month' ? 'default' : 'ghost'}
                    className={`rounded-full py-3 font-semibold ${period === 'Month' ? 'bg-primary px-12' : 'px-6'}`}
                    onClick={() => setPeriod('Month')}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={period === 'Year' ? 'default' : 'ghost'}
                    className={`rounded-full py-3 font-semibold  ${period === 'Year' ? 'bg-primary px-12' : 'px-6'}`}
                    onClick={() => setPeriod('Year')}
                  >
                    Yearly
                  </Button>
                </div>

                {/* User Type Selection */}
                <h2 className="font-semibold mb-5">Who are you?</h2>
                <div className="flex gap-5 flex-wrap">
                  {(['student', 'professional', 'enterprise'] as const).map(
                    type => (
                      <React.Fragment key={type}>
                        <Button
                          variant="outline"
                          className={`relative rounded-[10px] py-4 px-6 font-semibold capitalize ${
                            userType === type
                              ? 'border-primary text-primary'
                              : 'border-stroke-grey'
                          }`}
                          onClick={() => setUserType(type)}
                        >
                          {userType === type ? (
                            <span className="absolute z-10 -top-4 -left-2 rounded-full bg-primary p-1">
                              <Check className="text-white" />
                            </span>
                          ) : null}
                          {type}
                        </Button>
                      </React.Fragment>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col items-center w-full xs:grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 md:gap-24 lg:gap-32 mx-auto row mt-28 sm:mt-20 px-0 md:px-12">
              {pricingData.map(tier => {
                const price =
                  period === 'Month' ? tier.price.monthly : tier.price.yearly;

                return (
                  <div
                    key={tier.name}
                    className="relative w-full max-w-[100%] md:max-w-[90%]"
                  >
                    <div className="relative">
                      <div className="absolute z-20 -mt-2 w-full flex flex-col gap-1">
                        <h3 className="font-semibold text-center">
                          {tier.name}
                        </h3>
                        <p className="z-20  text-sm font-medium text-center text-white">
                          Per {period}
                        </p>
                        <div className="flex justify-center mt-1 ml-1">
                          <Button
                            variant={'outline'}
                            className="text-2xl aspect-square text-white rounded-full border-2  border-white w-[5.4rem] h-[5.4rem] flex items-center justify-center font-bold"
                          >
                            ${price}
                          </Button>
                        </div>
                      </div>
                      <img
                        src={'/images/pricing-card-badge-top.svg'}
                        alt="pricing badge"
                        className="absolute -translate-y-[2.135rem] z-10 mx-auto left-0 right-0"
                      />
                      <img
                        src={'/images/pricing-badge-circle-not.svg'}
                        alt="pricing circel knot"
                        className="absolute translate-y-5 z-10 mx-auto left-[0.35rem] right-0"
                      />
                    </div>

                    <PricingCard tier={tier} />
                    <div className="relative">
                      <img
                        src={'/images/pricing-card-badge-bottom.svg'}
                        alt="pricing badge"
                        className="absolute bottom-0 translate-y-[1.256rem] z-10 mx-auto left-0 right-0"
                      />
                      <div className="absolute -translate-y-9 z-20 w-full justify-center flex items-center gap-1">
                        <Button
                          variant={'outline'}
                          className="font-semibold tex-base border-2"
                          onClick={() => {
                            setIsConfimrationModal(true);
                          }}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="fixed z-50 bottom-0 w-full">
          <Footer />
        </div>
      </div>
      <ConfirmationModal
        open={isConfimrationModal}
        onCloseModal={() => setIsConfimrationModal(false)}
        title="Payment Successful!"
        description="Thank you for your payment! Your subscription is now active."
        btnText="Start Exploring"
        onSubmit={() => {
          setIsConfimrationModal(false);
        }}
      />
    </>
  );
}
