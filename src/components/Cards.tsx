import { useState, useEffect, useRef } from 'react';
import { TreePine, Users, Award, MapPin } from 'lucide-react';

const WariCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: TreePine, number: "50K+", label: "Trees Planted", color: "text-green-600" },
    { icon: Users, number: "10K+", label: "Pilgrims Reached", color: "text-blue-600" },
    { icon: Award, number: "25+", label: "Awards Won", color: "text-purple-600" },
    { icon: MapPin, number: "200+", label: "Locations Cleaned", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 p-8 flex items-center justify-center">
      <div 
        ref={cardRef}
        className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 max-w-6xl w-full ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-yellow-50/50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Utkarsh Environment Wari
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                Join us in our sacred journey of environmental conservation during the holy Wari pilgrimage. We combine devotion with ecological responsibility, creating a sustainable path for future generations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through tree plantation drives, waste management, and pilgrim awareness programs, we ensure that our spiritual journey leaves a positive impact on Mother Earth.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className={`text-center p-4 bg-gray-50 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <StatIcon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeS5b0Rzm0HviW2xJmBZIlLJIaczP7i2TrzYnuq_h8Lc5NDdA/viewform?usp=sharing&ouid=112549842481522030881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-center"
                >
                  Join Our Mission
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://d1hjkbq40fs2x4.cloudfront.net/2020-06-19/files/15925466380.jpeg')" 
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/40"></div>
              
              {/* Wari Button - Positioned on Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeS5b0Rzm0HviW2xJmBZIlLJIaczP7i2TrzYnuq_h8Lc5NDdA/viewform?usp=sharing&ouid=112549842481522030881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-110 group block ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <TreePine className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-gray-800">Sacred Wari</div>
                      <div className="text-sm text-gray-600">Environmental Journey</div>
                    </div>
                  </div>
                </a>
              </div>
              
              {/* Floating Badge */}
              <div className={`absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
              >
                <span className="text-sm font-semibold">
                  🌱 Eco-Pilgrimage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WariCard;