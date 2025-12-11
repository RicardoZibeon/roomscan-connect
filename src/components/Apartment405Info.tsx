import { useState, useEffect } from "react";
import { Wifi, Clock, MessageCircle, Building2, Zap, Info, Bath, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import apartmentBg1 from "@/assets/apartment-405-bg.jpeg";
import apartmentBg2 from "@/assets/apartment-405-bg-2.jpeg";
import apartmentBg3 from "@/assets/apartment-405-bg-3.jpeg";
import apartmentBg4 from "@/assets/apartment-405-bg-4.jpeg";

const backgroundImages = [apartmentBg1, apartmentBg2, apartmentBg3, apartmentBg4];

interface ApartmentData {
  roomNumber: string;
  whatsappNumber: string;
}

const Apartment405Info = ({ apartmentData }: { apartmentData: ApartmentData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${apartmentData.whatsappNumber.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Images with Crossfade */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="relative p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 pt-8 pb-4">
          <p className="text-amber-200 font-medium tracking-wide uppercase text-sm">Do you need parking?</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Welcome to<br />Apartment 405!
          </h1>
          <p className="text-white/90 max-w-md mx-auto leading-relaxed drop-shadow">
            Your booking is under your name. If there is no one at reception, security will assist you. 
            You can collect your key and access tag from either reception or security.
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
              <p className="text-slate-600">Check-in: <span className="font-semibold text-slate-800">After 14h30</span></p>
              <p className="text-slate-600">Check-out: <span className="font-semibold text-slate-800">Before 10h00</span></p>
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
              <p className="text-slate-600 font-medium mb-3">Floors:</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">G:</span> Reception</li>
                <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">M:</span> Rubbish disposal (if needed)</li>
                <li className="flex gap-2 flex-wrap"><span className="font-bold text-slate-800 min-w-[24px]">1:</span> 
                  <span>Parking <span className="text-sm text-slate-500 block">The gym and spa are available at an extra cost.</span></span>
                </li>
                <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">4:</span> Your Apartment</li>
                <li className="flex gap-2"><span className="font-bold text-slate-800 min-w-[24px]">🏊</span> Rooftop Pool – Use the service elevator by the staircase</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Parking */}
        <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-full bg-emerald-100">
              <Car className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2 text-lg">Parking Bay</h3>
              <p className="text-slate-800 font-mono text-xl bg-emerald-100 px-4 py-2 rounded-lg inline-block font-bold">10 & 11</p>
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
                <p className="text-slate-600">Network: <span className="font-mono bg-slate-100 px-3 py-1 rounded-md text-slate-800 font-semibold">HUAWEI_B535_4762</span></p>
                <p className="text-slate-600">Password: <span className="font-mono bg-slate-100 px-3 py-1 rounded-md text-slate-800 font-semibold">GY2QRL914R0</span></p>
              </div>
            </div>
          </div>
        </Card>

        {/* Extras */}
        <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-full bg-pink-100">
              <Bath className="w-5 h-5 text-pink-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Extras (Optional)</h3>
              <ul className="space-y-1.5 text-slate-600">
                <li>• Cleaning: <span className="font-semibold text-slate-800">R250</span></li>
                <li>• Linen Change: <span className="font-semibold text-slate-800">R300</span></li>
              </ul>
              <p className="text-slate-600 mt-4 p-3 bg-slate-50 rounded-lg">
                💡 If you'd like me to connect the DSTV package, let me know. The TV in the lounge is a smart TV.
              </p>
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
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Load Shedding Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                A portable inverter is available to keep the TV and WiFi running and for charging small devices.
              </p>
              <p className="text-amber-700 mt-3 p-3 bg-amber-50 rounded-lg font-medium">
                ⚠️ Please do not plug in high-powered devices like hairdryers, as this may damage the inverter.
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Notes */}
        <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-full bg-cyan-100">
              <Info className="w-5 h-5 text-cyan-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Additional Notes</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• You can switch on the AC at the DB board.</li>
                <li>• This apartment is privately owned. If you need anything, feel free to contact me.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <Card className="p-6 bg-gradient-to-r from-amber-500 to-orange-500 border-0 shadow-xl">
          <p className="text-white text-center text-lg font-semibold">
            ✨ Wishing you a wonderful stay! ✨
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

export default Apartment405Info;