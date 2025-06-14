import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import logo from "../assets/logo6.png"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-black",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm text-black dark:bg-background/90"
          : "bg-white/90 backdrop-blur-sm shadow-sm text-black dark:bg-background/90"
      )}
    >
      <div className="container mx-auto px-4 text-black">
        <div className="flex h-20 items-center justify-between">
          {/* Left Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt={"logo"}
              className="w-16 h-16 object-contain"
            />
            <span className="ml-2 text-lg font-bold">Utkarsh Environment Wari</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-black">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-green-600 text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Logo/Donate Button */}
          <div className="hidden md:flex items-center">
              <a href="#donation">
            <Button variant="default" className="bg-green-600 hover:bg-green-700">
              Donate Now
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-black hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
                <a href="#donation">
              <Button
                variant="default"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Donate Now
              </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}