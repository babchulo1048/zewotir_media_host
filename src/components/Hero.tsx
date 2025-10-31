// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Play, Download } from "lucide-react";
// import heroSmall from "@/assets/z-2.jpeg";
// import heroLarge from "@/assets/s-4.jpeg";

// const Hero = () => {
//   const [imageSrc, setImageSrc] = useState(heroSmall);

//   useEffect(() => {
//     const handleResize = () => {
//       setImageSrc(window.innerWidth >= 1024 ? heroLarge : heroSmall);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={imageSrc}
//           alt="Zewotir D. Alemu"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="max-w-3xl animate-fade-in-up">
//           <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
//             <span className="text-primary text-sm font-semibold tracking-wide uppercase">
//               Media Professional
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             Zewotir D. Alemu
//           </h1>

//           <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
//             EBS TV Host | Former Radio host | MC | Moderator | Voiceover artist
//             | TV news anchor
//           </p>

//           <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
//             Bringing stories to life through broadcast media, voice performance,
//             and visual art. Over a decade of experience in engaging audiences
//             across multiple creative disciplines.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button
//               size="lg"
//               onClick={() => scrollToSection("portfolio")}
//               className="bg-gradient-accent hover:shadow-glow transition-all text-base sm:text-lg px-8 py-6"
//             >
//               <Play className="mr-2" size={20} />
//               Watch My Work
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={() => scrollToSection("contact")}
//               className="border-primary/30 hover:bg-primary/10 text-base sm:text-lg px-8 py-6"
//             >
//               <Download className="mr-2" size={20} />
//               Download Resume
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
//         <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
//           <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import heroSmall from "@/assets/z-2.jpeg";
import heroLarge from "@/assets/s-4.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState(heroSmall);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      // Use the large image only if we are using the two-column layout (lg breakpoint)
      setImageSrc(window.innerWidth >= 1024 ? heroLarge : heroSmall);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      // Removed relative min-h-screen, will use padding/flex to define height
      className="min-h-screen flex items-center bg-white" // Explicitly setting a default background color (light/white) for clarity
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        {/* Main Grid/Flex Container for Split Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Content (Left Column) */}
          <div className="lg:w-1/2 max-w-3xl animate-fade-in-up lg:pr-12 py-10 lg:py-0 order-2 lg:order-1">
            {/* The text colors should now be dark since the background is light */}
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Media Professional
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Zewotir D. Alemu
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-light text-gray-700">
              EBS TV Host | Former Radio host | MC | Moderator | Voiceover
              artist | TV news anchor
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed text-gray-600">
              Bringing stories to life through broadcast media, voice
              performance, and visual art. Over a decade of experience in
              engaging audiences across multiple creative disciplines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/portfolio")}
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

          {/* Image (Right Column) */}
          {/* Order-1 on desktop so it appears before the text in the code, but order-2 on mobile */}
          <div className="lg:w-1/2 w-full flex justify-center items-center lg:order-2 order-1">
            <img
              src={imageSrc}
              alt="Zewotir D. Alemu"
              // Adjusted styling for the image element itself
              className="w-full h-auto object-cover max-h-[80vh] lg:rounded-xl shadow-2xl"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }} // Example: Adding a slight polygon shape for a modern look
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Moved outside the split layout, ensuring it's at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
