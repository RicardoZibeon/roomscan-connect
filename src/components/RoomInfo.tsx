import { Phone, MapPin, Wifi, Clock, ShoppingBag, MessageCircle, KeyRound, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface RoomData {
  roomNumber: string;
  keyLocation: string;
  parkingBay: string;
  wifiPassword: string;
  checkIn: string;
  checkOut: string;
  nearbyPlaces: string[];
  whatsappNumber: string;
  receptionPhone: string;
}

const RoomInfo = ({ roomData }: { roomData: RoomData }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${roomData.whatsappNumber}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${roomData.receptionPhone}`;
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-6">
          <h1 className="text-4xl font-bold text-foreground">Room {roomData.roomNumber}</h1>
          <p className="text-muted-foreground">Welcome to your stay</p>
        </div>

        {/* Key Information */}
        <Card className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <KeyRound className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Key Collection & Drop</h3>
              <p className="text-muted-foreground">{roomData.keyLocation}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Parking</h3>
              <p className="text-muted-foreground">{roomData.parkingBay}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Wifi className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">WiFi Password</h3>
              <p className="text-foreground font-mono bg-secondary px-3 py-1.5 rounded inline-block">
                {roomData.wifiPassword}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Check-in & Check-out</h3>
              <p className="text-muted-foreground">Check-in: {roomData.checkIn}</p>
              <p className="text-muted-foreground">Check-out: {roomData.checkOut}</p>
            </div>
          </div>
        </Card>

        {/* Nearby Places */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <ShoppingBag className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Nearby Shops & Attractions</h3>
              <ul className="space-y-2">
                {roomData.nearbyPlaces.map((place, index) => {
                  if (place === "") return <li key={index} className="h-2" />;
                  if (place.endsWith(":")) {
                    return (
                      <li key={index} className="text-foreground font-semibold pt-2 first:pt-0">
                        {place}
                      </li>
                    );
                  }
                  return (
                    <li key={index} className="text-muted-foreground flex items-center gap-2 pl-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                      {place}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Card>

        {/* Contact Actions */}
        <div className="space-y-3">
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat with us on WhatsApp
          </Button>

          <Button 
            onClick={handleCall}
            variant="outline"
            className="w-full"
            size="lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Reception: {roomData.receptionPhone}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-4 pb-8">
          Have a wonderful stay!
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
