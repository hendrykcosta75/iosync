import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  delay?: number;
}
