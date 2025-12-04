import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Index = () => {
  const rooms = [
    { id: "805", name: "805", description: "1 Bedroom Apartment" },
    { id: "405", name: "405", description: "2 Bedroom Apartment" },
    { id: "815", name: "4BR House", description: "4 Bedroom House" }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <Building2 className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Hotel Room Directory
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your room to view important information about your stay
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          {rooms.map((room) => (
            <Link key={room.id} to={`/room/${room.id}`}>
              <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <div className="space-y-3">
                  <div className={`font-bold text-primary ${room.id === "815" ? "text-3xl" : "text-5xl"}`}>{room.name}</div>
                  <p className="text-muted-foreground">{room.description}</p>
                  <p className="text-sm text-accent">View Details →</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* QR Code Section */}
        <div className="pt-12">
          <Card className="p-8 bg-secondary">
            <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
              QR Code Access
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
              Each room has a unique QR code. Scan the code in your room to quickly access 
              your room's information page with WiFi details, parking location, and more.
            </p>
            <div className="flex justify-center">
              <Link to="/qr-codes">
                <Card className="p-4 hover:shadow-md transition-all cursor-pointer border-2 hover:border-accent">
                  <p className="text-sm text-accent font-semibold">View & Print QR Codes →</p>
                </Card>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
