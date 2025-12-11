import { useState, useEffect } from "react";
import { MapPin, Wifi, Clock, ShoppingBag, MessageCircle, KeyRound, Car, Home, Info, Trash2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import houseBg1 from "@/assets/house-bg.jpeg";
import houseBg2 from "@/assets/house-bg-2.jpeg";
import houseBg3 from "@/assets/house-bg-3.jpeg";
import houseBg4 from "@/assets/house-bg-4.jpeg";
import houseBg5 from "@/assets/house-bg-5.jpeg";

const backgroundImages = [houseBg1, houseBg2, houseBg3, houseBg4, houseBg5];

interface HouseData {
  whatsappNumber: string;
  receptionPhone: string;
}

const HouseInfo = ({ houseData }: { houseData: HouseData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    const cleanNumber = houseData.whatsappNumber.replace(/\s+/g, '').replace('+', '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
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
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Welcome to<br />8 Pikkewyn!
            </h1>
            <p className="text-white/90 max-w-md mx-auto leading-relaxed drop-shadow">
              We're delighted to host you. Here are some key details for your stay:
            </p>
          </div>

          {/* Check-in/out Times */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-amber-100">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2 text-lg">Check-in & Check-out</h3>
                <p className="text-slate-600">Check in: <span className="font-semibold text-slate-800">After 15h00</span></p>
                <p className="text-slate-600">Check out: <span className="font-semibold text-slate-800">Before 10h00</span></p>
              </div>
            </div>
          </Card>

          {/* Key Information */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-blue-100">
                <KeyRound className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Key Information</h3>
            </div>
            
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-slate-800">Keys:</strong> You'll find them in the lockbox at the gate. The code is <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-800 font-semibold">0832</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-slate-800">WiFi:</strong> Network: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-800 font-semibold">Cohen</span> | Password: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-800 font-semibold">Fairescape</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-slate-800">Blinds (Main Bedroom):</strong> When adjusting, hold the string in both hands to create tension.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-slate-800">Access:</strong> The downstairs area is blocked off.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-slate-800">Parking:</strong> Guests park inside the gate. The garage is not operational. I stay separately on the property and park outside.</span>
              </li>
            </ul>
          </Card>

          {/* Nearby Shops & Dining */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-emerald-100">
                <ShoppingBag className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-4 text-lg">Nearby Shops & Dining</h3>
                <ul className="space-y-3">
                  <li className="text-slate-800 font-semibold">Groceries:</li>
                  <li className="text-slate-600 flex items-center gap-2 pl-2">
                    <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    Seaside Village or Eden on the Bay
                  </li>
                  <li className="h-2" />
                  <li className="text-slate-800 font-semibold">Mall:</li>
                  <li className="text-slate-600 flex items-center gap-2 pl-2">
                    <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    Table Bay Mall
                  </li>
                  <li className="h-2" />
                  <li className="text-slate-800 font-semibold">Restaurants:</li>
                  <li className="text-slate-600 flex items-center gap-2 pl-2">
                    <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    Doodles & Blue Peter
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* House Rules & Practical Info */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-violet-100">
                <Home className="w-5 h-5 text-violet-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">House Rules & Practical Info</h3>
            </div>
            
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-violet-500 font-bold">•</span>
                <span><strong className="text-slate-800">Check-out time:</strong> By 10 AM (please return the keys to the lockbox).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 font-bold">•</span>
                <span><strong className="text-slate-800">Smoking:</strong> Smoking is not allowed inside. You may smoke on the deck—ashtrays are provided.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 font-bold">•</span>
                <span><strong className="text-slate-800">Housekeeping:</strong> The house is not serviced during your stay.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 font-bold">•</span>
                <span><strong className="text-slate-800">Supplies:</strong> Black bags, toilet paper, and basic cleaning supplies are provided to get you started. Guests are responsible for topping up as needed.</span>
              </li>
            </ul>
          </Card>

          {/* Additional Amenities & Notes */}
          <Card className="p-6 bg-white/95 backdrop-blur-md border-0 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-cyan-100">
                <Info className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Additional Amenities & Notes</h3>
            </div>
            
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-yellow-100 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-yellow-600" />
                </div>
                <span><strong className="text-slate-800">Hot water:</strong> If there has been load-shedding, the geyser may switch off. Kindly check the DB board—it must be set to "ON."</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-pink-100 mt-0.5">
                  <Trash2 className="w-3.5 h-3.5 text-pink-600" />
                </div>
                <span><strong className="text-slate-800">Trash & recycling:</strong> If your stay includes a Monday, please place rubbish in the large black bins outside by 8 AM. Two bins are provided: one for recycling and one for general waste.</span>
              </li>
            </ul>
          </Card>

          {/* Footer Note */}
          <Card className="p-6 bg-gradient-to-r from-amber-500 to-orange-500 border-0 shadow-xl">
            <p className="text-white text-center text-lg font-semibold">
              ✨ Enjoy your stay! ✨
            </p>
          </Card>

          {/* Contact Actions */}
          <div className="space-y-3 pb-4">
            <p className="text-center text-white/90 drop-shadow">If you need anything, feel free to reach out.</p>
            
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

export default HouseInfo;