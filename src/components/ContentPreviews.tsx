// src/components/ContentPreviews.tsx (UPDATED for Elegance and Professionalism)

import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  PencilLine,
  ChevronRight,
  Image as ImageIcon,
  Briefcase,
} from "lucide-react"; // Import Image and Briefcase for better icon choices

const previewLinks = [
  {
    title: "Portfolio / Works",
    description:
      "Showcase of my best media hosting, MC events, and voice work.",
    icon: Briefcase, // Changed to Briefcase for a more professional 'work' focus
    color: "text-primary",
    link: "/portfolio",
  },
  {
    title: "Blog / Insights",
    description:
      "Reflections on PR strategy, media, communication, and growth.",
    icon: PencilLine,
    color: "text-blue-600", // Using a solid blue for secondary action/clarity
    link: "/blog",
  },
  {
    title: "Sketch Art Gallery",
    description:
      "A clean grid gallery of personal art—adding warmth and personality.",
    icon: ImageIcon, // Changed to Image/ImageIcon for visual art context
    color: "text-green-600", // Using a distinct color for variety (can be brand-maroon/tertiary)
    link: "/art",
  },
];

const ContentPreviews = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {previewLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                // 💡 Professional/Elegant Updates:
                // Increased padding, added mild shadow, and replaced scale with a strong hover shadow and uplift.
                className="p-10 bg-card border border-border/70 shadow-lg 
                           hover:shadow-2xl hover:shadow-primary/20 
                           transition-all duration-300 transform translate-y-0 hover:-translate-y-1"
              >
                <Link to={item.link} className="block group">
                  <div className="flex items-center justify-start">
                    <Icon
                      className={`w-10 h-10 mr-4 ${item.color} group-hover:text-primary transition-colors`}
                    />
                    <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors text-left">
                      {item.title}
                    </h3>
                  </div>

                  <hr className="my-5 border-t border-border/50" />

                  <p className="text-muted-foreground text-left mb-6 text-base">
                    {item.description}
                  </p>

                  <span className="text-primary font-semibold text-base flex items-center justify-start group-hover:underline">
                    Explore Now
                    <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentPreviews;
