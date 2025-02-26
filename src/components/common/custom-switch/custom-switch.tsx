import { CustomWitchProps } from './custom-switch.types';

export default function CustomSwitch({
  onCheckedChange,
  checked,
}: CustomWitchProps) {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      className={`relative w-12 h-6 flex items-center 
        rounded-full  py-1  transition-all duration-300
        ${checked ? 'transition-all  duration-300  ease-in-out bg-primary pr-4' : 'bg-secondary-grey pl-1'}
      `}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform 
          transition-all 
          duration-300 
          ease-in-out 
          ${checked ? 'translate-x-6' : 'translate-x-0'}
        `}
      />
    </button>
  );
}
