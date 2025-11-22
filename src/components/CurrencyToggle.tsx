import { useCurrency } from "@/contexts/CurrencyContext";
import { Button } from "@/components/ui/button";

const CurrencyToggle = () => {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleCurrency}
      className="font-semibold"
    >
      {currency === "USD" ? "$ USD" : "฿ THB"}
    </Button>
  );
};

export default CurrencyToggle;
