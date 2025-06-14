import { Leaf, Globe, Users, TreePine, Droplets, Recycle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from 'react';
import WariCard from "../Cards";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([false, false, false]);
  const [impactVisible, setImpactVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const impactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          if (entry.target === impactRef.current && entry.isIntersecting) {
            setImpactVisible(true);
          }
          // Handle card animations
          cardsRef.current.forEach((card, index) => {
            if (entry.target === card && entry.isIntersecting) {
              setTimeout(() => {
                setCardVisibility(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            }
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (impactRef.current) observer.observe(impactRef.current);
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (impactRef.current) observer.unobserve(impactRef.current);
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const cards = [
    {
      icon: Leaf,
      title: "Our Mission",
      color: "green",
      gradient: "from-green-400 to-emerald-500",
      bgColor: "bg-green-100 dark:bg-green-900",
      borderColor: "border-t-green-600",
      textColor: "text-green-600",
      content: "Utkarsh Environment Wari combines the spiritual tradition of the annual Pandharpur Wari with environmental awareness. Working in collaboration with government bodies, we aim to create lasting impact through education and action during this significant pilgrimage."
    },
    {
      icon: Globe,
      title: "Campaign Goals",
      color: "blue",
      gradient: "from-orange-400 to-cyan-500",
      bgColor: "bg-orange-100 dark:bg-orange-900",
      borderColor: "border-t-orange-400",
      textColor: "text-blue-600",
      content: "Our campaign focuses on promoting plastic-free pilgrimage routes, tree plantation, water conservation, and sustainable practices. Through the Wari, we reach thousands of pilgrims and local communities, spreading awareness about critical environmental issues."
    },
    {
      icon: Users,
      title: "Community Impact",
      color: "purple",
      gradient: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      borderColor: "border-t-orange-300",
      textColor: "text-purple-600",
      content: "We engage with local communities, pilgrims, and volunteers to create a network of environmental advocates. Our collaborative approach ensures sustainable change that extends beyond the pilgrimage period."
    }
  ];

  const stats = [
    { icon: TreePine, number: "10,000+", label: "Trees Planted", color: "text-green-600" },
    { icon: Droplets, number: "50+", label: "Water Bodies Cleaned", color: "text-blue-600" },
    { icon: Recycle, number: "25", label: "Cleanup Drives", color: "text-purple-600" },
    { icon: Users, number: "100,000+", label: "People Reached", color: "text-orange-600" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30 dark:from-gray-900 dark:via-green-950/30 dark:to-blue-950/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-green-700 to-orange-600 bg-clip-text text-transparent">
  About Utkarsh Environment Wari
</h2>

            <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
              A collaborative effort to promote environmental awareness during the traditional Pandharpur Wari pilgrimage.
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="relative mt-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cards.map((card:any, index:any) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                //@ts-ignore
                ref={el => cardsRef.current[index] = el}
                className={`transform transition-all duration-800 ${
                  cardVisibility[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
              >
                <Card className={`relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group h-full ${card.borderColor} border-t-4`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/50 to-transparent dark:from-transparent dark:via-gray-800/50 dark:to-transparent"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-4 right-6 w-2 h-2 rounded-full opacity-60 animate-pulse bg-${card.color}-400`}></div>
                    <div className={`absolute bottom-6 left-4 w-1 h-1 rounded-full opacity-40 animate-pulse delay-500 bg-${card.color}-300`}></div>
                  </div>

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:${card.textColor} transition-colors duration-300`}>
                          {card.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <WariCard/>
        
   {/* Impact Section */}
        <div 
          ref={impactRef}
          className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${
            impactVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 dark:from-green-950/30 dark:via-transparent dark:to-blue-950/30"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Our Impact
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Since our inception, Utkarsh Environment Wari has made significant strides in environmental conservation and awareness. We've planted thousands of trees, conducted cleanup drives along the pilgrimage route, and educated countless pilgrims about sustainable practices.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Working with local communities and government bodies, we've implemented lasting changes that continue to benefit both the environment and the communities along the Wari route.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div 
                        key={index}
                        className={`text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl transform transition-all duration-500 delay-${index * 100} ${
                          impactVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                      >
                        <StatIcon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202306/pic_1_0.jpeg?VersionId=2u.7yopL0Ms1vdoEj0XiwyTc6kceICa0')" 
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>
                
                {/* Floating Badge */}
                <div className={`absolute bottom-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform transition-all duration-700 delay-500 ${
                  impactVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    Environmental Action
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}