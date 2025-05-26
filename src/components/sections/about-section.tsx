import { Leaf, Globe, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Utkarsh Environment Wari</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A collaborative effort to promote environmental awareness during the traditional Pandharpur Wari pilgrimage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="transition-all hover:shadow-lg border-t-4 border-t-green-600">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Utkarsh Environment Wari combines the spiritual tradition of the annual Pandharpur Wari with environmental awareness. Working in collaboration with government bodies, we aim to create lasting impact through education and action during this significant pilgrimage.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg border-t-4 border-t-blue-600">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Campaign Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our campaign focuses on promoting plastic-free pilgrimage routes, tree plantation, water conservation, and sustainable practices. Through the Wari, we reach thousands of pilgrims and local communities, spreading awareness about critical environmental issues.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg border-t-4 border-t-amber-600">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Awareness Dindi 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Awareness Dindi is a special group within the Wari that focuses specifically on environmental education. This year's route covers over 250 kilometers, passing through 15 towns and villages, with thousands of participants joining our cause.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
              <p className="mb-6 text-muted-foreground">
                Since our inception, Utkarsh Environment Wari has made significant strides in environmental conservation and awareness. We've planted thousands of trees, conducted cleanup drives along the pilgrimage route, and educated countless pilgrims about sustainable practices.
              </p>
              <p className="text-muted-foreground">
                Working with local communities and government bodies, we've implemented lasting changes that continue to benefit both the environment and the communities along the Wari route.
              </p>
            </div>
            <div className="bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('https://images.pexels.com/photos/5412477/pexels-photo-5412477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}