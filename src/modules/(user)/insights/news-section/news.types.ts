export interface NewsItem {
  id?: string;
  title?: string;
  description?: string;
  date?: string;
  newsId?: string;
  imageUrl?: string | null;
  viewAllLink?: boolean;
  viewAllTitle?: string;
  viewAllURL?: string;
}

export interface InsightsDatatem {
  section: string;
  id: string;
  items: NewsItem[];
}
