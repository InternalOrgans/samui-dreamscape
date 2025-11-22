import { Card, CardContent } from "@/components/ui/card";
import { Award, Leaf, Users, Star } from "lucide-react";

const AccoladesSection = () => {
  const accolades = [
    {
      icon: Award,
      title: "Thailand Tourism Excellence Award",
      year: "2023",
      description: "Recognized for outstanding service and guest satisfaction",
    },
    {
      icon: Star,
      title: "5-Star Luxury Resort Certification",
      year: "2022",
      description: "Awarded by Thai Hotel Association for premium hospitality standards",
    },
    {
      icon: Leaf,
      title: "Green Globe Eco-Resort Certification",
      year: "2023",
      description: "Certified for sustainable practices and environmental conservation",
    },
    {
      icon: Users,
      title: "Best Family Resort - Koh Samui",
      year: "2023",
      description: "Voted by TripAdvisor travelers for exceptional family experiences",
    },
  ];

  return (
    <section className="py-20 px-4 bg-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating our commitment to excellence in hospitality, sustainability, and guest experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accolades.map((accolade, index) => {
            const Icon = accolade.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-xs font-semibold text-primary mb-3">
                    {accolade.year}
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    {accolade.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {accolade.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccoladesSection;
