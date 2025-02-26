'use client';

import { FC } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressStepsProps {
  steps: number;
  currentStep: number;
  classNames?: string;
}

const ProgressSteps: FC<ProgressStepsProps> = ({
  steps,
  currentStep,
  classNames,
}) => {
  return (
    <div
      className={`relative flex w-full items-center justify-between ${classNames}`}
    >
      {/* Progress Line */}
      <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-secondary-grey" />
      <div
        className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-primary-color transition-all duration-500"
        style={{
          width: `${Math.min(((currentStep - 1) / (steps - 1)) * 100, 100)}%`,
        }}
      />

      {/* Steps */}
      {Array.from({ length: steps }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div
            key={index}
            className={cn(
              'relative flex-center h-5 w-5 rounded-full border bg-light-grey text-[10px] transition-colors text-secondary-grey',
              isCompleted ? 'border-primary-color bg-primary-color' : '',
              isCurrent
                ? 'border-primary-color text-primary-color bg-light-blue'
                : !isCompleted
                  ? 'border-stroke-grey'
                  : ''
            )}
          >
            {isCompleted ? (
              <Check className="h-4 w-4 text-pure-white" strokeWidth={3} />
            ) : (
              <span>{stepNumber}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSteps;
