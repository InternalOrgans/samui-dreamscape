import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import RoomCard from "@/components/RoomCard";
import AttractionCard from "@/components/AttractionCard";
import ReviewCard from "@/components/ReviewCard";
import roomVilla from "@/assets/room-villa.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import attractionBuddha from "@/assets/attraction-buddha.jpg";
import attractionBeach from "@/assets/attraction-beach.jpg";
import attractionWaterfall from "@/assets/attraction-waterfall.jpg";
import restaurantFood from "@/assets/restaurant-food.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const rooms = [
    {
      image: roomVilla,
      title: "Beachfront Villa",
      description: "Luxurious beachfront accommodation with private terrace and ocean views",
      price: "$450",
      features: [
        "Ocean view",
        "Private terrace",
        "King size bed",
        "Mini bar",
        "Air conditioning",
      ],
    },
    {
      image: roomDeluxe,
      title: "Deluxe Garden Room",
      description: "Elegant room surrounded by tropical gardens with modern Thai design",
      price: "$280",
      features: [
        "Garden view",
        "Balcony",
        "King size bed",
        "Wooden accents",
        "Premium amenities",
      ],
    },
    {
      image: roomSuite,
      title: "Premium Suite",
      description: "Spacious suite with separate living area and serene garden views",
      price: "$350",
      features: [
        "Living area",
        "Garden view",
        "Premium furnishings",
        "Complimentary minibar",
        "Room service",
      ],
    },
  ];

  const attractions = [
    {
      image: attractionBuddha,
      title: "Big Buddha Temple",
      description: "Visit the iconic 12-meter golden Buddha statue, one of Koh Samui's most famous landmarks with breathtaking views.",
    },
    {
      image: attractionBeach,
      title: "Chaweng Beach",
      description: "Experience pristine white sand beaches and crystal-clear turquoise waters perfect for swimming and water sports.",
    },
    {
      image: attractionWaterfall,
      title: "Na Muang Waterfall",
      description: "Explore the lush jungle and natural pools at one of the island's most beautiful waterfalls.",
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      review: "Absolutely stunning resort! The staff were incredibly welcoming and the beachfront villa exceeded all expectations. Can't wait to return!",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      review: "Paradise on earth! The infinity pool, the food, the service - everything was perfect. Best vacation we've ever had.",
    },
    {
      name: "Emma Williams",
      location: "Sydney, Australia",
      rating: 5,
      review: "The most relaxing holiday. Beautiful rooms, amazing Thai cuisine at the restaurant, and the location is unbeatable.",
    },
  ];

  const menuItems = {
    appetizers: [
      { name: "Tom Yum Goong", description: "Spicy and sour soup with prawns", price: "$12" },
      { name: "Spring Rolls", description: "Fresh vegetables wrapped in rice paper", price: "$8" },
      { name: "Satay Chicken", description: "Grilled chicken skewers with peanut sauce", price: "$10" },
    ],
    mains: [
      { name: "Pad Thai", description: "Stir-fried rice noodles with prawns", price: "$18" },
      { name: "Green Curry", description: "Coconut curry with chicken and vegetables", price: "$16" },
      { name: "Massaman Curry", description: "Rich curry with beef and potatoes", price: "$20" },
      { name: "Grilled Sea Bass", description: "Fresh catch with Thai herbs", price: "$28" },
    ],
    cocktails: [
      { name: "Tropical Paradise", description: "Rum, mango, passion fruit, coconut", price: "$14" },
      { name: "Thai Sunset", description: "Vodka, lychee, lime, ginger", price: "$12" },
      { name: "Samui Breeze", description: "Gin, cucumber, mint, elderflower", price: "$13" },
      { name: "Coconut Mojito", description: "White rum, coconut water, lime, mint", price: "$12" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroCarousel />

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Our Luxury Rooms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of beautifully appointed rooms and villas, each designed for ultimate comfort and relaxation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Discover Koh Samui
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the stunning natural beauty and cultural treasures of our tropical island paradise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <AttractionCard key={index} {...attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Guest Reviews
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our guests have to say about their unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant & Menu Section */}
      <section id="restaurant" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Ocean View Restaurant
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Savor authentic Thai cuisine and tropical cocktails while enjoying stunning ocean views
            </p>
          </div>
          
          <div className="mb-12">
            <img
              src={restaurantFood}
              alt="Delicious Thai cuisine and tropical cocktails"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Appetizers */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                  Appetizers
                </h3>
                <div className="space-y-4">
                  {menuItems.appetizers.map((item, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <span className="text-primary font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main Courses */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                  Main Courses
                </h3>
                <div className="space-y-4">
                  {menuItems.mains.map((item, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <span className="text-primary font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cocktails */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                  Tropical Cocktails
                </h3>
                <div className="space-y-4">
                  {menuItems.cocktails.map((item, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <span className="text-primary font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
            Paradise Resort Koh Samui
          </h3>
          <p className="text-muted-foreground mb-4">
            Your tropical escape awaits in the heart of Thailand
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Paradise Resort. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
