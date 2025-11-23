import { useParams, Navigate } from "react-router-dom";
import RoomInfo from "@/components/RoomInfo";

// Room data - you can modify this information for each room
const roomsData = {
  "805": {
    roomNumber: "805",
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
  
  // Check if room exists
  if (!roomId || !(roomId in roomsData)) {
    return <Navigate to="/" replace />;
  }

  const roomData = roomsData[roomId as keyof typeof roomsData];

  return <RoomInfo roomData={roomData} />;
};

export default Room;
