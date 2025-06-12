import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from 'react';
import image10 from '../../assets/image16.jpg';

export function Aboutwari() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  console.log(isVisible)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && sectionRef.current) {
        //@ts-ignore
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress based on element position
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Start animation when element is 80% visible from bottom
        const startOffset = windowHeight * 0.8;
        const endOffset = -elementHeight * 0.2;
        
        let progress = 0;
        
        if (elementTop <= startOffset && elementTop >= endOffset) {
          progress = (startOffset - elementTop) / (startOffset - endOffset);
          progress = Math.max(0, Math.min(1, progress));
        } else if (elementTop < endOffset) {
          progress = 1;
        }
        
        setScrollProgress(progress);
        setIsVisible(progress > 0.1);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Easing function for smooth animation
  const easeOutCubic = (t:any) => 1 - Math.pow(1 - t, 3);
  
  // Calculate transform values based on scroll progress
  const imageTransform = () => {
    const easedProgress = easeOutCubic(scrollProgress);
    const translateX = (1 - easedProgress) * -100; // Start from -100% (left)
    const opacity = easedProgress;
    const scale = 0.8 + (easedProgress * 0.2); // Scale from 0.8 to 1
    
    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity: opacity,
    };
  };

  const headerTransform = () => {
    const easedProgress = easeOutCubic(Math.max(0, scrollProgress - 0.1));
    const translateY = (1 - easedProgress) * 30;
    const opacity = easedProgress;
    
    return {
      transform: `translateY(${translateY}px)`,
      opacity: opacity,
    };
  };

  const cardTransform = () => {
    const easedProgress = easeOutCubic(Math.max(0, scrollProgress - 0.3));
    const translateY = (1 - easedProgress) * 50;
    const opacity = easedProgress;
    
    return {
      transform: `translateY(${translateY}px)`,
      opacity: opacity,
    };
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-50 dark:from-gray-900 dark:via-amber-950/30 dark:to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Section with Scroll-based Animation */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent transition-all duration-300 ease-out"
            style={headerTransform()}
          >
            About Utkarsh Dindi 2025
          </h2>
          
          {/* Enhanced Image Container with Smooth Left-to-Right Animation */}
          <div className="relative mx-auto max-w-4xl">
            <div 
              ref={imageRef}
              className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ease-out"
              style={imageTransform()}
            >
              <img 
                src={image10} 
                alt="Utkarsh Dindi 2025 Journey" 
                className={`w-full h-64 md:h-80 lg:h-96 object-cover transition-all duration-700 ${
                  imageLoaded ? 'scale-100 blur-0' : 'scale-110 blur-sm'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
            </div>
            
            {/* Floating Badge */}
            <div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg border border-amber-200 dark:border-amber-800 transition-all duration-300 ease-out"
              style={{
                transform: `translateX(-50%) translateY(${(1 - easeOutCubic(Math.max(0, scrollProgress - 0.2))) * 20}px)`,
                opacity: easeOutCubic(Math.max(0, scrollProgress - 0.2))
              }}
            >
              <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                Journey of Awareness
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Card with Scroll-based Animation */}
        <div 
          className="max-w-4xl mx-auto transition-all duration-300 ease-out"
          style={cardTransform()}
        >
          <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"></div>
            
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 right-8 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-12 right-16 w-1 h-1 bg-orange-400 rounded-full opacity-40 animate-pulse delay-300"></div>
              <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-50 animate-pulse delay-700"></div>
            </div>

            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    Awareness Dindi 2025
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full">
                      Environmental Focus
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                      Community Driven
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  The Awareness Dindi is a transformative movement within the Wari tradition that champions environmental consciousness and community engagement. This sacred journey serves as a powerful platform for spreading awareness about ecological preservation and sustainable living.
                </p>
                
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">250+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">KM Journey</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">15</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Towns & Villages</div>
                  </div>
                  <div className="text-center col-span-2 md:col-span-1">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">10000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Participants</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 rounded-xl border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 font-medium text-center">
                    Join us in this meaningful journey of environmental awareness and spiritual growth
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}