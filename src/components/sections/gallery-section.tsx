import { useState } from "react";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/constants";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Glimpses from our previous campaigns and events showcasing our environmental initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-80 transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View Full Gallery
          </Button>
        </div> */}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </Button>
            
            <div className="max-w-4xl w-full max-h-full">
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src}
                alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                className="max-h-[85vh] max-w-full mx-auto object-contain"
              />
              <p className="text-white text-center mt-4">
                {galleryImages.find((img) => img.id === selectedImage)?.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}