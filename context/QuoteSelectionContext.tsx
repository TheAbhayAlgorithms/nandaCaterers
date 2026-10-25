"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface QuoteSelectionContextType {
  selectedDishes: string[];
  addDish: (dishName: string) => void;
  removeDish: (dishName: string) => void;
  toggleDish: (dishName: string) => void;
  isDishSelected: (dishName: string) => boolean;
  clearSelection: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  isQuoteSheetOpen: boolean;
  setIsQuoteSheetOpen: (open: boolean) => void;
  preselectedService: string;
  openQuoteSheet: (service?: string) => void;
}

const QuoteSelectionContext = createContext<QuoteSelectionContextType | undefined>(undefined);

const STORAGE_KEY = "nanda_caterers_selected_dishes";

export function QuoteSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isQuoteSheetOpen, setIsQuoteSheetOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>("Wedding");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSelectedDishes(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access issues handled gracefully
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedDishes));
    } catch {
      // ignore
    }
  }, [selectedDishes, isMounted]);

  const addDish = (dishName: string) => {
    setSelectedDishes((prev) => (prev.includes(dishName) ? prev : [...prev, dishName]));
  };

  const removeDish = (dishName: string) => {
    setSelectedDishes((prev) => prev.filter((d) => d !== dishName));
  };

  const toggleDish = (dishName: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishName) ? prev.filter((d) => d !== dishName) : [...prev, dishName]
    );
  };

  const isDishSelected = (dishName: string) => selectedDishes.includes(dishName);

  const clearSelection = () => setSelectedDishes([]);

  const openQuoteSheet = (service?: string) => {
    if (service) setPreselectedService(service);
    setIsQuoteSheetOpen(true);
  };

  return (
    <QuoteSelectionContext.Provider
      value={{
        selectedDishes,
        addDish,
        removeDish,
        toggleDish,
        isDishSelected,
        clearSelection,
        isDrawerOpen,
        setIsDrawerOpen,
        isQuoteSheetOpen,
        setIsQuoteSheetOpen,
        preselectedService,
        openQuoteSheet,
      }}
    >
      {children}
    </QuoteSelectionContext.Provider>
  );
}

export function useQuoteSelection() {
  const context = useContext(QuoteSelectionContext);
  if (!context) {
    throw new Error("useQuoteSelection must be used within a QuoteSelectionProvider");
  }
  return context;
}
