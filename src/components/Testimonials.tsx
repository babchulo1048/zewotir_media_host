// src/components/Testimonials.tsx

import { Quote, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

// ✅ Import your logos
import ebsLogo from "@/assets/ebs.jpeg";
import globalTechLogo from "@/assets/global.jpeg";
import addisEventsLogo from "@/assets/addis.png";

const testimonialData = [
  {
    quote:
      "Zewotir is not just a host; he's a strategic communicator who deeply understands audience engagement. A true professional.",
    name: "Dr. Elias K.",
    title: "Media Producer, EBS",
    logo: ebsLogo,
  },
  {
    quote:
      "His voice work elevated our corporate campaign. Authority, warmth, and clarity—all delivered flawlessly.",
    name: "Aisha M.",
    title: "Marketing Director, Global Tech",
    logo: globalTechLogo,
  },
  {
    quote:
      "A charismatic presence and an incredible ability to connect with people. He commands the stage.",
    name: "Lulseged T.",
    title: "Event Organizer, Addis Events",
    logo: addisEventsLogo,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Endorsed by <span className="text-secondary">Industry Leaders</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map((t, index) => (
            <Card
              key={index}
              className="p-8 border-secondary/20 bg-card hover:shadow-lg transition-shadow duration-300 animate-fade-in-up flex flex-col justify-between"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* ✅ Logo Section */}
              <div className="flex justify-center mb-6">
                <img
                  src={t.logo}
                  alt={`${t.title} logo`}
                  className="w-20 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-lg italic font-serif text-foreground mb-6 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="text-right">
                <p className="font-bold text-secondary text-base">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.title}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <a
            href="/testimonials"
            className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center justify-center"
          >
            View All Endorsements
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
