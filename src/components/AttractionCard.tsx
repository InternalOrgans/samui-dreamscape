import { Card, CardContent } from "@/components/ui/card";

interface AttractionCardProps {
  image: string;
  title: string;
  description: string;
}

const AttractionCard = ({ image, title, description }: AttractionCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AttractionCard;
