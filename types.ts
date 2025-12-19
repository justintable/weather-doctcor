
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface MealPlan {
  title: string;
  items: string[];
  tips: string;
}

export interface ArticleContent {
  sectionTitle: string;
  paragraphs: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  content: ArticleContent[];
  actionSteps: string[];
}

export enum AppTab {
  DASHBOARD = 'DASHBOARD',
  DIET = 'DIET',
  EXERCISE = 'EXERCISE',
  AI_CHAT = 'AI_CHAT',
  KNOWLEDGE = 'KNOWLEDGE'
}
