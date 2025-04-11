export interface PostData {
  content: string;
  contentHtml?: string;
  contentJson?: string;
  category: string;
  postType: string;
  topic?: string[];
  files: Blob[];
}
