import { Check, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function VolunteerSection() {
  const handleGetInTouch = () => {
    window.location.href = "mailto:info@utkarshglobalfoundation.org";
  };

  return (
    <section id="volunteer" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Get Involved
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            There are many ways you can support the Utkarsh Environment Wari campaign. Join us in making a difference for our planet and future generations!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-t-4 border-t-green-600 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white dark:bg-gray-800 flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <CardTitle className="text-xl text-green-700 dark:text-green-400">Donate</CardTitle>
              <CardDescription className="text-base">Support our environmental initiatives and create lasting impact</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Fund tree plantation activities across communities</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Support environmental education programs</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Help provide eco-friendly materials and tools</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Sponsor awareness campaigns and events</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6 mt-auto">
                <a href="#donation" className="w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all hover:shadow-lg">
                Donate Now
              </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-blue-600 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white dark:bg-gray-800 flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <CardTitle className="text-xl text-blue-700 dark:text-blue-400">Volunteer</CardTitle>
              <CardDescription className="text-base">Join our team of dedicated environmental warriors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Participate in tree planting drives and green initiatives</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Help with cleanup activities and waste management</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Assist in workshops and awareness sessions</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Walk with us during the sacred pilgrimage</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6 mt-auto">
              <a className="w-full" href="https://docs.google.com/forms/d/e/1FAIpQLSeS5b0Rzm0HviW2xJmBZIlLJIaczP7i2TrzYnuq_h8Lc5NDdA/viewform?usp=sharing&ouid=112549842481522030881">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all hover:shadow-lg">
                Register as Volunteer
              </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-amber-600 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white dark:bg-gray-800 flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📢</span>
              </div>
              <CardTitle className="text-xl text-amber-700 dark:text-amber-400">Spread the Word</CardTitle>
              <CardDescription className="text-base">Help us reach more hearts and minds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-amber-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Share our campaign on social media platforms</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-amber-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Invite friends and family to join the movement</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-amber-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Organize awareness events in your community</span>
                </li>
                <li className="flex items-start group">
                  <Check className="h-5 w-5 text-amber-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">Become an environmental ambassador</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6 mt-auto">
              <a href="https://www.instagram.com/ugf.in/?hl=en" className="text-gray-300 hover:text-green-500 w-full">
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 transition-all hover:shadow-lg">
                Share Campaign
              </Button>
              </a>
            </CardFooter>
          </Card>
        </div>



<section id="contact">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl overflow-hidden border border-green-100 dark:border-gray-600">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Have questions or want to get involved? Reach out to us directly and we'll get back to you as soon as possible. Together, we can make a difference!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-medium">info@utkarshglobalfoundation.org</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                onClick={handleGetInTouch}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all hover:shadow-lg hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
</section>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            <span className="font-semibold text-green-600">Join the movement.</span> Every action counts in our journey towards a sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}