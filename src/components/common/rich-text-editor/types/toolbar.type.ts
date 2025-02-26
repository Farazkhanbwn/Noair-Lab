export type ToolbarOptionType =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'unordered-list'
  | 'ordered-list'
  | 'emoji'
  | 'link'
  | 'code'
  | 'quote'
  | 'hashtag'
  | 'divider'
  | 'image';

export type ToolbarOptions = {
  classNames?: string | undefined;
  exlcudeToolbarOptions?: ToolbarOptionType[] | null | undefined;
  isCharacterCountPlugin?: boolean | undefined;
};
