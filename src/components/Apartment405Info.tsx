import { Wifi, Clock, MessageCircle, Building2, Zap, Info, Bath, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import apartmentBg from "@/assets/apartment-405-bg.jpeg";

interface ApartmentData {
  roomNumber: string;
  whatsappNumber: string;
}

const Apartment405Info = ({ apartmentData }: { apartmentData: ApartmentData }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${apartmentData.whatsappNumber.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${apartmentBg})` }}
      />
      <div className="fixed inset-0 bg-background/35" />
      
      {/* Content */}
      <div className="relative p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-6">
          <p className="text-muted-foreground">Do you need parking?</p>
          <h1 className="text-4xl font-bold text-foreground">Welcome to Apartment 405!</h1>
          <p className="text-muted-foreground">
            Your booking is under your name. If there is no one at reception, security will assist you. 
            You can collect your key and access tag from either reception or security.
          </p>
        </div>

        {/* Check-in/out */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Check-in & Check-out</h3>
              <p className="text-muted-foreground">Check-in: After 14h30</p>
              <p className="text-muted-foreground">Check-out: Before 10h00</p>
            </div>
          </div>
        </Card>

        {/* Building Info */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Apartment 405 Information</h3>
              <p className="text-muted-foreground font-medium mb-2">Floors:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">G:</span> Reception</li>
                <li><span className="font-medium text-foreground">M:</span> Rubbish disposal (if needed)</li>
                <li><span className="font-medium text-foreground">1:</span> Parking<br />
                  <span className="text-sm pl-4">The gym and spa are available at an extra cost.</span>
                </li>
                <li><span className="font-medium text-foreground">4:</span> Apartment</li>
                <li><span className="font-medium text-foreground">Rooftop Pool:</span> Use the service elevator by the staircase.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Parking */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Parking Bay</h3>
              <p className="text-foreground font-mono bg-secondary px-3 py-1.5 rounded inline-block">10 & 11</p>
            </div>
          </div>
        </Card>

        {/* WiFi */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Wifi className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">WiFi Details</h3>
              <p className="text-muted-foreground">Network: <span className="font-mono bg-secondary px-2 py-0.5 rounded text-foreground">HUAWEI_B535_4762</span></p>
              <p className="text-muted-foreground mt-1">Password: <span className="font-mono bg-secondary px-2 py-0.5 rounded text-foreground">GY2QRL914R0</span></p>
            </div>
          </div>
        </Card>

        {/* Extras */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Bath className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Extras (Optional)</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Cleaning: R250</li>
                <li>• Linen Change: R300</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                If you'd like me to connect the DSTV package, let me know. The TV in the lounge is a smart TV.
              </p>
            </div>
          </div>
        </Card>

        {/* Loadshedding Info */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Load Shedding Solution</h3>
              <p className="text-muted-foreground">
                A portable inverter is available to keep the TV and WiFi running and for charging small devices. 
                Please do not plug in high-powered devices like hairdryers, as this may damage the inverter.
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Notes */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-3">Additional Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You can switch on the AC at the DB board.</li>
                <li>• This apartment is privately owned. If you need anything, feel free to contact me.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <p className="text-muted-foreground text-center">
            <span className="font-medium text-foreground">Wishing you a wonderful stay!</span>
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
    </div>
  );
};

export default Apartment405Info;
