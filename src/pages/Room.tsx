import { useParams, Navigate, useSearchParams } from "react-router-dom";
import RoomInfo from "@/components/RoomInfo";
import HouseInfo from "@/components/HouseInfo";
import ApartmentInfo from "@/components/ApartmentInfo";
import { Card } from "@/components/ui/card";
import { ShieldAlert, QrCode } from "lucide-react";

// Room data with access codes - you can modify this information for each room
// IMPORTANT: Change these access codes to your own unique codes!
const roomsData = {
  "805": {
    roomNumber: "805",
    accessCode: "HOTEL805VIP",
    isApartment: true,
    whatsappNumber: "+27 83 282 3691",
    receptionPhone: "+27 83 282 3691"
  },
  "405": {
    roomNumber: "405",
    accessCode: "HOTEL405VIP",
    keyLocation: "Reception desk on the ground floor, available 24/7",
    parkingBay: "Bay 15, Level 2 (marked with room number)",
    wifiPassword: "Hotel405Wifi",
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    nearbyPlaces: [
      "Restaurants:",
      "Giovanni's",
      "Shift Espresso Bar",
      "Hudson's",
      "91",
      "",
      "Groceries:",
      "Woolworths",
      "Spar",
      "V&A Waterfront 10min walk",
      "",
      "1.7km from Mouille Point beach",
      "5min walk to Cpt Stadium"
    ],
    whatsappNumber: "+27 83 282 3691",
    receptionPhone: "+27 83 282 3691"
  },
  "815": {
    roomNumber: "815",
    accessCode: "HOTEL815VIP",
    isHouse: true,
    whatsappNumber: "+27 83 282 3691",
    receptionPhone: "+27 83 282 3691"
  }
};

const Room = () => {
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const providedCode = searchParams.get('code');
  
  // Check if room exists
  if (!roomId || !(roomId in roomsData)) {
    return <Navigate to="/" replace />;
  }

  const roomData = roomsData[roomId as keyof typeof roomsData];

  // Check if access code is valid
  const isAuthorized = providedCode === roomData.accessCode;

  // If not authorized, show access denied message
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
              <ShieldAlert className="w-10 h-10 text-destructive" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-foreground">Access Restricted</h1>
            <p className="text-muted-foreground">
              This room's information is protected. Please scan the QR code provided in your room to access the details.
            </p>
          </div>

          <div className="pt-4">
            <div className="flex justify-center mb-4">
              <QrCode className="w-16 h-16 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              The QR code can be found in Room {roomData.roomNumber}
            </p>
          </div>

          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              Need assistance? Contact hotel reception
            </p>
          </div>
        </Card>
      </div>
    );
  }

  // Render appropriate component based on property type
  if ('isHouse' in roomData && roomData.isHouse) {
    return <HouseInfo houseData={roomData} />;
  }

  if ('isApartment' in roomData && roomData.isApartment) {
    return <ApartmentInfo apartmentData={roomData} />;
  }

  return <RoomInfo roomData={roomData as any} />;
};

export default Room;
