import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Users, Clock } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const RestaurantReservation = () => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const handleReservation = () => {
    if (!date || !timeSlot || !name || !email) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Restaurant reservation confirmed!");
    setDate(undefined);
    setTimeSlot("");
    setGuests("2");
    setName("");
    setEmail("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Reserve a Table
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">Restaurant Reservation</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="res-name">Full Name</Label>
            <Input
              id="res-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="res-email">Email</Label>
            <Input
              id="res-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label>Reservation Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label>Time Slot</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Select time" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="res-guests">Number of Guests</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="res-guests"
                type="number"
                min="1"
                max="12"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
        <Button onClick={handleReservation} className="w-full bg-primary hover:bg-primary/90">
          Confirm Reservation
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RestaurantReservation;
