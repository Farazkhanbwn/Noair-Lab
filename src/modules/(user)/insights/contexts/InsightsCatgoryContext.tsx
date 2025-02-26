'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Category = {
  id: string;
  name: string;
};

interface InsightsCategoryContextType {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const InsightsCategoryContext = createContext<
  InsightsCategoryContextType | undefined
>(undefined);

export function InsightsCategoryProvider({
  children,
  categories,
}: {
  children: ReactNode;
  categories: Category[];
}) {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  return (
    <InsightsCategoryContext.Provider
      value={{ activeCategory, setActiveCategory }}
    >
      {children}
    </InsightsCategoryContext.Provider>
  );
}

export function useInsightsCategory() {
  const context = useContext(InsightsCategoryContext);
  if (!context) {
    throw new Error(
      'useInsightsCategory must be used within an InsightsCategoryProvider'
    );
  }
  return context;
}
