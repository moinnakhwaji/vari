import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutSection } from "@/components/sections/about-section";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { VolunteerSection } from "@/components/sections/volunteer-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <StatsSection />
      <EventsSection />
      <GallerySection />
      <VolunteerSection />
    </>
  );
}