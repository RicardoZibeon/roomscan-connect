import { Phone, MapPin, Wifi, Clock, ShoppingBag, MessageCircle, KeyRound, Car, Home, Info, Trash2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface HouseData {
  whatsappNumber: string;
  receptionPhone: string;
}

const HouseInfo = ({ houseData }: { houseData: HouseData }) => {
  const handleWhatsApp = () => {
    const cleanNumber = houseData.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${houseData.receptionPhone}`;
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-6">
          <h1 className="text-4xl font-bold text-foreground">Welcome to 8 Pikkewyn!</h1>
          <p className="text-muted-foreground">We're delighted to host you. Here are some key details for your stay:</p>
        </div>

        {/* Check-in/out Times */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Check-in & Check-out</h3>
              <p className="text-muted-foreground">Check in after 15h00</p>
              <p className="text-muted-foreground">Check out before 10h00</p>
            </div>
          </div>
        </Card>

        {/* Key Information */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <KeyRound className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Key Information</h3>
          </div>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Keys:</strong> You'll find them in the lockbox at the gate. The code is 0832.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">WiFi:</strong> Network: Cohen | Password: <span className="font-mono bg-secondary px-2 py-0.5 rounded text-foreground">Fairescape</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Blinds (Main Bedroom):</strong> When adjusting, hold the string in both hands to create tension.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Access:</strong> The downstairs area is blocked off.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Parking:</strong> Guests park inside the gate. The garage is not operational. I stay separately on the property and park outside.</span>
            </li>
          </ul>
        </Card>

        {/* Nearby Shops & Dining */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <ShoppingBag className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Nearby Shops & Dining</h3>
              <ul className="space-y-2">
                <li className="text-foreground font-semibold">Groceries:</li>
                <li className="text-muted-foreground flex items-center gap-2 pl-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  Seaside Village or Eden on the Bay
                </li>
                <li className="h-2" />
                <li className="text-foreground font-semibold">Mall:</li>
                <li className="text-muted-foreground flex items-center gap-2 pl-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  Table Bay Mall
                </li>
                <li className="h-2" />
                <li className="text-foreground font-semibold">Restaurants:</li>
                <li className="text-muted-foreground flex items-center gap-2 pl-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  Doodles & Blue Peter
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* House Rules & Practical Info */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">House Rules & Practical Info</h3>
          </div>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Check-out time:</strong> By 10 AM (please return the keys to the lockbox).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Smoking:</strong> Smoking is not allowed inside. You may smoke on the deck—ashtrays are provided.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Housekeeping:</strong> The house is not serviced during your stay.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Supplies:</strong> Black bags, toilet paper, and basic cleaning supplies are provided to get you started. Guests are responsible for topping up as needed.</span>
            </li>
          </ul>
        </Card>

        {/* Additional Amenities & Notes */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Additional Amenities & Notes</h3>
          </div>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Zap className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span><strong className="text-foreground">Hot water:</strong> If there has been load-shedding, the geyser may switch off. Kindly check the DB board—it must be set to "ON."</span>
            </li>
            <li className="flex items-start gap-2">
              <Trash2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span><strong className="text-foreground">Trash & recycling:</strong> If your stay includes a Monday, please place rubbish in the large black bins outside by 8 AM. Two bins are provided: one for recycling and one for general waste.</span>
            </li>
          </ul>
        </Card>

        {/* Contact Actions */}
        <div className="space-y-3">
          <p className="text-center text-muted-foreground">If you need anything, feel free to reach out.</p>
          
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat with us on WhatsApp
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-4 pb-8">
          Enjoy your stay!
        </div>
      </div>
    </div>
  );
};

export default HouseInfo;