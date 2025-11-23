import { useParams, Navigate, useSearchParams } from "react-router-dom";
import RoomInfo from "@/components/RoomInfo";
import { Card } from "@/components/ui/card";
import { ShieldAlert, QrCode } from "lucide-react";

// Room data with access codes - you can modify this information for each room
// IMPORTANT: Change these access codes to your own unique codes!
const roomsData = {
  "805": {
    roomNumber: "805",
    accessCode: "HOTEL805VIP",  // Change this to your own secret code
    keyLocation: "Reception desk on the ground floor, available 24/7",
    parkingBay: "Bay 12, Level 2 (marked with room number)",
    wifiPassword: "Hotel805Wifi",
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    nearbyPlaces: [
      "Central Mall - 5 minutes walk",
      "City Museum - 10 minutes walk",
      "Waterfront Restaurant - 3 minutes walk",
      "Coffee Corner Café - 2 minutes walk",
      "Pharmacy - 5 minutes walk"
    ],
    whatsappNumber: "1234567890", // Replace with actual number (format: country code + number, no + or spaces)
    receptionPhone: "+1 (234) 567-8900" // Replace with actual number
  },
  "810": {
    roomNumber: "810",
    accessCode: "HOTEL810VIP",  // Change this to your own secret code
    keyLocation: "Reception desk on the ground floor, available 24/7",
    parkingBay: "Bay 15, Level 2 (marked with room number)",
    wifiPassword: "Hotel810Wifi",
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    nearbyPlaces: [
      "Central Mall - 5 minutes walk",
      "City Museum - 10 minutes walk",
      "Waterfront Restaurant - 3 minutes walk",
      "Coffee Corner Café - 2 minutes walk",
      "Pharmacy - 5 minutes walk"
    ],
    whatsappNumber: "1234567890", // Replace with actual number
    receptionPhone: "+1 (234) 567-8900" // Replace with actual number
  },
  "815": {
    roomNumber: "815",
    accessCode: "HOTEL815VIP",  // Change this to your own secret code
    keyLocation: "Reception desk on the ground floor, available 24/7",
    parkingBay: "Bay 18, Level 2 (marked with room number)",
    wifiPassword: "Hotel815Wifi",
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    nearbyPlaces: [
      "Central Mall - 5 minutes walk",
      "City Museum - 10 minutes walk",
      "Waterfront Restaurant - 3 minutes walk",
      "Coffee Corner Café - 2 minutes walk",
      "Pharmacy - 5 minutes walk"
    ],
    whatsappNumber: "1234567890", // Replace with actual number
    receptionPhone: "+1 (234) 567-8900" // Replace with actual number
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

  return <RoomInfo roomData={roomData} />;
};

export default Room;
