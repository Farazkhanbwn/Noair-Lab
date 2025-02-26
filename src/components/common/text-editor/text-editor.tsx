// components/TextEditor.tsx
'use client'; // If using Next.js App Router
import 'suneditor/dist/css/suneditor.min.css'; // Import the styles

import { FC, useCallback, useState } from 'react';
import SunEditor from 'suneditor-react';
interface TextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  height?: string | number;
  classNames?: string;
}
const CHARACTER_LIMIT = 2200;

const TextEditor: FC<TextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Type your content here...',
  height = 300,
  classNames = '',
}) => {
  const [charCount, setCharCount] = useState(value.length);

  const handleContentChange = useCallback(
    (content: string) => {
      if (content.length <= CHARACTER_LIMIT) {
        setCharCount(content.length);
        onChange(content);
      }
    },
    [onChange]
  );

  return (
    <div className={classNames}>
      <SunEditor
        placeholder={placeholder}
        setContents={value}
        height={`${height}px`}
        setOptions={{
          height: `${height}px !important`,
          defaultStyle:
            'font-family: Work Sans; font-size: 12px; color: #000; background-color: #f5f5f5;',
          buttonList: [
            ['bold', 'italic', 'underline', 'strike'],
            ['font', 'fontSize', 'formatBlock'],
            // ['align', 'list', 'link'],
            // ['image', 'video'],
          ],
        }}
        onChange={handleContentChange}
      />
      <div className="absolute bottom-2 right-4 text-gray-500 text-sm">
        {charCount}/{CHARACTER_LIMIT} C
      </div>
    </div>
  );
};

export default TextEditor;
