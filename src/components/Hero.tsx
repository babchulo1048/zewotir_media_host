import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Zewotir D. Alemu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Media Professional
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Zewotir D. Alemu
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
            TV Host • Voice-Over Artist • Sketch Artist
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Bringing stories to life through broadcast media, voice performance, and visual art. 
            Over a decade of experience in engaging audiences across multiple creative disciplines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="bg-gradient-accent hover:shadow-glow transition-all text-base sm:text-lg px-8 py-6"
            >
              <Play className="mr-2" size={20} />
              Watch My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/30 hover:bg-primary/10 text-base sm:text-lg px-8 py-6"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
