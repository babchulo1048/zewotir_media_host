import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Play, Volume2, Image } from "lucide-react";
import mediaWorkImage from "@/assets/media-work.jpg";
import voiceoverImage from "@/assets/voiceover.jpg";
import sketchArtImage from "@/assets/sketch-art.jpg";
import sketch1 from "@/assets/sketch-1.jpg";
import sketch2 from "@/assets/sketch-2.jpg";
import sketch3 from "@/assets/sketch-3.jpg";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("media");

  const mediaWork = [
    { title: "Prime Time News Hour", type: "TV Show", thumbnail: mediaWorkImage },
    { title: "Cultural Exchange Series", type: "Documentary", thumbnail: mediaWorkImage },
    { title: "Morning Show Feature", type: "Talk Show", thumbnail: mediaWorkImage },
  ];

  const voiceoverSamples = [
    { title: "Corporate Presentation", client: "Tech Solutions Inc.", thumbnail: voiceoverImage },
    { title: "Commercial Advertisement", client: "National Brand", thumbnail: voiceoverImage },
    { title: "Documentary Narration", client: "Production Studio", thumbnail: voiceoverImage },
  ];

  const artGallery = [
    { title: "Portrait Series", medium: "Charcoal", image: sketch1 },
    { title: "Landscape Collection", medium: "Pencil", image: sketch2 },
    { title: "Abstract Expressions", medium: "Mixed Media", image: sketch3 },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my work across television, voice-over, and visual arts
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-secondary h-auto p-1">
            <TabsTrigger value="media" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <Play className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">TV & Media</span>
              <span className="sm:hidden">Media</span>
            </TabsTrigger>
            <TabsTrigger value="voiceover" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <Volume2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Voice-Over</span>
              <span className="sm:hidden">Voice</span>
            </TabsTrigger>
            <TabsTrigger value="art" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <Image className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Sketch Art</span>
              <span className="sm:hidden">Art</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="media" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaWork.map((item, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-glow transition-all bg-card border-primary/20">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.type}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="voiceover" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voiceoverSamples.map((item, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-glow transition-all bg-card border-primary/20">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Volume2 className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.client}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="art" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artGallery.map((item, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-glow transition-all bg-card border-primary/20">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Image className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.medium}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
