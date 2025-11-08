import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, LucideMail } from "lucide-react";
import heroSmall from "@/assets/z-2.png";
import heroLarge from "@/assets/z-2.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState(heroSmall);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth >= 1024 ? heroLarge : heroSmall);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* ===== Left Column (Content) – Clean, No Animation ===== */}
          <div className="lg:w-1/2 max-w-3xl lg:pr-12 py-10 lg:py-0 order-2 lg:order-1">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Media Professional
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Zewotir D. Alemu
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-normal text-gray-800">
              Ethiopian PR Strategist, TV Host & Media Personality
            </p>
            <p className="text-md sm:text-xl text-muted-foreground mb-4 font-medium text-gray-500">
              Strategic Communications & Media Expertise for Lasting Impact. I
              help organizations raise their media visibility and tell
              compelling stories that connect with audiences, strengthen brand
              reputation, and inspire meaningful engagement across media
              platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/portfolio")}
                className="bg-gradient-accent text-base sm:text-lg px-8 py-6"
              >
                <Play className="mr-2" size={20} />
                Watch My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="border-primary/30 text-base sm:text-lg px-8 py-6 text-primary-foreground"
              >
                <LucideMail className="mr-2" size={20} />
                Let's Work Together
              </Button>
            </div>
          </div>

          {/* ===== Right Column (Image) – MOBILE: Your Approved Style | DESKTOP: Your Border Code ===== */}
          <div className="lg:w-1/2 w-full flex justify-center items-center lg:order-2 order-1 relative py-10 lg:py-0">
            <div className="relative w-[85%] max-w-md lg:w-full lg:max-w-lg aspect-[4/5]">
              {/* === LARGE SCREEN: Decorative Offset Background Border (From Your Code) === */}
              <div
                className={`
                  absolute inset-0 w-full h-full
                  bg-primary/5 border-4 border-primary/10
                  rounded-xl shadow-lg
                  lg:translate-x-4 lg:-translate-y-4
                  hidden lg:block
                `}
                aria-hidden="true"
              ></div>

              {/* === IMAGE WRAPPER – Mobile & Large Screen (No Animation) === */}
              <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl border-2 border-white/50">
                <img
                  src={imageSrc}
                  alt="Zewotir D. Alemu – Ethiopian PR Strategist, TV Host, and Media Personality"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator – Static */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
