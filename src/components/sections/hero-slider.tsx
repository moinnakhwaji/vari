import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/constants";
import video from "../../assets/video.mp4";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const allSlides = [
    {
      id: 'video-slide',
      type: 'video',
      title: 'Presenting ! Utkarsh Environment Wari 2025',
      subtitle: 'Together, Let us Make a Difference!',
      source: video
    },
    ...heroSlides.map(slide => ({ ...slide, type: 'image' }))
  ];

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === allSlides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? allSlides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index:any) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <section id="home" className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      {allSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Video Slide */}
          {slide.type === 'video' ? (
            <div className="relative w-full h-full">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                     //@ts-ignore
                src={slide?.source}
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Stronger dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50 z-10" />
              
              {/* Text overlay with higher z-index */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-16 md:pt-20 lg:pt-40 text-center px-4 pb-4">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500 mb-4 animate-fadeIn drop-shadow-2xl shadow-black">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white max-w-3xl animate-fadeIn animation-delay-100 drop-shadow-2xl shadow-black font-medium">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ) : (
            /* Image Slide */
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                //@ts-ignore
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/20 z-10" />
              
              {/* Text overlay for image slides */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-16 md:pt-20 lg:pt-40 text-center px-4 pb-4">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500 mb-4 animate-fadeIn drop-shadow-2xl shadow-black">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white max-w-3xl animate-fadeIn animation-delay-100 drop-shadow-2xl shadow-black font-medium">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-30"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-30"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
        {allSlides.map((_, index) => (
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
  );
}