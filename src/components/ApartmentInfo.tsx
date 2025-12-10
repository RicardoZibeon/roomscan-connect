import { Wifi, Clock, MessageCircle, KeyRound, Car, Building2, Zap, Tv, Trash2, Info, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ApartmentData {
  roomNumber: string;
  whatsappNumber: string;
}

const ApartmentInfo = ({ apartmentData }: { apartmentData: ApartmentData }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${apartmentData.whatsappNumber.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-6">
          <h1 className="text-4xl font-bold text-foreground">Welcome to Apartment 805!</h1>
          <p className="text-muted-foreground">Your booking is under your name for Apartment 805.</p>
          <p className="text-muted-foreground">Please collect your key and access tag from reception or security on arrival. And drop off</p>
        </div>

        {/* Check-in/out */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Check-in & Check-out</h3>
              <p className="text-muted-foreground">Check-in: 2pm</p>
              <p className="text-muted-foreground">Check-out: 10am</p>
            </div>
          </div>
        </Card>

        {/* Building Info */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Building Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">G</span> – Reception</li>
                <li><span className="font-medium text-foreground">M</span> – Rubbish disposal</li>
                <li><span className="font-medium text-foreground">1</span> – Parking (Bay 37), Gym & Spa (extra charge)</li>
                <li><span className="font-medium text-foreground">8</span> – Your Apartment</li>
                <li><span className="font-medium text-foreground">Rooftop Pool</span> – Use the service elevator by the staircase</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* WiFi */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Wifi className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Wi-Fi</h3>
              <p className="text-muted-foreground">Network: <span className="font-mono bg-secondary px-2 py-0.5 rounded text-foreground">HUAWEI_57D6</span></p>
              <p className="text-muted-foreground mt-1">Password: <span className="font-mono bg-secondary px-2 py-0.5 rounded text-foreground">xwbvbue3</span></p>
            </div>
          </div>
        </Card>

        {/* House Rules & Info */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">House Rules & Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• No Smoking inside the apartment</li>
                <li>• Rubbish can be taken to Floor M</li>
                <li>• <span className="font-medium text-foreground">AC:</span> Switch is near the kettle plug</li>
                <li>• <span className="font-medium text-foreground">Heater:</span> Small electric heater provided – please switch off when leaving the apartment</li>
                <li>• Netflix is available on the main TV (can be moved to the bedroom)</li>
                <li>• DSTV is available on request</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Cleaning & Linen */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Bath className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Cleaning & Linen</h3>
              <p className="text-muted-foreground mb-2">Available with 24-hour notice:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Cleaning: R250</li>
                <li>• Linen Change: R400</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Loadshedding Info */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Loadshedding Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• A portable inverter powers the TV, Wi-Fi, and device charging</li>
                <li>• Do not plug in high-power devices (hairdryer, iron, etc.)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <Card className="p-6 bg-secondary/50">
          <p className="text-muted-foreground text-center">
            This apartment is privately owned.<br />
            If you need anything, feel free to contact me.<br /><br />
            <span className="font-medium text-foreground">Wishing you a fantastic stay!</span>
          </p>
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
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-4 pb-8">
          Have a wonderful stay!
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
