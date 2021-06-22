export interface MetaEmbedProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  imageUrl?: string;
  includeTwitter?: boolean;
}

export interface UrlDataProps {
  [key: string]: string | number | undefined | null;
}
