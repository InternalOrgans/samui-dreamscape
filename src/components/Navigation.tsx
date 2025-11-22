import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CurrencyToggle from "@/components/CurrencyToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-playfair font-bold text-primary">
            Paradise Resort
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("attractions")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Attractions
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("restaurant")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Restaurant
            </button>
            <CurrencyToggle />
            <Button
              onClick={() => scrollToSection("rooms")}
              className="bg-primary hover:bg-primary/90"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("attractions")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Attractions
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("restaurant")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Restaurant
            </button>
            <CurrencyToggle />
            <Button
              onClick={() => scrollToSection("rooms")}
              className="bg-primary hover:bg-primary/90 w-full"
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
