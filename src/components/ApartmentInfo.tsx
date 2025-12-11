import { Wifi, Clock, MessageCircle, Building2, Zap, Info, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import apartmentBg from "@/assets/apartment-805-bg.jpeg";

interface ApartmentData {
  roomNumber: string;
  whatsappNumber: string;
}

const ApartmentInfo = ({ apartmentData }: { apartmentData: ApartmentData }) => {
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
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="relative p-4 md:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-3 pt-8 pb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Welcome to<br />Apartment 805!
            </h1>
            <p className="text-white/90 max-w-md mx-auto leading-relaxed drop-shadow">
              Your booking is under your name for Apartment 805.
              Please collect your key and access tag from reception or security on arrival.
            </p>
          </div>

          {/* Check-in/out */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-amber-100">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2 text-lg">Check-in & Check-out</h3>
                <p className="text-slate-600">Check-in: <span className="font-semibold text-slate-800">2pm</span></p>
                <p className="text-slate-600">Check-out: <span className="font-semibold text-slate-800">10am</span></p>
              </div>
            </div>
          </Card>

          {/* Building Info */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-blue-100">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Building Information</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">G:</span> Reception</li>
                  <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">M:</span> Rubbish disposal</li>
                  <li className="flex gap-2 flex-wrap"><span className="font-bold text-slate-800 min-w-[24px]">1:</span> 
                    <span>Parking (Bay 37), Gym & Spa <span className="text-sm text-slate-500">(extra charge)</span></span>
                  </li>
                  <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">8:</span> Your Apartment</li>
                  <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">🏊</span> Rooftop Pool – Use the service elevator by the staircase</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* WiFi */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-violet-100">
                <Wifi className="w-5 h-5 text-violet-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">WiFi Details</h3>
                <div className="space-y-2">
                  <p className="text-slate-600">Network: <span className="font-mono bg-slate-100 px-3 py-1 rounded-md text-slate-800 font-semibold">HUAWEI_57D6</span></p>
                  <p className="text-slate-600">Password: <span className="font-mono bg-slate-100 px-3 py-1 rounded-md text-slate-800 font-semibold">xwbvbue3</span></p>
                </div>
              </div>
            </div>
          </Card>

          {/* House Rules & Info */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-emerald-100">
                <Info className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">House Rules & Info</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• No Smoking inside the apartment</li>
                  <li>• Rubbish can be taken to Floor M</li>
                  <li>• <span className="font-semibold text-slate-800">AC:</span> Switch is near the kettle plug</li>
                  <li>• <span className="font-semibold text-slate-800">Heater:</span> Small electric heater provided – please switch off when leaving</li>
                  <li className="p-3 bg-slate-50 rounded-lg mt-2">
                    📺 Netflix is available on the main TV (can be moved to the bedroom). DSTV is available on request.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Cleaning & Linen */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-pink-100">
                <Bath className="w-5 h-5 text-pink-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Cleaning & Linen</h3>
                <p className="text-slate-600 mb-2">Available with 24-hour notice:</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li>• Cleaning: <span className="font-semibold text-slate-800">R250</span></li>
                  <li>• Linen Change: <span className="font-semibold text-slate-800">R400</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Loadshedding Info */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-yellow-100">
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Loadshedding Info</h3>
                <p className="text-slate-600 leading-relaxed">
                  A portable inverter powers the TV, Wi-Fi, and device charging.
                </p>
                <p className="text-amber-700 mt-3 p-3 bg-amber-50 rounded-lg font-medium">
                  ⚠️ Do not plug in high-power devices (hairdryer, iron, etc.)
                </p>
              </div>
            </div>
          </Card>

          {/* Footer Note */}
          <Card className="p-6 bg-gradient-to-r from-amber-500 to-orange-500 border-0 shadow-xl">
            <p className="text-white text-center">
              This apartment is privately owned.<br />
              If you need anything, feel free to contact me.<br /><br />
              <span className="text-lg font-semibold">✨ Wishing you a fantastic stay! ✨</span>
            </p>
          </Card>

          {/* Contact Actions */}
          <div className="space-y-3 pb-4">
            <Button 
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-green-500/30"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;