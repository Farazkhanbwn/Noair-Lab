import React, { useState } from 'react';

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      onClick={() => setIsChecked(!isChecked)}
      className={`w-4 h-4 flex items-center justify-center border-secondary-grey bg-primary-grey rounded-sm cursor-pointer border ${
        isChecked ? 'bg-secondary-grey' : 'border-gray-400 '
      }`}
    >
      {isChecked && (
        <span className="text-stroke-grey text-sm font-semibold">✔</span>
      )}
    </div>
  );
};

export default CustomCheckbox;
