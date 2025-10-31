// src/components/Portfolio.tsx (UPDATED)

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Play, Volume2, ExternalLink, Headset, Mic2 } from "lucide-react"; // Added Mic2 for MC Events
import { Button } from "@/components/ui/button";
import mediaWorkImage from "@/assets/m-1.jpeg"; // Used for Media Hosting
import mcEventImage from "@/assets/m-2.jpeg"; // Used for MC Events
import mediaWorkImage3 from "@/assets/m-3.jpeg"; // Used for Media Hosting
import voiceoverImage from "@/assets/z-3.jpeg";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("hosting"); // Default to 'hosting'

  // --- STATIC DATA DEFINITION (Updated) ---

  const mediaHostingWork = [
    {
      title: "Man Yashenfal",
      type: "EBS TV Show Host",
      thumbnail: mediaWorkImage,
      link: "https://www.youtube.com/watch?v=7r3SX21JRIA",
    },
    {
      title: "Cultural Exchange Series",
      type: "TV Documentary Host",
      thumbnail: mediaWorkImage3,
      link: "https://www.youtube.com/watch?v=y6s0h2DSAiQ",
    },
    {
      title: "Cultural Exchange Series",
      type: "TV Documentary Host",
      thumbnail: mediaWorkImage3,
      link: "https://www.youtube.com/watch?v=y6s0h2DSAiQ",
    },
    // Add more hosting work here
  ];

  const mcEventsWork = [
    {
      title: "2023 Tech Summit",
      type: "Master of Ceremonies",
      thumbnail: mcEventImage, // Using m-2.jpeg for events
      link: "#",
    },
    {
      title: "Annual Gala Dinner",
      type: "Event Moderator",
      thumbnail: mcEventImage,
      link: "#",
    },
    {
      title: "Cultural Exchange Series",
      type: "TV Documentary Host",
      thumbnail: mcEventImage,
      link: "#",
    },
    // Add more MC work here
  ];

  const voiceoverSamples = [
    {
      title: "Corporate Presentation",
      client: "Tech Solutions Inc.",
      thumbnail: voiceoverImage,
      audioUrl: "#",
    },
    {
      title: "Commercial Advertisement",
      client: "National Brand",
      thumbnail: voiceoverImage,
      audioUrl: "#",
    },
    {
      title: "Documentary Narration",
      client: "Production Studio",
      thumbnail: voiceoverImage,
      audioUrl: "#",
    },
  ];

  // --- COMPONENT RENDER ---

  const renderPortfolioCard = (item, type) => (
    <Card
      key={item.title}
      className="overflow-hidden group hover:shadow-glow transition-all bg-card border-secondary/20"
    >
      <a
        href={item.link || item.audioUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={item.thumbnail}
            alt={`${type} work thumbnail for ${item.title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            {type === "Voice-Over" ? (
              <Headset className="w-10 h-10 text-primary" />
            ) : (
              <Play className="w-10 h-10 text-primary" />
            )}
          </div>
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {item.type || `Client: ${item.client}`}
        </p>
        <Button asChild variant="secondary" className="w-full text-base">
          <a
            href={item.link || item.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {type === "Voice-Over" ? "Listen Sample" : "Watch Project"}
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </Card>
  );

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="text-primary">Professional Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Explore my work across television hosting, authoritative voice-over,
            and live event moderation.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* TabsList: Now has 3 tabs (Hosting, MC Events, Voice-Over) */}
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 bg-card border border-primary/20 h-auto p-1 rounded-lg">
            <TabsTrigger
              value="hosting"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md transition-all font-semibold"
            >
              <Play className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Media Hosting</span>
              <span className="sm:hidden">Hosting</span>
            </TabsTrigger>
            <TabsTrigger
              value="mc-events"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md transition-all font-semibold"
            >
              <Mic2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">MC Events</span>
              <span className="sm:hidden">Events</span>
            </TabsTrigger>
            <TabsTrigger
              value="voiceover"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md transition-all font-semibold"
            >
              <Headset className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Voice-Over</span>
              <span className="sm:hidden">Voice</span>
            </TabsTrigger>
          </TabsList>

          {/* 1. MEDIA HOSTING Content */}
          <TabsContent value="hosting" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaHostingWork.map((item) =>
                renderPortfolioCard(item, "Media Hosting")
              )}
            </div>
          </TabsContent>

          {/* 2. MC EVENTS Content */}
          <TabsContent value="mc-events" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mcEventsWork.map((item) =>
                renderPortfolioCard(item, "MC Events")
              )}
            </div>
          </TabsContent>

          {/* 3. VOICE-OVER Content */}
          <TabsContent value="voiceover" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {voiceoverSamples.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-lg transition-all bg-card border-secondary/20"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Headset className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-serif font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Client: {item.client}
                    </p>

                    {/* Simple Audio Player Placeholder */}
                    <div className="w-full h-12 bg-secondary/10 rounded-full flex items-center p-3 mt-4 border border-secondary/20">
                      <Button
                        variant="default"
                        size="icon"
                        className="w-8 h-8 flex-shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />{" "}
                        {/* Changed to Volume2 for audio context */}
                      </Button>
                      <div className="flex-grow h-1 bg-primary/30 mx-3 rounded-full relative">
                        <div
                          className="absolute top-0 left-0 h-full bg-primary"
                          style={{ width: "40%" }}
                        ></div>
                        <div className="absolute right-[60%] top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-md"></div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        0:45 / 1:30
                      </span>
                    </div>

                    <p className="mt-4 text-xs text-secondary/70">
                      Click{" "}
                      <span className="font-semibold text-primary">Play</span>{" "}
                      to hear the professional tone and delivery.
                    </p>
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
