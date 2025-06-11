import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-xl font-bold">Utkarsh Wari</span>
            </div>
            <p className="text-gray-300 text-sm">
              Supporting environmental awareness through the traditional Pandharpur Wari pilgrimage. Join us in making a difference for our planet.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-500 text-sm">About Us</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-green-500 text-sm">Events</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-green-500 text-sm">Gallery</a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-300 hover:text-green-500 text-sm">Volunteer</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-gray-300 text-sm">info@utkarshglobalfoundation.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-green-500" />
                <span className="text-gray-300 text-sm">Bhandup(w), Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Donate Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support Our Cause</h3>
            <p className="text-gray-300 text-sm">Your contribution helps us spread environmental awareness during the Wari pilgrimage.</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Donate Now
            </Button>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/Utkarsh8910/" className="text-gray-300 hover:text-green-500">
                <Facebook className="h-5 w-5" />
              </a>
            
              <a href="https://www.instagram.com/ugf.in/?hl=en" className="text-gray-300 hover:text-green-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@utkarsh.global.foundation" className="text-gray-300 hover:text-green-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Utkarsh Environment Wari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}