import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Join us for these important events as part of the Utkarsh Environment Wari 2025 campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5499829/pexels-photo-5499829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
            <CardHeader>
              <CardTitle>Wari Launch Ceremony</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>June 15, 2025</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Dehu, Maharashtra</span>
                </div>
                <p className="text-sm text-muted-foreground py-2">
                  Official launch of the Utkarsh Environment Wari with traditional ceremonies and environmental pledges.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
            <CardHeader>
              <CardTitle>Mass Tree Plantation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>June 20, 2025</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>7:00 AM - 11:00 AM</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Alandi, Maharashtra</span>
                </div>
                <p className="text-sm text-muted-foreground py-2">
                  Join thousands of warkaris in planting native tree species along the pilgrimage route.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/8471761/pexels-photo-8471761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
            <CardHeader>
              <CardTitle>Environmental Workshop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>June 25, 2025</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>4:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Pune, Maharashtra</span>
                </div>
                <p className="text-sm text-muted-foreground py-2">
                  Educational workshop on sustainable practices and environmental conservation for pilgrims and locals.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}