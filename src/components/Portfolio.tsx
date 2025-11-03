import { useState, useEffect, useCallback, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  Play,
  Volume2,
  ExternalLink,
  Headset,
  BookOpen,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Define a type for your portfolio item for better type safety
interface PortfolioAsset {
  id: number;
  title: string;
  link_url: string; // Corresponds to link/audioUrl
  thumbnail_url: string; // Corresponds to thumbnail
  description?: string;
  details: {
    type: string;
    client?: string;
  };
}

// const API_BASE_URL = "http://localhost:3001/api/v1/portfolio/assets";
const API_BASE_URL =
  "https://zewotir-media-host-backend.onrender.com/api/v1/portfolio/assets";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("media");
  const [mediaWork, setMediaWork] = useState<PortfolioAsset[]>([]);
  const [artProjects, setArtProjects] = useState<PortfolioAsset[]>([]);
  const [voiceoverSamples, setVoiceoverSamples] = useState<PortfolioAsset[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- API FETCH LOGIC (kept the same) ---
  const fetchAssets = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const mediaPromise = fetch(`${API_BASE_URL}/media`).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch Media assets.");
      return res.json();
    });
    const voiceoverPromise = fetch(`${API_BASE_URL}/voiceover`).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch Voice-Over assets.");
      return res.json();
    });
    const artPromise = fetch(`${API_BASE_URL}/art`).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch Art assets.");
      return res.json();
    });

    try {
      const [mediaAssets, voiceoverAssets, artAssets] = await Promise.all([
        mediaPromise,
        voiceoverPromise,
        artPromise,
      ]);

      setMediaWork(mediaAssets);
      setVoiceoverSamples(voiceoverAssets);
      setArtProjects(artAssets);
    } catch (err: any) {
      console.error("API Fetch Error:", err);
      setError(
        `Could not load portfolio data. Please check the API server is running on ${API_BASE_URL}. (${err.message})`
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets]);

  // --- Helper Component for Voiceover Playback ---
  const VoiceoverCardPlayer: React.FC<{ item: PortfolioAsset }> = ({
    item,
  }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // 0 to 100
    const [duration, setDuration] = useState("0:00");
    const [time, setTime] = useState("0:00");

    // Check if the audio source URL is valid/present
    const isValidAudio = item.link_url && item.link_url.startsWith("http");

    const formatTime = (seconds: number) => {
      if (isNaN(seconds) || seconds < 0) return "0:00";
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    // Effects for managing audio state and event listeners
    useEffect(() => {
      const audio = audioRef.current;
      if (!audio || !isValidAudio) return;

      const setAudioData = () => {
        setDuration(formatTime(audio.duration));
      };

      const updateTime = () => {
        setTime(formatTime(audio.currentTime));
        setProgress((audio.currentTime / audio.duration) * 100);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        audio.currentTime = 0; // Reset
        setProgress(0);
      };

      // Event listeners for controlling UI state
      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("ended", handleEnded);
      };
    }, [isValidAudio]);

    // Play/Pause toggle handler
    const togglePlay = () => {
      if (!audioRef.current || !isValidAudio) return;

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Use a catch block for promises returned by play()
        audioRef.current
          .play()
          .catch((e) => console.error("Playback failed:", e));
      }
      setIsPlaying(!isPlaying);
    };

    // Seek functionality
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!audioRef.current || !isValidAudio) return;

      // Calculate the new time based on click position
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * audioRef.current.duration;

      audioRef.current.currentTime = newTime;
      setProgress((newTime / audioRef.current.duration) * 100);
    };

    return (
      <div
        className={`w-full h-12 rounded-full flex items-center p-3 mt-4 border transition-colors ${
          isValidAudio
            ? "bg-primary/10 border-primary/40"
            : "bg-gray-100 border-gray-300 opacity-70"
        }`}
      >
        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={isValidAudio ? item.link_url : undefined}
          preload="metadata"
        />

        {/* Play/Pause Button */}
        <Button
          variant="default"
          size="icon"
          className={`w-8 h-8 flex-shrink-0 transition-opacity ${
            !isValidAudio ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={togglePlay}
          disabled={!isValidAudio}
          title={
            isValidAudio
              ? isPlaying
                ? "Pause Audio"
                : "Play Audio"
              : "Audio file unavailable"
          }
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>

        {/* Progress Bar */}
        <div
          className="flex-grow h-2 bg-primary/30 mx-3 rounded-full relative"
          // Only allow seeking if valid audio is present
          onClick={isValidAudio ? handleSeek : undefined}
        >
          {/* Progress fill */}
          <div
            className={`absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-100 ${
              isValidAudio ? "cursor-pointer" : ""
            }`}
            style={{ width: `${progress}%` }}
          ></div>
          {/* Progress scrubber */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg transition-all duration-100"
            style={{ left: `calc(${progress}% - 8px)` }}
          ></div>
        </div>

        {/* Time Display */}
        <span className="text-xs font-mono text-primary-foreground/80 dark:text-muted-foreground">
          {time} / {duration}
        </span>
      </div>
    );
  };
  // --- END VoiceoverCardPlayer Component ---

  // --- GENERIC CARD RENDERER (for Media and Art) ---

  const renderPortfolioCard = (item: PortfolioAsset, type: string) => (
    <Card
      key={item.id}
      className="overflow-hidden group hover:shadow-glow transition-all bg-card border-secondary/20"
    >
      <a href={item.link_url} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={item.thumbnail_url}
            alt={`${type} work thumbnail for ${item.title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            {type === "Media Work" ? (
              <Play className="w-10 h-10 text-primary" />
            ) : (
              <BookOpen className="w-10 h-10 text-primary" />
            )}
          </div>
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {item.details.type || type}
        </p>
        <Button asChild variant="secondary" className="w-full text-base">
          <a href={item.link_url} target="_blank" rel="noopener noreferrer">
            {type === "Media Work" ? "Watch Project" : "View Project"}
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </Card>
  );

  // --- VOICEOVER CARD RENDERER (WITH THUMBNAIL AND INLINE PLAYER) ---

  const renderVoiceoverCard = (item: PortfolioAsset) => (
    <Card
      key={item.id}
      className="overflow-hidden group hover:shadow-glow transition-all bg-card border-secondary/20"
    >
      {/* Removed the <a> wrapper so the thumbnail doesn't automatically link out */}
      <div className="relative aspect-video overflow-hidden">
        <img
          // **NEW: Using thumbnail_url here**
          src={item.thumbnail_url}
          alt={`Voice-Over thumbnail for ${item.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Headset className="w-10 h-10 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-2">
          <Headset className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-serif font-bold text-gray-800">
            {item.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          Client: {item.details.client || "N/A"}
        </p>

        {/* REPLACED with the functional component */}
        <VoiceoverCardPlayer item={item} />

        <p className="mt-4 text-xs text-secondary/70">
          Click the **Play** button to hear the professional tone and delivery.
        </p>
      </div>
    </Card>
  );

  // --- Render Functions for Loading/Error States and Content ---

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-20 text-xl text-primary font-semibold animate-spin-slow">
          <Loader2 className="w-6 h-6 mr-2 animate-spin" />
          Loading Portfolio...
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center py-20 text-lg text-red-500 bg-red-50 border border-red-300 rounded-lg p-6 max-w-lg mx-auto">
          <AlertTriangle className="w-8 h-8 mb-4" />
          <p className="font-bold mb-2">Data Fetch Error</p>
          <p className="text-center text-sm">{error}</p>
        </div>
      );
    }

    // Main Content
    return (
      <>
        {/* 1. MEDIA Content */}
        <TabsContent value="media" className="animate-fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaWork.length > 0 ? (
              mediaWork.map((item) => renderPortfolioCard(item, "Media Work"))
            ) : (
              <p className="col-span-3 text-center text-muted-foreground py-10">
                No Media Work projects found.
              </p>
            )}
          </div>
        </TabsContent>

        {/* 2. ART Content */}
        <TabsContent value="art" className="animate-fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artProjects.length > 0 ? (
              artProjects.map((item) =>
                renderPortfolioCard(item, "Art Project")
              )
            ) : (
              <p className="col-span-3 text-center text-muted-foreground py-10">
                No Art Projects found.
              </p>
            )}
          </div>
        </TabsContent>

        {/* 3. VOICE-OVER Content */}
        <TabsContent value="voiceover" className="animate-fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceoverSamples.length > 0 ? (
              // **UPDATED: Calling the new renderVoiceoverCard function**
              voiceoverSamples.map((item) => renderVoiceoverCard(item))
            ) : (
              <p className="col-span-3 text-center text-muted-foreground py-10">
                No Voice-Over samples found.
              </p>
            )}
          </div>
        </TabsContent>
      </>
    );
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="text-primary">Professional Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Explore my work across media, art, and professional voice-over.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 bg-card border border-primary/20 h-auto p-1 rounded-lg">
            <TabsTrigger
              value="media"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md transition-all font-semibold"
            >
              <Play className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Media Work</span>
              <span className="sm:hidden">Media</span>
            </TabsTrigger>
            <TabsTrigger
              value="art"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md transition-all font-semibold"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Art Projects</span>
              <span className="sm:hidden">Art</span>
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

          {renderContent()}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
