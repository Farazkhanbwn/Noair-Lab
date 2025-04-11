import { useEffect, useRef } from 'react';

// Custom hook for auto-resizing textarea
const useAutoResizeTextarea = (value: string) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to get accurate scrollHeight
      textareaRef.current.style.height = '40px';
      // Set new height including scrollHeight with max limit
      const maxHeight = 120; // Your max-h-[100px] equivalent
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [value]);

  return textareaRef;
};

const AutoResizingTextarea = ({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
}) => {
  const textareaRef = useAutoResizeTextarea(value);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`outline-none heading-tertiary text-gray-600 placeholder:text-gray-400 w-full resize-none overflow-y-auto rounded-full border-none p-2 ${className} `}
      style={{
        height: '40px',
        maxHeight: '120px',
      }}
    />
  );
};

export default AutoResizingTextarea;
