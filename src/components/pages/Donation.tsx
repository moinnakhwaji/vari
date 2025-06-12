import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import qrcode from "../../assets/qrcode.jpg";
import video from "../../assets/video.mp4"

export function Donation() {
  return (
    <section id="donation" className="relative py-16 px-4 min-h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Support Our Cause
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Your donation helps us make a positive impact in the community through Utkarsh Global Foundation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* QR Code Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-gray-800">
                Scan to Donate
              </CardTitle>
              <p className="text-gray-600">Use any UPI app to scan and donate</p>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="p-6 bg-white rounded-2xl shadow-inner">
                <img src={qrcode} alt="bank detail" className="w-64 h-64 rounded-xl shadow-lg object-cover" />
              </div>
            </CardContent>
          </Card>

          {/* Bank Details Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🏦</span>
                Bank Transfer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">Bank:</span>
                    <span className="text-right">AU BANK</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">Beneficiary:</span>
                    <span className="text-right">Utkarsh Global Foundation</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">Account No:</span>
                    <span className="text-right font-mono">2301253154610956</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">IFSC Code:</span>
                    <span className="text-right font-mono">AUBL0002531</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">MICR Code:</span>
                    <span className="text-right font-mono">400765016</span>
                  </div>
                  
                  <div className="flex justify-between items-start py-2">
                    <span className="font-medium">Branch:</span>
                    <span className="text-right">Mulund West</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">💡</span>
                  <div>
                    <p className="text-amber-800 font-medium text-sm">Important Note</p>
                    <p className="text-amber-700 text-sm mt-1">
                      Please save the transaction receipt for your records. All donations are gratefully received and help us continue our mission.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thank You Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 shadow-xl bg-opacity-90 backdrop-blur-sm">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">🙏 Thank You for Your Support</h3>
              <p className="text-lg opacity-90">
                Every donation, big or small, makes a meaningful difference in the lives we touch.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}