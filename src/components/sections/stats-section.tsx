import  { useState, useEffect, useRef } from 'react';

// Utility function to combine class names
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Campaign stats data with animation targets
const campaignStats = [
  { id: 1, value: "10,000+", target: 10000, suffix: "+", label: "Participants" },
  { id: 2, value: "250 km", target: 250, suffix: " km", label: "Journey Distance" },
  { id: 3, value: "15", target: 15, suffix: "", label: "Towns Covered" },
  { id: 4, value: "5,000+", target: 5000, suffix: "+", label: "Trees Planted" },
];

// Custom hook for counting animation
function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false): number {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, shouldStart]);
  
  return count;
}

// Individual stat component with intersection observer
interface AnimatedStatProps {
  stat: {
    id: number;
    value: string;
    target: number;
    suffix: string;
    label: string;
  };
  index: number;
}

function AnimatedStat({ stat, index }: AnimatedStatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.target, 2000 + index * 200, isVisible);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [isVisible]);
  
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "text-center text-white relative",
        // Add right border for all except last in row
        index < campaignStats.length - 1 && "md:border-r md:border-white/30",
        // Add right border for first item in mobile (2 columns)
        index % 2 === 0 && index < campaignStats.length - 1 && "border-r border-white/30 md:border-r-0",
        // Re-add border for md+ screens appropriately
        index === 1 && "md:border-r md:border-white/30"
      )}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 transition-all duration-300 hover:scale-110">
        {formatNumber(count)}{stat.suffix}
      </div>
      <div className="text-sm md:text-base opacity-80 font-medium">
        {stat.label}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {campaignStats.map((stat, index) => (
            <AnimatedStat key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;