export type Language = 'id' | 'en' | 'ar';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
  fullDesc: string;
  features: string[];
  packages?: {
    name: string;
    details: string;
    target: string;
  }[];
  process: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
  content: string[];
}

export interface ContactFormState {
  fullName: string;
  whatsapp: string;
  email: string;
  service: string;
  notes: string;
}
