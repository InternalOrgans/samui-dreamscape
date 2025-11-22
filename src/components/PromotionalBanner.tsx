import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Sparkles } from "lucide-react";

const PromotionalBanner = () => {
  const { convertPrice } = useCurrency();

  const scrollToRooms = () => {
    const element = document.getElementById("rooms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Limited Time Offer</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
          Off-Season Paradise Special
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Enjoy up to 35% off on all room types during our off-season months (May - October)
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Deluxe Garden Room from</p>
            <p className="text-3xl font-playfair font-bold text-primary">
              {convertPrice(182)}
              <span className="text-base text-muted-foreground">/night</span>
            </p>
            <p className="text-xs text-muted-foreground line-through">{convertPrice(280)}</p>
          </div>
          <div className="hidden sm:block text-2xl text-muted-foreground">•</div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Beachfront Villa from</p>
            <p className="text-3xl font-playfair font-bold text-primary">
              {convertPrice(293)}
              <span className="text-base text-muted-foreground">/night</span>
            </p>
            <p className="text-xs text-muted-foreground line-through">{convertPrice(450)}</p>
          </div>
        </div>
        <Button 
          size="lg" 
          onClick={scrollToRooms}
          className="bg-primary hover:bg-primary/90 text-lg px-8"
        >
          Book Your Escape Now
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          *Valid for bookings made through December 2024. Subject to availability.
        </p>
      </div>
    </section>
  );
};

export default PromotionalBanner;
