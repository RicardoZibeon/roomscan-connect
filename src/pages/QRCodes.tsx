import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

const QRCodes = () => {
  const rooms = [
    { id: "805", url: window.location.origin + "/room/805" },
    { id: "810", url: window.location.origin + "/room/810" },
    { id: "815", url: window.location.origin + "/room/815" }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8 py-8">
        {/* Header */}
        <div className="text-center space-y-4 no-print">
          <h1 className="text-4xl font-bold text-foreground">Room QR Codes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Print these QR codes and place them in each room. Guests can scan them to access room information.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print All QR Codes
            </Button>
          </div>
        </div>

        {/* QR Codes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="p-8 text-center space-y-6 print:break-inside-avoid">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">Room {room.id}</h2>
                <p className="text-sm text-muted-foreground">Scan for room information</p>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={`/qr-${room.id}.png`} 
                  alt={`QR Code for Room ${room.id}`}
                  className="w-64 h-64 object-contain"
                />
              </div>

              <div className="space-y-2 no-print">
                <p className="text-xs text-muted-foreground break-all">
                  {room.url}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href={`/qr-${room.id}.png`} download={`room-${room.id}-qr.png`}>
                    <Download className="w-4 h-4 mr-2" />
                    Download PNG
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="p-6 bg-secondary no-print">
          <h3 className="font-semibold text-foreground mb-3">How to Use</h3>
          <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
            <li>Print these QR codes or download them individually</li>
            <li>Place each QR code in the corresponding room in a visible location</li>
            <li>Guests can scan the QR code with their phone camera to access room information</li>
            <li>Update room information in the <code className="bg-background px-2 py-1 rounded">src/pages/Room.tsx</code> file</li>
          </ol>
        </Card>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default QRCodes;
