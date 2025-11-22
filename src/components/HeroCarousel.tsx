import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import heroResort from "@/assets/hero-resort.jpg";
import roomVilla from "@/assets/room-villa.jpg";
import attractionBeach from "@/assets/attraction-beach.jpg";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  const scrollToRooms = () => {
    const element = document.getElementById("rooms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const images = [
    {
      src: heroResort,
      alt: "Luxury infinity pool overlooking the ocean at Paradise Resort",
      title: "Your Tropical Paradise Awaits",
      subtitle: "Experience luxury in the heart of Koh Samui",
    },
    {
      src: roomVilla,
      alt: "Beachfront villa with ocean view",
      title: "Stunning Ocean Views",
      subtitle: "Wake up to the sound of waves",
    },
    {
      src: attractionBeach,
      alt: "Pristine beaches of Koh Samui",
      title: "Discover Paradise",
      subtitle: "Where luxury meets nature",
    },
  ];

  return (
    <section className="relative w-full h-screen">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-screen">
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-5xl md:text-7xl font-playfair font-bold text-background mb-4 drop-shadow-lg">
                    {image.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-background mb-8 drop-shadow-md">
                    {image.subtitle}
                  </p>
                  <Button
                    size="lg"
                    onClick={scrollToRooms}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  >
                    Explore Rooms
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
        <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
