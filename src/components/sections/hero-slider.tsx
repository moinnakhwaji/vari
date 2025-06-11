import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/constants";
import image4 from '../../assets/popup.jpg';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPopup, setShowPopup] = useState(true); // Popup shows by default

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <>
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
              onClick={closePopup}
            >
              <X className="h-5 w-5" />
            </Button>
            
            {/* Image */}
            <img
              src={image4}
              alt="Popup Image"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Hero Slider */}
      <section id="home" className="relative w-full h-[80vh] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-500",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="" />
            
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white max-w-3xl animate-fadeIn animation-delay-100">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-200">
                {/* <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Donate Now
                </Button> */}
                {/* <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white  hover:bg-white/20 text-black"
                >
                  Learn More
                </Button> */}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-10"
          onClick={goToPrevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-10"
          onClick={goToNextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentSlide === index
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}