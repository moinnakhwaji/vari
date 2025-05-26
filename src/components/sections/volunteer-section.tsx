import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function VolunteerSection() {
  return (
    <section id="volunteer" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            There are many ways you can support the Utkarsh Environment Wari campaign. Join us in making a difference!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-green-600 transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Donate</CardTitle>
              <CardDescription>Support our environmental initiatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Fund tree plantation activities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Support environmental education</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Help provide eco-friendly materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Sponsor awareness campaigns</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Donate Now</Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-blue-600 transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Volunteer</CardTitle>
              <CardDescription>Join our team of dedicated volunteers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Participate in tree planting drives</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Help with cleanup activities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Assist in workshops and awareness sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Walk with us during the pilgrimage</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Register as Volunteer</Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-amber-600 transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Spread the Word</CardTitle>
              <CardDescription>Help us reach more people</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span>Share our campaign on social media</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span>Invite friends and family to participate</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span>Organize awareness events in your community</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span>Become an environmental ambassador</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Share Campaign</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or want to get involved? Reach out to us directly and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}