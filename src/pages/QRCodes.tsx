import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";

const QRCodes = () => {
  const qrRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // IMPORTANT: Update YOUR_PUBLISHED_URL to your live site URL (e.g., https://yoursite.lovable.app)
  // Get this from the Publish dialog - this ensures QR codes work without login
  const BASE_URL = "YOUR_PUBLISHED_URL"; // ⚠️ UPDATE THIS!
  
  // IMPORTANT: Update these access codes to match the ones in src/pages/Room.tsx
  const rooms = [
    { id: "805", url: BASE_URL + "/room/805?code=HOTEL805VIP" },
    { id: "810", url: BASE_URL + "/room/810?code=HOTEL810VIP" },
    { id: "815", url: BASE_URL + "/room/815?code=HOTEL815VIP" }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = (roomId: string) => {
    const qrDiv = qrRefs.current[roomId];
    if (!qrDiv) return;

    const svg = qrDiv.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = 1024;
    canvas.height = 1024;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 1024, 1024);
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `room-${roomId}-qr.png`;
          link.click();
          URL.revokeObjectURL(url);
        }
      });
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
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
                <p className="text-sm text-muted-foreground">Scan for room information</p>
              </div>
              
              <div 
                className="flex justify-center bg-white p-4 rounded-lg"
                ref={(el) => qrRefs.current[room.id] = el}
              >
                <QRCodeSVG 
                  value={room.url}
                  size={256}
                  level="H"
                  includeMargin={true}
                />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">Room {room.id}</h2>
              </div>

              <div className="space-y-2 no-print">
                <p className="text-xs text-muted-foreground break-all">
                  {room.url}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownload(room.id)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PNG
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="p-6 bg-secondary no-print">
          <h3 className="font-semibold text-foreground mb-3">🔒 Security Notice</h3>
          <div className="space-y-4 text-sm">
            <div className="bg-accent/10 border border-accent/20 rounded p-3">
              <p className="text-foreground font-semibold mb-2">🔐 Access Codes Protected</p>
              <p className="text-muted-foreground">
                Each QR code contains a unique access code. Room information is only visible when scanned with the correct QR code. Direct URL access without the code will be denied.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">How to Use:</h4>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Print these QR codes or download them individually</li>
                <li>Place each QR code in the corresponding room in a visible location</li>
                <li>Guests scan the QR code to access their room's information securely</li>
                <li>To change access codes, update both files: <code className="bg-background px-1.5 py-0.5 rounded text-xs">src/pages/Room.tsx</code> and <code className="bg-background px-1.5 py-0.5 rounded text-xs">src/pages/QRCodes.tsx</code></li>
              </ol>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded p-3">
              <p className="text-destructive font-semibold mb-1">⚠️ Important</p>
              <p className="text-muted-foreground">
                Keep these QR codes private. Anyone with access to these codes can view the room information. Regenerate codes if compromised.
              </p>
            </div>
          </div>
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
