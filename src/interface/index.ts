export interface LayoutProps {
  children: React.ReactNode;
}

export interface President {
  id: number;
  name: string;
  title?: string;
  imageUrl: string;
  description: string;
}