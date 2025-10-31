// src/pages/SketchArtPage.tsx (New Component)

import { Image } from "lucide-react";
import { Card } from "@/components/ui/card";
// Assuming you have a standard page layout component (Header, Footer, Container)
// import { PageLayout } from "@/components/Layout";

// Import static assets
import sketch1 from "@/assets/sketch-1.jpg";
import sketch2 from "@/assets/sketch-2.jpg";
import sketch3 from "@/assets/sketch-3.jpg";

const artGallery = [
  { title: "Portrait Series", medium: "Charcoal", image: sketch1 },
  { title: "Landscape Collection", medium: "Pencil", image: sketch2 },
  { title: "Abstract Expressions", medium: "Mixed Media", image: sketch3 },
  // Add more art pieces here
];

const SketchArtPage = () => {
  return (
    // <PageLayout> // Uncomment if you have a wrapper component
    <section className="py-20 md:py-32 bg-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
            Visual <span className="text-primary">Art Gallery</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            A creative exploration through pencil, charcoal, and mixed media.
            <br />
            (This page is now separate from the main professional portfolio)
          </p>
        </div>

        {/* Gallery Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artGallery.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all bg-card border-primary/20"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={`Sketch art titled ${item.title} using ${item.medium}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Image className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Medium: {item.medium}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    // </PageLayout>
  );
};

export default SketchArtPage;
