import { createContext, useContext, useState, ReactNode } from "react";

type Currency = "USD" | "THB";

interface CurrencyContextType {
  currency: Currency;
  toggleCurrency: () => void;
  convertPrice: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const EXCHANGE_RATE = 35; // 1 USD = 35 THB (approximate)

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "THB" : "USD"));
  };

  const convertPrice = (usdPrice: number): string => {
    if (currency === "USD") {
      return `$${usdPrice}`;
    }
    return `฿${Math.round(usdPrice * EXCHANGE_RATE)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
};
